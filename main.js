//variables
const todoInput = document.querySelector('#todo-input');
const addBtn = document.querySelector('#todo-btn');
const todoList = document.querySelector("ul");

let todoArray = new Set();
let user;

const addTodo = () =>{
  if (todoArray.size != 5){
    if (todoInput.value != '') {
      todoInput.parentElement.classList.remove('error');
      todoArray.add(todoInput.value);
    }
    if (user) {
      let db = [...todoArray];
      let _db = (JSON.stringify(db));
      LocalStorage.setItem(user, _db);
      setTodo(todoArray);
    } else {
      setTodo(todoArray);
    }
  } else {
    todoInput.parentElement.classList.add('error');
    todoInput.value = ''
  } 
  alert('you have five things to do')
}
//event handlers
addBtn.addEventListener("click", addTodo);

const setTodo = (arr) => {
  let htmlArr = "";

  for (el of arr) {
    let html = 
    `<li id=${el}>
        <div class="todo">
        <p>${el}</p>
   <input type="text" class="hide"/>
   </div>

   <div class="btns">
       <button>edit</button>
       <button>save</button>
       <button>Delete</button>
   </div>
   </li>`;
    htmlArr += html;
  }
  todolist.innerHTML = htmlArr;
};
