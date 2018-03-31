/*
  选择排序：每次选出最小的放在前边，直到排完序  
    稳定性：不稳定的   [5, 5, 3]会将5和3交换
    时间复杂度：O(n^2)
    空间复杂度：O(1)
*/
console.log( bubbleSort([3, 2, 7, 5, 0]) );


function selectSort(arr) {
  if ( arr == null || arr.length < 2 ) {
    return;
  }
  for ( var i = 0; i < arr.length; i ++ ) {
    var minIndex = i;
    for ( var j = i + 1; j < arr.length; j ++ ) {
      minIndex = arr[i] > arr[j] ? j : minIndex;
    }
    var temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}