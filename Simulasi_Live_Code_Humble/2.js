/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string

  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/

function Heroes(hero) {
  // code below here
  if(hero.length === 0){
    return 'There\'s no heroes'
  }
  let result = []
  let name = ''
  for(let i=0; i<hero.length; i++){
    if(hero[i] === '&' && hero[i+1] === '&'){
      result.push(name)
      name = ''
      i++
    } else {
      name += hero[i]
    }
  }
  name = ''
  for(let i=hero.length-1; i>0; i--){
    if(hero[i] === '&' && hero[i-1] === '&'){
      result.push(name)
      name = ''
      break
    } else {
      name = hero[i] + name
    }
  }
  let objectName = {}
  for(let i=0; i<result.length; i++){
    if(objectName[result[i]]===undefined){
      objectName[result[i]] = 1
    } else {
      objectName[result[i]]++
    }
  }

  return Object.keys(objectName)
}


// TEST CASE
console.log(Heroes("saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"))
// [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
console.log(Heroes("doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar"))
// [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
console.log(Heroes(""))
// There's no heroes
