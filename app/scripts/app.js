define(['jquery', 'underscore', 'backbone', 'backbone.marionette'],
function($, _, Backbone, Marionette){
    var App = new Backbone.Marionette.Application();

    App.addRegions({
        header: '.header',
        intro: '.intro-header',
        projects: '.portfolio',
        about: '.about'
    });

    App.addInitializer(function(){
        Backbone.history.start();
    });

    return App;
});
