(function() {
  var app = angular.module('pokeStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;
    
    this.setTab = function(setTab){
      this.tab = setTab;
    };
    
    this.isSet = function(isSet){
      return this.tab === isSet;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    
    this.setCurrent = function(para){
      if (para){
        this.current = para;
      } else {
        this.current = 0;
      }
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
    
  });

  var gems = [{
      name: 'Pokeball',
      description: "A Poke Ball with a 1x Catch Rate.",
      shine: 8,
      price: 110.50,
      rarity: 2,
      color: '#CCC',
      faces: 14,
      images: [
        "images/ball-02.png",
        "images/ball-05.png",
        "images/ball-09.png"
      ],
      reviews: [{
        stars: 5,
        body: "I don't know about you, but for some reasons, whenever i try to catch legendaries, the regular Pokeball works the best (excluding Master). I would agree agree to start with a quick ball. I used it to catch Dialga in Diamond on the first turn.",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This ball sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Great Ball',
      description: "A good, high-performance Poke Ball with a 1.5x Catch Rate.",
      shine: 9,
      price: 1100,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/ball-01.png",
        "images/ball-03.png",
        "images/ball-04.png"
      ],
      reviews: [{
        stars: 3,
        body: "Lowering your target's HP has more effect on easier to catch Pokemon. And Great Balls are better than Ultra Balls.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Great Balls are used to catch pokemon better than regular pokeballs. Use then when a regular pokeball would be useless.",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Ultra Ball',
      description: "An ultra-high-performance Poke Ball with a 2x Catch Rate.",
      shine: 70,
      price: 1200,
      rarity: 7,
      color: '#000',
      faces: 6,
      images: [
        "images/ball-06.png",
        "images/ball-07.png",
        "images/ball-10.png"
      ],
      reviews: [{
        stars: 5,
        body: "Out of all the ones you listed Ultra ball would be the best.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Three relatively common pokeballs would be more effective than an Ultra Ball (2X Catch Rate).",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your money!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];
})();