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
    var arr = buf.toString().split(" ");
let hangshu = Number(arr[0])

let music = arr[1]
if(arr[0]>=3 && arr[0]<=21){
for(var i = 1;i<=(hangshu/2).toFixed();i++){
   console.log(music.repeat(hangshu )) 

}
}


});

