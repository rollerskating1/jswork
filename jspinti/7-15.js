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
var Z = [0,1,2,3,4,5,6,7,8,9,10]
    var M =[1,0,'X',9,8,7,6,5,4,3,2]
    var Q = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2]
    var arr = []
    var qsum = 0
    var biarr = []
var Nnum = Number(buf[0])
    if(Nnum<=100 && Nnum==parseInt(Nnum) && Nnum>=0){
 //踢掉前十六位不是纯数字的，以及身份证长度大于18的
    for(var i = 0;i<buf.length;i++){
        arr.push(buf[i].split(""))
            }
            for(var i = 0;i<buf.length;i++){
                biarr.push(buf[i].split(""))
                    }
for(var i =1;i<arr.length;i++){
   if(arr[i].length>18){
      delete arr[i]
   }
for(var j = 0;j<=16;j++){
    if(arr[i]!==undefined){
        if(arr[i][j] != Number(arr[i][j])){
delete arr[i]
}
    }
}
}


        // console.log(arr)  
        //加权
        for(var l = 1;l<arr.length;l++){
            if(arr[l]!=undefined){
                for(var j = 0;j<=16;j++){
                    if(arr[l]!=undefined){
                        // console.log("["+arr[l][j]+"]["+Q[j]+"]")
                        qsum += (arr[l][j]*Q[j])
                        // console.log(qsum)
                    }
            }
          
             //加权取膜
              var Zz = qsum % 11
             //校验码核对 
for(var m = 0;m<M.length;m++){
    if(Zz == Z[m]){
      var zr = M[m]
    //   console.log(zr)
      if(arr[l][17]!=zr){
delete arr[l]
      }
    }
}
qsum = 0
            }
        }  

       let result = []
    //    console.log(arr.join(""))
       if(arr.join("") == biarr.join("")){
        console.log("All passed")
       }else{
        for(var i = 0;i<arr.length;i++){
            if(arr[i]==undefined){
                result.push(buf[i])
            }
        }
        console.log(result.join('\n'))
       }
      
    
          

    }
   
});

