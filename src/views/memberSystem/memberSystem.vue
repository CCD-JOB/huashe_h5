<template>
	<div class="member-system-wrapper">
		<div class="info">
			<img :src="levelSrc.src"
				alt="level">
			<span>{{levelSrc.title}}</span>
		</div>
		<img :src="bgSrc"
			alt="">
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	computed: {
		levelSrc() {
			switch (Number(this.$route.query.level)) {
				case 3:
					return {
						title: '尊悦',
						src: require('./../../assets/img/member/尊悦@2x.png')
					}
				case 4:
					return {
						title: '尊享',
						src: require('./../../assets/img/member/尊享@2x.png')
					}
				case 5:
					return {
						title: '尊贵',
						src: require('./../../assets/img/member/尊贵@2x.png')
					}
				case 6:
					return {
						title: '尊辉',
						src: require('./../../assets/img/member/尊辉@2x.png')
					}
				case 7:
					return {
						title: '尊铂',
						src: require('./../../assets/img/member/尊铂@2x.png')
					}
				case 8:
					return {
						title: '尊耀',
						src: require('./../../assets/img/member/尊耀@2x.png')
					}
				default:
					return {
						title: '普通会员',
						src: require('./../../assets/img/member/头像@2x.png')
					}
			}
		},
		bgSrc() {
			if (
				Number(this.$route.query.level) === 0 ||
				Number(this.$route.query.level) === 1
			) {
				return require('./../../assets/img/member/bgg_1.png')
			} else {
				return require('./../../assets/img/member/bgg.png')
			}
		}
	},
	methods: {}
}
</script>

<style lang="scss">
.member-system-wrapper {
	position: relative;
	.info {
		width: 100%;
		text-align: center;
		padding-top: 30px;
		position: absolute;
		img {
			margin: 0 auto;
			width: 70px;
		}
		span {
			margin-top: 20px;
			display: inline-block;
			background: linear-gradient(233deg, #dfd393 10%, #c5b269 86%);
			border-radius: 18px;
			padding: 2px 18px;
			font-size: 14px;
			line-height: 1;
		}
	}
}
</style>
