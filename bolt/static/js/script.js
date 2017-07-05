;(function($){
  $('input[type=tel]').mask('+7 (999) 999-99-99');


  // print
  $('.print').click(function(){
    window.print();
  });
  /////




  // popup form
  $('.popup-form-link').click(function(){
    $('.popup-form').fadeIn();
  });
  $('.popup-form span').click(function(){
    $('.popup-form').fadeOut();
  });
  /////




  // popup product
  $('#product-img').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    zoom: {
      enabled: true,
      duration: 300
    }
  });
  /////




  // articles tile
  $(window).load(function(){
    $('.articles-page-wrap').isotope({
      masonry: {
        columnWidth: '.article-page-item',
        gutter: 20
      }
    });
  });
  //////
}(jQuery));