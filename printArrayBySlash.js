/*
*按斜线方向打印矩阵，例如
* var array = [
*     [0, 1, 2, 3],
*     [4, 5, 6, 7],
*     [8, 9, 10, 11]
* ]
*
* 打印结果：0,1,4,2,5,8,3,6,9,7,10,11
*/



function printArrayBySlash(arr) {
    var i = j = k = 0;
    var rows = arr.length,
        cols = arr[0].length;
    var limits = rows + cols - 1;
    var res = [];
    for (; k < limits; k++) {
        for (; i < rows; ++i) {
            for (; j < cols; ++j) {
                if (i + j === k) res.push(arr[i][j]);
            }
            j = 0;
        }
        i = 0;
    }

    console.log(res.join(','));
}
