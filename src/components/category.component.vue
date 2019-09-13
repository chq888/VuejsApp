<template>
  <ul class="nav justify-content-start">
    <li class="nav-item" v-for="c in categories">
      <a class="nav-link" href="#">{{ c.title }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, title: "Mobile", description: "Mobile category" },
        { id: 2, title: "Laptop", description: "Laptop category" }
      ]
    };
  }
};
</script>
