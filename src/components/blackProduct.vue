<template>
  <section id="product-sec-2" class="full-width-section">
    <div class="container">
      <div class="product-left">
        <img :src="productImage" alt="product image">
      </div>
      <div class="product-right">
        <span class="logo-img">
          <img :src="logoImage" alt="Logo">
        </span>
        <h2 class="title">{{ title }}</h2>
        <span class="text">{{ price }}</span>
        <div class="btns-group">
          <router-link to="/Order" class="btn-solid">Kaufen</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductSec2',
  props: {
    productImage: {
      type: String,
      required: true
    },
    logoImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');



html {
  scroll-behavior: smooth;
}

.full-width-section {
  background-color: #1d1d1f;
}

.container {
  font-family: 'Open Sans', sans-serif !important;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: auto;
}

.container-left {
  justify-content: flex-start;
  padding-left: 0;
}

.product-right,
.product-left {
  width: 50%;
  padding: 4rem 4rem;
}

.product-left img {
  width: 100%;
  display: block;
}

.product-right {
  text-align: center;
}

.title {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 1.2;
  max-width: 500px;
  margin: 2rem auto 1rem auto;
}

.text {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 500;
  font-size: 1.2rem;
  display: left;
}

.btns-group {
  margin-top: 3rem;
}

.btn-solid {
  background-color: #168ae9;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  border-radius: 1.4rem;
  font-size: 1.1rem;
}

.btn-link {
  color: #168ae9;
  text-decoration: none;
  font-weight: 300;
  font-size: 1.1rem;
}

.btn-link:hover {
  text-decoration: underline;
}

.btn-link .fa {
  font-size: 0.7rem;
}

#product-sec-2 .product-right {
  color: #fff;
  order: 1;
}

#product-sec-2 .product-right img {
  scale: 0.7;
}

#product-sec-2 .product-left {
  order: 2;
}

.product-img {
  width: 100%;
  max-width: 500px;
}

.logo-img-long img {
  max-height: auto;
  width: 100%;
}

.logo-img img {
  height: 100%;
  width: 100%;
  max-width: 100vh;
  max-height: 100vw;
}
@media screen and (max-width: 900px)
{
  .title {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 500;
  font-size: calc(10px + 3vw);
  line-height: 1.2;
  max-width: 500px;
  margin: 2rem auto 1rem auto;
  text-align: left  !important;
}

.text {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 500;
  font-size: 1.2rem;
  display: left;
}

.btns-group {
  margin-top: 3rem;
}

.btn-solid {
  background-color: #168ae9;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  border-radius: 1.4rem;
  font-size: 1.1rem;
}

  
}
</style>