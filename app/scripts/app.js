define(['backbone', 'backbone.marionette'], function(Backbone, Marionette){
  var App = new Marionette.Application();

  App.addRegions({
    header: '.header',
    content: '.content'
  });

  App.addInitializer(function(){
    Backbone.history.start();
  });

  return App;
});
