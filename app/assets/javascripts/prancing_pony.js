window.PrancingPony = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new PrancingPony.Routers.AppRouter({
      $rootEl: $("div#content")
    });
    Backbone.history.start(); 
  }
};

