const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,

//   output: process.stdout,

});

var buf =[]
rl.on('line', (line) => {

    if (line.trim()=="") rl.close()

    //buf数组是命令行输入的信息

    buf.push(line)

})
rl.on('close', () => {




    var arr = buf.toString().split(" ");
var m = Number(arr[0])
var n = Number(arr[1])
var narr = m.toString().split("")
// console.log(narr)

//限定输入年份
if(m>=1 && m <=3000){

  //定义前面补充的0和0需要重复的次数
  if(m.toString.length<4 && b !=10){
 
    var blank = "0"
    var num = 4-narr.length
    // console.log(num)
    // m= blank.repeat(num)+m
    var b = 10
  }

  //列举所有可能
for(var i =m;i<10000;i++){
  //把补充的0，和所有可能的年份放入iarr数组
    var iarr = (blank.repeat(num)+i.toString()).split("");

    //定义方法计算数组某个数值出现次数
    let counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
    
    //当n=4
    if(n == 4 && iarr[0]!=undefined && iarr[1]!=undefined && iarr[2]!=undefined && iarr[3]!=undefined){
             //把多余的0删掉
            if(iarr.length>4){
              let len = iarr.length
              let rlen = len - 4
              iarr.splice(0,rlen)
            }  
            //筛选答案
             if(iarr[0]!=iarr[1] && iarr[0]!=iarr[2] && iarr[0]!=iarr[3] && iarr[1]!=iarr[2] &&iarr[1]!=iarr[3] && iarr[2] != iarr[3]){
           
       

            //定义输出
      var yearresult = (iarr[0]+iarr[1]+iarr[2]+iarr[3])
      console.log(Number(yearresult)-Number(m)+" "+yearresult)
      return false;
    }
    }

    //当n=3
    if(n==3 && iarr[0]!=undefined && iarr[1]!=undefined && iarr[2]!=undefined && iarr[3]!=undefined){
        //把多余的0删掉
      if(iarr.length>4){
        let len = iarr.length
        let rlen = len - 4
        iarr.splice(0,rlen)
      }

//筛选答案
      if( (counts(iarr,iarr[0])==2 && counts(iarr,iarr[1])==counts(iarr,iarr[0]) && counts(iarr,iarr[2])!=2 && counts(iarr,iarr[3])!=2) || (counts(iarr,iarr[0])==2 && counts(iarr,iarr[2])==counts(iarr,iarr[0]) && counts(iarr,iarr[1])!=2 && counts(iarr,iarr[3])!=2) ||  (counts(iarr,iarr[0])==2 && counts(iarr,iarr[3])==counts(iarr,iarr[0]) && counts(iarr,iarr[2])!=2 && counts(iarr,iarr[1])!=2)
       ||    ( counts(iarr,iarr[1])==2 && counts(iarr,iarr[0])==counts(iarr,iarr[1]) && counts(iarr,iarr[2])!=2 && counts(iarr,iarr[3])!=2)  || ( counts(iarr,iarr[1])==2 && counts(iarr,iarr[2])==counts(iarr,iarr[1]) && counts(iarr,iarr[0])!=2 && counts(iarr,iarr[3])!=2)   ||  ( counts(iarr,iarr[1])==2 && counts(iarr,iarr[3])==counts(iarr,iarr[1]) && counts(iarr,iarr[2])!=2 && counts(iarr,iarr[3])!=2) 
        || (  counts(iarr,iarr[2])==2  && counts(iarr,iarr[1])==counts(iarr,iarr[2]) && counts(iarr,iarr[3])!=2 && counts(iarr,iarr[0])!=2)   || (  counts(iarr,iarr[2])==2  && counts(iarr,iarr[0])==counts(iarr,iarr[2]) && counts(iarr,iarr[3])!=2 && counts(iarr,iarr[0])!=2)  || (  counts(iarr,iarr[2])==2  && counts(iarr,iarr[3])==counts(iarr,iarr[2]) && counts(iarr,iarr[3])!=2 && counts(iarr,iarr[0])!=2)
        ||   (counts(iarr,iarr[3])==2  && counts(iarr,iarr[0])==counts(iarr,iarr[3]) && counts(iarr,iarr[1])!=2 && counts(iarr,iarr[2])!=2) ||   (counts(iarr,iarr[3])==2  && counts(iarr,iarr[1])==counts(iarr,iarr[3]) && counts(iarr,iarr[1])!=2 && counts(iarr,iarr[2])!=2)  ||   (counts(iarr,iarr[3])==2  && counts(iarr,iarr[2])==counts(iarr,iarr[3]) && counts(iarr,iarr[1])!=2 && counts(iarr,iarr[2])!=2) 
        ){
       

          //定义输出
        var yearresult = (iarr[0]+iarr[1]+iarr[2]+iarr[3])
        console.log(Number(yearresult)-Number(m)+" "+yearresult)
        return false
            }
    }


    //当n=2
    if(n==2 && iarr[0]!=undefined && iarr[1]!=undefined && iarr[2]!=undefined && iarr[3]!=undefined){
       //把多余的0删掉
       if(iarr.length>4){
        let len = iarr.length
        let rlen = len - 4
        iarr.splice(0,rlen)
      }
     
      //筛选答案
      if(
         counts(iarr,iarr[0])==3 ||  counts(iarr,iarr[1])==3||counts(iarr,iarr[2])==3 ||counts(iarr,iarr[3])==3 
      ||( counts(iarr,iarr[0])==2 && counts(iarr,iarr[1])==2 &&  iarr[0]!=iarr[1]) ||( counts(iarr,iarr[0])==2 && counts(iarr,iarr[2])==2 &&iarr[0]!=iarr[2] )||( counts(iarr,iarr[0])==2 && counts(iarr,iarr[3])==2 && iarr[0]!=iarr[3] )
      ||  ( counts(iarr,iarr[1])==2 && counts(iarr,iarr[0])==2 && iarr[1]!=iarr[0])||  (counts(iarr,iarr[1])==2 && counts(iarr,iarr[2])==2 && iarr[1]!=iarr[2])|| (counts(iarr,iarr[1])==2 && counts(iarr,iarr[3])==2 && iarr[1]!=iarr[3])
      ||(counts(iarr,iarr[2])==2  && counts(iarr,iarr[0])==2 && iarr[2]!=iarr[0])||(counts(iarr,iarr[2])==2  && counts(iarr,iarr[1])==2 && iarr[2]!=iarr[1])|| (counts(iarr,iarr[2])==2  && counts(iarr,iarr[3])==2 && iarr[2]!=iarr[3])
      ||(counts(iarr,iarr[3])==2  && counts(iarr,iarr[0])==2 && iarr[3]!=iarr[0])||(counts(iarr,iarr[3])==2  && counts(iarr,iarr[1])==2 && iarr[3]!=iarr[1])||(counts(iarr,iarr[3])==2  && counts(iarr,iarr[2])==2 && iarr[3]!=iarr[2] )
       ){

        //定义输出
        var yearresult = (iarr[0]+iarr[1]+iarr[2]+iarr[3])
        console.log(Number(yearresult)-Number(m)+" "+(yearresult))
        return false
            }
    }
   
 
}


}

});


