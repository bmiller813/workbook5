//EXERCISE 1 / SLIDE-39  / PAGE 1-35
let lockerAndAccessCode = [
    ["Locker 1", 135],
    ["Locker 2", 159],
    ["Locker 3", 642]
];

//What do you think these will output? Make a prediction before running code.
console.log(lockerAndAccessCode[2][1]);
console.log(lockerAndAccessCode[1]);

//index out of range as ther is no third value on the inner lists
// yields undefined
console.log(lockerAndAccessCode[2][2]);

//SLIDE 37
let teamMembers = [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Patti"],
    ["Leslye", "Randy", "Mollye", "Ranse"],
    ["Eloise", "Robert"]
    ];
    let numTeams = teamMembers.length;
for (let i = 0; i < numTeams; i++) {
console.log("-----------");
console.log("Team " + (i + 1));
console.log("-----------");
let numMembers = teamMembers[i].length;
for (let j = 0; j < numMembers; j++) {
console.log(teamMembers[i][j]);
}
}