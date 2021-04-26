const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.InnerHTML = "X";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    // ul에 하나씩 넣어줌.
  }
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
  loadToDos();
}

init();


// 인풋을 받으면 로컬 스토라지에 배열로 저장, toDos가 비어있지않다면 ul에 하나씩 적어주고
// li항목마다 X버튼이 있는데 누르면 로컬 스토라지에서 삭제
