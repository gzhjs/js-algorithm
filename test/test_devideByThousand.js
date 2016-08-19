var devideByThousand = require('../devideByThousand').devideByThousand;
var devideByThousand2 = require('../devideByThousand').devideByThousand2;

function testAddComma(func, limit) {
    console.log('测试开始……');
    var testRes = false;

    for (var i = 0; i < limit; ++i) {
        testRes = /^(?:\d{1,3},)*(\d{3},)*\d{1,3}$/.test(func(i));
        if (!testRes) {
            console.log('数字：' + i + '测试未通过');
            return i;
        }
    }
    console.log('测试通过');
}

testAddComma(devideByThousand, 10000000);

testAddComma(devideByThousand2, 10000000);
