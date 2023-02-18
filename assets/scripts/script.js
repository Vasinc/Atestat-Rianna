// variables
const headerUl = document.getElementById('header-ul');
const burgerMenu = document.querySelector('.burger-menu');

//functions
function handleHeaderUl () {
    headerUl.classList.toggle('display-flex');
    burgerMenu.classList.toggle('burger-change');
    if (headerUl.classList.contains('display-flex')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }
}

//event listeners
addEventListener('resize', () => {
    if (innerWidth < 800) return;
    if (document.body.style.overflow == 'hidden'){
        document.body.style.overflow = 'visible';
    }
})

burgerMenu.addEventListener('click', handleHeaderUl);

headerUl.addEventListener('click', event => {
    if(event.target.tagName == 'UL') handleHeaderUl();
})
