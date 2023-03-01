var gets_sunshine = false;
var ounces_of_water = 20;
if (gets_sunshine === true && ounces_of_water >= 10){
    console.log("Your plant will thrive")
} else if (gets_sunshine === true || ounces_of_water >= 10) {
    console.log("Your plant might do ok.")
} else {
    console.log("This plant will die!")
}