import {games as games} from '.././data';
import renderGameOne from './game-1';
import renderGameTwo from './game-2';
import renderGameThree from './game-3';
import renderResult from './result';

let gameQuestionsNum = 0;

const gameAction = () => {
  let question = games[gameQuestionsNum];

  if (gameQuestionsNum < games.length) {
    switch (question.type) {
      case 1:
        renderGameOne(question.view);
        break;
      case 2:
        renderGameTwo(question.view);
        break;
      case 3:
        renderGameThree(question.view);
        break;
    }
  } else {
    renderResult();
  }

  gameQuestionsNum++;
};

export default gameAction;
