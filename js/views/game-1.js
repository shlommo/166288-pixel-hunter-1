import getElementFromTemplate from '../getElementFromTemplate';
import render from '.././render';
import gameContoroller from './gameController';

const renderGameOne = (data) => {

  const getQuestions = (questions) => {
    let questionsStr = ``;

    questions.forEach((item, idx) => {
      questionsStr += `<div class="game__option">
        <img src="${item.url}" alt="Option ${idx + 1}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question${idx + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${idx + 1}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`;
    });

    return questionsStr;
  };

  const template = `
    <p class="game__task">${data.description}</p>
    <form class="game__content">
    
      ${getQuestions(data.questions)}
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

  listenQuestions(gameContoroller, `[name="question1"]`, `[name="question2"]`);
};

export default renderGameOne;
