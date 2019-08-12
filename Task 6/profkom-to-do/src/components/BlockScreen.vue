<template>
    <div>
        <div class="container">
            <!-- Header with block's name -->
            <header>
                <span class="home">HOME</span>
                <span class="block-name">BLOCK NAME - LIST NAME</span>
            </header>

            <!-- Customize progress bar -->
            <div class="progress-ring">
                <div class="progress-ring-circle">
                    <span>33%</span>
                </div>
            </div>

            <form id="new-todo">
                <label><input type="text" placeholder="What do you need to do?" id="new-todo-name" form="new-todo"></label>
                <label><input type="text" placeholder="Describe your to do" id="new-todo-description" form="new-todo"></label>
                <label><input type="date" placeholder="Deadline" id="new-todo-date" form="new-todo"></label>
                <label><select id="new-todo-priority" form="new-todo">
                    <option>!!!</option>
                    <option>!!</option>
                    <option>!</option>
                    <option>none</option>
                </select></label>
            </form>

            <div class="filter-panel">
                <span>Choose</span>
                <button type="button" class="button btn-info button-large">ALL</button>
                <button type="button" class="button btn-info button-large">DONE</button>
                <button type="button" class="button btn-info button-large">ACTIVE</button>
                <button type="button" class="button btn-info button-small important">!!!</button>
                <button type="button" class="button btn-info button-small middle">!!</button>
                <button type="button" class="button btn-info button-small easy">!</button>
                <button type="button" class="button btn-info button-small">!!!</button>
                <button type="button" class="button btn-info button-large">DATE</button>
            </div>

            <div class="todos-panel">
                <div class="todo">
                    <div @click="show = !show" class="todo-short">
                        <input type="checkbox">
                        <span>Task 1</span>
                        <button type="button">x</button>
                    </div>
                    <div v-if="!show" class="todo-long">
                        <span>Task 1 Desc</span>
                        <button type="button">Date</button>
                        <button type="button">Priority</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Block panel -->
        <div class="block-panel">
            <div class="block-card" v-for="element in lists" :key="element.id">
                <span>{{element.title}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppBlockScreen",
        data() {
            return {
                show: true
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
        text-align: center;
        color: #C4C4C4;
        padding-top: 17px;
        border-radius: 5px;
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
    }
    .container .todos-panel .todo-short {
        width: 785px;
        height: 30px;
        margin-top: 25px;
        background: #83C3FF;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        text-align: center;
        color: #ECEBFF;
    }
    .container .todos-panel .todo-long {
        width: 785px;
        height: 120px;
        background: #FFFFFF;
        border: 1px solid #83C3FF;
        box-sizing: border-box;
        border-radius: 0px 0px 5px 5px;
    }
</style>