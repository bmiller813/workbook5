// EXERCISE 1 / SLIDE-31 / PAGE 1-27

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
];

// TODO: fill the array with 10 candies of various  price ranges

// Which candies costs less than $4.00?
//console.log(products.filter(p=>p.price < 4)); //This does the same as line 14 basically
products.filter(p=>p.price < 4).forEach(p => console.log("UNDER $4:",p));

// Which candies has "M&M" its name?
products.filter(p=>p.product.includes("M&M")).forEach(p => console.log("M&M Product:",p));

// Do we have a product called "Swedish Fish"? (use find(faster) or filter(more normal)) true==yes
console.log(products.find(p => p.product == "Swedish Fish") != undefined);