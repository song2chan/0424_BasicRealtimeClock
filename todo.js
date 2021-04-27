const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos() {
  for (var i = 0; i < toDos.length; i++) {
    toDos[i].id
  }
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
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
  saveToDos();
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


// 인풋을 받으면 로컬 스토라지에 배열로 저장, toDos가 비어있지않다면 ul에 하나씩 적어주고
// li항목마다 X버튼이 있는데 누르면 로컬 스토라지에서 삭제
