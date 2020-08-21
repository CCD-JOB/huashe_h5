<template>
  <div>
    <div class="normal-block">
      <div class="finPlanner-container">
        <img class="img-block" src="@/assets/img/consultant@2x.png" alt="" />
        <div
          class="mask item-block flex-0-center"
          :style="{
            backgroundImage:
              'url( ' + require(`@/assets/img/consultant@2x.png`) + ' ) '
          }"
        ></div>
        <div class="content item-block">
          <div class="name">{{myInfo.consultantName}}</div>
          <div class="phone flex-0-center">
            <img :src="dprImg('phone.png')" alt="">
            <div class="txt flex-0-center">{{myInfo.consultantPhone}}</div>
          </div>
          <div class="position flex-0-center">
            <img :src="dprImg('position.png')" alt="">
            <div class="txt flex-0-center">{{myInfo.consultantPosition}}</div>
          </div>
        </div>
      </div>
      <div class="icon-list flex-between-center">
        <div class="icon-item"><img :src="dprImg('consultant-icon1.png')" alt=""></div>
        <div class="icon-item"><img :src="dprImg('consultant-icon2.png')" alt=""></div>
        <div class="icon-item"><img :src="dprImg('consultant-icon3.png')" alt=""></div>
        <div class="icon-item"><img :src="dprImg('consultant-icon4.png')" alt=""></div>
      </div>

      <div class="single-btn">
        <div class="flex-center-center">
          <div class="icon">
            <img class="img-block" :src="dprImg('tel.png')" alt="" />
          </div>
          <a :href="`tel:${myInfo.consultantPhone}`">
            <span class="text-white">联系我的理财顾问</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { aboutMe } from "@/service/coreApi";
export default {
  data() {
    return {
      myInfo:{},
    };
  },
  computed: {},
  methods: {
    getConsultantInfo() {
      aboutMe({}).then(res => {
        console.log(res);
        if (res.status === 1) {
         this.myInfo=res.resultBody
        } else {
          if (res.msg) {
            this.$toast({
              message: res.msg
            });
          }
          if(res.errorMsg) {
            this.$toast({
              message: res.errorMsg
            });
          }
        }
      });
    }
  },
  created() {
    if (this.$route.query.token) {
      let token = this.$route.query.token;
      window.sessionStorage.setItem("token", token);
    }
    this.getConsultantInfo();
  }
};
</script>
<style lang="scss" scoped>
.finPlanner-container {
  height: 4.48rem;
  position: relative;
  overflow: hidden;
  .mask {
    height: 0.92rem;
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
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    padding: .1rem .14rem;
    color: #fff;
    img {
      width:.08rem ;
      height: .13rem;
      margin-right: .04rem;
    }
    .name {
      margin-bottom:.05rem ;
      font-size: .18rem;
      color: #DFD393;
    }
    .phone {
      margin-bottom: .02rem;
    }
    
  }

}
.icon-list {
  margin-top: .18rem;
.icon-item {
    width:.8rem ;
    height: .8rem;
  }
}
  
.single-btn {
  margin-top: 0.74rem;
  margin-bottom: 0.43rem;
  .icon {
    width: 0.23rem;
    height: 0.23rem;
    margin-right: 0.09rem;
  }
}
</style>
