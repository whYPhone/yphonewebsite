<template>
    <section id="product-sec-4">
      <div class="container">
        <div class="product-right">
          <div class="product-">
            <img class="product-img" :src="productImage" alt="product image">
          </div>
          <h2 class="title">{{ title }}</h2>
          <div class="btns-group">
          <router-link to="/Order" class="btn-solid">Kaufen</router-link>
        </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProductSec4',
    props: {
      productImage: {
        type: String,
        required: true
      },
      title: {
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

.container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 1rem;
    display: block;
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

.title {
    font-family: 'Open Sans', sans-serif !important;
    font-weight: 400;
    font-size: 2.5rem !important;
    line-height: 1.2;
    max-width: 500px;
    margin: 2rem auto 1rem auto;
}

.text {
    font-family: 'Open Sans', sans-serif !important;
    font-weight: 500;
    font-size: 1.2rem;
    display: block;
}

.btns-group {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 1rem;
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

#product-sec-4 {
    margin-left: auto;
    margin-right: auto;
    background-color: #1d1d1f;
}

#product-sec-4 .container {
    align-items: flex-end;
}

#product-sec-4 .product-right {
    width: 100%;
    padding-bottom: 6rem;
}

.product-img {
    width: 100%;
    max-width: 35rem;
}


#product-sec-4 .product-right {
    color: #fff;
}

#product-sec-4 h2 {
    color:#fff;
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
@media screen and (max-width: 900px) and (min-width: 500px){
    .product-img {
    max-width: 80vw;
    max-height: 100%;
}

    
} 
    
  </style>
  
  