/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */

import dragNdrop from './dnd';

const btns = document.querySelectorAll('.add__btn');
const addBtns = document.querySelectorAll('.add__item-btn');
const textareas = document.querySelectorAll('.textarea');
const lists = document.querySelectorAll('.list');
const canselBtns = document.querySelectorAll('.cansel__item-btn');
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

      newItem.addEventListener('mouseover', activeNewItem);
      newItem.addEventListener('mouseout', deactiveNewItem);

      const newItemDelete = document.createElement('button');
      newItemDelete.className = 'newItemDelete';
      newItemDelete.textContent = ('X');
      newItem.appendChild(newItemDelete);
      newItemDelete.addEventListener('click', deleteNewItem);

      function activeNewItem(e) {
        e.currentTarget.classList.add('active');
        e.currentTarget.querySelector('.newItemDelete').classList.add('visible');
      }

      function deactiveNewItem(e) {
        e.currentTarget.classList.remove('active');
        e.currentTarget.querySelector('.newItemDelete').classList.remove('visible');
      }

      function deleteNewItem(e) {
        e.preventDefault();
        e.target.closest('.newItem');
        newItem.remove();
      }

      const textarea = e.target.closest('.wrapper').querySelector('.textarea');
      textarea.value = '';
      value = '';
      const form = e.target.closest('.wrapper').querySelector('.form');
      form.style.display = 'none';
      const btn = e.target.closest('.wrapper').querySelector('.add__btn');
      btn.style.display = 'flex';
    });
  }

  for (let a = 0; a < canselBtns.length; a++) {
    const canselBtn = canselBtns[a];
    canselBtn.addEventListener('click', (e) => {
      const textarea = e.target.closest('.wrapper').querySelector('.textarea');
      textarea.value = '';
      value = '';
      const form = e.target.closest('.wrapper').querySelector('.form');
      form.style.display = 'none';
      const btn = e.target.closest('.wrapper').querySelector('.add__btn');
      btn.style.display = 'flex';
    });
  }
}

addTask();
dragNdrop();
