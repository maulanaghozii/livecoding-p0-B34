/*
  SELECT OPTION
  Select Option adalah sebuah fungsi untuk mengambil nilai tengah atau median dari
  array hasil kelipatan dari keynya.
  Fungsi akan menerima parameter berupa array dan key yang ingin dicari.

  EXAMPLE
  INPUT: array = [1, 2, 3, 4, 5, 6, 7], key = 2
  PROCESS: [2, 4, 6] adalah array yang merupakan kelipatan 2
  MEDIAN: 4
  OUTPUT: 4 adalah nilai median dari array di process

  INPUT: array = [1, 2, 3, 4, 5, 6], key = 1
  PROCESS: [1, 2, 3, 4, 5, 6] adalah array yang merupakan kelipatan 1
  MEDIAN: (3 + 4)/2
  OUTPUT: 3.5 adalah nilai tengah dari array di process

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), Math, dan .unshift()
  2. WAJIB menggunakan PSEUDOCODE
*/



/* 
===PSEUDOCODE ===
CREATE FUNCTION kelipatanKey with paramter array ADN key
  STORE arrayResult with empty array
  STORE i with zero
  LOOPING array until last index
    IF array index i modulo key EQUAL zero THEN
      arrayResult is pushed array index i
    END IF
  END LOOPING
  RETURN arrayResult
END FUNCTION

CREATE FUNCTION selectOption with parameter array and key
  STORE media with zero
  STORE arrayKelipatanKey with CALL FUNCTION kelipatanKey with parameter array and key
  STORE length with length of arrayKelipatanKey

  IF length EQUAL zero THEN
    RETURN 'There\'s not option'
  END IF

  IF length modulo 2 EQUAL zero THEN
    median EQUAL arrayKelipatanKey index length division 2 THEN plus arrayKelipatanKey index length division 2 subtraction 1 THEN division 2
  ELSE 
    median EQUAL arrayKelipatanKey index length subtraction 1 THEN divison 2
  END IF

  RETURN median
END FUNCTION




*/
function kelipatanKey(array, key){
  let arrayResult = []
  for(let i=0; i<array.length; i++){
    if(array[i]%key === 0){
      arrayResult.push(array[i])
    }
  }
  return arrayResult
}

function selectOption(array, key) {
  // code below here
  let median = 0
  let arrayKelipatanKey = kelipatanKey(array, key)
  let length = arrayKelipatanKey.length

  if(length === 0){
    return 'There\'s not option'
  }
  if(length%2 === 0){
    median = (arrayKelipatanKey[length/2] + arrayKelipatanKey[(length/2)-1])/2
  } else (
    median = arrayKelipatanKey[(length-1)/2]
  )
  return median
}

// TEST CASE
console.log(selectOption([1, 2, 3, 4, 5, 6, 7], 2)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 1)) // 3.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 3)) // 4.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 4)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 7)) // There's not option
