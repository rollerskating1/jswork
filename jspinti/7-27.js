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

    var arr =[]
    for(var i = 0;i<buf.length;i++){

arr.push(buf[i].toString().split(" "))
    }
    let pnum = Number.parseInt(arr[0]) //转数字
for(var i = 1;i<=pnum;i++){
    if(1<=arr[i][1]<=3){
if(arr[i][0]=="M"){
console.log((arr[i][1]/1.09).toFixed(2))
}else{
    console.log((arr[i][1]*1.09).toFixed(2))
}

    }

}
});

