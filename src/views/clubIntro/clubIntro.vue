<template>
  <div class="item-block">
    <div style="height:1.11rem" class="mt18">
      <img class="img-block" :src="dprImg('club-bg1.png')" alt="" />
    </div>
    <div class="content">
      HCLUB作为华设财富倾情打造以超高净值VIP为核心的高端金融服务俱乐部，将定期为超级VIP会员提供针对性的高端定制沙龙、高尔夫赛事、高端跑车优先试驾、高端医疗咨询、明星慈善活动等，旨在加强高净值VIP会员之间的人脉共享与体验尊贵生活。
    </div>
    <div class="lists">
      <div v-for="(item,index) in listData" :key="index" :style=" {backgroundImage : 'url( ' + require(`@/assets/img/${item.pic}`)+' ) '}" class="item mb14 flex-center-center">
      <div class="content">
        <img class="img-block" style="width:1.32rem;height:.04rem" :src="dprImg('top-bar.png')" alt="">
        <div class="txt text-center">{{item.txt}}</div>
        <img class="img-block" style="width:1.32rem;height:.04rem"  :src="dprImg('bottom-bar.png')" alt="">
      </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listData: [
        {
          pic: 'club-bg2.png',
          txt: '高端跑车有限试驾'
        },
        {
          pic: 'club-bg3.png',
          txt: '高端定制沙龙'
        },
        {
          pic: 'club-bg4.png',
          txt: '高端医疗咨询'
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.content {
  padding:.18rem 0;
}
.lists {
  margin-bottom: .42rem;
  .item {
    height: 1.6rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    // background-image: url('../../assets/img/club-bg2.png');
.content {
  .txt {
    font-size: .17rem;
    color: #C5B269;
  }
}
  }
}

</style>
