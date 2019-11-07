

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // парамерты настройки
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Хранение обьекта
      var $this = $(this);

      // Resizer () изменяет размеры элементов на основе ширины объекта, деленной на компрессор * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Разовый вызов для закрепления
      resizer();

      // Вызов чтобы изменить размер. Opera отменяет их изменение по умолчанию.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
