/* eslint-disable guard-for-in */
import toDoManager from "./todoManager";

/* eslint-disable no-restricted-syntax */
function renderToDoList(lists) {
  const projectList = document.querySelector('.projectList');
  console.log(projectList);
  projectList.textContent = '';
  for (const title of lists) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = title.title;
    link.addEventListener('click', () => {
      console.log(`Clicked ${title}`);
    });
    listItem.appendChild(link);
    projectList.appendChild(listItem);
  }
}

function renderCards(cards) {
  const container = document.querySelector('.card-container');
  container.textContent = '';
  
  for (const card of cards) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = card.title;
    cardTitle.classList.add('toDoTitle');
    newCard.appendChild(cardTitle);

    let counter = 1;
    for (const check in card.itemStatus) {
      const toDoCheck = document.createElement('div');
      toDoCheck.classList.add('check');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `task ${counter}`;
      checkbox.name = 'task';
      checkbox.value = `task ${counter}`;
      if (card.itemStatus[check] === true) {
        checkbox.checked = true;
      }
      toDoCheck.appendChild(checkbox);

      const checkLabel = document.createElement('label');
      checkLabel.htmlFor = `task ${counter}`;
      checkLabel.textContent = check;
      
      toDoCheck.appendChild(checkLabel);

      newCard.appendChild(toDoCheck);
      counter++;
    }

    const description = document.createElement('p');
    description.textContent = card.desc;
    description.classList.add('toDoDescription');
    newCard.appendChild(description);

    const updateButton = document.createElement('button');
    updateButton.type = 'button';
    updateButton.textContent = 'Update ToDo List';
    updateButton.addEventListener('click', () => {
      toDoManager.updateToDo(card);
    });

    newCard.appendChild(updateButton);

    container.appendChild(newCard);
  }
}
export { renderToDoList, renderCards };