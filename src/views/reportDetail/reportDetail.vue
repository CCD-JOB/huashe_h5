<template>
	<div>
		<div id="demo"></div>
	</div>
</template>
<script>
 import Pdfh5 from "pdfh5";
  import "pdfh5/css/pdfh5.css";
export default {
  data () {
    return {
      pdfh5: null
    };
  },
  components:{
  },
  created(){
   this.pdfUrl=this.$route.query.pdfUrl
  },
	mounted() {
	  this.pdfh5 = new Pdfh5("#demo", {
      pdfurl: this.pdfUrl,
      lazy:true
	  });
	}
};
</script>

<style lang="scss" scoped>
</style>
