define(['jquery', 'underscore', 'backbone', 'backbone.marionette', 'handlebars', 'classie', 'text!templates/header.html'],
  function($, _, Backbone, Marionette, Handlebars, classie, template){
    return Marionette.View.extend({
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
        		setTimeout(function(){ self.scrollPage(); }, 250);
        	}
        }, false );
      },

      render: function(){
        this.$el.html(this.template());
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
