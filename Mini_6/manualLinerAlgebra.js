let array = ['2k+3c=2300 7k+2c=7200']
console.log(array)
//array pemisah spacy
let arraySpecy = array[0].split(' ')
console.log(arraySpecy, ' arraySpecy')
// array pemisah equal
let newArray = []
for(let i=0; i<arraySpecy.length; i++){
  newArray.push(arraySpecy[i].split('='))
}
console.log(newArray, ' newArray')

//array pemisah plus
let finalNewArray = []
for(let j=0; j<newArray.length; j++){
  finalNewArray.push(newArray[j][0].split('+'))
}
console.log(finalNewArray, ' finalNewArray')

//array pemisah
let fixArray = []
for(let i=0; i<finalNewArray.length; i++){
  for(let j=0; j<finalNewArray[i].length; j++){
    fixArray.push(finalNewArray[i][j].split(''))
  }
}
//ubah string number menjadi number
for(let i=0; i<fixArray.length; i++){
  fixArray[i][0] = parseInt(fixArray[i][0])
}
console.log(fixArray, ' fixArray')

//buat object
let objVariable = {}
for(let i=0; i<fixArray.length; i++){
  if(objVariable[fixArray[i][1]] === undefined){
    objVariable[fixArray[i][1]] = [fixArray[i][0]]
  } else{
    objVariable[fixArray[i][1]].push(fixArray[i][0])
  }
}
for(let i=0; i<newArray.length; i++){
  if(objVariable['result'] === undefined){
    objVariable['result'] = [newArray[i][1]]
  } else{
    objVariable['result'].push(newArray[i][1])
  }
}



let keys = Object.keys(objVariable)
let value = Object.values(objVariable)
    objVariable['k'][0] *= 2
    objVariable['c'][0] *= 2
    objVariable['result'][0] *= 2

    objVariable['k'][1] *= 3
    objVariable['c'][1] *= 3
    objVariable['result'][1] *= 3
console.log(objVariable)

//obj final
let objFinal = {}

let k= objVariable['k'][0] - objVariable['k'][1]
let c= objVariable['c'][0] - objVariable['c'][1]
let result = objVariable['result'][0] - objVariable['result'][1]
console.log(k,c,result)
k = result/k
c = (objVariable['result'][0] - objVariable['k'][0]*k)/objVariable['c'][0]
console.log('k='+k, 'c='+c)