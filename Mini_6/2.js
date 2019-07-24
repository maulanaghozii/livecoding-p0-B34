/*
  ======================
  MOBA LEGEND BEST POWER
  ======================

  mobaLegendBestPower adlaah sebuah function dimana menerima 1 parameter heroes
    - heroes adalah sebuah array of object yang berisi nama-nama hero mobile legend
    - terdapat bonus combination yang merupakan bonus power untuk kombinasi hero

  output dari function ini adalah sebuah number total power terbesar
  
  [NOTES]
  - intinya menjumlahkan semua power ditambah juga dengan bonusCombination bila ada yang sesuai
  - dilarang menggunakan built in function selain .push(), .unshift(), .pop(), .shift()
*/

function mobaLegendBestPower(heroes) {
  var bonusCombination = {
    'Zi Long+Layla': 300,
    'Layla+Kagura': 400
  }
  let keys = Object.keys(bonusCombination)
  let values = Object.values(bonusCombination)
  // code here
  let result = 0
  for(let i=0; i<heroes.length; i++){
    result += heroes[i].power
  }
  for(let i=0; i<heroes.length; i++){
    for(let j=0; j<heroes.length; j++){
      for(let k=0; k<keys.length;k++){
        if(heroes[i].name+'+'+heroes[j].name === keys[k]){
          result += values[k]
        } else if(heroes[i].name+'+'+heroes[j].name===keys[k]){
          result += values[k]
        }
      }
    }
  }
  return result
}

console.log(mobaLegendBestPower([
  {
    name: 'Zi Long',
    power: 2000
  },
  {
    name: 'Layla',
    power: 1800
  },
  {
    name: 'Kagura',
    power: 2500
  }
])) // 7000

console.log(mobaLegendBestPower([
  {
    name: 'Zi Long',
    power: 2000
  },
  {
    name: 'Layla',
    power: 1800
  }
])) // 4100