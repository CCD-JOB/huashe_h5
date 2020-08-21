import Vue from 'vue'
import {
  Swipe,
  SwipeItem,
  Checkbox,
  CheckboxGroup,
  Field,
  Form,
  Toast,
  Dialog,
  Overlay,
  Loading 
} from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Field)
Vue.use(Form)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Overlay)
Vue.use(Loading)

Vue.prototype.$dialog = Dialog
Vue.prototype.$toast = Toast
