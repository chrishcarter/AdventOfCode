

function getDataForDay_asArray(day, is_test){
    let fs              = require('fs')
    let filename        = is_test? "data_test.txt" : "data.txt"
    let fileContent     = fs.readFileSync(process.cwd() + "\\" + "d_" + day.toString() + "\\" + filename).toString()
    let dataArray       = fileContent.split(/\r?\n/)
    return dataArray
}

function Coordinate(x,y){
    // input all integers
    this.x = x;
    this.y = y;
}


function Line(x1,y1,x2,y2){
    // input all integers
    this.line_start = new Coordinate(x1,y1)
    this.line_end   = new Coordinate(x2,y2)

    // get direction of line
    this.isHorizontal = this.isVertical = this.isDiagonal = false
    if(this.line_start.y === this.line_end.y){
        //console.log(this.line_start.y,this.line_end.y)
        this.isHorizontal = true
    }else if(this.line_start.x == this.line_end.x){
        //console.log(this.line_start.x,this.line_end.x)
        this.isVertical = true
    }else{
        this.isDiagonal = true
    }
    
    function calculatePrintDetails(thisLine){
        const points =    "[" + thisLine.line_start.x + ","+  thisLine.line_start.y + "]" +
                        " -> " +
                        "[" + thisLine.line_end.x + ","+  thisLine.line_end.y + "]"
        let lineType = ""                
            if(thisLine.isHorizontal)       lineType = "─"
            else if(thisLine.isVertical)    lineType = "|"
            else                            lineType = "/"

        //let occupied = ":" + thisLine.occupiedCoordinates.length
        return points + "\t" + lineType// + " " + occupied
    }

    this.printDetails = calculatePrintDetails(this)
}

function convertArray_ofString_toLine(in_stringArray){
    var myRegexp = new RegExp("([0-9]+),([0-9]+) -> ([0-9]+),([0-9]+)")
    const out_vectorArray = []
    for ( i in in_stringArray){
        let selString = in_stringArray[i]
        var match = myRegexp.exec(selString)        

        out_vectorArray.push(new Line(
            parseInt(match[1]),
            parseInt(match[2]),
            parseInt(match[3]),
            parseInt(match[4])
            ))
    }
    return out_vectorArray
}
function get_max_xy(in_lineArray){
    let max_x = max_y = 0
    for(i in in_lineArray){
        const selLine = in_lineArray[i]
        if(selLine.line_start.x > max_x)    max_x = selLine.line_start.x
        if(selLine.line_start.y > max_y)    max_y = selLine.line_start.y
        if(selLine.line_end.x > max_x)      max_x = selLine.line_end.x
        if(selLine.line_end.y > max_y)      max_y = selLine.line_end.y
    }
    //console.log("max x,y:",max_x,max_y)
    return [max_x,max_y]
}
function make_2D_array(max_x, max_y){
    let     arr         = new Array()
    const   fillValue   = 0
    for(var x = 0 ; x<=max_x;x++){
        arr[x] = new Array(max_y+1).fill(fillValue)
        //console.log(arr[x])
    }
    return arr
}
function print_2D_grid(in_array){

    let message = "============"
    for( var y = 0 ; y < in_array.length ; y ++){
        message += '\n'
        for(var x = 0 ; x < in_array[y].length ; x++){
            let selValue = in_array[x][y]
            message += selValue > 0 ? selValue : '-'
        }
    }
    message += "\n============"
    console.log(message)
}
function print_occupiedCoordinates(occupiedCoordinates){
    let coordinates = "<"
    for(co in occupiedCoordinates){
        coordinates += "[" + occupiedCoordinates[co].x + ',' + occupiedCoordinates[co].y + "]"
    }
    coordinates += ">"
    return coordinates
}

function calculateOccupiedPoints(in_Line){

    let occupiedCoordinates = new Array()
    if(in_Line.isHorizontal){
        // go from smallest to greatest x value
        let s_x = in_Line.line_start.x
        let e_x = in_Line.line_end.x
        let min_x =  s_x > e_x ? e_x : s_x
        let max_x =  s_x < e_x ? e_x : s_x
        //console.log("\ncoords to change = " + (max_x - min_x))
        for(x = min_x ; x <= max_x ;x++) {

            let newCoord = new Coordinate(x,in_Line.line_start.y)
            //console.log(x)
            //console.log(newCoord)
            occupiedCoordinates.push(newCoord)
        }
    }else if(in_Line.isVertical){
        // go from smallest go greatest y value
        let s_y = in_Line.line_start.y
        let e_y = in_Line.line_end.y
        let min_y =  s_y > e_y ? e_y : s_y
        let max_y =  s_y < e_y ? e_y : s_y
        //console.log("coords to change = " + (max_y - min_y))
        for( let y = min_y ; y <= max_y ;y++) {
            let newCoord = new Coordinate(in_Line.line_start.x,y)
            //console.log(newCoord)
            occupiedCoordinates.push(newCoord)
        }
    }else{ // line must be diagonal
        let s_x = in_Line.line_start.x
        let s_y = in_Line.line_start.y
        let e_x = in_Line.line_end.x
        let e_y = in_Line.line_end.y
        //console.log("diagonal Line : " , in_Line.printDetails)
        // get array of all x values
        message = ""
        let x_values = new Array()
        let y_values = new Array()
        if(s_x < e_x){
            message += ("↑x")
            for(let x = s_x ; x <= e_x ; x++){
                x_values.push(x)
            }
        }else{
            message += ("↓x")
            for(let x = s_x ; x >= e_x ; x--){
                x_values.push(x)
            }
        }
        //console.log(x_values)
        message += ','
        // get array of all y values
        if(s_y < e_y){
            message += ("↑y")
            for(let y = s_y ; y <= e_y ; y++){
                y_values.push(y)
            }
        }else{
            message += ("↓y")
            for(let y = s_y ; y >= e_y ; y--){
                y_values.push(y)
            }
        }
        //console.log(y_values)
        // combine the arrays to get the coordinates
        //if(is_debug)console.log(message)

        for(i in y_values){// x and y are same length so it doesnt matter which one we go through first
            let newCoord = new Coordinate(x_values[i],y_values[i])
            //console.log(newCoord)
            occupiedCoordinates.push(newCoord)
        }
    }
    return occupiedCoordinates
}

function get_whereLinesOverlap(dataSet ){
    if(is_debug) console.log(dataSet)
    const lineArray     = convertArray_ofString_toLine(dataSet)
    const [max_x,max_y] = get_max_xy(lineArray)
    let grid      = make_2D_array(max_x,max_y)
    if(is_debug)print_2D_grid(grid)

    // check if the line isHorizontal or isVertical
    for( l in lineArray){
        const selLine = lineArray[l]
        //console.log(selLine.printDetails)
            
        const selOccupied = calculateOccupiedPoints(selLine)
        for( p in selOccupied){
            const selPos = selOccupied[p]
            grid[selPos.x][selPos.y] += 1
        }
        
        if(is_debug){
            console.log(selLine.printDetails + "\t" + print_occupiedCoordinates(selOccupied))
            print_2D_grid(grid)
        }
        
    }
    // count intersections ( anywhere a value > 1)
    let intersectCount = 0
    //print_2D_grid(grid)
    for( var y = 0 ; y < grid.length ; y ++){
        for(var x = 0 ; x < grid[y].length ; x++){
            if (grid[y][x] > 1) intersectCount++
        }
    }

    return intersectCount
}

let is_debug = false

let test_result         = get_whereLinesOverlap(getDataForDay_asArray(5, true))
let test_knownAnswer    = 12

console.assert(test_result == test_knownAnswer , "test_result["+test_result+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

let finalScore    = get_whereLinesOverlap(getDataForDay_asArray(5))
console.log("p2 Answer = " + finalScore)