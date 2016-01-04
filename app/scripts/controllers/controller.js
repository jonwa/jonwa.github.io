define(['app', 'backbone.marionette', 'views/headerView', 'views/introView', 'views/gamesView', 'views/aboutView'],
  function(App, Marionette, HeaderView, IntroView, GamesView, AboutView){
    return Marionette.Controller.extend({
      initialize: function(options){
        App.header.show(new HeaderView());
      },

      index: function(){
        App.intro.show(new IntroView());
        App.games.show(new GamesView());
        App.about.show(new AboutView());
      }
    });
  });
