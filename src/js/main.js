var app = new Vue({
  el:'#app',
  data: {
    message: 'hi, Vue',
    todos: [],
    newTodo: ''
  },
  methods: {
    addTodo: function (todo) {
      this.todos.push({content:todo, complete:false});
    },
    deleteTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  }
}) 
// console.log('done')