const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin

})
let buf = []
 rl.on('line',(line)=>{
     buf.push(line)
 })

 rl.on('close',()=>{
num = Number.parseInt(buf[0])
poems = buf.slice(1,num+1).map(v=>{
    return v.split(',')
})
poems= poems.map(v=>{
    o0 = v[0].slice(-3)=='ong'
    o1 = v[1].slice(-4)=='ong.'
    if(o0&&o1){
        tt= v[1].split(' ')
        tt.splice(-3,3,'qiao','ben','zhong.')
        v= v[0]+','+tt.join(' ')
    }else{
        v = 'Skipped'
    }
    return v
})
console.log(poems.join('\n'))

 })