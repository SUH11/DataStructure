// 岛问题

var arr = [
	[0, 0, 1, 0, 1, 0],
	[1, 1, 1, 0, 1, 0],
	[1, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0]
];

console.log(island(arr));

function island(arr) {
	if ( arr == null || arr.length < 0 ) {
		return 0;
	} 

	var m = arr[0].length;
	var n = arr.length;
	var count = 0;

	for ( var i = 0; i < n; i ++ ) {
		for ( var j = 0; j < m; j ++ ) {
			if ( arr[i][j] == 1 ) {
				count ++;
				arr = infect(arr, i, j, m, n);
			}
		}
	}

	return count;

}

function infect(arr, i, j, m, n) {
	if ( i < 0 || i >= n || j < 0 || j >= m || arr[i][j] != 1) {
		return;
	}
	arr[i][j] = 2;
	arr = (typeof infect(arr, i - 1, j, m, n)) == 'undefined'? arr : infect(arr, i - 1, j, m, n);
	arr = (typeof infect(arr, i + 1, j, m, n)) == 'undefined'? arr : infect(arr, i + 1, j, m, n);
	arr = (typeof infect(arr, i, j - 1, m, n)) == 'undefined'? arr : infect(arr, i, j - 1, m, n);
	arr = (typeof infect(arr, i, j + 1, m, n)) == 'undefined'? arr : infect(arr, i, j + 1, m, n);
	// arr = infect(arr, i + 1, j, m, n);
	// arr = infect(arr, i, j - 1, m, n);
	// arr = infect(arr, i, j + 1, m, n);
	return arr;
}