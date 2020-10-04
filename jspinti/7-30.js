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

 
    let cnt = 1;      //定义数组下标从0开始
    var duiarr = ["ChuiZi","JianDao","Bu"]
    var duiarr2 = ["Bu","ChuiZi","JianDao"]
    var Kj = 0
    let K = Number(buf[0])
    if(K<=10 && K>=0){
        while(buf[cnt] !="End"){
     if(Kj!=K){
          for(var i = 0;i<duiarr.length;i++){
        if(buf[cnt]==duiarr[i]){
      console.log(duiarr2[i])
      Kj++ 
  }
   }
     }else{
console.log(buf[cnt])
        Kj= 0
     }
     
    cnt++;
   }
  
    }
 
 
    
});

