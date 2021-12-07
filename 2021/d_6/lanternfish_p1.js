const fs        = require("fs")
const data_test = fs.readFileSync(process.cwd() + "\\d_6\\data_test.txt").toString().split(",")
const data      = fs.readFileSync(process.cwd() + "\\d_6\\data.txt").toString().split(",")

function totalFish_afterDays(allFish, total_days){
    console.log(allFish)

    for( let d = 1 ; d <= total_days ; d++){
        for ( let f = allFish.length-1 ; f >=0 ; f--){
            allFish[f] = parseInt(allFish[f]) -1
            if(allFish[f] <0){
                allFish[f] = 6
                allFish.push(8)
            }
        }
        if(is_debug)console.log(d + ": " + allFish)
    }
    
    // each day, the number decreases
    // any 0 becomes a 6 & an 8 
    return allFish.length
}

let is_debug            = false
let test_result         = totalFish_afterDays(data_test,256)
let test_knownAnswer    = 5934

console.assert(test_result == test_knownAnswer , "test_result["+test_result+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

let finalScore          = totalFish_afterDays(data,256)
console.log("p1 Answer = " + finalScore)