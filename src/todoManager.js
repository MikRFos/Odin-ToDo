import ToDo from './todo';
import { renderToDoList, renderCards } from './domStuff';

const toDoManager = (() => {
  const toDos = [];
  const addToDo = (title, items, desc, due) => {
    const newTodo = ToDo(title, items, desc, due);
    toDos.push(newTodo);
    renderToDoList(toDos);
    renderCards(toDos);
  };

  const removeToDo = (todo) => console.log('TODO');

  function getTodos() {
    return this.toDos;
  }

  function updateToDo(toDo) {
    const toDoToUpdate = toDos.find(item => item.title === toDo.title);
    console.log(toDoToUpdate);
  }

  return {
    addToDo,
    removeToDo,
    getTodos,
    updateToDo,
  };
})();

export default toDoManager;