require.config({
    paths: {
        jquery: './node_modules/jquery/dist/jquery',
        underscore: './node_modules/underscore/underscore',
        backbone: './node_modules/backbone/backbone',
        validation: './node_modules/jquery-validation-1.17.0/dist/jquery.validate.min.js',
        text: './node_modules/text/text',
        Chosen: './node_modules/chosen-js/chosen.jquery'
    },
    shim: {
        chosen: {
            deps: ["jquery"],
            exports: 'Chosen'
        }
    }
});


var currentLang = 'en';
if(!localStorage.getItem('currentLang')){
    localStorage.setItem('currentLang', 'en');
} else {
    currentLang = localStorage.getItem('currentLang');
}

function geti18n(key) {
    var currentLang = localStorage.getItem('currentLang');
    var i18nData = JSON.parse(localStorage.getItem(currentLang));
    return i18nData[key];
}

function swicthLang(newLang) {
    if(!localStorage.getItem(newLang)){
        $.ajax({
            url: './src/json/' + newLang + '.json', 
            success: function(result){
                localStorage.setItem('currentLang', newLang);
                localStorage.setItem(newLang, JSON.stringify(result));
                window.location.reload()
            }, 
            error: function(er) {
                console.log(er);
            }
        });
    } else {
        localStorage.setItem('currentLang', newLang);
        window.location.reload()
    }
}


define([
    'jquery',
    'underscore',
    'backbone',
    './src/views/home.view.js',
    './src/views/dashboard.view.js',
    './src/views/aboutus.view.js',
    './src/views/contactus.view.js',
    './src/models/contact.model'

], function ($, _, Backbone, HomeView, DashboardView, AboutusView, ContactusView, contactModel) {
    $.ajax({
        url: './src/json/' + localStorage.getItem('currentLang') + '.json', 
        success: function(result){
            localStorage.setItem(localStorage.getItem('currentLang'), JSON.stringify(result));
        }, 
        error: function(er) {
            console.log(er);
        }
    });

    
    $("#languageSelect").val(localStorage.getItem('currentLang'))
    $("#languageSelect").show();

    var Router = Backbone.Router.extend({
        routes: {
            "": "home",// Calls the home method when there is no hashtag on the url
            'home': 'home',
            'dashboard': 'dashboard',
            'aboutus': 'aboutus',
            'contactus': 'contactus'
        },
        currentLang: 'en',
        home: function () {   // Gets called when there is no hashtag on the url
            this.view = new HomeView();
        },
        dashboard: function () {  // Gets called when dashboard hashtag is clicked
            this.view = new DashboardView();
        },
        aboutus: function () {  // Gets called when aboutus hashtag is clicked
            this.view = new AboutusView();
        },
        contactus: function () {  // Gets called when contactus hashtag is clicked
            this.view = new ContactusView({
            });

        }
     
    });
    var router = new Router();
    Backbone.history.start();  //Required for Backbone to start listening to hashchange events
    return router;
});