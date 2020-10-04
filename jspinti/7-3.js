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

    var  n = Number.parseInt(buf[0]) //输入的东西转数字
    var cn = (1 + n)/2;  //设置一个中间数
    if(n>0 && n%2==1){ //如果n大于0，且n为奇数

    for(var i = 1; i <= n; i++){   //n为总层数

        for(var j = 1; j <= n-i-cn; j++){  //循环，n-i-cn来设置正金字塔空格数
       }
         for(var k = 1; k <= 2*(i-1)+1; k++){// 2*(i-1)+1来循环出来正金字塔的一层的星星数量
          }

          for(var l = 1; l <=i-cn; l++){//i-cn 设置倒金字塔的空格数
          }
            for(var m =1 ; m <=1; m=2*(n-i)+2){ //循环出来倒金字塔的一层的星星数量
             }


  if(i<cn){ //i代表当前的星星层数，比如打印到第二层了，i就等于2.这里的意思是当前层数没有到中间数的时候
        var num = k -1  //定义一层星星的数量为变量num
          var blank = "  " //定义空白的字符
          blank = blank.repeat(j) //用repeat方法重复j遍blank,blank等于"  "
          var star ="*"+" "  //定义星星的字符，每个星星后面加一个空白符号
          star = star.repeat(num)  //用repeat方法重复num遍star,star等于"*"+" "
          var h = blank+star //把空白符号和星星符号连接在一起
          h = h.replace(/^\s./g,"");  //用replace方法过滤掉最左边的空白符号
          console.log("  "+h)  //打印出来一层的星星，前面的"  "是调试出来的才加上去的
  }else{ //定义倒金字塔

      var num = m -1  //定义一层星星的数量为变量num
      var blank = "  "  //定义空白的字符
      blank = blank.repeat(l)  //l是空白字符的数量，重复l遍空白字符blank
      var star ="*"+" "   //定义星星的字符，"*"+" "
      star = star.repeat(num)  //重复num遍星星的字符star
      var h = blank+star  //把空白字符和星星连接在一起
      h = h.replace(/^\s./g,"");  //用relace方法过滤掉最左边的空白符号
      console.log(h)  //打印出来一层的星星
  }
     }
    }else{
console.log("请输入大于0的奇数")
    }

});

