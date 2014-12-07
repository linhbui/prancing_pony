PrancingPony.Views.CategoryAll = Backbone.CompositeView.extend({
    template: JST['items/category'],

    initialize:  function(options) {
        this.category_id = options.category_id;
        var items = this.collection;
        this.addIndexView(items);
        this.listenTo(this.collection, 'sync', this.updateCategory);
    },

    addIndexView: function(items) {
        var indexView = new PrancingPony.Views.ItemsIndex({
            collection: items,
            model: this.category_id
        });
        this.addSubview("div.index-view", indexView);
    },

    render: function() {
        var content = this.template({
            items: this.collection, 
            category: PrancingPony.category 
        });
        this.$el.html(content);
        this.attachSubviews();
        return this;
    },

    updateCategory: function () {
       this.$('h2#category-tagname').html(this.collection.category.tagname);
       this.$('p#category-description').html(this.collection.category.description);
    },

});
