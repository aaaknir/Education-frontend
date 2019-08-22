<template>
    <div class="main">
        <!-- Block panel -->
        <div class="block-panel">
            <div class="block-card" v-for="element in this.$store.getters.checkBlocks" :key="element.id" @click="chooseBlock(element.title)">
                <span>{{element.title}}</span>
            </div>
        </div>

        <div class="container" v-if="block_name !== 'BLOCK NAME'">
            <!-- Header with block's name -->
            <header>
                <span>{{this.block_name}}</span>
            </header>

            <!-- Customize progress bar -->
            <div class="progress-ring">
                <div class="progress-ring-circle">
                    <span>48%</span>
                </div>
            </div>
            <button class="button-more" @click="changeState"><span>MORE INFORMATION ></span></button>
        </div>
        <div class="container" v-else>
            <div class="letter">Выберите блок из левой панели блоков</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppStartScreen",
        data() {
            return {
                block_name: 'BLOCK NAME'
            }
        },
        methods: {
            chooseBlock(el) {
                this.block_name = el;
            },
            changeState() {
                let block_settings = {
                    block_state:  'block',
                    block_name:  this.block_name
                };
                this.$store.dispatch('changeStatePosition', block_settings);
            }
        }
    }
</script>

<style scoped lang="less">
    .container {
        left: 365px;
    }
    .container header {
        left: 91px;
    }
    .container header span {
        float: right;
        margin-right: 22px;
        margin-top: 17px;
    }
    .container button.button-more {
        position: absolute;
        width: 300px;
        height: 150px;
        left: 91px;
        top: 417px;
        background: #83C3FF;
        border: 0;
        border-radius: 10px;
        outline: none;
    }
    .container button.button-more span {
        position: absolute;
        width: 206px;
        height: 52px;
        left: 47px;
        top: 49px;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #ECEBFF;
    }
    .container .letter {
        margin-top: 400px;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        color: #a0a0b3;
    }
    .container button.button-more:hover {
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }
    .container .progress-ring {
        position: absolute;
        width: 400px;
        height: 400px;
        margin-left: 527px;
        top: 115px;
        margin-right: 91px;
        border: #DAF7E8 solid 40px;
        border-radius: 225px;
    }
    .container .progress-ring-circle {
        position: absolute;
        width: 400px;
        height: 400px;
        background: #4AD991;
        border: 1px solid #37A66E;
        border-radius: 225px
    }
    .container .progress-ring-circle span{
        font-style: normal;
        padding-left: 95px;
        font-weight: bold;
        font-size: 100px;
        line-height: 132px;
        text-align: center;
        color: #8B8A8A;
    }
    .block-panel {
        left: 53px;
    }
    .block-panel div.block-card {
        background: #FFF4E5;
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
        background: #FFCA83;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
        color: #FFFBF5;
    }
</style>