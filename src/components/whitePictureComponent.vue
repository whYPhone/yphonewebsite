<template>
    <section id="product-sec-3">
      <div class="container">
        <div class="product-right">
          <h2 class="title">{{ title }}</h2>
          <img class="product-img" :src="productImage" alt="Zubehör">
          <span class="text">{{ description }}</span>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProductSec3',
    props: {
      productImage: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: auto;
}

.product-right,
.product-left {
    font-family: 'Open Sans', sans-serif;
    width: 50%;
    padding: 3rem 2rem;
}

.product-left img {
    width: 100%;
    display: block;
}

.product-right {
    font-family: 'Open Sans', sans-serif !important;
    text-align: center;
}

.title {
    font-family: 'Open Sans', sans-serif!important;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 1.2;
    max-width: 500px;
    margin: 2rem auto 1rem auto;
}

.text {
    font-family: 'Open Sans', sans-serif !important;
    font-weight: 300;
    margin-top: 2rem;
    font-size: 2rem;
    display: block;
}

#product-sec-3 {
    background-color: white;
}

#product-sec-3 .container {
    align-items: flex-end;
}

#product-sec-3 .product-right {
    width: 100%;
    padding-bottom: 6rem;
}

.product-img {
    width: auto;
    max-width: auto;
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
@media screen and (max-width: 800px) {
    .product-right,
    .product-left {
        width: 100%;
    }
    .product-left {
        padding: 0;
    }
    .product-right {
        padding: 2rem 1rem;
    }
    .title {
        font-size: 2rem;
    }
    .text {
        font-size: 1.5rem;
    }
    .product-img {
        width: 100%;
        size: 800px;
    }
    .logo-img img {
        max-width: 100%;
        max-height: 100%;
    }
}

@media screen and (max-width: 1200px) {
    .product-right,
    .product-left {
        width: 100%;
    }
    .product-left {
        padding: 0;
    }
    .product-right {
        padding: 2rem 1rem;
    }
    .title {
        font-size: 2rem;
    }
    .text {
        font-size: 1.5rem;
    }
    .product-img {
        width: 90%;
        size: 800px;
    }
    .logo-img img {
        max-width: 100%;
        max-height: 100%;
    }
}
  
</style>
  