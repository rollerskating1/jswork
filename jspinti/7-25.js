const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,

});

let buf =[]



rl.on('line', (line) => {

    if (line.trim()=="") rl.close()

    buf.push(line)

})



rl.on('close', () => {

 
    let cnt = 0;      //定义数组下标从0开始
    var len = buf.length   //数组的长度
    for(i=0;i<len;i++){    //用for循环，把一个名字的长度控制在10个以下，超过10个,big=-1
      if(buf[i].length>10){  //buf[i].length计算一个名字（字符串）的长度
var big = -1;
      }
    }

    if(big !=-1 ){    //如果名字长度不超过10，则big不等于-1，执行下面的东西
 while(buf[cnt] !='.' || buf[cnt].length>10){
     cnt++;
   }
   if(cnt <2){
     console.log("Momo... No one is for you ...")
   }
   if(cnt < 14 && cnt >=2 && cnt !=0){
     console.log(buf[1]+" is the only one for you...")
   }
   if(cnt >14 && cnt !=0){
     console.log(buf[1]+" and "+buf[13]+" are inviting you to dinner...")
   }
    }
});

