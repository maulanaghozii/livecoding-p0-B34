/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikkan nilai string yang merupakan jumlah terbanyak dan terdikit.

[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah ali

[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/
/*
Algoritma
1. ubah string pada parameter stringData menjadi array dengan pemisah ","
2. pisahkan nama dan money pada tiap tiap array dengan pemisah ":"
3. jika sudah terbentuk array baru dengstrongan tiap tiap array di dalamnya hanya terdiri dari 2 index yaitu nama dan value maka:
4. cari money terendah
5. cari money tertinggi
6. simpan nama dan money pada step 4 dan 5
7. tampilkan nama pemilik uang terbanyak dan terendah
8. jika tidak ada nama dan money pada parameter stringData maka tampilkan pesan "tidak ada catatan eMoney"
*/

function eMoneySplit(stringData) {
  // code below here
  let message = '';
  var arrayData = stringData.split(",");
  for(let i=0; i<arrayData.length; i++){
    let highestMoney = 0;
    var newArrayData = arrayData[i].split(':');
    console.log(arrayData)
    if(stringData.length<1){
      message = 'tidak ada catatan eMoney'
    } else {

    }
  }
  console.log(newArrayData)
}

console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah andre
// console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
// console.log(eMoneySplit(''))
// tidak ada catatan eMoney