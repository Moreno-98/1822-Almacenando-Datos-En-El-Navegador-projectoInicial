import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');
const btn2 = document.querySelector('[data-form-btn2]');

//creando funcion//
const addTask = (evento) =>{
  const list = document.querySelector('[data-list]');
  const list2 = document.querySelector('[data-list_2]');
  const task = createTask(evento);
  const task2 = createTask(evento);
  const input = document.querySelector('[data-form-input]');
  input.value = '';

// Agregar nuevos elementos a un documento existente o para mover un elemento de la página//  
  list.appendChild(task); 
  list2.appendChild(task2); 
}

//creando funcion//
const createTask = (evento) => {
  evento.preventDefault();
  //obtener informacion//
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
  const input2 = document.querySelector('[data-form-input2]');
  const calendar2 = document.querySelector('[data-form-date2]');
  const date = calendar.value;
  const date2 = calendar2.value;
  //cambiando formato//
  const dateformat = moment(date).format('DD/MM/YYYY');
  const dateformat2 = moment(date2).format('DD/MM/YYYY');
  const value = input.value;
  const value2 = input2.value;
  const task = document.createElement('li');
  task.classList.add('card');
  //input.value = '';//
  //backticks
  const taskContent = document.createElement('div');

  //almacenamiento en el navegador local y sesionstorage
  console.log(value, dateformat);
  const taskobj = {
    value,
    dateformat
  }
  localStorage.setItem('task', JSON.stringify(taskobj))
  //

  //creando la tarjeta//
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');

  //if
  if(value != ""){
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
  }

  if(value2 != ""){
    titleTask.innerText = value2;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    
    const dateElement2 = document.createElement('span')
    dateElement2.innerHTML = dateformat2;
  
    task.appendChild(taskContent);
    task.appendChild(dateElement2);
    task.appendChild(deleteIcon());
    return task;
    }
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
btn2.addEventListener('click', addTask);


