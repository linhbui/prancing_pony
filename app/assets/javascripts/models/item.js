PrancingPony.Models.Item = Backbone.Model.extend({
    urlRoot: '/api/items',

    reviews: function() {
        if (!this._reviews) {
           this._reviews = new PrancingPony.Collections.Reviews([], { item: this }); 
        }
        return this._reviews;
    },
    
    avgStarsStr: function() {
         var x;
         var str = "";
         for(x = 0; x < this.reviews().averageReviews(); x++) { 
              str += "<span class='filled'>★</span>";
         }
         for(; x < 5; x++) { 
              str += "<span>☆</span>";
         }
         return str;
    },

    parse: function(payload) {
        if(payload.reviews) {
            this.reviews().set(payload.reviews, { parse: true });
            delete payload.reviews;
        }
        return payload;
    }

})
