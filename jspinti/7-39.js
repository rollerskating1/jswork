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
  num = Number.parseInt(buf[0])

  people = buf.slice(0,num+1).map(v=>{
       v = v.replace(/\s+/g,' ').replace(/^\s/g,"").replace(/\s*\?/g,"?").replace(/\s*'/g,"'").replace(/A/g,"a").replace(/B/g,"b").replace(/C/g,"c").replace(/D/g,"d").replace(/E/g,"e").replace(/F/g,"f").replace(/G/g,"g").replace(/H/g,"h").replace(/J/g,"j").replace(/K/g,"k").replace(/L/g,"l").replace(/M/g,"m").replace(/N/g,"n").replace(/O/g,"o").replace(/P/g,"p").replace(/Q/g,"q").replace(/R/g,"r").replace(/S/g,"s").replace(/T/g,"t").replace(/U/g,"u").replace(/V/g,"v").replace(/W/g,"w").replace(/X/g,"x").replace(/Y/g,"y").replace(/Z/g,"z").split(' ')
   
      return v
  })
  
  
for(var i = 1;i<=Number(buf[0]);i++){
  let len = people[i].length
  console.log(buf[i])

 
for(var j = 0;j<=len;j++){
  
   if(people[i][j]=="?"){
people[i][j] = people[i][j].replace("?","!")
   }
 if(people[i][j]==="I" || people[i][j]=="I,don't" ){
    people[i][j] = people[i][j].replace("I","you")
   
   }
   if(people[i][j]==="me"){
    people[i][j] = people[i][j].replace("me","you")
   
   }
   if(people[i][j]=="can" && people[i][j+1] == "you"){
    people[i][j] = people[i][j].replace("can","I")
    people[i][j+1] = people[i][j+1].replace("you","can")
   }
   if(people[i][j]=="Could" && people[i][j+1] == "you"){
    people[i][j] = people[i][j].replace("Could","I")
    people[i][j+1] = people[i][j+1].replace("you","could")
   }
  
 
    //  console.log(people[i][1].slice(-1))
    //  console.log("["+i+"]"+"["+j+"]")
let ij  = people[i][j]
if(ij !== undefined){
 var o0 = ij.slice(-1)
}
  if(o0 && people[i][j] !==undefined){
      people[i][j] =  people[i][j].replace("?",'!')
   }

 }

  console.log(("AI: "+people[i].join(" ")).trim())
 
}


});

