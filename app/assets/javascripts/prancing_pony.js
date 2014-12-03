window.PrancingPony = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.cart = new PrancingPony.Models.Cart();
    this.cart.fetch();
    new PrancingPony.Routers.Router({
      $rootEl: $("div#content")
    });
    Backbone.history.start(); 
    $('.nav-item-search').itemsSearch();
  }
};

