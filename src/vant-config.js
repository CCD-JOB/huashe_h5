import Vue from 'vue';
import { Button, Swipe, SwipeItem, Checkbox, CheckboxGroup, Field, Form, Toast, Dialog } from 'vant';

Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Field);
Vue.use(Form);
Vue.use(Toast);
Vue.use(Dialog);

Vue.prototype.$dialog = Dialog;
