<template>
    <div id="app">
      
      <FaqComponent/>
      
    </div>
  </template>
  
  <script>
  
  

  import FaqComponent from '../components/faqComponent.vue';
  

  
  
  
  export default {
    name: 'App',
    components: {
    
    FaqComponent
    
},
  mounted() {
    window.scrollTo(0, 0);
  }
  }
  </script>
  
  <style>
  
  </style>