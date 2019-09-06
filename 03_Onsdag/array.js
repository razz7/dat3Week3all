/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
//concat muterer ikke arrayen, men returnerer en ny, du kan dog assigne den nye værdi til den gamle variabel

//b
var all = boys.concat(girls);

//c
//console.log(all.join(', '));
//console.log(all.join('-'));

//d
all.push('Lone', 'Gitte');
//all.forEach(n=>console.log(n));

//e
//console.log(all.unshift('Hans', 'Kurt')); //resultatet printes, men bevares ikke
all.unshift('Hans', 'Kurt');
//all.forEach(n=>console.log(n));

//f
all.shift();
//all.forEach(n=>console.log(n));

//g
all.pop();
//all.forEach(n=>console.log(n));

//console.log("");
//console.log("et spring");
//console.log("");

//h
all.splice((all.length/2)-1, 2 );
//all.forEach(n=>console.log(n));

//i
var reversed = all.reverse();
//reversed.forEach(n=>console.log(n));

//j
all.sort();
//all.forEach(n=>console.log(n));

//k
//prøv

//l
//var all = all.map(s => s.toUpperCase());
//var all = all.map(s => s.charAt(0).toUpperCase() + s.substring(1, s.length));
//all.forEach(n=>console.log(n));

//m
var some = all.filter(word => word.charAt(0) === "l" || word.charAt(0) === "L");
some.forEach(n=>console.log(n));
