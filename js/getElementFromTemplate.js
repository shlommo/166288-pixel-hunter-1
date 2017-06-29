const getElementFromTemplate = (stringMarkup) => {
  const div = document.createElement(`div`);
  div.innerHTML = stringMarkup;
  return div.firstElementChild;
};

export default getElementFromTemplate;
