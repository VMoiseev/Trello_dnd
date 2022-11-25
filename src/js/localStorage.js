// eslint-disable-next-line import/no-cycle
// import addTask from './addTask';

// const wrappers = document.querySelectorAll('.wrapper');

// export function save() {
//   for (const wrapper of wrappers) {
//     const listItems = [];

//     const listItemsEls = Array.from(wrapper.querySelectorAll('.list__item'));
//     if (listItemsEls) {
//       listItemsEls.forEach((item) => {
//         listItems.push(item.textContent);
//       });
//     }

//     localStorage.setItem('listItems', JSON.stringify({ list__items: listItems }));
//   }
// }

// export function load() {
//   for (const wrapper of wrappers) {
//     let savedListItems;

//     try {
//       savedListItems = JSON.parse(localStorage.getItem('listItems'));
//       if (savedListItems.list__items) {
//         savedListItems.list__items.forEach((item) => {
//           addTask(item, wrapper);
//         });
//       }
//     } catch (e) {
//       throw new Error('Invalid listItems');
//     }
//   }
// }
