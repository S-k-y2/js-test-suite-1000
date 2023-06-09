load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-i-25
description: >
    Array.prototype.some - This object is the Arguments object which
    implements its own property get method (number of arguments is
    less than number of parameters)
---*/

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return val === 11;
            }
            return false;
        }

        var func = function (a, b) {
            return Array.prototype.some.call(arguments, callbackfn);
        };

assert(func(11), 'func(11) !== true');
