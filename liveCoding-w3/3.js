/*
  /////////////
  pyramidNumber
  /////////////

  pyramidNumber adalah suatu program untuk menampilkan piramida.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 1
  [OUTPUT]
    1

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
*/

var max; // silahkan beri nilai bebas

// code here

var max = 5;
var result = '';
for(i = 1; i <= max; i++){
	for(j=0; j<i; j++){
		result = result + i;
	}
	result = result + '\n';
}
console.log(result);




