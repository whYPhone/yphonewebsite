<template>
  <footer class="footer">
    <div class="containerfooter">
      <div class="contentsfooter">
        <div class="footerCollums">
          <h4>whY GmbH</h4>
          <router-link to="/">Home</router-link>
          <router-link to="/Product">Produkt</router-link>
          <router-link to="/Order">Bestellen</router-link>
          <router-link to="/">Unser Team</router-link>
          <router-link to="/FAQ">FAQ</router-link>
          <router-link to="/">Kontakt</router-link>
        </div>
        <div class="footerCollums">
          <h4>Rechtliche Information</h4>
          <router-link to="/Impressum">Impressum</router-link>
          <router-link to="/Impressum#datenschutz">Datenschutz</router-link>
        </div>
        <div class="footerCollums">
          <h4>Social Media</h4>
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

body {
margin: 0;
padding: 0;
height: 100%;
width: 100%;
overflow-x: hidden;
}

.footer {
font-family: 'Open Sans', sans-serif;
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
font-size: 1.5rem;
color: #ffffff;
margin-bottom: 5vh;
margin-top: 5vh;
font-weight: 500;
position: relative;
}

.footerCollums h4::before {
content: '';
position: absolute;
left: -1rem;
bottom: -9px;
background-color: #168ae9;
height: 2px;
box-sizing: border-box;
width: 24rem;
}

.footerCollums a {
font-size: 1rem;
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