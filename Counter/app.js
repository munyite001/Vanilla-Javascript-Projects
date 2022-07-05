//  Set initial count
let count = 0;

//  Select the value
const value = document.querySelector('#value')

//  Select all buttons at once

const btns = document.querySelectorAll('.btn');

//  The btns variable above will contain a node list of all the buttons with class btn


//  So we'll use forEach method to loop through the nodelist and add an event listener for each button
btns.forEach(function(btn)
{
    //  Adding event listener and determining which button is being clicked
    btn.addEventListener('click',function(event)
    {
        const btn_classes =  event.currentTarget.classList;
        if(btn_classes.contains('decrease'))
        {
            count -= 1;
        }
        else if(btn_classes.contains('increase'))
        {
            count += 1;
        }
        else if(btn_classes.contains('reset'))
        {
            count = 0;
        }

        //  Setting the color of the value
        if(count > 0)
        {
            value.style.color = 'green';
        }
        
        if(count < 0)
        {
            value.style.color = 'red';
        }

        if(count == 0)
        {
            value.style.color = '#222';
        }

        value.textContent = count;
    })
});