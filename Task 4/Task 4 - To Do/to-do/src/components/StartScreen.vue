<template>
  <div class="container row">
    <div class="col-5">
      <form @submit.prevent="addList">
        <input class="form-control-sm" v-model="newList" type="text" name="newList" placeholder="Enter your To Do List name..." id="newList">
        <button type="submit" name="button" class="btn btn-primary">Add List</button>
      </form>
      <div id="list" v-for="list in lists" :key="list.id">
        <div id="listToDo">
          <span>{{list.title}}</span>
          <button @click="removeList(list)" type="button" name="button" class="btn btn-danger btn-sm">Delete</button>
          <hr>
        </div>
      </div>
    </div>
    <div class="col-7" v-for="list in lists" :key="list.id">
      <div v-if="pageState === list.index">
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AppStartScreen",
        data() {
            return {
                newList: '',
                pageState: 0,
                index: 0,
                lists: []
            }
        },
        methods: {
            addList () {
                if (this.newList) {
                    this.index++;
                    this.lists.push({
                        title: this.newList,
                        index: this.index
                    });
                    this.newList = '';
                }
            },
            removeList (list) {
                const listIndex = this.lists.indexOf(list);
                this.lists.splice(listIndex, 1);
            }
        }
    }
</script>

<style scoped>
  div.container {
    float: left;
    width: 100%;
    min-height: 500px;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    color: #333333;
    padding: 10px;
  }

  div.container form {
    margin: 5px;
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
</style>
