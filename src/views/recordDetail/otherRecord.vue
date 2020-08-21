<template>
	<div class="recordDetail item-block">
		<div class="section1">
			<div class="sign">其他</div>
			<div class="title">
				{{productInfo.productName}}
			</div>
			<ul class="lists">
				<li class="item">
					<span>合同编号：</span>
					<span class="text-info">{{productInfo.contractId}}</span>
				</li>
				<li class="item">
					<span>付款日期：</span>
					<span class="text-info">{{productInfo.establishDate}}</span>
				</li>
				<li class="item">
					<span>订单金额：</span>
					<span class="text-info">{{productInfo.tenderAmount}}</span>
				</li>
				<li class="item">
					<span>产品状态：</span>
					<span class="text-info">{{productInfo.productStatus}}</span>
				</li>
			</ul>
		</div>
		<!-- 产品详情 -->
		<div class="section3">
			<div class="pro-detail">
				<h1 class="title fw700">产品详情</h1>
				<div class="content-wrapper"
					v-html="productInfo.productContent">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getProductInfo, queryInvestmentInfo } from '@/service/coreApi';
import getRouteToken from '@/mixins/getRouteToken'

export default {
	mixins:[getRouteToken],
  data () {
    return {
      productInfo: {},
      showDistribution: false,
      showRedemption: false,
      showPayment: false
    };
  },
  async created () {
		this.getRouteToken()
    const r1 = await this.queryInvestmentInfo();
    const r2 = await this.getProductInfo();
    this.productInfo = { ...r1, ...r2 };
  },
  methods: {
    async queryInvestmentInfo () {
      const params = {
        id: this.$route.query.recordId,
        isOld: this.$route.query.isOld
      };
      const res = await queryInvestmentInfo(params);
      return res.resultBody;
    },
    async getProductInfo () {
      const params = {
        productId: this.$route.query.productId
      };
      const res = await getProductInfo(params);
      return res.resultBody;
    },

    closeMask () {
      this.showDistribution = false;
      this.showRedemption = false;
      this.showPayment = false;
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
			background: url('../../assets/img/sign-icon.png') no-repeat center center;
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
				padding: 0.08rem;
				border: 1px solid #c5b269;
				color: #dfd393;
				background-color: #fff;
				border-radius: 0.04rem;
				&:first-child {
					margin-right: 0.05rem;
				}
			}
		}
	}
	.section2 {
		.card-box {
			box-shadow: 0px 0px 0.05rem 0px rgba(0, 0, 0, 0.1);
		}
		.title {
			padding: 0.18rem 0;
			font-size: 0.18rem;
		}
		.pic {
			width: 1.44rem;
			background-color: yellow;
		}
		.content {
			width: 2.02rem;
			padding: 0.07rem 0.13rem;
			box-sizing: border-box;
			& p:first-child {
				font-size: 0.17rem;
			}
			& p:last-child {
				margin-top: 0.08rem;
				color: #c5b269;
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
}
</style>
