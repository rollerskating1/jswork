function bubbleSort(str) {
    let arr = str.split(',')
    let sortlog = []
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            sortlog.push([arr.concat(), [j, j + 1]])
            sortlog.push([arr.concat(), [j, j + 1]])
            sortlog.push([arr.concat(), [j, j + 1]])
if (arr[j] > arr[j + 1]) {
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    sortlog.push([arr.concat(), [j, j + 1]])
}
}
    }
    sortlog.push([arr.concat(), [-1, -1]])
    return sortlog
}
function showlog(logValues, showElement) {
    let str = ' '
    let {
        done,
        value: [row, pos]
    } = logValues.next()
    for(const key in row) {
        let color = pos.indexOf(Number(key)) > -1 ? 'color:red;' : ''
        str += '<span style="font-size:' +row[key] * '</span>'
    }
    showElement.innerHTML = str
    if (pos[0] != -1)
    setTimeout("showlog(logValues,showDiv)",500)
}
function insertSort(str){
}
