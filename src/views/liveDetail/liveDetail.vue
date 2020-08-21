<template>
	<div>
		<div class="video-container">
			<video controlslist="nodownload"
				ref="video"
				:poster="info.picUrl"
				controls
				:src="info.videoUrl"></video>
		</div>
		<div class="intro-wrapper item-block">
			<div class="top-block flex-between-center mt18">
				<div class="title">内容介绍</div>
				<!-- <div class="quantity">播放量232</div> -->
			</div>
			<div class="intro-title">
				<div class="title">{{info.videoTittle}}</div>
				<!-- <div class="time">时间：{{info.videoStartTime}}</div> -->
			</div>
			<div class="content">
				<div class="item">
					{{info.videoDesc}}
				</div>
			</div>

		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      info:{}
    };
  },
  created() {
    let {
      $route:{
        query:{
          id,
          videoTittle,
          videoDesc,
          videoUrl,
          videoStartTime,
          picUrl
        }
      }
    } = this
    this.info = {
      ...this.info,
      id,
      videoTittle,
      videoDesc,
      videoUrl,
      videoStartTime,
      picUrl
    }
    console.log(this.info)
  },
  mounted () {
    this.$nextTick(() => {
      // 去掉video画中画
      this.$refs.video.disablePictureInPicture = true;
    });
  }
};
</script>

<style lang="scss" scoped>
.video-container {
	width: 100%;
	height: 2.4rem;
	video {
		width: 100%;
		height: 100%;
		// display: block;
		object-fit: fill;
		//     &::-webkit-media-controls-fullscreen-button
		//  {
		//       display: none !important;
		//     }
	}
}
.top-block {
	.title {
		color: #c5b269;
		font-size: 0.18rem;
		font-weight: 700;
	}
	.quantity {
		color: #999999;
		font-size: 0.13rem;
	}
}
.intro-title {
	padding: 0.14rem 0;
	.title {
		font-size: 0.17rem;
		font-weight: 700;
	}
	.time {
		font-size: 0.13rem;
		color: #999999;
	}
}
.content {
	margin-bottom: 0.18rem;
	.item {
		margin-top: 0.09rem;
	}
}
</style>
