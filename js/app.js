(function() {
  var app = angular.module('pokeStore', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Pokeball',
    price: 110.50,
    canPurchase: false,
    soldOut: true
  };
})();
