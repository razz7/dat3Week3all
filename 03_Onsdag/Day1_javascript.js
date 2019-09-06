function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) { //kald denne funktion ved sub(tal1, tal2)
    return n1 - n2;
};

var cb = function (n1, n2, callback) { //kald denne funktion ved cb(tal1, tal2, funktion der kræver to tal)
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

//console.log(add(1,2)); //printer 3, fordi add ligger to tal sammen og returnere dem

//console.log(add); //printer [Function: add], add betyder selve funktionen

//console.log(add(1,2,3)); //printer 3,

//console.log(sub(2,3)); //dette giver -1, du kan give den input
//console.log(cb(3, 8, add)); //giver "Result from the two numbers: 3 + 8 = 11

//1. Adds the two numbers
//console.log(add(1,2));

//2. Prints [Function: Add], it simply prints the function in question
//console.log(add);

//3. Prints 3, the number third number
//console.log( add(1,2,3) ) ;

//4. Prints NaN (not a number), because the missing parameter becomes "undefined", which is not a number
//console.log( add(1) );

//5. will print "Result from the two numbers: 3+3=6"
//console.log( cb(3,3,add) ); //because cb() will print the text while using the add() function to add the numbers

//6. will print "Result from the two numbers: 4-3=1"
//console.log( cb(4,3,sub) ); //because cb() will print the text and use sub() to extract the numbers

//7. add() is not a function object, but the result of the executed function, which without parameters gives NaN
//console.log(cb(3,3,add()));

//8. prints "Result from the two numbers: 3+hh=3hh", because strings and integers can put together as a string
console.log(cb(3,"hh",add));


/* global filter */

//1.
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Lise", "Hanne", "Freja", "Heimdal"];
var longNames = names.filter(name => name.length <= 3);

//this works too
var longNames = names.filter(lengthName);
function lengthName(name) {
    return name.length <= 3;
}



//4.
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

function filterCar(car) {
    return car.year > 1999 && car.make === "Volvo" && car.price < 5000;
}

var filcar = cars.filter(filterCar);
filcar.forEach(car => console.log(car));



//first it will aaaaa, then ddddddd, then fffffff, then eeeeee,then bbbbbbbb
var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");



function Person(name) {
  this.name = name;
  var self = this;
  console.log("Name: " + this.name);
  setTimeout(function () {
    console.log("Hi  " + self.name);
  }, 2000);
}


var p = new Person("New Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm new global: " + p.name);

var greeter = function () {
  console.log(this.message);
};
var comp1 = { message: "Hello " };
var comp2 = { message: "world" };

//Binds the massage into the a function that didn't have a massage from the start
var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this”
var g2 = greeter.bind(comp2);
setTimeout(g1, 3000);
setTimeout(g2, 3000);


//JavaScriptObjects
//1
function MyPerson(name, birthday, hobby, email) {
  this.name = name;
  this.birthday = birthday;
  this.hobby = hobby;
  this.email = email;
}

var test = new MyPerson("personTest", "1/1-11", "nothing", "111@test.co.uk.com");

for (var prop in test) {
  console.log(prop, test[prop]);
}

delete test.birthday;

//birthday deleted
for (var prop in test) {
  console.log(prop, test[prop]);
}

test["birthday"] = "21/11-01";

// new birthday
for (var prop in test) {
  console.log(prop, test[prop]);
}

//2
function NewPerson(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getDetails = function () {
    return "Firstname: " + this.firstName + " Lastname: " + this.lastName + " Age: " + this.age;
  };

}

var newP = new NewPerson('DitlevThe', 'LichKing', 69);
console.log(newP.getDetails());

//Reusable Modules with osures
//2
function NewNewPerson() {
  var privateAge;
  var privateName;

  function setAge(age) {
    privateAge = age;
  };

  function setName(name) {
    privateName = name;
  };

  function details() {
    console.log("Name: " + privateName + " Age: " + privateAge);
  };

  function getDetails() {
    details();
  };

  return {
    setAge : setAge,
    setName : setName,
    getDetails : getDetails
    };
  };

var pn = new NewNewPerson();
pn.setAge(19);
pn.setName("Ditlev");
pn.getDetails();
