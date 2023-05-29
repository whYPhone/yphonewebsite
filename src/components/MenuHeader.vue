<template>
  <div class="menu-header">
    <a href="index.html"><img class="logo" alt="whYPhone-logo" src="/assets/bilder/whY-long.webp"></a>
    <input type="checkbox" id="active">
    <label for="active" class="menu-btn">
      <i v-if="!isExpanded" class="fas fa-bars"></i>
      <i v-else class="fas fa-times"></i>
    </label>
    <div class="wrapper">
      <ul>
        <!-- Hauptseite -->
        <li><a href="index.html">Home</a></li>
        <!-- Produktseite -->
        <li><a href="pages/products.html">Produkte</a></li>
        <!-- Anfrageformular -->
        <li><a href="pages/order.html">Bestellen</a></li>
        <!-- Anchorpoint zu Unser Team -->
        <li><a class="anchorpoint" href="index.html#about" onclick="active.click()">Unser Team</a></li>
        <!-- FaQ-->
        <li><a class="anchorpoint" href="pages/faq.html" onclick="active.click()">FAQ</a></li>
        <!-- Anchorpoint Kontaktformulat -->
        <li><a class="anchorpoint" href="index.html#contact" onclick="active.click()">Kontakt</a></li>
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
  }
  // Weitere Methoden und Lifecycle-Hooks
};
</script>

<style>
.logo {
  margin-left: 3%;
  width: auto;
  height: 100%;
}

.menu-header {
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
  font-size: 20px;
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
  border-radius: 50px;
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
  .menu-header {
    width: 100%;
  }
}
</style>
