//快速排序
//时间复杂度O(nlogn)

//第一种方法 直接使用数组方法，代码量少
function quickSort(arr) {
    if (!Array.isArray(arr)) throw new TypeError('不是数组');
    if (arr.length <= 1) return arr;

    var key = arr[0];
    var left = [],
        right = [];

    for (var i = 1, len = arr.length; i < len; ++i) {
        arr[i] > key ? right.push(arr[i]) : left.push(arr[i]);
    }

    return quickSort(left).concat([key], quickSort(right));
}
    
//第二种方法 尽量避免使用数组方法，代码量大
function quickSort(arr) {
    var len = arr.length;

    if (len <= 1) return arr;

    var i = 0,
        mid = Math.round(len / 2),
        j = len - 1;
    var left = [],
        right = [];

    while (i < mid || j > mid) {

        while (arr[i] <= arr[mid] && i < mid) {
            left.push(arr[i]);
            i++;
        }
        if (i < mid) {
            right.push(arr[i]);
            i++;
        }

        while (arr[j] >= arr[mid] && j > mid) {
            right.push(arr[j]);
            j--;
        }
        if (j > mid) {
            left.push(arr[j]);
            j--;
        }
    }


    return quickSort(left).concat([arr[mid]], quickSort(right));
}
