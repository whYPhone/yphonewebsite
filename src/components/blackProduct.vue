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

html {
  scroll-behavior: smooth;
}

.full-width-section {

  width: 100vw;
  background-color: #1d1d1f;
}

.container {
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
  padding: 3rem 2rem;
}

.product-left img {
  width: 100%;
  display: block;
}

.product-right {
  text-align: center;
}

.title {
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 1.2;
  max-width: 500px;
  margin: 2rem auto 1rem auto;
}

.text {
  font-weight: 500;
  font-size: 1.2rem;
  display: block;
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
</style>