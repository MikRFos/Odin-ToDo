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
  const container = document.querySelector('.content');
  for (const card of cards) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = card.title;
    cardTitle.classList.add('toDoTitle');
    newCard.appendChild(cardTitle);

    let counter = 1;
    for (const check of card.items) {
      const toDoCheck = document.createElement('div');
      toDoCheck.classList.add('check');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `task ${counter}`;
      checkbox.name = 'task';
      checkbox.value = `task ${counter}`;
      toDoCheck.appendChild(checkbox);

      const checkLabel = document.createElement('label');
      checkLabel.for = `task ${counter}`;
      checkLabel.textContent = check;
      toDoCheck.appendChild(checkLabel);

      newCard.appendChild(toDoCheck);
      counter++;
    }

    const description = document.createElement('p');
    description.textContent = card.desc;
    description.classList.add('toDoDescription');
    newCard.appendChild(description);

    container.appendChild(newCard);
  }
}
export { renderToDoList, renderCards };

{ /* <div class="card">
//         <h5>Default ToDo</h5>

//         <div class="check">
//           <input type="checkbox" id="task1" name="task" value="task1">
//           <label for="task1">Task1</label>
//         </div>

//         <div class="check">
//           <input type="checkbox" id="task2" name="task" value="task2">
//           <label for="task2">Task2</label>
//         </div>
//         <div class="check">
//           <input type="checkbox" id="task3" name="task" value="task3">
//           <label for="task3">Task3</label>
//         </div>
//         <div class="check">
//           <input type="checkbox" id="task4" name="task" value="task4">
//           <label for="task4">Task4</label>
//         </div>
//         <div class="check">
//           <input type="checkbox" id="task5" name="task" value="task5">
//           <label for="task5">Task5</label>
//         </div>
//         <p>This is the default task</p>
//         <p>Due 7/31/2023</p>
//         <button type="button" id="defaultReset">Reset Task</button>
//       </div> */ }
