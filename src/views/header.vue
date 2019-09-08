<template>
  <div class="header">
    <header-component  />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.component.vue";

export default {
  name: "header",
  components: {
    "header-component": Header
  }
};
</script>
