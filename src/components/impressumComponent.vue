<template>
    <div>
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
  .impressum-align{
    margin: 5% 20%;
}
.impressum-align p{
    text-align: center;
}
.impressum-align h1 {
    text-align: center;
}
  </style>