define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){

    var ContactModel = Backbone.Model.extend({
        staticName: 'test',
        validate: function(attr, options) {
            console.log(attr, options);
        }
    });

    return ContactModel;
});
