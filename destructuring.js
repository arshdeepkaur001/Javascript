// DESTRUCTURING

const obj=
{
    uid:"arshdeepkaur9926@gmail.com",
    pwd:"arsh1234",
    server:"localhost",
    doConnect:function(pass)
    {
        if(pass===this.pwd) /// == compares two values with type conversion while === compares two values without type conversion
        {
            console.log("connected")
        }
        else
        console.log("not connected")
    },
    doDisconnect:function()
    {
        console.log("disconnected")
    }
}

obj.doConnect("Arsh1234") // === will reject this password as it contains A instead of a

obj.doConnect("arsh1234") // this password will be accepted

console.log(obj.uid,obj.pwd) // here we are printing only the uid and pwd from data 

const {uid, server}=obj // we passed the needed data ie. uid and server to object, this is destructuring

console.log(uid,server) // now we don't need to write obj. again and again

// Destructuring a function and Renaming other variables

const {uid:id, server:srvr, doDisconnect, doConnect}=obj // original_name : new_name

console.log(id,srvr) 

doDisconnect()

doConnect("arsh1234") // password is correct but output will be "not connected"

//NOTE- when we take reference of any function while destructuring we get it as an object and it losses the access to its enclosing properties
// so it is advised not to destructure any dependent function. Destructure only independent functions.


//=================================================================

const getAry=()=>{

    return ["arsh","aman","daman","raman"]

}

const ary=getAry();

console.log(ary); // output will be in form of array of strings-  [ 'arsh', 'aman', 'daman', 'raman' ] 

// but I want only first two names

const [n1,n2]=getAry();

console.log(n1,n2) // output- arsh aman

//similarly

const names=["arsh","aman","daman","raman"]

const [n3,n4]=names

console.log(n3,n4)

// if I want to get the 1st and 3rd name

const [n5,,n6]=names // an extra comma will skip the 2nd value

console.log(n5,n6) // output- arsh daman