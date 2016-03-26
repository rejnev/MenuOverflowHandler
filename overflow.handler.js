/*
* Overflow handler
* This plugin handle extra menu items for you
* Version 2.0
*
* Copyright 2015, Mehdi Dehghani
* (http://www.github.com/MehdiDehghani)
*
* Changelog:
* 2.0
* 1. changed the name of main method to overflowHandler.
* 2. Bootstrap support added.
* 3. return this added for having jQuery's chain when you using the plugin.
* 
* Last updated: 3/26/2016
*
* @author   Mehdi Dehghani
* @license  MIT
*/

(function ($, window, document, undefined) {
    function overflowHandler($menuWrap, config) {
        var self = this;

        self.init = function () {
            fixMarkup();
        }

        function fixMarkup() {
            var $$li = $menuWrap.children('li'),
                $addedLi,
                $addedUl,
                deleteFlag = true;

            $addedLi = $('<li />').addClass('dropdown-menu').insertAfter($$li.eq(config.availableCount - 1));

            $('<a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" class="dropdown-toggle" href="#" title="سایر">سایر<span class="caret"></span></a>').appendTo($addedLi);

            $('<ul />').addClass('dropdown-menu').appendTo($addedLi);

            $addedUl = $addedLi.children('ul');

            $$li.each(function () {
                var $this = $(this);

                if ($this.index() > config.availableCount) {
                    $this.appendTo($addedUl);
                    deleteFlag = false;
                }
            });

            // it seems that, we have no overflow :)
            if (deleteFlag) {
                $addedLi.remove();
            }
        }
    };

    $.fn.overflowHandler = function (config) {
        config = $.extend({}, $.fn.overflowHandler.config, config);
        this.each(function () {
            var $this = $(this);
            var obj = new overflowHandler($this, config);
            obj.init();
        });
        return this;
    };

    $.fn.overflowHandler.config = {
        availableCount: 6,
        overflowText: 'More',
        overflowHref: '#'
    }
})(jQuery, window, document);
