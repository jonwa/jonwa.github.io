define(['backbone', 'backbone.marionette'], function(Backbone, Marionette){
  var App = new Marionette.Application();

  App.addRegions({
    header: '.header',
    intro: '.intro-header',
    games: '.games',
    about: '.about'
  });

  App.addInitializer(function(){
    Backbone.history.start();
  });

  return App;
});
