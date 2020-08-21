<template>
	<div>
    <input type="text" v-model="tel" placeholder="输入手机号">
		<button @click="getImageCodeFun">获取图片验证码</button> <img :src="imageCode"
			alt=""><br>
		<input type="text"
			v-model="imgCodeVal"
			placeholder="请输入图形验证码后获取验证码"><button @click="getCodeFun">获取验证码</button>
		<input v-model="code"
			type="text">
		<button @click="getTokenFun">获取token</button>
		<button @click="getConsultingList">获取咨询详情列表接口</button>
	</div>
</template>
<script>
import {
  getToken,
  getSmsCode,
  getImageCode,
  getConsultationByPage
} from '@/service/coreApi';
export default {
  data () {
    return {
      code: '',
      imageCode: '',
      imageId: '',
      imgCodeVal: '',
      tel:''
    };
  },
  computed: {},
  methods: {
    getTokenFun () {
      const params = {
        phoneNumber: this.tel,
        code: this.code,
        registerWay: 1
        // code: this.code,
      };
      getToken(JSON.stringify(params)).then(res => {
        sessionStorage.setItem('token', res.resultBody.token);
      });
    },
    getCodeFun () {
      const params = {
        phoneNumber: this.tel,
        imageCode: this.imgCodeVal,
        id: 1234567890
      };
      getSmsCode(JSON.stringify(params)).then(res => {
        console.log(res);
      });
    },
    // 获取图片雁阵吗
    getImageCodeFun () {
      const params = {
        id: 1234567890
      };
      getImageCode(params)
        .then(res => {
          return (
            'data:image/png;base64,' +
						btoa(
						  new Uint8Array(res).reduce(
						    (data, byte) => data + String.fromCharCode(byte),
						    ''
						  )
						)
          );
        })
        .then(data => {
          this.imageCode = data;
          console.log(data);
        });
    },

    getConsultingList () {
      const params = {
        ifHot: false,
        consultationType: 3
      };
      getConsultationByPage(params).then(res => {
        console.log(res);
      });
    }
  },
  created () {}
};
</script>

<style scoped lang="sass">
</style>
