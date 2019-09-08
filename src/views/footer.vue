<template>
  <div class="footer">
    <footer-component  />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/footer.component.vue";

export default {
  name: "footer",
  components: {
    "footer-component": Footer
  }
};
</script>
