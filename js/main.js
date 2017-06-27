const templatesArr = document.querySelectorAll(`template`);

const renderTemplate = (num, arr) => {
  const container = document.querySelector(`.central`);

  container.innerHTML = arr[num].innerHTML;
}

let altIsPressed = false;

document.onkeydown = (event) => {
  if(event.keyCode == 18) {
    altIsPressed = true;
  }
}

document.onkeyup = (event) => {
  if(event.keyCode == 18) {
    altIsPressed = false;
  }
}

let tempNum = 0;

document.addEventListener(`keydown`, (event) => {
  if( altIsPressed && event.keyCode == 37 && tempNum > 0) {
    --tempNum;
    renderTemplate(tempNum, templatesArr);
  } else if ( altIsPressed && event.keyCode == 39 && tempNum < templatesArr.length - 1 ){
    tempNum++;
    renderTemplate(tempNum, templatesArr);
  }
});



