<template>
    <div class="item-block">
      <!-- 实名认证 -->
      <div class="sign big-font fw700">您已通过实名认证</div>
      <div class="cell-form">
        <div class="cell-item flex-between-center">
          <span>姓名</span>
          <span class="text-info">{{realName}}</span>
        </div>
        <div class="cell-item flex-between-center">
          <span>证件号</span>
          <span class="text-info">{{cardNumber}}</span>
        </div>
      </div>
        <div @click="toChooseAdviserPage" class="single-btn flex-center-center">选择理财师</div>
    </div>
</template>
<script>
export default {
  props: ['realName', 'cardNumber','myInfo'],
  data () {
    return {
    };
  },
  computed: {
  },
  methods: {
    toChooseAdviserPage () {
     if(this.myInfo.consultantName) {
       this.$toast('您已选择了理财师，请不要重复选择')
     }else {
        this.$router.push({
        name:'chooseAdviser',
        params:{
          realNameStatus:0
        }
      });

     }
     
    }
  }
};
</script>

<style lang="scss" scoped>
.sign {
  padding: .18rem 0 .14rem;
}
.cell-item {
  padding:.18rem 0 ;
  border-bottom: 1px solid #EEEEEE;
}
.single-btn {

  margin-top:1.44rem;
}

</style>
