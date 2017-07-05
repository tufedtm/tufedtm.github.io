;(function(){
  $('input[type=tel]').mask('+7 (999) 999-99-99');




  // xs nav
  var xsNav = $('#xs-nav');

  xsNav.click(function(){
    $(this)
      .addClass('active')
      .find('*').click(function(e){
        e.stopPropagation();
      })
  });

  xsNav.next().click(function(){
    xsNav.removeClass('active')
  });
  /////////////




  // section1 slider
  $("#section1__slider").lightSlider({
    item: 1,
    addClass: 'section1__slider',
    mode: "fade",
    speed: 2000,
    controls: false
  });
  /////////////////////




  // products popup
  $('.products-item__wrap').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    fixedContentPos: true,
    zoom: {
      enabled: true,
      duration: 300
    }
  });
  /////////////////




  // works done popup
  $('.works-done-wrap a').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    fixedContentPos: true,
    zoom: {
      enabled: true,
      duration: 300
    }
  });
  ///////////////////////




  // instagram slider
  var feed = new Instafeed({
    get: 'user',
    userId: 649291158,
    resolution: 'low_resolution',
    template: '<li><a href="{{link}}" target="_blank" rel="nofollow"><img src="{{image}}" width="265" height="265"/></a></li>',
    accessToken: '1757835318.b2c90ce.152f8107f56f4d2ea23b3e9ad91186f0',
    clientId: 'b2c90ce9a7ac4a62888782edb5608c0d'
  });
  try {
    feed.run();
  } catch (err) {}


  window.onload = function(){
    $('#instafeed').lightSlider({
      auto:true,
      loop:true,
      item: 5,
      autoWidth: true,
      slideMargin: 20,
      controls: false,
      pager: false
    });
  };
  //////////////////////

  // для исключения клика по детям
  // $('.site-top-nav *').click(function(e){
  //   e.stopPropagation();
  // });
}());