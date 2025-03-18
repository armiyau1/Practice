"use strict";
let id = 5;
let company = "traversy media";
let ispublished = true;
let x = "hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
//tuple
let person = [1, "brad", true];
//tuplr array
let employee;
employee = [
    [1, "brad"],
    [1, "john"],
    [1, "will"]
];
//union
let pid;
pid = "22";
//enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 1] = "up";
    direction1[direction1["down"] = 2] = "down";
    direction1[direction1["left"] = 3] = "left";
    direction1[direction1["right"] = 4] = "right";
})(direction1 || (direction1 = {}));
const User = {
    id: 1,
    name: "armi"
};
//type assertion
let cid = 1;
let customer = cid;
//functions
function addNum(x, y) {
    return x + y;
}
const user1 = {
    id: 1,
    name: "john"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name}is now registerd`;
    }
}
const brad = new Person(1, "brad traversy");
const mike = new Person(1, "brad traversy");
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "shwan", "developer");
//generics
function getArr(items) {
    return new Array().concat(items);
}
let numArray = getArr([1, 2, 3, 4, 5]);
let strArray = getArr(["i", "w", "e", "r", "h"]);
