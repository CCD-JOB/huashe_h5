<template>
  <div class="merchant-details-wrapper">
    <section class="merchant-details-top">
      <div class="bg" :style="{ backgroundImage: `url(${info.picUrl})` }"></div>
      <img :src="info.picUrl" alt="背景" />
    </section>
    <section class="merchant-details-center">
      <!-- <div>
				<h2>品牌介绍</h2>
				<p>
					天道国际教育下设留学咨询，在线课堂等业务。16年专注欧美高端留学申请，一站式解决方案，拥有海内外精英团队，让优秀的学生更优秀，在名校申请质量、录取率和咨询服务满意度上广受好评，赢得广大学生和家长的认可和信赖。
				</p>
			</div>
			<div>
				<h2>优惠服务</h2>
				<p>
					华设财富黑卡人在天道教育购买产品价格高于20000元，即可获得人民币2000元减免优惠；如低于20000元的产品，亦可获得人民币200元的减免优惠。
				</p>
			</div> -->
      <div v-html="info.content"></div>
    </section>
    <section class="merchant-details-bottom">
      <div class="info">
        <p>
          商户名称：<span>{{ info.brandName }}</span>
        </p>
        <p>
          商户电话：<span>{{ info.telphone }}</span>
        </p>
        <p>
          服务地区：<span>{{ info.serviceArea }}</span>
        </p>
      </div>
      <van-button class="btn" @click="modalFlag = true">我想预定</van-button>
    </section>
    <!-- 预约弹窗 -->
    <div class="appoint-modal" v-if="modalFlag">
      <div class="first">
        <div style="position:relative" class="pic">
          <img
            style="margin:0 auto"
            src="../../assets/img/appoint.png"
            alt=""
          />
          <!-- 关闭按钮 -->
          <div class="close" @click="modalFlag = false">
            <img class="img-block" :src="dprImg('live-close.png')" alt="" />
          </div>
          <!-- 装饰物 -->
          <div class="live-dec">
            <img :src="dprImg('live-dec.png')" alt="" />
          </div>
        </div>
      </div>
      <div class="second">
        <h3>活动预约</h3>
        <p>
          <span>姓名：</span>
          <input
            type="text"
            placeholder="请填写您的姓名"
            v-model="queryParam.realName"
          />
        </p>
        <p>
          <span>电话：</span>
          <input
            type="text"
            v-model="queryParam.phone"
            placeholder="请填写手机号"
          />
        </p>
        <p class="single-btn" @click="appointment">立即预约</p>
      </div>
    </div>
  </div>
</template>

<script>
import { merchantAppointment, aboutMe } from "@/service/coreApi";
export default {
  data() {
    return {
      info: {},
      modalFlag: false,
      queryParam: {
        realName: "",
        phone: ""
      }
    };
  },
  created() {
    this.info = { ...this.$route.params.info };
    this.getMyInfo();
  },
  methods: {
    appointment() {
      const params = {
        name: this.queryParam.realName,
        phone: this.queryParam.phone,
        merchantId: this.info.id
      };

      if (!this.queryParam.realName || !this.queryParam.phone) {
        this.$toast("姓名和手机号不能为空");
      } else {
        merchantAppointment(params).then(res => {
          if (res.status === 1) {
            this.$toast({
              message: "预定成功",
              duration: 500
            });
            this.modalFlag = false;
          } else {
            if (res.msg) {
              this.$toast({
                message: res.msg
              });
            }
            if (res.errorMsg) {
              this.$toast({
                message: res.errorMsg
              });
            }
          }
        });
      }
    },
    getMyInfo() {
      aboutMe({}).then(res => {
        if (res.status === 1) {
        } else {
          if (res.msg) {
            this.$toast({
              message: res.msg
            });
          }
          if (res.errorMsg) {
            this.$toast({
              message: res.errorMsg
            });
          }
        }
      });
    }
  }
};
</script>

<style lang="scss">
.merchant-details-wrapper {
  .merchant-details-top {
    .bg {
      width: 100%;
      height: 152px;
      position: relative;
      background-image: url("./../../assets/img/detail.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom;
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: inherit;
        filter: blur(2px);
        z-index: 1;
      }
    }
    img {
      width: 345px;
      margin: -35% auto 0;
      position: relative;
      z-index: 2;
    }
  }
  .merchant-details-center {
    padding: 0 15px;
    img {
      width: 100% !important;
    }
    div {
      h2 {
        font-size: 18px;
        font-weight: bold;
        line-height: 46px;
        color: #dfd393;
        text-align: center;
        position: relative;
        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 16%;
          width: 30px;
          height: 28px;
        }
        &::before {
          left: 32%;
          background: url("./../../assets/img/leftflow.png") no-repeat;
          background-size: cover;
        }
        &::after {
          right: 32%;
          background: url("./../../assets/img/rightflow.png") no-repeat;
          background-size: cover;
        }
      }
      p {
        font-size: 16px;
        color: #333;
        font-family: PingFang SC;
      }
    }
  }
  .merchant-details-bottom {
    padding: 0 15px;
    margin-top: 20px;
    .info {
      p {
        color: #dfd393;
        font-size: 18px;
        line-height: 26px;
        span {
          color: #333333;
          font-size: 16px;
        }
      }
    }
    .btn {
      margin-top: 0.38rem;
      margin-bottom: 0.28rem;
      width: 100%;
      background: linear-gradient(314deg, #dfd393 4%, #c5b269 95%);
      font-size: 18px;
      color: #fff;
    }
  }
  .appoint-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 999;
    div.first {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 100%;
      position: relative;
      img {
        width: 80%;
      }
      .close {
        position: absolute;
        top: 0.26rem;
        right: 24%;
        color: #7e5518;
        font-size: 0.2rem;
        width: 0.2rem;
        height: 0.2rem;
        z-index: 999;
        img {
          width: 100%;
        }
      }
      .live-dec {
        position: absolute;
        top: .05rem;
        right: 17%;
        width: 1.06rem;
        height: 0.73rem;
        img {
          width: 100%;
          display: block;
        }
      }
    }
    div.second {
      width: 50%;
      position: absolute;
      top: 49%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      text-align: center;
      h3 {
        color: #7e5518;
        font-weight: bold;
        font-size: 0.18rem;
      }
      p {
        border-bottom: 1px solid #7e5518;
        padding-bottom: 0.1rem;
        padding-top: 0.15rem;
        span {
          color: #7e5518;
          font-size: 0.16rem;
        }
        input {
          width: 1.28rem;
          border: none;
          background: none;
          color: #7e5518;
          &::placeholder {
            color: #7e5518;
            opacity: 0.48;
          }
        }
      }
      .single-btn {
        width: 100%;
        padding: 0;
        border: none;
        margin-top: 0.7rem;
        margin-bottom: 0.28rem;
      }
    }
  }
}
</style>
