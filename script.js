// ---->47

// const gas = [10, 20, 38];
// const food = [150, 320, 338];

// function calculateTotal(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   if (total > 100) {
//     console.log(`bro you have spent ${total} on gas are you crazy`);
//   }
//   console.log(`you are good total is less than 100`);
//   return total;
// }

// const gasTotal = console.log(calculateTotal(gas));
// const foodTotal = console.log(calculateTotal(food));
// const randomTotal = console.log(calculateTotal([12, 52, 12, 45]));

// ------>48 value vs Reference

// const num1 = 1;
// const num2 = num1;

// num2 = 7;
// console.log(`the first value is ${num1}`);
// console.log(`the second value is ${num2}`);

// let person = { name: 'bob Burrito' };
// let person2 = person;
// person2.name = 'susy';
// console.log(`the name of first person is ${person.name}`);
// console.log(`the second person is ${person2.name}`);

// -->49 null & undefined

// let number = 20 + null;
// console.log(number);

// let number2 = 20 + undefined;
// console.log(number2);

// -->50 Truthy and falsy

// const bool1 = true;
// const bool2 = 2 > 1;

// const text = 'gaurav';

// if (text) {
//   console.log('hey the value Truthy');̥
// } else {
//   console.log('hey the value Falsy');
// }

// if (bool1) {
//   console.log(`Hey it works!`);
// }
// if (bool2) {
//   console.log(`Hey it also works!`);
// }

// -->51- Terenary Operator

// const value = 1 <= 1;
// value ? console.log('value is true') : console.log('value is false');

// --> 52-Global Scope

// --> 53-Local Scope

// --> 54 - variable lookup
// {}- code block

// const globalNumber = 5;
// function add(num1, num2) {
//   // const globalNumber = 20;
//   const result = num1 + num2 + globalNumber;
//   function multiply() {
//     // const globalNumber = 100;
//     const multiplyResult = result * globalNumber;
//     console.log(multiplyResult);
//   }

//   multiply();
//   return result;
// }
// console.log(add(3, 4));

// --------------> CallBack Functions, Higherorder functions

// function morning(name) {
//   // console.log(`good morning Bob`);
//   return `Good morning ${name.toUpperCase()}`;
// }
// function greet(name, cb) {
//   const myName = 'john';
//   console.log(`${cb(name)}, my name is ${myName}`);
// }

// greet('bobo', morning);
// greet('peter', morning);

// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an an argument and executed inside that function

// function greetMorning(name) {
//   const myName = 'john';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = 'susan';
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }

// -----------------> 57.forEach
// forEach does not return new array
// it returns the same array

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'Boss' },
// ];

// function showPerson(person) {
//   console.log(person.position.toUpperCase());
// }
// function GoPerson(person) {
//   console.log(person.position.toLowerCase());
// }
// people.forEach(showPerson);
// people.forEach(GoPerson);

// ------------------> 58.Map

// Map returns new array
// it does not change size of original array
// uses values from original array when makin new one

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'Boss' },
// ];

// const ages = people.map(function (person) {
//   return `${person.age}  ${person.name}`;
// });
// const newPeople = people.map(function (person) {
//   return {
//     firstName: person.name.toUpperCase(),
//     oldAge: person.age + 20,
//   };
// });
// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`;
// });

// document.body.innerHTML = names.join('');

// console.log(names);

// ------------------> 59.filter

// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

// const people = [
//   { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' },
//   { name: 'susy', age: 30, position: 'Boss' },
//   { name: 'anna', age: 35, position: 'The Boss' },
// ];

// const youngPeople = people.filter(function (person) {
//   return person.age <= 25;
// });
// const developers = people.filter(function (person) {
//   return person.position === 'developer';
// });

// console.log(developers);

// -------------------------------> 60.find

// returns single instance - (in this case object )
// returns first match, if no match undefined
//  great for getting unique value

// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1 },
//   { name: 'peter', age: 25, position: 'designer', id: 2 },
//   { name: 'susy', age: 30, position: 'Boss', id: 3 },
//   { name: 'anna', age: 35, position: 'The Boss', id: 4 },
// ];

// const names = ['bob', 'peter', 'susy'];

// console.log(
//   names.find(function (name) {
//     return name === 'bob';
//   })
// );
// const person = people.find(function (person) {
//   return person.id === 3;
// });

// const person2 = people.filter(function (person) {
//   return person.id === 3;
// });

// console.log(person2[0].name);

// ------------------------------>61.Reduce

// reduce iterates, callback function
// reduces to a single value -number,array, object
// 1 parameter ('acc')-total of all calculations
// 2 parameter ('curr')- current iteration/value

// const people = [
//   { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
//   { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
//   { name: 'susy', age: 30, position: 'Boss', id: 3, salary: 400 },
//   { name: 'anna', age: 35, position: 'The Boss', id: 4, salary: 500 },
// ];

// const total = people.reduce(function (acc, currItem) {
//   console.log(`total ${acc}`);
//   console.log(`current money :${currItem.salary}`);
//   acc += currItem.salary;
//   return acc;
// }, 0 );

// ---------------------------------------->62.Math

// Math has standard built-in objects - always available

/*const number = 4.56789;
const result = Math.floor(number);

const number1 = 4.56789;
const result1 = Math.ceil(number);
*/
// const number2 = 89;
// const result2 = Math.sqrt(number2);

// const result = Math.PI;
// const result = Math.min(4, 45, 5, 6, 62);
// const result = Math.max(4, 45, 5, 6, 62);
// const result = Math.random();
// const result = Math.ceil(Math.random() * 10);

// console.log(result);

// --------------------------------------->63.Date Object
/*
const months = [
  'January',
  'february',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'september',
  'october',
  'November',
  'December',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const date = new Date('09/02/2002');
// const date = new Date();
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = sentence;

*/

//  ***************#####---DOM---#####*******************

// -------------------------------->65{{{{{----DOM----}}}}
// const heading = document.querySelector('h1');
// const bg = document.querySelector('body');
// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'yellow';
// btn.style.color = 'red';
// bg.style.backgroundColor = 'lightgreen';

// // document.body.style.backgroundColor = 'lightblue';
// document.body.style.backgroundColor = 'lightblue';
// // heading.style.color = 'yellow';
// // 66
// type  "console.dir(element_name);" to find the type of object in node element

// 67-{get element by id}

// const heading = document.getElementById('heading');

// heading.style.backgroundColor = 'blue';
// heading.style.color = 'yellow';

// 68 ------------------>get element by tag name

// tag name selects the tagname ex:h1,body etc to apply effects for  groupof elements of that particular tag

// 69 get element by class name  done

//  70 query selector and querySelector all

// 71,72. Navigate The DOM --Children

// const result = document.querySelector('#result');
// const parent = result.parentElement;
// parent.style.backgroColor = 'red';

// 72. Navigate the Dom ==>NextSIBLING,PREVIOUSSIBLING
// const first = document.querySelector('.first');
// const second = (first.nextSibling.nextSibling.style.color = 'black');

// const last = document.querySelector('#last');
// const third = (last.previousSibling.previousSibling.style.color = 'blue');

// console.log(third);

// 74. Navigate the Dom ==>NextELEMENTSIBLING,PREVIOUSELEMENTSIBLING...

// const first = document.querySelector('.first');
// const second = (first.nextElementSibling.style.color = 'black');

// const last = document.querySelector('#last');
// const third = (last.previousElementSibling.style.color = 'Red');
// console.log(third);

// 75.textContent nodeValue
// const item = document.getElementById('special');
// const value = item.firstChild.nodeValue;
// const easyValue = item.textContent;
// console.log(easyValue);

// 76.get Attribute , set Attribute
// getAttribute();
// setAttribute();

// const first = document.querySelector('.first');
// const idValue = first.getAttribute('id');
// // console.log(idValue);

// const link = document.getElementById('link');
// const showLink = link.getAttribute('href');
// console.log(showLink);

// const last = link.nextElementSibling;
// last.setAttribute('class', 'first');
// last.textContent = 'i also have a class of first';
// console.log(last);

// const links = document.querySelectorAll('.first');
// console.log(links);

// 77.classList and className

// className
// classList

// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');

// const classValue = first.className;
// // console.log(classValue);
// second.className = 'colors text';

// // third.classList.add('colors');
// // third.classList.add('text');
// third.classList.add('text', 'colors');
// third.classList.remove('text');
// // const classValue = third.classList;
// // console.log(classValue);

// let result = third.classList.contains('colors');
// if (result) {
//   third.classList.add('text');
// }else{
//   console.log("add it idiot")
// }

// 78.createElement-createTextNode-appendChild

// createElement('element');
// createTextNode('text content');
// element.appendChild(childElement);

// const result = document.querySelector('#result');
// // create  empty element
// const bodyDiv = document.createElement('div');

// const text = document.createTextNode('Hi this is gaurav pawar');

// bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);

// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');

// heading.appendChild(headingText);
// result.appendChild(heading);

// 79.insertBefore

//  createElement("element")
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element',"Location" );

// const result = document.querySelector('#result');
// create  empty element
// const bodyDiv = document.createElement('div');

// const text = document.createTextNode('Hi this is gaurav pawar');

// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv, result);
// // result element
// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');

// heading.appendChild(headingText);
// heading.classList.add('blue');

// result.insertBefore(heading, first);

// console.log(result, children);

// 80.replaceChild==> status done
// 81.prepend innerText ===> status done
// const heading = document.createElement('h2');
// heading.innerText = `I am hero `;
// document.body.prepend(heading);
// heading.classList.add('colors', 'text');

// 82.removeChild==> status Done

// const result = document.querySelector('#result');
// // result.classList.add('colors', 'text');
// // result.classList.remove('colors');
// const heading = result.querySelector('h1');

// result.removeChild(heading);

// 83.innerHtml and textContent
// innerHtml
// textContent

// const list = document.getElementById('first');
// const div = document.getElementById('second');
// const item = document.querySelector('.item');

// console.log(div.textContent);
// console.log(list.innerHTML);
// console.log(list.textContent);

// const randomVariable = 'Tatti';

// const ul = document.createElement('ul');
// ul.innerHTML = `<li class="item">${randomVariable}</li>
// <li>List item</li>`;
// document.body.appendChild(ul);

// 84.change css with style Property

// const list = document.getElementById('first');

// list.style.backgroundColor = 'blue';
// list.style.color = 'yellow';
// list.style.fontSize = '7rem';
// list.style.textTransform = 'capitalize';

// Best way to do is like the below one

// list.classList.add('colors');

// 85.event overview done
// 86.Click event
// select element
// addEventListener()
// what event, what to do

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// function changeColors() {
//   let hasClass = heading.classList.contains('colors');
//   if (hasClass) {
//     heading.classList.remove('colors');
//   } else {
//     heading.classList.add('colors');
//   }
// }

// btn.addEventListener('click', changeColors);

// 88.Mouse Events
// click - fires fter full action occur
// mousedown- button is presssed
// mouseup- button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// btn.addEventListener('click', function () {
//   console.log('you clicked me');
// });

// btn.addEventListener('mousedown', function () {
//   console.log('Down');
// });

// btn.addEventListener('mouseup', function () {
//   console.log('up');
// });

// btn.addEventListener('mouseenter', function () {
//   heading.classList.add('colors');
// });

// btn.addEventListener('mouseleave', function () {
//   heading.classList.remove('colors');
// });

// 89.key Events

// keypress - when key is pressed
// keydown - when key is down
// // keyup - when key is released

// const nameInput = document.getElementById('name');

// // nameInput.addEventListener('keypress', function () {
// //   console.log('you pressed a key');
// // });
// // nameInput.addEventListener('keydown', function () {
// //   console.log('key is down');
// // });
// nameInput.addEventListener('keyup', function () {
//   console.log(nameInput.value);
// });

// 90.Event objects

// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault()- prevents default behaviour

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h1');

// heading.addEventListener('click', function (event) {
//   console.log(event.currentTarget);
// });

// btn.addEventListener('click', function (event) {
//   event.currentTarget.classList.add('colors');
// });

// btn.addEventListener('click', function (event) {
//   event.currentTarget.classList.add('colors');
//   console.log(event.type);
// });

// function someFunc(e) {
//   e.preventDefault();
// }

//91.currentTarget Vs Target
// currentTarget -0 always refers to element to which the event handler has been attached to
// target - identifies teh element on which the event occuredk
// const btns = document.querySelectorAll('.btn');
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     // console.log(e.currentTarget);
//     // e.currentTarget.style.color = 'green';
//     console.log('target', e.target);
//     console.log('target', e.curentTarget);
//     e.target.style.color = 'green';
//   });
// });

// 92.Event Propogation - bubbling - capturing
// allows dynamic selection
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

// const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e) {
//   console.log('current target', e.currentTarget);
//   // console.log('target', e.target);
//   // if (e.target.classList.contains('link')) {
//   //   console.log('you clicked on the link');
//   // }
// }
// function stopPropogation(e) {
//   e.stopPropagation();
// }

// list.addEventListener('click', showBubbling, { capture: true });
// container.addEventListener('click', showBubbling, { capture: true });
// document.addEventListener('click', showBubbling, { capture: true });
// window.addEventListener('click', showBubbling, { capture: true });

// 94.forms
// submit event listener
// prevent default
// how to get a value

// const form = document.querySelector('#form');
// const name = document.querySelector('#name');
// const password = document.querySelector('#password');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   console.log('form submitted');
//   console.log(name.value);
//   console.log(password.value);
// });

// 95.Local storage status done
// Web storage Api -provided by browser
// session storage , local storage setItem, getItem, removeItem,clear
//  localStorage.setItem('name',"john");
//  sessionStorage.setItem('name',"john");

// 96.Local storage with multiple values
// JSON.stringify(),JSON.parse()
// const friends = ['john', 'peter', 'bob'];
// localStorage.setItem('friends', JSON.stringify(friends));

// const values = JSON.parse(localStorage.getItem('friends'));
// console.log(values[2]);

// let fruits;
// if (localStorage.getItem('fruits')) {
//   fruits = JSON.parse(localStorage.getItem('fruits'));
// } else {
//   fruits = [];
// }
// console.log(fruits);
// // fruits.push('apple');
// fruits.push('orange');
// localStorage.setItem('fruits', JSON.stringify(fruits));

// !Functions
// 206-->IIFE done
// 207--> Hoisting
// Hoisting
// function  and var declarations are hoisted
// safer to access only after initialized
// const firstName = 'john';
// const lastName = 'jordan';
// var random = 'random';

// function display() {
//   console.log('hello world');
// }

// function moreComplex() {
//   console.log(`${random}`);
// }

// 208--Closure
// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

// function outer() {
//   let privateVar = 'secret';
//   function inner() {
//     console.log(`hello there secret is:${privateVar} `);
//   }
//   return inner;
//   inner();
// }
//  console.log(privateVar);
// outer()();
// const value = outer();
// console.log(value);
// value();

// ! ES6 section VERY-IMPORTANT FOR REACT.JS

//  212=>Var,Let,Const
// var Let,Const
// define , update , Re-define
// const cannot mutate primitive type

// // define
// var number = 100;
// // console.log(number);

// // Update
// number = 200;
// console.log(number);

// // Re-define
// var number = 'Orange';
// console.log(number);

// 214 ==> Template Strings
// 215 ==> Template strings in Html

// const person = {
//   name: 'Kyle',
//   job: 'developer',
//   hobbies: ['surfing', 'baking', 'bowling'],
// };
// const result = document.getElementById('result');

// result.innerHTML = `
// <h1> ${person.name}</h1>
// <h3>${person.job}</h3>
// <ul>${person.hobbies
//   .map((item) => {
//     return `<li>${item}</li>`;
//   })
//   .join('')}</ul>
// `;

// result.innerHTML = '<h2>' + person.name + '</h2>' + '<p>' + person.job + '</p>';

// 216 ==> Tagged Template Literals

// const author = 'Some Author';
// const statement = ' some Statement';
// const quote = `Here is the ${statement} by ${author} and it could not be more true`;
// console.log(quote);
// const result = document.getElementById('result');
// result.innerHTML = quote;

// 217 ==> Arrow Functions-Basics
// const sayHi = () => console.log('Hello');
// sayHi();
// const double = (value, name) => ` Hi Iam ${name} and Im ${value * 2} Years Old`;
// const num = double(4, 'gaurav');
// console.log(num);
// // return object
// const object = () => ({ name: 'john', age: 25 });
// const person = object();
// console.log(person);

// // Arrow functions as callback functions
// const numbers = [1, 2, 3, 4, 5, 6];
// const big = numbers.filter((number) => number > 2);
// console.log(big);
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => console.log('You clicked me '));

//218.Arrow functions-Objects and "this"
// regular function : "this" refers parent , left of the dot
// arrow function : refers to it's current surrounding scope

// const bob = {
//   firstName: 'Bob',
//   lastName: 'smith',
//   sayName: function () {
//     console.log(this);
//     console.log(`Hello, my name is ${this.firstName}${this.lastName}`);
//   },
// };

// const anna = {
//   firstName: 'anna',
//   lastName: 'sanders',
//   sayName: () => {
//     console.log(this);
//     console.log(`Hello, my name is ${this.firstName}${this.lastName}`);
//   },
// };
// bob.sayName();
// anna.sayName();
// 219==>Arrow Functions-select Elements and "this" -Done
// 220==>Default Parameters for Hoisting Gotchas-Done

//221==> Array Destructuring
// Destructuring
// faster/easier way to access /Unpack values from arrays
// objects into variables
// Arrays
// const fruits = ['Orange', 'banana', 'lemon'];
// const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];
// const orange = fruits[0];
// const banana = fruits[1];
// const lemon = fruits[2];
// console.log(orange, banana, lemon);
// const [enemy, peter, bob, anna, kelly, susan] = friends;
// console.log(enemy, peter, bob, anna, kelly, susan);

// 222.Swap Variable
// Destructuring Swap Variables
// faster/Easier way to access/unpack values from arrays
// objects into variables that
// // Arrays
// let first = 'bob';
// let second = 'john';
// let temp = second;
// second = first;
// first = temp;
// console.log(first, second);
// 223.Object Destructuring
// faster/easier way to acess/unpack values from arrays
// objects into variables
// Objects

// const bob = {
//   first: 'bob',
//   last: 'sanders',
//   city: 'chicago',
//   siblings: {
//     sister: 'jane',
//   },
// };

// function printPerson({ first, last, city }) {
//   // const {first,last,city} = person;
//   console.log(first, last, city);
// }
// printPerson(bob);

// const {
//   first: firstName,
//   last,
//   city,zip,siblings:{sister:favio},
// } = bob;
// console.log(firstName,last ,city,zip,favio);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName,sister);
// console.log(firstName, lastName,sister);
// 228.Spread operator Array, object ,DOM,function arguments
// Spread Operator ...
// Allow an iterable to spread/expand individually inside reciever
//Split into single items and copy them.

const udemy = ['udemy', 'is', 'very', 'Helpful'];
const letters = [...udemy];
console.log(letters);
// const boys = ['john', 'peter', 'bob'];
// const girls = ['susan', 'anna'];
// const bestFriend = 'arnold';
// 231.Rest Operator
// gathers/collects the items

// const fruit = ['apple', 'orange', 'lemon'];
// Arrays
// const [fruit] = fruit;
// console.log(first);
// // objects
// const person = { name: 'john', lastName: 'smith', job: 'developer' };
// const { job } = person;
// console.log(job);
// Array.from and Array.of -Not on the Prototype
// from - returns Array Object from any object with a length Property or an iterable Object
// from turns array-like/ish into array - string,nodeList,Set


// const udemy = 'udemy';
// console.log(Array.from(udemy));
// !
// ************************DEV ED-COURSE******************
//*******************************************************************
// DEV ED -->>>{COURSE}

// Loading Javascript ---------> video-3<----------

// alert("Hey !");

// const button = document.querySelector(".btn");
// const body = document.querySelector("body");

// button.addEventListener("click",function (){
//   body.style.backgroundColor ="red";

// })

//  Const & Let---------> video-4<----------

// let inbox= 100;
// const inbox= 100;
// console.log(inbox);

// camelCase
// PascalCase
// under_score

//  Comments---------> video-5<----------

// Hey the code here changes the world

/*
Another Way
*/

//  Operators---------> video-6<----------

// // Basic operators
// let inbox =10;

// // %
// // +
// // -
// // *
// // **  =>cube
// // /
// inbox++;
// inbox--;
// console.log(inbox);

//Primitive Data Type---------> video-7<----------

// // Numbers
// const day =5;
// // Strings
// const name ="Xur";
// console.log(typeof name);
// // booleans
// const isLogged =false;
// // Undefined
// let day;
// console.log(day);

// // NUll

// let minute = null;
// // Symbol

// const name =Symbol();

//Concatination---------> video-8<----------
//prettier---------> video-9<----------done

// const bank1 = 100;
// const bank2 = 50;

// const allBanks = bank1 + bank2;

// const greeting ="Steve Jobs is a \"marketing legend\"He is iphone's founder";

// const user = 'XUR';

// const greeting = `Hey ${user} how are you`;
// console.log(greeting + user);

//Comparision and Conditionals---------> video-10<----------Conditionals

// ===  =>used to check datatype of the variable

// 10==="10"  returns=>false

// conditionals if , else
// &&
// ||
//

// const age = 120;
// const bank = 20;
// if (age >= 18 || bank > 30) {
//   console.log('You have access');
// } else {
//   console.log("You Don't have acesss");
// }

//Truthy and Falsy Values ---------> video-11<----------Truthy and falsy

// const age = undefined;
// if (age) {
//   console.log('This value is truthy ');
// } else {
//   console.log('This value is falsy');
// }

// Falsy values -=> false , 0, "",null,undefined,NaN
// Every thing other than falsy values are Truthy

//Functions---------> video-12<----------
// function greet(name) {
//   console.log(`Hi ${name} Welcome Home `);
// }

// function signUp() {
//   let name = prompt('Enter your Name SIRE');
//   greet(name);
// }
// signUp();

// function max(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// let inbox = max(40, 4);
// console.log(inbox);

// Objects---------> video-13<----------

// const user = {
//   name: 'Ed',
//   age: 19,
//   married: false,
//   greet: function (name) {
//     console.log('Hello there!' + name);
//   },
// };
// console.log(user.greet(user.name));

//Array---------> video-14<----------

// const listUsers = ['Dev Ed', 'Edward', 'Eddie'];

// listUsers.unshift('Ed');
// listUsers.shift();
// listUsers.pop();
// listUsers.push();
// let index = listUsers.indexOf('Eddie');

// console.log(index);
// console.log(listUsers);

//Switch-Statements---------> video-15<----------

// const text = 'avocado';
// let fruitNum = 0;

// switch (text) {
//   case 'banana':
//     console.log('Wow I love Bananas too');
//     fruitNum = 0;
//     break;
//   case 'apple':
//     console.log(`I don't like apples you crazy`);
//     fruitNum = 1;
//     break;
//   case 'avocado':
//     console.log(`I don't like Avacodoooooooos`);
//     fruitNum = 2;
//     break;
//   default:
//     console.log('what fruit is thiz');
// }

// let userInput = prompt('Tell me a fruit').toLowerCase;

// switch (userInput) {
//   case 'banana':
//     console.log('Wow I love Bananas too');
//     break;
//   case 'apple':
//     console.log(`I don't like apples you crazy`);
//     break;
//   case 'avocado':
//     alert(`I don't like Avacodoooooooos`);
//     break;
//   default:
//     console.log('I dont know what are u tkin about!!!!!!!!!!!');
// }

//lOOPS---------> video-16<----------

// const texts = ['singer', 'Dancer', 'Engineer', 'actor'];

// for (let i = 0; i < texts.length; i++) {
// if (i === 20) {
// console.log('Hey You hit 20 !');
// break;
// }
//   console.log(texts[i]);
// }

//For Of,forEach Loop---------> video-17<----------

// const games = ['Dev Ed', 'Barbie', 'Logic', 'Tool'];

// name is individual element from the games array

// For OF Loop

// for (let name of games) {
// console.log(name);
//   console.log(games.indexOf(name));
// }

// forEach is specially for arrays
// games.forEach(function (name, index) {
//   console.log(name, index);
// });

//While Loop For in Loop---------> video-18<----------

// const user = {
//   name: 'Dev Ed ',
//   age: 25,
//   subscribers: 200,
//   money: 'Nothing',
// };
// // for in loop
// for (let x in user) {
//   console.log(user[x] );
// }

// console.log(user.subscribers);

// While Loop

// let i = 20;
// // while(2=3){
// //   console.log(i)
// // i++;
// // }
// // do while
// do {
//   console.log(i);
//   // i++;
// } while (i > 10);

//Guessing game final---------> video-19<----------

// 1.Generate a random number
// 2.Give the user the ability to guess
// 3.If they guesss and they are wrong , ask them again(hint);
// If they win - say that they won

// let body = document.querySelector('body');

// function guessGame() {
//   let random = Math.ceil(Math.random() * 100);
//   let guess;
//   do {
//     guess = prompt('Guess a number between 1-100');
//     console.log(guess, random);
//     if (random > guess) {
//       console.log('You guessed too low');
//     } else {
//       console.log('You guessed too high');
//     }
//   } while (guess != random);
//   console.log('You Won');

//   if (guess == random) {
//     body.style.backgroundColor = 'green';
//   } else {
//     body.style.backgroundColor = 'blue';
//   }
// }

// guessGame();

//Scope in javascript---------> video-20<----------
//~~ Global Scope is the baap of all scopes it can be use any where

// Block scope can be used only in the block i.e{in brackets only}

// let food = 'apple';
// let fruits = 5;

// var x = 2;

// function store() {
//   // Function Scope
//   let food = 'banana';
//   let fruits = 50;
// }
// // block scope

// for (var x = 0; x < 10; x++) {
//   console.log(x);
// }

/*************************************DOM-By Dev ED***********************************/

// 21===> Done intro to dom
// 22=====>The DOM

// ------------------------------>23.Exploring DOM

// document.title = 'Refresher.js';
// // ------------------------------>24.Collections and Nodelists

// const collectionItems = document.getElementsByClassName('.item');
// const todonum = document.getElementsByClassName('todo-num')[0];

// // const nodeItems = document.querySelector('#todo-list');
// // console.log(nodeItems.childNodes);
// const todoList = document.getElementById('todo-list');

// const newItem = document.createElement('Li');
// newItem.classList.add('item');
// newItem.innerText = 'Item 3';
// // todoList.appendChild(newItem);

// // update the amount of items that we have

// // todonum.innerText = collectionItems.length;

// ! Section 12: Async JavaScript

//  241. intro => Status done

// 242.Synchronous===>java script is a single threaded language and only executes the program by rading line by line .
// Javascript is single threaded , synchronous language

// console.log(`i'm first `);
// console.log(`i'm second `);
// console.log(`i'm third`);

// console.log(`i'm first `);
// boilingWater();
// console.log(`i'm third`);

// function boilingWater() {
//   console.log('boiling...');
//   for (let i = 0; i < 1000; i++) {
//     console.log('still not done...');
//   }
//   console.log('done.');
// }

// 243.Synchronous===>Recipe
// Make Soup
// chop onion
// chop carrots
// boil water 10 min
// add carrots boil for 5 min
// add Onions boil for 5 min

// boilWater(1000);
// console.log('chop carrot');
// boilWater(500);
// console.log(`chop Onion`);
// boilWater(500);

// function boilWater(time) {
//   console.log('boiling...');
//   for (let i = 0; i < time; i++) {
//     console.log('still not done...');
//   }
//   console.log('done.');
// }
// 244.Asynchronus done
