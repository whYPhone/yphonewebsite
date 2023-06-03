<template>
    <div id="app">
      <vue-router/>
      
      <ImpressumComponent/>
  
      
    </div>
  </template>
  
  <script>
  
  
  import ImpressumComponent from '../components/impressumComponent.vue';
  
  
  
  
  
  export default {
    name: 'App',
    components: {
    
    
    ImpressumComponent
},
  mounted() {
    window.scrollTo(0, 0);
  }
  }
  </script>
  
  <style>
  
  
  </style>