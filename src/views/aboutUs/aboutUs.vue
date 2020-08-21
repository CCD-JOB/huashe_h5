<template>
  <div class="aboutUs item-block">
    <div class="logo-wrapper">
      <div class="logo">
        <img class="img-block" :src="dprImg('about-logo.png')" alt="" />
        <img :src="dprImg('about-dec.png')" alt="" class="dec-icon img-block" />
      </div>
    </div>
    <div @click.stop="toPlayVideo(type)" class="video-container">
      <transition name="video">
        <div v-if="showStartButton" class="start-icon">
          <img :src="dprImg('start.png')" alt="" />
        </div>
        <div @click.stop="toPause" v-if="showPauseButton" class="start-icon">
          <img :src="dprImg('pause.png')" alt="" />
        </div>
      </transition>
      <video
        ref="videoRef"
        poster="@/assets/img/video-bg.png"
        src="https://huashepeixun.oss-cn-shanghai.aliyuncs.com/%E5%8D%8E%E8%AE%BE%E8%B4%A2%E5%AF%8C0226.mp4"
      ></video>
    </div>
    <ul class="content-lists">
      <li class="content-item">
        <div class="title">
          <span class="txt">
            华设概况
            <div class="dec-line"></div>
          </span>
        </div>
        <div class="intro">
          <p>
            华设资产管理（上海）有限公司是一家独立第三方财富管理机构，下设资产管理与财富管理两大业务，华设立足上海、北京、香港，布局全球，目前已在全国和海外多地设立十多家分支机构。华设于2020年获D轮战略投资，成为拥有上市公司、国资机构、投资机构、金融机构等多家实力雄厚的明星股东背景的财富管理品牌。
          </p>
          <p style="margin-top:.09rem">
            华设现拥有私募管理人牌照和香港1、4、9号金融牌照，以持续为高净值客户甄选和配置稳健收益的金融产品为核心使命，矢志成为具有全球视野的综合金融服务供应商。
          </p>
        </div>
      </li>
      <li class="content-item">
        <div class="title">
          <span class="txt">
            华设文化
            <div class="dec-line"></div>
          </span>
          <div class="dec-img">
            <img class="img-block" :src="dprImg('dec-img.png')" alt="" />
          </div>
        </div>
        <div class="content-wrapper">
          <div
            :style="{
              backgroundImage:
                'url( ' + require(`@/assets/img/${item.pic}`) + ' ) '
            }"
            v-for="(item, index) in cultureData"
            :key="index"
            class="item"
          >
            <div class="top-title flex-between-center">
              <div class="left-branch"></div>
              <span>{{ item.title }}</span>
              <div class="right-branch"></div>
            </div>
            <div class="topic">{{ item.txt }}</div>
          </div>
        </div>
      </li>
      <li class="content-item">
        <div class="title">
          <span class="txt">
            华设使命
            <div class="dec-line"></div>
          </span>
        </div>
        <!-- 后面两个样式 -->
        <div class="content-wrapper">
          <div class="item2 text-light-theme">
            <p>持续为高净值客户</p>
            <p>甄选和配置</p>
            <p>稳健收益的金融产品</p>
          </div>
        </div>
      </li>
      <li class="content-item">
        <div class="title">
          <span class="txt">
            华设使命
            <div class="dec-line"></div>
          </span>
        </div>
        <!-- 后面两个样式 -->
        <div class="content-wrapper">
          <div class="item3 text-light-theme">
            <p class="text-center">成为中国高端的全球金融服务商</p>
            <div class="text-white text-center small-font">
              具备国际化视野，放眼全球，在融资企业与投资者间起到桥梁作用，以自身的专业素养服务好两者，运用资本的力量扶持实体经济，为国家繁荣发展贡献力量。
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showStartButton: true,
      showPauseButton: false,
      type: "start",
      status:'',
      cultureData: [
        {
          title: "创新/Innovation",
          txt: "创新是华设人进步的核心动力与源泉",
          pic: "about-section1.png"
        },
        {
          title: "专业/Professional",
          txt: "专业是华设人对实力精益求精的执着",
          pic: "about-section2.png"
        },
        {
          title: "感恩/Gratitude",
          txt: "感恩是华设人对大爱能量的传递及感悟",
          pic: "about-section3.png"
        },
        {
          title: "分享/Share",
          txt: "分享是华设一种博爱心境与情感交流",
          pic: "about-section4.png"
        }
      ]
    };
  },
  computed: {},
  methods: {
    toPlayVideo(type) {
      if (type === "start") {
        console.log(111);
        // 一開始
        this.$refs.videoRef.play();
        this.showStartButton = false;
        this.type="playing"
      } else if(type === "playing") {
        this.showPauseButton=true//显示暂停按钮
      } else if (type==='pausing') {
         this.showStartButton=false
        this.$refs.videoRef.play();
        this.type='playing'
      }
       
    },
    toPause(){
      this.$refs.videoRef.pause();
      this.showPauseButton=false
      this.showStartButton=true
      this.type='pausing'
      
    }

  },
  created(){
    this.$nextTick(() => {
      document.addEventListener('click',() =>{
        if(this.type==='playing'){
           this.showPauseButton=false
        }

      })
    })
    
  }
};
</script>
<style lang="scss" scoped>
.aboutUs {
  background: url("../../assets/img/about-bg.png") no-repeat center center;
  background-size: 100% 100%;
  padding-bottom: 1.19rem;
  .logo-wrapper {
    position: relative;
    .logo {
      width: 0.94rem;
      height: 0.26rem;
      margin: 0 auto;
      padding: 0.19rem 0 0.17rem;
    }
    .dec-icon {
      width: 0.61rem;
      height: 0.44rem;
      position: absolute;
      right: 0.43rem;
      top: 0.02rem;
    }
  }
  .video-container {
    height: 1.69rem;
    position: fixed;
    z-index: 999;
    top: .62rem;
    left: .15rem;
    right: .15rem;
    .start-icon {
      width: 0.37rem;
      height: 0.37rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  .content-lists {
    margin-top:1.69rem ;
    .content-item {
      .title {
        padding: 0.18rem 0 0.09rem;
        text-align: center;
        color: #dfd393;
        font-size: 0.17rem;
        position: relative;
        .txt {
          position: relative;
        }
        .dec-line {
          width: 0.89rem;
          height: 0.05rem;
          background: url("../../assets/img/about-line.png") no-repeat center
            center;
          background-size: 100% 100%;
          position: absolute;
          left: 0;
          bottom: -0.05rem;
        }
        .dec-img {
          width: 0.71rem;
          height: 0.71rem;
          position: absolute;
          right: -0.12rem;
          bottom: -0.35rem;
        }
      }
      .intro {
        color: #fff;
      }
      .content-wrapper {
        .item {
          padding: 0 0.31rem;
          padding-bottom: 0.55rem;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center center;
          margin-bottom: 0.18rem;
          &:last-child {
            margin-bottom: 0;
            position: relative;
            &::after {
              content: "";
              width: 0.94rem;
              height: 0.94rem;
              position: absolute;
              left: 0;
              top: -0.34rem;
              background: url("../../assets/img/dec-img2.png") no-repeat center
                center;
              background-size: 100% 100%;
            }
          }
          .top-title {
            padding: 0.09rem 0 0.25rem;
            color: #dfd393;
            .left-branch {
              width: 0.79rem;
              height: 0.03rem;
              background: url("../../assets/img/about-left-line.png") no-repeat
                center center;
              background-size: 100% 100%;
            }
            .right-branch {
              width: 0.79rem;
              height: 0.03rem;
              background: url("../../assets/img/about-right-line.png") no-repeat
                center center;
              background-size: 100% 100%;
            }
          }
          .topic {
            padding: 0.18rem 0;
            color: #dfd393;
            border-top: 1px solid #dfd393;
            border-bottom: 1px solid #dfd393;
            text-align: center;
          }
        }
        .item2 {
          text-align: center;
          padding: 0.52rem 0;
          background: url("../../assets/img/about-item2-bg.png") no-repeat
            center center;
          background-size: 100% 100%;
          position: relative;
          &::after {
            content: "";
            width: 0.77rem;
            height: 0.77rem;
            position: absolute;
            right: -0.12rem;
            top: -0.03rem;
            background: url("../../assets/img/dec-img3.png") no-repeat center
              center;
            background-size: 100% 100%;
          }
        }
        .item3 {
          padding: 0.29rem 0.48rem;
          position: relative;
          &::after {
            content: "";
            width: 0.6rem;
            height: 0.42rem;
            position: absolute;
            right: -0.07rem;
            top: -0.42rem;
            background: url("../../assets/img/about-dec@2x.png") no-repeat
              center center;
            background-size: 100% 100%;
          }
          &::before {
            content: "";
            width: 0.6rem;
            height: 0.42rem;
            position: absolute;
            left: -0.15rem;
            bottom: -0.58rem;
            background: url("../../assets/img/about-dec@.png") no-repeat center
              center;
            background-size: 100% 100%;
          }
          p {
            margin-bottom: 0.09rem;
          }
          background: url("../../assets/img/about-item3-bg.png") no-repeat
            center center;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.video-enter,
.video-leave-to {
  opacity: 0;
}
.video-enter-to,
.video-leave {
  opacity: 1;
}
.video-enter-active,
.video-leave-active {
  transition: all 1s;
}
</style>
