<template>
  <div id="app">

    <div>
      <header-component></header-component>
    </div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <div>
      <footer-component>
          <h3 slot="footer">My footer</h3>
      </footer-component>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import Footer from "@/components/footer.component.vue";

export default {
  name: "App",
  components: {
    FooterComponent: Footer,
    HeaderComponent: () => import("@/components/header.component.vue")
  }
};
</script>
