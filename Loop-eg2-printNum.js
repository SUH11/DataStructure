// 母牛每年生一只母牛,新出生的母牛成长三年后也能每年生一只 母牛,假设不会死。求N年后,母牛的数量。
/*
	F(n) = F(n-1) + F(n-3)
	今年  = 去年   ＋ 三年前小牛数量（前三年生的小牛可以生小小牛的数量） 
*/
console.log( getNum(6) );

function getNum(n) {
	if ( n >= 5 ) {
		return getNum(n-1) + getNum(n-3);
	} else {
		return n;
	}
	
}