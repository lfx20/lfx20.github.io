// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/**
 * Created by lfx on 30/8/2014.
 */
(function($){

    // Defining our jQuery plugin

    $.fn.modal_box = function(prop){

        // Default parameters

        var options = $.extend({
            height : "300",
            width : "400",
            title:"Modal Box",
            description: "Just a description",
            top: "20%",
            left: "37%",
            color: "#0c8cbd"
        },prop);

//        return this.click(function(e){
//            add_block_page();
//            add_modal_box();
//            add_styles();
//
//            $('.modal_box').fadeIn();
//        });

        add_block_page();
        add_modal_box();
        add_styles();

        $('.modal_box').fadeIn();


        function add_block_page(){
            var block_page = $('<div class="block_page"></div>');

            $(block_page).appendTo('body');
        }

        function add_styles(){
            /*Block page overlay*/
            var pageHeight = $(document).height();
            var pageWidth = $(window).width();

            $('.block_page').css({
                'position':'absolute',
                'top':'0',
                'left':'0',
                'background-color':'rgba(0,0,0,0.6)',
                'height':pageHeight,
                'width':pageWidth,
                'z-index':'10'
            });

            $('.modal_box').css({
                'position':'absolute',
                'left':options.left,
                'top':options.top,
                'display':'none',
                'height': options.height + 'px',
                'width': options.width + 'px',
                'border':'1px solid #fff',
                'box-shadow': '0px 2px 7px #292929',
                '-moz-box-shadow': '0px 2px 7px #292929',
                '-webkit-box-shadow': '0px 2px 7px #292929',
                'border-radius':'10px',
                '-moz-border-radius':'10px',
                '-webkit-border-radius':'10px',
                'background': '#f2f2f2',
                'z-index':'50',
            });
            $('.modal_close').css({
                'position':'relative',
                'top':'-25px',
                'left':'20px',
                'float':'right',
                'display':'block',
                'height':'50px',
                'width':'50px',
                'border-radius':'25px',
                'background':'#FFFFFF',
                'line-height':'50px',
                'vertical-align':'middle',
                'margin':'0 auto',
                'text-decoration':'none',
                'text-align':'center'
            });
            $('.inner_modal_box').css({
                'background-color':'#fff',
                'height':(options.height - 50) + 'px',
                'width':(options.width - 50) + 'px',
                'color':options.color,
                'padding':'10px',
                'margin':'15px',
                'text-align':'center',
                'border-radius':'10px',
                '-moz-border-radius':'10px',
                '-webkit-border-radius':'10px'
            });
        }

        function add_modal_box(){
            var modal_content = $('<div class="modal_box"><a href="#" class="modal_close">X</a><div class="inner_modal_box"><h2>' + options.title + '</h2><p>' + options.description + '</p></div></div>');
            $(modal_content).appendTo('.block_page');

            close_modal = function(){
                $('.block_page').fadeOut().remove();
                $(this).parent().fadeOut().remove();
                cleanTrophy();
                cleanChoiceText();
            }

            $('.modal_close').click(close_modal);

//            $('.modal_close').click(function(){
//                $('.block_page').fadeOut().remove();
//                $(this).parent().fadeOut().remove();
//            });
        }

        return this;
    };

})(jQuery);
