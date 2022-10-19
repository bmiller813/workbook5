//EXERCISE 3 (BONUS) / SLIDE - 32 / PAGE 1-28 - 30

let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("5-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

// Which vehicles are RED?
//console.log(vehicles.find(r => r.color == "Red").licenseNo); 
//Ask if there is a way to use find to get same result as filter (function)
let vColor = vehicles.filter(r => r.color == "Red")
vColor.forEach(r => console.log("Red Vehicles: " , r.licenseNo));

// Which vehicles have registrations that are expired?
let vRegExp = vehicles.filter(e => e.registrationExpires < new Date())
vRegExp.forEach(r => console.log("Expired Registration: " , r.licenseNo));

// Which vehicles that hold at least 6 people?
let minCap = vehicles.filter(h => h.capacity >= 6)
minCap.forEach(r => console.log("Minimum Capacity: " , r.licenseNo));

// Which vehicles have license plates that end with "222"?
let endsIn222 = vehicles.filter(e => e.licenseNo.endsWith("222"))
endsIn222.forEach(r => console.log("Ends in 222: " , r.licenseNo));