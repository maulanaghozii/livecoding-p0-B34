/* function deepSum (arr, result) {
    // Code disini
    if(result === undefined){
      result = 0
    } 
    console.log({arr, result})
    var i=0
    while(true){
      if(typeof arr[i] === 'number' ){
        result += arr[i]
      } else if(arr[i] === undefined){
        return result
      }else{
        result += deepSum(arr[i], 0)
      }
      i++
    }
  } */

  function deepSum(arr){
    let result =  0;
    // let number = typeof 0
    for(let i=0; i<arr.length; i++){
      if(typeof arr[i] ==='number'){
        result+=arr[i]
      } else{
        result += deepSum(arr[i])
      }
    }
    return result
  }

  //TEST CASE
  console.log(deepSum([1,2,3,4,[5,[5,5]]]))

  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2],
      [9, 4],
      [3,10]
    ],
    [
      [4, 14, 31],
      [9, [10, 18], 12, 20],
      [1, 4, 90]
    ],
    [10,
      [2, 5],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316

  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, [1,2,3,4]]
    ],
    [
      [4, 14, 31],
      3,
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    20,
    [
      [2, 5, 10],
      [[7,6],3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); 