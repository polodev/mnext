
window.Vue = require('vue');

window.Events = new Vue();

Vue.component('app-dominic', require('./component/dominic.vue').default);
Vue.component('app-palace', require('./component/palace.vue').default);
Vue.component('app-holder', require('./component/holder.vue').default);

const app = new Vue({
  el: '#app'
})

