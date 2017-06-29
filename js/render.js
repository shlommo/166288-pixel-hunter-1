const render = (element) => {
  const container = document.querySelector(`.central`);

  container.innerHTML = element.innerHTML;
};

export default render;
