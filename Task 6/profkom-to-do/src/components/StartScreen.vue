<template>
    <div>
        <!-- Block panel -->
        <div class="block-panel">
            <div class="block-card" v-for="element in this.$store.getters.checkBlocks"><span>{{element.title}}</span></div>
        </div>

        <div class="container">
            <!-- Header with block's name -->
            <header>
                <span>BLOCK NAME</span>
            </header>

            <!-- Customize progress bar -->
            <div class="progress-circle">
                <span>48%</span>
            </div>
            <button class="button-more" @click="this.$store.dispatch('changeStatePosition', 'block')"><span>MORE INFORMATION ></span></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppStartScreen"
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
        margin: 17px 22px 18px 676px;
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
    .container button.button-more span{
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
    .container button.button-more:hover {
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    }
    .container div.progress-circle {
        position: absolute;
        width: 400px;
        height: 400px;
        left: 531px;
        top: 115px;
        border: 20px solid #DAF7E8;
        border-radius: 225px
    }
    .container div.progress-circle span{
        width: 210px;
        height: 132px;
        left: 991px;
        top: 319px;
        font-style: normal;
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
    }
</style>