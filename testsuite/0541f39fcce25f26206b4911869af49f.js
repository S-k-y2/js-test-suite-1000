load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-32
description: >
    Array.prototype.indexOf - 'fromIndex' is a negative non-integer,
    verify truncation occurs in the proper direction
---*/

        var targetObj = {};

assert.sameValue([0, targetObj, 2].indexOf(targetObj, -1.5), -1, '[0, targetObj, 2].indexOf(targetObj, -1.5)');
assert.sameValue([0, 1, targetObj].indexOf(targetObj, -1.5), 2, '[0, 1, targetObj].indexOf(targetObj, -1.5)');
