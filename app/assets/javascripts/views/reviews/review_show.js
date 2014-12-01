PrancingPony.Views.ReviewShow = Backbone.View.extend({
    template: JST['reviews/show'],
    
    className: 'review-wrapper clearfix',
	
    render: function() {
        var content = this.template({ 
            review: this.model,
            item: this.collection
        });
        this.$el.html(content);
        return this;
    }

});
