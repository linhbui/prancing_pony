window.PrancingPony = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.cart = new PrancingPony.Models.Cart();
    this.cart.fetch();
    this.favorites = new PrancingPony.Collections.Favorites();
    //this.current_user = new PrancingPony.Models.UserSession();
    //this.current_user.fetch();

    new PrancingPony.Routers.Router({
      $rootEl: $("div#content")
    });
    Backbone.history.start(); 
    $('.nav-item-search').itemsSearch();
  }
};

