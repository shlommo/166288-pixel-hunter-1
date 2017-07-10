import {greeting as greeting, initialState as initialState} from '.././data';
import header from './header';
import footer from './footer';
import stats from './stats';
import renderGreeting from './greeting';
import getElementFromTemplate from '../getElementFromTemplate';
import render from '.././render';
import gameContoroller from './gameController';


const renderGame = (data) => {
  const template = `${header(1, initialState)}
  
  <div class="game">
  
    <div class="game__container"></div>
    
    ${stats()}
  </div>
  
  ${footer}`;

  render(getElementFromTemplate(template));

  gameContoroller();

  const headerBack = document.querySelector(`.header__back`);

  headerBack.addEventListener(`click`, (event) => {
    event.preventDefault();

    renderGreeting(greeting);
  });
};

export default renderGame;
