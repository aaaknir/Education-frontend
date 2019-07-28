<template>
  <div class="alert alert-primary">
    <h3>Success: {{stats.success}}</h3>
    <h3>Error: {{stats.error}}</h3>
    <hr>
    <button class="btn btn-primary" @click="$emit('repeat')">Repeat</button>
    <button class="btn btn-primary" @click="$emit('nextLevel')">Next Level</button>
  </div>
</template>

<script>
    export default {
        name: "AppResultScreen",
        props: ['stats']
    }
</script>

<style scoped>

</style>
