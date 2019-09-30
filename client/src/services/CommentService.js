import Api from '@/services/Api'

export default {

  // get all comment
  index () { return Api().get('comments')},

  // get comment by id
  show (commentId) { return Api().get('comment/' + commentId)},

  // post comment, create
  post (comment) { return Api().post('comment', comment)},

  // put comment, edit, suspend, active
  put (comment) { return Api().put('comment/' + commentId, comment)},

  // delete comment, remove
  delete (comment) { return Api().delete('comment/' + commentId, comment)},

}


