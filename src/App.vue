<template>
  <div id="app">
    
    <MenuHeader/>

    <router-view/>

    <MenuFooter/>
  </div>
</template>

<script>
import MenuFooter from './components/MenuFooter.vue';
import MenuHeader from './components/MenuHeader.vue';






export default {
  name: 'App',
  components: {
    MenuHeader,
    MenuFooter,
    
}
};
</script>

<style>

</style>
