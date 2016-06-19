define(['app', 'backbone.marionette', 'views/header', 'views/intro', 'views/projects', 'views/about'],
    function(App, Marionette, HeaderView, IntroView, ProjectsView, AboutView){
        return Marionette.Controller.extend({
            initialize: function(options){
                App.header.show(new HeaderView());
            },

            index: function(){
                App.intro.show(new IntroView());
                App.projects.show(new ProjectsView());
                App.about.show(new AboutView());
            }
        });
    });
