// clock

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
