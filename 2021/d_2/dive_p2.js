// how far have i travelled horizontally ?
// how deep am I ?

function getDataForDay_asArray(day){
    let fs              = require('fs')
    let filename        = "data.txt"
    let fileContent     = fs.readFileSync(process.cwd() + "\\" + "d_" + day.toString() + "\\" + filename).toString()
    let dataArray       = fileContent.split(/\r?\n/)
    return dataArray
}

function submarinePosition(_submarine){
    // submarine is object with aim , travel_x, depth_y as integers
    return "[ x:" +_submarine.travel_x+", depth:"+_submarine.depth_y+"]"
}

function multiplyTravelAndDepth(_submarine){
    // submarine is object with aim , travel_x, depth_y as integers
    return _submarine.travel_x * _submarine.depth_y
}

let dive_data = getDataForDay_asArray(2)

let submarine = { aim: 0 ,travel_x : 0 , depth_y : 0  }

for (i in dive_data){
    instruction     = dive_data[i].split(' ')
    let command     = instruction[0]
    let distance    = parseInt(instruction[1])

    switch(command){
        case'forward':
            submarine.travel_x  += distance
            submarine.depth_y   += submarine.aim*distance
            break;
        case'down':
            submarine.aim       += distance
            break;
        case'up':
            submarine.aim       -= distance 
            break;
    }
    console.log("#"+i+ "\t" + submarinePosition(submarine))
}


console.log("answer = " + multiplyTravelAndDepth(submarine))

