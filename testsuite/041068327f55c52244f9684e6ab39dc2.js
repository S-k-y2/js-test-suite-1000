load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-ii-8
description: >
    Array.prototype.map - element changed by callbackfn on previous
    iterations is observed
---*/

        var obj = { 0: 9, 1: 12, length: 2 };

        function callbackfn(val, idx, o) {
            if (idx === 0) {
                obj[idx + 1] = 8;
            }
            return val > 10;
        }

        var testResult = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(testResult[1], false, 'testResult[1]');
