// how far have i travelled horizontally ?
// how deep am I ?

function getDataForDay_asArray(day){
    let fs              = require('fs')
    let filename        = "data.txt"
    let fileContent     = fs.readFileSync(process.cwd() + "\\" + "d_" + day.toString() + "\\" + filename).toString()
    let dataArray       = fileContent.split(/\r?\n/)
    return dataArray
}

let dive_data = getDataForDay_asArray(2)

let dist_x  = 0
let depth   = 0
let aim     = 0

for (i in dive_data){
    instruction     = dive_data[i].split(' ')
    let command     = instruction[0]
    let distance    = parseInt(instruction[1])

    if (command == "forward"){
        dist_x  += distance
        depth   += aim*distance
    }
    if (command == "down"){
        //depth   += distance
        aim     += distance
    }
    if (command == "up"){
        //depth   -= distance
        aim     -=distance
    }

    console.log("#"+i+ "\t" +"dist_x = " + dist_x +"\t" +"depth = " + depth)
}


console.log("dist_x = " + dist_x +"\t" +"depth = " + depth + "\nmultiplied = " + dist_x * depth)

