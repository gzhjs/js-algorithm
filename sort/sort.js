var sort = function() {
    //直接插入排序
    var straightInsertionSort = function(arr) {
        if (!Array.isArray(arr)) throw new Error('参数不是数组');
        //拷贝一份arr
        var resArr = arr.slice();
        var i = 0,
            j = 0,
            len = resArr.length;

        for (;i < len - 1; ++i) {
            while (j < i && resArr[j] < resArr[i + 1]) ++j;
            //当j === i时需要单独比较
            if(resArr[j] > resArr[i + 1])resArr.splice(j, 0, resArr.splice(i + 1, 1)[0]);
            j = 0;
        };

        return resArr;
    }

    return {
        straightInsertionSort: straightInsertionSort
    }
}();
