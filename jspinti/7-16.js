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
    var N =Number(buf[0])//转数字
    var arr = buf.toString().split("");
    var len = arr.length
    var ernum =0;
    var fu =1;
    var zheng =1;
    var oushu =1
  
    if(len <=50){
        //除掉小数
        for(var i =0;i<len ;i++){
            if(arr[i] == "."){
               ernum =-1;
               }
             }
        
             //提取2
             if(ernum != -1){
                for(var b = 0;b<=len-1;b++){
                    if(arr[b]==2){
            ernum +=1
            }  
                }
             }
   
 }else{
   //针对50位的负数,51位的小数，52位的负数小数
if(len < 52){
   if(N<0){
    for(var i =0;i<len ;i++){
      if(arr[i] == "."){
         ernum =-1;
         }
       }
       if(ernum !=-1){
             for(var b = 0;b<=len-1;b++){
    if(arr[b]==2){
ernum +=1
}  
}
       }
  
   }else{
    for(var i =0;i<len ;i++){
      if(arr[i] == "."){
         ernum =-1;
         }else{

         }
       }
   }
}
  
 
 }



 //负数
 if(N < 0){
fu =1.5
len= len -1
var numend = len
  //偶数
   if(arr[numend]%2==0){
 oushu = 2
   }
   }else{
zheng = 1
var numend = len -1
  //偶数
   if(arr[numend]%2==0){
 oushu = 2
   }
   }



  
   //输出
if(len <= 50){
    if(ernum ==-1){

    }else{
         var result = (ernum/len) * zheng * fu * oushu * 100;
      // console.log("("+ernum+"/"+len+")*"+zheng+"*"+fu+"*"+oushu+"*100"+"="+(result).toFixed(2))
  console.log((result).toFixed(2)+"%")
  // console.log(arr)
    }
}
  
 

    
});

