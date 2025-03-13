const fs = require('fs')
// please ensure to make hello.txt before using it because it is deleted and new file is made
fs.readFile('./hello.txt','utf-8',function(err,content){
    if(err)
    {
        console.log('Error in reading the file ',err)
    }
    else{
        console.log('reading completed succesfully and content is - ',content)
        fs.writeFile('backup.txt',content,function(e,c){
            if(e){
                console.log('Error in writing in the file ',err)
            }
            else{
                console.log('writing successful')
                fs.unlink('./hello.txt',function(e){
                    if(e)
                    {
                        console.log('There is an error in removing')
                    }
                    else{
                        console.log('file removed succesfully')
                    }
                })

            }
        })
    }
})

// ensure to have backup.txt before using it use one by one 
const fs2 = require('fs/promises')
console.log('Start ')
fs2.readFile('./backup.txt','utf-8')
.then(content=>{
    console.log('Reading succesful ',content)
    fs2.writeFile('hello.txt',content)
})
.then(()=> fs2.unlink('./backup.txt'))
.catch( (e) => console.log('error detacted',e))