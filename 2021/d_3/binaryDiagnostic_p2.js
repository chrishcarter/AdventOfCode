// multiply (O2 generator rating * CO2 scrubbing Rating ) to get life support rating

const { assert } = require('console')

function getDataForDay_asArray(day, is_test = false){
    // will only be test if the second input is set to true
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
function get_lifeSupportRating(diagnosticReport){
    let is_debug = false
    if(is_debug)console.log(diagnosticReport)   

    function countOccurance_ofItem_inArray(array,value){
        var result = 0;
        for(var item in array)
        if(array[item] == value)
        result++;
        return result;
    }

    function get_o2_filterResult(is_debug = false){
        if(is_debug) console.log("---get_o2_filterResult")
        //  ------------- get o2 rate first ---------------------
        const filteredFor_o2  = [...diagnosticReport]
        // go through data set
        for (let i = 0 ; i <filteredFor_o2[0].length ;i++){

            // check the most common digit
            // create array of all of the items at this position across all compared arrays
            const temp_pos_i_array = new Array(filteredFor_o2.length)
            for ( var j = 0 ; j < filteredFor_o2.length ; j++){
                let selValue = (filteredFor_o2[j][i])
                temp_pos_i_array[j] = selValue
                // now look at the array to check what the most common value is ( if no most common, use 1)
            }

            let count_1 = countOccurance_ofItem_inArray(temp_pos_i_array, '1')
            let count_0 = countOccurance_ofItem_inArray(temp_pos_i_array, '0')
            let mostCommon = count_1 >= count_0 ? '1':'0'

            //reverse through this array and remove any items that dont have the most common value
            for( let k = filteredFor_o2.length -1 ; k >=0 ; k--){
                if(filteredFor_o2[k][i] != mostCommon ){
                    filteredFor_o2.splice(k,1)
                }
            }
            if(is_debug) console.log( "pos["+i+"]\t↑ '"+mostCommon +"' ('0':"+ count_0 + " '1':" + count_1 + ")\t<" +filteredFor_o2.length + "> items remaining ")
            if(is_debug) console.log(filteredFor_o2)
            if(filteredFor_o2.length == 1) {
                return filteredFor_o2[0]
            }
        }
    }

    function get_co2_filterResult(is_debug = false){
        if(is_debug) console.log("---get_co2_filterResult")
        //  ------------- get co2 rate next ---------------------
        const filteredFor_co2  = [...diagnosticReport]
        // go through data set
        for (let i = 0 ; i <filteredFor_co2[0].length ;i++){

            // check the most common digit
            // create array of all of the items at this position across all compared arrays
            const temp_pos_i_array = new Array(filteredFor_co2.length)
            for ( var j = 0 ; j < filteredFor_co2.length ; j++){
                let selValue = (filteredFor_co2[j][i])
                temp_pos_i_array[j] = selValue
                // now look at the array to check what the most common value is ( if no most common, use 1)
            }

            let count_1 = countOccurance_ofItem_inArray(temp_pos_i_array, '1')
            let count_0 = countOccurance_ofItem_inArray(temp_pos_i_array, '0')
            let leastCommon = count_1 < count_0 ? '1':'0'

            //reverse through this array and remove any items that dont have the most common value
            for( let k = filteredFor_co2.length -1 ; k >=0 ; k--){
                if(filteredFor_co2[k][i] != leastCommon ){
                    filteredFor_co2.splice(k,1)
                }
            }
            if(is_debug) console.log( "pos["+i+"]\t↓ '"+leastCommon +"' ('0':"+ count_0 + " '1':" + count_1 + ")\t<" +filteredFor_co2.length + "> items remaining ")
            if(is_debug) console.log(filteredFor_co2)
            if(filteredFor_co2.length == 1) {
                return filteredFor_co2[0]
            }
        }
    }

    let o2_result   = get_o2_filterResult(is_debug)
    let co2_result  = get_co2_filterResult(is_debug)

    let o2_result_decimal   = parseInt(o2_result,2)
    let co2_result_decimal  = parseInt(co2_result,2)
    let lifeSupportRating = o2_result_decimal * co2_result_decimal

    console.log("o2:\t"     + o2_result + "[" + o2_result_decimal + "]\n" +
    "co2:\t"  + co2_result + "[" + co2_result_decimal + "]\n\t\t" + 
    "Power:" + lifeSupportRating + "\n")

    return lifeSupportRating

}

let test_result      = get_lifeSupportRating(getDataForDay_asArray(3,true))
let test_knownAnswer = 230
console.assert(test_result == test_knownAnswer , "test_result["+test_result+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

let lifeSupportRating = get_lifeSupportRating(getDataForDay_asArray(3))
console.log("p2 Answer = " + lifeSupportRating)


// figure out how to use assert properly
