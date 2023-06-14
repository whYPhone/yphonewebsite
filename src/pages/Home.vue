<template>
  <div id="app">
    
    <SlideShow/>
    <ReviewBannerBlack/>
    <ProductSec3/>
    <AboutUs/>
    <ContactFormular/>
    
  </div>
</template>

<script>
import ContactFormular from '../components/contactFormular.vue';
import AboutUs from '../components/aboutUs.vue';
import ReviewBannerBlack from '../components/reviewBannerBlack.vue';
import ProductSec3 from '../components/slideShowproductbanner.vue';
import SlideShow from '../components/slideShow.vue';




export default {
  name: 'App',
  components: {
    AboutUs,
    ContactFormular,
    ReviewBannerBlack,
    ProductSec3,
    SlideShow
},
  mounted() {
    window.scrollTo(0, 0);
  } 
}
</script>
