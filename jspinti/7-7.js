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
let music = ['ling','yi','er','san','si','wu','liu','qi','ba','jiu','fu']
let num = ['0','1','2','3','4','5','6','7','8','9','-']
let arr = buf.toString().split("");
let result = []
// console.log(arr)
if(Number(buf[0]) ==parseInt(buf[0])){
    for(var i = 0;i<=arr.length;i++){

for(var j = 0;j<num.length;j++){
if(arr[i]==num[j]){
    result.push(music[j])
}
}

}
console.log(result.join(" "))
}

});

