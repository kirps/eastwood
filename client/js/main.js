//BOOTSTRAP - main.js
//Holds the require.js shortcut definitions of addins

console.log('main.js');

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: '$.fn.popover'
        },
        'jquery-cookie': {
            deps: ['jquery']
        },
        enforceDefine: true
    },

    paths:{

        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.0/jquery.min',
        'jquery-cookie': '//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.3.1/jquery.cookie.min',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js',
        text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.3/text',
        bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.2.2/bootstrap.min',
        json2: '//cdnjs.cloudflare.com/ajax/libs/json2/20121008/json2',
        templates: '../templates'
    }

});

require([
// Load the app module and pass it to the definition function
    'app',
    'underscore',
    'backbone',
    'jquery',
    'jquery-cookie',
    'json2',
    'router'

],function (App, _, Backbone, $, router){

    console.info('App initialized');
    App.initialize();

});
