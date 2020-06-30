const navSlide = () => {
  const burger = document.queryselector('.mobile-menu-trigger');
  const nav = document.queryselector('.mobile-menu');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}

navSlide();

function burgeranimation(x) {
x.classList.toggle("change");
}
