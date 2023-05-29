<template>
  <div id="app">
    <MenuHeader />
    
    <ProductSec1
      :productImage="'/assets/bilder/Y-Phone_Black_1.png'"
      :logoImage="'../images/why-logo-long-black.webp'"
      title="Die Zukunft in deiner Hand"
      price="Nur $4525"
    />
    <ProductSec2
      :productImage="'../images/3_phones.webp'"
      :logoImage="'../images/whY.webp'"
      title="Viele Funktionen. Leicht im Preis."
      price="From $4525"
    />
    <ProductSec3
      :productImage="'../images/zube.webp'"
      title="Unsere Accessories"
      description="Mehr als nur eine Innovation"
    />
    <ProductSec4
      :productImage="'../images/vergleich.webp'"
      title="Der Unterschied ist wie Tag und Nacht."
    />

    <ProductSec3
      :productImage="'../images/zube.webp'"
      title="Unsere Accessories"
      description="Mehr als nur eine Innovation"
    />

    <ReviewBannerBlack/>
    <ReviewBannerWhite/>
    <AboutUsInfo/>
    <ContactFormular/>

    <MenuFooter /> <!-- Füge hier die MenuFooter-Komponente hinzu -->
  </div>
</template>

<script>
import MenuHeader from './components/MenuHeader.vue'
import MenuFooter from './components/MenuFooter.vue' // Importiere die MenuFooter-Komponente
import ProductSec1 from './components/whiteProduct.vue';
import ProductSec2 from './components/blackProduct.vue';
import ProductSec3 from './components/whitePictureComponent.vue';
import ProductSec4 from './components/blackPictureComponent.vue';
import ReviewBannerBlack from './components/reviewBannerBlack.vue';
import ReviewBannerWhite from './components/reviewBannerWhite.vue';
import AboutUsInfo from './components/aboutUs.vue';
import ContactFormular from './components/contactFormular.vue'


export default {
  name: 'App',
  components: {
    MenuHeader,
    ProductSec1,
    ProductSec2,
    ProductSec3,
    ProductSec4,
    MenuFooter // Füge die MenuFooter-Komponente zur Liste der Komponenten hinzu
    ,
    ReviewBannerBlack,
    ReviewBannerWhite,
    AboutUsInfo,
    ContactFormular
}
}
</script>

<style>

</style>
