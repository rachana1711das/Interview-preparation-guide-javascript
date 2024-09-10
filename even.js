function even(arr){
 const evenArr = arr.filter(num=>num%2==0)
 return evenArr
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(even(arr))