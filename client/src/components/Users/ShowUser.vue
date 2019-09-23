<template>
  <div v-if="this.user">
    <h1>Get User By Id</h1>
    <p>User Id: {{ user.id }} </p>
    <p>ชื่อ-นามสกุล {{ user.name }} - {{ user.lastname }} </p>
    <p>email: {{ user.email }} </p>
    <p>password: {{ user.password }} </p>
    <p><button v-on:click="navigateTo('/users')">กลับหน้าแรก</button></p>
  </div>
</template> <script>
import UsersService from '@/services/UsersService'
export default {
  data () {
    return {
      user: null
      // userId: 0
    }
  },
  async created () {
    try {
      let userId = this.$route.params.userId
      this.user = (await UsersService.show(userId)).data
      // this.userId = this.$route.params.userId // อ่านค่าใช้ this.$route
    } catch (error) {
        console.log (error)
    }
  },
  methods: { // เมื่อสร้างปุ่ม ต้องสร้าง Methods ด้วยเสมอ ไม่เช่นนั้นการแสดงผลจะไม่สมบูรณ์
    navigateTo (route) {
      this.$router.push(route) //สั่งให้วิ่งไปที่ใช้ this.$router
    },
  }
}
</script>
<style scoped>

</style>

