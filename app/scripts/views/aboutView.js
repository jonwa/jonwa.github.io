define(['jquery', 'underscore', 'backbone', 'backbone.marionette', 'handlebars', 'text!templates/about.html'],
  function($, _, Backbone, Marionette, Handlebars, template){
    return Marionette.View.extend({
      template: Handlebars.compile(template),

      render: function(){
        this.$el.html(this.template());
      }
    });
  });
