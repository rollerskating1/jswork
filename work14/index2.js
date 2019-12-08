let endseconds=new Date();
let d=h=0;
let m=59-endseconds.getMinutes();
let s=59-endseconds.getSeconds();
let id=setInterval(seckill,1000);
function seckill(){
    s--;
    if(s<0){
        s=59;
        m--;
    }
    if(m<0){
        m=59
    }
    document.getElementById('d').innerHTML=d+'天';
    document.getElementById('h').innerHTML=h+'时';
    document.getElementById('m').innerHTML=m+'分';
    document.getElementById('s').innerHTML=s+'秒';
}