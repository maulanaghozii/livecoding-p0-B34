/*
  //////////////////////
  FUNCTION MULTIPLE BY 3
  //////////////////////

  Fungsi Multiple By 3 akan mengalikan angka-angka dengan angka di 3 setelahnya,
  kemudian akan menjumlahkan angka tersebut ketika ganjil

  [PROCESS]

  INPUT:
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  PROCESS:
  1 * 5 = 5 (ganjil)
  2 * 6 = 12 (genap)
  3 * 7 = 21 (ganjil)
  4 * 8 = 32 (genap)
  5 * 9 = 45 (ganjil)

  5 + 21 + 45 = 71
  OUTPUT:
  71

  [RULES]

  - Dilarang menggunakan built in function apapun
*/

function multipleBy3 (array) {
  // code below here
  let counter = 0;
  let arrayMultiply = []
  for(let i=0; i<array.length-4; i++){
    arrayMultiply[i] = array[i]*array[i+4];
  }
  for(let i=0; i<arrayMultiply.length; i++){
    if(arrayMultiply[i]%2 !== 0){
      counter += arrayMultiply[i];
    }
  }
  console.log(arrayMultiply)
  return counter;
};

console.log(multipleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 71