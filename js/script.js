document.querySelectorAll('.smooth-scroll').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  

//tablet mobile-menu

  let hamburger = document.querySelector('.hamburger');
  let hamburgerLines = document.querySelectorAll('.menu_line');
  let mobileMenuPanel = document.querySelector('.mobile-menu');
  let mobileMenuLinks = document.querySelectorAll ('.menu_link');
  
  hamburger.addEventListener('click', () => {
      hamburgerLines.forEach((el, index) => {
          el.classList.toggle(`active-line-${index + 1}`)
      })
      
      mobileMenuPanel.classList.toggle('active');
  })
  
  mobileMenuLinks.forEach(el => {
      el.addEventListener('click', () => {
          hamburgerLines.forEach((el, index) => {
              el.classList.remove(`active-line-${index + 1}`)
          })
  
          mobileMenuPanel.classList.remove('active')
      })
  }) 




// слайдер карусель

const carousel = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slide-dot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentSlide = 0;

/* function moveToSlide(n) {
  
  carousel.style.transform = `translateX(-${n * 33.3}%)`;
  currentSlide = n;
  updateDots();
} */

function moveToSlide(n) {
  let slideWidth = 33.3;

  if (window.innerWidth <= 768) { 
    slideWidth = 100;
  }
  carousel.style.transform = `translateX(-${n * slideWidth}%)`;
  currentSlide = n;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  moveToSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  moveToSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    moveToSlide(index);
  });
});

moveToSlide(currentSlide);


// books

const radioInp = document.querySelectorAll('.radio-container input[type="radio"]');
const bookCards = document.querySelectorAll('.book-cards .card');


radioInp.forEach((radio) => {
  radio.addEventListener('change', () => {
      const season = radio.value
      bookCards.forEach((book) => {
          if (book.classList.contains(season)) {
              book.style.display = 'block'
          } else {
              book.style.display = 'none'
          }
      })
  })
})


/* const radioInp = document.querySelectorAll('.radio-container input[type="radio"]');
const bookCards = document.querySelectorAll('.book-cards .card');

radioInp.forEach((radio) => {
  radio.addEventListener('change', () => {
    const season = radio.value;
    bookCards.forEach((book) => {
      if (book.classList.contains(season)) {
        book.classList.add('active');
      } else {
        book.classList.remove('active');
      }
    });
  });
}); */


//