const fs            = require("fs")
const data_example  = fs.readFileSync(process.cwd() + "\\d_8\\data_example.txt").toString().split("\n")
const data          = fs.readFileSync(process.cwd() + "\\d_8\\data.txt").toString().split("\n")

function digit_decoded(source_instruction){
    // input all integers
    this.source         = source_instruction
    this.result
}

function main(in_data){

    let p1_counter = 0
    for( d in in_data){
        const signal = in_data[d].split(" | ")[0].split(' ')
        const output = in_data[d].split(" | ")[1].split(' ')

        if(is_debug){
            console.log(signal)
            console.log(output)
        }

        let decoded_signal = new Array()
        //-------------------------------------------------------------
        // go through the digits once, ensuring we know what 1,4,7,8 are
        //-----------------------------------------------------------
        for( n in signal){
           const source_instruction = signal[n].trim()
           let sel_instruction      = new digit_decoded(source_instruction)

           switch ( source_instruction.length ){
                case 2: // is 1
                    sel_instruction.result = 1
                    break;
                case 3: // is 7
                    sel_instruction.result = 7
                    break;
                case 4: // is 4
                    sel_instruction.result = 4
                    break;
                case 5: // is 2 or 3 or 5 
                    break;
                case 6: // is 0 or 6 or 9
                    break;
                case 7: // is 8
                    sel_instruction.result = 8
                    break;
           }
           decoded_signal.push(sel_instruction)
        }

        // find 3 ( chr == 5 & all in 7)
        // get all source elements in 7
        //const signal_7_source = decoded_signal.find(element => element.result = 7).source
        //console.log(signal_7_source)
        const signal_7_source = decoded_signal.find(element => element.result == 7).source
        console.log(signal_7_source)

        let current_decode = d + " -- "
        for( s in decoded_signal){
            current_decode+=(decoded_signal[s].source) + "[" +decoded_signal[s].result +  "] | "
        }
        console.log(current_decode)//decoded_signal[s].print_info)

        
    }
    return p1_counter
}

const is_debug = false

let example_result      = main(data_example)
let example_answer      = 26

console.assert(example_result == example_answer , `test_result[${example_result}] =/= test_knownAnswer [${example_answer}]`)

//let answer              = main(data)
//console.log(`p2 Answer = ${answer}`)
