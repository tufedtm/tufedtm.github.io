;(function(){
  $('input[type=tel]').mask('+7 (999) 999-99-99');




  // xs nav
  var xsNav = $('#xs-nav');

  window.innerWidth <= 1080 ? xsNav.addClass('xs') : xsNav.removeClass('xs');
  window.onresize = function(){
    window.innerWidth <= 1080 ? xsNav.addClass('xs') : xsNav.removeClass('xs');
  };

  xsNav.click(function(){
    $(this)
      .addClass('active')
      .find('*').click(function(e){
        e.stopPropagation();
      });
  });

  xsNav.next().click(function(){
    xsNav.removeClass('active');
  });
  //////




  // cart
  var cartWrap = $('.cart-wrap');
  $('#cart-link').click(function(){
    $('.cart-wrap').addClass('active');
  });

  cartWrap.click(function(){
    cartWrap.removeClass('active');
    $(this).find('*').click(function(e){
      e.stopPropagation();
    });
  });

  $('.cart-wrap span').click(function(){
    cartWrap.removeClass('active');
  });

  if ( $('.cart-wrap tr').length >=5 ) {
    cartWrap.addClass('more-5');
  }

  window.onkeydown = function( ev ) {
    if ( ev.keyCode === 27 ) {
      $('.cart-wrap span').click();
    }
  };
  //////////




  // models slider
  var modelsSliderConfig = {
    item: 5,
    autoWidth: true,
    slideMove: 3, // slidemove will be 1 if loop is true
    slideMargin: 30,
    controls: false
  };

  if ( window.innerWidth < 1024 ) {
    $('#tp-models')
      .lightSlider(modelsSliderConfig)
      .addClass('xs');
  }
  ///////




  // instagram works
  var feed = new Instafeed({
    get: 'user',
    //filter: function(image) {
    //  return image.tags.indexOf('фотопринтер') >= 0;
    //},
    userId: 2251158208,
    resolution: 'low_resolution',
    template: '<li><a href="{{link}}" target="_blank" rel="nofollow"><img src="{{image}}" width="295" height="295"/></a></li>',
    //accessToken: '1757835318.b2c90ce.152f8107f56f4d2ea23b3e9ad91186f0',
    clientId: 'b2c90ce9a7ac4a62888782edb5608c0d'
  });
  feed.run();


  // slider
  window.onload = function(){
    $('#instafeed').lightSlider({
      item: 5,
      autoWidth: true,
      slideMargin: 1,
      controls: false,
      pager: false
    });
  };

  //////////




  // aside xs

  $('.for-left-aside').click(function(){
    $('.aside-left').addClass('active');
    $('.for-left-aside, .for-right-aside').hide();
  });

  $('.for-right-aside').click(function(){
    $('.ci-settings').addClass('active');
    $('.for-right-aside, .for-left-aside').hide();
  });

  $('.constructor-page__settings__button').click(function(){
    $('.constructor-page__settings').addClass('active');
    $(this).hide();
  });

  if (window.innerWidth <= 768){
    $(this).find('.for-left-aside').show();
  }

  window.onresize = function(){
    window.innerWidth <= 768 ? $(this).find('.for-left-aside').show() : NaN;
  };

  $('*').click(function(e){
    if ($(e.target).is('.for-left-aside, .for-right-aside, .constructor-page__settings__button')){
      e.stopPropagation();
    }
    if ($(e.target).is('.aside-left *, .ci-settings *')){
      return;
    }
    if ($(e.target).is('.constructor-page__settings *')){
      return;
    }

    if (window.innerWidth <= 768){
      $(this).find('.for-left-aside').show();
    }
    if (window.innerWidth <= 991){
      $(this).find('.for-right-aside').show();
      $(this).find('.constructor-page__settings__button').show();
    }

    $(this).find('.aside-left').removeClass('active');
    $(this).find('.ci-settings').removeClass('active');
    $(this).find('.constructor-page__settings').removeClass('active');

    if ($('.aside-left, .ci-settings, .constructor-page__settings').hasClass('active')){
      e.preventDefault();
    }
  });

  ////////




  // form styler
  $('select').styler();
  //////////////




  // catalog settings

  $('.cisb-colors div').click(function(){
    $('.cisb-colors div').removeClass();
    $(this).addClass('current');
  });

  /////////////////////




  // constructor settings

  //// constructor accordion

  var accordionTtm = {

    type: {
      accordion: 'accordion',
      spoiler: 'spoiler'
    },

    accordion: function(selector) {
      $(selector + ' .cis-top').click(function(){
        if ($(this).parent().hasClass('active') != true){
          $(selector).removeClass('active');
        }
        $(this).parent().toggleClass('active');
      });
    },

    spoiler: function(selector) {

      //[].forEach.call(document.querySelectorAll(selector), function(el) {
      //  el.addEventListener('click', function() {
      //    this.classList.toggle('active')
      //  })
      //});

      $(selector + ' .cis-top').click(function(){
        $(this).parent().toggleClass('active');
      });
    },

    init: function(config) {
      if (config.type === this.type.accordion) {
        this.accordion(config.selector);
      } else if (config.type === this.type.spoiler) {
        this.spoiler(config.selector);
      }
    }

  };

  accordionTtm.init({
    selector: '.constructor-page__settings__item',
    type: 'accordion'
  });


  //// constructor tabs

  $('#tab-container').easytabs({
    //animate: true,
    animationSpeed: 200,
    //defaultTab: "span#tab-2",
    //panelActiveClass: "active-content-div",
    //tabActiveClass: "selected-tab",
    //tabs: "> div > span",
    updateHash: false
    //cycle: 2000
  });


  //// images tab input

  $('.images-tab__content button').click(function(){
    $('.images-tab__content input').click();
  });


  //// text tab selects
  $('.text-tab__content select, .setting-txt-img select').styler('destroy');


  //// filters tab
  $('.constructor-page__filters div').click(function(){
    $(this).toggleClass('active');
  });

  ////////////////////////





  // text and img settings
  $('.setting-txt-img__bold input, .setting-txt-img__italic input').click(function(){
    if ( $(this).prop('checked') ){
      $(this).parent().addClass('active');
    } else {
      $(this).parent().removeClass('active');
    }
  });
  /////////////////////////

}());