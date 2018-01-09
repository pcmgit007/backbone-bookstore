define([
    'jquery',
    'underscore',
    'backbone',
    'text!../templates/dashboard.html'
], function($, _, Backbone, dashboardTemplate){

    var DashboardView = Backbone.View.extend({ //Create a backboneview
        tagName: "div",
        id: "dashboard-view",
        initialize: function() {//constructor
            $("#page-wrapper").html(this.el);
            this.render();
        },
        render: function() {
            var data = {};
            var template = _.template(dashboardTemplate, data);//create a template using underscore
            this.$el.html(template);
        }
    });

    return DashboardView;
});