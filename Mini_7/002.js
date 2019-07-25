/*
    ==================
    Range Prime Number
    ==================

    [INSTRUCTION]
    jika ditanya berapa angka prima yg pertama maka jawabannya adalah 2.
    yang mana prime[0] = 2; 
    maka :
    
    [EXAMPLE]
    jika 10 angka prime pertama : [2,3,5,7,11,13,17,19]
    jika angka prime index ke-4 sampai index ke-11 maka : [11,13,17,19,23,29,31]
    
    diberikan 2 parameter "start","finish"
    "start" yaitu index angka prime yang ditentukan.  
    "finish" yaitu batas index angka prime 

    hasil akhirnya adalah deret angka prime yg telah ditentukan batasnya dalam bentuk array

*/

function rangePrimeNumber(start,finish)
{
    // your code is here
    let prime = [];
    for(let i=2; i<100; i++){
        if(i===2){
            prime.push(i)
        } else {
            let temp = []
            for(let j=2; j<i; j++){
                if(i%j === 0){
                    temp.push(j)
                }
            }
            if(temp.length === 0){
                prime.push(i)
            }
        }
    }
    return prime.slice(start-1,finish)
}

console.log(rangePrimeNumber(5,10))
// output 
// [11,13,17,19,23,29]

console.log(rangePrimeNumber(4,9));
// output [7,11,13,17,19,23]