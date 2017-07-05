;
(function () {
  $('input[type=tel]').mask('+7 (999) 999 - 99 - 99');


  // mobile menu
  $('.top-nav span').click(function(){
    $('.top-nav nav, .top-nav i').fadeIn().css('display', 'flex');
  });

  $('.top-nav i').click(function(){
    $('.top-nav nav, .top-nav i').fadeOut();
  });
  //// mobile menu



  // gallery
  $('.gallery-items a').click(function(e){
    e.preventDefault();
    $('.gallery-big-img').attr('src', $(this).attr('href'));
    $('.gallery-items img').removeClass('active');
    $(this).find('img').addClass('active');
  });
  //// gallery



  // contacts
  $('.imgs').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  //// contacts




  // schedule
  $('.schedule-item-cell:empty')
    .addClass('null');
  //// schedule




  // popup
  $('.popup-link').click(function(){
    $('.popup').fadeIn(100).css('display', 'flex');
  });
  $('.popup, .close').click(function(){
    $('.popup').fadeOut(100);
  });
  $('.popup *').click(function(e){
    e.stopPropagation();
  });
  //// popup
}());