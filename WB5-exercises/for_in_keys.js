//SHOW KEYS AND VALUES FOR ANY OBJECT
function showObject(object){
    for(let key in object){
        const value = object[key];
        console.log(key + ":\t" + value);
        //console.log(`${key}:\t${value}`);
    }
}

//DATA
let personObject = [{
    name: "Pursalane",
    age: 11,
    fav: "black",
    gender: "Female"
}];

showObject(personObject);
//MANY
console.log("\nMANY:\n");
let people = [
    {
        name: "Pursalane",
        age: 11,
        fav: "black",
        gender: "Female"
    },
    {
        name: "Sam",
        age: 12,
        fav: "Green",
        gender: "Male"
    },

];

people.forEach(showObject);
