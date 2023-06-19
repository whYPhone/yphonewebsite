<template>
  <div class="menu-header">
    <router-link to="/" class="logo-link">
      <img class="logo" alt="whYPhone-logo" src="/assets/images/Logo/whY-long.webp">
    </router-link>
    <input type="checkbox" id="active" v-model="isExpanded">
    <label for="active" class="menu-btn">
      <i v-if="!isExpanded" class="fas fa-bars"></i>
      <i v-else class="fas fa-times"></i>
    </label>
    <div class="wrapper" :class="{ expanded: isExpanded }">
      <ul>
        <li>
          <router-link to="/" class="nav-link" @click="isExpanded = false">
            Hauptseite
          </router-link>
        </li>
        <li>
          <router-link to="/Product" class="nav-link" @click="isExpanded = false">
            Produktseite
          </router-link>
        </li>
        <li>
          <router-link to="/Order" class="nav-link" @click="isExpanded = false">
            Kaufen
          </router-link>
        </li>
        <li>
        <a class="anchorpoint" href="/#about" @click="isExpanded = false">
          Über uns
        </a>
        </li>

        <li>
          <router-link to="/FAQ" class="nav-link" @click="isExpanded = false">
            FaQ
          </router-link>
        </li>
        <li>
        <a class="anchorpoint" href="/#contact" @click="isExpanded = false" style="scroll-margin-top: 20%;">
          Kontakt
        </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isExpanded: false
    };
  },
  mounted() {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }
  // Weitere Methoden und Lifecycle-Hooks
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

.logo {
  margin-left: 3%;
  margin-bottom: 4%;
  width: auto;
  height: 100%;
}

.menu-header {
  font-family: 'Open Sans', sans-serif !important;
  font-size: 3rem !important;
  position: sticky;
  top: 0px;
  background-color: #1d1d1f;
  width: 100%;
  height: 5vh;
  max-height: 5vh;
  display: block;
  z-index: 2;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: #1d1d1f;
  fill: #1d1d1f;
  clip-path: circle(0 at calc(100% - 45px) 1.5em);
  transition: all 0.3s ease-in-out;
}

#active:checked~.wrapper {
  clip-path: circle(75%);
}

.menu-btn {
 
  position: absolute;
  z-index: 2;
  right: 2vh;
  top: 0;
  width: 2.5vh;
  text-align: center;
  align-items: center;
  line-height: 5vh;
  border-radius: 50%;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

#active:checked~.menu-btn {
  color: #fff;
}

#active:checked~.menu-btn i:before {
  content: "\f00d"; /* cross */
}

.wrapper ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
}

.wrapper ul li {
  margin: 15px 0;
}

.wrapper ul li a {
  color: none;
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  padding: 5px 30px;
  color: #fff;
  border-radius: 50px;
  background: #1d1d1f;
  position: relative;
  line-height: 50px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.wrapper ul li a:after {
  position: absolute;
  content: "";
  background: #fff;
  background: #168ae9;
  width: 104%;
  height: 110%;
  left: -2%;
  top: -5%;
  border-radius: 2rem;
  transform: scaleY(0);
  z-index: -1;
  animation: rotate 1.5s linear infinite;
  transition: transform 0.3s ease;
  white-space: nowrap;
}

.wrapper ul li a:hover:after {
  transform: scaleY(1);
}

.wrapper ul li a:hover {
  color: #fff;
}

input[type="checkbox"] {
  display: none;
}

@keyframes rotate {
  0% {
    filter: blue-rotate(0deg);
  }

  100% {
    filter: blue-rotate(360deg);
  }
}

.anchorpoint {
  scroll-margin-top: 3em;
}

@media screen and (max-width: 800px) {
  .menu-btn {
 
 position: absolute;
 z-index: 2;
 right: 2vh;
 top: 0;
 width: 5vh;
 text-align: center;
 align-items: center;
 line-height: 5vh;
 border-radius: 50%;
 font-size: 3rem;
 color: #fff;
 cursor: pointer;
 transition: all 0.3s ease-in-out;
}
  .logo {
  margin-left: 3%;
  margin-bottom: 4%;
  width: auto;
  height: 100%;
}
.menu-header {
  font-family: 'Open Sans', sans-serif !important;
  font-size: 3rem !important;
  position: sticky;
  top: 0px;
  background-color: #1d1d1f;
  width: 100%;
  height: 8vh!important;
  max-height: 8vh !important;
  display: block;
  z-index: 2;
}
  .menu-header {
  font-family: 'Open Sans', sans-serif !important;
  font-size: 2rem !important;
  position: sticky;
  top: 0px;
  background-color: #1d1d1f;
  width: 100%;
  height: 5vh;
  max-height: 5vh;
  display: block;
  z-index: 2;
}
  
}
</style>
