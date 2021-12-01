# AdventOfCode2021
workspace for Advent of Code 2021 challenge

[Advent of Code 2021](https://adventofcode.com/2021)

## Problem Index
| Day | Solved? | Problem | Solution |
| :----:|:----:|:----:|:---:|                                       
| 1 | &#9744;| [Sonar Sweep](https://adventofcode.com/2021/day/1)| [p1](d01/sonarSweep_p1.js) [p2](d01/sonarSweep_p2.js)|         

## Notes

### How to get array from new line seperated string of data
``` javascript
function getDataForDay_asArray(day){
    /* 
    day <integer>
    */
   let filename = "data.txt"

    let fileContent = fs.readFileSync(process.cwd() + "\\" + "d" + day.toString() + "\\" + filename).toString()
    let dataArray   = fileContent.split(/\r?\n/)
    return dataArray
}

```
