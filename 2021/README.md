# AdventOfCode2021
workspace for Advent of Code 2021 challenge. Using Node.js [v14.15.3](https://nodejs.org/en/blog/release/v14.15.3/)

[Advent of Code 2021](https://adventofcode.com/2021)

[BZ leaderboard 2021](https://adventofcode.com/2021/leaderboard/private/view/1136052)

## Problem Index
| Day | Problem | Solution |Solved?|Solution |Solved?|
| :----:|:----|----:|:----|---:|    :---|                                       
| 1 |  [Sonar Sweep](https://adventofcode.com/2021/day/1)| [p1](d_1/sonarSweep_p1.js) | &#9745;| [p2](d_1/sonarSweep_p2.js)|         &#9745;|
| 2 |  [Dive](https://adventofcode.com/2021/day/2)| [p1](d_2/dive_p1.js) | &#9745;| [p2](d_2/dive_p2.js)|         &#9745;|
| 3 |  [Binary Diagnostics](https://adventofcode.com/2021/day/3)| [p1](d_3/binaryDiagnostic_p1.js) | &#9745;| [p2](d_3/binaryDiagnostic_p2.js)|         &#9745;|
| 4 |  [Giant Squid Bingo](https://adventofcode.com/2021/day/4)| [p1](d_4/giantSquid_p1.js) | &#9744;| [p2](d_4/giantSquidc_p2.js)|         &#9744;|
| 5 |  [Hydrothermal Vents Grid](https://adventofcode.com/2021/day/5)| [p1](d_5/hydrothermalVents_p1.js) | &#9745;| [p2](d_5/hydrothermalVents_p2.js)|         &#9745;|
| 6 |  [Lanternfish Reproduction](https://adventofcode.com/2021/day/6)| [p1](d_6/lanternfish_p1.js) | &#9745;| [p2](d_6/giantSquidc_p2.js)|         &#9745;|
| 7 |  [Crab Position Fuel](https://adventofcode.com/2021/day/7)| [p1](d_7/crabPosition_p1.js) | &#9745;| [p2](d_7/crabPosition_p2.js)|         &#9745;|
## Notes

### How to get array from new line seperated string of data
``` javascript
const fs            = require("fs")
const data_example  = fs.readFileSync(process.cwd() + "\\d_8\\data_example.txt").toString().split(",")
const data          = fs.readFileSync(process.cwd() + "\\d_8\\data.txt").toString().split(",")

```

### Assertion to check that solution gets the example answer with example data
``` javascript
let example_result      = main(data_example)
let example_answer      = 168

console.assert(example_result == example_answer , `test_result[${example_result}] =/= test_knownAnswer [${example_answer}"]`)

let answer              = main(data)
console.log(`p2 Answer = ${answer}`)
```
