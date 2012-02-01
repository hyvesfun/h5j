require.config({
    baseUrl: ".",
    paths:{
        "app": "js/app",
        "jquery": 'js/libs/jquery-min',
        "underscore": 'js/libs/underscore-min',
        "backbone": 'js/libs/backbone-min',
        "less": "js/libs/less-min",
        "config": "js/config/development",
        "router": "js/router",
        "hogan" : "js/libs/hogan-min",
        "template-engine" : "js/libs/template-engine",
        "order" : "js/order",
        "text" : "js/text",
        "main": "js/main"

    },

    package: [{name:"templates", location:"templates"}],

    waitSeconds: 3,
});


requirejs.onError = function (err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err);
    }

    //ToDo: do not throw execption and show message to users
    throw err;
};

require(['app'], function(App){
    App.initialize();
});
