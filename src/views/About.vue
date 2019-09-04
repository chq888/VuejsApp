<template>
  <div class="about">
    <h1>This is an about page</h1>
     <div>
        <About msg="Hello world!" />
    </div>
  </div>
 
</template>


<script>
    import About from '../components/about.component.vue';

    export default {
        name: 'app',
        components: {
            About
        }
    };
</script>

<style>
</style>
