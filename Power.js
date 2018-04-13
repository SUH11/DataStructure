/*
	幂函数
		1.指数<0
			1）x＝0
		2.指数等于0
*/
console.log( Power(2, -3));

function Power(base, exponent) {
	var result = 1;
	var n = exponent;
	if ( exponent == 0 ) {
		return 1;
	} else if ( exponent < 0 ) {
		if ( base == 0 ) {
			return '分母不能为0';
		}
		exponent = -exponent;
	}


	while( exponent != 0 ) {
		result *= base;
		exponent--;
	}
	return n < 0 ? parseFloat(1/result) : result;
}