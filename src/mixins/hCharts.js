export default {
  data () {
    return {
      chartOptions: {
        chart: {
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
          // headerFormat: `<small>${this.filterArr[0]}至 {point} </small><br/>`,
          // pointFormat: '{series.name}: <b>{point.y}%</b><br/>'
          formatter: function () {
            var html = `<small>${that.filterArr[0]}至${
              that.filterArr[this.x]
            }</small><br/>`;
            console.log(this);
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
          shared: true // 开了这个才有points
        },
        xAxis: {
          // dateTimeLabelFormats: {
          //   day: '%Y-%m-%d'
          // },
          endOnTick: false, // 结束于刻度线
          // showFirstLabel: true,

          type: 'datetime',
          tickWidth: 1, // 刻度线长度
          tickmarkPlacement: 'on', // 刻度线的位置  on
          startOnTick: true,
          tickInterval: 1,

          labels: {
            // overflow: false,
            // padding: 100,
            // step: 0, // 刻度线间隔
            autoRotation: 0,
            align: 'center', // 对齐方式
            style: {
              fontSize: '.1rem'
            },
            formatter: function () {
              // else if (this.value === Math.floor((categories.length - 1) / 2)) {
              //   return categories[this.value];
              // }
              if (this.value === 0) {
                return `<div><span style="color: white">,----</span>${
                  that.categories[this.value]
                }</div>`;
              } else if (this.value === that.categories.length - 1) {
                return that.categories[this.value];
              } else {
                return '';
              }
            }
          }
          // categories: [1, 2, 3, 4]
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
            pointWidth: 5
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
            // pointStart: Date.UTC(2010, 0, 1),
          }
        ]
      }
    };
  }
};
