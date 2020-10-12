const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
});
let buf=[]

rl.on('line',(line)=>{
    buf.push(line)
})
rl.on('close',()=>{
    let list = buf.slice(1).map(v=>{
        return v.split(' ')
    })
    let target = list.reduce((sum,v)=>{
                sum = sum + Number.parseInt(v[1])
             return sum 
    },0)/list.length/2
    let targetname = ''
    let val = Infinity
    for (let i = 0;i<list.length;i++){
        let cc = Math.abs(Number.parseInt(list[i][1])-target)
        if(cc<val){
            val = cc
            targetname = list[i][0]
        
        }
    }
    console.log(target.toFixed(0)+' '+targetname)
});