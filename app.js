// const calc = {
//  add: function (a, b) {
//     return a + b; },
    
    
// subtraction: function (a,b){
//     return a - b;},
    
//     increase: function(a, b){
//         return a * b;},

//         tobe: function (a, b) {
//             return a / b; }

// };



// const result = calc.tobe(82,4) 

// console.log (result)

// const car = {
//     barnd: "MRC",
//     name: "CLS 63 AMG",
//     year: "2008",
//     color: "black",
//     language: "German",
//     hp: "14000",
//     Числодверей:"4",
//     Маркадвигателя: "M 157 DE 55 AL",
//     Крыша: "Регулируемый люк",

//     getFullname: function () {
//         console.log(this.name + " " + this.barnd + this.year + this.Числодверей + this.language + this.barnd) 
//     }
// };

// car.getbarnd()



// let product = [
//     {
//         name: "olma",
//         price: "12000"
//     },
//     {
//         name:"kartoshka",
//         price:"5000"
//     },
//     {
//         name:"non",
//         pricwe:"2800"
//     }
// ]


// const people = [
//     {name: "abdulziz", age: 32},
//     {name: "Erkin", age: 22},
//     {name: "temur", age: 41},
//     {name: "erknberali", age: 41},
// ];

// function getAverageAge(arr) {
//     if (arr.length === 0) {
//         return 0; 
//     }

//     const totalAge = arr.reduce((sum, person) => sum + person.age, 0);
//     const averageAge = totalAge / arr.length;
//     return averageAge;
// }

// const averageAge = getAverageAge(people);
// console.log("Ortacha yosh: " + averageAge);




                                         //////////////////////////////           uy ishi//////////////////


// 1 -misol


// var a = [2, 4, 6, 8, 10];

// var sum = 0;
// for (var i = 0; i < a.length; i++) {
//     sum += a[i];
// }

// console.log("Massivning barcha qiymatlari yig'indisi:", sum);

///2-misol

// var n = 5;
// var myArray = [];

// for (var i = 0; i < n; i++) {
//     myArray[i] = i + 1; 
// }

// var stringArray = myArray.map(String);

// // Natijani chiqaramiz
// console.log("Qiymatlar:", stringArray);

// 3-misol//////////////////////


var n = 5;
var myArray = [];

for (var i = 0; i < n; i++) {
    myArray[i] = i + 1; 
}


function chiqarMurakkabIndeks(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (isMurakkab(arr[i])) {
            console.log("Indeks:", i, "Qiymat:", arr[i]);
        }
    }
}


function isMurakkab(number) {
    if (number < 2) {
        return false;
    }
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return true;
        }
    }
    return false;
}

chiqarMurakkabIndeks(myArray);

// 4-misol

var a = [];
for (var i = 0; i <= 10; i++) {
    a[i] = i * 10;
}

var toqSum = 0;
var juftSum = 0;

for (var i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
        juftSum += a[i];
    } else {
        toqSum += a[i];
    }
}

console.log("To'qlar yig'indisi:", toqSum);
console.log("Juftlar yig'indisi:", juftSum);

// 5-msiol

var n = prompt("Massiv uzunligini kiriting");
n = parseInt(n, 10);

var myArray = [];

for (var i = 0; i < n; i++) {
    var userInput = prompt("Qiymatni kiriting #" + (i + 1));
    userInput = parseInt(userInput, 10); 
    myArray[i] = userInput;
}


var sum = 0;

for (var i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

console.log("Massivning qiymatlarining yig'indisi:", sum);


/// 5-misol

var n = prompt("Massiv uzunligini kiriting");
n = parseInt(n, 10);


var myArray = [];

for (var i = 0; i < n; i++) {
    var userInput = prompt("Qiymatni kiriting #" + (i + 1));
    userInput = parseInt(userInput, 10); 
    myArray[i] = userInput;
}

var engKichik = Infinity; 
for (var i = 0; i < myArray.length; i += 2) {
    if (myArray[i] < engKichik) {
        engKichik = myArray[i];
    }
}

console.log("Juft indekslar ichidan eng kichik qiymat:", engKichik);
