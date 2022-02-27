// IMporting a file
import "./test.js"
// Named imports
import { name } from "./test2.js"
// Default, and renamed import
import DefaultFunc, { name as newName } from "./test3.js"

DefaultFunc()

console.log("hello world " + name + newName)
