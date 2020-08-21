<template>
	<div class="finProductDetail item-block">
		<!-- 卡片 -->
		<div class="card-block">
			<h4 class="title text-center">{{productInfo.name}}</h4>
			<div class="display-box flex-between-center">
				<div class="item flex-column">
					<span class="number text-center">{{productInfo.interestRate}}</span>
					<span class="other">业绩比较基准</span>
				</div>
				<div class="item flex-column">
					<span class="number text-center">{{productInfo.investPeriod}}</span>
					<span class="other">投资期限</span>
				</div>
				<div class="item flex-column">
					<span class="number text-center">{{productInfo.minAmount}}{{productInfo.currency}}</span>
					<span class="other">起投金额</span>
				</div>
			</div>
		</div>
		<div class="pro-detail">
			<h1 class="title fw700">产品详情</h1>
			<div class="content-wrapper"
				v-html="productInfo.productContent">
			</div>
		</div>
	</div>
</template>
<script>
import { getProductInfo } from '@/service/coreApi';
import getRouteToken from '@/mixins/getRouteToken'

export default {
	mixins:[getRouteToken],
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
  }
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
}
</style>
