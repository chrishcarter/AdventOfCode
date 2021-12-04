

function getDataForDay_asArray(day, is_test){
    let fs              = require('fs')
    let filename        = is_test? "data_test.txt" : "data.txt"
    let fileContent     = fs.readFileSync(process.cwd() + "\\" + "d_" + day.toString() + "\\" + filename).toString()
    let dataArray       = fileContent.split(/\r?\n/)
    return dataArray
}

function get_finalScore(dataSet ){
    const calls = dataSet[0]
    if(is_debug) console.log(calls)

    // make up each of the boards they are all 5*5

    const boardSize = 5
    //starting from line 3
    //      next 5 lines are the array
    //      skip a line
    if(is_debug) console.log("number of boards = " +( dataSet.length -1) / (boardSize+1) + "\t from dataset of length : " + dataSet.length)
    //const boards = 


    
    return 10
}

let is_debug = true

let test_result         = get_finalScore(getDataForDay_asArray(4, true))
let test_knownAnswer    = 4512

console.assert(test_result == test_knownAnswer , "test_result["+test_result+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

let finalScore    = get_finalScore(getDataForDay_asArray(4))
console.log("p1 Answer = " + finalScore)