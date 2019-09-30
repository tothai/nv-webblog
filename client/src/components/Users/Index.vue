
<template>
  <div>
    <h1>Get All Users</h1>
    <!-- <button><button v-on:click="logout">Logout</button></p> -->
    <h4>จำนวนผู้ใช้ = {{ users.length }} ท่าน</h4>
    <div v-for="user in users" v-bind:key="user.id">
      <p>id: {{ user.id }} </p>
      <p>ชื่อ-นามสกุล {{ user.name }} - {{ user.lastname }} </p>
      <p>email: {{ user.email }} </p>
      <p>password: {{ user.password }} </p>
      <p><button v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูลผู้ใช้</button>
          <button v-on:click="navigateTo('/user/edit/'+user.id)">แก้ไขข้อมูลผู้ใช้</button>
          <button v-on:click="navigateTo('/user/create/')">เพิ่มผู้ใช้งาน</button>
          <button v-on:click="deleteUser(user)">ลบผู้ใช้จากระบบ</button>
      </p>
      <hr>
    </div>
    <!-- <div v-if="users.length">
      <div>จำนวนผุ้ใช้งาน = {{ users.length }} ท่าน</div>
      <div>id: {{ users[0].id }}</div>
      <div>ชื่อ-นามสกุล:  {{ users[0].name }} - {{ users[0].lastname }} </div>
      <div>email: {{ users[0].email }} </div>
      <div>password: {{ users[0].password }} </div>
    </div> -->
  </div>
</template>
<script>
import UsersService from '@/services/UsersService'

export default {

  data () {
    return {
      users: []
    }
  },
  async created () {
    try {
      this.users = (await UsersService.index()).data
      // console.log(this.users)
      // let results = (await UsersService.index()).data
      // console.log(results)
    } catch (error) {
        console.log (error)
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route) //สั่งให้วิ่งไปที่ใช้ this.$router
    },
    async deleteUser  (user) {
      let result = confirm("Do you want to delete?.")
      if (result) {
        try {
          await UsersService.delete(user)
          this.refreshData()
        } catch (err) {
            console.log (err)
        }
      }
    },
    async refreshData  () {
      this.users = (await UsersService.index()).data
    },
    // logout () {
    //   this.$store.dispatch('setToken', null)
    //   this.$store.dispatch('setUser', null)
    //   this.$router.push({
    //     name: 'login'
    //   })
    // }
  }
  // created () {
  //   this.$http.get('http://localhost:8081/users')
  //   .then(function (response) {
  //     console.log(response)
  //   })
  // }
}
</script>
<style scoped>

</style>>

