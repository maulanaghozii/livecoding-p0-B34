/*
  ===========
  Fear Factor
  ===========

  [INSTRUCTIONS]
  Fear Factor adalah suatu fungsi untuk mengetahui dia bisa menjadi juara atau
  tidak.

  [EXAMPLE]
  Input:
  fearFactor = 'Single'
  weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air']
  Output:
  Dia kalah karena kelemahan yang pertama

  [RULE]
  - WAJIB menggunakan PSEUDOCODE
  - Maksimal weaknesses ada 9
  - Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/
/*
=== PSEUDOCODE ===
CREATE Function fearFactorFunc with parameter factor and weakAgainsts
  factor is singel string
  weakAgainsts is array max index 8
STORE message with value string "Selamat dia juara"
STORE number with array value 'pertama', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan' and 'sembilan'
FOR weakAgainsts until last index
  IF factor EQUAL weakAgainsts index i
    IF index i EQUAL zero
      REPLACE message to ''Dia kalah karena kelemahan yang  ' CONCAT number index i
    ELSE 
      REPLACE message to ''Dia kalah karena kelemahan yang ke' CONCAT number index i
    END IF
  END IF
END FOR

*/
 
function fearFactorFunc(factor, weakAgainsts) {
  // code below here
  let message='Selamat dia juara';
  const number = ['pertama', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan','sembilan']
  for(let i=0; i<weakAgainsts.length; i++){
    if(factor === weakAgainsts[i]){
      if(i === 0){
        message = 'Dia kalah karena kelemahan yang  '+number[i];
      } else {
        message = 'Dia kalah karena kelemahan yang ke' +number[i];
      }
    } 
  }
  console.log(message);
};

var fearFactor = 'Single';
var weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air'];
fearFactorFunc(fearFactor, weaknesses);
// Dia kalah karena kelemahan yang pertama

var fearFactor2 = 'Menikah';
var weaknesses2 = ['Single', 'Jomblo', 'Tikus', 'Air'];
fearFactorFunc(fearFactor2, weaknesses2);
// Selamat dia juara

var fearFactor3 = 'Menikah';
var weaknesses3 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Menikah'];
fearFactorFunc(fearFactor3, weaknesses3);
// Dia kalah karena kelemahan yang kesembilan

var fearFactor4 = 'Menikah';
var weaknesses4 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Jomblo Fisabilillah'];
fearFactorFunc(fearFactor4, weaknesses4);
// Selamat dia juara
