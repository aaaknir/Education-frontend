<template>
    <div id="app">
        <app-start-screen v-if="this.$store.getters.checkStatePosition === 'start'"></app-start-screen>
        <app-block-screen v-else-if="this.$store.getters.checkStatePosition  === 'block'"></app-block-screen>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="less">
    * {
        font-family: 'Red Hat Display', sans-serif;
        margin: 0 auto;
        height: 100%;
    }
    .container, .block-panel {
        position: absolute;
        height: 884px;
        top: 70px;
        background: #FFFFFF;
        box-shadow: 0 4px 50px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }
    .container {
        width: 1022px;
    }
    .container header {
        position: absolute;
        width: 840px;
        height: 55px;
        top: 30px;
        background: #8280FF;
        border-radius: 5px;
    }
    .container header span {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #E8E7FF;
    }
    .block-panel {
        width: 292px;
        overflow: auto;
        overflow-x: hidden;
    }
    .block-panel div.block-card {
        width: 250px;
        height: 55px;
        margin-left: 21px;
        margin-top: 30px;
        background: #FFF4E5;
        border-radius: 5px;
    }
</style>
