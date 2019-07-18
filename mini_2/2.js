/*
  CHANGE WORDS
  Change words adalah sebuah fungsi yang menerima input
  berupa multi dimensional array yang berisi kata dan
  akan mengembalikan nilai baru berupa array multidimensional yang sudah diubah kata-katanya.

  RULES:
  1. Asumsi index row dan col selalu dimulai dari 0
  2. Pertambahan index row dan col akan menentukan bagaimana kata tersebut akan diolah:
    a. Apabila hasil pertambahan adalah bilangan prima maka hilangkan semua huruf vokal (a, e, i, u, o)
    b. Apabila hasil pertambahan adalah angka genap maka balik atau reversed kata tersebut
    c. Apabila hasil pertambahan adalah angka ganil maka ubah semua menjadi huruf besar

  EXAMPLE:
  INPUT: [
    ["cat", "fish"],
    ["dog", "cow"]
  ]
  OUTPUT: [
      ["tac", "FISH"],
      ["DOG", "wc"]
    ]

  EXPLANATION
    1. pertambahan index pada kata "cat" 0 berarti dia hanya bilangan genap sehingga kata "cat" dibalik menjadi "tac"
    2. pertambahan index pada kata "fish" dan "dog" adalah bilangan ganjila sehingga kedua kata tersebut diubah ke huruf besar
    3. Pertambahan pada kata "cow" adalah bilangan genap dan prima sehingga kata tersebut dibalik dan dihilangkan huruf vokalnya

  RULES:
    1. dilarang menggunakan built in function .split, .reversed, .join, .filter, .map dan sejenisnya
*/

function angkaPrima(angka) {
  // you can only write your code here!
  if(angka < 2){
      return false;
  } else if(angka === 2){
      return true;
  } else {
      for(let pembagi=2; pembagi<angka; pembagi++){
          if(angka % pembagi === 0){
              return false;
          }
      }
      return true;
  }
}

function changeWords(words) {
  // code below here
  for(row = 0; row<words.length; row++){
    for(col=0; col<words[row].length; col++){
      if(angkaPrima(row+col)) {
        let str = ''
        for(let i=0; i<words[row][col].length; i++){
          let cell = words[row][col];
          if(cell[i] === 'a' || cell[i] === 'e' || cell[i] === 'i' || cell[i] === 'o' || cell[i] === 'u'){
            
          } else {
            str += cell[i]
          }
        }
        words[row][col] = str;
      }
      console.log(words[row][col])
      if((row+col) % 2 !== 0){
        let upper = words[row][col].toUpperCase()
        words[row][col] = upper;
      } 
      if((row+col) % 2 === 0){
        let wordReverse = '';
        for(let i=0; i<words[row][col].length; i++){
          wordReverse = words[row][col][i] + wordReverse;
        }
        words[row][col]=wordReverse;
      }
    }
  }
  return words;
};

var words = [
  ["cat", "dog", "fish"],
  ["cat", "dog", "fish"], 
  ["cat", "dog", "fish"]
]
console.log(changeWords(words))
/*
[ 
  [ 'tac', 'DOG', 'hsf' ],
  [ 'CAT', 'gd', 'FSH' ],
  [ 'tc', 'DG', 'hsif' ] 
]

*/