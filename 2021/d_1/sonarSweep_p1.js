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
let increaseCounter = 0
for ( let i = 0 ; i < sonarSweep_data.length ; i++){
    let point_current     = sonarSweep_data[i]
    let point_next        = sonarSweep_data[i+1]
    let message = "#"+i
    if ( point_current < point_next){
        increaseCounter +=1
        message += ( "\t" + point_current + " < " + point_next +"\t[ "+ increaseCounter +" ]")
    }
    else{
        message += ("\t" + point_current + " >= " + point_next)
    }
    console.log(message)
}

console.log(sonarSweep_data.length + " measurements\n" + increaseCounter + " are an increase from previous measurement")
