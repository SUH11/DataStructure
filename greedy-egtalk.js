/*
	一些项目要占用一个会议室宣讲，会议室不能同时容纳两个项目 的宣讲。 
	给你每一个项目开始的时间和结束的时间(给你一个数 组，里面 是一个个具体的项目)，
	你来安排宣讲的日程，要求会 议室进行 的宣讲的场次最多。返回这个最多的宣讲场次。

	贪心策略：
		1.找到endTime最早的
		2.找到currTime<=startTime的
*/


var startArr = [9, 11, 13, 15, 19];
var endArr = [11, 11.5, 20, 16, 19.5];
var count = 0;

getTime(startArr, endArr, 0)
console.log( count );

function getTime(startArr, endArr, current) {

	for ( var i = 0; i < startArr.length; i ++ ) {
		if ( startArr[i] < current ) {
			startArr.splice(i, 1);
			endArr.splice(i, 1);
		}
	}

	var minEnd = endArr[0];
	var index = 0;

	for ( var i = 1; i < endArr.length; i ++ ) {
		if ( endArr[i] < minEnd ) {
			minEnd = endArr[i];
			index = i;
		}
	}
	

	if ( current < minEnd ) {
		current = minEnd;
		count ++;
		startArr.splice(index, 1);
		endArr.splice(index, 1);
		getTime(startArr, endArr, current);
	}

	return;
}

