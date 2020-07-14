<template>
    <div>
      <div class="item-block">
        <div class="title big-font fw700">华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议</div>
        <div class="sub-title text-info small-font mb18">
          <span>华设财富</span><span>2020-03-03</span><span>12:58:50</span>
        </div>
      </div>
      <div class="pic"></div>
      <div class="content">
        <div class="item">华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议,华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议</div>
        <div class="item">华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议,华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议</div>
        <div class="item">华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议,华设财富宣布完成新一轮融资并与知名投资机构签署战略合作协议</div>
      </div>
    </div>
</template>
<script>
import { getConsultationInfo } from '@/service/coreApi';
export default {
  data () {
    return {
    };
  },
  computed: {
  },
  methods: {
    getConsultationInfoFun () {
      const params = {
        id: 232
      };
      getConsultationInfo(params).then(res => {
        console.log(res);
      });
    }
  },
  created () {
    this.getConsultationInfoFun();
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: .09rem;
}
.sub-title span {
  margin-right: .09rem;
}
.pic {
  width: 100%;
  height: 2.38rem;
  background-color: purple;
}
.content {
  padding: .18rem .15rem;
  .item {
    margin-bottom: .09rem;
    &:last-child {
      margin-bottom: .09rem;
    }
  }
}

</style>
