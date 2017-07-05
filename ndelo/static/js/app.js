'use strict';

$(function () {
  /**
   * form styler
   * start
   */

  $('input[type=radio], input[type=checkbox]').styler();

  /**
   * form styler
   * start
   */

  /**
   * header form
   * start
   */

  function changeAuthForm(name) {
    $('[data-form-type]').removeAttr('data-header-form');
    $('[data-form-type=' + name + ']').attr('data-header-form', '');
  }

  $('[data-form-type-link]').on('click', function () {
    var formType = $(this).attr('data-form-type-link');

    changeAuthForm(formType);
  });

  /**
   * header form
   * end
   */
});
//# sourceMappingURL=app.js.map
