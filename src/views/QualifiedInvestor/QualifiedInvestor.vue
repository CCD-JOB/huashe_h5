<template>
  <div>
    <div class="item-block section1">
      <div class="title-wrapper just-flex">
        <div class="vertical_bar"></div>
        <div class="title text-theme s-big-font">
          根据《私募投资基金监督管理暂行办法》第四章第十四条规定：
        </div>
      </div>
      <div class="intro">
        私募基金管理人、私募基金销售机构不符合向合格投资者之外的单位和个人募集资金，不得通过报刊电台，电视，互联网等公众传播媒体或者讲座，报告会分析会和布告、传单、手机短信、微信、博客和电子邮件等方式向不特定对象宣传推介。
      </div>
    </div>
    <div class="section2 normal-block small-font text-info">
      华设财富谨遵《私募投资基金兼顾管理暂行办法》之规定，只向特定投资者展示私募基金产品信息，不构成任何投资推介建议。
    </div>
    <div style="height:.04rem;backgroundColor:#F5F5F5"></div>
    <div class="section3 normal-block">
      <div class="title-wrapper just-flex mb18">
        <div class="vertical_bar"></div>
        <div class="title text-theme s-big-font flex-1">
          阁下如有意了解私募投资基金且满足《私募投资基金监督管理暂行办法》关于“合格投资者”标准之规定，即：
        </div>
      </div>
      <van-checkbox-group v-model="result">
        <van-checkbox class="mb9" name="a"
          >具备相应风险识别能力和风险承担能力</van-checkbox
        >
        <van-checkbox class="mb9" name="b"
          >投资于单只私募基金的金额不低于100万元</van-checkbox
        >
        <van-checkbox class="mb9" name="c"
          >个人金融类资产不低于300万元或者最近三年个人年均收入不低于50万元人民币</van-checkbox
        >
      </van-checkbox-group>
    </div>
    <div class="section4 item-block">
      <div class="tips small-font text-info">
        华设财富谨遵《私募投资基金兼顾管理暂行办法》之规定，只向特定投资者展示私募基金产品信息，不构成任何投资推介建议。
      </div>
    </div>
    <div style="margin-bottom: 0.98rem;" class="item-block">
      <div @click="confim" class="single-btn">确认为合格投资者</div>
    </div>
  </div>
</template>
<script>
import { QFIICertification } from "@/service/coreApi";
import getRouteToken from '@/mixins/getRouteToken'
export default {
   mixins: [getRouteToken],
  data() {
    return {
      result: ['a','b','c']
    };
  },
  computed: {},
  methods: {
    // 投资者认证
    QFIICertificationFun() {
      QFIICertification({}).then(res => {
        if (res.status === 1) {
          this.$toast({
             message: '认证成功',
             duration:500
          });
          window.setTimeout(() => {
            this.$router.push("/certifyCenter");
          }, 300);
        }
      });
    },
    confim() {
      if (this.result.length === 3) {
        this.QFIICertificationFun();
      }else {
        this.$toast('需全部勾选才能进行投资者认证')
      }
    },
  },
  created() {
    this.getRouteToken()
  },
};
</script>

<style lang="scss" scoped>
.mb9 {
  margin-bottom: 0.09rem;
}
.vertical_bar {
  width: 0.04rem;
  height: 0.19rem;
  background: linear-gradient(to bottom, #c5b269, #dfd393);
  border-radius: 0.04rem;
  margin-right: 0.09rem;
  margin-top: 0.02rem;
}
.section1 {
  padding-top: 0.18rem;
  border-bottom: 1px solid #eeeeee;
  .title-wrapper {
    .title {
      flex: 1;
    }
  }
  .intro {
    text-indent: 0.2rem;
    padding: 0.09rem 0 0.18rem;
  }
}
.section3 {
  border-bottom: 1px solid #eee;
}
.section4 .tips {
  padding: 0.18rem 0 0.41rem;
}

</style>
<style lang="scss" scoped>
/deep/ .van-checkbox__icon .van-icon {
  border-color: #999999;
}
/deep/ .van-checkbox {
  align-items: baseline;
}
/deep/ .van-checkbox__icon .van-icon {
  width: 0.15rem;
  height: 0.15rem;
  font-size: 0.1rem;
  // background-color: #fff;
}
/deep/ .van-checkbox__icon--checked .van-icon {
  background-color: #fff;
  color: #c5b269;
  border-color: #c5b269;
}
/deep/ .van-checkbox__label {
  margin-left: 0.09rem;
  line-height: 1.5;
}
/deep/.van-checkbox-group {
  padding-left: 0.13rem;
}
</style>
