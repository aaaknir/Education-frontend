<template>
  <div class="container">
    <div class="left">
      <form @submit.prevent="addList">
        <input class="form-control-sm" v-model="newList" type="text" name="newList" placeholder="Enter your To Do List name..." id="newList">
        <button type="submit" name="button" class="btn btn-primary">Add List</button>
      </form>
      <div id="list" v-for="list in lists" :key="list.id">
        <div id="listToDo" @click="stateList = list">
          <span>{{list}}</span>
          <button @click="removeList(list)" type="button" name="button" class="btn btn-danger btn-sm">Delete</button>
          <hr>
        </div>
      </div>
      <button @click="stateList=null" type="button" name="button" class="btn btn-info btn-sm">Hide lists</button>
    </div>
    <div class="right" v-if="stateList != null">
      <span id="title_right">{{stateList.title}}</span>
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
        <li v-for="todo in lists[stateList].todos" :key="todo.id">
          <input type="checkbox" v-model="todo.done">
          <span id="title" :class="{done: todo.done}">{{todo.title}}</span>
          <div id="description">{{todo.description}}</div>
          <div id="date">{{todo.date}}</div>
          <span class="badge badge-secondary" id="prioprity">{{todo.priority}}</span>
          <button @click="removeTodo(todo)" type="button" name="button" class="btn btn-danger btn-sm">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AppStartScreen",
        data() {
            return {
                lists: [],
                newList: '',
                stateList: null,
                newTodo: '',
                todos: [],
                newTodoDescription: '',
                newTodoDate: '',
                newTodoPriority: ''
            }
        },
        methods: {
            addList () {
                if (this.newList) {
                    this.lists.push({
                        title: this.newList,
                        todos: this.todos
                    });
                    this.newList = '';
                }
            },
            removeList (list) {
                const listIndex = this.lists.indexOf(list);
                this.lists.splice(listIndex, 1);
            },
            addTodo () {
                if (this.newTodo && this.newTodoDescription && this.newTodoDate && this.newTodoPriority) {
                    this.lists[stateList].todos.push({
                        title: this.newTodo,
                        description: this.newTodoDescription,
                        date:this.newTodoDate,
                        priority: this.newTodoPriority,
                        done: false
                    });
                    this.newTodo = '';
                    this.newTodoDescription = '';
                    this.newTodoDate = '';
                    this.newTodoPriority = '';
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
  div.container {
    float: left;
    width: 100%;
    height: 540px;
    font-family: 'Open Sans', sans-serif;
    color: #333333;
    padding: 10px;
  }

  div.left {
    width: 450px;
    float: left;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }

  div.container form {
    margin-bottom: 5px;
    background-color: rgba(205, 205, 205, 0.8);
    border-radius: 5px;
    padding: 5px;
    width: 100%;
  }

  div.container form input[type=text] {
    width: 330px;
    margin-right: 5px;
    outline-color: #007bff;
  }
  div.left #listToDo button {
    float: right;
  }

  div.left div#listToDo {
    cursor: pointer;
  }

  div.right {
    background-color: #005ab3;
    width: 650px;
    height: 100%;
    float: right;
    padding: 10px;
    border-radius: 5px;
    overflow: auto;
  }

  div.right span#title_right {
    background-color: white;
    padding: 5px;
    border-radius: 3px;
  }

  div.right form {
    margin-top: 10px;
  }

  div.right form button {
    margin: 5px 3px;
  }

  div.right input[type=text] {
    margin-bottom: 3px;
    width: 220px;
  }
  div.right input[type=checkbox] {
    margin: 5px;
  }

  div.right ul li {
    min-height: 10px;
    width: 100%;
    margin: 10px 0;
    padding: 3px;
    list-style: none;
    background-color: white;
    border-radius: 5px;
    font-family: 'Indie Flower', cursive;
    color: #333333;
    font-size: 18px;
  }

  div.right ul li button {
    margin-top: 3px;
    float: right;
  }

  div.right .done {
    text-decoration: line-through;
  }

  div.right #title {
    display: inline-block;
    font-weight: 700;
  }

  div.right #description {
    display: inline-block;
  }

  div.right #prioprity {
    display: inline-block;
    font-size: 14px;
    background-color: #dea833;
    border-radius: 3px;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }

  div.right #date {
    display: inline-block;
    background-color: #8fadde;
    border-radius: 3px;
    padding: 5px;
    margin-left: 10px;
  }
</style>
