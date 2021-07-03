const curDate = document.getElementById("date");
const weathercon = document.getElementById("weathercon");

const tempStatus = "clouds";

const getCurrentDay = () => {
  let currentTime = new Date();
  let weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return weekDay[currentTime.getDay()];
};

const getCurrentTime = () => {
  let monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  let now = new Date();
  let month = now.getMonth();
  let date = now.getDate();

  let hours = now.getHours();
  let mins = now.getMinutes();
  let period = "AM";

  if (hours > 11) {
    period = "PM";
    if (hours > 12) hours -= 12;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  return `${monthNames[month]} ${date} | ${hours}:${mins}${period}`;
};

curDate.innerHTML = `${getCurrentDay()} | ${getCurrentTime()}`;
