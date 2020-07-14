<template>
  <div class="normal-block" >
    <div class="testResult-container">
      <div class="section1 text-white s-big-font text-center">
        您的投资类型为
      </div>
      <div class="section2">激进型</div>
      <div class="section3">
        <div class="txt text-center text-white">在任何投资中</div>
        <div class="text-white text-center">
          在任何投资中
          专注于投资的长期增值，并愿意为此承受较大的风险。短期的投资波动并不会对您造成大的影响，追求超高的回报才是您关注的目标。
        </div>
        <div class="arrow-right"><img class="img-block" :src="dprImg('arrow-right.png')" alt=""></div>
      </div>
      <div class="section4">
        <div class="txt s-big-font text-white text-center">匹配投资风险等级：</div>
        <div class="mark">
          <span class="txt">低风险</span>
          <span class="txt">中低风险</span>
          <span class="txt">中风险</span>
          <span class="txt">高风险</span>
          <span class="txt">中高风险</span>
        </div>
      </div>
    </div>
      <div class="single-btn">我知道了</div>
    <div class="resetTest s-big-font">重新测评</div>
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
.testResult-container {
  padding: 0.18rem 0.21rem 0.58rem;
  background: #101941 url("../../assets/img/test-result.png") no-repeat center
    center;
  background-size: 100% 100%;

  .section2 {
    font-size: 0.44rem;
    font-weight: 800;
    text-align: center;
    padding: 0.14rem 0;
    color: #dfd393;
  }
  .section3 {
    width: 2.77rem;
    margin: 0 auto;

    .txt {
    background: url("../../assets/img/test-icon.png") no-repeat center center;
    background-size: 2.66rem 0.05rem;
    }
    .arrow-right {
      width: .26rem;
      height: .16rem;
      margin-left: .04rem;
      padding: .13rem 0;
    }
  }
  .section4 {
    .mark {
      margin-top: .18rem;
      .txt {
        margin-right: .12rem;
        color:#DFD393 ;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

}
  .single-btn {
    margin-top: .55rem;
  }
  .resetTest{
    margin-top: .09rem;
    text-align: center;
    color: #C5B269;
  }
</style>
