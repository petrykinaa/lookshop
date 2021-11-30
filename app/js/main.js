$(function () {


  $('.catalog-price__input').ionRangeSlider({
    type: "double",    
     onStart: function (data){
     $('.catalog-price__from').text(data.from);
     $('.catalog-price__to').text(data.to);
     },
     onChange: function (data) {
      $('.catalog-price__from').text(data.from);
      $('.catalog-price__to').text(data.to);
     },
  });

  $('.shop-slider__inner').slick({
    dots: true,
    fade: true,
    arrows: false
  });

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
  });


});