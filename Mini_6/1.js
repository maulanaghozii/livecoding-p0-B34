/*
  ===================
  MOBA LEGEND ADDRESS
  ===================

  mobaLegendAddress adlaah sebuah function dimana menerima 1 parameter heroes
    - heroes adalah sebuah array of object yang berisi info hero-hero mobile legend

  output dari function ini adalah array dengan object yang memiliki address yang berbeda

  [NOTES]
  - apabila terdapat hero yang tidak memiliki address maka dianggap tidak valid
  - dilarang menggunakan built in function selain .push(), .unshift(), .pop(), .shift()
  - urutan tidak masalah
*/
function adressGrouping(heroes){
  let grouping = {}
  for(let i=0; i<heroes.length; i++){
    if(grouping[heroes[i].address]===undefined){
      grouping[heroes[i].address] = [heroes[i]]
    } else {
      grouping[heroes[i].address].push(heroes[i])
    }
  }
return grouping
}

function findOnlyOneName(heroes, idx){
  if (!idx) idx = 0
  let keys= Object.keys(heroes).slice(idx);
  let values = Object.values(heroes).slice(idx);

  if(values.length === 0){
    return []
  }
  var city = []
  if(values[0].length === 1){
    city = [keys[0]]
  }
  return city.concat(findOnlyOneName(heroes, idx + 1))
}

// function findOnlyOneName(heroes){
//   let keys= Object.keys(heroes);
//   let values = Object.values(heroes);
  
//   let adress = []
//   for(let i=0; i<keys.length; i++){
//     if(values[i].length === 1){
//       adress.push(keys[i])
//     }
//   }
//   return adress;
// }
// console.log(findOnlyOneName())

function mobaLegendAddress(heroes) {
  // code here
  let grouping = adressGrouping(heroes);
  let adress = findOnlyOneName(grouping)
  console.log(adress)
  if(adress.length === 1){
    return grouping[adress[0]]
  } else {
    return 'Tidak ada yang unik'
  }
}

console.log(mobaLegendAddress([
  {
    name: 'Layla',
    address: 'Cimahi'
  },
  {
    name: 'Ghozi',
    address: 'Bandung'
  },
  {
    name: 'Zi Long',
    address: 'Cimahi'
  },
  {
    name: 'Balmond',
    address: 'Bandung'
  },
  {
    name: 'Maulana',
    address: 'Bandung'
  },
  {
    name: 'Freya',
    address: 'jakarta'
  },
  {
    name: 'Alucard',
    address: 'Sukabumi'
  },
  {
    name: 'Guard',
    address: 'Cimahi'
  },
  {
    name: 'Gaa',
    address: 'Bandung'
  },
]))
// [{
//   name: 'Zi Long',
//   address: 'Sukabumi'
// }]