define([
    'jquery',
    'underscore',
    'backbone',
    'text!../templates/aboutus.html'
], function($, _, Backbone, aboutusTemplate){

    var AboutusView = Backbone.View.extend({
        tagName: "div",
        id: "aboutus-view",
        initialize: function() {
            $("#page-wrapper").html(this.el);
            this.render();
        },
        render: function() {
            var data = {};
            var template = _.template(aboutusTemplate, data);
            this.$el.html(template);
        }
    });

    return AboutusView;
});