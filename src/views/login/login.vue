<template>
    <div>
          <button @click="getImageCodeFun">获取图片验证码</button>
    <input type="text" v-model="imageCode">
      <button @click="getCodeFun">获取验证码</button>
      <input v-model="code" type="text">
      <button>获取token</button>
      <button @click="getConsultingList">获取咨询详情列表接口</button>
    </div>
</template>
<script>
import { getToken, getSmsCode, getImageCode, getConsultationByPage } from '@/service/coreApi';
export default {

  data () {
    return {
      code: '',
      imageCode: '',
      imageId: ''
    };
  },
  computed: {
  },
  methods: {
    getTokenFun () {
      const params = {
        phoneNumber: '15880480296',
        code: this.code,
        registerWay: 1

      };
      getToken(params).then(res => {
        console.log(res);
      });
    },
    getCodeFun () {
      const params = {
        phoneNumber: '15880480296',
        imageCode: this.imageCode,
        id: 1
      };
      getSmsCode(params).then(res => {
        console.log(res);
      });
    },
    getImageCodeFun () {
      const params = {
        id: 1
      };
      getImageCode(params).then(res => {
        console.log(res);
      });
    },
    getConsultingList () {
      const params = {
        ifHot: true,
        consultationType: 1
      };
      getConsultationByPage(params).then(res => {

      });
    }
  },
  created () {
    // this.getTokenFun();
  }
};
</script>

<style scoped lang="sass">
</style>
