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
            var data = {
                title: geti18n('aboutTxt'),
                hometxt:geti18n('HomeTxt')
            };
            var template = _.template(aboutusTemplate);
            this.$el.html(template(data));            
        }
    });

    return AboutusView;
});