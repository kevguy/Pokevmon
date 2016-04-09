(function() {
  var app = angular.module('pokeStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    { name: 'Pokeball', price: 2.95 },
    { name: 'Great Ball', price: 3.95 },
    { name: 'Ultra Ball', price: 6 }
  ];
})();
