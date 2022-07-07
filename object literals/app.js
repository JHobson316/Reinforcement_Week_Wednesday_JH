"use strict"

// 1. Create a javascript object that represents a food store product.
// The item should contain a name, description, bulk price, and consumer price. 
// console.log the result
function Product(name, description, bulkPrice, consumerPrice){
    this.name = name;
    this.description = description;
    this.bulkPrice = bulkPrice;
    this.consumerPrice = consumerPrice;
}

let clayPot = new Product("Clay Pot", "Decorative blue and green plant pot", 50.00, 3.99);
console.log(clayPot);

// 2. Create a single method for printing the above object's name and description.

function stickerDescription(product){
    console.log(`Product name: ${product.name}`);
    console.log(`Product Description: ${product.description}`);
}
stickerDescription(clayPot);

// 3. Create another method on the object from step 1 that returns a product's price with a discount applied.
// Supposing the product's price is 5, calling the discount method with a discount of 15% (0.15) will return 4.25.

function discount(product, discount){
    let percent = (discount)/100;
    let discountedAmount = product.consumerPrice* percent;
    discountedAmount = discountedAmount.toFixed(2);
    let discountedPrice = product.consumerPrice - discountedAmount;
    console.log(`The discounted price of that item at ${discount}% off is ${discountedPrice}.`);
}
discount(clayPot, 15);

// 4. Use a for-in loop to print out each property of the method (requires research from you :) )

for (var key in clayPot) {
    if (clayPot.hasOwnProperty(key)) {
        console.log(key + " -> " + clayPot[key]);
    }
}