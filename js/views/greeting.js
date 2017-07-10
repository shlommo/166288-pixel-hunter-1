import renderRules from './rules';
import footer from './footer';
import getElementFromTemplate from '../getElementFromTemplate';
import render from '.././render';

const renderGreeting = (data) => {
  const template = `<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${data.title}</h3>
      <p>${data.rules}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>
  ${footer}`;

  render(getElementFromTemplate(template));

  const greetingContinue = document.querySelector(`.greeting__continue`);

  greetingContinue.addEventListener(`click`, () => {
    renderRules();
  });
};


export default renderGreeting;
