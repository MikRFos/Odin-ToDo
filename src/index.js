import './style.css';
import { renderMainPage } from './mainPage';
import toDoManager from './todoManager';

renderMainPage();

toDoManager.addToDo(
  'Example',
  ['Task 1', 'Task 2', 'Task3'],
  'This is an example todo list',
  '01-01-91',
);

const contentPane = document.querySelector('.content');
const resetButton = document.getElementById('defaultReset');
const checkboxes = document.querySelectorAll('input');

// console.log(contentPane);

// const addToDo = document.createElement('button');
// addToDo.textContent = 'Create Todo List';
// contentPane.appendChild(addToDo);
// resetButton.addEventListener('click', () => {
//   checkboxes.forEach((checkbox) => {
//     checkbox.checked = false;
//   });
// });
