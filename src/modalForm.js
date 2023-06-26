import toDoManager from "./todoManager";

function createModal() {
  const container = document.querySelector('.content');
  const modal = document.createElement('dialog');
  modal.classList.add('popup');

  const toDoForm = document.createElement('form');
  toDoForm.method = 'dialog';
  modal.appendChild(toDoForm);

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('titleDiv');
  toDoForm.appendChild(titleDiv);

  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title:';
  titleLabel.htmlFor = 'toDoTitle';
  titleDiv.appendChild(titleLabel);

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'toDoTitle';
  titleInput.name = 'toDoTitle';
  titleDiv.appendChild(titleInput);

  const itemsDiv = document.createElement('div');
  itemsDiv.classList.add('itemsDiv');
  toDoForm.appendChild(itemsDiv);

  const itemsLabel = document.createElement('label');
  itemsLabel.textContent = 'Items';
  itemsLabel.htmlFor = 'toDoItems';
  itemsDiv.appendChild(itemsLabel);

  const toDoInputs = document.createElement('textarea');
  toDoInputs.placeholder = 'Enter a comma seperated list of ToDos.';
  toDoInputs.id = 'toDoInputs';
  toDoInputs.name = 'toDoInputs';
  itemsDiv.appendChild(toDoInputs);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('descriptionDiv');
  toDoForm.appendChild(descriptionDiv);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description:';
  descriptionLabel.htmlFor = 'toDoDescription';
  descriptionDiv.appendChild(descriptionLabel);

  const descriptionInput = document.createElement('input');
  descriptionInput.type = 'text';
  descriptionInput.id = 'toDoDescription';
  descriptionInput.name = 'toDoDescription';
  descriptionDiv.appendChild(descriptionInput);

  const button = document.createElement('button');
  button.textContent = 'Submit';
  button.addEventListener('click', () => {
    const itemList = toDoInputs.value.split(',');
    toDoManager.addToDo(titleInput.value, itemList, descriptionInput.value);
    titleInput.value = '';
    toDoInputs.value = '';
    descriptionInput.value = '';
    modal.close();
  });
  modal.appendChild(button);

  container.appendChild(modal);
}

export default createModal;
