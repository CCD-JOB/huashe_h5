<template>
  <div>
    <div class="banner flex-0-center">
      <div class="txt text-light-theme fw700">
        <span>“投资，</span><br />
        <span>还需要从了解自己开始”</span>
      </div>
    </div>
    <!-- <div class="item-block pic">
        <img class="img-block" :src="dprImg('test-tip.png')" alt="">
      </div> -->
    <div class="item-block flex-center-center">
      <div class="top-title small-font dart-blue-color flex-center-center">
        共8题，可能会占用您1分钟左右时间
      </div>
    </div>
    <div class="tests-container  item-block">
      <div class="test-item mb9" v-for="(item,index) in topic" :key="index">
        <div class="mb14 question big-font"><strong>{{index+1}}.</strong><strong>{{item.questionName}}</strong></div>
        <van-checkbox-group v-model="result">
          <van-checkbox v-for="(answer,index) in item.answers" :key="index" label-position="left" class="mb14 s-big-font" name="a"
            >{{answer.answerName}}</van-checkbox
          >
        </van-checkbox-group>
      </div>
    </div>
      <div @click="submit" class="single-btn">确认提交</div>
  </div>
</template>
<script>
import { getQuestionnaire } from '@/service/coreApi.js';
export default {
  data () {
    return {
      result: [],
      topic: []
    };
  },
  computed: {

  },
  methods: {
    submit () {
      this.$dialog.confirm({
        title: '温馨提示',
        message: '您尚未完成测评，是否放弃测评',
        confirmButtonText: '继续测评',
        cancelButtonText: '放弃测评'
      });
    },
    getQuestionnaireFun () {
      const params = {};
      getQuestionnaire(params).then(res => {
        if (res.status === 1) {
          this.topic = res.resultBody.topic;
        }
      });
    }
  },
  created () {
    this.getQuestionnaireFun();
  }
};
</script>

<style lang="scss" scoped>
.banner {
  height: 1.2rem;
  background: #101941 url("../../assets/img/test-bg@2x.png") no-repeat center
    center;
  background-size: 100% 100%;
  .txt {
    margin-left: 1.22rem;
  }
}
.pic {
  height: 0.54rem;
}
.top-title {
  width: 3.22rem;
  height: 0.24rem;
  background: linear-gradient(
    180deg,
    rgba(223, 211, 147, 1) 0%,
    rgba(197, 178, 105, 1) 100%
  );
  border-radius: 0.04rem 0.04rem 0 0;
  margin-top: 0.14rem;
}
.tests-container {
  margin-bottom: .7rem;
  .question { padding-right: .28rem;}

  .test-item {
    box-shadow:0px 0px .1rem rgba(77,77,77,0.1);
    padding: .18rem .23rem .27rem .18rem;
    border-radius: .04rem;
    box-sizing: border-box;
    &:last-child {
      margin-bottom: 0px;
    }
  }
}
.single-btn {
  position: fixed;
  left: .15rem;
  right: .15rem;
  bottom: .11rem;
}
</style>
<style lang="scss" scoped>
/deep/ .van-checkbox__label {
  line-height: 1.5;
}
/deep/ .van-checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/deep/ .van-checkbox__icon .van-icon {
  width: .13rem;
  height: .13rem;
 border: 1px solid #999999;

}
/deep/ .van-icon-success::before {
    content: '';
  }
  /deep/ .van-checkbox__icon.van-checkbox__icon--checked i {
    background-color: #DFD393;
    border: 1px solid #DFD393;
  }

</style>
