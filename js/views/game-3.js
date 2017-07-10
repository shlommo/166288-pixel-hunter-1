import getElementFromTemplate from '../getElementFromTemplate';
import render from '.././render';
import gameContoroller from './gameController';


const renderGameThree = (data) => {
  const template = `
      <p class="game__task">${data.description}</p>
      <form class="game__content  game__content--triple">
        ${data.questions.map((item) => {
          return `<div class="game__option"><img src="${item.url}" alt="Option 1"></div>`;
        }).join(``)}
      </form>`;


  render(getElementFromTemplate(template), `.game__container`);

  const questions = document.querySelectorAll(`.game__option`);

  for (let q of questions) {
    q.onclick = () => {
      gameContoroller();
    };
  }
};

export default renderGameThree;
