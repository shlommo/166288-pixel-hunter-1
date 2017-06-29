import header from './header';
import footer from './footer';
import renderGameOne from './game-1';
import renderGreeting from './greeting';
import getElementFromTemplate from '../getElementFromTemplate';
import render from '.././render';


const template = `<div id="rules">
  ${header()}
  
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  
  ${footer}
  </div>`;

const rules = getElementFromTemplate(template);

const renderRules = () => {
  render(rules);

  const rulesInput = document.querySelector(`.rules__input`);
  const rulesButton = document.querySelector(`.rules__button`);
  const rulesForm = document.querySelector(`.rules__form`);
  const headerBack = document.querySelector(`.header__back`);


  rulesInput.addEventListener(`input`, () => {
    if (rulesInput.value.length > 0) {
      rulesButton.removeAttribute(`disabled`);
    } else {
      rulesButton.setAttribute(`disabled`, `true`);
    }
  });

  rulesForm.addEventListener(`submit`, (event) => {
    event.preventDefault();

    renderGameOne();
  });

  headerBack.addEventListener(`click`, (event) => {
    event.preventDefault();

    renderGreeting();
  });
};

export default renderRules;
