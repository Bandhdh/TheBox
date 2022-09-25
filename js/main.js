// Slider

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});

// Menu burger

const list = document.querySelector('.header__list'); 
const btn = document.querySelector('.header__toggle-btn');
btn.addEventListener('click', function(){
  list.classList.toggle('active');
  btn.classList.toggle('active');
})


// Mix it up

var mixer = mixitup('.houses__items', {
  animation: {
    duration: 250
  }
});

// Accodion

document.addEventListener('DOMContentLoaded', () =>{
  const accrodions = document.querySelectorAll('.accodion__item');

  accrodions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      console.log(e);
      const control = self.querySelector('.accodion__control');
      const content = self.querySelector('.accodion__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')){
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    })
  })
})