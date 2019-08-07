export default {
  state: {
    lists: []
  },

  mutations: {
    addList(state, new_list) {
      let todos = [];
      if (new_list) {
        state.lists.push({
          title: new_list,
          todos: todos
        });
      }
    },
    removeList(state, list) {
      const list_index = state.lists.indexOf(list);
      state.lists.splice(list_index, 1);
    },
    addTodo(state, new_to) {
      state.lists[new_to.new_todo_number].todos.push({
        title: new_to.new_todo,
        description: new_to.new_todo_description,
        date: new_to.new_todo_date,
        priority: new_to.new_todo_priority,
        done: false
      });
    },
    allDone(state, state_list) {
      state.lists[state_list].todos.forEach(todo => {
        todo.done = true;
      });
    },
    removeTodo(state, remove) {
      const todo_index = state.lists[remove.num].todos.indexOf(remove.todo);
      state.lists[remove.num].todos.splice(todo_index, 1);
    }
  },

  actions:{
    addList(context, new_list) {
      context.commit('addList', new_list)
    },
    removeList(context, list) {
      context.commit('removeList', list)
    },
    addTodo(context, new_to) {
      context.commit('addTodo', new_to)
    },
    allDone(context, state_list) {
      context.commit('allDone', state_list)
    },
    removeTodo(context, remove) {
      context.commit('removeTodo', remove)
    }
  },

  getters: {
    allLists(state){
      return state.lists;
    },
    allTodos (state, filtered) {
      const list = filtered.list;
      switch (filtered.filter) {
        case 'all': return state.lists[list].todos;
        case 'active': return state.lists[list].todos.filter(todo => !todo.done);
        case 'completed': return state.lists[list].todos.filter(todo => todo.done);
        case 'important': return state.lists[list].todos.filter(todo => todo.priority === this.filter);
        case 'middle': return state.lists[list].todos.filter(todo => todo.priority === this.filter);
        case 'none': return state.lists[list].todos.filter(todo => todo.priority === this.filter);
        default: return state.lists[list].todos;
      }
    }
  }
}
