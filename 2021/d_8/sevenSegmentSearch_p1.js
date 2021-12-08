const fs            = require("fs")
const data_example  = fs.readFileSync(process.cwd() + "\\d_8\\data_example.txt").toString().split(",")
const data          = fs.readFileSync(process.cwd() + "\\d_8\\data.txt").toString().split(",")


function main(in_data){
 
    

    return 10
}








let example_result      = main(data_example)
let example_answer      = 168

console.assert(example_result == example_answer , `test_result[${example_result}] =/= test_knownAnswer [${example_answer}]`)

let answer              = main(data)
console.log(`p2 Answer = ${answer}`)
