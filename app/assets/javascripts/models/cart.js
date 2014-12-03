PrancingPony.Models.Cart = Backbone.Model.extend({
    url: '/api/cart',
    
    items: function() {
        if (!this._items) {
           this._items = new PrancingPony.Collections.Items(); //with or without that square bracket thing here?! 
        }
        return this._items;
    },
    
    totalPrice: function() {
        var sum = 0;
        var l = this.items.length;
        for (var i = 0; i < l; i ++) {
            sum += this.items[i].get('price');
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
