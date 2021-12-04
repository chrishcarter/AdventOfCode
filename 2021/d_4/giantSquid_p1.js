

function getDataForDay_asArray(day, is_test){
    let fs              = require('fs')
    let filename        = is_test? "data_test.txt" : "data.txt"
    let fileContent     = fs.readFileSync(process.cwd() + "\\" + "d_" + day.toString() + "\\" + filename).toString()
    let dataArray       = fileContent.split(/\r?\n/)
    return dataArray
}

function get_finalScore(dataSet ){

    return 10
}


let test_result         = get_finalScore(getDataForDay_asArray(4, true))
let test_knownAnswer    = 4512

console.assert(test_result == test_knownAnswer , "test_result["+test_result+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

let finalScore    = get_finalScore(getDataForDay_asArray(4))
console.log("p1 Answer = " + finalScore)