<template>
  <div class="fakerezension">
    <div class="title text-center">Kundenrezensionen ihres Vertrauens</div>
    <ul class="review-container">
      <li class="reviews" v-for="(review, index) in reviews" :key="index">
        <div class="review-icon">
          <a :href="review.link">
            <img :width="review.width" :height="review.height" :src="review.imageSrc" :alt="review.imageAlt" class="review-image" />
          </a>
        </div>
      </li>
    </ul>
    <ul class="review-container">
      <li v-for="review in reviews" :key="review.id" class="reviews">
      <div class="review-text">
          {{ review.text }}
        </div>
      </li>
    </ul>
  </div>
</template>
  
  <script>
  export default {
    name: 'reviewBanner',
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
        import('/src/assets/reviews.json')
          .then((module) => {
            this.reviews = module.default;
          })
          .catch((error) => {
            console.error('Failed to fetch reviews:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  .fakerezension {
    font-family: 'Open Sans', sans-serif;
    padding: 1px 2.25rem 5.8125rem!important;
    background-color: #1d1d1f;
    font-family: Arial, sans-serif; /* Verwende hier die gewünschte Schriftart */
  }
  
  .title {
    font-family: 'Raleway', sans-serif;
    color: #ffffff;
    font-size: 2rem;
    text-align: center;
  }
  
  .review-container {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
  }
  
.review-image {
  width: 40%;
  height: 40%;
  object-fit: cover;
  object-position: center;
}

  .reviews {
    width: 33.33%;
    text-align: center;
    font-size: 1rem;
    list-style-type: none;
    padding: 0 3%;
  }
  
  .review-icon {
    justify-content: center;
  }
  
  .review-text {
    letter-spacing: 0.26px;
    font-size: 1.25rem;
    line-height: 1.15;
    margin: 0.5rem auto 0;
    color: #e4e4e4;
  }
  
  @media screen and (max-width: 800px) {
    .review-container {
      flex-direction: column;
    }
  
    .reviews {
      width: 80%;
      margin: 0 auto 5%;
    }
  
    .review-icon {
      transform: scale(0.8);
      justify-content: flex-start !important;
      margin-right: auto;
      margin-left: auto;
    }
  
    .review-text {
      font-size: 1.125rem;
      margin: 0 auto 0.5rem;
    }
    .review-image {
      width: 50%;
      height: 50%;
      object-fit: cover;
      object-position: center;
    }
  }
  </style>
  