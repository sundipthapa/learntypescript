"use strict";
//Syntax let variableName: Type = value
Object.defineProperty(exports, "__esModule", { value: true });
//String example
var greetings = "Hello World";
greetings.toLowerCase();
console.log(greetings);
//number example
var userId = 23;
userId.toString();
console.log(userId);
//boolean example
var isLoggedIn = false;
isLoggedIn.valueOf();
console.log(isLoggedIn);
//Any
var hero;
function getHero() {
    return "Any variable";
}
hero = getHero();
