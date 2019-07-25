/*
  ///////////////////
  FUNCTION UBAH MODUS
  ///////////////////

  Fungsi Ubah Modus adalah sebuah fungsi yang mengubah modus dengan nama yang baru

  [PROCESS]

  INPUT:
  arrayModus = ['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela']
  modusBaru = 'Dilla'
  OUTPUT:
  ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']

  [RULES]

  - Asumsi selalu ada modus dan newModus
*/

function ubahModus(arrayModus, newModus) {
  // code here
  let objModus={}
  for(let i=0; i<arrayModus.length; i++){
    if(objModus[arrayModus[i]]===undefined){
      objModus[arrayModus[i]] = 1
    } else {
      objModus[arrayModus[i]]++
    }
  }
  let keys = Object.keys(objModus)
  let values = Object.values(objModus)
  let modusName = keys[0]
  let highestModus = values[0]
  for(let i=1; i<values.length; i++){
    if(values[i] > highestModus){
      modusName = keys[i]
    }
  }

  for(let i=0; i<arrayModus.length; i++){
    if(arrayModus[i] === modusName){
      arrayModus[i] = newModus
    }
  }
  return arrayModus
}

// TEST CASES
console.log(ubahModus(['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela'], 'Dilla'))
// ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']
console.log(ubahModus(['Anita', 'Reina', 'Anita'], 'Sora'))
// ['Sora', 'Reina', 'Sora']