<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue</a>.</p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
export default {
  name: "About",
  props: {
    msg: String
  }
};
</script>
