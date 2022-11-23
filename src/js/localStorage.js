// eslint-disable-next-line import/no-cycle
// import addTask from './addTask';

// const wrapperBox = document.querySelector('.wrapper');

// export function save() {
//   const listItems = [];

//   const listItemsEls = Array.from(wrapperBox.querySelectorAll('.list__item'));
//   if (listItemsEls) {
//     listItemsEls.forEach((item) => {
//       listItems.push(item.textContent);
//     });
//   }

//   localStorage.setItem('listItems', JSON.stringify({ list__items: listItems }));
// }

// export function load() {
//   let savedListItems;

//   try {
//     savedListItems = JSON.parse(localStorage.getItem('listItems'));
//     if (savedListItems.list__items) {
//       savedListItems.list__items.forEach((item) => {
//         addTask(item, wrapperBox);
//       });
//     }
//   } catch (e) {
//     throw new Error('Invalid listItems');
//   }
// }
