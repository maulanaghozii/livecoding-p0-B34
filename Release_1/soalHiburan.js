function isSave(board) {
  //code here
  let koorBanteng = []
  let koorPion = []
  for(let i=0; i<board.length; i++){
    for(let j=0; j<board[i].length; j++){
      if(board[i][j] === 'B'){
        koorBanteng.push(i)
        koorBanteng.push(j)
      } else if(board[i][j] === 'P'){
        koorPion.push(i)
        koorPion.push(j)
      }
    }
  }

  if(koorBanteng.length === 0 && koorPion.length === 0){
    return 'papan catur kosong'
  } else if(koorPion.length === 0){
    return 'tidak ada pion'
  } else if (koorBanteng.length === 0){
    return 'tidak ada banteng'
  } else if(koorBanteng[0] === koorPion[0] || koorBanteng[1] === koorPion[1]){
    return false
  } else{
    return true
  }
}

console.log(isSave(
  [
    [' ', ' ', ' ',' ', ' '],
    [' ', ' ', ' ',' ', ' '],
    [' ', ' ', ' ',' ', ' '],
    [' ', 'B', ' ',' ', ' '],
    [' ', ' ', 'P',' ', ' ']
  ]
)) // true

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', 'B', ' '],
    [' ', 'P', ' ']
  ]
)) // false

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', 'B', 'P'],
    [' ', ' ', ' ']
  ]
)) // false

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', 'B', ' '],
    [' ', ' ', ' ']
  ]
))

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', ' ', 'P'],
    [' ', ' ', ' ']
  ]
))

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
))