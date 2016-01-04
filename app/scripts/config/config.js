require.config({
  baseUrl: 'scripts/',
  paths: {
    'jquery': 'vendor/jquery/src/jquery',
    'underscore': 'vendor/underscore/underscore',
    'backbone': 'vendor/backbone/backbone',
    'backbone.babysitter': 'vendor/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'vendor/backbone.wreqr/lib/backbone.wreqr',
	  'backbone.radio': 'vendor/backbone.radio/build/backbone.radio.min',
    'backbone.marionette': 'vendor/backbone.marionette/lib/core/backbone.marionette',
	  'handlebars': 'vendor/handlebars/handlebars',
    'text': 'vendor/text/text',
    'templates': '../templates'
  },
  shim: {
    underscore: {
        exports: '_'
    },
    backbone: {
        exports: 'Backbone',
        deps: ['jquery', 'underscore']
    },
    marionette: {
        exports: 'Marionette',
        deps: ['backbone']
    }
  },
  deps: ['jquery', 'underscore']
});

require(['app', 'routers/router', 'controllers/controller'],
  function(App, Router, Controller){
    App.appRouter = new Router({
      controller: new Controller()
    });

    App.start();
  });
