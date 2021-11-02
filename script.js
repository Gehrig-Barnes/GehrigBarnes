const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');

function clickAlert() {
    alert('I was clicked!');
  }

  box1.addEventListener('click', clickAlert);
  box2.addEventListener('click', clickAlert);
  box3.addEventListener('click', clickAlert);
  box4.addEventListener('click', clickAlert);
  box5.addEventListener('click', clickAlert);
  box6.addEventListener('click', clickAlert);