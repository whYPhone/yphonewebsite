<template>
  <div class="fakerezension-product">
    <div class="title">Kundenrezensionen eures Vertrauens</div>
    <ul class="review-container">
      <li v-for="review in reviews" :key="review.id" class="reviews">
        <div class="review-icon">
          <a :href="review.link">
            <img :src="review.image" :alt="review.alt" class="review-image" />
          </a>
        </div>
        <div class="review-text">
          {{ review.text }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import reviewsData from '/src/assets/reviewsProduct.json';

export default {
  name: 'ReviewBanner',
  data() {
    return {
      reviews: []
    };
  },
  mounted() {
    this.fetchReviews();
  },
  methods: {
    fetchReviews() {
      this.reviews = reviewsData;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

.fakerezension {
  padding: 1px 2.25rem 5.8125rem!important;
  background-color: #1d1d1f;
}

.fakerezension-product {
  padding: 1px 2.25rem 5.8125rem!important;
  background-color: #fff;
}

.review-image {
  width: 80%;
  height: 40%;
  object-fit: cover;
  object-position: center;
}

.title {
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  color: #1d1d1f;
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.fakerezension-product .review-text {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  margin-top: 3rem;
  color: #000;
}

.review-container {
  display: flex;
  flex-direction: row;
  margin-top: auto;
}

.reviews {
  width: 33.33%;
  text-align: center;
  list-style-type: none;
  padding: 0 3%;
}

.review-icon {
  justify-content: center;
}

.review-text {
  letter-spacing: 0.26px;
  font-size: 1.5625rem;
  line-height: 1.15;
  margin: 0.5rem auto 0;
  color: #e4e4e4;
}

@media screen and (max-width: 700px) {
  .review-container {
    flex-direction: column;
  }

  .reviews {
    width: 80%;
    margin: 0 auto 5%;
  }
  
  .review-image {
    width: 50%;
    height: 40%;
    object-fit: cover;
    object-position: center;
  }

  .review-icon {
    transform: 20vh;
    justify-content: flex-start !important;
    margin-right: auto;
    margin-left: auto;
  }

  .review-text {
    font-size: 1.125rem;
    margin: 0 auto 0.5rem;
  }
}

@media screen and (max-width: 900px) {
  .review-image {
    width: 40%;
    height: 40%;
    object-fit: cover;
    object-position: center;
  }

  .review-container {
    flex-direction: column;
  }

  .reviews {
    width: 80%;
    margin: 0 auto 5%;
  }

  .review-icon {
    transform: 10vw !important;
    justify-content: flex-start !important;
    margin-right: auto;
    margin-left: auto;
  }

  .review-text {
    font-size: 1.125rem;
    margin: 0 auto 0.5rem;
  }
}
</style>
