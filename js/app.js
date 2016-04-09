(function(){
  var gem = { name: 'Pokemon', price: 2.95 };
  var app = angular.module('pokeStore', []);
  
  app.controller('StoreController', function(){
    this.product = gem;
  });
  
})();