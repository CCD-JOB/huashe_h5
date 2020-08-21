import moment from 'moment';
import { getEarningRate } from '../service/coreApi';
export default {
  data () {
    return {
      activeIndex: 0,
      chartsRate: {}, // 图表所有图表
      categories: [], // 格式化后的日期时间
      seriesData: [],
      filterArr: [], // 正规的日期时间
      chart: '',
      tabsData: [
        {
          txt: '本月',
          active: true
        },
        {
          txt: '半年',
          active: false
        },
        {
          txt: '一年',
          active: false
        },
        {
          txt: '成立以来',
          active: false
        }
      ]
    };
  },
  computed: {
    nowdatestr () {
      var date = new Date();
      var year = date.getFullYear();
      var month =
        date.getMonth() + 1 > 10
          ? date.getMonth() + 1
          : '0' + (date.getMonth() + 1);
      var day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
      var nowdatestr = year + '-' + month + '-' + day;
      return nowdatestr;
    }
  },
  created () {
    this.getEarningRateFun();
  },
  methods: {
    switchTab (index) {
      this.activeIndex = index;
      this.tabsData.forEach(item => {
        item.active = false;
      });
      this.tabsData[index].active = true;
      this.getEarningRateFun(index);
    },
    initCharts (seriesData) {
      const that = this;
      var options = {
        chart: {
          // type: 'area',
          spacingLeft: 0,
          spacingRight: 4,
          spacingBottom: 0,
          style: {
            marginTop: ''
          }
        },
        title: {
          text: null
        },
        credits: {
          enabled: false
        },
        tooltip: {
          // 选中圆点提示
          formatter: function () {
            var html = `<small>${that.filterArr[0]}至${
              that.filterArr[this.x]
            }</small><br/>`;
            this.points.forEach(item => {
              html +=
                '<br /><span style="color:' +
                item.color +
                '">●</span><span>  ' +
                item.series.name +
                ':' +
                item.y +
                ' %</span>';
            });
            return html;
          },
          shared: true, // 开了这个才有points
          crosshairs: true// 显示十字准星线
        },
        xAxis: {
          endOnTick: false, // 结束于刻度线
          type: 'datetime',
          tickWidth: 0, // 刻度线长度
          tickmarkPlacement: 'on', // 刻度线的位置  on
          startOnTick: true,
          tickInterval: 1,
          crosshair: { // 十字准星线
            width: 1,
            color: 'gray',
            dashStyle: 'shortdot'
          },
          labels: {
            align: 'right', // 对齐方式
            rotation: 0, // 不旋转
            style: {
              fontSize: '.1rem'
            },
            formatter: function () {
              if (this.value === 0) {
                return `<div><span style="color: white">,----111</span>${
                  that.categories[this.value]
                }</div>`;
              } else if (this.value === that.categories.length - 1) {
                return that.categories[this.value];
              } else {
                return '';
              }
            }
          }
        },
        yAxis: {
          title: {
            text: null
          },
          startOnTick: true,
          minorGridLineWidth: 0,
          gridLineWidth: 1,
          alternateGridColor: null,
          gridLineColor: '#EEEEEE',
          labels: {
            align: 'center',
            style: {
              fontSize: '.1rem'
            },
            formatter: function () {
              if (this.value >= 0) {
                return (
                  '<span style="color: #E92137">' + this.value + '%' + '</span>'
                );
              } else {
                return (
                  '<span style="color: #49DE58">' + this.value + '%' + '</span>'
                );
              }
            }
          }
        },
        plotOptions: {
          line: {
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
                halo: {
                  // 光圈
                  size: 0
                }
              }
            },
            marker: {
              enabled: false,
              lineWidth: 0,
              radius: 2
            }
          },
          series: {
            pointPadding: 0,
            groupPadding: 0,
            pointWidth: 5,
            animation: false// 取消折线图出来时候的动画
          }
        },
        legend: {
          itemStyle: {
            color: '#333',
            fontSize: '.1rem',
            fontWeight: '500',
            lineHeight: '.1rem'
          },
          itemDistance: 30
        },
        series: [
          {
            name: '基金收益率',
            color: '#4983CE',
            zIndex: 1, // 控制显示层叠
            data: seriesData
          }
        ]
      };
      this.$nextTick(() => {
        // 初始化表格
        this.chart = this.$hc.chart('chart-box', options);
      });
    },
    getEarningRateFun (index) {
      const params = {
        id: this.$route.query.productId
      };
      getEarningRate(params).then(res => {
        if (res.status === 1) {
          let filterArr;
          let durationTime; // 几个月前
          this.chartsRate = res.resultBody.rate;
          if (this.activeIndex == 0) { // 月度
            durationTime = 1;
          } else if (this.activeIndex == 1) { // 半年
            durationTime = 6;
          } else if (this.activeIndex == 2) { // 一年
            durationTime = 12;
          } else { // 成立以来
            durationTime = null;
          }
          const preDate = this.getPreMonthDay(this.nowdatestr, durationTime);
          const preTimestamp = +new Date(preDate);
          // 此时顺序是乱的
          let tempArr = [];
          Object.keys(this.chartsRate).forEach(item => {
            const date = +new Date(item);
            tempArr.push(date);
          });
          tempArr.sort(function (a, b) {
            return a - b;
          });
          tempArr = tempArr.map(item => {
            return moment(item).format('YYYY-MM-DD');
          });
          // 在范围之内的
          filterArr = tempArr.filter(item => {
            if (durationTime) {
              const itemTimestamp = +new Date(item);
              // 挑出范围之内的
              return itemTimestamp >= preTimestamp;
            } else {
              // 成立以来返回所有
              return item;
            }
          });
          this.filterArr = filterArr;
          const seriesDataTemp = [];
          const categories = [];
          filterArr.forEach(item => {
            const seriesData = this.chartsRate[item];

            let formatTime = item.split('-');
            formatTime[0] = formatTime[0].substring(formatTime[0].length - 2);

            formatTime = formatTime.join('-'); // 格式化成20-7-24
            seriesDataTemp.push(Number(seriesData)); // [时间，数据]
            categories.push(formatTime);
          });
          this.categories = categories;
          this.seriesData = seriesDataTemp;
          this.initCharts(this.seriesData); // 初始化图表
        }
      });
    },
    // 获取几个月前的日期
    getPreMonthDay (date, monthNum) {
      var dateArr = date.split('-');
      var year = dateArr[0]; // 获取当前日期的年份
      var month = dateArr[1]; // 获取当前日期的月份
      var day = dateArr[2]; // 获取当前日期的日
      var days = new Date(year, month, 0);
      days = days.getDate(); // 获取当前日期中月的天数
      var year2 = year;
      var month2 = parseInt(month) - monthNum;
      if (month2 <= 0) {
        // 判断年份
        const rest = Math.abs(month2) / 12;
        let multiple;
        if (rest <= 1) {
          multiple = 1;
        } else {
          multiple = Math.floor(rest);
        }
        year2 = year2 - multiple;
        month2 = 12 + month2;
      }

      var day2 = day;
      var days2 = new Date(year2, month2, 0);
      days2 = days2.getDate();
      if (day2 > days2) {
        day2 = days2;
      }
      if (month2 < 10) {
        month2 = '0' + month2;
      }
      var t2 = year2 + '-' + month2 + '-' + day2;
      return t2;
    }
  }
};
