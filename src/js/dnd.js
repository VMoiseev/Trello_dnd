/* eslint-disable no-loop-func */
export default function dragNdrop() {
  let draggedEl = null;
  let ghostEl = null;
  let startX = null;
  let startY = null;

  const listsItems = document.querySelectorAll('.list');

  for (const listItems of listsItems) {
    listItems.addEventListener('mousedown', (e) => {
      e.preventDefault();
      if (!e.target.classList.contains('list__item')) {
        return;
      }

      draggedEl = e.target;
      ghostEl = e.target.cloneNode(true);
      ghostEl.classList.add('dragged');
      document.body.appendChild(ghostEl);
      startX = e.pageX - e.target.getBoundingClientRect().left;
      startY = e.pageY - window.scrollY - e.target.getBoundingClientRect().top;

      ghostEl.style.left = `${e.target.getBoundingClientRect().left}px`;
      ghostEl.style.top = `${window.scrollY + e.target.getBoundingClientRect().top}px`;
      ghostEl.style.width = `${e.target.offsetWidth}px`;
    });

    listItems.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if (!draggedEl) {
        return;
      }

      const newPlace = document.elementFromPoint(e.clientX, e.clientY);
      if (newPlace.classList.contains('list__item')) {
        newPlace.closest('.list').insertBefore(draggedEl, newPlace);
      } else if (newPlace.closest('.wrapper')) {
        newPlace.closest('.wrapper').querySelector('.list').appendChild(draggedEl);
      }
      ghostEl.style.left = `${e.pageX - startX}px`;
      ghostEl.style.top = `${e.pageY - startY}px`;
    });

    listItems.addEventListener('mouseup', (e) => {
      if (!draggedEl) {
        return;
      }

      const newPlace = document.elementFromPoint(e.clientX, e.clientY);
      if (newPlace.classList.contains('wrapper')) {
        newPlace.querySelector('.list').appendChild(draggedEl);
      } else if (newPlace.classList.contains('list__item')) {
        newPlace.closest('.list').insertBefore(draggedEl, newPlace);
      } else if (newPlace.closest('.wrapper')) {
        newPlace.closest('.wrapper').querySelector('.list').appendChild(draggedEl);
      }
      document.body.removeChild(ghostEl);
      draggedEl = null;
      ghostEl = null;
    });
  }
}

dragNdrop();
