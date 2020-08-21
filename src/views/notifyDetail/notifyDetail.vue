<template>
  <div class="notify-container">
    <div class="content-wrapper">
      <div class="topic">{{ notifyData.title }}</div>
      <div class="small-font text-info date">{{ notifyData.releaseDate }}</div>
      <div class="desc">
        {{ notifyData.content }}
      </div>
    </div>
  </div>
</template>
<script>
import { getNoticeInfo } from "@/service/coreApi";
import getRouteToken from '@/mixins/getRouteToken'
export default {
  mixins:[getRouteToken],
  data() {
    return {
      notifyData: ""
    };
    
  },
  computed: {},
  methods: {
    getNoticeInfoFun() {
      let params = {
        id: this.$route.query.notifyId,
        type:this.$route.query.type
      };
      getNoticeInfo(params).then(res => {
        if (res.status === 1) {
          this.notifyData = res.resultBody;
        }
      });
    }
  },
  created() {
    this.getRouteToken()
    this.getNoticeInfoFun();
  }
};
</script>

<style lang="scss" scoped>
.notify-container {
  padding: 0.18rem 0.15rem;
  text-align: center;
  .content-wrapper {
    box-shadow: 0px 0px 0.05rem 0px rgba(74, 74, 74, 0.1);
    border-radius: 0.04rem;
    padding: 0.18rem 0.15rem;
    .topic {
      margin-bottom: 0.04rem;
      font-size: 0.17rem;
    }
    .date {
      margin-bottom: 0.15rem;
    }
    .desc {
      text-align: left;
    }
  }
}
</style>
