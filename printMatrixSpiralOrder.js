/*
	顺时针打印
		1   2   3   4 

		4   6   7   8 

		9   10  11  12

		13  14  15  16

	结果 1 2 3 4 8 12 16  15 14 13 9 4 6 7 11 10
*/
var matrix = [
			// [1],
			// [2]
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
			[13, 14, 15, 16]
		];

// 标记左上
var a = 0;
var b = 0;
// 标记右下
var c = matrix.length - 1;
var d = matrix[0].length - 1;

while ( a <= c && b <= d ) {
	printEdage(matrix, a++, b++, c--, d--);
}

function printEdage(matrix, a, b, c, d) {

	if ( a == c ) { // 如果在一行上
		for ( var i = a; i <= d; i ++ ) {
			console.log(matrix[a][i]);
		}
	} else if ( b == d ) { // 如果在一列上
		for ( var i = b; i <= c; i ++ ) {
			console.log(matrix[i][b]);
		}
	} else {
		// 顺时针打印
		var curX = a;
		var curY = b;
		// 左到右
		while ( curY != c ) {
			console.log(matrix[curX][curY++]);
		}
		// 上到下
		while ( curX != d ) {
			console.log(matrix[curX++][curY]);
		}
		// 右到左
		while( curY != a ) {
			console.log(matrix[curX][curY--]);
		}
		// 上到下
		while( curX != b ) {
			console.log(matrix[curX--][curY]);
		}
	}

}