define([
    'jquery',
    'underscore',
    'backbone',
    'Chosen',
    'text!../templates/contactus.html'
], function ($, _, Backbone, Chosen, contactusTemplate) {

    var CountriesModel = Backbone.Model.extend({});
    
    var CountriesCollection = Backbone.Collection.extend({
        model:CountriesModel,
        url: './src/json/countries.json',
        parse: function(response) {
            console.log(response);
            return response;
        }
    }); 

    allCountries = new CountriesCollection();
    allCountries.fetch({
        success: function() {
            $('#country-dropdown').html('');
            _.each(allCountries.models, function(country){
                var option = $('<option>');
                option.attr('value', country.get('code'));
                option.html(country.get('name'));
                $('#country-dropdown').append(option);
            });

            setTimeout(function(){
                $('#country-dropdown').chosen();
            });
        }
    });


    var ContactModel = Backbone.Model.extend({
        url: './save-data',
        validate: function() {
            console.log('test');
        }
    });

    var ContactData = new ContactModel();
    
    var formData = {};
    
    var ContactusView = Backbone.View.extend({
        tagName: "div",
        id: "contactus-view",
        model: ContactData,
        events: {
            "change .input":  "contentChanged",
            "submit #contact-form" : "submit"
        },
        initialize: function () { 
            el: $("#countries"),
            $("#page-wrapper").html(this.el);          
            this.render();
        },
        title: 'test',
        render: function () {
            var data = {
                title: geti18n('contactTxt')
            };
            var template = _.template(contactusTemplate);
            this.$el.html(template(data));
        },
        contentChanged: function(e) {
            formData[e.currentTarget.id] = e.currentTarget.value; 
        },
        submit: function(e) {
            e.preventDefault();
            console.log(formData);
            this.model.save(formData);
        }
    });
    
    return ContactusView;
});