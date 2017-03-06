<template>
  <div id="app">
    <img src="./assets/logo.png">

    <form id="form" class="form-inline" v-on:submit.prevent="addBook">
      <div class="form-group">
        <label for="bookTitle">Title:</label>
        <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
      </div>
      <div class="form-group">
        <label for="bookAuthor">Author:</label>
        <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
      </div>
      <div class="form-group">
        <label for="bookUrl">Url:</label>
        <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
      </div>
      <input type="submit" class="btn btn-primary" value="Add Book">
    </form>

    <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books">
            <td><a v-bind:href="book.url">{{book.title}}</a></td>
            <td>{{book.author}}</td>
            <td><button v-on:click="removeBook(book)">Remove book</button></td>
          </tr>
        </tbody>
      </table>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDaKqznBRg23_9U3A1V86dVDBfyobXjbGU',
  authDomain: 'vue-test-4edba.firebaseapp.com',
  databaseURL: 'https://vue-test-4edba.firebaseio.com',
  storageBucket: 'vue-test-4edba.appspot.com',
  messagingSenderId: '718581588405'
}

let app = Firebase.initializeApp(config)
let db = app.database()

let booksRef = db.ref('books')

export default {
  name: 'app',

  firebase: {
    books: booksRef
  },

  data () {
    return {
      newBook: {
        title: '',
        author: '',
        url: 'http://'
      }
    }
  },

  methods: {
    addBook: function () {
      booksRef.push(this.newBook)
      this.newBook.title = ''
      this.newBook.author = ''
      this.newBook.url = 'http://'
    },
    removeBook: function (book) {
      booksRef.child(book['.key']).remove()
    }
  },

  components: {
    Hello
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table{
  border: 1px solid;
}
</style>
