<template>
  <div class="block" id="confirmation">
    <div class="title">
      <br>
    </div>
    <div id="confirmation">
      <form class="confirmation-form" action="../index.html">
        <div class="confirmation-box">
          <div class="confirmation-text">
            <h1>Vielen Dank für Ihre Bestellung</h1>
            <br>
            <p style="font-size:1.5rem">Die Bestellung ist eingegangen und wird so schnell wie möglich bearbeitet</p>
            <br>
            <p style="font-size: 0.8rem;">(Das ist eine Projektwebsite und es wurde kein Gerät bestellt)</p>
          </div>
          <button class="confirmationButton" @click="$router.push('/')">Zurück zur Startseite</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmationComponent',
}
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  .confirmation-form {
  font-family: 'Open Sans', sans-serif !important;
  background: #fff;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  border-radius: 5px;
  width: 90%;
  max-height: auto;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20%;
  border-top: 5px solid #168ae9;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.confirmation-text {
  max-width: 90%;
  margin-left: 5%;
  margin-top: 1%;

}

.confirmationButton {
  color: white;
  background-color: #168ae9;
  font-size: 2vh;
  margin: 3% auto;
  border: none;
  width: auto;
  height: 45px;
  padding: 0 1%;
  border-radius: 50rem;
  ;

}

.confirmationButton:hover {
  box-shadow: 15px 15px 15px 5px rgba(78, 72, 77, 0.219);
}

.confirmation-box {
  font-weight: 500;
  text-align: center;
}

.title {
  font-size: 4rem;
  font-weight: 500;
  text-align: center;
  margin-top: 5%
}
h1 {
  font-size: 2.5rem;
  font-weight: 600;
}


.block p {
  font-size: 3rem;
  font-weight: 600;
}

@media screen and (max-width: 800px) {
  .confirmation-form {
    height: 100%;
    flex-direction: column;
  }

  .confirmationButton {
    align-content: center;
    margin: 3% auto;
  }
}
  </style>