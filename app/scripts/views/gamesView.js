define(['backbone.marionette', 'handlebars', 'text!templates/games.html'],
  function(Marionette, Handlebars, template){
    return Marionette.View.extend({
      template: Handlebars.compile(template),

      render: function(){
        this.$el.html(this.template());
      }
    });
  });
