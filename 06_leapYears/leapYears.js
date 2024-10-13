const leapYears = function(leapYear) {
if(!Number.isInteger(leapYear)) return "ERROR";
if(leapYear%4 == 0 && leapYear%400 == 0) return true;
else if(leapYear%4 == 0 && leapYear%100 ==0) return false;
else if(leapYear%4 == 0) return true;
else return false;
};

console.log(leapYears(1997));
// Do not edit below this line
module.exports = leapYears;
