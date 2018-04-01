/*
	正方形矩阵，旋转90deg，要求必须时正方形
	思路：
		1.找出要交换的四个点 如 1 4 7 10
		2.算出遍历的次数
		3.循环遍历
*/
var matrix = [
	// [1, 2, 3],
	// [4, 5, 6],
	// [7, 8, 9]
	[1, 2, 3, 4],
	[12, 13, 14, 5],
	[11, 16, 15, 6],
	[10, 9, 8, 7]
];

// 标记左上
var a = 0;
var b = 0;
// 标记右下
var c = matrix.length - 1;
var d = matrix[0].length - 1;
// console.log( printEdage(matrix, a++, b++, c--, d--) );
while ( a <= c && b <= d ) {
	console.log(printEdage(matrix, a++, b++, c--, d--));
}

function printEdage(matrix, a, b, c, d) {

	if ( c != d ) { // 如果在一行上
		return;
	} else {
		var times = d - b;
		for ( var i = 0; i != times; i ++ ) {
			console.log('左上', matrix[a][b+i]);
			console.log('右上', matrix[a+i][d])
			console.log('右下', matrix[c][d-i])
			console.log('左下', matrix[c-i][a])
			// 交换
			var temp = matrix[a][b+i];
			matrix[a][b+i] = matrix[c-i][a];
			matrix[c-i][a] = matrix[c][d-i];
			matrix[c][d-i] = matrix[a+i][d];
			matrix[a+i][d] = temp;
			 
		}
	}

	return matrix;

}