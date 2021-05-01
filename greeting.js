const text = document.querySelector(".test");
const input = document.querySelector(".input");
const todo = document.querySelector(".toDoInput");
const renameBtn = document.querySelector(".rename");
const todoList = document.querySelector(".js.toDoList");

const displayNone = "displayNone";

const username = localStorage.getItem('username');

input.addEventListener('input', updateUsername);
renameBtn.addEventListener('click', rename);

/* localstorage에서 username을 가져와서 만약에 undefined가 아니라면
classList.toggle() -> 클래스 리스트에 해당하는 className이 있으면
지우고 없으면 추가하는 함수를 이용해서 input(이름을 입력하는 부분)을
display: none으로 해준다. 그리고 text content(hello등 인삿말)에 username을
추가! 만약에 저장된 username이 없다면? 인삿말을 toggle한다.
*/
function init() {
  if (username !== null) {
    input.classList.toggle(displayNone);
    text.textContent += ` ${username}`;
  } else {
    renameBtn.classList.toggle(displayNone);
    text.classList.toggle(displayNone);
    todo.classList.toggle(displayNone);
  }
}

var testing;

function updateUsername(e) {
  testing = e.target.value;
}

function inputEnter() {
  if (window.event.keyCode === 13 && testing !== null) {
    localStorage.setItem('username', testing);
  }
}

function rename() {
  if (username !== null) {
    text.textContent = "";
    input.classList.toggle(displayNone);
    localStorage.removeItem('username');
    init();
  }
}

init();
