//EXAMPLE
let menu = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice Tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},

];
//find a subset of elements that match a condition
let searchCategory = "Drink";
let matching = [];
let numItems = menu.length;
for(let i =0; i <numItems; i++){
    if(menu[i].category == searchCategory){
        matching.push(menu[i]);
    }
}
if(matching.length != 0){
    let numMatches = matching.length;
    for(let i = 0; i < numMatches; i++){
        console.log(matching[i].item + " costs $" + matching[i].price);
    }
}