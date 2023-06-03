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
</style>
  