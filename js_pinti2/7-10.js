const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
});
let buf = []
rl.on('line',(line)=>{
    buf.push(line)
})
rl.on('close',()=>{
    colors = s = Number.parseInt(buf[0].split(' ')[0])
s = Number.parseInt(buf[0].split(' ')[1])
    row = Number.parseInt(buf[0].split(' ')[2])
    nums = buf.slice(1,row +1).map(v =>{
        return v.split(' ').map(v =>{
            return Number.parseInt(v)
        })
    })
    for(let source of nums){
        let top = 1
        let stack = []
        let curr = 0
        while(stack.length<=s&&top<=colors){
            if(stack.length&&stack[stack.length-1]==top){
                stack.pop()
                top++
                continue
            }else{
                if(source.length){
                    curr = source.shift()
                }
                
                if(curr == top){
                    top++
                }else{
                    stack.push(curr)
                }
            }
        }
        if(top>colors)
            console.log('YES')
          
        else
            console.log('NO')
        
    }
});