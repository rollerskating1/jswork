function calc(func){
    let result = document.getElementById('result')
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    if(isNaN(num1) || isNaN(num2)) {
        alert('请输入数字')
        return false
    }
    result.value = func (num1,num2)
}
function add(num1,num2){
    return num1 + num2
}
function sub(num1,num2){
    return num1-num2
}
function mul(num1,num2){
    return num1*num2
}
function div(num1,num2){
    return num1/num2
}