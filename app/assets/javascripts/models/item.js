PrancingPony.Models.Item = Backbone.Model.extend({
    urlRoot: '/api/items',

    reviews: function() {
        if (!this._reviews) {
           this._reviews = new PrancingPony.Collections.Reviews([], { item: this }); 
        }
        return this._reviews;
    },
    
    starsStr: function() {
        
    },

    parse: function(payload) {
        if(payload.reviews) {
            this.reviews().set(payload.reviews, { parse: true });
            delete payload.reviews;
        }
        return payload;
    }

})
