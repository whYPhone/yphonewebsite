<template>
    <div id="about">

      <div class="title">Unser Team</div>
      <div class="about-layout-row">
        <div v-for="member in teamMembers" :key="member.name" class="about-align about-layout-cell">
          <div class="about-container-layout">
            <div :class="['about-image', member.imageClass]"></div>
            <h5 class="about-align-text about-text-names">{{ member.name }}</h5>
            <p class="about-align-text">{{ member.role }}</p>
            <a :href="member.instagramLink">
              <img class="instagram" src="/assets/images/Review/instagram.svg" alt="instagram">
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'AboutUsInfo',
    data() {
      return {
        teamMembers: [
          {
            name: 'Thomas Stocker',
            role: 'CEO',
            imageClass: 'thomas',
            instagramLink: 'https://instagram.com/stomashocker/'
          },
          {
            name: 'Paul Wagner',
            role: 'CIO',
            imageClass: 'paul',
            instagramLink: 'https://instagram.com/wagner00p/'
          },
          {
            name: 'Raphael Kletting',
            role: 'stellv. CEO und Leitender CTO',
            imageClass: 'raphael',
            instagramLink: 'https://instagram.com/hereisraphi/'
          },
          {
            name: 'Samuel Titt',
            role: 'Leiter Entwicklungsabteilung',
            imageClass: 'samuel',
            instagramLink: 'https://instagram.com/nmdrene/'
          },
          {
            name: 'Vladimir Skrobot',
            role: 'stellv. Entwicklungsabteilung',
            imageClass: 'vladimir',
            instagramLink: 'https://instagram.com/vl4d1_1502/'
          },
          {
            name: 'Heiko Schramek',
            role: 'stellv. Entwicklungsabteilung',
            imageClass: 'heiko',
            instagramLink: 'https://instagram.com/vl4d1_1502/'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

  .title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    color: #ffffff;
    font-size: 3rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .about-layout-row {
    flex: 1 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 95vh;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 5%;
  }
  
  .about-align {
    text-align: center;
    position: relative;
    display: flex;
    background-clip: padding-box;
    background-origin: padding-box;
    flex: 0 0 33.33%;
    width: 33.33%;
    height: 33.33%;
  }
  
  .about-layout-cell {
    position: relative;
    display: flex;
    background-clip: padding-box;
    background-origin: padding-box;
    background-color: #e4e4e4;
    border: 15px solid transparent;
  }
  
  .about-container-layout {
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    padding: 30px 0;
    position: relative;
    flex: 1;
    max-width: 100%;
    display: block;
  }
  
  .about-image {
    border-radius: 50% !important;
    margin: 0 auto;
    height: 20vh;
    width: 20vw;
    max-width: 20vh;
    max-height: 20vw;
    background-size: cover;
    background-position: 70% 50%;
  }
  
  .thomas {
    background-image: url(/public/assets/images/AboutUs/thomas.webp);
  }
  
  .paul {
    background-image: url(/public/assets/images/AboutUs/paul.webp);
  }
  
  .raphael {
    background-image: url(/public/assets/images/AboutUs/raphael.webp);
  }
  
  .heiko {
    background-image: url(/public/assets/bilder/Y-Phone_Black_1.png);
  }
  
  .vladimir {
    background-image: url(/public/assets/images/AboutUs/vladimir.webp);
  }
  
  .samuel {
    background-image: url(/public/assets/bilder/Y-Phone_Black_1.png);
  }
  
  .about-align-text {
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    word-wrap: break-word;
    position: relative;
    display: table;
    align-self: flex-start;
    width: fit-content;
    margin: 0 auto;
    margin: 30px auto 0;
  }
  
  .about-text-names {
    color: #168ae9 !important;
    font-weight: 700;
    font-size: 1.5rem;
  }
  
  .instagram {
    width: 15%;
    height: 15%;
    margin: 5% auto 0;
  }
  
  #about {
    padding-top: 0.5rem;
    background-color: #1d1d1f;
  }
  
  @media screen and (max-width: 800px) {
    .about-align {
      flex: 0 0 50%;
      width: 50%;
    }
  }
  
  @media screen and (max-width: 500px) {
    .about-align {
      flex: 0 0 100%;
      width: 100%;
    }
  }
  </style>
  