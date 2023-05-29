<template>
  <footer class="footer">
    <div class="containerfooter">
      <div class="contentsfooter">
        <div class="footerCollums">
          <h4>whY</h4>
          <a href="index.html">Home</a>
          <a href="./pages/products.html">Produkt</a>
          <a href="./pages/order.html">Bestellen</a>
          <a href="index.html#about">Unser Team</a>
          <a href="./pages/faq.html">FAQ</a>
          <a href="index.html#contact">Kontakt</a>
        </div>
        <div class="footerCollums">
          <h4>Impressum</h4>
          <a href="./pages/impressum.html">Impressum</a>
          <a href="./pages/impressum.html#datenschutz">Datenschutz</a>
        </div>
        <div class="footerCollums">
          <h4>Social images</h4>
          <a href="https://www.facebook.com/people/WhY-Phone/100088288850877/">Facebook</a>
          <a href="https://twitter.com/whY_Phone_">Twitter</a>
          <a href="https://www.instagram.com/why_phone.official/">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MenuFooter'
}
</script>

<style scoped>

body {
margin: 0;
padding: 0;
height: 100%;
width: 100%;
overflow-x: hidden;
}

.footer {
background-color: #1d1d1f;
padding: 4% 0;

}

.containerfooter {
max-width: 100vw;
align-items: center;
}

.contentsfooter {
display: flex;
flex-wrap: wrap;
margin: auto;
padding: 0;
box-sizing: border-box;
}

.footerCollums {
align-items: center;
width: 33.3%;
padding: 0 225px;
box-sizing: border-box;
}

.footerCollums h4 {
font-size: 18px;
color: #ffffff;
margin-bottom: 5vh;
margin-top: 5vh;
font-weight: 500;
position: relative;
}

.footerCollums h4::before {
content: '';
position: absolute;
left: 0;
bottom: -10px;
background-color: #168ae9;
height: 2px;
box-sizing: border-box;
width: 50px;
}

.footerCollums a {
font-size: 16px;
text-decoration: none;
font-weight: 300;
color: #e4e4e4;
display: block;
margin-top: 5%;
}

.footerCollums a:hover {
color: #ffffff;
}

@media screen and (max-width: 800px) {
.footerCollums {
  width: 100%;
  padding: 0;
  margin-left: 40%;
}

.containerfooter {
  align-content: center;
}
}
</style>