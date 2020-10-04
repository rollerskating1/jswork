const readline = require('readline');
const { PassThrough } = require('stream');

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

    
    var arr = buf.toString().split(" ");
       var money = arr[0]
       var moneyint  = parseInt(money)
       var zhekou = arr[1]
       var zhekouint = parseInt(zhekou)
       if(money>0 && money<=10000 &&money == moneyint && zhekou>=1 && zhekou<=9 && zhekou == zhekouint){
var result  = money * (zhekou/10)
console.log(result.toFixed(2))
       }
});

