define(['jquery', 'underscore', 'backbone', 'backbone.marionette', 'handlebars', 'text!templates/projects.html'],
    function($, _, Backbone, Marionette, Handlebars, template){
        return Marionette.ItemView.extend({
            template: Handlebars.compile(template),
        });
    });
