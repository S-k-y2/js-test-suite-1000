load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-27
description: >
    Array.prototype.filter - This object is the Arguments object which
    implements its own property get method (number of arguments is
    greater than number of parameters)
---*/

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return val === 11;
            } else if (idx === 1) {
                return val === 12;
            } else if (idx === 2) {
                return val === 9;
            } else {
                return false;
            }
        }

        var func = function (a, b) {
            return Array.prototype.filter.call(arguments, callbackfn);
        };
        var newArr = func(11, 12, 9);

assert.sameValue(newArr.length, 3, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
assert.sameValue(newArr[1], 12, 'newArr[1]');
assert.sameValue(newArr[2], 9, 'newArr[2]');
