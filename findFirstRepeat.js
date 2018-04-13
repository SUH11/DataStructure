console.log( duplicate([2,1,3,0,4]))
function duplicate(numbers) {
    //函数返回True/False
    var n = numbers.length;
    for ( var i = 0; i < n; i ++ ) {
        if ( numbers[numbers[i] + n] && (numbers[numbers[i] + n] === numbers[i]) ) {
            // number[i]为第一个重复的
            return true;
        } else {
            numbers[numbers[i] + n] = numbers[i];
        }
    }
    return false;
}