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
    let counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
   
    var arr =[]
    for(var i = 0;i<buf.length;i++){

arr.push(buf[i].toString().split(" "))
    }
    let cishu0 = counts(arr[1],'0')
    let cishu1 = counts(arr[1],'1')
    if(arr[0].length ==2){
          if(arr[0][0] != arr[0][1] && arr[0][0]<=1000 && arr[0][1]<=1000 && Number(arr[0][0])*Number(arr[0][1])>0 && Number(arr[0][0]) == parseInt(arr[0][0]) && Number(arr[0][1])== parseInt(arr[0][1])){
          if(arr[0][0]>arr[0][1] && cishu0 != 0){
        
       
        console.log("The winner is a: "+arr[0][0]+" + "+cishu0)
    }
  
    if(arr[0][0]<arr[0][1] && cishu0 ==3){
        
       
        console.log("The winner is a: "+arr[0][0]+" + "+cishu0)
    }
    if(arr[0][1]>arr[0][0] &&cishu1>0){
        
       
        console.log("The winner is b: "+arr[0][1]+" + "+cishu1)
    }
  
    if(arr[0][1]<arr[0][0] && cishu1 ==3){
        
       
        console.log("The winner is b: "+arr[0][1]+" + "+cishu1)
    }
    }
  
    }
  
});

