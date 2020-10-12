
let counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
 arr = ["1","8","1","2","3","3","0","0"]
 arr.sort(function (x,y) {
    return x-y;
  });
for(var i = 0;i<arr.length-1;i++){
    var cishu = counts(arr,arr[i])
          console.log("数组counts中"+arr[i]+"出现的次数是："+cishu);
  i = i+cishu -1
  
}
 