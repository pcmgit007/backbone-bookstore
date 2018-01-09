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
            var data = {
                title: geti18n('dashboardTxt'), 
                topselling: geti18n('topsellingTxt'),
                sellingText2: geti18n('sellingText2'),
                sellingText3: geti18n('sellingText3'), 
                sellingText4: geti18n('sellingText4'),                 
                textbook1 : geti18n('textbook1'),
                textbook2 : geti18n('textbook2'),
                textbook3 : geti18n('textbook3'),
                               
            };
            var template = _.template(dashboardTemplate);
            this.$el.html(template(data));            
        }
    });

    return DashboardView;
});