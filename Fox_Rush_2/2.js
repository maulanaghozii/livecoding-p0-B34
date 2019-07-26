/*
  //////////////////////
  FUNCTION EVEN DEEP SUM
  //////////////////////

  Fungsi Even Deep Sum adalah fungsi untuk menjumlahkan isi dari multidimensi array yang genap.

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
  PROCESS:
  genap = 2 + 2 + 2 + 2
  OUTPUT:
  8

  [RULES]

  - Dilarang menggunakan built in function selain .reduce()
  - Apabila tidak ada nilai output yang di kembalikan, maka kembalikan 'No Number'
*/

function evenDeepSum(array) {
  // code here
  if(array.length === 0){
    return 'no number'
  }

  /* let result =  0;
  for(let i=0; i<array.length; i++){
    if(typeof array[i] ==='number' && array[i]%2 === 0){
      result+=array[i]
    } else{
      result += evenDeepSum(array[i])
    }
  }
  return result */

    if (array.length === 0) {
      return 0
    }
    var depan = array[0]
    if(typeof depan !=='number'){
      depan = evenDeepSum(array[0])
    }

    if(array.length === 1){
      if(depan%2 === 0){
        return depan
      } else{
        return 0
      }
    } else if(depan%2 ===0){
        return depan + evenDeepSum(array.slice(1))
    }else {
      return 0 + evenDeepSum(array.slice(1))
    } 
}

//TEST CASE
console.log(evenDeepSum([
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
])); // 230

console.log(evenDeepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 64

console.log(evenDeepSum([])); // No number
