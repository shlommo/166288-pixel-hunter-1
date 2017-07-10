const initialState = Object.freeze({
  time: 99,
  lives: 3
});

const greeting = Object.freeze({
  title: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
  rules: `Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.`
});


const games = [
  {
    type: 1,
    view: {
      description: `Угадайте для каждого изображения фото или рисунок?`,
      questions: [
        {
          type: `paintings`,
          url: `https://k42.kn3.net/CF42609C8.jpg`
        },
        {
          type: `paintings`,
          url: `https://k42.kn3.net/D2F0370D6.jpg`
        }
      ]
    },
  },
  {
    type: 2,
    view: {
      description: `Угадай, фото или рисунок?`,
      questions:
      {
        type: `photos`,
        url: `http://i.imgur.com/1KegWPz.jpg`
      }
    },
  },
  {
    type: 3,
    view: {
      description: `Найдите рисунок среди изображений`,
      questions: [
        {
          type: `photos`,
          url: `https://i.imgur.com/DiHM5Zb.jpg`
        },
        {
          type: `photos`,
          url: `http://i.imgur.com/DKR1HtB.jpg`
        },
        {
          type: `paintings`,
          url: `https://k32.kn3.net/5C7060EC5.jpg`
        },
      ]
    },
  }
];

export {greeting, initialState, games};
