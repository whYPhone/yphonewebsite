<template>
  <section id="product-sec-1">
    <div class="container">
      <div class="product-left">
        <img :src="productImage" alt="product image">
      </div>
      <div class="product-right">
        <span class="logo-img-long">
          <img :src="logoImage" alt="Logo">
        </span>
        <h2>{{ title }}</h2>
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
  name: 'ProductSec1',
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

h2 {
    font-weight: 600;
    font-size: 2.5rem !important;
    line-height: 1.2;
    max-width: 500px;
    margin: 1rem auto 1rem auto;
}

.text {
    font-weight: 300;
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

#product-sec-1 {
    background-color: white;
}

#product-sec-1 .product-right {
    color: #000;
}

#product-sec-1 .product-left img {
    width: 70%;
}

.product-img {
    width: 10%;
    max-width: 10%;
}

.logo-img-long img {
    max-height: auto;
    width: 50%;
}

.logo-img img {
    height: 10%;
    width: 10%;
    max-width: 10vh;
    max-height: 10vw;
}
</style>
