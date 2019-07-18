/*
  /////////////////
  americanGotTalent
  /////////////////

  Function americanGotTalent akan menentukkan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];

  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.

  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];

  [PROCESS]
    tidak terdapat yang terbanyak.

  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
  
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

function americanGotTalent(votes) {
  // code here
  //['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']
  let message = '';
  let mostName;
  let mostVotes = 0;
  let voteNow  = 0;
  let status = false;
  let winner = 0
 /* for(let i=0; i<votes.length; i++){
    voteNow = 0;
    for(let j=0; j<votes.length; j++){
      if(votes[i] === votes[j]){
        mostName = votes[i]
        voteNow = voteNow + 1;
      }
      // console.log({mostName, voteNow, arrA: votes[i], arrB: votes[j]})
    }
    if(voteNow > mostVotes){
      mostVotes = voteNow;
      winner = voteNow
      status = true
    }else if(voteNow === winner){
      status = false;
    }
  }
  */
  let result = [];
  for(let i=0; i<votes.length; i++){
    for(let j=0; j<=result.length; j++){
      if(result[j] == undefined){
        result[j] = [];
        result[j].push(votes[i])
        break
      } else{
        if(result[j][0]===votes[i]){
          result[j].push(votes[i])
          break
        }
      }
      
    }
  } 
  
  for(let i=0; i<result.length; i++){
    if(result[i].length > mostVotes){
      mostName = result[i][0];
      mostVotes = result[i].length
      winner = mostVotes;
      status = true;
    } else if(result[i].length === winner ){
      status = false;
    }
  }
  // console.log(result)
  if(status){
    message = 'Selamat juaranya ' + mostName + ', dengan total votes yang diterima ' + mostVotes;
  } else if (voteNow === mostVotes){
    message = 'Mohon maaf juara tidak bisa ditentukkan dalam minggu ini'
  } else{
    message = 'Mohon maaf juara tidak bisa ditentukkan dalam minggu ini'
  }
  return message;
}

console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']));
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']));
// Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']));
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2
