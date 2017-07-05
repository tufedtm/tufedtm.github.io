(function(){
// my code
  $('.telephone').mask("+7 (999) 999-99-99");

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });

  $('.page__header-info button').click(function(e){
    e.preventDefault();
    //$('.shadow_body').show(300);
    $('.shadow_body').css({'display' : 'block'});
    //$('.callback_window').show(300);
    $('.callback_window').css({'display' : 'block'});
  });

  $('.callback_window_close').click(function(e){
    e.preventDefault();
    //$('.shadow_body').show(300);
    $('.shadow_body').css({'display' : 'none'});
    //$('.callback_window').show(300);
    $('.callback_window').css({'display' : 'none'});
  });

  //xs menu
  var xs_menu_toggle = $('.xs_menu_toggle');
  var xs_menu = $('.xs_menu_toggle + ul');
  //xs_menu.hide();
  xs_menu_toggle.click(function(e){
    e.preventDefault();
    xs_menu.slideToggle('slow');
  });

//    photo gallery
  $('.photo-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });

  // style form
  $('select').styler();

}());