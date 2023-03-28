// "use strict";
let cal = 20 - 3 + (10 + 10) // () * / + - left to right
let cal2 = 20 + 3 * 3 + (20 * 2);
console.log(cal2);

let msg = "hi \"Babu\"";
let msg1 = "hi \'Babu\'";
let msg3 = `hi
            babu`
console.log(msg1, msg1, msg3)

let message = 'Welcome to line no 9';
let message1 = new String(`hello`);
let messageArr = [1, 4, 56, 7];
let message2 = '234.1P'
console.log(message1);
console.log(message1.repeat(4));
console.log(message.toUpperCase()); //.toLowerCase()
console.log(message.charAt(0));
console.log(message.substring(-1, 1));
console.log(message.replace('9', '13'));
console.log(message.includes('to'));
console.log(message.length);
console.log(message.search('to'));
console.log(messageArr.toString());
console.log(Number.parseFloat(message2));
console.log(message.concat(" " + message2)) // console.log(message+" "+message2);


//boolean 
let bolean = true;
bolean = !bolean
console.log(bolean)
console.log(Boolean(1)); // true
console.log(Boolean(0)) // false

//function basics
let text = '';
let showText = () => {
	if (text == undefined || text == '' || text == null) {
		text = 'no text given';
	}
}
console.log(showText());
let FName = 'babu';
let fil = FName.charAt(0).toLowerCase();
let func = () => {
	if (fil != 'k') {
		return 'lucky color is black'
	} else {
		return 'lucky color is blue '
	}
}
console.log(func());

var value = 1;
var value = 3;
//  let value = 4;
console.log(value)

// let	a = 10,
// 	b = 20,
// 	c= 30;
// console.log(a + b + c);

let x = 56;
console.log(x);


// Arithmetic Operators

console.log("+ ==> " + Number(43 + 7))
console.log("- ==> " + Number(60 - 30))
console.log("* ==> " + 5 * 5)
console.log("/ ==> " + 12 / 2)
console.log("% ==> " + 20 % 10)
var a = 10;
a++
var b = 10;
b--
console.log(++a);
console.log(--b);

//Comparison Operators

console.log('10' == 10)
console.log('10' === 10) // Comparing with sameTypes
console.log(10 != 20)
console.log(20 !== 20)
console.log(10 > 5)
console.log(5 >= 5)
console.log(5 < 10)
console.log(11 <= 10)

//Logical Operators

console.log("&& ==> " + (10 == 10 && 20 == 21))
console.log("|| ==> " + (20 == 10 || 30 == 30))
console.log("! ==> " + !(10 == 20))

//Assignment Operators

let d = 10 // assign
let e = 10;
e += 20
console.log("add & assign: " + e)
e -= 10;
console.log("subtract & assign: " + e)
e *= 20;
console.log("multipy & assign: " + e)
e /= 2;
console.log("divide & assign: " + e)
e %= 2;
console.log("Modulus & assign: " + e)

// Special Operators

/* Conditional Operator */
let line116;
line116 ? console.log("Hey, Its True") : console.log("Sorry, Its False")

/* Delete */
let obj = {
	a: 'First',
	b: 'Second'
}
delete obj.a;
console.log(JSON.stringify(obj));

/* in */
console.log('b' in obj);

/* New */
let obj133 = new Array(23, 34, 45, 55);
console.log(obj133);

flag = true
// if statement
if (flag == 'true') {
	console.log(' Its True');
}

//if else statement
if (flag == true) {
	console.log('Its True');
} else {
	console.log('Its not True');
}

//if else if statement

if (flag == true) {
	console.log('Its True');
} else if (flag == false) {
	console.log('Its False');
} else {
	console.log('flag is empty');
}

//Switch case statement 
/* without Break */
let result = '';
let letter = 'A';
switch (letter) {
	case 'A':
		result += "A for Apple, ";
	case 'B':
		result += "B for Ball, ";
	case 'C':
		result += "C for Cat, ";
	default:
		result += "No Letters... ";
}
console.log("Switch Case: " + result)

/* with Break */

switch (letter) {
	case 'A':
		result = "A for Apple ";
		break;
	case 'B':
		result = "B for Ball ";
		break;
	case 'C':
		result = "C for Cat ";
		break;
	default:
		result = "No Letters... ";
		break;
}
console.log("Switch Case: " + result)

// for Loop
let val = '*'
for (i = 1; i <= 5; i++) {
	console.log(val.repeat(i));
}
for (i = 5; i >= 0; i--) {
	console.log(val.repeat(i));
}

//while loop
val = '#'
var i = 11;
while (i <= 15) {
	console.log(val.repeat(i));
	i++;
}

//Do while loop
val = '^'
var i = 5;
do {
	console.log(val.repeat(i))
	i++
} while(i<=10)

var i = 10;
do {
	console.log(val.repeat(i))
	i--
} while(i>=0)

//for of loop
val = ['6','5','4','3','2','1'];
for (let data of val){
	if (data == 3){continue;}
	console.log('0'.repeat(data))
}

//function
runOn('@',10);

function runOn(text,Number){
	console.log(text.repeat(Number));
}

//apply(pending)
let line246 = {
	model: 'V5',
	madeIn: 'China'
}
function viewer(msg1,msg2){
	return (`${msg1} model: ${this.model}, ${msg2}`);
}
let view = viewer.apply(line246,['hi','is avaliable?'])
console.log(view);

const array = [1];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); 

//bind(pending)
firstName = "joey";
let user1 = {
	firstName: "John",
	sayHi() {
	  console.log(`Hello, ${this.firstName}!`);
	}
  };
let user2 = {
	firstName:'Mark'
}
let funcDup = user1.sayHi.bind(user2);
funcDup();

let callName = user1.sayHi
callName();
let binder = callName.bind(user1);
binder();

// objects basics

let user = {
	id: "12",
	name: 'kttAdmin',
	role: 'admin',
	branch: 'sankari',
	manager: {
		id : '1',
		name : 'Ram'
	}
}

let {id : number} = user;
let {manager:{id : managerId}} = user;
let {manager:{name : Name}} = user;
console.log(number)
console.log(managerId)
console.log(Name)

let ready = ()=>{
	console.log(this.name)
}

function updateUser(id,name,role,branch,managerId){
	this.id = id,
	this.name = name,
	this.role = role,
	this.branch = branch,
	this.managerId = managerId
}
let user3 = new updateUser(2,'Babu','Admin','Coimbatore',4);
console.log(user3.name);

let objectArr = Object.entries(user3);
let arr = [12,34,56,78,7];
for (const data of arr.entries()) {
	console.log(data)
}
console.log(objectArr);
let objArr = [
	[ 0, 12 ],
	[ 1, 34 ],
	[ 2, 56 ],
	[ 3, 78 ],
	[ 4, 7 ]
];
objArr = Object.fromEntries(objArr)
console.log("fromEntries method ===> "+ JSON.stringify(objArr));
Object.freeze(user3);
delete user3.id;
console.log(user3);
console.log('role' in user3);
console.log(user3.hasOwnProperty('managerid'));
console.log(Object.keys(user3));
console.log(Object.values(user3));
function print({name}){
	return `my name is ${name}`
};
console.log(print(user3));

let newUser = new Object();
newUser.id = 12
newUser.name = 'Ram'
newUser.role = 'Manager'
newUser.branch = 'Coimbatore'
console.log(newUser);

 // Arrays basics

 let line344 = new Array();
 line344[0] = 'welcome'
 line344[1] = 'back'
 line344[2] = 'wick'
 console.log(line344);
console.log(Array.of('hello', 'manager'));

const colors = [
	{
		"color": "purple",
		"type": "minivan",
		"regNo": 2022,
		"capacity": 7
	},
	{
		"color": "red",
		"type": "station wagon",
		"regNo": 2023,
		"capacity": 5
	},
	{
		"color": "black",
		"type": "wagon",
		"regNo": 2021,
		"capacity": 0
	}
];
let newColor = colors.map((item) => {
	 obj = item;
	 delete obj.capacity
	 if (obj.color == 'purple') { 
		obj.count = 6;
	 } else if (obj.color == 'red'){
		obj.count = 4;
	 } else { obj.count = 0; }
	 return obj
});
console.log(newColor);

let arrFil = colors.filter(x => !x.count)
console.log("=> Filter "+JSON.stringify(arrFil));

let arrFind = colors.find((x)=> x.count >= 5)
console.log("=> Find "+JSON.stringify(arrFind));

let payment = [
	{amt: 2000},
	{amt: 5000}
];
let arrReduce = payment.reduce((x, currentValue) => x + currentValue, 0); 
console.log("==> Reduce "+arrReduce);

let line396 =  [
	{id: 1, name: "John"},
	{id: 2, name: "Peter"},
	{id: 3, name: "Mary"},
	{id: 4, name: "Peter"}
];
let line402 = ['red', 'blue', 'black', 'orange'];
let line403 = [1, 2, 3, 4, 5];
console.log(payment.findIndex((x)=> x.amt == 5000 ));
console.log(JSON.stringify(line402.join()));
let values1 = line402.pop();
console.log(values1);
let values2 = line402.push('brown');
console.log(values2);
let values3 = line402.shift();
console.log(values3);
let values4 = line402.unshift('orange');
let values5 = line402.concat(line403);
console.log(values5);

let line416 = [1,2,3,[1,[2,[34,56,7,7]]]];
console.log(line416.flat());
console.log(line416.flat(3));
const line419 = [123,34,85,35,49,45,23,67,6,7,0,8];
line419.forEach(num => {
	console.log(num * 2);
});
console.log(line419.includes(1));
let line424 = line419.every(x => x > 100);
let line425 = line419.some(x => x <= 0);
console.log(line424);
console.log(line425);
let line429 = line419.findIndex(x => x == 23)
console.log(line429)

let newArr = Array.of(2,45,4,1,6,7,8,9,8);
console.log(newArr);
console.log(Array.from('line433'));
const line434 = ["a", "b", "c"];
let arrayEntries = line434.entries();
for (const element of arrayEntries) {
	console.log(element);
}
let [sim, sNo, date, ...remarks] = ['980989889', '1234', '2018-02-01', 'sim not working', 'network issue'];
console.log(sim, sNo, date);
console.log(remarks)
