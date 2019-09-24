import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/Edituser'
import UserShow from '@/components/Users/ShowUser'

// Authen
import Login from '@/components/Login'

// Comments
import CommentIndex from '@/components/Comments/Index'

// Blogs
import BlogIndex from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogShow from '@/components/Blogs/ShowBlog'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {// authen
      path: '/login',
      name: 'login',
      component: Login
    },
    {// show all
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    { // create
      path:'/user/create',
      name:'users-create',
      component: UserCreate
    },
    {// edit
      path:'/user/edit/:userId',
      name:'user-edit',
      component: UserEdit
    },
    {// show by id
      path:'/user/:userId',
      name:'user',
      component: UserShow
    },
    // Blogs
    {// blog index
      path:'/blogs',
      name:'blogs',
      component: BlogIndex
    },
    {// blog create
      path:'/blog/create',
      name:'blog-create',
      component: BlogCreate
      },
    {// blog edit
      path:'/blog/edit/:blogId',
      name:'blog-edit',
      component: BlogEdit
    },
    {// blog show
      path:'/blog/:blogId',
      name:'blog',
      component: BlogShow
      },
      // comments
    {// blog index
      path:'/comments',
      name:'comments',
      component: CommentIndex
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
