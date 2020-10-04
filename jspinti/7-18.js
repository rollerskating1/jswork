const { verify } = require('crypto');
const { exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,

//   output: process.stdout,

});

let buf =[]



rl.on('line', (line) => {

    if (line.trim()=="") rl.close()

    //buf数组是命令行输入的信息

    buf.push(line)

})



rl.on('close', () => {
 
   
   
    var arr =[]
    var fornum = Number(buf[1])
    var Aj = 0
    var Bj = 0
    if(fornum <=100 && fornum>0 && fornum == parseInt(fornum)){
 for(var i = 0;i<buf.length;i++){

arr.push(buf[i].toString().split(" "))

    }
    var Al = Number(arr[0][0])
    var Bl = Number(arr[0][1])
    // console.log(Al)
for(var i =2;i<=fornum+1;i++){
    if(exit != -3){
        var sum = Number(arr[i][0]) + Number(arr[i][2])
var A = Number(arr[i][1])
var B = Number(arr[i][3])
if(A == sum && A!=B){
Aj++
if(Aj >Al){
   var exit = -3
   var Ashule =-2
}
}

if(B == sum && A!=B){
    Bj++
    if(Bj >Bl){
       var exit = -3
       var Bshule =-1
    }
}

}else{
   exit;
}   
    }

    if(Ashule){
        console.log("A")
        console.log(Bj)
    }
    if(Bshule){
        console.log("B")
        console.log(Aj)
    }



    }
   
});

