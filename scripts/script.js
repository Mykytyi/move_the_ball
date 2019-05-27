'use strict';


let ball = document.getElementById('ball');
let field = document.getElementById('field');

let imgWidth = ball.clientWidth;
let imgHeight = ball.clientHeight;
let borderWidth = 10;
let fieldHeight = 300;
let fieldWidth = 250;

field.style.width = `${fieldWidth}px`;
field.style.height = `${fieldHeight}px`;
field.style.borderWidth = `${borderWidth}px`

field.addEventListener('click', function (event) {
  let x = event.clientX;
  let y = event.clientY;

  if (x < (imgWidth / 2)) {
    x = imgWidth / 2;
  } else if (x > fieldWidth - imgWidth / 2) {
    x = fieldWidth - imgWidth / 2;
  }
  if (y < (imgHeight / 2)) {
    y = imgHeight / 2;
  } else if (y > fieldHeight - imgHeight / 2) {
    y = fieldHeight - imgHeight / 2;
  }

  ball.style.top = y.toString() + 'px';
  ball.style.left = x.toString() + 'px';
});
