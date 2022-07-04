//Simple Js Setup

//  We have an array of colors, and we want to change the background color of the body to any color
//   in the colors array whenever the button is clicked

const colors = ["green","red","rgba(133, 122, 200)","#f15025"];

const btn = document.getElementById('btn'); //We create a variable btn and assign it the button element with id btn from our index.html file

const color = document.querySelector('.color'); //We create a variable and assign it to the span element with the class of .color from index.html


//Adding an event listener to our button, to change the background color of the body, whenever the button is clicked

btn.addEventListener('click',() => {
    //  Goal is to get a random number between 0 and 3 since our colors array has elements upto index 3
    const randomNumber = getRandom();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

//Function to generate a random number which will act as the index position for the colors array
let getRandom= () =>
{
    let result = Math.random()*colors.length
    return Math.floor(result)
}