// how many sums are larger tthan the previous measurment ?

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
for ( let i = -3 ; i < sonarSweep_data.length +3 ; i++){
    let sum_previous    = parseInt(sonarSweep_data[i-1])   + parseInt(sonarSweep_data[i])   + parseInt(sonarSweep_data[i+1])
    let sum_current     = parseInt(sonarSweep_data[i])   + parseInt(sonarSweep_data[i+1])   + parseInt(sonarSweep_data[i+2])
    let sum_next        = parseInt(sonarSweep_data[i+1])   + parseInt(sonarSweep_data[i+2])  + parseInt(sonarSweep_data[i+3])

    let message = "#"+i
    if ( sum_current < sum_next){
        increaseCounter +=1
        message += ( "\t" + sum_current + " < " + sum_next +"\t[ "+ increaseCounter +" ]")
    }
    else{
        message += ("\t" + sum_current + " >= " + sum_next)
    }
    console.log(message)
}

console.log(sonarSweep_data.length + " sets can be compared\n" + increaseCounter + " sets are an increase from previous set")
