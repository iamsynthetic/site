import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'
// import Sortable from 'vue-sortable'
import router from './router'
import firebase from 'firebase'
import store from './store'
import 'vue-awesome/icons'
import BootstrapVue from 'bootstrap-vue'
import Moment from 'vue-moment'
//import vueScrollbar from 'vue-scrollbar';

import vueSmoothScrollWebsites from 'vue-smoothscroll-websites'
Vue.use(vueSmoothScrollWebsites)

import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)


Vue.use(BootstrapVue)
Vue.use(Vuelidate)
// Vue.use(Sortable)
Vue.use(Moment)
//Vue.use(vueScrollbar)



axios.defaults.baseURL = 'https://vuejs-axios-ee86c.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)


new Vue({
  el: '#app',
  router,
  store,  
  render: h => h(App)
})
