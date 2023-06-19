<template>
  <div class="slideshow-container">
    <div :class="['slideshow', {'hide': !slideshowVisible}]">
      <video v-if="currentItem.type === 'video'" class="video" autoplay loop :src="currentItem.url" alt="Slideshow Video"></video>
      <img v-else class="image" :src="currentItem.url" :style="currentItemImageStyle" alt="Slideshow Image">
    </div>
  </div>
</template>

<script>
import slideshowData from '/src/assets/slideshow.json';

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
          objectFit: 'contain',
          objectPosition: 'center',
          maxWidth: '100%',
          maxHeight: '100%',
          width: this.desiredImageWidth + 'px',
          height: this.desiredImageHeight + 'px'
        };
      }
      return {};
    }
  }
};
</script>

<style>
.slideshow-container {
  font-family: 'Righteous', sans-serif !important;
  width: 40%;
  height: 900px;
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
  max-width: 90%;
  max-height: 100%;
  object-fit: contain;
  margin-left: 70%;
  margin-right: -70%;
}

.image {
  max-width: 0%;
  max-height: 100%;
  object-fit: contain;
  margin-left: 70%;
  margin-right: -70%;
}

@media screen and (max-width: 800px) {
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
    max-width: 80%;
    max-height: 60vh;
    object-fit: contain;
    margin-left: 10%;
    margin-right: -10%;
  }
}
</style>