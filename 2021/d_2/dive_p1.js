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

let distance_x = 0
let distance_y = 0
for (i in dive_data){
    instruction  = dive_data[i].split(' ')
    let command = instruction[0]
    let distance = parseInt(instruction[1])
    if (command == "forward"){
        distance_x +=distance
    }
    if (command == "down"){
        distance_y +=distance
    }
    if (command == "up"){
        distance_y -=distance
    }
    //console.log("#"+i+ "\t" + command + "\t" + distance)
}

console.log("distance_x = " + distance_x +"\t" +"distance_y = " + distance_y + "\nmultiplied = " + distance_x * distance_y)

