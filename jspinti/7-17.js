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

    //算法写在这里，用console.log()输出

    //需要读取命令行输入的话，使用buf变量

  
    var arr = buf.toString().split(":"); //用split（）分隔字符串里面的冒号生成一个数组,比如“19:01"会变成["19","01"]的数组
   var hh= arr[0]; //定义题目要求里面的小时hh,hh等于上面数组里面的第一个
   var mm=arr[1];  //定义题目里面要求的分钟mm，mm等于上面数组的第二个
   var music = "Dang"  //定义题目要求的当当当的字
   var bdang=hh -12  //用在下面的运算里面，你输入的小时数减去12，比如19-12=7下钟声，18-12=6下钟声，如果你输入的小时数为早上七点，07-12就小于0
   if(bdang>0){  //如果你输入的数字是下午的，就会大于0
   if(mm>0){ //如果分钟数大于0
       var dang= hh -12 +1;  //当当的声音就等于 你输入的小时 减去12 ，根据题目要求，分钟数大于0则多一个“当“，所以加一
       music = music.repeat(dang)  //用repeat()方法，括号里面的dang是重复的数字，music是符号"dang",也就是重复dang遍music
       console.log(music) //输出”Dang"
   }else{ //如果分钟数不小于0，那就是刚好等于0，也就是整点，整点的“Dang"就等于你输入的小时数-12
       
       music = music.repeat(bdang) //重复bdang遍music
       console.log(music)
   }
}else{ //如果你输入的是早上的时间，那么......
    console.log("Only "+hh+":"+mm+".  "+"Too early to Dang.")
}
});

