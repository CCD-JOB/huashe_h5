<template>
  <div style="height:100%">
    <div v-if="showDiv">
      <div v-show="!hasCetified" class="guide-wrapper">
        <div class="guide-text  flex-center-center big-font fw700">
          <span>欢迎来到</span><span class="text-theme">华设财富</span>
        </div>
        <div class="steps-container flex-0-center item-block">
          <div class="lines line1"></div>
          <div class="step1 steps">
            <img :src="dprImg('small-logo.png')" alt="" />
            <div class="txt">注册</div>
          </div>
          <div class="lines line2"></div>
          <div class="step2 steps">
            <img :src="dprImg('small-logo.png')" alt="" />
            <div class="txt">实名认证</div>
          </div>
          <div class="lines line3"></div>
          <div class="step3 steps">
            <div class="dot"><img :src="dprImg('dot.png')" alt="" /></div>
            <div class="txt text-info">选择理财师</div>
          </div>
          <div class="lines line4"></div>
        </div>
        <div class="text-center text-theme">
          请填写本人真实信息，核对后不可修改
        </div>
        <ValidationObserver ref="form">
          <form @submit.prevent="submit" action="">
            <div class="cell-form">
              <ValidationProvider name="真实姓名" rules="required">
                <van-field
                  v-model="form.realName"
                  placeholder="请填写真实姓名"
                  clearable
                  border
                />
                <!-- v-slot="{ errors }" -->
                <!-- <div class="item-block text-danger">{{ errors[0] }}</div> -->
              </ValidationProvider>
              <div @click="selectCardType" style="position:relative">
                <van-field v-model="cardName" clearable border disabled />
                <div class="arrow-icon">
                  <img
                    v-show="!showPicker"
                    class="img-block"
                    :src="dprImg('down-arrow.png')"
                    alt=""
                  />
                  <img
                    v-show="showPicker"
                    class="img-block"
                    :src="dprImg('up-arrow.png')"
                    alt=""
                  />
                </div>
              </div>
              <ValidationProvider name="身份证号码" rules="required">
                <!--  v-slot="{ errors }" -->
                <van-field
                  v-model="form.cardNumber"
                  placeholder="请填写证件号"
                  clearable
                  border
                />
                <!-- <div class="item-block text-danger">{{ errors[0] }}</div> -->
              </ValidationProvider>
            </div>

            <div class="item-block">
              <button type="submit" class="single-btn">下一步</button>
            </div>
          </form>
        </ValidationObserver>
        <div style="margin-top:.15rem" class="small-font text-info item-block">
          如果您已在线下完成实名认证，请点击验证身份
        </div>
      </div>
    </div>

    <!-- 弹出层 -->
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        ref="pickerRef"
        show-toolbar
        :swipe-duration="300"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <!-- <van-overlay :show="showLoading">
      <van-loading color="#fff" class="flex-center-center" style="height:100vh" type="spinner" />
    </van-overlay> -->
    <div v-if="showDiv">
      <certificated-page
        v-show="hasCetified"
        :realName="name"
        :cardNumber="cardNumber"
        :myInfo="myInfo"
      ></certificated-page>
    </div>
  </div>
  <!-- 实名通过 -->
</template>
<script>
import {
  aboutMe,
  getH5BizToken,
  getH5FaceIdResult,
  certificationVerify
} from "@/service/coreApi";
import certificatedPage from "@/components/CertificatedPage";
import getRouteToken from "@/mixins/getRouteToken";

export default {
  mixins: [getRouteToken],
  data() {
    return {
      name: "",
      cardNumber: "",
      hasCetified: false,
      cardName: "身份证",
      showLoading: true,
      showDiv: false,
      myInfo:'',
      form: {
        realName: "",
        cardType: 1,
        cardNumber: ""
      },
      showPicker: false,
      columns: [
        "身份证",
        "护照",
        "港澳台胞证",
        "机构营业执照",
        "中华人民共和国外国人永久居留身份证"
      ],
      biz_no: "",
      bizId: "",
      certifyFaceHtml: ""
    };
  },
  computed: {},
  components: { certificatedPage },
  methods: {
    selectCardType() {
      this.showPicker = true;
    },
    // 实名认证接口
    certificationVerifyFun() {
      const certifyForm = JSON.parse(localStorage.getItem("certifyForm"));
      certificationVerify(certifyForm).then(res => {
        // 实名认证过后获取aboutMe
        if (res.status === 1) {
          // 调用aboutMe接口
          this.getBizNo();
        }
      });
    },
    // 获取faceId结果的
    getH5FaceIdResultFun() {
      const params = {
        bizId: this.bizId || window.localStorage.getItem("bizId")
      };
      // 移除bizId
      window.localStorage.removeItem("bizId");
      // 获取人脸识别结果
      getH5FaceIdResult(params).then(res => {
        if (res.status === 1) {
          this.hasCetified = true;
          // 人脸识别过后才调用实名认证的接口
          if (localStorage.getItem("certifyForm")) {
            this.certificationVerifyFun();
          }
        } else {
          // 错误也要吧页面打开不然是空白的额
          this.showDiv = true;
          this.hasCetified = false;
          if (res.msg) {
            this.$toast(res.msg);
          } else {
            this.$toast("认证不通过，请重新认证");
          }
        }
      });
    },
    // 获取人脸识别token
    getBizTokenFun() {
      const params = {
        userName: this.form.realName,
        cardNumber: this.form.cardNumber,
        returnUrl: "http://47.100.101.170:8086/toCertify",
        notifyUrl: "http://47.100.101.170:8086/toCertify"
      };
      getH5BizToken(params).then(res => {
        if (res.status === 1) {
          //獲取人脸识别token
          const bizToken = res.resultBody.token;
          this.bizId = res.resultBody.biz_id;
          // 储存bizId
          window.localStorage.setItem("bizId", this.bizId);
          // 跳转第三方人脸识别网页
          window.open(
            `https://api.megvii.com/faceid/lite/do?token=${bizToken}`,
            "_self"
          );
        } else {
          if (res.errorMsg === "MISSING_ARGUMENTS: idcard_number") {
            this.$toast("请填写证件号");
          } else if (res.errorMsg === "MISSING_ARGUMENTS: idcard_name") {
            this.$toast("请填写真实姓名");
          } else if (res.errorMsg === "INVALID_IDCARD_NUMBER") {
            this.$toast("身份证号码错误，请修改");
          } else if (res.errorMsg === "INVALID_NAME_FORMAT") {
            this.$toast("名字格式不对，请修改");
          } else {
            this.$toast("系统开小差，请稍后再试");
          }
        }
      });
    },
    // 获取我的信息
    getBizNo() {
      aboutMe({}).then(res => {
        if (res.status === 1) {
          this.showDiv = true;
          this.biz_no = res.resultBody.id;
          this.myInfo=res.resultBody
          if (res.resultBody.realNameStatus == 1) {
            this.hasCetified = true;
            this.showLoading = false;
            this.name = res.resultBody.name;
            this.cardNumber = res.resultBody.cardNumber;
          }
        } else {
          console.log(res.errorMsg);
        }
      });
    },
    // 选择证件类型
    onConfirm(val) {
      this.$nextTick(() => {
        this.form.cardType = this.$refs.pickerRef.getIndexes()[0] + 1;
        switch (this.form.cardType) {
          case 1:
            this.cardName = "身份证";
            break;
          case 2:
            this.cardName = "护照";
            break;
          case 3:
            this.cardName = "港澳台胞证";
            break;
          case 4:
            this.cardName = "机构营业执照";
            break;
          case 5:
            this.cardName = "中华人民共和国外国人永久居留身份证";
            break;
        }
      });
      this.showPicker = false;
    },
    // 提交开始人脸识别
    submit() {
      // 非身份证情况
      if (this.form.cardType !== 1) {
        if (!this.form.realName || !this.form.cardNumber) {
          this.$toast("姓名和证件号必填");
        } else {
          certificationVerify(this.form).then(res => {
            if (res.status === 1) {
              this.$toast({
                message: "提交成功",
                duration: 500
              });
              this.$router.push("/certifyCenter");
            }
          });
        }
      } else {
        //身份证情况
        // 储存姓名和身份证号
        window.localStorage.setItem("certifyForm", JSON.stringify(this.form));
        this.getBizTokenFun();
      }
    }
  },
  created() {
    this.getRouteToken();
    if (localStorage.getItem("bizId")) {
      this.getH5FaceIdResultFun();
    } else {
      this.getBizNo();
    }
  }
};
</script>

<style lang="scss" scoped>
.guide-wrapper {
  padding-top: 0.18rem;
  .steps-container {
    padding-top: 0.11rem;
    padding-bottom: 0.48rem;
    .lines {
      height: 1px;
      background-color: #c5b269;
    }
    .steps {
      width: 0.16rem;
      height: 0.16rem;
      position: relative;

      img {
        display: block;
        width: 100%;
      }
      .txt {
        position: absolute;
        top: 0.25rem;
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
      }
    }
    .line1,
    .line4 {
      flex: 1;
    }
    .line2,
    .line3 {
      flex: 2.1;
    }
    .dot {
      width: 0.28rem;
      height: 0.28rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .cell-form {
    .arrow-icon {
      width: 0.22rem;
      height: 0.22rem;
      position: absolute;
      right: 0.15rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.single-btn {
  margin-top: 0.56rem;
  display: block;
  width: 100%;
  border: none;
}
</style>
<style lang="scss" scoped>
/deep/ .van-cell {
  padding: 0.18rem 0.15rem;
  font-size: 0.17rem;
  &::after {
    right: 0.15rem;
    border-bottom: 1px solid #eeeeee;
  }
}
/deep/ .van-cell--borderless::after,
.van-cell:last-child::after {
  display: block;
}
/deep/ .van-icon-clear {
  &::before {
    width: 0.19rem;
    height: 0.19rem;
    background: url("../../assets/img/close.png") no-repeat center center;
    background-size: 100% 100%;

    content: "";
  }
}
/deep/ .van-field__control:disabled {
  color: #333333;
}
</style>
<style lang="scss" scoped>
//选择器样式
/deep/ .van-picker {
  .van-picker-column {
    font-size: 0.19rem;
  }
  .van-picker__toolbar {
    height: 0.36rem;
    border-bottom: 0.01rem solid #999999;
  }
  .van-picker-column__item {
    color: #999999;
    &.van-picker-column__item--selected {
      color: #333333;
    }
  }
  .van-picker__cancel {
    color: #000;
  }
  .van-picker__confirm {
    color: #c5b269;
  }
  [class*="van-hairline"]::after {
    border-color: #999999;
  }
  .van-picker__frame {
    left: 0;
    right: 0;
  }
}
</style>
