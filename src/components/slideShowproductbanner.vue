<template>
  <h1 class="headline">Features unseres Smartphones</h1>
    <div class="slideshow-container">
      <div :class="['slideshow', {'hide': !slideshowVisible}]">
        <video v-if="currentItem.type === 'video'" class="video" autoplay loop :src="currentItem.url" alt="Slideshow Video"></video>
        <img v-else class="image" :src="currentItem.url" :style="currentItemImageStyle" alt="Slideshow Image">
      </div>
    </div>
  </template>
  
  <script>
  import slideshowData from '/src/assets/slideshowproduct.json';
  
  export default {
    data() {
      return {
        slideshowItems: slideshowData.slideshowItems,
        currentItemIndex: 0,
        slideshowVisible: false,
        slideshowInterval: null,
        desiredImageWidth: 800,
        desiredImageHeight: 600
      };
    },
    mounted() {
      this.startSlideshow();
    },
    beforeUnmount() {
      this.stopSlideshow();
    },
    methods: {
      startSlideshow() {
        this.slideshowVisible = true;
        this.slideshowInterval = setInterval(() => {
          this.slideshowVisible = false;
          setTimeout(() => {
            this.currentItemIndex = (this.currentItemIndex + 1) % this.slideshowItems.length;
            this.slideshowVisible = true;
          }, 500);
        }, 5000);
      },
      stopSlideshow() {
        clearInterval(this.slideshowInterval);
      }
    },
    computed: {
      currentItem() {
        return this.slideshowItems[this.currentItemIndex];
      },
      currentItemImageStyle() {
        if (this.currentItem.type === 'image') {
          return {
            objectFit: 'cover',
            objectPosition: 'center',
            width: '1500px' ,
            height: '70vh'
          };
        }
        return {};
      }
    }
  };
  </script>
  
  <style>
  .headline {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 3.5rem;
    text-align: center;
    margin-top: 2rem;
  }
  .slideshow-container {
    font-family: 'Righteous', sans-serif !important;
    width: 100%;
    height: 80vh !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .slideshow {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 1s ease;
  }
  
  .slideshow.hide {
    opacity: 0;
  }
  
  .video {
    max-width: 100%;
    max-height: 100%;
    object-fit: flex;
    margin-left: 50%;
    margin-right: -50%;
  }
  
  .image {
    max-width: 120% !important;
    max-height: 120% !important;
    margin-left: 10%;
    margin-right: -10%;
  }
  @media screen and (max-width: 800px) {

    .headline {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 3rem;
    text-align: center;
    margin-top: 2rem;
  }
    .slideshow-container {
    font-family: 'Righteous', sans-serif !important;
    width: 80%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .slideshow {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s ease;
  }
  
  .slideshow.hide {
    opacity: 0;
  }
  
  .video {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    margin-left: 10%;
    margin-right: -10%;
  }
  
  .image {
    max-width: 100% !important;
    max-height: 100% !important;
    object-fit: contain;
    margin-left: 10% !important;
    margin-right: -10% !important;
  }
  }
  </style>
  