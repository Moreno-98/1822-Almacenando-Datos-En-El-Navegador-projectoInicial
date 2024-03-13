import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

//creando funcion//
const addTask = (evento) =>{
  const list = document.querySelector('[data-list]');
  const task = createTask(evento);
  
// Agregar nuevos elementos a un documento existente o para mover un elemento de la página//  
  list.appendChild(task);
}


//creando funcion//
const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
  const date = calendar.value;
  //cambiando formato//
  const dateformat = moment(date).format('DD/MM/YYYY');
  const value = input.value;
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';
  //backticks

  const taskContent = document.createElement('div');

  //almacenamiento en el navegador local y sesesionstorage
  console.log(value, dateformat);
  const taskobj = {
    value,
    dateformat
  }
  localStorage.setItem('task', JSON.stringify(taskobj))

  //creando la tarjeta//
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;
  
  const dateElement = document.createElement('span')
  dateElement.innerHTML = dateformat;

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());
  return task;
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
