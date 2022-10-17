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
        CourseId: "PROG500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

//QUESTION 1
function isIdProg200(course){
    // if(course.CourseId == "PROG200"){
    //     return true;
    // }else{
    //     return false;
    // };
    return (course.CourseId == "PROG200"); 
}
let q1match = courses.find(isIdProg200);
console.log(q1match);
console.log(q1match.StartDate);
//console.log(courses.find(isIdProg200).StartDate);

//All IN ONE LINE - ANONYMOUS FUNCTION
console.log(courses.find((c) => c.CourseId == "PROG200").StartDate);

//QUESTION 2
function isIdProg500(course){
    // if(course.CourseId == "PROG500"){
    //     return true;
    // }else{
    //     return false;
    // };
    return (course.CourseId == "PROG500");    //JS autimatically addresses this as a true or false and returns the result
}
// let q2match = courses.find(isCourseIdProg500)
// console.log(q2match);
// console.log(q2match.StartDate);

console.log(courses.find(isIdProg500).Title);
//ALL IN ONE
console.log(courses.find((c) => c.CourseId == "PROG500").StartDate);

//QUESTION 3

// function lessThan50(c){
//     return Number(c.Fee) <= 50;
// }

// let matchesLessThan50 = courses.filter(lessThan50);
// for(i = 0; i < matchesLessThan50.length;i++){
//     console.log(matchesLessThan50[i].Title);
// }

//ALL IN ONE LINE
courses.filter(c => c.Fee <= 50).forEach(c=>console.log(c.Title));

//USE: find() and filter() to ansewer these questions

//When does the PROG200 course start? X

//What is the title of the PROG500 course? X

//What are the titles of the courses that cost $50 or less?

//What classes meet in "Classsroom 1"?





//MY FIRST ORIGINAL ATTEMPT
/*
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
let courseVal = ["PROG100", "PROG200", "PROG300", "PROG400", "PROJ500",];
//getDetails("PROJ500");
courseVal.forEach(getDetails);
*/