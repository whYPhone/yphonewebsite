<template>
    <div class="faq">
      <div class="title">Oft getellte Fragen</div>
      <div class="faq-content">
        <div class="faq-question" v-for="faq in faqData" :key="faq.id">
          <input :id="faq.id" type="checkbox" class="panel">
          <div class="plus">+</div>
          <label :for="faq.id" class="panel-title">{{ faq.question }}</label>
          <div class="panel-content">{{ faq.answer }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import faqData from '/src/assets/Qanda.json';
  
  export default {
    name: 'FaqComponents',
    data() {
      return {
        faqData: faqData,
      };
    },
  };
  </script>

<style>
.faq {
  margin: 5% 5%;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-top: 5%;
}

.faq-content {
  margin: 0 auto;
}

.faq-question {
  padding: 20px 0;
  border-bottom: 1px dotted #ccc;
}

.panel-title {
  font-size: 24px;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 8px 5% 1%;
  display: block;
  cursor: pointer;
}

.panel-content {
  font-size: 20px;
  padding: 0px 10%;
  margin: 0 40px;
  height: 0;
  overflow: hidden;
  z-index: -1;
  position: relative;
  opacity: 0;
  transition: height 0.4s ease, opacity 0.4s ease;
}

.panel:checked ~ .panel-content {
  height: auto;
  opacity: 1;
  padding: 14px;
}

.plus {
  position: absolute;
  margin-left: 1%;
  margin-right: 2%;
  margin-top: 4px;
  z-index: 1;
  font-size: 42px;
  line-height: 100%;
  user-select: none;
  transition: transform 0.2s ease;
}

.panel:checked ~ .plus {
  transform: rotate(45deg);
}

.panel {
  display: none;
}

@media screen and (max-width: 1000px) {
  .panel-title {
    padding: 8px 7% 1%;
  }
}

@media screen and (max-width: 555px) {
  .panel-title {
    padding: 8px 10% 1%;
  }
}

@media screen and (max-width: 340px) {
  .panel-title {
    padding: 8px 14% 1%;
  }
}
</style>

