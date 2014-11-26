PrancingPony.Views.ItemElement = Backbone.View.extend({
    template: JST["items/element"],
    render: function() {
        var content = this.template({
            item: this.model
        });
        this.$el.html(content);
        return this;
    }

})
