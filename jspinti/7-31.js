const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
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
    for(var i = 0;i<buf.length;i++){

arr.push(buf[i].toString().split(" "))
    }
    let rnum = Number(arr[0][0]) //转数字
    if(rnum <= 10 && rnum>0 && rnum == parseInt(rnum)){
  for(var i = 1;i<=rnum ;i++){
       if((arr[i][1] >20 || arr[i][1] <15) ||( arr[i][2] >70 || arr[i][2]<50)){
           console.log(arr[i][0])
       }
   }
    }
 
});

