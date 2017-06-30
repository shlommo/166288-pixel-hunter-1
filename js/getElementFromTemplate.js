const getElementFromTemplate = (template) => {
  const container = document.createElement(`template`);
  container.innerHTML = template;
  return container;
};

export default getElementFromTemplate;
