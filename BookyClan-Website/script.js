// script.js
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

function openNav() {
    document.getElementById("side-nav").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-nav").style.width = "0";
}

let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;

const updateSlidePosition = (carouselId, slideIndex) => {
    const carouselInner = document.querySelector(`#${carouselId} .carousel-inner`);
    carouselInner.style.transform = `translateX(${-slideIndex * 100}%)`;
};

const nextSlide = (carouselNum) => {
    switch(carouselNum) {
        case 1:
            slideIndex1 = (slideIndex1 + 1) % 2;
            updateSlidePosition('carousel1', slideIndex1);
            break;
        case 2:
            slideIndex2 = (slideIndex2 + 1) % 3;
            updateSlidePosition('carousel2', slideIndex2);
            break;
        case 3:
            slideIndex3 = (slideIndex3 + 1) % 2;
            updateSlidePosition('carousel3', slideIndex3);
            break;
        case 4:
            slideIndex4 = (slideIndex4 + 1) % 2;
            updateSlidePosition('carousel4', slideIndex4);
            break;
    }
};

const prevSlide = (carouselNum) => {
    switch(carouselNum) {
        case 1:
            slideIndex1 = (slideIndex1 - 1 + 3) % 2;
            updateSlidePosition('carousel1', slideIndex1);
            break;
        case 2:
            slideIndex2 = (slideIndex2 - 1 + 3) % 3;
            updateSlidePosition('carousel2', slideIndex2);
            break;
        case 3:
            slideIndex3 = (slideIndex3 - 1 + 3) % 3;
            updateSlidePosition('carousel3', slideIndex3);
            break;
        case 4:
            slideIndex4 = (slideIndex4 - 1 + 3) % 3;
            updateSlidePosition('carousel4', slideIndex4);
            break;
    }
};

// Auto-slide functionality
// const autoSlide = () => {
    // nextSlide(1);
    // nextSlide(2);
    // nextSlide(3);
    // nextSlide(4);
// };


// Start auto-slide every 3 seconds code: setInterval(autoSlide, 3000);

// Initialize the first slides
updateSlidePosition('carousel1', slideIndex1);
updateSlidePosition('carousel2', slideIndex2);
updateSlidePosition('carousel3', slideIndex3);
updateSlidePosition('carousel4', slideIndex4);

window.addEventListener('scroll', function() {
    const gridContainer = document.querySelector('.gridContainer');
    if (window.scrollY > 50) {
        gridContainer.classList.add('shrink');
    } else {
        gridContainer.classList.remove('shrink');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.footer-section h3');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.parentElement.classList.toggle('active');
        })
    })
});