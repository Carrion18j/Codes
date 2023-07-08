'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloceHandler = document.querySelector('.close-modal');
const btnOpenHandler = document.querySelectorAll('.show-modal');
console.log(btnCloceHandler);

const closeModalHandler = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModalHandler = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenHandler.length; i++) {
  btnOpenHandler[i].addEventListener('click', openModalHandler);
}

btnCloceHandler.addEventListener('click', closeModalHandler);

overlay.addEventListener('click', closeModalHandler);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalHandler();
});
