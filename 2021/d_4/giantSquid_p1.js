const fs        = require("fs")
const data_test = fs.readFileSync(process.cwd() + "\\d_4\\data_test.txt").toString().split("\n")
const data      = fs.readFileSync(process.cwd() + "\\d_4\\data.txt").toString().split("\n")
const boardStart        = 2
const boardSize         = 5
//console.log(data_test)
//console.log(data)

function board(number, valueArray_2d){
    this.number = number
    this.valueArray_2d = valueArray_2d
}

function displayBoard(in_board){
    console.log("about to print board")
    const numbers = in_board.valueArray_2d
    let message = ""
    for(let y = 0 ; y < boardSize ; y++){
        message += '\n'
        //console.log()
        for(var x = 0 ; x < boardSize ; x++){
            //console.log(x)
            //console.log(y)
            //console.log(numbers[x][y])
            message += numbers[y][x] + ','
        }
    }
    return message
}

function get_finalScore(dataSet ){
    const calls = dataSet[0].split(',').map(x=> parseInt(x))
    if(is_debug) console.log(calls)

    
    const numberofBoards    = ( dataSet.length -1) / (boardSize+1)
    const boards = new Array()
    console.log(numberofBoards)
    for(let i =0 ; i < numberofBoards; i++){
        let selBoard_firstLine  = boardStart + i*(boardSize+1)
        let selBoard_lastLine   = selBoard_firstLine + boardSize
        // I NEED TO CONVERT NUMBERS TO INTEGERS HERE
        const boardNumbers      = dataSet.slice(selBoard_firstLine,selBoard_lastLine)
        const selBoard          = new board(i,boardNumbers)
        boards.push(selBoard)

        console.log(displayBoard(selBoard))
    }

    if(is_debug) console.log(boards)
    // make up each of the boards they are all 5*5
    //starting from line 3
    //      next 5 lines are the array
    //      skip a line
    
    return 10
}

let is_debug            = true
let test_result         = get_finalScore(data_test)
let test_knownAnswer    = 4512

console.assert(test_result == test_knownAnswer , "test_result["+test_result+ "] =/= test_knownAnswer [" + test_knownAnswer + "]")

//let finalScore          = get_finalScore(data)
//console.log("p1 Answer = " + finalScore)
