function $(id) {
    return document.getElementById(id);
}
$('smallBox').onmouseover = function () {
    $('mask').style.display = 'block';
    $('bigBox').style.display = 'block';
};
$('smaillBox').onmouseout = function () {
    $('mask').style.display = 'none';
    $('bigBox').style.display = 'none';
};
$('smallBox').onmousemove = function(event){
    var event =event || window.event;
    var pageX = event.pageX || event.clientX +document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
    var boxX= pageX - $('box').offseLeft;
    var boxY= pageY - $('box').offseTop;
    var maskX = boxX - $('mask').offsetWidth / 2;
    var maskY = boxY - $('mask').offsetHeight / 2;
if (
maskX < 0){
    maskX = 0;
}
if (maskX > $('smaillBox').offsetWidth - $('mask').offsetWidth){
    maskX = $('smaillBox').offsetWidth - $('mask').offsetWidth
}
if (
    maskY < 0){
        maskY = 0;
    }
    if (maskY > $('smaillBox').offsetWidth - $('mask').offsetHeight){
        maskY = $('smaillBox').offsetWidth - $('mask').offsetHeight
    }
    $('mask').style.left = maskX+ 'px';
    $('mask').style.top = maskY+ 'px';
    var bigImgToMove = $('bigImg').offsetWidth - $('bigBox').offsetWidth;
    var maskToMove = $('smallBox').offsetWidth - $('mask').offsetWidth;
var rate = bigImgToMove / maskToMove;
$('bigImg').style.left = -rate * maskX + 'px';
$('bigImg').style.top = -rate * maskX + 'px';
};

