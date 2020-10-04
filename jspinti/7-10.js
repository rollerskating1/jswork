const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
});
let buf=[]

rl.on('line',(line)=>{
    buf.push(line)
})
rl.on('close',()=>{
arr = buf.toString().split(" ");
let isint = arr.join("")
if(arr.length==3 && isint == parseInt(isint)){
  if(isint >=0&&arr.length<=1000){
    arr.sort(function (x,y) {
   return x-y;
 });
 console.log(arr.join("->"))
}
}
});