'use strict';

const home = document.querySelector('.holder');
const logIn = document.querySelector('.log_panel');
const register = document.querySelector('.register');
const pozaAbout = document.querySelector('.fundal1');
const scrisAbout = document.querySelector('.fundal');
const warning = document.querySelector('noMatch');
const btnHome = document.querySelector('#H');
const btnAbout = document.querySelector('#L');
const btnLog = document.querySelector('#log_in');
const btnRegister = document.querySelector('#register');
const logSubmit = document.querySelector('#log_btn');
const btnLogOut = document.querySelector('#logOut');
const logo = document.querySelector('.logo');
const userInput = document.querySelector('#userInput');
const passInput = document.querySelector('#passInput');
let darkMode = 0;
let logStatus = 0;

const setHome = function () {
  btnHome.style.transform = 'translateY(-3px)';
  btnAbout.style.transform = 'translateY(3px)';
  btnLog.style.transform = 'translateY(3px)';
  btnRegister.style.transform = 'translateY(3px)';
  home.classList.remove('hidden');
  logIn.classList.add('hidden');
  register.classList.add('hidden');
  pozaAbout.classList.add('hidden');
  scrisAbout.classList.add('hidden');
};
setHome();
document.querySelector('.btn5').classList.add('hidden');
document.querySelector('.userOn').classList.add('hidden');

home.classList.remove('hidden');
console.log(logStatus);

btnHome.addEventListener('click', setHome);

btnLog.addEventListener('click', function () {
  btnLog.style.transform = 'translateY(-3px)';
  btnHome.style.transform = 'translateY(3px)';
  btnAbout.style.transform = 'translateY(3px)';
  btnRegister.style.transform = 'translateY(3px)';
  home.classList.add('hidden');
  logIn.classList.remove('hidden');
  register.classList.add('hidden');
  pozaAbout.classList.add('hidden');
  scrisAbout.classList.add('hidden');
});

btnRegister.addEventListener('click', function () {
  btnRegister.style.transform = 'translateY(-3px)';
  btnHome.style.transform = 'translateY(3px)';
  btnAbout.style.transform = 'translateY(3px)';
  btnLog.style.transform = 'translateY(3px)';
  home.classList.add('hidden');
  logIn.classList.add('hidden');
  register.classList.remove('hidden');
  pozaAbout.classList.add('hidden');
  scrisAbout.classList.add('hidden');
});

btnAbout.addEventListener('click', function () {
  btnAbout.style.transform = 'translateY(-3px)';
  btnHome.style.transform = 'translateY(3px)';
  btnLog.style.transform = 'translateY(3px)';
  btnRegister.style.transform = 'translateY(3px)';
  home.classList.add('hidden');
  logIn.classList.add('hidden');
  register.classList.add('hidden');
  pozaAbout.classList.remove('hidden');
  scrisAbout.classList.remove('hidden');
});

logo.addEventListener('click', function () {
  if (darkMode === 0) {
    document.querySelector('body').style.transition = '0.5s';
    console.log('Sheesh!');
    document.querySelector('.navbar').style.background = '#0C134F';
    document.querySelector('body').style.background = '#1D267D';
    document.querySelector('.btn1').style.background = '#0C134F';
    document.querySelector('.btn1').style.color = '#D4ADFC';
    document.querySelector('.btn2').style.background = '#0C134F';
    document.querySelector('.btn2').style.color = '#D4ADFC';
    document.querySelector('.btn3').style.background = '#0C134F';
    document.querySelector('.btn3').style.color = '#D4ADFC';
    document.querySelector('.btn4').style.background = '#0C134F';
    document.querySelector('.btn4').style.color = '#D4ADFC';
    document.querySelector('.btn5').style.background = '#0C134F';
    document.querySelector('.btn5').style.color = '#D4ADFC';
    document.querySelector('.behind').style.background = '#5C469C';
    document.querySelector('.log_panel').style.background = '#1D267D';
    document.querySelector('.log_panel').style.color = 'black';
    document.querySelector('.register').style.background = '#1D267D';
    document.querySelector('.register').style.color = 'black';
    document.querySelector('.fundal').style.color = '#D4ADFC';
    document.querySelector('.fundal').style.background = '#5C469C';
    document.querySelector('.fundal1').style.color = '#D4ADFC';
    document.querySelector('.fundal1').style.background = '#5C469C';
    document.querySelector('.favicon').href = '/poze/dark.png';

    darkMode = 1;
  } else if (darkMode === 1) {
    document.querySelector('body').style.transition = '0.5s';
    document.querySelector('.navbar').style.background = 'white';
    document.querySelector('body').style.background = '#354649';
    document.querySelector('.btn1').style.background = 'white';
    document.querySelector('.btn1').style.color = 'black';
    document.querySelector('.btn2').style.background = 'white';
    document.querySelector('.btn2').style.color = 'black';
    document.querySelector('.btn3').style.background = 'white';
    document.querySelector('.btn3').style.color = 'black';
    document.querySelector('.btn4').style.background = 'white';
    document.querySelector('.btn4').style.color = 'black';
    document.querySelector('.btn5').style.background = 'white';
    document.querySelector('.btn5').style.color = 'black';
    document.querySelector('.behind').style.background = '#a3c6c4';
    document.querySelector('.log_panel').style.background = '#6c7a89';
    document.querySelector('.log_panel').style.color = 'white';
    document.querySelector('.register').style.background = '#6c7a89';
    document.querySelector('.register').style.color = 'white';
    document.querySelector('.fundal').style.color = 'black';
    document.querySelector('.fundal').style.background = 'white';
    document.querySelector('.fundal1').style.color = 'black';
    document.querySelector('.fundal1').style.background = 'white';
    document.querySelector('.favicon').href = '/poze/light.png';

    darkMode = 0;
  }
});

logSubmit.addEventListener('click', function () {
  // Log in Submit!
  if (userInput.value == 'user' && passInput.value == 'user') {
    //Buton submit sa dea submit + logStatus = true;
    //log out + register => hidden
    logStatus = 1;
    console.log(logStatus);
    document.querySelector('.btn4').classList.add('hidden');
    document.querySelector('.btn3').classList.add('hidden');
    document.querySelector('.btn5').classList.remove('hidden');
    document.querySelector('.userOn').classList.remove('hidden');
    setHome();
  }
});

btnLogOut.addEventListener('click', function () {
  logStatus = 0;
  console.log(logStatus);
  document.querySelector('.btn4').classList.remove('hidden');
  document.querySelector('.btn3').classList.remove('hidden');
  document.querySelector('.btn5').classList.add('hidden');
  document.querySelector('.userOn').classList.add('hidden');
  userInput.value = '';
  passInput.value = '';
  setHome();
});

let slidesIndex = 1;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName('element');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slidesIndex++;
  if (slidesIndex > slides.length) {
    slidesIndex = 1;
  }
  slides[slidesIndex - 1].style.display = 'flex';
  setTimeout(showSlides, 4000);
}
