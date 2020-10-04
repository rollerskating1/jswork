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

    var arr = buf[0].split(" ");
    var a = Number(arr[0])
    var b = Number(arr[1])
    var s = ""
    for(var i =0;i<a;i++){
        s+="a"
    }
    var q1 = Math.pow(26,a)
    var q = q1 -b
    var c = []
    for(i=0;i<a;i++){
c.push(97+q%26)
q = q/26
    }

    for(var j = i-1;j>=0;j--)

        console.log(c[j])
    
});

