load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.5.4_2-6gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (Anonymous FunctionExpression includes strict
    directive prologue)
flags: [noStrict]
---*/

assert.throws(TypeError, function() {
    (function () {
        "use strict";
        gNonStrict();
    })();
});


function gNonStrict() {
    return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
