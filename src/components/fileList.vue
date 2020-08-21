<template>
  <div class="distributionList-mask">
    <div class="card-box">
      <div class="title flex-center-center">
        <div class="dec-left"></div>
        <div class="txt">附件列表</div>
        <div class="dec-right"></div>
      </div>
      <div class="list">
        <vue-scroll>
          <div v-for="(item,index) in fileLists" :key="index" class="list-item just-flex">
            <div class="sort">{{index | formatNum}}</div>
            <div class="txt text-ellipsis">华设-工商银行聚赢财富284号理财</div>
            <div @click="showPdf(item.path)" class="text-info other">查看</div>
          </div>
        </vue-scroll>
      </div>
      <div @click="closeMask" class="close-icon">
        <img class="img-block" src="@/assets/img/close-icon.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { getAttachmentListByProductId } from '@/service/coreApi'
export default {
	props: ['productContent'],
	data() {
		return {
			url: '',
			numPages: 1,
			fileLists:[]//附件数组
		}
	},
	filters:{
		formatNum(val){//格式化序列
			if(val+1 <10){
				return  '0'+(val+1)
			}else {
				return val+1
			}
		}

	},
	created() {
    this.getAttachmentListByProductId()
    
	},
	methods: {
		 getAttachmentListByProductId() {
			const params = {
				isOld: +this.$route.query.isOld,
				productId: +this.$route.query.productId,	
			}
			getAttachmentListByProductId(params).then(res => {
				if(res.status===1){
          this.fileLists=res.resultBody
          this.$emit('getFileLists',res.resultBody)
				}
			})
		},
		showPdf(url){
			this.$emit('showPdfMask',url)	
		},
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
        .sort {
          width: 0.41rem;
        }
        .txt {
          width: 2.31rem;
        }
        .other {
          width: 0.37rem;
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
