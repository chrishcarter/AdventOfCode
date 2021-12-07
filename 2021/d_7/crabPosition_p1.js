// the least possible moves to get all the numbers on the same value

const fs        = require("fs")
const data_test = fs.readFileSync(process.cwd() + "\\d_7\\data_test.txt").toString().split(",")
const data      = fs.readFileSync(process.cwd() + "\\d_7\\data.txt").toString().split(",")

function difference (a, b) {
    return a > b ? a - b : b - a
}

function leastFuelSpentToAlignToPosition(crab_positions_string){
    //concerts the array to integers and sorts the 
    const crab_positions_int = crab_positions_string
                                .map(function (x)   { return parseInt(x, 10)    })
                                .sort(function(a,b) { return a-b                })



    const min_position = crab_positions_int[0]
    const max_position = crab_positions_int[crab_positions_int.length-1]

    if(is_debug)console.log("length:"+crab_positions_int.length+ "  "+ min_position + " -> " +max_position)

    // go from min position to max position, recording how many moves it takes to get the whole group there
    let allMovesRecorded    = new Array()
    let min_moves           = max_position*max_position
    for( let i = min_position ; i <= max_position ; i++){
        let moveCounter = 0
        for( p in crab_positions_int){
            let selDifference = difference(i, crab_positions_int[p])
            moveCounter += selDifference
        }
        min_moves = min_moves > moveCounter ? moveCounter : min_moves
        let moveRecorder = [i,moveCounter]
        if(is_debug)console.log(moveRecorder)
        allMovesRecorded.push(moveRecorder)
    }
    if(is_debug)console.log(allMovesRecorded)

    /*
    const middle = Math.floor(crab_positions_int.length / 2);
    console.log(middle)
    
    if (crab_positions_int.length % 2 === 0) {
        return (crab_positions_int[middle - 1] + crab_positions_int[middle]) / 2;
    }

    console.log(crab_positions_int)
    console.log(middle)
    
    const crabPos_sum       = crab_positions_int.reduce((a, b) => a + b, 0);
    const crabPos_avg       = (crabPos_sum / crab_positions_int.length) || 0;
    const crabPos_median    = 2

    if(is_debug)console.log("sum["+crabPos_sum+"] avg["+crabPos_avg+"]")
    */

    return min_moves
}

let is_debug            = false
let test_result         = leastFuelSpentToAlignToPosition(data_test)
let test_knownAnswer    = 37

console.assert(test_result == test_knownAnswer , "test_result["+test_result+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

let finalScore          = leastFuelSpentToAlignToPosition(data)
console.log("p1 Answer = " + finalScore)