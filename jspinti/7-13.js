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

    var  N = Number(buf[0])
    var B = parseInt(N)
    var S = 0;
    var f =1;
    if(N>=0 && N==B && N<=10){
        for(i = 1; i <= N; i++) 
    { 
        f *= i; //递推计算i！, 充分利用中间结果 
        S += f; 
        console.log(f)
    } 
    
      console.log(S)
       }else{

       }
      
    
});

