define(['jquery', 'underscore', 'backbone', 'backbone.marionette', 'handlebars', 'text!templates/intro.html'],
function($, _, Backbone, Marionette, Handlebars, template){
    return Marionette.View.extend({
        template: Handlebars.compile(template),
    });
});
