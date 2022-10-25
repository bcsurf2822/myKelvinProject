//Todays forcast is 293 kelvin, it is going to be constant so i am declaring the variable using const
const kelvin = 293;
console.log({kelvin});
//Changing kelvin into celsius by subtracting 273 from 293 
var celsius;
celsius = kelvin - 273;
console.log({celsius});
//Changing celsius into farenheit by using equation Fahrenheit=Celsius*(9/5)+32
var fahrenheit;
fahrenheit = celsius * (9 / 5) + 32;
console.log({fahrenheit});
//Since we usually get a decimal number i will use the math.floor to round down the Fahrenheit temperature
console.log(Math.floor(fahrenheit));
var fahrenheit = 68;
//Use of string interpolation to show the value of Fahrenheit in a sentencee
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
/*I am going to use a similar technique to Convert to the Newton scale
First I am going to convert Celsius by using Newton=Celsius*(33/100)*/
var newton;
newton = celsius * (33 / 100);
console.log({newton});
//I am going to use the math.floor to round down the Newton temperature
console.log(Math.floor(newton));
newton = 6;
console.log(`If we wanted to look at the Newton Scale for todays forcast the temperature would be ${newton}`);
