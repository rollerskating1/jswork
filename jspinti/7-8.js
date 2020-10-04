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
    let arr = buf.toString().split(" ");
var num1 = Number(arr[0])
var num2 = Number(arr[1])
var newarr = []
var sum = 0
var blank = " "
var yushuarr = []
if(num1<=100 &&num1>=-100 && num2<=100 && num2>=-100){
  for(var i=num1;i<=num2;i++){
    sum += i;
   newarr.push(i)
}
newarr = newarr.toString().split(",")
var yushu = (newarr.length)%5
for(var i = 0;i<newarr.length-yushu;i=i+5){

  if(newarr[i]===undefined||newarr[i+1]===undefined||newarr[i+2]===undefined||newarr[i+3]===undefined||newarr[i+4]===undefined){
  return false;
}
console.log((blank.repeat(5-newarr[i].length)+newarr[i])+(blank.repeat(5-newarr[i+1].length)+newarr[i+1])+(blank.repeat(5-newarr[i+2].length)+newarr[i+2])+(blank.repeat(5-newarr[i+3].length)+newarr[i+3])+(blank.repeat(5-newarr[i+4].length)+newarr[i+4]))


}
if(yushu >0){
  // console.log(newarr.length)
var start = newarr.length -yushu
var end = newarr.length
// console.log(end)
  for(var j = start;j<end;j++){
    let yuresult = blank.repeat(5-newarr[j].length)+newarr[j]
    yushuarr.push(yuresult)
   
  } 
  console.log(yushuarr.join(""))

}
console.log("Sum = "+sum)

}

});

