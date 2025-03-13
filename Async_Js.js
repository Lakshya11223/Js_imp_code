const fs = require('fs')

// see this file run asynchronously
console.log('start')
fs.readFile('./hello.txt','utf-8',function(err,content){
    // this code take some time to run so it run atlast
    if(err)
    {
        console.log('error')
    }
    else{
        console.log('File content -> ',content)
    }
})
console.log('End')


// some example see below example after running you see file reading in last becoz it take time now i make sum to be more time taking 
console.log('start of summation')
const result = sum(2,5)
console.log(result)

function sum(a,b)
{
    return a+b
}
console.log('end ')

// sum-> more time taking

console.log('start of long sum')
sum1(2,5,(val)=>{
    console.log(val)
})
function sum1(a,b,cb)
{
    setTimeout(()=>{
        cb(a+b)
    },2000) // 2000 ms take by this function 
    
}
console.log('end of log sum')

