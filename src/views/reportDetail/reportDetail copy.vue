<template>
    <div>
     <vue-scroll>
				<div>
					<pdf v-for="i in numPages"
          @progress="progress($event)"
						:key="i"
						:src="pdfUrl"
						:page="i">
					</pdf>
				</div>
			</vue-scroll>
       <loading-block ref="loadingRef"></loading-block>
    </div>
</template>
<script>
import pdf from 'vue-pdf'
import loadingBlock from '@/components/loading/loading.vue'
export default {
  data () {
    return {
      numPages: 1,
      pdfUrl:''
    };
  },
  components:{pdf,loadingBlock},
  computed: {
  },
  methods: {
    getNumPages(url) {
			const loadingTask = pdf.createLoadingTask(url)
			loadingTask.promise
				.then(pdf => {
					this.pdfUrl = loadingTask
					this.numPages = pdf.numPages
				})
				.catch(err => {
					console.error('pdf加载失败')
				})
    },
    progress(e){
     if(e===1){
       this.$refs.loadingRef.showLoading=false
     }

    }
  },
  created(){
   
   this.pdfUrl=this.$route.query.pdfUrl
    console.log(this.pdfUrl);
   this.getNumPages(this.pdfUrl)
    
  }
};
</script>

<style lang="scss" scoped>
.pic {
  height:2.09rem ;
}
.content {
  margin-top: .18rem;
  margin-bottom: .49rem;
  .item {
    margin-bottom: .14rem;

  }
}

</style>
