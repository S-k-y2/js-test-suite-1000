load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-9
description: >
    Array.prototype.forEach - modifications to length don't change
    number of iterations
---*/

        var called = 0;
        function callbackfn(val, idx, obj) {
            called++;
        }

        var obj = { 1: 12, 2: 9, length: 2 };

        Object.defineProperty(obj, "0", {
            get: function () {
                obj.length = 3;
                return 11;
            },
            configurable: true
        });

        Array.prototype.forEach.call(obj, callbackfn);

assert.sameValue(called, 2, 'called');
