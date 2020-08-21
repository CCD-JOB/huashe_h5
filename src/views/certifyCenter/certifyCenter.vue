<template>
  <div>
    <div class="bg"></div>
    <div class="item-block">
      <div class="tips">
        根据监管要求，在投资理财产品前，您需要按需求完成以下步骤
      </div>
      <ul class="lists">
        <!-- 实名认证 -->
        <li @click="toCertify" class="list-item flex-between-center">
          <div class="label">实名认证</div>
          <div class="status flex-0-center">
            <van-loading v-if="myInfo.length === 0" type="spinner" />
            <div v-if="myInfo.length !== 0">
              <div
                :class="{
                  txt: true,
                  'text-info': myInfo.realNameStatus !== 1,
                  'text-theme': myInfo.realNameStatus === 1
                }"
              >
                {{ myInfo.realNameStatus === 1 ? "已认证" : "未认证" }}
              </div>
            </div>
            <div class="icon">
              <img :src="dprImg('right-arrow.png')" alt="" />
            </div>
          </div>
        </li>
        <!-- 银行卡 -->
        <li class="list-item flex-between-center">
          <div class="label">银行卡</div>
          <div class="status flex-0-center">
            <van-loading v-if="myInfo.length === 0" type="spinner" />
            <div v-if="myInfo.length !== 0">
              <div
                :class="{
                  txt: true,
                  'text-info': myInfo.bindingCardStatus !== 1,
                  'text-theme': myInfo.bindingCardStatus === 1
                }"
              >
                {{ myInfo.bindingCardStatus === 1 ? "已绑定" : "未绑定" }}
              </div>
            </div>
            <div class="icon">
              <img
                style="visibility:hidden"
                :src="dprImg('right-arrow.png')"
                alt=""
              />
            </div>
          </div>
        </li>
        <!-- 风险测评 -->
        <li class="list-item flex-between-center">
          <div class="label">风险测评</div>
          <div class="status flex-0-center">
            <van-loading v-if="myInfo.length === 0" type="spinner" />
            <div v-if="myInfo.length !== 0">
              <div
                :class="{
                  txt: true,
                  'text-info': !myInfo.riskLevel,
                  'text-theme': myInfo.riskLevel
                }"
              >
                {{ myInfo.riskLevel ? myInfo.riskLevel : "未完成" }}
              </div>
            </div>
            <div class="icon">
              <img
                style="visibility:hidden"
                :src="dprImg('right-arrow.png')"
                alt=""
              />
            </div>
          </div>
        </li>

        <!-- 投资者认定 -->
        <li @click="toQualifiedInvestor" class="list-item flex-between-center">
          <div class="label">投资者认定</div>
          <div class="status flex-0-center">
            <van-loading v-if="myInfo.length === 0" type="spinner" />
            <div v-if="myInfo.length !== 0">
              <div
                :class="{
                  txt: true,
                  'text-info': myInfo.investorStatus !== 1,
                  'text-theme': myInfo.investorStatus === 1
                }"
              >
                {{ myInfo.investorStatus === 1 ? "通过认定" : "未认定" }}
              </div>
            </div>
            <div class="icon">
              <img :src="dprImg('right-arrow.png')" alt="" />
            </div>
          </div>
        </li>
        <!-- 我的理财师 -->
        <li @click="bindFinancialPlanner" class="list-item flex-between-center">
          <div class="label">我的理财师</div>
          <div class="status flex-0-center">
            <van-loading v-if="myInfo.length === 0" type="spinner" />
            <div v-if="myInfo.length !== 0">
              <div
                :class="{
                  txt: true,
                  'text-info': !myInfo.consultantName,
                  'text-theme': myInfo.consultantName
                }"
              >
                {{ myInfo.consultantName ? "已绑定" : "未绑定" }}
              </div>
            </div>
            <div class="icon">
              <img :src="dprImg('right-arrow.png')" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { aboutMe } from "@/service/coreApi";
export default {
  data() {
    return {
      myInfo: ""
    };
  },
  computed: {},
  methods: {
    async getMyinfo() {
      aboutMe({}).then(res => {
        if (res.status === 1) {
          this.myInfo = res.resultBody;
        }
      });
    },
    toCertify() {
      //实名认证
      this.$router.push("/toCertify");
    },
    toQualifiedInvestor() {
      
      //投资者认证
      if (this.myInfo.realNameStatus === 1) {
        if(this.myInfo.investorStatus!==1){
          this.$router.push("/QualifiedInvestor");
        
      }else {
        this.$toast('您已完成合格投资者认定，无需跳转页面')
      }
        
      } else {
        this.$toast("请先去完成实名认证");
      }
    },
    bindFinancialPlanner() {
      //绑定理财师
      if (this.myInfo.realNameStatus === 1) {
        if (this.myInfo.consultantName) {
          this.$router.push("/finPlannerIntro");
        } else {
          // 去綁定
          this.$router.push({
            name: "chooseAdviser",
            params: {
              realNameStatus: 1 //已经实名过
            }
          });
        }
      }else {
        this.$toast("请先去完成实名认证");
      }
    }
  },
  created() {
    if (this.$route.query.token) {
      let token = this.$route.query.token;
      window.sessionStorage.setItem("token", token);
    }
    this.getMyinfo();
  }
};
</script>
<style lang="scss" scoped>
.bg {
  height: 0.7rem;
  background: url("../../assets/img/certifyCenter-bg.png") no-repeat center -0.1rem;
  background-size: 100% 100%;
}
.tips {
  font-size: 0.13rem;
}
.lists {
  .list-item {
    border-bottom: 1px solid #eeeeee;
    padding: 0.18rem 0;
    .icon img {
      width: 0.22rem;
      height: 0.22rem;
    }
  }
}
</style>
