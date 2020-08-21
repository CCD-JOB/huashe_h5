<template>
	<div class="distributionList-mask">
		<div class="card-box">
			<div class="title flex-center-center">
				<div class="dec-left"></div>
				<div class="txt">赎回列表</div>
				<div class="dec-right"></div>
			</div>
			<div class="nav-bar just-flex">
				<div class="item">赎回类型</div>
				<div class="item">赎回日期</div>
				<div class="item">金额/份额</div>
			</div>
			<div class="list">
				<vue-scroll>
					<div v-for="(item, index) in list"
						:key="index"
						class="list-item just-flex">
						<div class="number">{{item.redeemTypeName}}</div>
						<div class="date">{{item.redeemDate}}</div>
						<div class="amout">{{item.amount}}</div>
					</div>
				</vue-scroll>

			</div>
			<div @click="closeMask"
				class="close-icon"><img class="img-block"
					src="@/assets/img/close-icon.png"
					alt=""></div>
		</div>
	</div>
</template>
<script>
import { getRedeemList } from '@/service/coreApi';
export default {
  props: ['id'],
  data () {
    return {
      list: []
    };
  },
  created () {
    this.getRedeemList();
  },
  methods: {
    closeMask () {
      this.$emit('closeMask');
    },
    async getRedeemList () {
      const params = {
        tenderId: this.id
      };
      const res = await getRedeemList(params);
      this.list = res.resultBody;
    }
  }
};
</script>

<style lang="scss" scoped>
.distributionList-mask {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.75);
	.card-box {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0.15rem;
		right: 0.15rem;
		background: #fff;
		z-index: 999;
		border-radius: 0.04rem;
		.title {
			padding: 0.15rem 0;
			.txt {
				color: #c5b269;
				font-size: 0.18rem;
			}
			.dec-left {
				width: 0.79rem;
				height: 0.03rem;
				background: linear-gradient(to right, rgba(223, 211, 147, 0), #c5b269);
				border-radius: 2px;
				border-radius: 0.02rem;
				margin-right: 0.18rem;
			}
			.dec-right {
				width: 0.79rem;
				height: 0.03rem;
				background: linear-gradient(to left, rgba(223, 211, 147, 0), #c5b269);
				border-radius: 0.02rem;
				margin-left: 0.18rem;
			}
		}
		.nav-bar {
			padding: 0.1rem;
			background-color: #f5f5f5;
			.item {
				color: #c5b269;
				font-size: 0.17rem;
			}
			.item:first-child {
				width: 0.88rem;
			}
			.item:nth-child(2) {
				width: 0.9rem;
				text-align: center;
			}
			.item:nth-child(3) {
				flex: 1;
				text-align: right;
			}
		}
		.list {
			height: 3.96rem;
			.list-item {
				padding: 0.12rem 0.1rem 0.12rem 0.18rem;
				&:nth-child(2n) {
					background-color: #f5f5f5;
				}
				&:nth-child(2n + 1) {
					background-color: #fff;
				}

				.number {
					width: 0.8rem;
				}
				.date {
					width: 0.9rem;
					text-align: center;
				}
				.amout {
					flex: 1;
					text-align: right;
				}
			}
		}
	}
}
.close-icon {
	width: 0.35rem;
	height: 0.35rem;
	position: absolute;
	bottom: -0.53rem;
	left: 50%;
	transform: translateX(-50%);
}
</style>
