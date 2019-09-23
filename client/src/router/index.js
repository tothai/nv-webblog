import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/Edituser'
import UserShow from '@/components/Users/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path:'/user/create',
      name:'users-create',
      component: UserCreate
    },
    {
      path:'/user/edit/:userId',
      name:'user-edit',
      component: UserEdit
    },
    {
      path:'/user/:userId',
      name:'user',
      component: UserShow
    },
  ]
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
