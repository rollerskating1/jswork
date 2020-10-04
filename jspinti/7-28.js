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

 
let arr = buf.toString().split(" ")
   for(var i =0;i<arr.length;i++){
           let pnum = Number.parseInt(arr[i]) //转数字
if(pnum == 250 && chongfu !=1){
    console.log(i+1)
    var chongfu = 1
}
        }

    


});

