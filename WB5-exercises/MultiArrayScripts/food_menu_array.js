//EXERCISE 2 / SLIDE-39 / PAGE 1-35
let menu = [
    [   /*Breakfast items*/
        { item: "Sausage and Egg Biscuit", price: 3.69 },
        { item: "Bacon and Egg Biscuit", price: 3.49 },
        { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
    [ /*Lunch items*/
        { item: "Burger", price: 5.36 },
        { item: "Fries", price: 3.00 },
        { item: "Milkshake", price: 8.37 },
    ],
    [   /*Dinner items*/
        { item: "Steak", price: 27.23 },
        { item: "Pork chop", price: 12.27 },
        { item: "Mashed potatoes", price: 2.00 },
    ]
];

//Add objects for lunch and dinner menu
const BREAKFAST = 0;
const LUNCH = 1;
const DINNER = 2;

const TITLES = ["breakfast items", "lunch items", "dinner items",];

function showItem(item) {
    //USE TABS (\t) TO LINE EM UP
    console.log("\t", item.price, "\t", item.item) 
}

function showItemsForMealTime(meal) {
    //Show a meal title based on the meal index 
    console.log(TITLES[meal]);

    //show the items for the selected meal
    menu[meal].forEach(showItem); //THIS IS THE KEY PART OF THE LONG ANSWER
}

let meal = BREAKFAST; // 0==BREAKFAST
showItemsForMealTime(meal);

//Test with the other possible meal index values 1 and 2
showItemsForMealTime(LUNCH);
showItemsForMealTime(DINNER);

console.log("AGAIN: ")
const periods = [BREAKFAST, LUNCH, DINNER];
periods.forEach(meal => showItemsForMealTime(meal));