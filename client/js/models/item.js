define(['underscore','backbone'], function(_, Backbone) {

    // Class Name
    var Item = Backbone.Model.extend({
        default: {
            id:false,
            title:false,
        },
    });

    return Item;
});