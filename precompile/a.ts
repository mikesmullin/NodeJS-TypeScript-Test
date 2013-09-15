/// <reference path="./types/nodejs.d.ts"/>
/// <reference path="./b.ts"/>
var x = require("./b"), B = x.B, E = x.E;

class A {
  public static CONSTANT:String = "hello from A";
}

console.log(A.CONSTANT);
console.log(B.CONSTANT);
console.log(E.CONSTANT);
