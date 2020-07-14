import Vue from 'vue';
Vue.mixin({
  methods: {
    dprImg (imgPath) {
      const dpr = Math.round(
        window.devicePixelRatio ? window.devicePixelRatio : 1
      );
      const index = imgPath.lastIndexOf('.');
      if (dpr === 1) {
        return require(`@/assets/img/${imgPath}`);
      } else if (dpr === 2) {
        return require(`@/assets/img/${imgPath.substring(
          0,
          index
        )}@2x.${imgPath.substring(index + 1)}`);
      } else {
        return require(`@/assets/img/${imgPath.substring(
          0,
          index
        )}@3x.${imgPath.substring(index + 1)}`);
      }
    }
  }
});
