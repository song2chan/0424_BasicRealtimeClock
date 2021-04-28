const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title");

var date;
var hours;
var minutes;
var seconds;

function lt10Moments(self) {
  return self < 10 ? `0${self}` : self;
}

function getTime() {
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  clockTitle.innerText = `${lt10Moments(hours)}:${lt10Moments(minutes)}:${lt10Moments(seconds)}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

// 날짜가 넘어가면 toDoList가 초기화되는 기능
// 그러려면 마지막 toDoList를 갱신할때마다 date를 기록하고..
// date가 바뀌면 toDoList를 소거하는 방식?
// username rename 기능
// 24시/12시 표기전환 기능

/* calculator with obejct

const calculator=
{
  plus: function(a, b)
  {
    return a + b;
  },
  minus: function(a, b)
  {
    return a - b;
  },
  multi: function(a, b)
  {
    return a * b;
  },
  division: function(a, b)
  {
    return a / b;
  },
  power: function(a, b)
  {
    return a ^ b;
  }
} */
