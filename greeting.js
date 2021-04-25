const text = document.querySelector(".test");
const input = document.querySelector(".input");

const displayNone = "displayNone";

function init() {
  const username = window.localStorage.getItem('username');

  if (username !== null) {
    input.classList.toggle(displayNone);
    text.textContent += `${username}`;
  } else {
    text.classList.toggle(displayNone);
  }
}

input.addEventListener('input', updateUsername);
var testing = null;

function updateUsername(e) {
  testing = e.target.value;
}

function inputEnter() {
  if (window.event.keyCode === 13 && testing !== null) {
    window.localStorage.setItem('username', testing);
  }
}

init();

// 내가 하고싶은거 - 유저네임이 로컬저장소에 저장되어있으면 form.input 대신 h2 환영합니다 유저네임씨!
// 저장되어 있지않으면 유저네임 입력칸. 입력되면 로컬저장소에 저장!
