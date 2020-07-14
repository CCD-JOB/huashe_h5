<template>
  <!-- 直播预约 -->
  <div>
    <div class="banner"></div>
    <div class="item-block">
      <div class="time-wrapper">
        <div class="tips flex-between-center">
          <div class="left-bar bars"></div>
          <span>距离直播开始</span>
          <div class="right-bar bars"></div>
        </div>
        <div class="mb18 time flex-center-center">
          <span class="day mr4"><strong>00</strong>日</span><span class="hour mr4"><strong>20</strong>时</span><span class="minute mr4"><strong>58</strong>分</span><span class="second"><strong>14</strong>秒</span>
        </div>
        <div class="single-btn">立即预约</div>
      </div>
    </div>
    <div class="item-block">
      <div class="top-block flex-between-center mt18" >
         <div class="title">活动介绍</div>
       </div>
       <div class="intro-title">
           <div class="title">2019华设财富尊耀年会</div>
           <div class="time">时间：2020年02月10日-02月09日</div>
       </div>
       <div class="content">
         <div class="item">
           华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议,华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议
         </div>
         <div class="item">
           华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议,华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议
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
.banner {
  width: 100%;
  height: 2.4rem;
  background-color: pink;
}
.time-wrapper {
  .tips {
    padding: .18rem 0 .14rem;
    box-sizing: border-box;

  }
  .bars {
    width: 1.19rem;
    height: 0.04rem;
    border-radius: 0.05rem 0 0 0.05rem;
    background-size: 100% 100%;
  }
  .left-bar {
    background: url("../../assets/img/left-bar.png") no-repeat center center;
  }
  .right-bar {
    background: url("../../assets/img/right-bar.png") no-repeat center center;
  }
  .time {
    font-size: .18rem

  }
}
.single-btn {
//   background: url('../../assets/img/appoint-icon.png') no-repeat center center;
//   background-size: 100% 100%;
//  height: .44rem;
//  border-radius: .04rem;
//  line-height: .44rem;
//  text-align: center;
// color: #fff;
//  font-size: .17rem;
 margin-top: .18rem;

}
.top-block  {
  .title {
    color:#C5B269 ;
    font-size: .18rem;
    font-weight: 700;
  }

}
.intro-title {
   padding: .14rem 0;
   .title {
     font-size: .17rem;
     font-weight: 700;
   }
   .time {
     font-size: .13rem;
     color: #999999;
   }
}
.content {
  margin-bottom: .18rem;
  .item {
    margin-top: .09rem;

  }
}
</style>
