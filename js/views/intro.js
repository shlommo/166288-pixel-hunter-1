import {greeting as greeting} from '.././data';
import renderGreeting from './greeting';
import footer from './footer';
import getElementFromTemplate from '../getElementFromTemplate';
import render from '.././render';

const template = `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${footer}`;

const intro = getElementFromTemplate(template);

const renderIntro = () => {
  render(intro);

  const introAsterisk = document.querySelector(`.intro__asterisk`);

  introAsterisk.addEventListener(`click`, () => {
    renderGreeting(greeting);
  });
};


export default renderIntro;
