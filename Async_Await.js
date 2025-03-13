// I use new make function which are made in Creating_fn_of_Promises and use async await in it

const fs = require('fs')

function fileReadingwithPromise(filepath,encoding) 
{
    return new Promise((resolve,reject)=>{
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

async function dotask(){
    try
    {
    const fileread =await fileReadingwithPromise('./hello.txt','utf-8')
    await writefilewithPromise('backup.txt',fileread)
    await unlinkfilewithPromise('./hello.txt')
    }
    catch(e){
        console.log('ERROR',e)
    }
    finally{
        console.log('End of programme')
    }
}
dotask().then(()=> console.log('All done'))

// let say i want to delete the hello.txt after 5 sec then 
   async function wait(second)
    {
        return new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    resolve()
                },second*1000)
            }
        )
    }
   console.log('jai ')
async function dotask1(){
    try
    {
    const fileread =await fileReadingwithPromise('./backup.txt','utf-8')
    await writefilewithPromise('hello.txt',fileread)
    
    await wait(5)
    await unlinkfilewithPromise('./backup.txt')
    }
    catch(e){
        console.log('ERROR',e)
    }
    finally{
        console.log('End of programme')
    }
}
dotask1().then(()=>console.log('ok'))
