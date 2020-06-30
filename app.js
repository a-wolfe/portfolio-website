const navSlide = () => {
  const burger = document.querySelector('.mobile-menu-trigger');
  const nav = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('mobile-menu-active');
  });
}

navSlide();

function burgeranimation(x) {
x.classList.toggle("change");
}
