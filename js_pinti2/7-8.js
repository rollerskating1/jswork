const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
});
let buf=[]

rl.on('line',(line)=>{
    buf.push(line)
})

rl.on('close',()=>{
    p = buf[1].split(' ').reduce((sum,v)=>{
        sum[v] = sum[v]?sum[v]+1:1
        return sum
    },{})
    for(let o in p){
        console.log(o+":"+p[o])
    }
});