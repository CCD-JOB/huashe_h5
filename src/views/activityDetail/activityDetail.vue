<template>
    <div>
    <div class="card-wrapper">
       <div class="pic"><img class="img-block" src="@/assets/img/card.png" alt=""></div>
    </div>
    <div class="detail-container">
      <div class="normal-block">
         <div class="fw700 big-font mb9">2019华设财富尊耀年会</div>
           <div class="text-light-info mb9">时间：2020年02月10日-02月09日</div>
           <div class="text-light-info mb9">预约截止日期：2020年02月09日</div>
           <div class="text-light-info">地址：上海市青浦区国家会展中心1楼宴会厅</div>
      </div>
      <div class="item-block mb18">
        <div class="fw700 big-font mb9">活动介绍</div>
        <div v-for="item in 3" :key="item" class=" mb9">华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议,华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议</div>
      </div>
    </div>
    <div class="order">
      <div class="single-btn">预约</div>
    </div>
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
.text-light-info {
  color: #666666;
}
.card-wrapper {
  height: 2.4rem;
  width: 100%;
  background: url('../../assets/img/mask.png') no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  margin-bottom: .53rem;
  .pic {
    width:3.45rem ;
    height: 1.96rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -.53rem;
  }
}
.order {
  // padding: .18rem .15rem;
  padding: 0 .15rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: .57rem;
  // bottom: 0;
  // background-color: #fff;
}

</style>
