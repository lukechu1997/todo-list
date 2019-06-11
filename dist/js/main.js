var app = new Vue({
  el:'#app',
  data: {
    message: 'hi, Vue',
    todos: [],
    newTodo: '',
    newDate: ''
  },
  methods: {
    addTodo: function (todo, date) {
      this.todos.push({content:todo, time:date, complete:false});
    },
    deleteTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  }
}) 
