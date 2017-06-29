import header from './header';
import footer from './footer';
import renderGreeting from './greeting';
import renderGameThree from './game-3';
import getElementFromTemplate from '../getElementFromTemplate';
import render from '.././render';


const template = `<div id="game-2">
  ${header(1)}
  
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
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
  
  ${footer}
  </div>`;

const gameTwo = getElementFromTemplate(template);

const renderGameTwo = () => {
  render(gameTwo);

  const headerBack = document.querySelector(`.header__back`);

  const listenQuestions = function (func, ...args) {
    const checked = {};

    for (let arg of args) {
      const questions = document.querySelectorAll(arg);

      for (let question of questions) {
        const name = question.getAttribute(`name`);

        question.addEventListener(`change`, () => {
          checked[name] = true;

          for (let item of args) {
            const itemQuestions = document.querySelectorAll(item);

            for (let q of itemQuestions) {
              const qName = q.getAttribute(`name`);

              if (!checked[qName]) {
                return;
              }
            }
          }

          func();
        });
      }
    }
  };

  listenQuestions(renderGameThree, `[name="question1"]`);

  headerBack.addEventListener(`click`, (event) => {
    event.preventDefault();

    renderGreeting();
  });

};

export default renderGameTwo;
