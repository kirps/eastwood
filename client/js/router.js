//ROUTER -  router.js

define([
    'jquery',
    'underscore',
    'backbone',
    'views/login',
    'views/data',
    'jquery-cookie'    
], function ($, _, Backbone, LoginView, DataView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            //define some URL routes
            
            //define a default
            '*actions' : 'defaultAction'
        },

        defaultAction: function ( actions ) {
            console.info('defaultAction Route');
        }
    });

    var initialize = function (){
    };

  return new AppRouter();
});