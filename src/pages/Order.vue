<template>
  <div id="app">
    
    <OrderComponent/>

  </div>
</template>

<script>

import OrderComponent from '../components/orderComponent.vue';

export default {
  name: 'App',
  components: {
  
  OrderComponent
  
},
  mounted() {
    window.scrollTo(0, 0);
  }
  }
</script>

<style>

</style>