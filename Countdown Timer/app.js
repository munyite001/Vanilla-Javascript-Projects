const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


//  Temporary Dates for the countdown timer
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

let futureDate = new Date(tempYear,tempMonth+1,tempDay + 10, 11, 30);

//  Getting the actual future day
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const secs = futureDate.getSeconds();


giveaway.textContent = `Give away ends on ${day}, ${date} ${month} ${year}, ${hours}:${mins} am`;

//  Future time in milliseconds
const futureTime = futureDate.getTime();



function getRemainingTime()
{
    const today = new Date().getTime();
    const remainingTime = futureTime - today;
    //  1 sec = 1000ms
    //  1 min = 60 sec
    //  1 hour = 60min
    //  1 day = 24 hours

    //  values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;

    let days = Math.floor(remainingTime/oneDay);
    let hours = Math.floor((remainingTime % oneDay) / oneHour);
    let mins = Math.floor((remainingTime % oneHour) / oneMin);
    let secs = Math.floor((remainingTime % oneMin) / 1000);

    const values = [days, hours, mins, secs];

    function format(item)
    {
      if (item < 10)
      {
        return `0${item}`
      }
      return item;
    }

    //  Set the values
    items.forEach((item,index) => {
      item.innerHTML = format(values[index]);
    })

    console.log(remainingTime);

    if(remainingTime < 0)
    {
      clearInterval(countDown);

      deadline.innerHTML = "<h4 class='expired'>Sorry, the giveaway has ended !</h4>"
    }
}

//  Countdown
let countDown = setInterval(getRemainingTime,1000);

getRemainingTime();
