// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// scrollY is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();



//  Get the nav element
const navbar = document.getElementById('nav');



// ********** close links ************
const toggleBtn = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', ()=> {
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight == 0)
    {
        linkContainer.style.height = `${linksHeight}px`
    }
    else {
        linkContainer.style.height = '0px';
    }
})
// ********** fixed navbar ************
window.addEventListener('scroll',() => {
    //  We can use the scrollY property on the window to check, if the page
    //  Scrolls past our navbar's height, to add the fixed navbar class on our navbar

    const navHeight = navbar.getBoundingClientRect().height;
    const scroll = window.scrollY;
    if(scroll >= navHeight)
    {
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }

    //  Get the back to top link 
    const topBtn = document.querySelector('.top-link');
    
    //  If the scroll is bigger than 500px, we will display the back to top btn
    if (scroll >=  500)
    {
        topBtn.classList.add('show-link');
    }
    else
    {
        topBtn.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        //Navigate to a specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        
        //  Select the element we want to scroll to
        const element= document.getElementById(id);


        //calculate the height
        const navHeight =  navbar.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height;
        
        //Check wether the navbar has the fixed class nav
        const fixedNav = navbar.classList.contains('fixed-nav');

        //  Get the position from the top of that specific element
        let position = element.offsetTop-navHeight;

        //  Calculate the exact position we would need to scroll from top to land on
        //  the selected element exactly
        if(!fixedNav)
        {
            position -= navHeight;
        }
        if(navHeight > 82)
        {
            position += containerHeight;
        }
        window.scrollTo({
            left: 0,
            top:position,
        })
        //  Close navbar on smaller screen
        linkContainer.style.height = 0;
    })
})
