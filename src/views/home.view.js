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
            var data = {};
            var template = _.template(homeTemplate, data);//create a template using underscore
            this.$el.html(template);            
        }
    });

    return HomeView;
});