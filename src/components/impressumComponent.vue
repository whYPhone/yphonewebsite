<template>
    <div id="impressum">
      <div class="impressum-align">
        <h1>{{ impressum.title }}</h1>
        <p v-html="impressum.content"></p>
      </div>
  
      <div id="datenschutz" class="impressum-align">
        <h1>{{ datenschutz.title }}</h1>
        <p v-html="datenschutz.content"></p>
      </div>
    </div>
  </template>
  
  <script>
  import impressumData from '/src/assets/impressum.json';
  
  export default {
    name: 'ImpressumComponent',
    data() {
      return {
        impressum: impressumData.impressum,
        datenschutz: impressumData.datenschutz
      };
    }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

  
  .impressum-align{
    
    margin: 0 10%;
  }
  .impressum-align p{
    font-family: 'Open Sans', sans-serif !important;
    text-align: center;
  }
  .impressum-align h1 {
    font-family: 'Open Sans', sans-serif !important;
    text-align: center;
  }
  </style>