const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

var toDos = [];

function saveToDos(ary) {
  localStorage.setItem(TODOS_LS, JSON.stringify(ary));
}

function deleteToDo(delBtn) {
  const targetIdx = delBtn.className *= 1;
  var newToDos = [];

  localStorage.removeItem(TODOS_LS);

  let idx = "1";

  toDos.forEach(function(target) {
    if (toDos[targetIdx - 1] !== target) {
      newToDos.push(target);
    }
  })

  if (newToDos.length > 0) {
    saveToDos(newToDos);
  }

  delBtn.parentNode.remove();
  toDos = [];
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.className = newId;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", function() {
    deleteToDo(delBtn);
  });

  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos(toDos);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    })
  }
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
  loadToDos();
}

init();
