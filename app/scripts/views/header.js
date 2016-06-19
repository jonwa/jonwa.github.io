define(['jquery', 'underscore', 'backbone', 'backbone.marionette', 'handlebars', 'classie', 'text!templates/header.html', 'jquery.easing', 'bootstrap'],
function($, _, Backbone, Marionette, Handlebars, classie, template){
    return Marionette.ItemView.extend({
        template: Handlebars.compile(template),
        docElem: document.documentElement,
        header: document.querySelector( '.navbar-fixed-top' ),
        didScroll: false,
        changeHeaderOn: 300,

        initialize: function() {
            var self = this;
            window.addEventListener( 'scroll', function( event ) {
                if( !self.didScroll ) {
                    self.didScroll = true;
                    setTimeout(function(){ self.scrollPage(); }, 50);
                }
            }, false );

            $('body').on('click', '.page-scroll a', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo' );
                event.preventDefault();
            });
        },

        scrollPage: function() {
            var sy = this.scrollY();
            if ( sy >= this.changeHeaderOn ) {
                classie.add( this.header, 'navbar-shrink' );
            }
            else {
                classie.remove( this.header, 'navbar-shrink' );
            }
            this.didScroll = false;
        },

        scrollY: function(){
            return window.pageYOffset || this.docElem.scrollTop;
        }
    });
});
