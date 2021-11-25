$(function () {
 

  $('.product__num').styler();
  

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',   
    draggable: false,
    arrows: false,
    fade: true
  });





  $('.slider__list').slick({

    arrows: false,
    dots: true,
    fade: true,
    // autoplay: true,
    // autoplaySpead: 2000

  });


});