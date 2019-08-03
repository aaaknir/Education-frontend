<template>
  <div id="demo">
      <button class="btn btn-outline-info" v-on:click="show = !show">Just take a rest from planning!</button>
      <transition name="fade">
        <div v-if="show">
          <iframe width="520"  height="300" src="https://www.youtube.com/embed/386AMmsu33c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </transition>
  </div>
</template>

<script>
    export default {
        name: "AppGame",
        data () {
            return {
                show: false
            }
        }
    }
</script>

<style scoped>
  div#demo {
    padding: 10px;
    display: block;
    justify-content: space-between;
  }

  .btn {
    margin-left: 150px;
  }

  iframe {
    margin-left: 10px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
