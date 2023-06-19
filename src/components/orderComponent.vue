  <template>
    <div class="order-container block" id="orderID">
      <div class="order-row">
        <!-- Left Column / Product Image -->
        <div class="left-column order-column">
          <img :src="selectedImage" :alt="selectedColor" class="active" />
        </div>
  
        <!-- Right Column -->
        <div class="right-column order-column">
          <!-- Product Description -->
          <div class="product-description">
            <span>{{ productName }}</span>
            <h1>{{ productName }}</h1>
            <p>{{ productDescription }}</p>
            <br>
          </div>
  
          <!-- Product Configuration -->
          <div class="product-configuration">
            <!-- Product Color -->
            <div class="product-color">
              <span>Farbe</span>
              <div class="color-choose">
                <div v-for="color in colors" :key="color">
                  <input
                    type="radio"
                    :id="color"
                    :name="color"
                    :value="color"
                    v-model="selectedColor"
                    @change="updateSelectedImage"
                  />
                  <label :for="color"><span></span></label>
                </div>
              </div>
            </div>
  
            <!-- Speicher Configuration -->
            <div class="size-config">
              <span>Speicherplatz</span>
                <div class="size-choose">
                    <button v-for="size in sizes" :key="size" @click="updateSelectedSize(size)">{{ size }}</button>
                </div>
            <a href="../index.html#contact">Fragen zum Produkt? Nehmen sie Kontakt mit uns auf!</a>
            </div>
          </div>
  
          <div class="block" id="contact">
            <div class="order-container">
    <h3 class="contact-text contact-text2">Ihre Daten</h3>
    <br>
    <form class="contact-form" action="../pages/confirmation.html" autocomplete="on">
      <div>
        <div>
    <div class="contact-row">
      <div class="contact-col">
        <input type="text" class="contact-row-rounded contact-thing" placeholder="Vorname" required pattern="[a-zA-Z0-9]+" />
      </div>
      <div class="contact-col">
        <input type="text" class="contact-row-rounded contact-thing" placeholder="Nachname" required pattern="[a-zA-Z0-9]+" />
      </div>
    </div>
    <div class="contact-row">
      <div class="contact-col">
        <input type="text" class="contact-row-rounded contact-thing" placeholder="Straße" required pattern="[a-zA-Z0-9]+" />
      </div>
      <div class="contact-col">
        <input type="text" class="contact-row-rounded contact-thing" placeholder="Hausnummer" required pattern="[a-zA-Z0-9]+" />
      </div>
    </div>
    <div class="contact-row">
        <div class="contact-col">
        <input type="number" class="contact-row-rounded contact-thing" placeholder="Postleitzahl" required pattern="[0-9]{5}" />
      </div>
      <div class="contact-col">
        <input type="text" class="contact-row-rounded contact-thing" placeholder="Stadt" required pattern="[a-zA-Z0-9]+" />
      </div>
    </div>
    <div class="contact-row">
        <div class="contact-col">
            <select class="contact-row-rounded contact-thing">
                <option>Deutschland</option>
                <option>England</option>
                <option>Frankreich</option>
                <option>Italien</option>
                <option>Österreich</option>
                <option>Ozeanien</option>
                <option>Antarktis</option>
                <option>USA</option>
            </select>
        </div>
    </div>
    <h3 class="contact-text contact-text2">Wie können wir sie erreichen?</h3>
    <br>
                <div class="contact-row">
                  <div class="contact-col">
                    <input type="email" class="contact-row-rounded contact-thing" placeholder="Email" required />
                  </div>
                  <div class="contact-col">
                    <input type="text" class="contact-row-rounded contact-thing" placeholder="Telefonnummer" required />
                  </div>
                  <br>
                </div>
  </div>
      </div>
            </form>
        </div>
            <!-- Product Pricing -->
            <div class="product-price">
              <span>Preis: {{ selectedPrice }}</span>
              <router-link to="/Confirmation" class="cart-btn">Jetzt bestellen</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OrderComponent",
    data() {
      return {
        productName: "whY-Phone",
        productDescription:
          "Innovatives Design trifft neueste technische Errungenschaften. Die 20-fache Kamera und whY-OS wurden so entwickelt, dass jede Spiegelreflexkamera überflüssig ist.",
        colors: ["cyan", "white", "black"],
        sizes: ["1 TB", "5 TB", "10 TB"],
        selectedColor: "cyan",
        selectedSize: "1 TB",
        selectedImage: "../assets/images/Product/3_phones.webp",
        images: {
        cyan: "../assets/images/Product/Y-Phone_Green_2-removebg.webp",
        white: "../assets/images/Product/Y-Phone_White_2-removebg.webp",
        black: "../assets/images/Product/Y-Phone_Black_2-removebg.webp"
        },
        prices: {
          "1 TB": "$4525",
          "5 TB": "$5999",
          "10 TB": "$6999",
        },
      };
    },
    methods: {
      updateSelectedImage() {
        // Ändert das Bild basierend auf der ausgewählten Farbe
        this.selectedImage = this.images[this.selectedColor];
      },
      updateSelectedSize(size) {
        // Ändert die ausgewählte Speicherplatzgröße und den Preis
        this.selectedSize = size;
        this.selectedPrice = this.prices[size];
      },
    },
    computed: {
      selectedPrice() {
        return this.prices[this.selectedSize];
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  
  .order-container {
    font-family: 'Open Sans', sans-serif;
    margin: 3rem auto 0;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
  }
  h1{
    font-family: 'Raleway', sans-serif;
    font-size: 4.5rem !important;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
  h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  
  /* Row */
  .order-row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .contact-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.contact-col {
  flex-basis: 45%;
}

.contact-row-rounded {
  border-radius: 10px;
}

.contact-thing {
  width: 100%;
  padding: 10px;
  border: 1px solid #E1E8EE;
}

.contact-number {
  width: 80px;
}

.contact-text2 {
  margin-top: 20px;
}
  
  /* Columns */
  
  .order-column {
    position: relative !important;
  }
  
  .left-column {
    height: auto;
    width: 40%;
  }
  
  .right-column {
    height: 100%;
    margin-top: 5px;
    width: 60%;
    margin-bottom: 5%;
    text-align: center;
  }
  
  
  /* Left Column */
  .left-column img {
    width: auto;
    height: auto;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    opacity: 0;
    transition: all 0.3s ease;
    padding-left: 5%;
  }
  
  .left-column img.active {
    opacity: 1;
  }
  
  
  /* Right Column */
  
  /* Product Description */
  .product-description {
    border-bottom: 1px solid #E1E8EE;
    margin-bottom: 20px;
  }
  
  .product-description span {
    font-size: 12px;
    color: #358ED7;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }
  
  .product-description h1 {
    font-weight: 300;
    font-size: 52px;
    color: #43484D;
    letter-spacing: -2px;
  }
  
  .product-description p {
    font-size: 16px;
    font-weight: 300;
    color: #86939E;
    line-height: 24px;
  }
  
  /* Product Configuration */
  .product-color span,
  .size-config span {
    font-size: 14px;
    font-weight: 400;
    color: #86939E;
    margin-bottom: 20px;
    display: inline-block;
  }
  
  /* Product Color */
  .product-color {
    margin-bottom: 30px;
  }
  
  .color-choose div {
    display: inline-block;
  }
  
  .color-choose input[type="radio"] {
    display: none;
  }
  
  .color-choose input[type="radio"]+label span {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: -1px 4px 0 0;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 50%;
  }
  
  .color-choose input[type="radio"]+label span {
    border: 2px solid #FFFFFF;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
  }
  
  .color-choose input[type="radio"]#cyan+label span {
    background-color: #0ed9e3;
  }
  
  .color-choose input[type="radio"]#white+label span {
    background-color: #FFFFFF;
  }
  
  .color-choose input[type="radio"]#black+label span {
    background-color: #000000;
  }
  
  .color-choose input[type="radio"]:checked+label span {
    background-repeat: no-repeat;
    background-position: center;
  }
  
  /* Size Configuration */
  .size-choose {
    margin-bottom: 20px;
  }
  
  .size-choose button {
    border: 2px solid #E1E8EE;
    border-radius: 6px;
    padding: 13px 20px;
    font-size: 14px;
    color: #5E6977;
    background-color: #fff;
    cursor: pointer;
    transition: all .5s;
  }
  
  .size-choose button:hover,
  .size-choose button:active,
  .size-choose button:focus {
    border: 2px solid #86939E;
    outline: none;
  }
  
  .size-config {
    border-bottom: 1px solid #E1E8EE;
    margin-bottom: 20px;
  }
  
  .size-config a {
    color: #358ED7;
    text-decoration: none;
    font-size: 12px;
    position: relative;
    margin: 10px 0;
    display: inline-block;
  }
  
  .size-config a:before {
    content: "?";
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 2px solid rgba(53, 142, 215, 0.5);
    display: inline-block;
    text-align: center;
    line-height: 16px;
    opacity: 0.5;
    margin-right: 5px;
  }
  
  /* Product Price */
  .product-price {
    align-items: center;
  }
  
  .product-price span {
    font-size: 26px;
    font-weight: 300;
    color: #43474D;
    margin-right: 20px;
    margin-top: auto;
    margin-bottom: auto;
  }
  
  .cart-btn {
    display: inline-block;
    background-color: #168ae9;
    border-radius: 50rem;
    font-size: 16px;
    color: #FFFFFF;
    text-decoration: none;
    padding: 12px 30px;
    transition: all .5s;
  }
  
  .cart-btn:hover {
    background-color: #1171c0;
  }
  
  /* Responsive */
  @media screen and (max-width: 800px) {
    .order-row {
      flex-direction: column !important;
    }
  
    .left-column,
    .right-column {
      width: 100%;
    }
  
    .left-column {
      height: 60vh;
    }
  
    .left-column img {
      max-height: 70vh;
      max-width: 80vw;
      margin-left: 5%;
      margin-right: -5%;
      margin-bottom: 2%;
    }
  }
  
  @media (max-width: 768px) {
  /* Produktbeschreibung */
  .product-description {
    text-align: center;
  }
  
  /* Produktfarbe */
  .product-color {
    text-align: center;
  }
  
  .color-choose {
    display: flex;
    justify-content: center;
  }
  
  /* Speicherkonfiguration */
  .size-config {
    text-align: center;
  }
  
  .size-choose {
    display: flex;
    justify-content: center;
  }
  
  .size-choose button {
    margin-right: 10px;
  }
  
  /* Kontaktformular */
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact-row {
    flex-direction: column;
  }
  
  .contact-col {
    width: 100%;
  }
}

  </style>
  
  