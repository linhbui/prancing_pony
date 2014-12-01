PrancingPony.Collections.Reviews = Backbone.Collection.extend({
    model: PrancingPony.Models.Review,
    
    url: 'api/reviews',

    initialize: function(models, options) {
        this.item = options.item
    },

    averageReviews: function() {
        var sumStars = 0;
        this.each(function(review) {
            sumStars += review.get('stars');
        });
        return Math.ceil(sumStars/this.length);
    }
})
