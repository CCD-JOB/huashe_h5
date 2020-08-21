<template>
	<div>
		<div class="item-block">
			<div class="title big-font fw700">{{resultBody.tittle}}</div>
			<div :class="{'sub-title':true,'text-info':true,'small-font':true,'mb18':resultBody.picUrl}">
				<span>{{resultBody.sourceform? resultBody.sourceform :'华设财富'}}</span><span>{{resultBody.publishDate}}</span>
			</div>
		</div>
		<div v-show="resultBody.picUrl" class="pic">
			<img v-show="resultBody.picUrl" :src="resultBody.picUrl"
				alt="">
		</div>
		<div v-html="resultBody.content"
			class="content">
		</div>
	</div>
</template>
<script>
import { getConsultationInfo } from '@/service/coreApi'
import {inforDetails} from '@/service/ccdApi'
export default {
	data() {
		return {
			resultBody: {}
		}
	},
	computed: {},
	methods: {
		getConsultationInfoFun() {
			const params = {
				id: this.$route.query.consultId,
				consultationType: this.$route.query.consultationType
			}
			getConsultationInfo(params).then(res => {
				if (res.status === 1) {
					this.resultBody = res.resultBody
				}
			})
    },
    getInforDetails(){
      let params = {
        id:this.$route.query.consultId
      }
      inforDetails(params).then(res => {
       if(res.code===200){
       this.resultBody=  Object.assign({},this.resultBody,{
           content:res.data.content,
           picUrl:null,
           publishDate:res.data.releaseDate,
           tittle:res.data.title,
           sourceform:res.data.sourceform
         })
       }

      })

    }
	},
	created() {
    let consultationType = this.$route.query.consultationType
     if(consultationType==3){
        this.getInforDetails()
     }else {
    this.getConsultationInfoFun()
     }
   
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
