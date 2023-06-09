load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-6
description: >
    Array.prototype.filter - element to be retrieved is own data
    property that overrides an inherited accessor property on an Array
---*/

        function callbackfn(val, idx, obj) {
            return val === 11;
        }

            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 9;
                },
                configurable: true
            });
            var newArr = [11].filter(callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
