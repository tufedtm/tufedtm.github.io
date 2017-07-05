;(function(){
  $('input[type=tel]').mask('+7 (999) 999-99-99');



  // nav
  $('.site-top-nav > ul > li:nth-child(8) a').hover(function(){
    $('.site-top-nav > ul > li:nth-child(8) ul').addClass('show');
    setTimeout(function(){
      $('.site-top-nav > ul > li:nth-child(8) ul').addClass('show')
    }, 500);
  });

  $('.site-top-nav > ul > li:nth-child(8)').mouseleave(function(){
    setTimeout(function(){
      $('.site-top-nav > ul > li:nth-child(8) ul').removeClass('show')
    }, 500);
  });

  $('.site-top-nav > ul > li:nth-child(8) input').hover(function(){
    setTimeout(function(){
      $('.site-top-nav > ul > li:nth-child(8) ul').removeClass('show')
    }, 500);
  });

  if (window.innerWidth <= 1024){
    $('.site-top-nav').click(function(){
      $('.xs-nav, .xs-nav span').fadeIn(100);
      $(this).css('display', 'none');
      $('body').css('overflow', 'hidden');
    });
  }

  $('.xs-nav span').click(function(){
    $('.xs-nav, .xs-nav span').fadeOut();
    $('.site-top-nav').css('display', 'block');
    $('body').css('overflow', 'auto');
  });
  //$('.site-top-nav *').click(function(e){
  //  e.stopPropagation();
  //});
  ///////




  // fav add
  $('.fav').click(function(){
    $(this).toggleClass('checked');
  });
  ///////

  $('#full').click(function(){
    $('body').css('min-width', '1150px');
    $('head meta[name=viewport]').remove();
    $('<meta name=viewport content="width=1150">').appendTo('head');
    localStorage.setItem('fullik', 1);
  });

  if (localStorage.fullik === '1'){
    $('body').css('min-width', '1150px');
    $('head meta[name=viewport]').remove();
    $('<meta name=viewport content="width=1150">').appendTo('head');
  }

  // articles view
  $('.views span:nth-child(1)').click(function(){
    $('.views span').removeClass();
    $(this).addClass('active');
    $('.page__articles-item').removeClass().addClass('page__articles-item row');
  });
  $('.views span:nth-child(2)').click(function(){
    $('.views span').removeClass();
    $(this).addClass('active');
    $('.page__articles-item').removeClass().addClass('page__articles-item tile');
  });
  $('.views span:nth-child(3)').click(function(){
    $('.views span').removeClass();
    $(this).addClass('active');
    $('.page__articles-item').removeClass().addClass('page__articles-item table');
  });
  //////




  // article item
  try {
    articleClass = $('.page__articles-item')[0].className;
    if ((window.innerWidth <= 1024 && window.innerWidth > 768) || (window.innerWidth < 700))  {
      $('.page__articles-item.tile').removeClass('tile').addClass('row');
    } else {
      $('.page__articles-item.tile').removeClass().addClass(articleClass);
    }
  } catch (err) {}
  //////



  // favs
  $('.favs-item h4').click(function(){
    $(this).find('.shadow').css('display', 'block');
  });

  $('.favs-item h4 *').click(function(e){
    e.stopPropagation();
  });

  $('.shadow').click(function(){
    $(this).hide();
  });

  $('.favs-controls div:nth-child(2)').click(function(){
    $(this).toggleClass('play');
  });
  ///////




  // archive
  $('.a-year').click(function(){
    if ($(this).hasClass('active') != true){
      $('.a-year').removeClass('active');
    }
    $(this).toggleClass('active');
  });
  ///////
}());