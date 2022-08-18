const btns = document.querySelectorAll('.tab-btn');
const  about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click',(e) => {
    const id = e.target.dataset.id;
    if(id)
    {
        //  Remove active from all buttons
        btns.forEach(btn => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active');

        //  Remove active class from all the articles
        articles.forEach(article => {
            article.classList.remove('active');
        })
        const article = document.getElementById(id);
        article.classList.add('active');
    }

})