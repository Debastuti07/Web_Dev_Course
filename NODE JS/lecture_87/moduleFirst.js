// const simple=require("./moduleSecond")
// simple()

import {simple} from "./moduleSecond.mjs";
simple()

import simple23 from "./moduleSecond.mjs";
simple23()


// import {simple , simple2} from "./moduleSecond.mjs";
// simple()
// simple2()
 import *as a2 from "./moduleSecond.mjs"
console.log(a2.simple());
