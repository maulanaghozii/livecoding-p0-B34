/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/*
PSEUDOCODE
CREATE Function pointCalculator with parameter array
LET countGold with value 0
LET countSilver with value 0
LET countBronze with value 0
LET total with value 0
LET result without value
FOR until last index array
    LET gold with value string G
    LET silver with value string S
    LET bronze with value string B
    IF condition array index i EQUAL gold
      add one in value countGold
    ELSE IF condition array index i EQUAL silver
      add one in value countSilver
    ELSE IF condition array index i EQUAL bronze
      add one in value countBronze
    END IF
END FOR
CALCULATE total with countGold multiply 2 THEN plus countSilver multiply 1 THEN plus countBronze multiply 0.5
PROCESS result with CONCATINATION 'Jumlah Gold:' CONCAT value countGold CONCAT 'Jumlah Silver:' CONCAT value countSilver  CONCAT 'Jumlah Bronze:' CONCAT value countBronzd CONCAT 'Dan Totalnya adalah:' CONCAT  value total
DISPLAY result
*/

function poinCalculator(array) {
    // your code here
    let countGold = 0;
    let countSilver = 0;
    let countBronze = 0;
    let total = 0;
    let result;
    for(let i=0; i<array.length; i++){
      let gold = 'G';
      let silver = 'S';
      let bronze = 'B';
      if(array[i] === gold){
        countGold+=1;
      } else if(array[i]===silver){
        countSilver+=1;
      } else if(array[i]===bronze){
        countBronze+=1;
      }
    }
    total = (countGold*2)+(countSilver*1)+(countBronze*0.5);
    result = 'jumlah Gold: ' + countGold+ ', jumlah Silver: ' +countSilver+', jumlah Bronze: '+countBronze+'. Dan totalnya adalah: '+total;
    return result;
  }
  
  console.log(poinCalculator("GSB"));
  // jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
  console.log(poinCalculator("GGG"));
  // jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
  console.log(poinCalculator("SSB"));
  // jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
  console.log(poinCalculator("BBGSSGB"));
  // jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
  console.log(poinCalculator(""));
  // jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0