'use strict';
const modal = document.querySelector('.modal');
const brecht = document.querySelector('.brecht');
const tek = document.querySelector('.tek');
const udemy = document.querySelector('.udemy');
const java = document.querySelector('.java');
const overlay = document.querySelector('.overlay');
// const btnsCloseModal = document.querySelectorAll('.close-modal');

// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);
const btnOpenModalBrecht = document.querySelector('.brecht-img');
const btnOpenModalTek = document.querySelector('.tek-img');
const btnOpenModalUdemy = document.querySelector('.udemy-img');
const btnOpenModalJava = document.querySelector('.java-img');
const btnCloseModalBrecht = document.querySelector('.close-modal-brecht');
const btnCloseModalTek = document.querySelector('.close-modal-tek');
const btnCloseModalUdemy = document.querySelector('.close-modal-udemy');
const btnCloseModalJava = document.querySelector('.close-modal-java');

// const headBrecht = 'Who am i? 👨';
// const brecht =
//   `I am Brecht,` +
//   '\n' +
//   `I have always had a passion for people and informatics (because it's fully made by people). I grew up playing video games,thinking about how games influence behaviour and how behaviour creates/influences code.`;
// const headWas = "Where I've been";
// const was =
//   " TEKsystems: loved exploring the vast world of IT in Belgium. Talking with developers it's was easy to take genuine interest in their jobs. After a year I started coding html on an app called mimo, where I also tasted python, PHP, CSS and JavaScript." +
//   '- Canada: work and travel holiday with my girlfriend (now wife) thinking about which direction to take with carreer. Tried security on Udemy, moved to python and data science. Ended up on JavaScript currently.';

// const headNow = 'Where I am now';
// const now =
//   "- long planned snowboard trip (joke), but it shows I'm dedicated to doing this, I took time to code while I could be out on the slopes (and this is where I want to be!).- learning python and JavaScript, focussing on object oriented programming and Java development.";
// const headJava = "Where I'm going";
// const java =
//   '- java enterprise developer by q4 working in a medium to large environment to learn and improve my skills. Taking on as many project as I can fit.';

const openModalBrecht = function () {
  brecht.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log(`open modal brecht`);
};

const openModalTek = function () {
  tek.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log(`open modal tek`);
};

const openModalUdemy = function () {
  udemy.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log(`open modal udemy`);
};

const openModalJava = function () {
  java.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log(`open modal java`);
};

const closeModalBrecht = function () {
  brecht.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log(`close modal`);
};

const closeModalTek = function () {
  tek.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log(`close modal`);
};
const closeModalUdemy = function () {
  udemy.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log(`close modal`);
};
const closeModalJava = function () {
  java.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log(`close modal`);
};

btnOpenModalBrecht.addEventListener('click', openModalBrecht);
btnOpenModalTek.addEventListener('click', openModalTek);
btnOpenModalUdemy.addEventListener('click', openModalUdemy);
btnOpenModalJava.addEventListener('click', openModalJava);

btnCloseModalBrecht.addEventListener('click', closeModalBrecht);
btnCloseModalTek.addEventListener('click', closeModalTek);
btnCloseModalUdemy.addEventListener('click', closeModalUdemy);
btnCloseModalJava.addEventListener('click', closeModalJava);

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   if (i === 0) {
//     document.querySelector('.heading').textContent = headBrecht;
//     document.querySelector('.text').textContent = brecht;
//   } else if (i === 1) {
//     document.querySelector('.heading').textContent = headWas;
//     document.querySelector('.text').textContent = was;
//   } else if (i === 2) {
//     document.querySelector('.heading').textContent = headNow;
//     document.querySelector('.text').textContent = now;
//   } else if (i === 3) {
//     document.querySelector('.heading').textContent = headJava;
//     document.querySelector('.text').textContent = java;
//   }
//
// }

// btnCloseModal.addEventListener('click', closeModal);
// for (let i = 0; i < btnsCloseModal.length; i++)
//   btnsCloseModal[i].addEventListener('click', closeModal);
overlay.addEventListener('click', closeModalBrecht);
overlay.addEventListener('click', closeModalTek);

overlay.addEventListener('click', closeModalUdemy);
overlay.addEventListener('click', closeModalJava);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
