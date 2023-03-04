// variables

const cardsSection = document.querySelector('.cards-section');
const cards = document.querySelectorAll('.card');
const backdrop = document.getElementById('backdrop');
const header = document.getElementById('header-nav');
const pages = document.querySelectorAll('.pageContent');
const contentSection = document.getElementById('content-section');

let lastScrollPosition = 0;
let indexOfCard;

// functions

function togglePages(idxOfPage) {
    contentSection.classList.toggle('display-block');
    pages[idxOfPage].classList.toggle('display-block');
    setTimeout(() => {
        pages[idxOfPage].classList.toggle('scale-1');
    }, 200);
    setTimeout(() => {
        pages[idxOfPage].querySelector('.text-container').classList.toggle('opacity-1')
    }, 600);
}

function toggleBackdrop () {
    document.body.style.overflow = 'visible'
    backdrop.classList.remove('display-block');
    window.scrollTo(0, lastScrollPosition);
}

// event listeners

cards.forEach(card => {
    card.addEventListener('click', () => {
        indexOfCard = Array.prototype.indexOf.call(cards, card)
        backdrop.classList.add('display-block')
        document.body.style.overflow = 'hidden'
        lastScrollPosition = window.scrollY;
        console.log(lastScrollPosition);
        header.scrollIntoView();
        togglePages(indexOfCard);
    })
})

pages.forEach(page => {
    page.addEventListener('click', event => {
        if ( event.target.className == 'exitPageButton') {
            togglePages(indexOfCard)
            toggleBackdrop();
        }
    })
})

backdrop.addEventListener('click', toggleBackdrop)
