// EXERCISE 1 / SLIDE-31 / PAGE 1-27

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

// a. Who is the Academy Member whose ID is 187?

console.log("ID 187: " , academyMembers.find(p => p.memID == 187).name);

// b. Who has been in at least 3 films?

academyMembers.filter(m => m.films.length >= 3).forEach(m => console.log("Films >= 3: " , m.name)); 

// c. Who has a name that starts with "Bob"?

academyMembers.filter(b => b.name.startsWith("Bob")).forEach(b => console.log("Names With Bob: " , b.name));

// d. HARDER: Which Academy Members have been in a film that starts with "A"

// let matches = academyMembers.filter(a => a.films.filter(t => t.startsWith("A")).length > 0); //THIS WORKS BUT IS LONG AND NOT SUPER CLEAR
function startsWithA(title){
    return title.startsWith("A");
}
function hasFilmA(member){
    return member.films.filter(startsWithA).length > 0;
}
function printMatch(member){
    console.log("Has > 0 films starting with A: ", member.name);
}
let matches = academyMembers.filter(hasFilmA);
matches.forEach(printMatch);

