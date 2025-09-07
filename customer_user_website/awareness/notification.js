// Truthy and Falsey Values, &&, NOT, AND, OR, ==, !=, ===, !==
// Numbers, strings and Boolean can only be converted
// How to convert values to boolean? Bolean values are true or false.
//  Truthy are true and fasley values are false but they are not false in themselves but they will be false when it is converted to bolean.
//  There are five falsey values: 0, undefined, null, NaN, "" (empty string)
//  While truthy value is true when it is not any value of falsey values
// console.log(Boolean(0));

// let accBalance = {};
// if (accBalance) {
//   console.log("You have some cash");
// } else {
//   console.log("issuficient Fund");
// }
// let red = null;
// if (red) {
//   console.log("White");
// } else {
//   console.log("Yellow");
// }

// Logical operators: (AND, OR, NOT)
// AND - with this operator, when two or more conditions are true it automatically means true but if one value is fasle it will pront out false
// OR Operator - if a side out of all sides is true it will print out true. It will only  return false if all sides are false
// NOT - negative/oposite
//  AND - &&
// OR -||
// NOT -!

// const writeCode = true;
// const writeMovies = false;

// console.log(writeCode && writeMovies);
// console.log(writeCode || writeMovies);
// console.log(!writeCode);
// console.log(!writeMovies);

// How to take decision with logical operators
// let canEnrole = false;
// let student = false;

// const student1 = canEnrole && student;
// const student2 = canEnrole || student;
// const student3 = canEnrole && !student;
// const student4 = !canEnrole || student;

// if (student1) {
//     console.log("Welcome to Vephla")
// } else {
//     console.log("You need to pay 30% before you can be admitted")
// }
// if (student2) {
//     console.log("Welcome to Vephla")
// } else {
//     console.log("You need to pay 30% before you can be admitted")
// }
// if (student3) {
//     console.log("Welcome to Vephla")
// } else {
//     console.log("You need to pay 30% before you can be admitted")
// }
// if (student4) {
//     console.log("Welcome to Vephla")
// } else {
//     console.log("You need to pay 30% before you can be admitted")
// }
// three values
// let canEnrole = false;
// let student = false;
// let scholarship = true;

// console.log((!canEnrole && student) || scholarship);

// let age = "2"
// let fit = "18"

// if (age >=18 || fit <= 50) {
//     console.log("you passed your driving test");
// } else{
//     console.log("you failed your driving test");
// }

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropdownbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }


// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(""));

// Task 49B
let drink;

if (drink) {
  console.log("Don't Drink Malt");
} else {
  console.log("Drink Fanta");
}

let animal = 0;

if (animal) {
  console.log("Goat");
} else {
  console.log("Cow");
}

let color = "";

if (color) {
  console.log("Green");
} else {
  console.log("Red");
}

// Access control with AND/OR

let hasLicense = true;
let isSober = true;
let isUnderObservation = true;

const driver = hasLicense && isSober !isUnderObserva

if (hasLicense) {

}