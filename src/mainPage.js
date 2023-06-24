import toDoManager from "./todoManager";

function renderMainPage() {
  const container = document.querySelector('.container');

  const title = document.createElement('h1');
  title.textContent = 'ToDo Lists';
  title.classList.add('title');
  container.appendChild(title);

  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  container.appendChild(sidebar);

  const sidebarTitle = document.createElement('h3');
  sidebarTitle.textContent = 'Projects';
  sidebar.appendChild(sidebarTitle);

  const projectList = document.createElement('ul');
  projectList.classList.add('projectList');
  sidebar.appendChild(projectList);

  const mainSection = document.createElement('div');
  mainSection.classList.add('content');
  container.appendChild(mainSection);
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