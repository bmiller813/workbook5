
//EXAMPLE
function isOver60(arrayValue){
    if(arrayValue > 60){
        return true;
    }else{
        return false;
    }
}
let num = [7, 9, 64, 60, 12, 13, 65, 62];
let allOver60 = num.filter(isOver60); 
//returns an array containing [64, 67, 66]
if(allOver60 != undefined){
    console.log(firstValOver60);
}
//1 - 8
else{
    console.log("No values over 60");
}