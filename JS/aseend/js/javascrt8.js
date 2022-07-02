// var text = " Akram Abdullayev    ";

// console.log(text.replace(/ |    /g,''));

// console.log(text.length);

// console.log(text.trim().length);

// var text = "akram abdullayev";

// console.log(text.toLowerCase());

// console.log(text.toUpperCase());

var text = "akram abdullayev";

// console.log(text.slice(0,5));
// console.log(text.slice(5));
// console.log(text.slice(-5));

var ism = text.charAt(0).toUpperCase() + text.slice(1,5);
var sharif = text.charAt(6).toUpperCase() + text.slice(7);
console.log(ism +' '+ sharif);  
