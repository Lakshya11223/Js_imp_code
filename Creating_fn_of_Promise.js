

// In callback_hell we use fs2 = requaire('fs/promises') now we create the function with old method fs and return promises with the help of these
const fs = require('fs')

function fileReadingwithPromise(filepath,encoding) //readFile take two argument mainly 1. filepath , 2.encoding
{
    return new Promise((resolve,reject)=>{// Promise is either resolve or reject
        fs.readFile(filepath,encoding,(err,content)=>{
            if(err)
            {
                reject(err)
            }
            else{
                resolve(content);
            }
        })
    })

}
// In resdFile we use call back if any error then reject or if not then read the content this content is transfer to .then when we call this above function ^^^

// now create same for writing

function writefilewithPromise(filepath,content){
        return new Promise((resolve,reject)=>{
            fs.writeFile(filepath,content,(err,content)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve();
                }
            })
        })
}
function unlinkfilewithPromise(filepath)
{
    return new Promise((resolve,reject)=>{
        fs.unlink(filepath,(err,content)=>{
            if(err){
                reject(err)
            }
            else{
                resolve();
            }
        })
    })
}
// let us try 
fileReadingwithPromise('./hello.txt','utf-8')
.then(s=>{
    console.log("Reading is succesful ")
    writefilewithPromise('backup.txt',s)
})
.then(s=>{
    unlinkfilewithPromise('./hello.txt')
})
.catch(e=>{console.log('error ',e)})

