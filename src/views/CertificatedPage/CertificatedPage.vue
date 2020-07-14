<template>
    <div class="item-block">
      <!-- 实名认证 -->
      <div class="sign big-font fw700">您已通过实名认证</div>
      <div class="cell-form">
        <div class="cell-item flex-between-center">
          <span>姓名</span>
          <span class="text-info">王静波</span>
        </div>
        <div class="cell-item flex-between-center">
          <span>证件号</span>
          <span class="text-info">330110199912122211</span>
        </div>
      </div>
        <div class="single-btn flex-center-center">选择理财师</div>

    </div>
</template>
<script>
export default {
  data () {
    return {
    };
  },
  computed: {
  },
  methods: {
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
