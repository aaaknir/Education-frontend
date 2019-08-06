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
    addTodo(state, state_list) {
      if (state.new_todo && state.new_todo_description && state.new_todo_date && state.new_todo_priority) {
        state_list.todos.push({
          title: state.new_todo,
          description: state.new_todo_description,
          date: state.new_todo_date,
          priority: state.new_todo_priority,
          done: false
        });
        state.new_todo = '';
        state.new_todo_description = '';
        state.new_todo_date = '';
        state.new_todo_priority = '';
      }
    },
    allDone(state, state_list) {
      state_list.todos.forEach(todo => {
        todo.done = true;
      });
    },
    removeTodo(state, {todo, state_list}) {
      const todo_index = state_list.todos.indexOf(todo);
      state_list.todos.splice(todo_index, 1);
    }
  },
  actions:{
    addTodo(context, state_list) {
      context.commit('addTodo', state_list)
    },
    allDone(context, state_list) {
      context.commit('allDone', state_list)
    },
    removeTodo(context, {todo, state_list}) {
      context.commit('removeTodo', {todo, state_list})
    }
  },
  getters: {
    newTodo(){
      return this.state.new_to.new_todo;
    },
    newTodoDate(){
      return this.state.new_to.new_todo_date;
    },
    newTodoDescription(){
      return this.state.new_to.new_todo_description;
    },
    newTodoPriority(){
      return this.state.new_to.new_todo_priority;
    }
  }
}
