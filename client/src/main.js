// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'


Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app', // div id=app(index.html)->ใหม้ องหา id=”app” ใน index.html แลว้ render
  router, // import router -> เชืEอมโยงกบั router ทีEโหลดมา
  components: { App }, // import App from './App' -> ใช้ component นDีนะไป render
  template: '<App/>' // บอกวา่ App คือ Vue component
})
