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
    var num1 = Number(arr[0]) //转数字
    var num2 = Number(arr[1]) //转数字
    if(num1<=9 && num1 >=1 && num1 * num2>0 && num1 ==parseInt(num1) && num2<=9 && num2 >=1 && num2 ==parseInt(num2)){
          let cishu =  num1 + num2;
  let music = "Wang!"
let result =  music.repeat(cishu)
console.log(result)

    }

});

