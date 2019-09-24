// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import VueResource from 'vue-resource'


Vue.config.productionTip = false

Vue.use(VueResource)

sync(store, router)


/* eslint-disable no-new */
new Vue({
  el: '#app', // div id=app(index.html)->ใหม้ องหา id=”app” ใน index.html แลว้ render
  router, // import router -> เชืEอมโยงกบั router ทีEโหลดมา
  store, // store.js data ที่ชื่อว่า store ของเราใน Vue Object ของเราเพ่ือให' vue application ของเราร'ูจัก this.$store ของเราทุก Component
  components: { App }, // import App from './App' -> ใช้ component นDีนะไป render
  template: '<App/>' // บอกวา่ App คือ Vue component
})


