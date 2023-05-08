'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

//Functia pentru deschiderea ferestrei
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Functia pentru inchiderea ferestrei
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//for-ul pentru a parcurge elementele cu acelasi nume(butoanele) si a apela aceeasi functia de a deschide fereastra
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);
//apelarea functiei de inchidere a ferestrei pe click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
