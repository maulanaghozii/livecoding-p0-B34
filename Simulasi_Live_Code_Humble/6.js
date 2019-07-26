/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  // code here
  if(equation%10 === 0 && equation < 100){
    return String(equation)
  }
  if(equation < 1000){
    return String(equation)
  }else {
    let toString = equation.toString()
    let length = toString.length
    let zero = ''
    if(toString[0] === '0'){
     return parseNumber(toString.slice(1))
    }else{
        for(let i=0; i<length-1; i++){
          zero += '0'
        }
    }
    return `${toString[0]}${zero}+${parseNumber(parseInt(toString.slice(1)))}`
  }
}

console.log(parseNumber(3033)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(105050)) // 2000+300+30+3
console.log(parseNumber(1000100)) //1000000+100