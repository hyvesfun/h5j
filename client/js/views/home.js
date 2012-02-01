define(['jquery','underscore','backbone', "template-engine"], function($, _, Backbone, TemplateEngine){

    var homeView = Backbone.View.extend({
        el: $('body'),
        render: function(){
            var message = TemplateEngine.render('templates/home.tpl', {message:"world"});
            $(this.el).html(message);
        }
    });

    return new homeView;
});