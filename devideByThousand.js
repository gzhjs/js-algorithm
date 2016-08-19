/**
将给定数字按千分位加逗号。例如10000，输出10,000
*/

//方法1
function devideByThousand(num) {
    if (typeof num !== 'number') throw new TypeError('不是数字');

    if (num < 1000) return '' + num;

    var temp = [],
        div = num;

    while (div >= 1000 && (div % 1000) >= 0) {
        var remain = div % 1000;
        temp.push(remain >= 100 ? '' + remain : (remain >= 10 ? '0' + remain : '00' + remain));
        div = parseInt(div / 1000, 10);
    }

    temp.push(div);

    return temp.reverse().join(',');
}

//方法2
function devideByThousand2(num) {
    if (typeof num !== 'number') throw new TypeError('不是数字');

    if (num < 1000) return '' + num;

    return ('' + num).replace(/(\d{1,3})(?=(\d{3})+)/g, '$1,');
}


exports.devideByThousand = devideByThousand;
exports.devideByThousand2= devideByThousand2;
