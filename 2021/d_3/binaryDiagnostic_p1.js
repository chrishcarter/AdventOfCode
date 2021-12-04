// gamma rate is most common binary digit at each position ?
// epsillon rate is least common binary digit at each position ?

const { assert } = require('console')

function getDataForDay_asArray(day, is_test){
    let fs              = require('fs')
    let filename        = is_test? "data_test.txt" : "data.txt"
    let fileContent     = fs.readFileSync(process.cwd() + "\\" + "d_" + day.toString() + "\\" + filename).toString()
    let dataArray       = fileContent.split(/\r?\n/)
    return dataArray
}
function invertBinaryString(in_binaryString){
    let out_binaryString =""
    for(i in in_binaryString){
        in_binaryString[i] == '0'? out_binaryString+= '1': out_binaryString+='0'
    }
    return out_binaryString
}
function get_powerConsumption(diagnosticReport, is_debug){
    // get length of first item in data array and create an object to match it that we will later use to record the occurance of 1 and 0
    let bitCounter = []
    let gamma_rate = ""
    for( digit in diagnosticReport[0]){
        bitCounter[digit] = 0
    }
    // go through the data set and score the 1 vs 0
    for(pos in bitCounter){
        for( data in diagnosticReport){
            diagnosticReport[data][pos] > 0 ? bitCounter[pos] += 1 : bitCounter[pos] -= 1
        }
        // +ve result == 1, -ve result == 0 ( as the winner )
        bitCounter[pos] > 0 ?gamma_rate += '1':gamma_rate += '0'
    }

    let epsillon_rate           = invertBinaryString(gamma_rate)
    let gamma_rate_decimal      = parseInt(gamma_rate,2)
    let epsillon_rate_decimal   = parseInt(epsillon_rate,2)
    let power_consumption       = gamma_rate_decimal * epsillon_rate_decimal
    
    console.log("gR:\t"     + gamma_rate + "[" + gamma_rate_decimal + "]\n" +
                "eR:\t"  + epsillon_rate + "[" + epsillon_rate_decimal + "]\n\t\t" + 
                "Power:" + power_consumption + "\n")

    return power_consumption
}

let test_result         = get_powerConsumption(getDataForDay_asArray(3, true, true))
let test_knownAnswer    = 198

console.assert(test_result == test_knownAnswer , "test_result["+test_result+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

let powerConsumption    = get_powerConsumption(getDataForDay_asArray(3, false, true))
console.log("p1 Answer = " + powerConsumption)