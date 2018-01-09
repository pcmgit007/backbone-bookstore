define([
  'jquery',
  'underscore',
  'backbone',
  'text!../templates/home.html'
], function($, _, Backbone, homeTemplate){

    var HomeView = Backbone.View.extend({ //Create a backboneview
        tagName: "div",
        id: "home-view",
        initialize: function() {
            $("#page-wrapper").html(this.el);
            this.render();
        },
        render: function() {
            var data = {
                title: geti18n('welcomeText'),
                hometxt:geti18n('HomeTxt')
            };
            var template = _.template(homeTemplate);
            this.$el.html(template(data));                      
        }
    });

    return HomeView;
});