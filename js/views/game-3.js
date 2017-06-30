import header from './header';
import footer from './footer';
import renderGreeting from './greeting';
import renderResult from './result';
import getElementFromTemplate from '../getElementFromTemplate';
import render from '.././render';


const template = `${header(1)}
    
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
      </form>
      <div class="stats">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
      </div>
    </div>
    
    ${footer}`;

const gameThree = getElementFromTemplate(template);

const renderGameThree = () => {
  render(gameThree);

  const headerBack = document.querySelector(`.header__back`);

  const questions = document.querySelectorAll(`.game__option`);

  for (let q of questions) {
    q.onclick = () => {
      renderResult();
    };
  }

  headerBack.addEventListener(`click`, (event) => {
    event.preventDefault();

    renderGreeting();
  });

};

export default renderGameThree;
