<template>
	<div class="recordDetail item-block">
		<div class="section1">
			<div class="sign">股权</div>
			<div class="title">
				{{productInfo.productName}}
			</div>
			<ul class="lists">
				<li class="item">
					<span>合同编号：</span>
					<span class="text-info">{{productInfo.contractId}}</span>
				</li>
				<li class="item">
					<span>成立日期：</span>
					<span class="text-info">{{productInfo.establishDate}}</span>
				</li>
				<li class="item">
					<span>投资金额：</span>
					<span class="text-info">{{productInfo.tenderAmount}}</span>
				</li>
				<li class="item">
					<span>认购费：</span>
					<span class="text-info">{{productInfo.subscriptionFee}}</span>
				</li>
				<li class="item">
					<span>币种：</span>
					<span class="text-info">{{productInfo.currency}}</span>
				</li>
				<li class="item">
					<span>产品状态：</span>
					<span v-if="productInfo.productStatus==='存续中'"
						style="color:"
						class="text-info">{{productInfo.productStatus}}</span>
					<span v-else
						class="text-info">{{productInfo.productStatus}}</span>
				</li>
			</ul>
			<div class="button-box">
				<button @click="showDistributionList">分配列表</button>
				<button @click="showRedemptionList">赎回列表</button>
				<button @click="showPaymentList">还款计划</button>
				<button @click="searchFile">查看附件</button>
				<!--  :class="{'disabled-button':}" -->
			</div>
		</div>
		<!-- 卡片 -->
		<div class="section2">
			<div class="top-title">产品信息</div>
			<div class="card-block">
				<div class="display-box flex-between-center">
					<div class="item flex-column">
						<span class="number text-center">{{productInfo.investDirection}}</span>
						<span class="other">投资方向</span>
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
		</div>
		<!-- 产品详情 -->
		<div class="section3">
			<div class="pro-detail">
				<h1 class="title fw700">产品详情</h1>
				<div class="content-wrapper"
					v-html="productInfo.productContent"></div>
			</div>
		</div>
		<distribution-list @closeMask="closeMask"
			v-if="showDistribution"
			:id="productInfo.id"></distribution-list>
		<redemption-list @closeMask="closeMask"
			v-if="showRedemption"
			:id="productInfo.id"></redemption-list>
		<payment-list @closeMask="closeMask"
			v-if="showPayment"
			:id="productInfo.id"></payment-list>
			<file-list @getFileLists="getFileLists" @showPdfMask="showPdfMask" @closeMask="closeMask"
			v-if="showFileList"></file-list>
			<file-pdf @closeMask="closePdf"  :pdfUrl='pdfUrl' v-if="showPdf"></file-pdf>
	</div>
</template>
<script>
import { getProductInfo, queryInvestmentInfo } from '@/service/coreApi'
import distributionList from '@/components/distributionList.vue'
import redemptionList from '@/components/redemptionList.vue'
import paymentList from '@/components/paymentList.vue'
import fileList from '@/components/fileList.vue'
import filePdf from '@/components/filePdf.vue'
import getRouteToken from '@/mixins/getRouteToken'
export default {
	mixins:[getRouteToken],
	data() {
		return {
			productInfo: {},
			showDistribution: false,
			showRedemption: false,
			showPayment: false,
			showFileList: false,
			showPdf:false,
			pdfUrl:'',
			fileLists:[]
		}
	},
	components: { distributionList, redemptionList, paymentList, fileList,filePdf },
	async created() {
		this.getRouteToken()
		const r1 = await this.queryInvestmentInfo()
		const r2 = await this.getProductInfo()
		this.productInfo = { ...r1, ...r2 }
	},
	methods: {
		async queryInvestmentInfo() {
			const params = {
				id: +this.$route.query.recordId,
				isOld: +this.$route.query.isOld
			}
			const res = await queryInvestmentInfo(params)
			return res.resultBody
		},
		async getProductInfo() {
			const params = {
				productId: +this.$route.query.productId
			}
			const res = await getProductInfo(params)
			return res.resultBody
		},
		

		showDistributionList() {
			this.showDistribution = true
		},
		showRedemptionList() {
			this.showRedemption = true
		},
		showPaymentList() {
			this.showPayment = true
		},
		searchFile() {
			this.showFileList = true
		},
		getFileLists(fileLists){
console.log(fileLists,111);
		},
		showPdfMask(url){
			console.log(11);
			// 关闭列表弹窗
			this.showFileList=false
			//开启pdf弹窗
						this.showPdf=true
		      	this.pdfUrl=url

		},
		closeMask() {
			this.showDistribution = false
			this.showRedemption = false
			this.showPayment = false
			this.showFileList = false
		},
		closePdf(){
			this.showPdf=false
		}
	}
}
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
				padding: 0.07rem;
				border: 1px solid #c5b269;
				box-sizing: border-box;
				color: #dfd393;
				background-color: #fff;
				border-radius: 0.04rem;
				margin-right: 0.05rem;
				&.disabled {
					border: 1px solid #999;
					color: #999;
				}
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
}
</style>
