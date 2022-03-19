// IFFE -> Immediately Invonlk Function Expression
//Phan biet innerText, innerHTML, textContent
// - innerHTML: lay element va content trong div cha
// - innerText: lay het content trong div cha
// - textContent: lay contentgan nhat trong div cha

function createTodoElement(todo) {
  // c1
  // // Tạo đối tượng 'li' trong document.createElement --> research
  // const liElement = document.createElement("li");
  // // textContent, innerText, innerHTML
  // // Cap nhat content cho liElement
  // liElement.textContent = todo.title;
  // return liElement;

  // c2
  const todoTemplate = document.getElementById('todoTemplate')
  if(!todoTemplate) return

  // todoElement -> tuc la liElement -> EventTarget
  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true)

  const titleContent = document.querySelector('.todo__title')
  if(titleContent) titleContent.textContent = todo.title;
  
  const removeButton = todoElement.querySelector('button.remove');
  removeButton.addEventListener('click', () => {
    todoElement.remove()
  })

  return todoElement;
}

const dataTodoList = [
  {
    id: 1,
    title: "Learn Javascript",
  },
  {
    id: 2,
    title: "Learn ReactJS",
  },
  {
    id: 3,
    title: "Learn NodeJS",
  },
];
function renderTodoList(dynamicData, elementId) {
  if (!Array.isArray(dynamicData) || dynamicData.length === 0) return;
  // check !ulElement có tồn tại ko -> return
  const ulElement = document.getElementById(elementId);
  if (!ulElement) return;
  // loop dataTodoList -> for in or for of in javascript
  for (const todo of dynamicData) {
    // Them liElement vao node cha ulElement
    ulElement.appendChild(createTodoElement(todo));
  }
}

(() => {
  renderTodoList(dataTodoList, "todo-list");
})();
