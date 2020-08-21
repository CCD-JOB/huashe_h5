<template>
  <div class="finProductDetail item-block">
    <!-- 卡片 -->
    <div class="card-block">
			<h4 class="title text-center">{{productInfo.name}}</h4>
			<div class="display-box flex-between-center">
				<div class="item flex-column">
					<span class="number text-center">{{productInfo.cumulativeIncrease*100+'%'}}</span>
					<span class="other">累计涨幅</span>
				</div>
				<div class="item flex-column">
					<span class="number text-center">{{productInfo.netValue}}</span>
					<span class="other">单位净值</span>
				</div>
				<div class="item flex-column">
					<span class="number text-center">{{productInfo.minAmount}}{{productInfo.currency}}</span>
					<span class="other">起投金额</span>
				</div>
			</div>
    </div>
    <div class="incomeLine">
      <h1 class="title fw700">收益走势</h1>
      <div class="box">
        <ul class="tabs flex-0-center">
          <li
            @click="switchTab(index)"
            v-for="(item, index) in tabsData"
            :key="index"
            :class="{ item: true, 'flex-1': true, active: item.active }"
          >
            {{ item.txt }}
          </li>
        </ul>
        <!-- highCharts -->
        <div id="chart-box" class="chart-box">
        </div>
      </div>
    </div>
    <div class="pro-detail">
			<h1 class="title fw700">产品详情</h1>
			<div class="content-wrapper"
				v-html="productInfo.productContent"></div>
    </div>
  </div>
</template>
<script>
import { getProductInfo } from '@/service/coreApi';
import secondMarketHC from '@/mixins/secondMarketCharts.js';
import getRouteToken from '@/mixins/getRouteToken'

export default {
  mixins: [secondMarketHC,getRouteToken],
  data () {
    return {
      productInfo: {}
    };
  },

  created () {
    this.getRouteToken()
    this.getProductInfo();
  },
  methods: {
    getProductInfo () {
      const params = {
        productId: this.$route.query.productId
      };
      getProductInfo(params).then(res => {
        this.productInfo = res.resultBody;
      });
    }

  },
  mounted () {}
};
</script>

<style lang="scss" scoped>
.finProductDetail {
  padding-top: 0.18rem;
  .card-block {
    padding: 0.15rem 0.14rem;
    box-shadow: 0px 0px 0.05rem 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.04rem;
    h4.title {
      font-weight: 500;
      font-size: 0.17rem;
    }
    .display-box {
      padding: 0.09rem 0 0;
      .number {
        font-size: 0.17rem;
        color: #c5b269;
      }
      .other {
        font-size: 0.13rem;
        color: #999999;
        text-align: center;
      }
    }
    .tip-box {
      font-size: 0.13rem;
      color: #999999;
      .sign {
        background-color: #f5f5f5;
        border-radius: 0.04rem;

        margin-right: 0.08rem;
        padding: 0 0.04rem;
      }
    }
  }
  .pro-detail {
    h1.title {
      font-size: 0.18rem;
      padding: 0.18rem 0;
    }
    .content-wrapper {
      width: 100%;
      height: 300px;
    }
  }
  .incomeLine {
    .title {
      font-size: 0.18rem;
      padding: 0.18rem 0;
    }
    .box {
      padding: 0.15rem 0.09rem 0.11rem;
      box-shadow: 0px 0px 0.05rem 0px rgba(0, 0, 0, 0.1);
      .tabs {
        .item {
          color: #999999;
          font-size: 0.16rem;
          background-color: #fff;
          text-align: center;
          height: 0.36rem;
          line-height: 0.36rem;
          border: 1px solid #eeeeee;
          box-sizing: border-box;
          margin: 0 -1px;
          &.active {
            color: #fff;
            background: linear-gradient(#c5b269, #dfd393);
          }

          &:first-child {
            border-radius: 0.04rem 0 0 0.04rem;
            border-left: 1px solid #eeeeee;
          }
          &:last-child {
            border-radius: 0 0.04rem 0.04rem 0;
          }
          &:first-child.active {
            border: none;
            border-right: 1px solid #eeeeee;
          }
          &:nth-child(2).active {
            border-top: none;
            border-bottom: none;
          }
          &:nth-child(3).active {
            border-top: none;
            border-bottom: none;
          }
          &:last-child.active {
            border: none;
            border-left: 1px solid #eeeeee;
          }
        }
      }
    }
    .chart-box {
      height: 1.86rem;
      width: 100%;
      margin-top: 0.25rem;
      .h-chart {
        width: 100%;
        height: 100%;
        // .highcharts-legend .highcharts-legend-box {
        //   margin-bottom: 100px;
        //
      }
    }
  }
}
</style>
<style lang="scss">
        .highcharts-axis-labels.highcharts-xaxis-labels {
          text:first-child{
            transform: translateX(.53rem) !important;
          }
        }

</style>
