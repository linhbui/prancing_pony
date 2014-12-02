window.PrancingPony = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new PrancingPony.Routers.Router({
      $rootEl: $("div#content")
    });
    Backbone.history.start(); 
    $('.nav-item-search').itemsSearch();
  }
};

