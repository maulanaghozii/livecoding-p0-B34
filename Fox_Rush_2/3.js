/*
  ////////////////////////////////////
  FUNCTION SECOND SMALLEST NUMBER EXTRA
  ////////////////////////////////////

  Fungsi Second Largest Number Extra akan mengembalikkan nilai terkecil kedua.

  [PROCESS]

  INPUT:
  [
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [
      [1, 2, 3],
      [1, 2],
      [1]
    ]
  ]
  OUTPUT:
  2

  [RULES]
  - Apabila tidak ada nilai output yang di kembalikan, maka kembalikan 'No Number'
*/

function secondSmallestNumberExtra(array) {
  // code below here
  let dataNumber = [];
  for(let i=0; i<array.length; i++){
    if(typeof array[i] === 'number'){
      dataNumber.push(array[i])
    }else{
      secondSmallestNumberExtra(array[i])
    }
  }
  return secondSmall
}

//TEST CASE
console.log(secondSmallestNumberExtra([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 2

console.log(secondSmallestNumberExtra([
  [
    [1, 1],
    [1],
    [1, 1]
  ],
  [
    [1],
    [1],
    [1, 1]
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
    [1]
  ],
  [
    [1]
  ]
])); // No number

console.log(secondSmallestNumberExtra([])); // No number
