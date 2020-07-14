<template>
  <div>
    <div class="guide-wrapper">
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
            <ValidationProvider
              name="真实姓名"
              rules="required"
              v-slot="{ errors }"
            >
              <van-field
                v-model="form.name"
                placeholder="请填写真实姓名"
                clearable
                border
              />
              <div class="item-block text-danger">{{ errors[0] }}</div>
            </ValidationProvider>
            <ValidationProvider
              name="身份证号码"
              rules="required"
              v-slot="{ errors }"
            >
              <van-field
                v-model="form.idCard"
                placeholder="请填写身份证号码"
                clearable
                border
              />
              <div class="item-block text-danger">{{ errors[0] }}</div>
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
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        No: ''
      }
    };
  },
  computed: {},
  methods: {
    submit () {
      this.$refs.form.validate().then(res => {
        console.log(res);
      });
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
