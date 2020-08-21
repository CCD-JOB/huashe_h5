<template>
	<div>
		<div class="item-block">
			<div class="title big-font fw700">{{resultBody.tittle}}</div>
			<div :class="{'sub-title':true,'text-info':true,'small-font':true,'mb18':resultBody.picUrl}">
				<span>{{resultBody.sourceform? resultBody.sourceform :'华设财富'}}</span><span>{{resultBody.publishDate}}</span>
			</div>
		</div>
		<div v-show="resultBody.picUrl"
			class="pic">
			<img v-show="resultBody.picUrl"
				:src="resultBody.picUrl"
				alt="">
		</div>
		<div v-html="resultBody.content"
			class="content">
		</div>
	</div>
</template>
<script>
import getRouteToken from '@/mixins/getRouteToken'
import { getBannerDetail } from '@/service/coreApi'
export default {
  mixins: [getRouteToken],
	data() {
		return {
			resultBody: {}
		}
  },
	methods: {
		getBannerDetailFun() {
			const params = {
				remark: this.$route.query.remark
      }
			getBannerDetail(params).then(res => {
				if (res.status === 1) {
					this.resultBody = res.resultBody
				}
			})
		}
	},
	created() {
    this.getRouteToken()
  },
  mounted() {
		this.getBannerDetailFun()
  }
}
</script>

<style lang="scss" scoped>
.title {
	margin-bottom: 0.09rem;
}
.sub-title span {
	margin-right: 0.09rem;
}
.pic {
	width: 100%;
	height: 2.38rem;
	img {
		width: 100%;
		height: 100%;
	}
	img[src=''],
	img:not([src]) {
		opacity: 0;
	}
}
.content {
	padding: 0.18rem 0.15rem;

	.item {
		margin-bottom: 0.09rem;
		&:last-child {
			margin-bottom: 0.09rem;
		}
	}
}
</style>
