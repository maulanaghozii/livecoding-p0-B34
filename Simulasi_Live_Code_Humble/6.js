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
  if (equation < 10 || isNaN(equation)) {
    return equation
  }
  let toString = equation.toString()
  let length = toString.length
  if (toString[0] === '0') {
    return parseNumber(toString.slice(1))
  } 
  if(parseInt(toString)% parseInt(toString[0]*Math.pow(10,length-1))===0){
    return toString
  }
  return `${toString[0]*Math.pow(10,length-1)}+${parseNumber(parseInt(toString.slice(1)))}`
}
// }

console.log(parseNumber(3033)) // 3000+300+30+3
console.log(parseNumber(990)) // 90
console.log(parseNumber(4050)) // 2000+300+30+3
console.log(parseNumber(1001000)) //1000000+100

/**
 30000
   333-
   300
    33-
    30
     3-

 */

 /* 
 10
 100
 1000
 10000
 */

 /* 
 i=0
 while (equation>Math.pow(10,i))
Math.pow(10,i)

 i++
 */