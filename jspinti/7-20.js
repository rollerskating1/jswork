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
    var  N = Number(buf[0])                //定义N为buf[0]
    var B = parseInt(N)                   //定义输入的内容的整数
    var imin = Math.pow(2,31)             //定义2的31次方
    imin = parseFloat(imin)              //用float存放，但好像可以不需要？可以测试一下
    if(N>=0 && N==B && N<=10){            //判断输入的数字大于0 是整数 小于或等于10
        for(i=1;i<=N;i++){               //循环数组下标
     var C=buf[i];                     //循环出来数组里面的每个值为C
     C = parseFloat(C)                 //然后用float存放，测试是可以，好像也不是很需要？
     var D = parseInt(C)                //定义C的整数的值
     if(C < imin && C>=0 && C==D){                //定义C小于2的31次方
         if(C!=2147483647){               //如果C不等于2147483647，那么循环继续判断素数，  var k = C%a; if(k == 0){break;}
           
             for(var a=2;a<C;a++){  
           var k = C%a;
            if(k == 0){break;}
            }


            if(C == 2){               //如果C等于2，那么输出Yes
              console.log("Yes")
        }else{                         //如果C不等于2，而且如果k不等于0，那么输出yes
            if(!k == 0){                 //如果k等于0，输出no
                console.log("Yes");      //如果C等于2147483647，输出yes
                }else{
                console.log("No");
                }
        }}else{
            console.log("Yes")
        }
        
          
     }else{

     }

    }
    }

});

