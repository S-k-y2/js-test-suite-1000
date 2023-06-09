load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-7
description: >
    Array.prototype.reduce - element to be retrieved is inherited data
    property on an Array-like object
---*/

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 0);
            }
        }

        var proto = { 0: 0, 1: 1, 2: 2, length: 3 };
        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.length = 3;

        Array.prototype.reduce.call(child, callbackfn);

assert(testResult, 'testResult !== true');
