<template>
    <div class="block" id="contact">
      <p class="contact-title">Nehmen Sie gerne Kontakt mit uns auf</p>
      <p class="contact-text">Wir sind für dich da! Unsere Support-Spezialisten sind Montag bis Freitag verfügbar</p>
      <p class="contact-text">Unsere Support-Email: <b>support@whY.de</b></p>
      <p class="contact-text">Servicezeit: 10:00 bis 19:00 Uhr, Montag bis Samstag</p>
      <p></p>
      <p class="contact-text contact-text2">Aus welchem Grund kontaktierst du uns?</p>
      <form class="contact-form" autocomplete="on" @submit.prevent="submitForm">
        <div>
          <div class="contact-row">
            <div class="contact-col">
              <select class="contact-row-rounded contact-thing">
                <option>Zahlung</option>
                <option>Bestellung und Bezahlung</option>
                <option>Zubehör</option>
                <option>Produktinformationen</option>
                <option>Produktsupport</option>
                <option>Versand</option>
                <option>Garantie und Rückgabe</option>
                <option>Anderes</option>
              </select>
            </div>
            <div class="contact-col">
              <select class="contact-row-rounded contact-thing">
                <option>Deutsch</option>
                <option>English</option>
                <option>Française</option>
                <option>Italian</option>
                <option>Español</option>
                <option>Nederlands</option>
                <option>中国人</option>
                <option>日本</option>
              </select>
            </div>
          </div>
        </div>
        <p class="contact-text contact-text2">Gib deine Anfrage unten ein und wir helfen dir gerne weiter:</p>
        <div>
          <div class="contact-row">
            <div class="contact-col">
              <input type="text" class="contact-row-rounded contact-thing" placeholder="Vorname" required pattern="[a-zA-Z0-9]+" v-model="firstName" />
            </div>
            <div class="contact-col">
              <input type="text" class="contact-row-rounded contact-thing" placeholder="Nachname" required pattern="[a-zA-Z0-9]+" v-model="lastName" />
            </div>
          </div>
          <div class="contact-row">
            <div class="contact-col">
              <input type="text" class="contact-row-rounded contact-thing" placeholder="Email" required v-model="email" />
            </div>
            <div class="contact-col">
              <input type="text" class="contact-row-rounded contact-thing" placeholder="Telefonnummer" required v-model="phoneNumber" />
            </div>
          </div>
          <div class="contact-row">
            <div class="contact-col-message">
              <textarea type="text" class="contact-row-rounded-message contact-thing" placeholder="Nachricht" rows="5" required v-model="message"></textarea>
            </div>
          </div>
          <div class="contact-row">
            <div class="contact-col-message">
              <button type="submit" class="contact-row-rounded contact-thing">EINREICHEN</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        // Hier kannst du die Logik für das Absenden des Formulars einfügen
        // Zum Beispiel: HTTP-Anfrage senden oder Formulardaten in einem Vuex-Store speichern
        console.log('Formular abgesendet');
        console.log('Vorname:', this.firstName);
        console.log('Nachname:', this.lastName);
        console.log('Email:', this.email);
        console.log('Telefonnummer:', this.phoneNumber);
        console.log('Nachricht:', this.message);
      },
    },
  };
  </script>
  
  <style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

  #contact {

    padding: 0 0.625rem !important;
    flex: 0 0 auto;
    width: 60%;
    box-sizing: border-box;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 2%;
    margin-bottom: 3%;
  }
  
  .block {
    height: auto;
  }
  
  .contact-title {
    font-family: 'Righteous', sans-serif !important;
    font-size: 2rem !important;
    margin-bottom: 3%;
    display: flex;
  justify-content: center;
  align-items: center;
  }
  
  .contact-text {
    text-align: center !important;
    font-family: 'Open Sans', sans-serif !important;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 1rem !important;
  }
  
  .contact-text2 {
    font-size: larger !important;
    font-family: 'Roboto', sans-serif !important;
    font-weight: 400;
    margin-bottom: 0.25rem;
    margin-top: 2.5rem;
  }
  
  .contact-form {
    width: 100% !important;
  }
  
  .contact-row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 54.5;
  }
  
  .contact-col {
    margin-top: 1rem !important;
    flex: 0 0 auto;
    width: 50%;
    position: relative !important;
  }
  
  .contact-row-rounded {
    border-radius: 50rem !important;
    width: 90%;
  }
  
  .contact-thing {
    font-family: 'Open Sans', sans-serif !important;
    color: #242424;
    padding: 0.5rem 1rem;
    border-color:#000;
    border-width: 1.5px;
    
  }
  
  .contact-thing:focus {
    outline: none !important;
    border-color: #a0a0a0;
  }
  
  .contact-thing::placeholder {
    color: #000000;
  }
  
  .contact-col-message {
    margin-top: 1rem !important;
    flex: 0 0 auto;
    width: 100%;
    position: relative !important;
  }
  
  .contact-row-rounded-message {
    width: 95%;
    resize: none;
    height: auto;
    border-bottom-left-radius: 2em;
    border-bottom-right-radius: 2em;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    font-family: 'Open Sans', sans-serif !important;
  }
  
  .contact-col-message button {
    background-color: #222222;
    color: #e2e2e2;
    width: 95%;
    font-family: 'Open Sans', sans-serif !important;
    font-size: 1rem !important;
    font-weight: 600;
  }
  
  .contact-number input::-webkit-outer-spin-button,
  .contact-number input::-webkit-inner-spin-button {
    display: none;
  }

  
  
  @media screen and (max-width: 800px) {
    .contact-col {
      width: 100%;
    }
  
    .contact-row-rounded-message {
      width: 90%;
    }
  
    .contact-col-message button {
      width: 90%;
    }
  }
  </style>
  