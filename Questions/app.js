// traversing the dom
/* const btns = document.querySelectorAll('.question-btn');


btns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        let question = e.currentTarget.parentElement.parentElement;
        if(question.classList.contains('show-text'))
        {
            question.classList.remove('show-text');
        }
        else 
        {
            //  Close other open accordions
            btns.forEach(btn => {
                btn.parentElement.parentElement.classList.remove('show-text');
            })
            question.classList.add('show-text');
        }
    })
}) */

//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach( question => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', ()=> {
        questions.forEach(item => {
            if (item !== question)
            {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})