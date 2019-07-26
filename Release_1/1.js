/*
  ////////
  LionWars
  ////////

  Function LionWars adalah suatu function yang akan menerima sebuah parameter string
  dan mengembalikkan bentukkan berdasarkan beberapa release.

  [EXAMPLE]
  INPUT: 'Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'

  RELEASE 0 (20 point)
  OUTPUT: [{ name: Raza }, { name: Sylvana }, { name: Anduin }]
  RELEASE 1 (20 point)
  OUTPUT: [{ name: Raza, power: 1000 }, { name: Sylvana, power: 800 }, { name: Anduin, power: 2000 }]
  RELEASE 2 (20 point)
  OUTPUT: [{ name: Raza, power: 1000, healthPoint: 2000 }, { name: Sylvana, power: 800, healthPoint: 500 }, { name: Anduin, power: 2000, healthPoint: 4000 }]
  RELEASE 3 (20 point)
  OUTPUT: [
    { name: Raza, power: 1000, healthPoint: 2000, ability: Bash },
    { name: Sylvana, power: 800, healthPoint: 500, ability: Heal },
    { name: Anduin, power: 2000, healthPoint: 4000, ability: Paladin }]
  RELEASE 4 (20 point)
  The strongest power is Anduin and the lowest healthPoint is Sylvana

  [RULES]
  1. Hanya boleh menggunakan built in function .push(), .unshift()
*/
function pemisah(info){
  let arrayTemp = []
  let name = ''
  for(let i=0; i<info.length; i++){
    if(info[i]===','){
      arrayTemp.push(name)
      name = ''
    } else {
      name += info[i]
    }
  }
  name = ''
  for(let i=info.length-1; i>0; i--){
    if(info[i]===','){
      arrayTemp.push(name)
      break
    } else {
      name = info[i] + name
    }
  }
  let dataHero = []
  let nameHero = []
  for(let i=0; i<arrayTemp.length; i++){
    let nameTemp = ''
    for(let j=0; j<arrayTemp[i].length; j++){
      if(arrayTemp[i][j] === ':'){
        nameHero.push(nameTemp)
        break
      } else{
        nameTemp += arrayTemp[i][j]
      }
    }
    nameTemp = ''
    for(let j=arrayTemp[i].length-1; j>0; j--){
      if(arrayTemp[i][j] === ':'){
        nameHero.push(nameTemp)
        break
      } else{
        nameTemp = arrayTemp[i][j] + nameTemp
      }
    }
    dataHero.push(nameHero)
    nameHero = []
  }
  return dataHero
}

function pemisahPower(array){
  let getArray = pemisah(array)
  let result = []
  for(let i=0; i<getArray.length; i++){
    let status = false
    let temp   = ''
    let group  = []
    for(let j=0; j<getArray[i][1].length; j++){
      if(status){
        temp+=getArray[i][1][j]
      }
      if(getArray[i][1][j] === '-' && status===false){
        status=true
      } else if (getArray[i][1][j+1] === '-' && status === true || j===getArray[i][1].length-1){
        status=false
        group.push(temp)
        temp = ''
      }
    }
    result.push(group)
  }
  let arrayResult = []
  for(let i=0; i<result.length; i++){
    arrayResult.push({
      name: getArray[i][0],
      power: result[i][0],
      healthPoint: result[i][1],
      ability: result[i][2]
    })
  }
  return arrayResult
}
// console.log(pemisahPower('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'))


function LionWarsRelease0(info) {
 let dataHero = pemisahPower(info)
 let result = []
 for(let i=0; i<dataHero.length; i++){
    result.push({name: dataHero[i].name})
 }
 return result
}

// console.log(LionWarsRelease0('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease1(info){
  let dataHero = pemisahPower(info)
  let result = []
  for(let i=0; i<dataHero.length; i++){
     result.push({name: dataHero[i].name, power: dataHero[i].power})
  }
  return result
}
// console.log(LionWarsRelease1('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease2(info) {
  let dataHero = pemisahPower(info)
  let result = []
  for(let i=0; i<dataHero.length; i++){
     result.push({name: dataHero[i].name, power: dataHero[i].power, healthPoint: dataHero[i].healthPoint })
  }
  return result
}
// console.log(LionWarsRelease2('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease3(info) {
  let dataHero = pemisahPower(info)
  let result = []
  for(let i=0; i<dataHero.length; i++){
     result.push({name: dataHero[i].name, power: dataHero[i].power, healthPoint: dataHero[i].healthPoint, ability: dataHero[i].ability})
  }
  return result
}
// console.log(LionWarsRelease3('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease4(info) {
  let dataHero      = LionWarsRelease3(info);
  let highestPower  = parseInt(dataHero[0].power)
  let highestName   = dataHero[0].name
  let lowestPower   = parseInt(dataHero[0].power)
  let lowestName    = dataHero[0].name
  for(let i=1; i<dataHero.length; i++){
    if(parseInt(dataHero[i].power) > highestPower){
      highestPower = parseInt(dataHero[i].power)
      highestName  = dataHero[i].name
    }
    if(parseInt(dataHero[i].power) < lowestPower){
      lowestPower = parseInt(dataHero[i].power)
      lowestName  = dataHero[i].name
    }
  }
  return `The strongest power is ${highestName} and the lowest healthPoint is ${lowestName}`
}

console.log(LionWarsRelease4('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));