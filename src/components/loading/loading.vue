<template>
    <div>
<van-overlay style="backgroundColor:rgba(48,49,51,.7)"  :show="showLoading" >
<van-loading class="flex-center-center" type="spinner" color="#fff" size="36px"/>
</van-overlay>
    </div>
</template>
<script>
export default {
   data() {
      return {
        showLoading:true,
      }
   },
   computed:{
   },
   methods:{
   }
}
</script>

<style lang="scss" scoped>
/deep/ .van-loading {
  height: 100%;
}
  
</style>
