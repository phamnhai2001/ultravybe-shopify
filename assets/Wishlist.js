(function (Wishlist, $) {

  var $wishlistButton = $('.wishlist-btn');
  var $wishlistTile = $('.item_favorite');
  var $wishlistItemCount = $('.wishlist-item-count');
  var numProductTiles = $wishlistTile.length;

  var wishlist = localStorage.getItem('user_wishlist') || [];
  if (wishlist.length > 0) {
    wishlist = JSON.parse(localStorage.getItem('user_wishlist'));
  }

  var wishlistOption = localStorage.getItem('product_wishlist') || [];
  if (wishlistOption.length > 0) {
    wishlistOption = JSON.parse(localStorage.getItem('product_wishlist'));
  }

  $('.btn_del').click(function(){
    var productHandle = $wishlistTile.attr ('data-product-handle');
    var removeIndex = wishlist.indexOf (productHandle);
    wishlist.splice (removeIndex, 1);
    localStorage.setItem ('user_wishlist', JSON.stringify (wishlist));
    var productId = $(this).parent().parent().attr('data-product-id');
    console.log (wishlistOption,' - ', productId);
    var result = $.grep (wishlistOption, function (e) {
      return e.productId != productId;
    });

    console.log(result);
    localStorage.setItem ('product_wishlist', JSON.stringify (result));

    if(wishlist.length == 0 ){
      $ ('#list_favorite_empty').addClass ('is_visible');
      $ ('#list_favorite_exist').removeClass ('is_visible');
    }
    // Wishlist.init();
  });
  /*
   * Update button to show current state (gold for active)
   */
  var animateWishlist = function (self) {
    $(self).toggleClass('is-active');
  };

  /*
   * Add/Remove selected item to the user's wishlist array in localStorage
   * Wishlist button class 'is-active' determines whether or not to add or remove
   * If 'is-active', remove the item, otherwise add it
   */
  var updateWishlist = function (self) {
    var productHandle = $(self).attr('data-product-handle');
    var isRemove = $(self).hasClass('is-active');

    /* Remove */
    if (isRemove) {
      var removeIndex = wishlist.indexOf(productHandle);
      wishlist.splice(removeIndex, 1);
      localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
    }
    /* Add */
    else {
      wishlist.push(productHandle);
      localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
    }
    console.log("Add Wish List: ",JSON.stringify(wishlist));
  };


  /*
   * Loop through wishlist buttons and activate any items that are already in user's wishlist
   * Activate by adding class 'is-active'
   * Run on initialization
   */
  var activateItemsInWishlist = function () {
    $wishlistButton.each(function () {
      var productHandle = $(this).attr('data-product-handle');
      if (wishlist.indexOf(productHandle) > -1) {
        $(this).addClass('is-active');
      }
    });
  };

  /*
   * Loop through product titles and remove any that aren't a part of the wishlist
   * Decrement numProductTiles on removal
   */
  var displayOnlyWishlistItems = function () {
    $wishlistTile.each(function () {
      var productHandle = $(this).attr('data-product-handle');
      var productId = $ (this).attr ('data-product-id');
      if (wishlist.indexOf(productHandle) === -1) {
        $ (this).parent ().remove ();
        $(this).remove();
        numProductTiles--;
      } else {
      console.log (wishlist, ' - ', productHandle);
        $(this).removeClass('hide');
        var a = $(this);
        // console.log($(this).children().first().children().last().children().last());
        for(var i = 0; i< wishlistOption.length; i++){
          if(wishlistOption[i].productId == productId){
            $.each(wishlistOption[i], function( key, value ) {
              if(key != "productId"){
                var para = document.createElement("span");
                var node = document.createTextNode(key + " : "+ value);
                para.appendChild(node);
                a.children().first().children().last().children().last().append(para);
              }
            });
          }
        }
      }
    });
  };

  /*
   * Check if on the wishlist page and hide any items that aren't a part of the wishlist
   * If no wishlist items exist, show the empty wishlist notice
   */
  var loadWishlist = function () {

      setTimeout(function() {
          if (window.location.href.indexOf('pages/wishlist') > -1) {
              displayOnlyWishlistItems ();
          }
      }, 1000);
  };

  /**
   * Display number of items in the wishlist
   * Must set the $wishlistItemCount variable
   */
  var updateWishlistItemCount = function () {
    if (wishlist) {
      $wishlistItemCount.html(wishlist.length+"アイテム");
    }
  };

$ ('#wish_list_btn').click (function (e) {
  e.preventDefault ();
  showIconWishlist (this);
  var btn = $ ('.wishlist-btn');
  updateWishlist (btn);
  animateWishlist (btn);
});



  var showIconWishlist = function (self) {
    if($(self).hasClass('active_favorite')){
      console.log("no!!!");
      $ (self).addClass('active_favorited');
      $ (self).removeClass ('active_favorite');
    }
    else if($(self).hasClass('active_favorited')){
      console.log ('yes!!!');
      $(self).addClass('active_favorite');
      $ (self).removeClass ('active_favorited');
    }
  };

  var bindUIActions = function () {
    // $wishlistButton.click(function (e) {
    //   e.preventDefault();
    //   updateWishlist(this);
    //   animateWishlist(this);
    // });

  }

  Wishlist.init = function () {
    loadWishlist ();
    bindUIActions();
    activateItemsInWishlist();
    updateWishlistItemCount();
  };
}(window.Wishlist = window.Wishlist || {}, jQuery, undefined));
