({
    appDir: ".",
    baseUrl: ".",
    dir: "../../build",

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

    modules: [
        {name: "js/main"},
    ],

})
