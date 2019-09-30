<template>
  <div>
    <h1>Get all comments</h1>
    <!-- <button><button v-on:click="logout">Logout</button></p> -->
    <h4>จำนวน comment {{comments.length}} </h4>
    <div v-for="comment in comments" v-bind:key="comment.id">
      <p>id: {{ comment.id }} </p>
      <p>blog id: {{ comment.blogId }} </p>
      <p>comment: {{ comment.comment }} </p>
      <p>
        <button v-on:click="navigateTo('/comment/' + comment.id)">ดู comment</button>
        <button v-on:click="deleteComment(comment)">ลบ comment</button>
      </p>
    </div>
  </div>
</template>
<script>
import CommentsService from '@/services/CommentService'

export default {
  data () {
    return {
      comments: []
    }
  },
  async created () {
    this.comments = (await CommentsService.index()).data
  },
  methods: {
    // logout () {
    //   this.$store.dispatch('setToken', null)
    //   this.$store.dispatch('setComment', null)
    //   this.$store.push({
    //     name: 'login'
    //   })
    // },
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteComment (comment) {
      try {
        await CommentsService.delete(comment)
        this.refreshData()
      } catch (err) {
        console.log(err)
      }
    },
    async refreshData() {
      this.comments = (await CommentsService.index()).data
    }
  }
}
</script>
<style scoped>

</style>
