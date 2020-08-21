<template>
  <div>
    <div class="guide-wrapper">
      <div class="guide-text  flex-center-center big-font fw700">
        <span>欢迎来到</span><span class="text-theme">华设财富</span>
      </div>
      <!-- 实名认证过后 -->
      <div>
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
            <img :src="dprImg('small-logo.png')" alt="" />
            <div class="txt">选择理财师</div>
          </div>
          <div class="lines line4"></div>
        </div>
        <div class="text-center text-theme">
          选择理财师
        </div>
      </div>
      <!-- 没有实名认证的 -->
      <!-- <div v-if="realNameStatus!==1">
        <div class="steps-container flex-0-center item-block">
        <div class="lines line1"></div>
        <div class="step1 steps">
          <img :src="dprImg('small-logo.png')" alt="" />
          <div class="txt">注册</div>
        </div>
        <div class="lines line2"></div>
        <div class="step2 steps">
          <div class="dot"><img :src="dprImg('dot.png')" alt="" /></div>
          <div class="txt text-info">实名认证</div>
        </div>
        <div class="lines line3"></div>
        <div class="step3 steps">
          <img :src="dprImg('small-logo.png')" alt="" />
          <div class="txt">选择理财师</div>
        </div>
        <div class="lines line4"></div>
      </div>
      <div class="text-center text-theme">
        选择理财师
      </div>
      </div> -->
      <ValidationObserver ref="form">
        <form @submit.prevent="submit" action="">
          <div class="cell-form">
            <ValidationProvider name="理财师姓名" rules="required">
              <van-field
                v-model="form.consultantName"
                placeholder="请填写理财师姓名"
                clearable
                border
              />
            </ValidationProvider>
            <ValidationProvider name="理财师工号" rules="required">
              <van-field
                v-model="form.consultantId"
                placeholder="请填写理财师工号"
                clearable
                border
              />
            </ValidationProvider>
          </div>

          <div class="item-block">
            <button type="submit" class="single-btn">提交</button>
          </div>
        </form>
      </ValidationObserver>

      <div style="margin-top:.15rem" class="small-font text-info item-block">
        若您没有指定的理财师，可直接提交系统分配。
      </div>
    </div>
  </div>
</template>
<script>
import { chooseConsultant } from "@/service/coreApi.js";
export default {
  data() {
    return {
      form: {
        consultantName: "",
        consultantId: ""
      },
      realNameStatus: ""
    };
  },
  computed: {},
  methods: {
    submit() {
      if (!this.form.consultantName && this.form.consultantId) {
        this.$toast("请填写理财师姓名");
      } else if (this.form.consultantName && !this.form.consultantId) {
        this.$toast("请填写理财师工号");
      } else if (this.form.consultantId && this.form.consultantName) {
        this.chooseConsultantFun();
      } else {
        this.$toast({
          message: "提交成功",
          icon: require("@/assets/img/success.png"),
          className: "imgTips",
          duration: 500
        });
        this.$router.push("/certifyCenter");
      }
    },
    chooseConsultantFun() {
      const consultantId = this.form.consultantId;
      const consultantName = this.form.consultantName;
      const params = {
        consultantId,
        consultantName
      };
      chooseConsultant(params).then(res => {
        if (res.status === 1) {
          this.$toast({
            message: "绑定成功",
            icon: require("@/assets/img/success.png"),
            className: "imgTips",
            duration: 500
          });
          window.setTimeout(() => {
            this.$router.push("/certifyCenter");
          }, 300);
        } else if (res.status === -1) {
          this.$toast({
            message: "理财师信息错误,请重新填写",
            duration: 1000
          });
        }
      });
    }
  },
  created() {
    this.realNameStatus = this.$route.params.realNameStatus;
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
</style>
