const textContainers = document.querySelectorAll('.text-container');
const imageCovers = document.querySelectorAll('.image-cover');
const hoverImagesSection = document.getElementById('hover-images-section')

const video = document.getElementById("my-video");
video.currentTime = 5;

const words = document.querySelectorAll('.word');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target);
        })
    },
    {
        threshold: 1
    }
)

words.forEach(word => {
    observer.observe(word);
})

hoverImagesSection.addEventListener('click', event => {
    if (event.target.className != 'image-cover') return;
    console.log('succes')
    for (const imageCover of imageCovers) {
        if (imageCover === event.target) {
            imageCover.classList.add('width-0')
        } else {
            imageCover.classList.remove('width-0')
        }
    }
})