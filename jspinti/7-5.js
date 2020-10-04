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

   let snum = Number.parseInt(buf[0]) //转数字
   let stus = buf.slice(1,snum+1).map((v)=>{
       return v.split(' ')
   })
   let marr = buf[1+snum+1].split(' ')
   let result = marr.map((v)=>{
       return stus.find((vin)=>{
           return vin[1]==v
       })
   })
   result = result.map((v)=>{
       return v[0]+' '+v[2]
   })
   result = result.reduce((sum,v)=>{
       sum += v+'\n'
       return sum
   },'')
   console.log(result.trim())
});

