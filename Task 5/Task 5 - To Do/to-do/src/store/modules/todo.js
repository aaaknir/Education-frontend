export default {
  state: {
    new_to: {
      new_todo: '',
      new_todo_description: '',
      new_todo_date: '',
      new_todo_priority: '',
    }
  },
  mutations: {
    addTodo(state_list) {
      if (this.new_todo && this.new_todo_description && this.new_todo_date && this.new_todo_priority) {
        state_list.todos.push({
          title: this.new_todo,
          description: this.new_todo_description,
          date: this.new_todo_date,
          priority: this.new_todo_priority,
          done: false
        });
        this.new_todo = '';
        this.new_todo_description = '';
        this.new_todo_date = '';
        this.new_todo_priority = '';
      }
    },
    allDone(state_list) {
      state_list.todos.forEach(todo => {
        todo.done = true;
      });
    },
  },
  actions: {
    removeTodo(todo, state_list) {
      const todo_index = state_list.todos.indexOf(todo);
      state_list.todos.splice(todo_index, 1);
    },
  },
  getters: {

  }
}
