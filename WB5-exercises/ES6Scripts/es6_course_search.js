//EXERCISE 1 / SLIDE-14 / PAGE 1-10
let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

//Function that gets course name + start day

function getDetails(course) {
    
    for (let i = 0; i < courses.length; i++) {
        let co = courses[i].CourseId
        if (course == co) {
            console.log(co + ": " + courses[i].Title + " begins on " + courses[i].StartDate);
        }else{
            //console.log("Failure");
        };
    };
}
let courseVal = ["PROG100", "PROG200", "PROG300", "PROG400", "PROJ500",]
//getDetails("PROJ500");
courseVal.forEach(getDetails);

//Function  that finds titles of courses that cost $50 or less
function isUnder50(coursePrice){
    if(coursePrice <= 50){
        return true;
    }else{
        return false;
    };
}

let allUnder50 = courses.filter(isUnder50);

if(allUnder50.length < 0){
    console.log(allUnder50);
}else{
    console.log("No Value");
}
