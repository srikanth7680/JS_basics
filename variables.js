
/*
comment

console.log("something");

#####Today topics        (DATATYPE NUMBERS)
console.log("something")
var x = 100
console.log(x);
/*console.log(y) If you try to access undeclared variable it will occcur Reference Error*/
/*console.log(y);
var y = 20;
compiled version of above js code
var x,y;

x = 100;
console.log(x);
console.log(y);
y = 20; */

/*let x = 10;
console.log(x);
console.log(y);
let y = 20; */


/*#### STRING DATATYPE*/
const str1 = "I like apple";
typeof(str1);
console.log(str1)
/*Inbuilt methods*/
console.log(str1.replace('apple','java'));
console.log(str1.substring(7));
console.log(str1.substring(2,6));
console.log(str1.substr(-6));
console.log(str1.split());
console.log(str1.split(''));
console.log(str1.split(' '));
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.charAt(5));
console.log(str1.slice(7));
console.log(str1.slice(2,6));
console.log(str1.slice(-6));
console.log(str1.charCodeAt(0));
console.log('A'.charCodeAt(0));
console.log('Z'.charCodeAt(0));
console.log('a'.charCodeAt(0));
console.log('z'.charCodeAt(0));
console.log(str1.charCodeAt(5));
console.log(str1.concat(" Technologies"));
console.log('a' > 'A');
console.log('Ab' < 'Aa');
console.log('Apple'.localeCompare('apple'))
console.log('Apple'.localeCompare('Apple'))
console.log('apple'.localeCompare('Apple'))

/*convert true to false using!*/
x = new Boolean(!null);
console.log(x);
/* parsingInt converting float to Int*/
x = parseInt("12.24")
console.log(x);
/* parsingInt converting float to Int*/
x = parseFloat("12.5")
console.log(x);
/* parsingInt converting float to Int*/
x = parseInt("12.24")
y = parseFloat("12.5")
console.log(x,y);
/*

*/
x = 12.5
console.dir(x.__proto__);// immediate parent
console.dir(x.__proto__.__proto__);// super parent

