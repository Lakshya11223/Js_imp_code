// this is not the full but sufficient for practicing

class Mypromise
{
   constructor(ececutorfn)
   {
    this._state = 'Pending';
    this._successcallback  = [];
    this._errorcallback = [];
    this._finalcallback = [];
    this.value = undefined;
    
    ececutorfn(this.resolver.bind(this),this.rejector.bind(this));
   }
   then(cb)
   {
    // jitni bhi calls he unhe register krega
    //leta kya he yeh ->callback
    if(this._state === 'fulfilled')
    {
        console.log('aapka promise to pahle hi fulfilled ho gya ,run kar deta hu')
        cb(this.value);
        return this;
    }
    this._successcallback.push(cb);
    return this;
    }
   catch(cb)
   {
    if(this._state === 'rejected'){
        cb(this.value);
        return this;
    }
    this._errorcallback.push(cb)
    return this;
   }
   finally(cb)
   {
    if(this._state!== 'finally')
    {
        cb()
        return this;
    }
    this._finalcallback.push(cb);
    return this
   }
   resolver(val){
   
    // resolve karega sari then state ko resolve krne ka kaam karege 1 by 1
    this._state = 'fulfilled'
    this.value = val;
    this._successcallback.forEach((cb)=> cb(val));
    this._finalcallback.forEach((cb)=> cb());
    
   }
   rejector(err)
   {
    this.state = 'rejected'
    this.value = err;
    this._errorcallback.forEach((cb)=>cb(err));
    this._finalcallback.forEach((cb)=>cb());
    }
}
function wait(x){
    return new Mypromise((resolve,reject)=>{
        setTimeout( ()=>resolve('haha'),x*1000)
    });
}
wait(5)
.then((e)=> console.log('promise resolves after 5 sec',e))
.catch((e)=> console.log('promise rejected after 5 sec',e))
.finally(()=> console.log('finally runs'))