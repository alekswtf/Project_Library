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
      });
      
      mobileMenuPanel.classList.toggle('active');
  });
  
  mobileMenuLinks.forEach(el => {
      el.addEventListener('click', () => {
          hamburgerLines.forEach((el, index) => {
              el.classList.remove(`active-line-${index + 1}`)
          });
  
          mobileMenuPanel.classList.remove('active');
      });
  });




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
  if (currentSlide > 0) {
    currentSlide--;
    moveToSlide(currentSlide);
  }
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    moveToSlide(currentSlide);
  }
}
/* function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  moveToSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  moveToSlide(currentSlide);
} */

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    moveToSlide(index);
  });
});

moveToSlide(currentSlide);


// books


const radioBtns = document.querySelectorAll('input[name="seasone"]');
const bookCards = document.querySelectorAll('.book-cards .card');

bookCards.forEach((card) => {
  if (!card.classList.contains('active')) {
    card.classList.add('hidden');
  }
});

radioBtns.forEach((btn) => {
  btn.addEventListener('change', () => {
    const selectedSeason = btn.value;

    bookCards.forEach((card) => {
      if (!card.classList.contains(selectedSeason)) {
        card.classList.add('hidden');
      } else {
        card.classList.remove('hidden');
      }
    });

    setTimeout(() => {
      bookCards.forEach((card) => {
        if (card.classList.contains(selectedSeason)) {
          card.style.opacity = '1';
        } else {
          card.style.opacity = '0';
        }
      });
    },200);
  });
});


 

//профиль дроп меню
const dropMenu = document.querySelector('.profile-dropMenu');
const profileIcon = document.getElementById('profileIcon');

profileIcon.addEventListener('click', function(event) {
  dropMenu.classList.toggle('open');
  event.stopPropagation(); 
});


document.addEventListener('click', function(event) {
  dropMenu.classList.remove('open');
});




const profileMenuNoAuth = document.querySelector('.profile-menuNoAuth');
const profileMenuAuth = document.querySelector('.profile-menuAuth');
let loginModal = document.getElementById('loginModal');
let registerModal = document.getElementById('registerModal');
let loginForm = document.getElementById('loginForm');
let registrationForm = document.getElementById('registrationForm');
const modalOverlay = document.getElementById('modalOverlay');
let myProfile = document.querySelector('.myProfile-card');


// Открывает модальное окно входа и overlay слой
function openLoginModal() {
  loginModal.style.display = 'block';
  modalOverlay.style.display = 'block';
}
function closeLoginModal() {
  loginModal.style.display = 'none';
  modalOverlay.style.display = 'none';
}

// Открывает модальное окно регистрации и overlay слой
function openRegisterModal() {
  registerModal.style.display = 'block';
  modalOverlay.style.display = 'block';
}
function closeRegisterModal() {
  registerModal.style.display = 'none';
  modalOverlay.style.display = 'none';
}

//показываем карту профиля
function openProfile() {
  myProfile.style.display = 'flex';
  modalOverlay.style.display = 'block';
}
function closeProfile() {
  myProfile.style.display = 'none';
  modalOverlay.style.display = 'none';
}
// После успешного входа или регистрации показываем профиль. надо?
function showProfile() {
  openProfile();
}

function showUserProfile(user) {
  document.querySelector('.myProfile-card .userFullName').innerText = `${user.firstName} ${user.lastName}`;
  // остальные данные профиля
}

// Кнопка Log In
document.querySelector('.profile-logIn').addEventListener('click', function(event) {
  closeRegisterModal();
  openLoginModal(); 
  event.preventDefault(); 
});

// Кнопка Register
document.querySelector('.profile-reg').addEventListener('click', function(event) {
  closeLoginModal(); 
  openRegisterModal(); 
  event.preventDefault(); 
});


document.querySelector('#loginModal .close').addEventListener('click', function() {
  closeLoginModal();
});


document.querySelector('#registerModal .close').addEventListener('click', function() {
  closeRegisterModal();
});


document.querySelector('.myProfile-card .close').addEventListener('click', function() {
  closeProfile();
});

//  НАДО??
/* modalOverlay.addEventListener('click', function(event) {
  if (event.target === modalOverlay) {
    closeLoginModal();
    closeRegisterModal();
    closeProfile();
  }
}); */


document.querySelector('.modal-content-login .register-link').addEventListener('click', function() {
  closeLoginModal(); 
  openRegisterModal();
});


document.querySelector('.modal-content-register .login-link').addEventListener('click', function() {
  closeRegisterModal();
  openLoginModal();
});



let users = [
  { email: 'wtf@wtf.com', password: 'wtf1', firstName: 'John', lastName: 'Doe' },
  { email: 'wtf2@wtf.com', password: 'wtf2', firstName: 'Alex', lastName: 'PressF' }
];
/* let users = []; */



/* loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = document.getElementById('userEmail').value;
  const password = document.getElementById('password').value;


  if (email === 'wtf@wtf.com' && password === 'wtf') {
    // добавить смену иконки!!!
    closeLoginModal();
    profileMenuNoAuth.style.display = 'none';
    profileMenuAuth.style.display = 'flex';
    document.querySelector('.profile-menuAuth').classList.add('._visible');

    localStorage.setItem('userEmail', email);
    showProfile(); 

    document.querySelector('.get-card').style.display = 'none';
    document.querySelector('.get-card-profile').style.display = 'flex';

  } else {
    alert('Invalid email or password');
  }

}); */



function loginUser(email, password) {

    let user = users.find(user => user.email === email && user.password === password);
    
 
    if (user && !localStorage.getItem(email)) {
      localStorage.setItem(email, JSON.stringify(user));
    }

    if (!user) {
      const storedUser = JSON.parse(localStorage.getItem(email));
      if (storedUser && storedUser.password === password) {
        user = storedUser;
      }
    }
  
  if (user) {
       // добавить смену иконки!
      closeLoginModal();
      showUserProfile(user);
      profileMenuNoAuth.style.display = 'none';
      profileMenuAuth.style.display = 'flex';
      document.querySelector('.profile-menuAuth').classList.add('._visible');

      document.querySelector('.get-card').style.display = 'none';
      document.querySelector('.get-card-profile').style.display = 'flex';
  } else {

      alert('Invalid email or password');
  }
}

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('userEmail').value;
  const password = document.getElementById('password').value;

  loginUser(email, password);
});

/* loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('userEmail').value;
  const password = document.getElementById('password').value;

  const savedEmail = localStorage.getItem('userEmail');
  const savedPassword = localStorage.getItem('password');
  if (email === savedEmail && password === savedPassword) {
      closeLoginModal();
      profileMenuNoAuth.style.display = 'none';
      profileMenuAuth.style.display = 'flex';
      document.querySelector('.profile-menuAuth').classList.add('._visible');


      setUserLoggedIn(true);
      document.querySelector('.get-card').style.display = 'none';
      document.querySelector('.get-card-profile').style.display = 'flex';
  } else {
      alert('Invalid email or password');
  }
}); */


/* registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const firstName = document.getElementById('userFirstname').value;
  const lastName = document.getElementById('userLastname').value;
  const email = document.getElementById('userEmailReg').value;
  const password = document.getElementById('password').value;

  if (firstName && lastName && email && password) {
    // Если все поля заполнены, сохраняем данные пользователя в localStorage
    localStorage.setItem('userFirstname', firstName);
    localStorage.setItem('userLastname', lastName);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('password', password);

    closeRegisterModal();
    showProfile();

  } else {
    alert('Please fill in all fields');
  }
}); */

function registerUser(firstName, lastName, email, password) {
  
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = storedUsers.find(user => user.email === email);

  if (existingUser) {
    alert('User with this email already exists');
  } else {
 
    const newUser = { email, password, firstName, lastName };
    storedUsers.push(newUser);

    localStorage.setItem(email, JSON.stringify(storedUsers));
    closeRegisterModal();
    showUserProfile(newUser);
    profileMenuNoAuth.style.display = 'none';
    profileMenuAuth.style.display = 'flex';
    document.querySelector('.profile-menuAuth').classList.add('._visible');
    document.querySelector('.get-card').style.display = 'none';
    document.querySelector('.get-card-profile').style.display = 'flex';
  }
}


registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('userFirstnameReg').value;
  const lastName = document.getElementById('userLastnameReg').value;
  const email = document.getElementById('userEmailReg').value;
  const password = document.getElementById('passwordReg').value;
  
  if (password.length < 8) {
    alert('Password should be at least 8 characters long');
    return; 
  }

  registerUser(firstName, lastName, email, password);
});

/* registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('userFirstname').value;
  const lastName = document.getElementById('userLastname').value;
  const email = document.getElementById('userEmailReg').value;
  const password = document.getElementById('password').value;

  if (firstName && lastName && email && password) {

      if (!localStorage.getItem(email)) {

          localStorage.setItem(email, JSON.stringify({ firstName, lastName, password }));
          closeRegisterModal();

          setUserLoggedIn(true);
      } else {
          alert('Уже существует');
      }
  } else {
      alert('Заполните все поля');
  }
});
function setUserLoggedIn(isLoggedIn) {
  localStorage.setItem('userLoggedIn', isLoggedIn);
  if (isLoggedIn) {
      const email = document.getElementById('userEmail').value;
      localStorage.setItem('userEmail', email);
  } else {
      localStorage.removeItem('userEmail');
  }
} */



// Для кнопки "Log Out"
document.querySelector('.profile-LogOut').addEventListener('click', function(event) {
  event.preventDefault();

  localStorage.removeItem('userEmail');
  closeLoginModal();
  
  profileMenuNoAuth.style.display = 'flex';
  profileMenuAuth.style.display = 'none';
  document.querySelector('.profile-menuAuth').classList.remove('._visible');
  
   document.querySelector('.get-card-profile').style.display = 'none';
   document.querySelector('.get-card').style.display = 'flex';

   document.querySelector('.myProfile-card').style.display = 'none';
});





// копирование номера карты из поля профиль
function copyCardNumber() {
  let cardNumber = document.querySelector(".userCardNumber").innerText;
  let tempTextarea = document.createElement("textarea");
        tempTextarea.value = cardNumber;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
}






