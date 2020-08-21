<template>
    <div class="inviteFriends" >
      <div class="bg">
        <div class="er"><img :src="dprImg('erweima.png')" alt=""></div>
        <div class="txt">邀请您的好友扫描二维码邀请</div>
        <div class="icon-list flex-center-center">
          <div class="icon-item">
            <img :src="dprImg('weixin.png')" alt="">
          </div>
          <div class="icon-item">
            <img :src="dprImg('quan.png')" alt="">
          </div>
          <div class="icon-item">
            <img :src="dprImg('qq.png')" alt="">
          </div>
        </div>
      </div>
      
      
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   computed:{
   },
   methods:{
   }
}
</script>

<style lang="scss">
 .bg {
   width: 100%;
   height: 6.43rem;
   background: url('../../assets/img/invite-bg.png') no-repeat center center;
   background-size: 100% 100%;
   overflow: hidden;
   .er {
     width:2.2rem ;
     height: 2.2rem;
     margin: 0 auto;
     margin-top: 141px;
   }
   .txt {
     text-align: center;
     color: #fff;
     padding:.18rem .15rem ;
   }
   .icon-list {
     .icon-item {
       width:.51rem ;
       height: .51rem;
       margin-right: .34rem;
       &:last-child{
         margin-right: 0;
       }
     }
   }
 }
  
</style>
