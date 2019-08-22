<template>
    <div>
        <div class="container">
            <!-- Header with block's name -->
            <header>
                <span class="home" @click="changeState">HOME</span>
                <span class="block-name"><span>{{this.$store.getters.BlockName}}</span><span v-if="state_list != null"> - {{state_list.title}}</span></span>
            </header>

            <!-- Customize progress bar -->
            <div  class="progress-ring">
                <div class="progress-ring-circle">
                    <span>0%</span>
                </div>
            </div>

            <!-- Form's of adding todos -->
            <form id="new-todo" @submit.prevent="addNewTodo(state_list)">
                <label><input v-model="new_todo" type="text" placeholder="What do you need to do?" id="new-todo-name" form="new-todo"></label>
                <label><input v-model="new_todo_description" type="text" placeholder="Describe your to do" id="new-todo-description" form="new-todo"></label>
                <label><input type="date" placeholder="Deadline" v-model="new_todo_date" id="new-todo-date" form="new-todo"></label>
                <label><select v-model="new_todo_priority" id="new-todo-priority" form="new-todo">
                    <option>!!!</option>
                    <option>!!</option>
                    <option>!</option>
                    <option>none</option>
                </select></label>
                <button type="submit" name="button" id="add-button"><span>+</span></button>
            </form>

            <div class="filter-panel">
                <span>Choose</span>
                <button type="button" :class="{active: filter === 'all'}" @click="filter = 'all'" class="button button-large">ALL</button>
                <button type="button" :class="{active: filter === 'done'}" @click="filter = 'done'" class="button button-large">DONE</button>
                <button type="button" :class="{active: filter === 'active'}" @click="filter = 'active'" class="button button-large">ACTIVE</button>
                <button type="button" :class="{active: filter === '!!!'}" @click="filter = '!!!'" class="button button-small important">!!!</button>
                <button type="button" :class="{active: filter === '!!'}" @click="filter = '!!'" class="button button-small middle">!!</button>
                <button type="button" :class="{active: filter === '!'}" @click="filter = '!'" class="button button-small easy">!</button>
                <button type="button" :class="{active: filter === 'none'}" @click="filter = 'none'" class="button button-small">none</button>
                <button type="button" :class="{active: filter === 'date'}" @click="filter = 'date'" class="button button-large">DATE</button>
            </div>

            <div class="todos-panel" v-if="state_list != null">
                <div class="todo" v-for="todo in todoFiltered(state_list)" :key="todo.id">
                    <div class="todo-short">
                        <label><input type="checkbox" v-model="todo.done" @click="show = (snow)"></label>
                        <span class="block-card-short" @click="show = !show">{{todo.title}}</span>
                        <button @click="removeNewTodo(todo, state_list)" class="remove" type="button"><span>x</span></button>
                    </div>
                    <div v-if="!show" class="todo-long" id="new-todo-long">
                        <span class="block-card-long">{{todo.description}}</span>
                        <button class="date" type="button">{{todo.date}}</button>
                        <button class="priority" type="button">{{todo.priority}}</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Block panel -->
        <div class="block-panel">
            <!-- List's form -->
            <form @submit.prevent="addNewList">
                <div>
                    <input maxlength="51" class="form-control-sm" v-model="new_list" type="text" name="new_list" placeholder="Enter your To Do list name..." id="new_list"><label for="new_list"></label>
                    <button type="submit" name="button" class="btn btn-primary">Add list</button>
                </div>
            </form>
            <div class="block-card" v-for="list in this.$store.getters.allLists" :key="list.id ">
                <div @click="chooseList(list)">

                    <!-- Displaying list name -->
                    <div class="block-card-name">
                        <span>{{list.title}}</span>
                    </div>

                    <!-- Remove list -->
                    <div class="block-card-remove">
                        <button @click="removeNewList(list)" type="button" name="button" class="btn btn-danger btn-sm">&times;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppBlockScreen",
        data() {
            return {
                show: true,
                new_list: '',
                new_todo: '',
                new_todo_description: '',
                new_todo_date: '',
                new_todo_priority: '',
                state_list: null,
                filter: 'all'
            }
        },
        methods: {
            changeState() {
                let block_settings = {
                    block_state:  'start',
                    block_name: null
                };
                this.$store.dispatch('changeStatePosition', block_settings);
            },
            chooseList(list) {
                this.state_list = list;
            },
            addNewList() {
                if (this.new_list) {
                    this.$store.dispatch('addList', this.new_list);
                    this.new_list = '';
                }
            },
            removeNewList(list) {
                this.$store.dispatch('removeList', list);
                this.state_list = null;
            },
            todoFiltered (list) {
                switch (this.filter) {
                    case 'all': return list.todos;
                    case 'active': return list.todos.filter(todo => !todo.done);
                    case 'done': return list.todos.filter(todo => todo.done);
                    case '!!!': return list.todos.filter(todo => todo.priority === this.filter);
                    case '!!': return list.todos.filter(todo => todo.priority === this.filter);
                    case '!': return list.todos.filter(todo => todo.priority === this.filter);
                    case 'none': return list.todos.filter(todo => todo.priority === this.filter);
                    case 'date': return list.todos.filter(todo => todo.date);
                    default: return list.todos;
                }
            },
            addNewTodo(state_list) {
                let monthes = ["Jan", "Feb", "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                if (this.new_todo && this.new_todo_description && this.new_todo_date && this.new_todo_priority) {
                    let str = this.new_todo_date;
                    let date = Number(str[8] + str[9]) + " " + monthes[Number(str[5] + str[6])];
                    let new_to = {
                        new_todo: this.new_todo,
                        new_todo_description: this.new_todo_description,
                        new_todo_date: date,
                        new_todo_priority: this.new_todo_priority,
                        new_todo_number: state_list
                    };
                    this.$store.dispatch('addTodo', new_to);
                    this.new_todo = '';
                    this.new_todo_description = '';
                    this.new_todo_date = '';
                    this.new_todo_priority = '';
                }
            },
            removeNewTodo(todo, state_list) {
                let remove = {
                    todo: todo,
                    num: state_list
                };
                this.$store.dispatch('removeTodo', remove);
            }
        }
    }
</script>

<style scoped lang="less">
    .block-panel {
        left: 1095px;
    }
    .block-panel div.block-card {
        background: #FFE2E6;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        color: #C4C4C4;
        padding-top: 17px;
        border-radius: 5px;
    }
    .block-panel div.block-card .block-card-name {
        margin-left: 20px;
        margin-top: 5px;
    }
    .block-panel div.block-card .block-card-remove {
        margin-left: 215px;
        margin-top: -70px;
    }
    .block-panel form {
        height: 55px;
        background: #FFE2E6;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #C4C4C4;
        padding-top: 17px;
        border-radius: 5px;
        width: 250px;
        margin-left: 21px;
        margin-top: 30px;
    }
    .block-panel form div {
        margin-top: -5px;
    }
    .block-panel form div input {
        height: 40px;
    }
    .block-panel form div button {
        height: 30px;
        margin-left: 2px;
    }
    .block-panel div.block-card:hover {
        cursor: pointer;
        background: #FF7285;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
        color: #E8E7FF;
    }
    .container {
        left: 53px;
    }
    .container header {
        left: 91px;
    }
    .container header span.block-name{
        float: right;
        margin-right: 22px;
        margin-top: 17px;
    }
    .container header span.home{
        float: left;
        margin-left: 22px;
        margin-top: 17px;
    }
    .container header span.home:hover {
        cursor: pointer;
    }
    .container .progress-ring {
        position: absolute;
        width: 217px;
        height: 217px;
        margin-left: 91px;
        margin-top: 115px;
        border: #DAF7E8 solid 20px;
        border-radius: 225px;
    }
    .container .progress-ring-circle {
        position: absolute;
        width: 217px;
        height: 217px;
        background: #4AD991;
        border: 1px solid #37A66E;
        border-radius: 225px
    }
    .container .progress-ring-circle span{
        padding-left: 68px;
        padding-top: 200px;
        font-style: normal;
        font-weight: bold;
        font-size: 50px;
        line-height: 66px;
        text-align: center;
        color: #8B8A8A
    }
    .container form {
        position: absolute;
        width: 544px;
        height: 237px;
        left: 387px;
        top: 115px;
        background: #FFCA83;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }
    .container form button#add-button {
        width: 50px;
        height: 19px;
        margin-left: 247px;
        background: #4AD991;
        border-radius: 10px;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #E8E7FF;
    }
    .container form button#add-button span {
        margin-top: -12px;
        position: absolute;
    }
    .container form input#new-todo-name, .container form input#new-todo-description {
        width: 483px;
        height: 50px;
        margin-left: 22px;
        margin-top: 20px;
        background: #FFF4E5;
        padding-left: 17px;
        font-family: 'Red Hat Display', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: #8B8A8A;
    }
    .container form input#new-todo-description {
        margin-top: 14px;
    }
    .container form input#new-todo-date, .container form select#new-todo-priority {
        width: 228px;
        height: 50px;
        margin-left: 22px;
        margin-top: 14px;
        background: #FFF4E5;
        padding-left: 17px;
        font-family: 'Red Hat Display', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: #8B8A8A;
    }
    .container form select#new-todo-priority {
        width: 245px;
        height: 56px;
        margin-left: 10px;
    }
    .container .filter-panel {
        width: 805.5px;
        height: 50px;
        margin-left: 91px;
        margin-top: 412px;
        background: #DBDADA;
        border-radius: 5px 5px 0 0;
        padding-left: 34.5px;
        font-family: 'Red Hat Display', sans-serif;
    }
    .container .filter-panel span {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        color: #FFFFFF;
    }
    .container button.button {
        height: 30px;
        margin-left: 17.5px;
        margin-top: 11px;
        background: #83C3FF;
        border-radius: 5px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        outline: none;
        line-height: 19px;
        text-align: center;
        color: #E8E7FF;
        box-shadow: none;
    }
    .container button.button-large {
        width: 98px;
    }
    .container button.button-small {
        width: 49px;
    }
    .container button.important {
        color: #FF7285;
    }
    .container button.easy {
        color: #24A464;
    }
    .container button.middle {
        color: #FFCA83;
    }
    .container button.button:hover {
        cursor: pointer;
    }
    .container button.button:focus {
        background: #689cd0;
        outline: #8280FF;
    }
    .container .todos-panel {
        width: 840px;
        height: 392px;
        margin-left: 91px;
        top: 532px;
        background: #F7F7F1;
        border: 1px solid #DBDADA;
        box-sizing: border-box;
        border-radius: 0 0 5px 5px;
        overflow: auto;
        overflow-x: hidden;
    }
    .container .todos-panel .todo-short {
        margin-top: 25px;
        width: 785px;
        height: 30px;
        background: #83C3FF;
        font-style: normal;
        font-weight: bold;
        margin-left: 20px;
        font-size: 16px;
        line-height: 21px;
        color: #ECEBFF;
    }
    .container .todos-panel .todo-long {
        width: 785px;
        margin-left: 20px;
        height: 120px;
        background: #FFFFFF;
        border: 1px solid #83C3FF;
        box-sizing: border-box;
        border-radius: 0 0 5px 5px;
    }
    .container .todos-panel input[type=checkbox] {
        width: 18px;
        height: 18px;
        margin-top: 6px;
        margin-left: 10px;
    }
    .container .todos-panel .block-card-short {
        margin-left: 20px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        color: #ECEBFF;
    }
    .container .todos-panel .remove {
        float: right;
        width: 18px;
        height: 18px;
        margin-right: 10px;
        margin-top: 6px;
        background: #FF7285;
        border-radius: 5px;
        outline: none;
        border: none;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        color: #E8E7FF;
        justify-content: space-around;
    }
    .container .todos-panel .todo-long span {
        margin-left: 25px;
        margin-top: -50px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        color: #96B6D5;
    }
    .container .todos-panel .todo-long .date {
        margin-left: 605px;
        margin-top: 70px;
        font-size: 16px;
        line-height: 21px;
        text-align: center;
        color: #DAF7E8;
        width: 70px;
        height: 30px;
        background: #4AD991;
        border-radius: 5px;
    }
    .container .todos-panel .todo-long .priority {
        width: 30px;
        height: 30px;
        margin-left: 20px;
        background: #FFCA83;
        border-radius: 5px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        text-align: center;
        color: #FFF4E5;
    }
</style>