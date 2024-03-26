$('.projects').slick({
  slidesToShow: 3,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
$(document).ready(function() {
  // Burger
  $('.burger').on('click', () => {
    $('.header__navigation').toggleClass('active');
    $('.burger').toggleClass('active')
    $('body').toggleClass('burger-active')
  })

  $('.navigation__item').on('click', () => {
    $('.header__navigation').removeClass('active');
    $('.burger').removeClass('active')
    $('body').removeClass('burger-active')
  })

  // Animations
  $('.intro__content').animate({opacity: 1}, 500)
  $('.section-title').animate({left: 0, opacity: 1}, 500)
  $('.use').animate({opacity: 1}, 500)
  $('.skill').animate({opacity: 1}, 500)
  $('.project').animate({opacity: 1}, 500)
  $('.number').animate({opacity: 1}, 500)
  $('.desc__inner >div').animate({opacity: 1}, 500)
  $('.project-description').animate({opacity: 1}, 500)
  $('.app__inner').animate({opacity: 1}, 500)
}
)
