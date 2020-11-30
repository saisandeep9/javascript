
//declaration function
test(1)
function test(t){
    console.log("test function to test", t)
}
test()

// anonoymous function Expressing

const run=function(){
    console.log("anonoymous function Expressing")
}
run()
let move=run
move()


// let x=1
// console.log(x)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// arguments

function sum(a,b){

    let total=0;
    for(let value of arguments)      
      total+=value
          
        return total
     
    

   
}

function s(a,b){
     console.log(arguments)
    return a+b
}

console.log(sum(1,2,3))
console.log(s(1,25,3))

//rest operator

function sumrest(...args){
    console.log(args)
}

console.log(sumrest(1,2,3,4,5,6))


