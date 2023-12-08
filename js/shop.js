// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
let products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.

let cart = [];
let total = 0;
// let cartList = [];

function updateCartCount() {                                                // calcula y muestra los productos que hay dentro del carrito
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById("count_product").innerHTML = totalCount;
}


// Exercise 1
function buy(id) {

    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    
    let productFound = false;                                                       

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity++;
            productFound = true;
            break;
        }
    }

    if (!productFound) {
        const foundProduct = { ...products.find(p => p.id === id), quantity: 1 };
        cart.push(foundProduct);
    }
   
    calculateTotal();
    updateCartCount();
    printCart();                                                  

  
    
    function printCart(cart) {
        const cartModal = document.getElementById('cartModal');
        const tableBody = cartModal.querySelector('tbody');
        tableBody.innerHTML = '';                                                
     
}}


// Exercise 2
function cleanCart() {                                                             

    cartList = [];

    cart = [];
    console.log('Clean cart:', cart);
    document.getElementById("total_price").innerHTML = 0;

    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("count_product").innerHTML = cart.length;
}                                                                                  

// Exercise 3
function calculateTotal() {                                                          
    // Calculate total price of the cart using the "cartList" array
    total = cart.reduce((acc, item) => acc + (item.subtotalWithDiscount ?? item.price * item.quantity), 0);


total = isNaN(total) ? 0 : total;

document.getElementById('total_price').innerHTML = total.toFixed(2);
}                                                                                  
                                                                          

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    //??????????????????????????????????????????????????????????????
      if (product.offer && product.offer.number && product.offer.percent) {
        if (product.id === 3 && product.quantity >= product.offer.number) {
            const discountedQuantity = Math.floor(product.quantity / product.offer.number) * product.offer.number;
            const undiscountedQuantity = product.quantity - discountedQuantity;
            const discountedPrice = (product.price * (100 - product.offer.percent)) / 100; // Descuento del 30%
            product.subtotalWithDiscount = (discountedQuantity * discountedPrice) +
                (undiscountedQuantity * product.price);
        } else if (product.id === 1 && product.quantity >= product.offer.number) {
            const discountedQuantity = product.quantity;
            const discountedPrice = (product.price * (100 - product.offer.percent)) / 100; // Descuento del 20%
            product.subtotalWithDiscount = discountedQuantity * discountedPrice;
        } else {
            // No se cumple ninguna oferta, aplica el precio normal
            product.subtotalWithDiscount = product.price * product.quantity;
        }
    } else {
        // El producto no tiene una oferta definida, aplica el precio normal
        product.subtotalWithDiscount = product.price * product.quantity;
    }


}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let cartModal = document.getElementById("cart_list");
    cartModal.innerHTML = "";

    cart.forEach(item => {
        let productRow = document.createElement("tr");
        productRow.innerHTML = `
            <th class="productTitle" scope="row">${item.name}</th>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.subtotalWithDiscount !== undefined ? item.subtotalWithDiscount : item.price * item.quantity}</td>
            <td>
            <button type="button" class="btn btn-danger" id="btnRemoveCart" onclick="removeFromCart(${item.id})">Remove</button>
            </td>
            
        `;
        cartModal.appendChild(productRow);
    });

    let cartTotal$ = document.getElementById("total_price");
   
    cartTotal$.innerText = total.toFixed(2);
   ;
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) { 
     const index = cart.findIndex(item => item.id === id);

        if (index != -1) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;  // Reduce la cantidad de uno en uno
            }else {
                 cart.splice(index, 1); //Elimina el producto si la cantidad es 1
            }
           
            calculateTotal();
            updateCartCount();
            printCart();
        }
    }




function open_modal() {
    printCart();
}





//  SECTION Logo click

document.getElementById("shopNowLink").addEventListener("click", function() {
    window.location.href = "/ruta-de-tu-pagina-principal";
});



