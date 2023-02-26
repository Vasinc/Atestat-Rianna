const images = document.querySelectorAll('img')

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("opacity-1", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target);
        })
    },
    {
        threshold: .75
    }
)

images.forEach(image => {
    observer.observe(image);
})