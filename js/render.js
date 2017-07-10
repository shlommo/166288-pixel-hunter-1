const render = (element, containerSelector) => {
  const selector = typeof containerSelector === `undefined` ? `.central` : containerSelector;
  const container = document.querySelector(selector);

  container.innerHTML = element.innerHTML;
};

export default render;
