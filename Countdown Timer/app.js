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

//  Grab the necessary Elements from HTML
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
const giveawayImage = document.querySelector('.giveaway-img');


//  Set up temporary dates
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let temDay = tempDate.getDate();
let tempHour = tempDate.getHours();
let tempMin = tempDate.getMinutes();

//  Set up the date when the giveaway will end
//  Format of giveaway date => year || month || date || hours || minutes || seconds
const endDate = new Date(tempYear, tempMonth, temDay, tempHour, tempMin + 5, 00);

// specifics
const year = endDate.getFullYear();
const month = months[endDate.getMonth()];
const day = weekdays[endDate.getDay()];
const date = endDate.getDate();
const hour = endDate.getHours();
const minutes = endDate.getMinutes();

let x = hour > 12 ? 'pm':'am';

giveaway.innerHTML = `giveaway will end on ${day} ${month} ${date} ${hour}:${minutes}${x}`

//  Get end date in milliseconds which will help us to calculate remaining time
const endTime = endDate.getTime();

//  Function to calculate Remaining Time
let getRemainingTime = () => {
  //  Get current time in ms then deduct from end time to get remaining time in ms
  const currentTime = new Date().getTime();
  let rTime = endTime - currentTime;

  //  Milliseconds conversion chart
  /*
    1s = 1000ms
    1min = 60s
    1hour = 60min
    1day = 24hrs
  */
  
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60* 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

  //  Get actual days, hours, minutes and seconds remaining in milliseconds
  const rDays = Math.floor(rTime / oneDay);
  const rHours = Math.floor((rTime % oneDay) / oneHour);
  const rMins = Math.floor((rTime % oneHour) / oneMinute);
  const rSecs = Math.floor((rTime % oneMinute) / oneSecond);

  const values = [rDays, rHours, rMins, rSecs];


  //  Function to format remaining time where time is less than 10
  function format(item)
  {
    if (item < 10)
    {
      return (`0${item}`)
    }
    else
    {
      return (item);
    }
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  //  If time expires then ...
  if (rTime < 0)
  {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Sorry this giveaway has expired!</h4>`;
    giveawayImage.classList.add('exp-img');
  }
}

//  Countdown interval
let countDown = setInterval(getRemainingTime, 1000); 
getRemainingTime();
