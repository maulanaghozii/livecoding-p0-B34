/*
  /////////////////////
  2ND WINNER GUILD WARS
  /////////////////////

  Function Guild Wars akan menentukkan juara ke-2 dalam bentuk string, dari peringkat 1 ke 4.
  Jumlah peserta selalu array dengan length 4.  

  EXAMPLE
  INPUT: ['OOOO', 'ooOO', 'o', 'OOo']
  INFO:
  - O dihitung 2 
  - o dihitung 1
  GUIDE: 
  - Awal Sisi Kiri: (Tim 1 vs Tim 2) dan Sisi Kanan: (Tim 3 vs Tim 4)
  - Pemenang dari Sisi Kiri vs pemenang dari Sisi Kanan menghasilkan juara 1 dan 2
  - Yang kalah dari Sisi Kiri vs yang kalah dari Sisi Kanan menghasilkan juara 3 dan 4
  PROCESS:
  - Sisi Kiri => OOOO vs ooOO => OOOO (win), ooOO (lose)
  - Sisi Kanan => o vs OOo => o (lose), OOo (win)
  - Winner vs Winner => OOOO vs OOo => OOOO (1), OOo (2)
  - Loser vs Loser => ooOO vs o => ooOO(3), o (4)
  - Urutan pemenang [OOOO, OOo, ooOO, o]
  OUTPUT:
  Juara Ke-2 adalah tim OOo

  RULES:
  1. Jumlah yang bertanding selalu 4 tim
  2. Asumsi total kekuatan di setiap tim tidak ada yang sama
*/
function pemenangKiri(guilds){
  let winner = guilds[0]
  let losser = guilds[0]
  let score = 0
  for(let i=0; i<guilds.length-2; i++){
    let scoreTemp = 0
    for(let j=0; j<guilds[i].length; j++){
      if(guilds[i][j] === 'O'){
        scoreTemp+=2
      } else {
        scoreTemp+=1
      }
    }
    if(scoreTemp > score){
      winner = guilds[i]
      score = scoreTemp
    }
    if(scoreTemp<score){
      losser = guilds[i]
    }
  }
  return {winner: winner, losser:losser}
}

function pemenangKanan(guilds){
  let winner = guilds[2]
  let losser = guilds[2]
  let score = 0
  for(let i=2; i<guilds.length; i++){
    let scoreTemp = 0
    for(let j=0; j<guilds[i].length; j++){
      if(guilds[i][j] === 'O'){
        scoreTemp+=2
      } else {
        scoreTemp+=1
      }
    }
    if(scoreTemp > score){
      winner = guilds[i]
      score = scoreTemp
    }
    if(scoreTemp<score){
      losser = guilds[i]
    }
  }
  return {winner: winner, losser:losser}
}

function duelWinner(object){
 let objDataKanan = pemenangKanan(object)
 let objDataKiri  = pemenangKiri(object)
 let champions  = ''
 let runnerUp   = ''
 let scoreKanan = 0
 let scoreKiri  = 0
 for(let i=0; i<objDataKanan.winner.length; i++){
   if(objDataKanan.winner[i] === 'O'){
    scoreKanan += 2
   } else{
     scoreKanan+=1
   }
 }

 for(let i=0; i<objDataKiri.winner.length; i++){
  if(objDataKiri.winner[i] === 'O'){
   scoreKiri += 2
  } else{
    scoreKiri+=1
  }
}

if(scoreKanan>scoreKiri){
  champions = objDataKanan.winner
  runnerUp  = objDataKiri.winner
} else if(scoreKanan<scoreKiri){
  champions = objDataKiri.winner
  runnerUp  = objDataKanan.winner
}
 return {champions: champions, runnerUp:runnerUp}
}


function guildWars(guilds) {
  // code here
  let winner = duelWinner(guilds)

  return `Juara ke-2 adlah tim ${winner.runnerUp}`
}

console.log(guildWars(['OOOO', 'ooOO', 'o', 'OOo']))
// Juara ke-2 adalah tim OOo
console.log(guildWars(['OO', 'OOO', 'ooOOO', 'OOOo']))
// Juara ke-2 adalah tim OOO
console.log(guildWars(['ooo', 'oooo', 'oo', 'o']))
// Juara ke-2 adalah tim oo