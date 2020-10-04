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
            var b = buf[0].toString().split(" ")
            var n = b[1]
            // var str = b[0]
            var daoarr = []
            var same = true
            var cn = (n/2).toFixed()
           str = buf.slice(1,n+1).map(v=>{
                v = v.split('')
            
               return v
           })
            // console.log(str.join("\n").replace(/,/g,'').replace(/@/g,str))
        //    console.log(str)
           for(var i = str.length-1;i>=0;i--){
            //   console.log(str[i].join().replace(/,/g,''))
              daoarr.push(str[i])
           }
           for(var h = 0;h<daoarr.length;h++){
               for(var i = 0, j = n-1 ;i<cn-1,j>cn-1;i++,j--){
                if(str[h][i]==str[h][j]){
                  same = false
                    break;
                }
           }


           }
           if(same==false){
            console.log("bu yong dao le")
            console.log(str.join("\n").replace(/,/g,''))
           }
           
});

