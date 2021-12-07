const fs        = require("fs")
const data_test_v1 = fs.readFileSync(process.cwd() + "\\d_6\\data_test.txt").toString().split(",")
const data_test_v2 = fs.readFileSync(process.cwd() + "\\d_6\\data_test.txt").toString().split(",")
const data      = fs.readFileSync(process.cwd() + "\\d_6\\data.txt").toString().split(",")


function totalFish_afterDays_v1(in_allFish, total_days){
    let v1_allFish = in_allFish
    if(is_debug){
        console.log("-----totalFish_afterDays_v1")
        console.log(v1_allFish)
    }
    for( let d = 1 ; d <= total_days ; d++){
        for ( let f = v1_allFish.length-1 ; f >=0 ; f--){
            v1_allFish[f] = parseInt(v1_allFish[f]) -1
            if(v1_allFish[f] <0){
                v1_allFish[f] = 6
                v1_allFish.push(8)
            }
        }
        if(is_debug)console.log(d + ": " + v1_allFish)
    }
    
    // each day, the number decreases
    // any 0 becomes a 6 & an 8 
    let allFishes_total = v1_allFish.length
    console.log("allFishes_total  = " + allFishes_total + " after " + total_days + " days")
    return v1_allFish.length
}
function totalFish_afterDays_v2(in_allFish, total_days){
    let v2_allFish = in_allFish
    if(is_debug){
        console.log("-----totalFish_afterDays_v2")
        console.log(v2_allFish)
    }

    // calculate number of fish at each age
    let fishAges = {
        '0':0,
        '1':0,
        '2':0,
        '3':0,
        '4':0,
        '5':0,
        '6':0,
        '7':0,
        '8':0,
    }

    // record initial fish values
    for( f in v2_allFish ){
        fishAges[v2_allFish[f]] += 1
    }
    console.log(fishAges)

    for( let d = 1 ; d <= total_days ; d++){
        let temp_fishAges = {}
        temp_fishAges['0'] = fishAges['1']
        temp_fishAges['1'] = fishAges['2']
        temp_fishAges['2'] = fishAges['3']
        temp_fishAges['3'] = fishAges['4']
        temp_fishAges['4'] = fishAges['5']
        temp_fishAges['5'] = fishAges['6'] 
        temp_fishAges['6'] = fishAges['7']+ fishAges['0']
        temp_fishAges['7'] = fishAges['8']
        temp_fishAges['8'] = fishAges['0']

        fishAges = temp_fishAges
    }
    console.log(fishAges)
    const allFishes_total = fishAges['0'] + fishAges['1'] + fishAges['2'] + fishAges['3'] + fishAges['4'] + fishAges['5'] + fishAges['6'] + fishAges['7']+ fishAges['8']
    console.log("allFishes_total = "+ allFishes_total + " after " + total_days + " days")
    //const allFishes_total = fishAges.values()
    return allFishes_total
}

let is_debug                    = false
const days                      = 256
//let test_result_v1              = totalFish_afterDays_v1(data_test_v1,days)
let test_result_v2              = totalFish_afterDays_v2(data_test_v2,days)
//console.assert(test_result_v1 == test_result_v2 , "test_result_v1["+test_result_v1+ "] =/= test_result_v2 [" + test_result_v2 + "]\t after " + days + " days")


let test_knownAnswer    = 26984457539

console.assert(test_result_v2 == test_knownAnswer , "test_result_v2["+test_result_v2+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

let finalScore          = totalFish_afterDays_v2(data,days)
console.log("p2 Answer = " + finalScore)