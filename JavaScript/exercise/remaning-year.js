function lifeINWeeks(age){
    var untilAge =90;
    
    var yearsRemaning = untilAge - age;
    var days = yearsRemaning * 365;
    var weeks = yearsRemaning * 52;
    var months = yearsRemaning * 12;
    console.log(`You have ${days} days, ${weeks} weeks and ${months} months left`);
}

lifeINWeeks(12)
// 19