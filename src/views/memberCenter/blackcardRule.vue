<template>
    <div class="blackcardRule">
      <div class="rule-img">
        <img  :src="dprImg('cardRule.png')" alt="">
      </div>
      <div class="close-icon flex-center-center"><img :src="dprImg('card-close.png')" alt=""></div>
      
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
<style lang="scss" scoped>
.blackcardRule {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.75);
}
.rule-img {
  padding: 1.2rem .25rem .18rem;
}
.close-icon img {
  width: .35rem;
  height: .35rem;
}

  
</style>
