//快速排序
//时间复杂度O(nlogn)
    function quickSort(arr) {
        var len = arr.length;

        if (len === 0 || len === 1) return arr;

        var i = 0,
            mid = Math.round(len / 2),
            j = mid;
        while (i < mid || j < len) {
            if (i < mid) {
                if (arr[i] > arr[mid]) {
                    arr.splice(arr[mid + 1], 0, arr.splice(i, 1)[0]);
                } else {
                    ++i;
                }
            }

            if (j < len) {
                if (arr[j] < arr[mid]) {
                    arr.splice(arr[mid - 1], 0, arr.splice(j, 1)[0]);
                } else {
                    ++j;
                }
            }
        }

        var temp = quickSort(arr.slice(0, mid));
        temp.push(arr[mid]);
        return temp.concat(quickSort(arr.slice(mid + 1)));
    }
