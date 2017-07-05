'use strict';

$(function () {

  /**
   * form styler
   */
  $('input[type=checkbox]').styler();

  /**
   * accounts list show
   */
  $('[data-js-analysis-list-show]').on('click', function () {
    $(this).hide().next().show();
  });

  /**
   * accordion
   */
  var openBtn = $('[data-js-accordion-open]');
  var closeBtn = $('[data-js-accordion-close]');

  openBtn.on('click', function () {
    var accordionParent = $(this).parent('[data-js-accordion-header]');
    $(this).hide();
    accordionParent.find('[data-js-analysis-list-wrap]').hide();
    accordionParent.find(closeBtn).fadeIn();
    accordionParent.next().slideDown();
  });

  closeBtn.on('click', function () {
    var accordionParent = $(this).parent('[data-js-accordion-header]');
    $(this).hide();
    accordionParent.find('[data-js-analysis-list-wrap]').fadeIn();
    accordionParent.find(openBtn).fadeIn();
    accordionParent.next().slideUp();
  });

  /**
   * repeat analysis
   */
  var repeatBtn = $('[data-js-repeat-btn]');
  var repeatFormFor = $('[data-js-repeat-for]');

  repeatBtn.on('click', function () {
    var repeatFormFrom = $(this).parent().siblings('[data-js-repeat-from]');
    var analysisUsers = repeatFormFrom.find('[data-js-analysisUsers]').val();
    var analysisLimitFollowers = repeatFormFrom.find('[data-js-analysisLimitFollowers]').val();
    var analysisLimitResultsCount = repeatFormFrom.find('[data-js-analysisLimitResultsCount]').val();

    repeatFormFor.find('[data-js-analysisUsers]').val(analysisUsers);
    repeatFormFor.find('[data-js-analysisLimitFollowers]').val(analysisLimitFollowers);
    repeatFormFor.find('[data-js-analysisLimitResultsCount]').val(analysisLimitResultsCount);

    $(document.body).animate({
      scrollTop: 0
    }, 500);
  });
});
//# sourceMappingURL=app.js.map
