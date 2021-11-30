# AdventOfCode2021
workspace for Advent of Code 2021 challenge

[Advent of Code 2021](https://adventofcode.com/2021)

## Problem Index
| Day | Solved? | Problem | Solution |
| :----:|:----:|:----:|:---|                                       
| 1 | &#9744;| problem title | link to my solution code |         

## Notes

### How to get array from new line seperated string of data
``` javascript
function getDataForDay_asArray(day, filename){
    /* 
    day <integer>
    fielname <string>
    */

    let fileContent = fs.readFileSync(process.cwd() + "\\" + "d" + day.toString() + "\\" + filename).toString()
    let dataArray   = fileContent.split(/\r?\n/)
    return dataArray
}

```
