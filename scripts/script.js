'use strict';
 // good job!

// you need to rewrite your code so that it is more versatile

let ball = document.getElementById('ball');
let field = document.getElementById('field');

field.addEventListener('click', function (event) {
  let x = event.clientX;
  let y = event.clientY;
// if we change the position of field or field size, your code will be broken down
  if (x < 20) {
    x = 20;
  } else if (x > 180) {
    x = 180;
  }
  if (y < 20) {
    y = 20;
  } else if (y > 130) {
    y = 130;
  }

  ball.style.top = y.toString() + 'px';
  ball.style.left = x.toString() + 'px'; // use template string
});
