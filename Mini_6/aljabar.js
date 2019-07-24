function pemisahAntarFormaula(string){
    return string.split(' ')
}

function pemisahAntarEqual(array){
   let newArray = pemisahAntarFormaula(array)
   let finalArray = []
   for(let i=0; i<newArray.length; i++){
      finalArray.push(newArray[i].split('='))
    }
   return finalArray
}

function pemisahPlus(array){
    let newArray = pemisahAntarEqual(array)
    let arrayResult = []
    for(let i=0; i<newArray.length; i++){
        arrayResult.push(newArray[i][0].split('+'))
    }
    return arrayResult
}

function pemisahVariable(array){
    let newArray = pemisahPlus(array)
    let arrResult = []
    for(let i=0; i<newArray.length; i++){
        for(let j=0; j<newArray[i].length; j++){
            arrResult.push(newArray[i][j].split(''))
        }
    }
    for(let i=0; i<arrResult.length; i++){
        arrResult[i][0] = parseInt(arrResult[i][0])
    }
    return arrResult
}

function objLinear(array){
    let newArray = pemisahVariable(array)
    let result = pemisahAntarEqual(array)
    let objResult = {}
    for(let i=0; i<newArray.length; i++){
        if(objResult[newArray[i][1]]===undefined){
            objResult[newArray[i][1]]=[newArray[i][0]]
        } else{
            objResult[newArray[i][1]].push(newArray[i][0])
        }
    }
    for(let i=0; i<result.length; i++){
        if(objResult['value'] === undefined){
            objResult['value'] = [parseInt(result[i][1])]
        } else{
            objResult['value'].push(parseInt(result[i][1]))
        }
    }
    return objResult
}

function eliminasi(objectArray){
    let objVar = objLinear(objectArray)
    let keys = Object.keys(objVar)
    let values = Object.values(objVar)
    let multiply = [values[0][0],values[0][1]]

    for(let i=0; i<keys.length; i++){
        for(let j=0; j<values[i].length; j++){
            if(j===0){
                objVar[keys[i]][j]*=multiply[1]
            } else{
                objVar[keys[i]][j]*=multiply[0]
            }

        }
    }
    return objVar
}

function penghabisan(objectOke){
    let newObject = eliminasi(objectOke)
    let keys = Object.keys(newObject)

    let objResult = {}
    for(let i=0; i<keys.length; i++){
        if(objResult[keys[i]]===undefined){
            objResult[keys[i]]=newObject[keys[i]][0] - newObject[keys[i]][1]
        }
    }
    return objResult
}

function penentuanNilai(object){
    let objPenghabisan = penghabisan(object)
    let objEliminasi = eliminasi(object)
    let keys = Object.keys(objPenghabisan)

    objPenghabisan[keys[1]] = objPenghabisan[keys[2]] /objPenghabisan[keys[1]]
    objPenghabisan[keys[0]] = (objEliminasi[keys[2]][0]-objEliminasi[keys[1]][0]*objPenghabisan[keys[1]])/objEliminasi[keys[0]][0]
return objPenghabisan
}

function calcAljebraAdi(stringAlJebra) {
    let arrayKyu = penentuanNilai(stringAlJebra)
    let keys = Object.keys(arrayKyu)
    // return keys[0] + ' = ' + arrayKyu[keys[0]]+ ' '+ keys[1]+ ' = '+ arrayKyu[keys[1]]
    return `${keys[0]} = ${arrayKyu[keys[0]]} ${keys[1]} = ${arrayKyu[keys[1]]}`
}

console.log(calcAljebraAdi('2k+3c=2300 7k+2c=7200'))//'k = 1000 c = 100'
console.log(calcAljebraAdi('3a+4b=500 7a+8b=1100'))//'a = 100 b = 50'
console.log(calcAljebraAdi('2c+4a=400 3a+3c=450'))//'c = 100 a = 50'


// brute force

// k 0 - 7200
// c 0 - 7200