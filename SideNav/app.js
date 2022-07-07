const toggleSidebar = document.querySelector('.sidebar-toggle');

const closeSidebar = document.querySelector('.close-btn');

const sidebar = document.querySelector('.sidebar');

toggleSidebar.addEventListener('click',function(){
    if(sidebar.classList.contains('show-sidebar'))
    {
        sidebar.classList.remove('show-sidebar');
    }
    else
    {
        sidebar.classList.add('show-sidebar');
    }

})

closeSidebar.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar');
})