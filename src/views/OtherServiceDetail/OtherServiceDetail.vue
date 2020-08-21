<template>
  <div>
    <div class="finPlanner-container">
      <img
        style="height:2.74rem"
        class="img-block"
        :src="productDetail.imgPath"
        alt=""
      />
      <div
        class="mask item-block flex-0-center"
        :style="{ backgroundImage: 'url(' + productDetail.imgPath + ')' }"
      ></div>
      <div class="content item-block flex-0-center">
        <div class="">
          <div class="name text-theme s-big-font">
            {{ productDetail.contentTitle }}
          </div>
          <div class="price">{{productDetail.remark}}</div>
        </div>
      </div>
    </div>
    <div v-html="productDetail.content" class="detail-container"></div>
  </div>
</template>
<script>
import { getOtherServiceInfo } from "@/service/coreApi";
import getRouteToken from '@/mixins/getRouteToken'
export default {
  mixins:[getRouteToken],
  data() {
    return {
      productDetail: {}
    };
  },
  computed: {},
  methods: {
    getOtherServiceInfoFun() {
      console.log(11);
      let params = {
        id: this.$route.query.productId
      };
      getOtherServiceInfo(params).then(res => {
        if (res.status === 1) {
          this.productDetail = res.resultBody;
        }
      });
    }
  },
  created() {
    this.getRouteToken()
    this.getOtherServiceInfoFun();
  }
};
</script>

<style lang="scss" scoped>
.finPlanner-container {
  height: 2.74rem;
  position: relative;
  overflow: hidden;
  .mask {
    height: 0.83rem;
    background-repeat: no-repeat;
    background-size: 100% 2.74rem;
    background-position: 0px -1.9rem;
    -moz-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content {
    height: 0.83rem;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.1rem 0.14rem;
    color: #fff;
    .name {
      margin-bottom: 0.09rem;
      font-size: 0.18rem;
      color: #dfd393;
    }
  }
}
.detail-container {
  padding: 0.1rem 0.15rem;
}
</style>
