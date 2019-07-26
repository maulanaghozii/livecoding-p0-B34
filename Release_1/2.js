/*
  ///////////
  oneLineWars
  ///////////

  Function oneLineWars adalah sebuah function yang akan menerima sebuah parameter string
  dan kemudian akan terjadi peperangan di satu line.

  [INFO]
  K ==> 3 power
  Q ==> 2 power
  P ==> 1 power

  [EXAMPLE]
  INPUT:
  KKKQQQQPPP-PPPQQQKKKKPQK
  NOTES:
  - team kiri 20 power, team kanan 27 power
  - pertarungan akan menghabiskan yang terdekat dengan - terlebih dahulu:
    * KKKQQQQ PPP - PPP QQQKKKKPQK
    * KKKQ QQQ - QQQ KKKKPQK
    * KKKQ - KKKK PQK => 1K masih selamat dengan sisa 1 power
    * - KPQK
  
  RELEASE 0: (20 poin)
  Team kanan menang
  RELEASE 1: (40 poin)
  Team kanan menang dan unggul 7 poin atas Team kiri
  RELEASE 2: (40 poin)
  TEAM kanan menang dengan sisa pasukan KPQK

  [RULES]
  1. Hanya boleh menggunakan built in function .push(), .unshift()
*/

function oneLineWarsRelease0(war) {
}

console.log(oneLineWarsRelease0('KKKQQQQPPP-PPPQQQKKKKPQK'))

function oneLineWarsRelease1(war) {
}

console.log(oneLineWarsRelease1('KKKQQQQPPP-PPPQQQKKKKPQK'))

function oneLineWarsRelease2(war) {
}

console.log(oneLineWarsRelease2('KKKQQQQPPP-PPPQQQKKKKPQK'))
