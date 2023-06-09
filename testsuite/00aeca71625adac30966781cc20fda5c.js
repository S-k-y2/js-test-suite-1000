load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-i-16
description: >
    Array.prototype.map - element to be retrieved is inherited
    accessor property on an Array
---*/

        var kValue = "abc";

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return val === kValue;
            }
            return false;
        }

            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return kValue;
                },
                configurable: true
            });

            var testResult = [, ].map(callbackfn);

assert.sameValue(testResult[0], true, 'testResult[0]');
