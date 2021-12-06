const fs        = require("fs")
const data_test = fs.readFileSync(process.cwd() + "\\d_6\\data_test.txt").toString().split("\n")
const data      = fs.readFileSync(process.cwd() + "\\d_6\\data.txt").toString().split("\n")

function totalFish_afterDays(selData, days){
    return 10
}

let is_debug            = true
let test_result         = totalFish_afterDays(data_test,80)
let test_knownAnswer    = 5934

console.assert(test_result == test_knownAnswer , "test_result["+test_result+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

let finalScore          = totalFish_afterDays(data,80)
console.log("p1 Answer = " + finalScore)