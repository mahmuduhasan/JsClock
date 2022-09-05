const hourSelector = document.querySelector(".hours-number");
const minuteSelector = document.querySelector(".minutes-number");
const secondSelector = document.querySelector(".seconds-number");
const ampm = document.querySelector(".ampm-change");

const changeBackground = (url) => {
  document.body.style.backgroundImage = url;
};

const updateTime = () => {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();

  if (hour >= 0 && hour <= 4) {
    changeBackground(
      "url('https://images.unsplash.com/photo-1548151002-ec7a5db55aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')"
    );
  } else if (hour >= 5 && hour <= 8) {
    changeBackground(
      "url('https://images.unsplash.com/photo-1526462407359-b0456df557b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')"
    );
  } else if (hour >= 9 && hour <= 12) {
    changeBackground(
      "url('https://images.unsplash.com/photo-1473252812967-d565c3607e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
    );
  } else if (hour >= 13 && hour <= 16) {
    changeBackground(
      "url('https://images.unsplash.com/photo-1616559651213-a96a67c5620e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')"
    );
  } else if (hour >= 17 && hour <= 19) {
    changeBackground(
      "url('https://images.unsplash.com/photo-1488682371245-58436e0dc611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')"
    );
  }

  if (hour > 12) {
    hour = hour - 12;
    ampm.textContent = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  hourSelector.textContent = hour;
  minuteSelector.textContent = minute;
  secondSelector.textContent = second;

  setTimeout(() => {
    updateTime();
  }, 1000);
};

updateTime();
