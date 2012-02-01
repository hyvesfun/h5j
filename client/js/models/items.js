define(['underscore','backbone'], function(_, Backbone) {

    var Item = require('models/item');

    var Items = Backbone.Collection.extend({
        model:Item,
    });
    return Items;
});