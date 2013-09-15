/// <reference path="./c/d/e.ts"/>
var E = require("./c/d/e");

class B {
  public static CONSTANT:String = "hello from B";
}
module.exports = { B: B, E: E };
