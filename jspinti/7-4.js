const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
});
let buf=[]

rl.on('line',(line)=>{
    buf.push(line)
})
rl.on('close',()=>{
  
let counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
arr = buf.toString().split("");
if(buf[0] >=0&&arr.length<=1000){
    arr.sort(function (x,y) {
   return x-y;
 });
//  console.log(arr)
for(var i = 0;i<arr.length;i++){
   var cishu = counts(arr,arr[i])
         console.log(arr[i]+":"+cishu);
        i = i +cishu  -1
}
}
});