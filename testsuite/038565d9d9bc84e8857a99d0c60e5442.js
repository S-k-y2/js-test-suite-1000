load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-2-8
description: >
    Array.prototype.some - 'length' is an own accessor property that
    overrides an inherited data property on an Array-like object
---*/

        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var proto = { length: 3 };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();

        Object.defineProperty(child, "length", {
            get: function () {
                return 2;
            },
            configurable: true
        });

        child[0] = 9;
        child[1] = 11;
        child[2] = 12;

assert(Array.prototype.some.call(child, callbackfn1), 'Array.prototype.some.call(child, callbackfn1) !== true');
assert.sameValue(Array.prototype.some.call(child, callbackfn2), false, 'Array.prototype.some.call(child, callbackfn2)');
