<template>
    <div id="app">
      <vue-router/>
      
      <ProductSec3
        :productImage="'../assets/images/Product/3_phones.webp'"
        :logoImage="'../assets/images/Logo/logo_black.webp'"
        title="Die Zukunft in deiner Hand"
        price="From $4525"
      />

      <ProductSec2
        :productImage="'../assets/images/Product/vergleich.webp'"
        :logoImage="'../assets/images/Logo/whY-long.webp'"
        title="Ein Unterschied wie Tag und Nacht."
        price="From $4525"
      />
      
      <ReviewBannerWhite/>
      
      <ProductSec4
      :productImage="'../assets/images/Product/Y-Phone_Green_2-removebg.webp'"
      :logoImage="'../assets/images/Logo/whY-long.webp'"
       title="Der Unterschied ist wie Tag und Nacht."
      />
  
      <ProductSec1
        :productImage="'../assets/images/Product/zube.webp'"
        title="Alle Funktionen die das Herz begehrt"
        price="Nur $4525"
      />

      <ProductSec2
        :productImage="'../assets/images/Product/Y-Phone_White_2-removebg.webp'"
        :logoImage="''"
        title="Viele Funktionen. Leicht im Preis."
        price="From $4525"
      />

      <ProductSec3
        :productImage="'../assets/images/Product/Y-Phone_Black_2-removebg.webp'"
        :logoImage="'../assets/images/Logo/logo_black.webp'"
        title="Die Zukunft in deiner Hand"
        price="From $4525"
      />
      
    </div>
  </template>
  
  <script>
  
  
  import ProductSec1 from '../components/whitePictureComponent.vue';
  import ProductSec2 from '../components/blackPictureComponent.vue';
  import ProductSec3 from '../components/whiteProduct.vue';
  import ProductSec4 from '../components/blackProduct.vue';
  import ReviewBannerWhite from '../components/reviewBannerWhite.vue';


  
  
  export default {
    name: 'App',
    components: {
      
      ProductSec1,
      ProductSec2,
      ProductSec3,
      ProductSec4,
      ReviewBannerWhite
  },
  mounted() {
    window.scrollTo(0, 0);
  }
  }
  </script>
  
  <style>
  
  </style>
  