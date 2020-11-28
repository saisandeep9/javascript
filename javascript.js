// const number=[[1,2,3,4],[5,6]]
// const join =number.join(",")

// console.log(join)
// console.log(number.join(''));
// let array1=[1,2,3,4,5]
// let array2=[6,7,8]
// let array=[...array1, ...array2]
// console.log(array)

const arr1=["A","B","C","D"]
const arr2=["a","b","c","d"]
const arr3=[1,2,3,4]

var arr=[]
// console.log(arr)
// arr.map(r=>console.log(arr.indexOf(r), r))
// arr.map(r=>r.map(r2=>console.log(r.indexOf(r2), r2)))

arr1.map(r=>{
 arr2.map(r2=>{
if(arr1.indexOf(r)===arr2.indexOf(r2))
{
     arr.push([r,r2])
     break;
}
   

})
}
)
// array.forEach(element => {
    
// });


console.log()

console.log(arr)