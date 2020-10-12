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
arr =buf.
arr.sort(function (x,y) {
   return x-y;
 });
for(var i = 0;i<arr.length-1;i++){
   var cishu = counts(arr,arr[i])
   if(cishu >1){
         console.log("数组counts中"+arr[i]+"出现的次数是："+cishu);
   if(arr[i]==arr[i+1]){
       i = i +1
   }
   }
 
}
});