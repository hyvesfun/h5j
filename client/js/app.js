define(["order!jquery", "order!underscore","order!backbone", "order!router", "less", "hogan"], function($, _, Backbone, Router, Less){

    var initialize = function(){
        Router.initialize();
        console.log('initialized');
    };

    return {
        initialize: initialize,
    };
});