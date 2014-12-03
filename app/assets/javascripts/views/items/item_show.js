PrancingPony.Views.ItemShow = Backbone.CompositeView.extend({
    template: JST['items/show'],
    
    events: {
        'click button#add-cart-button': 'addItemToCart'
    },

    initialize: function() {
        this.listenTo(this.model, 'sync', this.render);
        this.listenTo(this.model.reviews(), 'add', this.addReview);
    },

    render: function() {
        var content = this.template({
            item: this.model
        });
        this.$el.html(content);
        this.renderReviews();
        return this;
    },

    addReview: function(review) {
        var currentItem = this.model;
        var reviewView = new PrancingPony.Views.ReviewShow({
            model: review,
            collection: currentItem
        });
        this.addSubview('#reviews-list', reviewView);
    },

    renderReviews: function() {
        this.model.reviews().each(this.addReview.bind(this));
    },

    addItemToCart: function(event) {
        event.preventDefault();

        var $button = $(event.currentTarget);
        var itemId = $button.data("id");
        PrancingPony.cart.set("item_id", itemId);
        PrancingPony.cart.save({}, {
            success: function() {
                var num = parseInt($("#cart-num").html()) + 1;
                $("#cart-num").html(num);
                Backbone.history.navigate("cart", { trigger: true });
            },
            error: function() {
                console.log(":( :( :( So sad :( ( ")
            }
        });
    }
})
