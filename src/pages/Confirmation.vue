<template>
    <div id="app">
      <vue-router/>
      
      <ConfirmationComponent/>
  
    </div>
  </template>
  
  <script>
 
  import ConfirmationComponent from '../components/confirmationComponent.vue';

  
  
  
  
  export default {
    name: 'App',
    components: {
      
      ConfirmationComponent
  },
  mounted() {
    window.scrollTo(0, 0);
  }
  }
  
  </script>
  
  <style>
  
  </style>