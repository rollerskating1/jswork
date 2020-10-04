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
    var sum = 0
    for(var i = 0;i<buf.length;i++){

arr.push(buf[i].toString().split(" "))

    }
 for(var k =1;k<=Number(buf[0]);k++){
if( Number(arr[k][0])!==undefined){
    sum += Number(arr[k][0])
}
    
 }
 let num = Number(buf[0])/2
if(Number(buf[0])<=50 && Number(buf[0]) >0 && Number(buf[0])%2==0){
    if(sum ==num){
          for(var i = 1; i<=(Number(buf[0]))/2;i++){
        if(arr !=undefined){
            if(Number(arr[i][0])==0){
for(var j =Number(buf[0]);j>=1;j--){
    if(arr[i]!==undefined && arr[j]!==undefined){
        if(arr[j][0]==1){
        console.log(arr[i][1]+" "+arr[j][1])
       delete arr[i]
       delete arr[j]
    //    console.log(arr)
    }
    }
}
        }else{
 for(var j =Number(buf[0]);j>=1;j--){
                if(arr[i]!==undefined && arr[j]!==undefined){
                    if(arr[j][0]==0){
                    console.log(arr[i][1]+" "+arr[j][1])
                   delete arr[i]
                   delete arr[j]
                //    console.log(arr)
                }
                }
            }
        }
       
           
                    
    }else{
        exit()
    }
        }
// console.log(Number(arr[i][0]))

    }
  
}
    
});

