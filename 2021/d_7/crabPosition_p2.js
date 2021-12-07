// the least possible moves to get all the numbers on the same value

const fs        = require("fs")
const data_test = fs.readFileSync(process.cwd() + "\\d_7\\data_test.txt").toString().split(",")
const data      = fs.readFileSync(process.cwd() + "\\d_7\\data.txt").toString().split(",")

function difference (a, b) {
    return a > b ? a - b : b - a
}
function getFuel( distance ){

    /*
    this is exponential growth i.e.
    0 - 0 
    1 - 1
    2 - 3
    3 - 6
    4 - 10
    5 - 15
    the fuel for n = n + (n-1) + (n-2) + (n-3) ...
    */
    let fuel = 0
    for( let d = distance ; d > 0 ;d--){
        fuel += d
    }
    return fuel
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
    let min_moves           = getFuel(max_position) * crab_positions_int.length
    for( let i = min_position ; i <= max_position ; i++){
        let moveCounter = 0
        for( p in crab_positions_int){
            const selDifference = difference(i, crab_positions_int[p])
            const fuelUsed      = getFuel(selDifference)
            if(is_debug)console.log("" + i + "->" + crab_positions_int[p] + " : Δ=" + selDifference + "\t fuel="+ fuelUsed )

            moveCounter += fuelUsed
        }
        min_moves = min_moves > moveCounter ? moveCounter : min_moves
        let moveRecorder = [i,moveCounter]
        if(is_debug)console.log(moveRecorder)
        allMovesRecorded.push(moveRecorder)
    }
    if(is_debug)console.log(allMovesRecorded)

    return min_moves
}

let is_debug            = false
let test_result         = leastFuelSpentToAlignToPosition(data_test)
let test_knownAnswer    = 168

console.assert(test_result == test_knownAnswer , "test_result["+test_result+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

let finalScore          = leastFuelSpentToAlignToPosition(data)
console.log("p2 Answer = " + finalScore)