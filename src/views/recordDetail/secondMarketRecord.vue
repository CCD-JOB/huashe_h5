<template>
  <div class="recordDetail item-block">
    <div class="section1">
      <div class="sign">二级市场</div>
      <div class="title">
        {{ productInfo.productName }}
      </div>
      <ul class="lists">
        <li class="item">
          <span>合同编号：</span>
          <span class="text-info">{{ productInfo.contractId }}</span>
        </li>
        <li class="item">
          <span>投资日期：</span>
          <span class="text-info">{{ productInfo.establishDate }}</span>
        </li>
        <li class="item">
          <span>投资金额：</span>
          <span class="text-info">{{ productInfo.tenderAmount }}</span>
        </li>
        <li class="item">
          <span>认购费：</span>
          <span class="text-info">{{ productInfo.subscriptionFee }}</span>
        </li>
        <li class="item">
          <span>币种：</span>
          <span class="text-info">{{ productInfo.currency }}</span>
        </li>
        <li class="item">
          <span>产品状态：</span>
          <span
            v-if="productInfo.productStatus === '存续中'"
            style="color:"
            class="text-info"
            >{{ productInfo.productStatus }}</span
          >
          <span v-else class="text-info">{{ productInfo.productStatus }}</span>
        </li>
        <li class="item">
          <span>份额确认单位净值：</span>
          <span class="text-info">{{ productInfo.netValue }}</span>
        </li>
        <li class="item">
          <span>份额：</span>
          <span class="text-info">{{ productInfo.share }}</span>
        </li>
        <li class="item">
          <span>份额确认日：</span>
          <span class="text-info">{{ productInfo.shareConfirmationDate }}</span>
        </li>
      </ul>
      <div class="button-box">
        <button @click="showDistributionList">分配列表</button>
        <button @click="showRedemptionList">赎回列表</button>
        <button @click="showPaymentList">还款计划</button>
        <button @click="searchFile">查看附件</button>
      </div>
    </div>
    <!-- 卡片 -->
    <div class="section2">
      <div class="top-title">产品信息</div>
      <div class="card-block">
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
        <div id="chart-box" class="chart-box"></div>
      </div>
    </div>
    <!-- 产品详情 -->
    <div class="section3">
      <div class="pro-detail">
        <h1 class="title fw700">产品详情</h1>
        <div class="content-wrapper" v-html="productInfo.productContent"></div>
      </div>
    </div>
    <distribution-list
      @closeMask="closeMask"
      v-if="showDistribution"
      :id="productInfo.id"
    ></distribution-list>
    <redemption-list
      @closeMask="closeMask"
      v-if="showRedemption"
      :id="productInfo.id"
    ></redemption-list>
    <payment-list
      @closeMask="closeMask"
      v-if="showPayment"
      :id="productInfo.id"
    ></payment-list>
    <file-list
      @showPdfMask="showPdfMask"
      @closeMask="closeMask"
      v-if="showFileList"
    ></file-list>
    <file-pdf @closeMask="closePdf" :pdfUrl="pdfUrl" v-if="showPdf"></file-pdf>
  </div>
</template>
<script>
import { getProductInfo, queryInvestmentInfo } from "@/service/coreApi";
import distributionList from "@/components/distributionList.vue";
import redemptionList from "@/components/redemptionList.vue";
import paymentList from "@/components/paymentList.vue";
import secondMarketHC from "@/mixins/secondMarketCharts.js";
import fileList from '@/components/fileList.vue'
import filePdf from '@/components/filePdf.vue'
import getRouteToken from '@/mixins/getRouteToken'
export default {
  mixins: [secondMarketHC,getRouteToken],
  data() {
    return {
      productInfo: {},
      showDistribution: false,
      showRedemption: false,
      showPayment: false,
      showFileList: false,
      showPdf: false,
      pdfUrl: ""
    };
  },
  components: {
    distributionList,
    redemptionList,
    paymentList,
    fileList,
    filePdf
  },
  async created() {
    this.getRouteToken()
    const r1 = await this.queryInvestmentInfo();
    const r2 = await this.getProductInfo();
    this.productInfo = { ...r1, ...r2 };
  },
  methods: {
    async queryInvestmentInfo() {
      const params = {
        id: this.$route.query.recordId,
        isOld: this.$route.query.isOld
      };
      const res = await queryInvestmentInfo(params);
      return res.resultBody;
    },
    async getProductInfo() {
      const params = {
        productId: this.$route.query.productId
      };
      const res = await getProductInfo(params);
      return res.resultBody;
    },

    showDistributionList() {
      this.showDistribution = true;
    },
    showRedemptionList() {
      this.showRedemption = true;
    },
    showPaymentList() {
      this.showPayment = true;
    },
    searchFile() {
      this.showFileList = true;
    },
    showPdfMask(url) {
      // 关闭列表弹窗
      this.showFileList = false;
      //开启pdf弹窗
      this.showPdf = true;
      this.pdfUrl = url;
    },
    closeMask() {
      this.showDistribution = false;
      this.showRedemption = false;
      this.showPayment = false;
      this.showFileList = false;
    },
    closePdf() {
      console.log(11);
      this.showPdf = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.recordDetail {
  padding-top: 0.21rem;
  padding-bottom: 0.18rem;
  .section1 {
    padding: 0.36rem 0.13rem 0.15rem;
    box-shadow: 0px 0px 0.05rem 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.04rem;
    position: relative;
    .sign {
      padding: 0.04rem 0.1rem;
      background: url("../../assets/img/sign-icon.png") no-repeat center center;
      background-size: 100% 100%;
      color: #fff;
      text-align: center;
      position: absolute;
      left: 0.11rem;
      top: -0.03rem;
    }
    .title {
      font-size: 0.17rem;
      margin-bottom: 0.09rem;
    }
    .sub-title {
      color: #999999;
      margin-bottom: 0.05rem;
    }
    .lists .item {
      margin-top: 0.05rem;
    }
    .button-box {
      margin-top: 0.15rem;
      button {
        padding: 0.07rem;
        border: 1px solid #c5b269;
        box-sizing: border-box;
        color: #dfd393;
        background-color: #fff;
        border-radius: 0.04rem;
        margin-right: 0.05rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .section2 {
    .top-title {
      padding: 0.18rem 0;
      font-size: 0.18rem;
      font-weight: 700;
    }
    .card-block {
      padding: 0.15rem 0.14rem;
      box-shadow: 0px 0px 0.05rem 0px rgba(0, 0, 0, 0.1);
      border-radius: 0.04rem;
      h4.title {
        font-weight: 500;
        font-size: 0.17rem;
      }
      .display-box {
        padding-bottom: 0.09rem 0;
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
  }
  .section3 {
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
  text:first-child {
    transform: translateX(0.53rem) !important;
  }
}
</style>
