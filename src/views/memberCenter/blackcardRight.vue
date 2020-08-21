<template>
  <div>
    <section class="merchant-details-top">
			<div class="bg"
				></div>
			<img src="@/assets/img/blackcard-bg.png"
				alt="背景">
		</section>
    <div class="item-block">
      <div class="tabs just-flex">
        <div
          v-for="(item, index) in tabsData"
          :key="index"
          @click="toSwitch(index)"
          :class="{ 'tab-item': true, active: item.active }"
        >
          {{ item.txt }}
        </div>
      </div>
      <div class="content-box">
        <ul class="lists">
          <li
            v-for="(item, index) in merchantList"
            :key="index"
            class="item"
            @click="goRelate(item)"
          >
            <div class="pic"><img :src="item.picUrl" alt="" /></div>

            <div class="bottom-txt text-ellipsis">{{ item.contentTitle }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getMerchantList } from "@/service/coreApi";
export default {
  data() {
    return {
      tabsData: [
        {
          txt: "超享教育",
          active: true
        },
        {
          txt: "私享健康",
          active: false
        },
        {
          txt: "品质生活",
          active: false
        }
      ],
      activeIndex: 0,
      merchantList: [] // 商户列表
    };
  },
  computed: {},
  methods: {
    toSwitch(index) {
      this.tabsData.forEach((item, index) => {
        this.tabsData[index].active = false;
      });
      this.tabsData[index].active = true;
      this.getMerchantListFun(index);
    },
    getMerchantListFun(index = 0) {
      const params = {
        merchantType: index
      };
      getMerchantList(params).then(res => {
        if (res.status == 1) {
          this.merchantList = res.resultBody;
        }
      });
    },
    goRelate(item) {
      this.$router.push({
        name: "merchantDetails",
        params: {
          info: item
        }
      });
    }
  },
  created() {
    if (this.$route.query.token) {
      let token = this.$route.query.token;
      window.sessionStorage.setItem("token", token);
    }
    this.getMerchantListFun();
  }
};
</script>

<style lang="scss" scoped>
.merchant-details-top {
		.bg {
			width: 100%;
			height: 1.52rem;
			position: relative;
			background-image: url('../../assets/img/blackcard-bg.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			background-position: bottom;
			&::after {
				content: '';
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: inherit;
				filter: blur(7px);
				z-index: 1;
			}
		}
		img {
			width: 3.45rem;
			margin: -35% auto 0;
			position: relative;
			z-index: 2;
		}
	}


.tabs {
  border-radius: 0.12rem;
  background-color: #f5f5f5;
  margin-top: 0.18rem;
  margin-bottom: 0.14rem;
  .tab-item {
    flex: 1;
    color: #dfd393;
    text-align: center;
    border-radius: 0.12rem;
    padding: 0.02rem 0;
    &.active {
      background-color: #dfd393;
      color: #0d274e;
    }
  }
}
.content-box {
  padding-bottom: 0.2rem;
  .lists .item {
    margin-bottom: 0.09rem;
    .pic {
      height: 1.45rem;
      img {
        height: inherit;
      }
    }
    .bottom-txt {
      background-color: #0d274e;
      padding: 0.04rem 0.09rem;
      color: #dfd393;
      border-radius: 0 0 0.04rem 0.04rem;
    }
  }
}
</style>
