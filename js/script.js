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



  