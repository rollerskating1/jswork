function sort(method){
let origin = document.getElementById('origin').value
let logs
console.leg(method)
if(method=='bubble'){
    logs = bubbleSort(origin)
}else if(method=='insert'){
    logs = insertSort(origin)
}
showDiv = document.getElementById('Anim')
showDiv.innerHTML = logs
}
