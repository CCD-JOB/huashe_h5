import Vue from 'vue'
import App from './App.vue'
import './mixins/dpr-img'
import 'vant/lib/index.css'
import router from './router'
import store from './store'
import '../src/assets/scss/_index.scss'
import '../src/assets/scss/_reset.scss'
import './vant-config' // 配置vant
import HighchartsVue from 'highcharts-vue'
import highcharts from 'highcharts'
import vuescroll from 'vuescroll'
import './utils/veeValidator.config'


Vue.config.productionTip = false
Vue.prototype.$hc = highcharts
Vue.use(HighchartsVue)
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      

      detectResize: true,
      easing: 'easeInQuad',
      speed: 100
    },
    scrollPanel:{
      scrollingX: false,
    },
    rail: {
      background: '#999999',
      opacity: 1,
      size: '.04rem',
      gutterOfSide: 0,
      specifyBorderRadius: '4px'
    },
    bar: {
      size: '.04rem',
      background: '#fff',
      keepShow: true,
      // onlyShowBarOnScroll: false,
      specifyBorderRadius: '4px'
    }
  } // 在这里设置全局默认配置
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
