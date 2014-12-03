PrancingPony.Models.Cart = Backbone.Model.extend({
    url: '/api/cart',
    
    items: function() {
        if (!this._items) {
           this._items = new PrancingPony.Collections.Items(); //with or without that square bracket thing here?! 
        }
        return this._items;
    },

    count:  function() {
        return this.items().length;
    },

    totalPrice: function() {
        var sum = 0;
        var l = this.count();
        for (var i = 0; i < l; i ++) {
            sum += parseInt(this.items().models[i].get('price'));
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
