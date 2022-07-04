//Hex setup

//  We have an array of all hex values, and we want to change the background color of the body to a random color
//   whenever the button is clicked

const hex = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];

const btn = document.getElementById('btn'); //We create a variable btn and assign it the button element with id btn from our index.html file

const color = document.querySelector('.color'); //We create a variable and assign it to the span element with the class of .color from index.html


//Adding an event listener to our button, to change the background color of the body, whenever the button is clicked

btn.addEventListener('click',() => {

const newhex = getrandomhex();

document.body.style.backgroundColor = newhex;

color.textContent = newhex;

})

//Function that will generate a random hex value from our hex array of hex values
let getrandomhex = () => 
{
    //  A hex value is 6 symbols long, so we initialize the hexvalue variable to '#'
    //  then we create a loop that will run 6 times, and in each iteration, get a random value from the hex
    //  array and append it to our hex value variable
    // Then we'll return the hex variable
    
    let hexvalue = '#';
    
    for(let i = 0; i < 6; i++)
    {
        let random = Math.floor(Math.random() * hex.length);
        hexvalue += String(hex[random]);
    }

    return hexvalue;
}


console.log(getrandomhex())