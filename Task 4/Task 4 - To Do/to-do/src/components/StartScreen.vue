<template>
  <div class="container">

    <!-- Left column. List of lists'names -->
    <div class="left-column">

      <!-- Form of adding lists -->
      <form @submit.prevent="addList">
        <input maxlength="51" class="form-control-sm" v-model="newList" type="text" name="newList" placeholder="Enter your To Do list name..." id="newList"><label for="newList"></label>
        <button type="submit" name="button" class="btn btn-primary">Add list</button>
      </form>

      <!-- Displaying list of lists -->
      <div id="lists-display" v-for="list in lists" :key="list.id ">
        <div id="list" @click="state_list=list">

          <!-- Remove list -->
          <div id="list-remove">
            <button @click="removeList(list)" type="button" name="button" class="btn btn-danger btn-sm">&times;</button>
          </div>

          <!-- Displaying list name -->
          <div id="list-name">
            <span>{{list}}</span>
          </div>
        </div>
      </div>

      <!-- Hide info in right column -->
      <button @click="state_list=null" type="button" name="button" class="btn btn-info btn-sm">Hide lists</button>
    </div>

    <!-- Right column. Info about list, to-do list -->
    <div class="right-column" v-if="state_list != null">
      <span id="title-right">{{state_list.title}}</span>

      <!-- Form of adding todos -->
      <form @submit.prevent="addTodo">
        <input maxlength="51" class="form-control-sm" v-model="newTodo" type="text" name="newTodo" placeholder="Name Todo" id="newTodo"><label for="newTodo"></label>
        <input maxlength="51" class="form-control-sm" v-model="newTodoDescription" type="text" name="newTodoDescription" placeholder="Describe Todo" id="newTodoDescription"><label for="newTodoDescription"></label>
        <label for="newTodoDate">Deadline</label><input class="form-control-sm" v-model="newTodoDate" type="date" name="newTodoDate" id="newTodoDate">
        <select class="form-control" v-model="newTodoPriority" type="" name="newTodoPriority" id="newTodoPriority">
          <option @click="type = 'success'">Important</option>
          <option @click="type = 'warning'">Middle</option>
          <option @click="type = 'dark'">None</option>
        </select><label for="newTodoPriority"></label>
        <button type="submit" name="button" class="btn btn-primary btn-sm">Add</button>
        <button @click="allDone" type="button" name="button" class="btn btn-success btn-sm">All done</button>
      </form>

      <!-- Filter panel -->
      <div id="to-do-panel">
        <button :class="{active: filter = 'all'}" @click="filter = 'all'">All</button>
        <button :class="{active: filter = 'active'}" @click="filter = 'active'">Active</button>
        <button :class="{active: filter = 'completed'}" @click="filter = 'completed'">Completed</button>
        <button :class="{active: filter = 'important'}" @click="filter = 'important'">Important</button>
        <button :class="{active: filter = 'middle'}" @click="filter = 'middle'">Middle</button>
        <button :class="{active: filter = 'none'}" @click="filter = 'none'">None</button>
      </div>

      <!-- Info in right-column -->
      <div id="right-info">
        <ul>
          <li v-for="todo in todosFiltered(state_list)" :key="todo.id">
            <input type="checkbox" id="checkbox" v-model="todo.done"><label for="checkbox"></label>
            <span id="title" :class="{done: todo.done}">{{todo.title}}</span><br>
            <div id="description" :class="{done: todo.done}">{{todo.description}}</div><br>
            <div id="date">{{todo.date}}</div>
            <span class="badge badge-secondary" id="priority">{{todo.priority}}</span>
            <button @click="removeTodo(todo)" type="button" name="button" class="btn btn-danger btn-sm">Remove</button>
          </li>
        </ul>
      </div>

      <!-- Axios -->
      <button class="btn btn-sm btn-outline-secondary" @click="postPost">Axios</button>
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
                newTodo: '',
                newTodoDescription: '',
                newTodoDate: '',
                newTodoPriority: '',
                state_list: null,
                filter: 'all',
                type: 'success'
            }
        },
        methods: {
            addList() {
                let todos = new Array(0);
                if (this.newList) {
                    this.lists.push({
                        title: this.newList,
                        todos: todos
                    });
                    this.newList = '';
                }
            },
            todosFiltered (list) {
                if (this.filter === 'all') {
                    return list.todos;
                } else if (this.filter === 'active') {
                    return list.todos.filter(todo => !todo.done)
                } else if (this.filter === 'completed') {
                    return list.todos.filter(todo => todo.done)
                }
                return list.todos;
            },
            removeList(list) {
                const listIndex = this.lists.indexOf(list);
                this.lists.splice(listIndex, 1);
                this.state_list = null;
            },
            addTodo() {
                if (this.newTodo && this.newTodoDescription && this.newTodoDate && this.newTodoPriority) {
                    this.state_list.todos.push({
                        title: this.newTodo,
                        description: this.newTodoDescription,
                        date: this.newTodoDate,
                        priority: this.newTodoPriority,
                        done: false
                    });
                    this.newTodo = '';
                    this.newTodoDescription = '';
                    this.newTodoDate = '';
                    this.newTodoPriority = '';
                    console.log(this.type);
                }
            },
            removeTodo(todo) {
                const todoIndex = this.state_list.todos.indexOf(todo);
                this.state_list.todos.splice(todoIndex, 1);
            },
            allDone() {
                this.state_list.todos.forEach(todo => {
                    todo.done = true;
                });
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
    padding: 10px 10px 10px 20px;
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
  }

  div.container div.right-column div#right-info {
    background-color: #007bff;
    float: left;
    margin-bottom: 5px;
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

  div.container div.right #description {
    display: inline-block;
    width: 400px;
    height: 30px;
  }

  div.container div.right #priority {
    display: inline-block;
    font-size: 14px;
    border-radius: 3px;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }

  div.container div.right #date {
    display: inline-block;
    background-color: #8fadde;
    border-radius: 3px;
    padding: 5px;
    margin-left: 10px;
  }
</style>
