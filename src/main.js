import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Message from './Message.vue'
import Home from './Home.vue'
import User from './User.vue'

Vue.component('app-message', Message)
Vue.use(VueRouter);

const routes= [
  {path: '/', component: Home},
  {path: '/users/:teamId', component: User}
]

const router = new VueRouter({  
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
