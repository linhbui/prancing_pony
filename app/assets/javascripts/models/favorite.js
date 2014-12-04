PrancingPony.Models.Favorite = Backbone.Model.extend({
    urlRoot: '/api/favorites',

    toJSON: function() {
        return {item_id: this.item.id}
    },

    initialize: function(attr, options) {
       this.item = options.item; 
    }
})
