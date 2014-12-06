PrancingPony.Models.Cart = Backbone.Model.extend({
    url: '/api/cart',
    
    items: function() {
        if (!this._items) {
           this._items = new PrancingPony.Collections.Items();
        }
        return this._items;
    },

    count:  function() {
        return this.items().length;
    },

    totalPrice: function() {
        var sum, l, price, quantity;
        sum = 0;
        l = this.count();
        for (var i = 0; i < l; i ++) {
            price = parseInt(this.items().models[i].get('price'))
            quantity = parseInt(this.items().models[i].get('cart-quantity'))
            sum += (price * quantity);
        }
        return sum;
    },
    
    parse: function(payload) {
        if(payload.items) {
            this.items().set(payload.items, { parse: true });
            delete payload.items;
        }
        return payload;
    }
})
