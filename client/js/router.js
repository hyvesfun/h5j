define(['jquery','underscore','backbone','js/views/home'], function($, _, Backbone, homeView){

    var AppRouter = Backbone.Router.extend({
        routes: {
        // Default
        '*actions': 'defaultAction'
    },

    defaultAction: function(actions){
        // We have no matching route, lets display the home page
        homeView.render();
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});