<template>
	<div class="registered-down-wrapper">
		<section class="registered-down-header">
			<div class="registered-down-header-img">
				<div>
					<img src="./../../assets/img/huashe-logo@3x.png"
						alt="LOGO">
				</div>
				<div>
					<p></p>
				</div>
			</div>
			<div class="registered-down-header-slogan">
				“持续为高净值客户甄选和配置稳健收益的金融产品”
			</div>
			<ul class="registered-down-header-tip">
				<li>创新</li>
				<li class="dot"></li>
				<li>专业</li>
				<li class="dot"></li>
				<li>感恩</li>
				<li class="dot"></li>
				<li>分享</li>
			</ul>
		</section>
		<section class="registered-down-body">
			<div class="registered-down-body-wrapper">
				<van-cell-group class="registered-down-body-cell">
					<van-field v-model="phone"
						clearable
						placeholder="请输入手机号" />
					<van-field v-model="imgCodeVal"
						center
						clearable
						placeholder="请输入图片验证码">
						<template #button>
							<img :src="imageCode"
								alt="imageCode">
						</template>
					</van-field>
					<van-field v-model="smsCode"
						center
						clearable
						placeholder="请输入手机验证码">
						<template #button>
							<van-button size="small"
								type="primary"
								@click="getCodeFun"
								v-if="!isCountDown">发送验证码</van-button>
							<van-count-down v-else
								:time="time"
								format=" ss 秒"
								@finish="isCountDown=false" />
						</template>
					</van-field>
				</van-cell-group>
				<p class="tip">图形验证码错误</p>
				<van-checkbox v-model="checked"
					checked-color="#C5B269"
					icon-size="14px"
					class="law">
					<p>我同意<span>《华设财富协议》</span><span>《隐私政策》</span></p>
				</van-checkbox>
			</div>
		</section>
		<section class="registered-down-footer">
			<van-button @click="download">注册并下载</van-button>
		</section>
	</div>
</template>

<script>
import { getImageCode, getSmsCode } from '@/service/coreApi'
export default {
	data() {
		return {
			checked: false,
			phone: '',
			imgCodeVal: '',
			smsCode: '',
			imageCode: '',
			time: 60 * 1000,
			isCountDown: false
		}
	},
	created() {
		this.getImageCodeFun()
	},
	methods: {
		getImageCodeFun() {
			const params = {
				id: 1234567890
			}
			getImageCode(params)
				.then(res => {
					return (
						'data:image/png;base64,' +
						btoa(
							new Uint8Array(res).reduce(
								(data, byte) => data + String.fromCharCode(byte),
								''
							)
						)
					)
				})
				.then(data => {
					this.imageCode = data
				})
		},
		getCodeFun() {
			this.isCountDown = true
			const params = {
				phoneNumber: this.phone,
				imageCode: this.imgCodeVal,
				id: 1234567890
			}
			getSmsCode(JSON.stringify(params)).then(res => {
				console.log(res)
			})
		},
		download() {
			if (!this.checked) return
		}
	}
}
</script>

<style lang="scss">
.registered-down-wrapper {
	background: #101941;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	.registered-down-header {
		margin-top: 30px;
		&-img {
			div {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
			}
			img {
				width: 164px;
			}
			p {
				margin-top: 18px;
				width: 25px;
				height: 2px;
				background: #c5b269;
			}
		}
		&-slogan {
			width: 310px;
			margin: 16px auto 0;
			color: #c5b269;
			font-size: 18px;
			font-family: PingFang SC, PingFang SC-Medium;
			line-height: 34px;
			text-align: center;
			letter-spacing: 1px;
		}
		&-tip {
			color: #c5b269;
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin: 10px 62px;
			.dot {
				width: 8px;
				height: 8px;
				background: #c5b269;
				border-radius: 50%;
			}
		}
	}
	.registered-down-body {
		margin-top: 24px;
		position: relative;
		&-wrapper {
			background: #fff;
			width: 346px;
			height: 380px;
			margin: 0 auto;
			padding: 40px 0;
		}
		&-cell {
			.van-cell {
				margin-top: 10px;
				padding: 15px;
			}
			.van-button {
				width: 100px;
				font-size: 16px;
				background: linear-gradient(314deg, #dfd393 4%, #c5b269 95%);
				border-radius: 8px;
				border: none;
			}
		}
		.tip {
			color: red;
			padding-left: 15px;
			font-size: 12px;
		}
		.law {
			position: absolute;
			bottom: 10px;
			left: 50%;
			text-align: center;
			font-size: 12px;
			transform: translateX(-50%);
			span.van-checkbox__label {
				width: 206px;
				p {
					span {
						color: #c5b269;
					}
				}
			}
		}
	}
	.registered-down-footer {
		margin: 0 15px;
		.van-button {
			background: linear-gradient(314deg, #dfd393 4%, #c5b269 95%);
			border: none;
			width: 346px;
			color: #fff;
			font-size: 16px;
			margin: 18px auto 0;
		}
	}
}
</style>
