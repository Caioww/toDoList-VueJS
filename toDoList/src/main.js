import Vue from 'vue'
import App from './App.vue'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueResource from 'vue-resource';



Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({ 
  routes, 
  mode: 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
