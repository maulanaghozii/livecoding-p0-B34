/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikkan nilai string yang merupakan pemenang perlombaan.

[EXAMPLE]
INPUT: [
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
]

PROCESS: 
1. array[0] akan berisi nama-nama pemain
2. array-aray pada indeks berikutnya akan berisi attribut-attribut yang dimiliki oleh setiap pemain sesuai dengan indeksnya
3. pada array[1] andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun
4. pada array[2] andre tidak memiliki fun, toni tidak memiliki fun, dan toti tidak memiliki fun.
5. total andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun, sehingga pemenangnya adalah toni.

OUTPUT: pemenangnya adalah toni

[NOTES]
  1. Apabila tidak ada pemenang tampilkan "mohon maaf tidak ada pemenangnya"
  2. Asumsi tidak akan ada yang seri tapi tidak selalu ada pemenangnya

[RULES]
  1. Dilarang menggunakan built in function .sort()
*/

function warOfFun(informations) {
  // code here
  let message = "";
  let name = informations[0];
  let counter = [];

  if(informations[0] === undefined){
    return  'mohon maaf tidak ada pemenangnya'
  } 

  for(let i = 0; i<name.length; i++){
    let counterNow = 0
    for(let j=1; j<informations.length; j++){
      if(informations[j][i] === 'fun'){
        counterNow ++
      } 
    }
    counter.push(counterNow)
  }

  for(let i=1; i<counter.length; i++){
    let highestScore = counter[0];
    let highestName  = name[0];
    if(highestScore < counter[i]){
      highestScore = counter[i]
      highestName = name[i]
      message = 'pemenangnya adalah '+ highestName;
    }

    let total = 0;
    for(let j=0; j<counter.length; j++){
      total += counter[j]
    }
    if(total === 0){
      message = 'mohon maaf tidak ada pemenangnya'
    }
  }
 return message;
}

console.log(warOfFun([
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
]))
// pemenangnya adalah toni

console.log(warOfFun([
  ['andre', 'toni', 'toti', 'tito'],
  ['fun', 'fun', 'fun'],
  ['fun', 'fun'],
  ['nonfun', 'fun', 'fun', 'fun']
]))
// pemenangnya adalah toni

console.log(warOfFun([
  ['andre', 'toni'],
  ['risk', 'go'],
  ['humble', 'strong']
]))
// mohon maaf tidak ada pemenangnya

console.log(warOfFun([]))
// mohon maaf tidak ada pemenangnya