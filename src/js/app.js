/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
const btns = document.querySelectorAll('.add__btn');
const addBtns = document.querySelectorAll('.add__item-btn');
const textareas = document.querySelectorAll('.textarea');
const lists = document.querySelectorAll('.list');
let value;

function addTask() {
  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.addEventListener('click', (e) => {
      btn.style.display = 'none';
      const form = e.target.closest('.wrapper').querySelector('.form');
      form.style.display = 'block';
    });
  }

  for (const textarea of textareas) {
    textarea.addEventListener('input', (e) => {
      value = e.target.value;
    });
  }

  for (let j = 0; j < addBtns.length; j++) {
    const addBtn = addBtns[j];
    addBtn.addEventListener('click', (e) => {
      const newItem = document.createElement('div');
      newItem.classList.add('list__item');
      newItem.textContent = value;
      lists[j].append(newItem);

      const textarea = e.target.closest('.wrapper').querySelector('.textarea');
      textarea.value = '';
      value = '';
      const form = e.target.closest('.wrapper').querySelector('.form');
      form.style.display = 'none';
      const btn = e.target.closest('.wrapper').querySelector('.add__btn');
      btn.style.display = 'block';
    });
  }
}
addTask();
