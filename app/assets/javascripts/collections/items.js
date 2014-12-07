PrancingPony.Collections.Items = Backbone.Collection.extend({
    model: PrancingPony.Models.Item,

    url: '/api/items',

    parse: function(response) {
        if (response.models) {
            this.page = parseInt(response.page);
            this.total_pages = parseInt(response.total_pages);
            this.category = response.category
            return response.models;
        } else {
            return response;
        }
    },

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

PrancingPony.Collections.items = new PrancingPony.Collections.Items();
