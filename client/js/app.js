//APPLICATION - app.js

define([
  'jquery',
  'underscore',
  'backbone',
  'router' // Request router.js
], function ($, _, Backbone, AppRouter){
    var initialize = function() {
        Backbone.history.start();
    };

  return {
    initialize: initialize
  };
});
