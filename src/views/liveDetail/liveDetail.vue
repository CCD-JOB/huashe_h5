<template>
  <div>
    <div class="video-container">
      <video controlslist="nodownload" ref="video" poster="@/assets/img/logo.png"  controls src="https://media.w3.org/2010/05/sintel/trailer.mp4"></video>
    </div>
     <div class="intro-wrapper item-block">
       <div class="top-block flex-between-center mt18" >
         <div class="title">内容介绍</div>
         <div class="quantity">播放量232</div>
       </div>
       <div class="intro-title">
           <div class="title">华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议</div>
           <div class="time">时间：2020-06-10</div>
       </div>
       <div class="content">
         <div class="item">
           华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议,华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议
         </div>
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
  methods: {},
  mounted () {
    this.$nextTick(() => {
      // 去掉video画中画
      this.$refs.video.disablePictureInPicture = true;
    });
  }
};
</script>

<style lang="scss" scoped>
.video-container {
  width: 100%;
  height: 2.4rem;
  video {
    width: 100%;
    height: 100%;
    // display: block;
    object-fit: fill;
//     &::-webkit-media-controls-fullscreen-button
//  {
//       display: none !important;
//     }

  }
}
.top-block  {
  .title {
    color:#C5B269 ;
    font-size: .18rem;
    font-weight: 700;
  }
  .quantity {
    color: #999999;
    font-size: .13rem;
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
