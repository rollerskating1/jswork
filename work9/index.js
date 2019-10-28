function cal() {
    let order = document.getElementById('order').value
    order = parseInt(order) && Number(order)
    if (!isNaN(order)) {
        let perbonacci =document.getElementById('Perbonacci')
        perbonacci.value = recursion(order)
    }else {
        alert('请输入数字')
    
    
    }

    
}
function recursion(n) {
    if (n<0){
        return '输入的数字不能小于0'

    }else if (n== 0 ){

        return 0
    
    }else if (n== 1 ){
    return 1
    
   }else if (n>1 ){
    return recursion(n - 1) + recursion(n - 2)
   }
}
