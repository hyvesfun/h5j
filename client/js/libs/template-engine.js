define(["hogan", "config", "templates/load"], function(Hogan, Config){

    var render = function render(name, context, partials, indent){

        var template = false;

        if(Config.environment == "development"){
            teamplate = require('text!'+name);
            teamplate = Hogan.compile(teamplate);
        } else {
            teamplate = require(name);
        }

        return teamplate.render(context, partials, indent);
    };

    return {
        render:render
    };
});