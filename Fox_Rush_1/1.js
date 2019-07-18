/*
  /////////////////////
  FUNCTION MEDIAN GENAP
  /////////////////////

  Fungsi Median Genap adalah mencari nilai median yang berupa genap di array.

  [PROCESS]

  INPUT:
  [1, 3, 4, 5, 6, 7]
  PROCESS:
  genap = [4, 6]
  median = 5
  OUTPUT:
  5

  [RULES]

  - Dilarang menggunakan built in function selain .push()
*/

function medianGenap(arr) {
  // code below here
  let arrayEven = []; 
  for(let i=0; i<arr.length;i++){
    if(arr[i] % 2 === 0){
      arrayEven.push(arr[i]);
    }
  }
  
  let median;
  let longArrayEven = arrayEven.length
  if(longArrayEven < 1){
    return 'tidak ada median'
  } else if(longArrayEven % 2 === 0){
      median = (arrayEven[longArrayEven/2]+arrayEven[(longArrayEven/2)-1])/2
  } else if(longArrayEven%2 !==2){
    median = arrayEven[(longArrayEven-1)/2];
  } 
  return median;
};

// TEST CASES
console.log(medianGenap([1, 2, 3, 4, 5])); // 3
console.log(medianGenap([1, 3, 4, 10, 12, 13])); // 10
console.log(medianGenap([3, 4, 7, 6, 10])); // 6
console.log(medianGenap([1, 3, 3])); // Tidak ada median
console.log(medianGenap([7, 7, 8, 8])); // 8