// eslint-disable-next-line import/no-cycle
import addTask from './addTask';

// Татьяна, localStorage теперь записывает данные в сторедж, но только первого столбца,
// но load не работает почему-то даже для одного столбца.

const wrapperWithListItems = document.querySelector('.wrapper');

export function save() {
  const cards = [];

  const cardsEls = Array.from(wrapperWithListItems.querySelectorAll('.list__item'));
  if (cardsEls) {
    cardsEls.forEach((item) => {
      cards.push(item.textContent);
    });
  }
  localStorage.setItem('cards', JSON.stringify({ listItems: cards }));
}

export function load() {
  let savedCards;

  try {
    savedCards = JSON.parse(localStorage.getItem('cards'));
    if (savedCards.listItems) {
      savedCards.listItems.forEach((item) => {
        addTask(item, wrapperWithListItems);
      });
    }
  } catch (e) {
    throw new Error('Invalid cards');
  }
}
