PrancingPony.Models.Item = Backbone.Model.extend({
    urlRoot: '/api/items',

    defaults: {
        "cart-quantity": '1'
    },

    reviews: function() {
        if (!this._reviews) {
           this._reviews = new PrancingPony.Collections.Reviews([], { item: this }); 
        }
        return this._reviews;
    },
    
    favorites: function() {
        if (!this._favorites) {
            this._favorites = new PrancingPony.Collections.Favorites([], { item: this });
        }
        return this._favorites;
    },

    favorite: function() {
        if (!this._favorite) {
            this._favorite = new PrancingPony.Models.Favorite({}, { item: this});
        }
        return this._favorite;
    },

    favoritesCount: function() {
        return this.favorites().length;
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

        if(payload.favorites) {
            this.favorites().set(payload.favorites, { parse: true });
            delete payload.favorites;
        }

        if (payload.favorited_id) {
            this.favorite().set("id", payload.favorited_id);
        }
        return payload;
    }

})
