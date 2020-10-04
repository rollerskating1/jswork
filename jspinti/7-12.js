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

    //算法写在这里，用console.log()输出

    //需要读取命令行输入的话，使用buf变量

   var n = buf[0]
   var b = parseInt(n)
    if(n<=10 && n>0 && n==b){
var result = Math.pow(2,n)
console.log("2^"+n+" = "+result)
    }

});

