let files = {
	'device': {
		'category': {
		"id": 12
		}
	},
		'device': {
		'category': {
		"id": 13
		}
	},
			'device': {
			'category': {
			"id": 13
		}
	}
}
let Number = '32';
console.log(!isNaN(Number));

if (Number == 32) {
	console.log('check equal')
}
if (Number === '32') {
	console.log('check: string' + Number)
}

let values = ['wakeUp', 'Work', 'Sleep'];
let count = 1;
let dummy = [];
for (let data of values) {
	data = count + '.' + data;
	dummy.push(data);
	count++;
}
values = dummy
console.log(values);

let a, b;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);


console.log('===>' + datas);

var datas = 'values'
var datas = 'files'

console.log('=>' + datas);

// let person1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// let { firstName } = person1;

// console.log(firstName)

let data = 'qwerty'
console.log(data.length)

// Array Destructuring
let numbers = []
const obj = { 'part1': 1, 'part2': 2 };
({ part1: numbers[0], part2: numbers[1] } = obj);
console.log(obj);
console.log(numbers)

function arr() {
	return [123, 456];
}
const [x, y] = arr();
console.log(x); // 1
console.log(y); // 2

const validate = ["Bike", "CAr", "Boat", "TRain"];
const assets = [1, 2, 3, 4]
let value;
//value = validate.pop();
//value = validate.push('Airoplane');
//value = validate.shift();
//value = validate.unshift('Jet');
// value = validate.concat(assets)
value = [...validate,...assets];
value.splice(2, 0, "Truck", "Tanker");
value.sort();
// value.reverse();
const slicer = value.slice(1, 3);
value = assets.reduce((a,c)=>{ return a+c });
let field = Array.from("babu");
console.log(validate.includes("CAr"));
values = validate.entries();
console.log(field);
console.log(value);
console.log(slicer);

const person1 = {'fname':"babu", 'lname':"Dude", 'age':40}; 
for (key in person1){
	data += person1[key] + " "
	console.log('my details are '+data)
}

// let dat = new Date();
// let year = dat.getFullYear()
// let month = dat.getMonth()
// let day = dat.getDate()
// console.log(year + month + day);
let person = [{
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
},{
    firstName: 'Tony',
    lastName: '123',
    currentAge: 54
},{
    firstName: 'Mark',
    lastName: 'tu',
    currentAge: 34
},{
    firstName: 'liccy',
    lastName: 'brown',
    currentAge: 23
}];
let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;
console.log(person);

// let {red, blue, ...args} = {'red': 100, 'blue': 200, 'args1': 300, 'args2': 400, 'args3': 500}
// console.log(red)
// console.log(blue)
// console.log(args)

let dup = ['red','black','red','blue','black','blue'];
let removeDup = [...new Set(dup)];
console.log(removeDup);
let letters = new Set();
letters.add('hi');
console.log(letters);
removeDup.forEach((items) =>{
	console.log(count+'.'+items)
	count++
})
duplicate = [];
dup.forEach((value,index)=>{
	if (dup.indexOf(value) == index){

	} else {
		duplicate.push(value)
	}
})
console.log(duplicate)
let fil = dup.filter((v,i)=> dup.indexOf(v) == i);
console.log(fil);

let fullname = person.map((obj)=>{
	obj.name = obj.firstName + ' ' + obj.lastName
	delete obj.currentAge
	delete obj.firstName
	delete obj.lastName
	return obj;
})
console.log(fullname);

g = 23;
console.log(g)
var g;
let carName;
func();
console.log(carName);
function func(){
  carName = "Volvo";
}

let rio = [12,23,4,45,67]
// let find = rio.every(x=> x > 20);
let find = rio.some(x=> x > 20);
console.log(find)

let common = {
  "sim": {
    "add": {
      "id": 92,
      "mobileNo": "9000442201"
    },
    "remove": {
      "id": 93,
      "mobileNo": "9000442222"
    }
  },
  "stocks": {
    "add": [
      {
        "id": 534,
        "sNo": "4016000024216"
      },
      {
        "id": 1,
        "sNo": "2323"
      }
    ],
    "remove": [
      {
        "id": 20161,
        "sNo": "86578405190922"
      },
      {
        "id": 1,
        "sNo": "2323"
      }
    ]
},
func: function (){
	return this.sim.add.id
}
};

// let run = ()=>{
//  return this
// }

class Formatter0 {
	constructor(fName, lname) {
	  this.fName = fName;
	  this.lname = lname;
	}
	get data() {
	  return this.upperCase();
	}
	upperCase() {
	  return this.fName.toUpperCase()+ " "+ this.lname.toUpperCase();
	}
  }
  
  const newPerson = new Formatter0('john', 'm');
  console.log(JSON.stringify(newPerson.data));


let text = "hi Welcome to new world!";
// let newText = text.replace("new", "old");
// console.log(newText);

let text2 = "5";
let padded = text2.padEnd(4,"x") +' '+text2.padStart(4,"Y");
console.log(padded)

let spliter = text.split(" ");
console.log(spliter);

let {sim:{add, remove}} = common;
let {stocks:{add : stockAdd, remove: stockRemove}} = common;
console.log(add , remove,  stockAdd, stockRemove);


let temp = [23,45,56,34,67,54];
console.log(temp.fill('hi',0,5));

//hoisting

//console.log(runner(2,4));

let runner = (a,b)=>{
return a + ' & ' + b
}
console.log(runner(2,4));

// $('example').blur(()=>{ console.log('focus out')})

console.log(3 + 10 * 2); 
console.log(3 + (10 * 2));
console.log((3 + 10) * 2); 

function line271(){
  return "This is from line: 271"
}
console.log(line271);

let commonName = 'Mark';

function line278(){
  console.log(commonName);
  line281();
  function line281(){
    let commonName = 'Antony'
    console.log(commonName)
  }
}

line278();

const person10 = {
  fullName: function(city, country) {
    console.log(this.firstName + " " + this.lastName + "," + this.city + "," + this.country);
  }
}

const person11 = {
  firstName:"Tony",
  lastName: "Cooper",
  city: "JersyCity",
  country: "NewYork"
}
 person10.fullName.bind(person11)();
// person10.fullName.call(person11)

let l304 = ()=>{
  return 'From line 304'
}
let l307 = ()=>{
  return new Promise ((res,rej) => {
    setTimeout(() => {
      res ('From line 307')
    }, 3000);
  })
}
let l310 = ()=>{
  return 'From line 310'
}
async function better() {
  let one = l304()
  console.log(one)
  let two = await l307()
  console.log(two)
  let three = l310()
  console.log(three)
}
better();

function next(){
  let line328 = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('23')
	},5000)
  }).then((data)=>{
	console.log('===> '+data)
  })
}
next();