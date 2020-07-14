<template>
  <div>
    <div class="normal-block">
      <div class="finPlanner-container">
        <img class="img-block" src="@/assets/img/finPlanner.png" alt="" />
        <div class="mask item-block flex-0-center"></div>
        <div class="content item-block flex-0-center">
          <div>
            <div>
              <span class="text-white s-big-font">柳梦竹</span
              ><span class="small-font text-theme">（8年经验）</span>
            </div>
            <div class="text-white">华设财富高级理财顾问</div>
          </div>
        </div>
      </div>
      <div class="info mt18">
        <div class="title big-font fw700 mb9">个人介绍</div>
        <div class="txt">
          2000年入行，累计多年财富管理行业经验，具有丰富的理财业务知识，擅长大类资产配置，根据用户基本状况及需求为客户提供最优质资产配置建议。
        </div>
      </div>
      <div class="single-btn">
        <div class="flex-center-center">
          <div class="icon">
            <img class="img-block" :src="dprImg('tel.png')" alt="" />
          </div>
          <span>联系我的理财顾问</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.finPlanner-container {
  height: 4.48rem;
  position: relative;
  overflow: hidden;
  .mask {
    height: 0.92rem;
    background-image: url("../../assets/img/finPlanner.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0px -3.56rem;
    -moz-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content {
    height: 0.92rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
  }
}
.single-btn {
  margin-top: 0.46rem;
  margin-bottom: 0.43rem;
  .icon {
    width: 0.23rem;
    height: 0.23rem;
    margin-right: 0.09rem;
  }
}
</style>
