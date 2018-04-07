/*
	给你一个二维数组,二维数组中的每个数都是正数,要求从左上角走到右下角,每一步只能向右或者向下。
	沿途经过的数字要累加起来。返回最小的路径和。
*/
var matrix = [
	[1, 2, 0],
	[3, 5, 1],
	[2, 2, 2]
];
console.log( walk(matrix, 0, 0) );
function walk(matrix, i, j) {	
	if ( i == matrix.length - 1 && j == matrix[0].length - 1 ) {
		return matrix[i][j];
	}

	if ( i == matrix.length - 1 ) {
		return matrix[i][j] + walk(matrix, i, j + 1);
	}

	if ( j == matrix[0].length - 1 ) {
		return matrix[i][j] + walk(matrix, i + 1, j);
	}

	var right = walk(matrix, i, j + 1);
	var down = walk(matrix, i + 1, j);
	return matrix[i][j] + Math.min(right, down);

}
