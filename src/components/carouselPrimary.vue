<template>
  <div class="carousel">
    <carousel :autoplay="true" :loop="true" :perPageCustom="1">
      <slide v-for="(item, index) in carouselItems" :key="index">
        <!-- Replace the content below with your own carousel item -->
        <div class="carousel-item">
          <img :src="item.image" :alt="item.caption" />
          <div class="caption">{{ item.caption }}</div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue';
import Slide from 'vue-carousel/src/Slide.vue';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      carouselItems: [
        {
          image: '/assets/images/testimages/testimage1.jpg',
          caption: 'Carousel Item 1',
        },
        {
          image: '/assets/images/testimages/testimage2.jpg',
          caption: 'Carousel Item 2',
        },
        {
          image: '/assets/images/testimages/testimage3.jpg',
          caption: 'Carousel Item 3',
        },
      ],
    };
  },
};
</script>

<style>
.carousel {
  width: 100%;
}

.carousel-item {
  text-align: center;
}

.carousel-item img {
  max-width: 100%;
  height: auto;
}

.caption {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
</style>
