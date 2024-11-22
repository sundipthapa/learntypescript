"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//FUNCTION
//What if you don't type
function subTwo(sub) {
    return sub - 2;
}
subTwo(4);
//function with number :Adding numbers 
function addTwo(num) {
    return num + 3;
}
addTwo(5);
//function with string: toUpperCase
function letterUpper(val) {
    return val.toUpperCase;
}
letterUpper("sandeep");
//function with string, number, boolean for signup
function signUP(name, email, phone, isPaid) {
}
signUP("sand", "sadf", 1, false);
//function for login check
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("hello", "@world");
