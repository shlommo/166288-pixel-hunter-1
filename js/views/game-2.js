import getElementFromTemplate from '../getElementFromTemplate';
import render from '.././render';
import gameContoroller from './gameController';


const renderGameTwo = (data) => {
  const template = `
    <p class="game__task">${data.description}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${data.questions.url}" alt="Option 1">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;

  render(getElementFromTemplate(template), `.game__container`);

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

  listenQuestions(gameContoroller, `[name="question1"]`);
};

export default renderGameTwo;
