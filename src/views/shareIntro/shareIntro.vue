<template>
  <div>
    <img :src="dprImg('shareIntro.png')" alt="">
      <div class="single-btn">
      立即下载
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    };
  },
  computed: {
  },
  methods: {
  }
};
</script>
<style lang="scss" >
img {
  display: block;
  width: 100vw;
  height:auto;
}
.single-btn {
  position: fixed;
  bottom: .54rem;
  left: .15rem;
  right: .15rem;
}
</style>
