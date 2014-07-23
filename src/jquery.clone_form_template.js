(function ($) {
  $.fn.clone_form_template = function () {
    return $(this).map(function () {
      return update($(this).clone())[0];
    });
  };

  // updates a template clone according to conventions
  function update($clone) {
    var index = new Date().getTime();

    $clone.find('label,input,textarea,select').each(function (i, obj) {
      update_attrs($(obj), index);
    });

    return $clone.removeClass('template').show();
  }

  var placeholder = '-1';
  function update_attrs($element, identifier) {
    var regex;

    if ($element.attr('id')) {
      regex = new RegExp('_' + placeholder + '_', 'g');
      $element.attr('id',
        $element.attr('id').replace(new RegExp('_' + placeholder + '_', 'g'), '_' + identifier + '_')
      );
    }
    if ($element.attr('for')) {
      regex = new RegExp('_' + placeholder + '_', 'g');
      $element.attr('for',
        $element.attr('for').replace(regex, '_' + identifier + '_')
      );
    }
    if ($element.attr('name')) {
      regex = new RegExp('[' + placeholder + ']', 'g');
      $element.attr('name',
        $element.attr('name').replace(regex, '[' + identifier + ']')
      );
    }
  }
}(jQuery));
