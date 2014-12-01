PrancingPony.Views.ItemShow = Backbone.CompositeView.extend({
    template: JST['items/show'],

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
    }

})
