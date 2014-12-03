PrancingPony.Views.CartShow = Backbone.CompositeView.extend({
    template: JST['carts/show'],
    
    events: {
        "click button.delete-cart-item": "deleteCartItem",
        "click button#keep-shopping": "goBackToIndex"
    },

    initialize: function () {
        this.listenTo(this.collection, "add sync", this.addItemView);
        this.listenTo(this.collection, "sync", this.render);
        this.listenTo(this.collection, "remove", this.removeItemView);
        
        this.collection.each(function(item){
            this.addItemView(item)
        }.bind(this))
    },

    goBackToIndex: function(event) {
        Backbone.history.navigate("", { trigger: true })
    },

    addItemView: function(item){
        var cartItemView = new PrancingPony.Views.CartItemView({
            model: item
        });
        this.addSubview("div#cart-items-list", cartItemView)
    },
    
    removeItemView: function(model){
        var subview = _.find(this.subviews("div#cart-items-list"), function(subview){
            if(subview.model.id === model.id){
                return true;
            }
        })
        this.removeSubview("div#cart-items-list", subview);
    },

    render: function () {
        var content = this.template({
            cart: this.model
        });
        this.$el.html(content);
        this.attachSubviews();
        return this;
    },
    
    deleteCartItem: function(event) {
        debugger
        event.preventDefault();
        var $button = $(event.currentTarget);
        var itemId = $button.data("id");
        $.ajax({
          url: "/api/cart",
          method: "delete",
          data: { item_id: itemId },
          success: function (response) {
           // decrease num on cart 
            var num = parseInt($(".cart-num").html()) - 1;
            $("#cart-num").html(num);
           // remove the cart on view 
           // take care of by listen to?
         }
    });
    },
})