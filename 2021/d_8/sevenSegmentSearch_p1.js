const fs            = require("fs")
const data_example  = fs.readFileSync(process.cwd() + "\\d_8\\data_example.txt").toString().split("\n")
const data          = fs.readFileSync(process.cwd() + "\\d_8\\data.txt").toString().split("\n")

function main(in_data){

    let p1_counter = 0
    for( d in in_data){
        const signal = in_data[d].split(" | ")[0]
        const output = in_data[d].split(" | ")[1]
       const output_digits = output.split(' ')
       for( n in output_digits){
           const digit = output_digits[n].trim()
           let is_counted = false
           switch ( digit.length ){
                case 2: // is 1
                    is_counted = true
                    break;
                case 3: // is 7
                    is_counted = true
                    break;
                case 4: // is 4
                    is_counted = true
                    break;
                case 5: // is 2 or 3 or 5 
                    break;
                case 6: // is 0 or 6 or 9
                    break;
                case 7: // is 8
                    is_counted = true
                    break;
           }
           if(is_counted)p1_counter++
           if(is_debug)console.log(digit + " ["+digit.length +"] "+is_counted+ "\t" + p1_counter )
       }
    }
    return p1_counter
}

const is_debug = false

let example_result      = main(data_example)
let example_answer      = 26

console.assert(example_result == example_answer , `test_result[${example_result}] =/= test_knownAnswer [${example_answer}]`)

let answer              = main(data)
console.log(`p2 Answer = ${answer}`)
