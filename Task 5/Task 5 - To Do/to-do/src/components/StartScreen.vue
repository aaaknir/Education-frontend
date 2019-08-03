<template>
  <div class="container">

    <!-- Left column. List of lists'names -->
    <div class="left-column">

      <!-- Form of adding lists -->
      <form @submit.prevent="addList">
        <input maxlength="51" class="form-control-sm" v-model="new_list" type="text" name="new_list" placeholder="Enter your To Do list name..." id="new_list"><label for="new_list"></label>
        <button type="submit" name="button" class="btn btn-primary">Add list</button>
      </form>

      <!-- Displaying list of lists -->
      <div id="lists-display" v-for="list in lists" :key="list.id ">
        <div id="list" @click="chooseList(list)">

          <!-- Remove list -->
          <div id="list-remove">
            <button @click="removeList(list)" type="button" name="button" class="btn btn-danger btn-sm">&times;</button>
          </div>

          <!-- Displaying list name -->
          <div id="list-name">
            <span>{{list.title}}</span>
          </div>
        </div>
      </div>

      <!-- Hide info in right column -->
      <button v-if="state_list != null" @click="state_list=null" type="button" name="button" class="btn btn-info btn-sm" id="button-hide">Hide list's info</button>
      <app-game></app-game>
    </div>

    <!-- Right column. Info about list, to-do list -->
    <div class="right-column" v-if="state_list != null">
      <span id="title-right">{{state_list.title}}</span>

      <!-- Axios -->
      <button class="btn btn-sm btn-warning" @click="postPost" id="button-axios">Axios</button>

      <!-- Form of adding todos -->
      <form @submit.prevent="$store.todo.mutations.addTodo(state_list)">
        <input maxlength="51" class="form-control-sm" v-model="$store.todo.state.new_todo" type="text" name="new_todo" placeholder="Name Todo" id="new_todo"><label for="new_todo"></label>
        <input maxlength="51" class="form-control-sm" v-model="$store.todo.state.new_todo_description" type="text" name="new_todo_description" placeholder="Describe Todo" id="new_todo_description"><label for="new_todo_description"></label>
        <select class="form-control" v-model="$store.todo.state.new_todo_priority" type="" name="new_todo_priority" id="new_todo_priority">
          <option>important</option>
          <option>middle</option>
          <option>none</option>
        </select><label for="new_todo_priority"></label>
        <label for="new_todo_date">Deadline</label><input class="form-control-sm" v-model="$store.todo.state.new_todo_date" type="date" name="new_todo_date" id="new_todo_date">
        <button type="submit" name="button" class="btn btn-primary btn-sm">Add</button>
        <button @click="$store.todo.mutations.allDone(state_list)" type="button" name="button" class="btn btn-success btn-sm">All done</button>
      </form>

      <!-- Filter panel -->
      <div id="to-do-panel">
        <button class="btn btn-outline-secondary btn-sm" :class="{active: filter === 'all'}" @click="filter = 'all'">All</button>
        <button class="btn btn-outline-secondary btn-sm" :class="{active: filter === 'active'}" @click="filter = 'active'">Active</button>
        <button class="btn btn-outline-secondary btn-sm" :class="{active: filter === 'completed'}" @click="filter = 'completed'">Completed</button>
        <button class="btn btn-outline-secondary btn-sm" :class="{active: filter === 'important'}" @click="filter = 'important'">Important</button>
        <button class="btn btn-outline-secondary btn-sm" :class="{active: filter === 'middle'}" @click="filter = 'middle'">Middle</button>
        <button class="btn btn-outline-secondary btn-sm" :class="{active: filter === 'none'}" @click="filter = 'none'">None</button>
      </div>

      <!-- Info in right-column -->
      <div id="right-info">
        <ul>
          <li v-for="todo in todoFiltered(state_list)" :key="todo.id">
            <input type="checkbox" id="checkbox" v-model="todo.done"><label for="checkbox"></label>
            <span id="title" :class="{done: todo.done}">{{todo.title}}</span><br>
            <div id="description" :class="{done: todo.done}">{{todo.description}}</div><br>
            <div id="date">{{todo.date}}</div>
            <span class="badge badge-info" id="priority">{{todo.priority}}</span>
            <button @click="$store.todo.actions.removeTodo(todo, state_list)" type="button" name="button" class="btn btn-danger btn-sm">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "AppStartScreen",
        data() {
            return {
                new_list: '',
                lists: [],
                state_list: null,
                filter: 'all'
            }
        },
        computed: {

        },
        methods: {
            chooseList(list) {
                this.state_list = list;
            },
            addList() {
                let todos = [];
                if (this.new_list) {
                    this.lists.push({
                        title: this.new_list,
                        todos: todos
                    });
                    this.new_list = '';
                }
            },
            todoFiltered (list) {
                switch (this.filter) {
                    case 'all': return list.todos;
                    case 'active': return list.todos.filter(todo => !todo.done);
                    case 'completed': return list.todos.filter(todo => todo.done);
                    case 'important': return list.todos.filter(todo => todo.priority === this.filter);
                    case 'middle': return list.todos.filter(todo => todo.priority === this.filter);
                    case 'none': return list.todos.filter(todo => todo.priority === this.filter);
                    default: return list.todos;
                }
            },
            removeList(list) {
                const list_index = this.lists.indexOf(list);
                this.lists.splice(list_index, 1);
                this.state_list = null;
            },
            postPost() {
                const str = JSON.stringify(this.lists);
                axios.post('http://localhost:8081/', str)
                    .then(response => (this.lists = response));
            }
        }
    }
</script>

<style scoped lang="less">

  div.container {
    width: 100%;
    height: 500px;
    font-family: 'Open Sans', sans-serif;
    color: #333333;
    margin: 0 auto;
    padding: 5px;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  div.container input {
    outline-color: #007bff;
  }

  div.container button:hover {
    box-shadow: 3px 3px 3px #ccc;
  }

  div.container div.left-column {
    width: 100%;
    height: 500px;
    overflow: auto;
    overflow-x: hidden;
  }

  div.container div.left-column form {
    margin-bottom: 5px;
    background-color: rgba(205, 205, 205, 0.8);
    border-radius: 5px;
    padding: 10px;
    width: 100%;
  }

  div.container div.left-column form input[type=text] {
    width: calc(100% - 92px);
    margin-right: 5px;
    padding: 10px 18px;
  }

  div.container div.left-column button#button-hide {
    margin-top: 10px;
    float: right;
  }

  div.container div.left-column div#list {
    cursor: pointer;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }

  div.container div.left-column div#lists-display:hover {
    background-color: rgba(187, 207, 200, 0.2);
  }

  div.container div.left-column div#list div#list-name {
    padding: 10px;
    margin-left: 12px;
  }

  div.container div.left-column div#list div#list-remove {
    margin-left: 14px;
  }

  div.container div.right-column {
    width: 100%;
    height: 500px;
    padding: 10px;
    margin-left: 20px;
    border: 2px solid #ccc;
    border-radius: 5px;
    overflow: auto;
    overflow-x: hidden;
    background-color: #e9e9e9;
  }

  div.container div.right-column span#title-right {
    margin-left: 10px;
    width: 100%;
    padding: 5px;
    border-radius: 3px;
    font-size: 20px;
    font-weight: bold;
  }

  div.container div.right-column button#button-axios {
    float: right;
  }

  div.container div.right-column form {
    margin-top: 5px;
  }

  div.container div.right-column form button {
    margin: 5px auto;
  }

  div.container div.right-column input[type=text] {
    margin-bottom: 3px;
    width: 100%;
  }

  div.container div.right-column input[type=date] {
    margin-bottom: 3px;
    margin-left: 5px;
    margin-right: 175px;
  }

  div.container div.right-column input[type=checkbox] {
    margin: 5px;
  }

  div.container div.right-column div#to-do-panel {
    margin: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #ccc;
    border-radius: 5px;
  }

  div.container div.right-column div#right-info {
    background-color: #007bff;
    float: left;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  div.container div.right-column div#right-info ul li {
    float: left;
    min-height: 10px;
    width: 525px;
    margin: 10px;
    padding: 3px;
    list-style: none;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    font-family: 'Indie Flower', cursive;
    color: #333333;
    font-size: 18px;
  }

  div.container div.right-column div#right-info ul li button {
    margin-top: 3px;
    float: right;
  }

  div.container div.right-column .done {
    text-decoration: line-through;
  }

  div.container div.right-column div#right-info ul li #title {
    display: inline-block;
    font-weight: 700;
  }

  div.container div.right-column #description {
    margin-left: 20px;
    display: inline-block;
    width: 400px;
    height: 30px;
  }

  div.container div.right-column #priority {
    display: inline-block;
    font-size: 14px;
    border-radius: 3px;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }

  div.container div.right-column #date {
    display: inline-block;
    background-color: #8fadde;
    border-radius: 3px;
    padding: 5px;
    margin-left: 10px;
  }
</style>
