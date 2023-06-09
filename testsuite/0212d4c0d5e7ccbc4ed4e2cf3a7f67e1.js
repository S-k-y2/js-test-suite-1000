load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-2-2
description: >
    Array.prototype.lastIndexOf - 'length' is own data property on an
    Array
---*/

        var targetObj = {};

            Array.prototype[2] = targetObj;

assert.sameValue([0, targetObj].lastIndexOf(targetObj), 1, '[0, targetObj].lastIndexOf(targetObj)');
assert.sameValue([0, 1].lastIndexOf(targetObj), -1, '[0, 1].lastIndexOf(targetObj)');
