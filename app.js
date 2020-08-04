const navSlide = () => {
  const burger = document.querySelector('.mobile-menu-trigger');
  const nav = document.querySelector('.nav-items');
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
