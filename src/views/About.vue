<template>
  <div class="about">
    <h1>This is an about page</h1>
     <div>
        <about-component msg="Hello world!" />
    </div>
  </div>
 
</template>

<script>
    import About from '../components/about.component.vue';

    export default {
        name: 'about',
        components: {
            "about-component": About
        }
    };
</script>

<style>
</style>
