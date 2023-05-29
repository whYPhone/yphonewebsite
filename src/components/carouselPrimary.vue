<template>
  <div class="carousel" v-if="currentImage">
    <img :src="currentImage.src" :alt="currentImage.description" />
    <p>{{ currentImage.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      currentImageIndex: 0,
      timer: null
    };
  },
  mounted() {
    this.fetchImages();
    this.timer = setInterval(this.changeImage, 15000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    fetchImages() {
      fetch('carousel.json')
        .then(response => response.json())
        .then(data => {
          this.images = data.images;
        })
        .catch(error => {
          console.error('Error fetching carousel images:', error);
        });
    },
    changeImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex] || null;
    }
  }
};
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.carousel img {
  max-width: 100%;
  max-height: 100%;
}

.carousel p {
  margin-top: 10px;
  font-size: 18px;
}
</style>

