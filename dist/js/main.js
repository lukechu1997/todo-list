var app = new Vue({
  el:'#app',
  data: {
    message: 'hi, Vue',
    todos: [],
    newTodo: ''
  },
  methods: {
    add: function (todo) {
      this.todos.push({content:todo, complete:false})
    }
  }
}) 
// console.log('done')