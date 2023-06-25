import toDoManager from "./todoManager";
import createModal from './modalForm';

function renderMainPage() {
  const container = document.querySelector('.content');
  createModal();

  const title = document.createElement('h1');
  title.textContent = 'ToDo Lists';
  title.classList.add('title');
  container.appendChild(title);

  const mainContent = document.createElement('div');
  mainContent.classList.add('main-body');
  container.appendChild(mainContent);

  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  mainContent.appendChild(sidebar);

  const sidebarTitle = document.createElement('h3');
  sidebarTitle.textContent = 'Projects';
  sidebar.appendChild(sidebarTitle);

  const projectList = document.createElement('ul');
  projectList.classList.add('projectList');
  sidebar.appendChild(projectList);

  const mainSection = document.createElement('div');
  mainSection.classList.add('card-container');
  mainContent.appendChild(mainSection);

  const button = document.createElement('button');
  button.textContent = 'Create ToDo';
  button.addEventListener('click', () => {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
  });
  mainContent.appendChild(button);
}

export {renderMainPage};

// <div class="sidebar">
//     <h3>Projects</h3>
//     <ul>
//     <li><a href="#">Default Project</a></li>
//     <li><a href="#"">All</a></li>
//     </ul>
//   </div>
//   <div class="content">
//     <h1>ToDo List</h1>
    
//     <div class="card-container">
//       
//     </div>
//   </div>