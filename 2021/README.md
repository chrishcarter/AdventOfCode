# AdventOfCode2021
workspace for Advent of Code 2021 challenge. Using Node.js [v14.15.3](https://nodejs.org/en/blog/release/v14.15.3/)

[Advent of Code 2021](https://adventofcode.com/2021)

[BZ leaderboard 2021](https://adventofcode.com/2021/leaderboard/private/view/1136052)

## Problem Index
| Day | Problem | Solution |Solved?|Solution |Solved?|
| :----:|:----|----:|:----|---:|    :---|                                       
| 1 |  [Sonar Sweep](https://adventofcode.com/2021/day/1)| [p1](d_1/sonarSweep_p1.js) | &#9745;| [p2](d_1/sonarSweep_p2.js)|         &#9745;|
| 2 |  [Dive](https://adventofcode.com/2021/day/2)| [p1](d_2/dive_p1.js) | &#9745;| [p2](d_2/dive_p2.js)|         &#9745;|
| 3 |  [Dive](https://adventofcode.com/2021/day/3)| [p1](d_3/binaryDiagnostic_p1.js) | &#9745;| [p2](d_3/binaryDiagnostic_p2.js|         &#9745;|
| 4 |  [Giant Squid](https://adventofcode.com/2021/day/4)| [p1](d_4/giantSquid_p1.js) | &#9744;| [p2](d_4/giantSquidc_p2.js|         &#9744;|
## Notes

### How to get array from new line seperated string of data
``` javascript
function getDataForDay_asArray(day){
    /* 
    day <integer>
    */
    let fs               = require('fs')
    let filename         = "data.txt"
    let fileContent     = fs.readFileSync(process.cwd() + "\\" + "d_" + day.toString() + "\\" + filename).toString()
    let dataArray       = fileContent.split(/\r?\n/)
    return dataArray
}

```
