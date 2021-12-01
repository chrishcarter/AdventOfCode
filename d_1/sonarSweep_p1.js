// how many measurements are larger tthan the previous measurment ?

function getDataForDay_asArray(day){
    let fs              = require('fs')
    let filename        = "data.txt"
    let fileContent     = fs.readFileSync(process.cwd() + "\\" + "d_" + day.toString() + "\\" + filename).toString()
    let dataArray       = fileContent.split(/\r?\n/)
    return dataArray
}

let sonarSweep_data = getDataForDay_asArray(1)

// this assumes array is > 1
let increaseCounter = 1
for ( let i = 0 ; i < sonarSweep_data.length ; i++){
    let point_current     = sonarSweep_data[i]
    let point_next        = sonarSweep_data[i+1]
    if ( point_current < point_next){
        increaseCounter +=1
        console.log("#"+i + "\t" + point_current + " < " + point_next +"\tincreaseCounter["+ increaseCounter +"]")
    }
}

console.log(sonarSweep_data.length + " measurements\n" + increaseCounter + " are an increase from previous measurement")
