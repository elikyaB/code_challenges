// https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript
function validSolution(board){
    const col = [[],[],[],[],[],[],[],[],[]]
    for (let i=0; i<9; i++) {
        if (board[i].reduce((t,n)=>{return t+n})!==45) {return false}
        else {board.forEach((r) => {col[i].push(r[i])})}
    }
    for (let x=0; x<9; x+3) {
        for (let y=0; y<9; y+3) {
            board[]
        }
    }
    return col.every((c)=>{
        return c.reduce((t,n)=>{return t+n})===45
    })
}

const board = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]

console.log(validSolution(board))

// console.log(board.map((n,i) => {
//     console.log(i)
//     return n
// }))

// console.log(board[0].reduce((t,n)=>{return t+n}))