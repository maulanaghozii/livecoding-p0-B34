/*
  /////////////////////
  FUNCTION TUKAR GANJIL
  /////////////////////

  Fungsi Tukar Ganjil akan mengubah besar dan kecil huruf apabila berada di index yang ganjil.

  [PROCESS]

  INPUT:
  'Dana K'
  PROCESS:
  1 => d (karena 1 ganjil)
  2 => a
  3 => N (karena 3 ganjil)
  4 => a
  5 => ' ' (diabaikan)
  6 => K
  OUTPUT:
  daNa K

  [RULES]

  - Dilarang menggunakan built in function apapun
*/

function tukarGanjil(kalimat) {
  // code below here
  const upperCase = 'ABCDEFGHOJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let arrayKalimat = [];
  for(let i=0; i<kalimat.length; i++){
    arrayKalimat[i] = kalimat[i];
  }
  for(let i=0; i<arrayKalimat.length; i++){
    if(i%2 === 0){
      for(let j=0; j<upperCase.length; j++){
        if(arrayKalimat[i] === upperCase[j]){
          arrayKalimat[i] = lowerCase[j];
        } else if(arrayKalimat[i] === lowerCase[j]){
          arrayKalimat[i] = upperCase[j]
        }
      }
    }
  }
  let newKalimat = '';
  for(let i=0; i<arrayKalimat.length; i++){
    newKalimat += arrayKalimat[i];
  }
  return newKalimat;
};

// TEST CASES
console.log(tukarGanjil('Hello World')); // "heLlO woRlD"
console.log(tukarGanjil('I aM aLAY')); // "i AM alAy"
console.log(tukarGanjil('My Name is Bond!!')); // "my NAmE Is BOnD!!"
console.log(tukarGanjil('IT sHOULD bE me')); // "iT shOuLd BE mE"
console.log(tukarGanjil('001-A-3-5TrdYW')); // "001-a-3-5TRdyW"