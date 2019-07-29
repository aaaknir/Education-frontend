<template>
  <div id="app">
    <form @submit.prevent="addTodo">
      <input class="form-control-sm" v-model="newTodo" type="text" name="newTodo" placeholder="Name Todo" id="newTodo">
      <input class="form-control-sm" v-model="newTodoDescription" type="text" name="newTodoDescription" placeholder="Describe Todo" id="newTodoDescription">
      <input class="form-control-sm" v-model="newTodoDate" type="date" name="newTodoDate" id="newTodoDate">
      <select class="form-control" v-model="newTodoPriority" type="" name="newTodoPriopity" id="newTodoPriopity">
        <option>Important</option>
        <option>Middle</option>
        <option>None</option>
      </select>
      <button type="submit" name="button" class="btn btn-primary btn-sm">Add</button>
      <button @click="allDone" type="button" name="button" class="btn btn-success btn-sm">All done</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.done">
        <span :class="{done: todo.done}">{{todo.title}}</span>
        <div id="description">{{todo.description}}</div>
        <div id="date">{{todo.date}}</div>
        <div id="prioprity">{{todo.priority}}</div>
        <button @click="removeTodo(todo)" type="button" name="button" class="btn btn-danger btn-sm" title="Remove"></button>
      </li>
    </ul>
  </div>
</template>


<script>
    export default {
        name: "AppList",
        data() {
            return {
                newTodo: '',
                newTodoDescription: '',
                newTodoDate: '',
                newTodoPriority: '',
                todos: []
            }
        },
        methods: {
            addTodo () {
                if (this.newTodo) {
                    this.todos.push({
                        title: this.newTodo,
                        description: this.newTodoDescription,
                        date:this.newTodoDate,
                        priority: this.newTodoPriority,
                        done: false
                    });
                    this.newTodo = '';
                    this.newTodoDate = '';
                }
            },
            removeTodo (todo) {
                const todoIndex = this.todos.indexOf(todo);
                this.todos.splice(todoIndex, 1);
            },
            allDone () {
                this.todos.forEach(todo => {
                    todo.done = true;
                });
            }
        }
    }
</script>

<style scoped>
  div#app {
    background-color: #1c7430;
    margin: 5px;
    width: 230px;
    min-height: 100px;
    max-height: 350px;
    float: left;
    padding: 5px;
    border-radius: 5px;
    overflow: auto;
    overflow-x: hidden;
  }

  ul {
    float: left;
  }
  ul li {
    width: 210px;
    height: 40px;
    margin: 3px 0 3px;
    padding: 5px;
    list-style: none;
    background-color: white;
    border-radius: 3px;
  }

   ul li span {
    font-family: 'Indie Flower', cursive;
    color: #333333;
    font-size:14px;
  }

  ul li button {
    float: right;
  }

  form button {
    float: right;
    margin: 5px 3px;
  }

   input[type=text] {
     margin-bottom: 3px;
    width: 220px;
  }
 input[type=checkbox] {
    margin: 5px;
  }

  .done {
    text-decoration: line-through;
  }

  #prioprity {
    float: left;
    font-size: 12px;
    font-weight: 700;
    height: 8px;
    line-height: 100px;
    margin: 0 4px 4px 0;
    max-width: 40px;
    min-width: 40px;
    padding: 0;
    text-shadow: none;
    width: auto;
  }

  #date {
    display: inline-block;
    margin: 0 4px 4px 0;
    max-width: 100%;
    min-height: 20px;
    overflow: hidden;
    position: relative;
    padding: 2px;
    text-decoration: none;
    text-overflow: ellipsis;
  }
</style>

