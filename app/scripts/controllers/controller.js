define(['app', 'backbone.marionette', 'views/headerView', 'views/contentView'],
  function(App, Marionette, HeaderView, ContentView){
  return Marionette.Controller.extend({
    initialize: function(options){
      App.header.show(new HeaderView());
    },

    index: function(){
      App.content.show(new ContentView());
    }
  });
});
