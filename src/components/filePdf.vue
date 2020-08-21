<template>
	<div class="distributionList-mask">
		<div class="card-box">
			<vue-scroll>
				<div id="demo"></div>
			</vue-scroll>
			<div @click="closeMask"
				class="close-icon"><img class="img-block"
					src="@/assets/img/close-icon.png"
					alt=""></div>
		</div>
	</div>
</template>
<script>
 import Pdfh5 from "pdfh5";
  import "pdfh5/css/pdfh5.css";
import { getAttachmentListByProductId } from '@/service/coreApi'
export default {
	components: {  },
	props: ['productContent','pdfUrl'],
	data() {
		return {
			pdfh5: null
		}
	},
	created() {
		console.log(this.pdfUrl);
		
	},
	mounted() {
	  this.pdfh5 = new Pdfh5("#demo", {
      pdfurl: this.pdfUrl,
      lazy:true
	  });
	  //监听完成事件
	  this.pdfh5.on("render", (currentNum, time, currentPageDom)=> {
	  })
	},
	methods: {
		closeMask() {
			this.$emit('closeMask')
		}
	}
}
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
		padding: 0.1rem;
		height: 493px;
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
/deep/.vBarVisible {
	overflow: visible !important;
	.__panel {
		overflow: scroll !important;
	}
	.__rail-is-vertical {
		right: -0.05rem !important;
	}
}
</style>
