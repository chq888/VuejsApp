<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
      <home-component msg="Welcome to Your Vue.js App" />
    </div>
    <div>
      <category-component></category-component>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/home.component.vue";
import Category from "@/components/category.component.vue";

export default {
  name: "Home",
  components: {
    "home-component": Home,
    "category-component": Category
  }
};
</script>
