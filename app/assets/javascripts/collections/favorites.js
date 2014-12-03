PrancingPony.Collections.Favorites = Backbone.Collection.extend({
    model: PrancingPony.Models.Favorite,

    url: '/api/favorites',

    getOrFetch: function (id) {
        var model = this.get(id);
        var models = this;
        if (!model) {
            model = new PrancingPony.Models.Item({ id: id });
            model.fetch({
                success: function () {
                   models.add(model) 
                },
            });
        }
        return model;
    }
})

