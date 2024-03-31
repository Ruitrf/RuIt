// Добавление товара в корзину
var addToCartButtons = document.getElementsByClassName("add-to-cart");
var cartItems = document.getElementById("cart-items");

for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function(event) {
    var product = this.parentNode;
    var productName = product.querySelector("h3").textContent;

    var cartItem = document.createElement("li");
    cartItem.textContent = productName;
    cartItems.appendChild(cartItem);
  });
}

// Оформление заказа
var checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", function(event) {
  var cartItemList = cartItems.getElementsByTagName("li");

  if (cartItemList.length > 0) {
    var message = "Вы оформили заказ на следующие товары:\n";
    for (var i = 0; i < cartItemList.length; i++) {
      message += "- " + cartItemList[i].textContent + "\n";
    }
    alert(message);
    cartItems.innerHTML = "";
  } else {
    alert("Корзина пуста. Добавьте товары перед оформлением заказа.");
  }
});
