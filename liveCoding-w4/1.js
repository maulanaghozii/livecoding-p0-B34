/*
  ////////////
  sumTheNumber
  ////////////

  Function sumTheNumber akan menentukkan jumlah dari angka-angka dalam suatu string.
  Function akan menerima 1 parameter yaitu:
    - stringAngka adalah string yang berisi kumpulan data, tipe datanya string.
    - apabila stringAngka tersebut pada index yang ganjil maka akan ditambahkan
      jumlah kelipatan 2, selain itu cukup jumlahkan langsung.
  Function ini akan mengembalikkan nilai number.
  
  --------
  EXAMPLE:
  --------
  [INPUT]
    var stringNumber = '123456'

  [PROCESS]
  string  : 1   2   3   4   5   6
  index   : 0   1   2   3   4   5
  result  : 1 (2*2) 3 (2*4) 5 (2*6) => 1 + 4 + 3 + 8 + 5 + 12

  [OUTPUT]
    33

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift(), dan di RULES lain.
    2. Diperbolehkan untuk menggunakan built in untuk mengubah tipe data String ke Number, ataupun sebaliknya.
    2. Diasumsikan string selalu ada nilainya dan nilainya positif.
    3. WAJIB menggunakan PSEUDOCODE atau nilai 0.
*/

// Pseudocode
// Creat Function SumTheNumber with Parameter stringNumber
// LET arrayNumber with empty Array
// LET result with value 0
// FOR in arrayNumber until last index
        //Change Type Data String to Number
        //PUSH to arrayNumber
// END FOR
// FOR in arrayNumber until last index
        //IF index ODD
             //Value in index ODD multiply 2
        // ELSE 
             //Value in index EVEN still same
        //END IF
// FOR in arrayNumber until last index
      //SUM ALL Value in arrayNumber
      //result from Count value add within Result
// END FOR
// DISPLAY result;

function sumTheNumber(stringNumber) {
  // code here
  let arrayNumber = [];
  let result = 0;
  for(let i = 0; i<stringNumber.length; i++){
    let numbers = parseInt(stringNumber[i]);
    arrayNumber.push(numbers)
  }
  for(let j=0; j<arrayNumber.length; j++){
    if(j%2 !== 0){
      arrayNumber[j] = arrayNumber[j]*2;
    } else {
      arrayNumber[j] = arrayNumber[j];
    }
  }
  for(let k=0; k<arrayNumber.length; k++){
    result = result+arrayNumber[k];
  }
  return result;
}

console.log(sumTheNumber('123456')) // 33
console.log(sumTheNumber('341231')) // 21
console.log(sumTheNumber('1')) // 1
console.log(sumTheNumber('01')) // 2