load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-517
description: >
    ES5 Attributes - success to update [[Set]] attribute of accessor
    property ([[Get]] is a Function, [[Set]] is undefined,
    [[Enumerable]] is false, [[Configurable]] is true) to different
    value
---*/

        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: undefined,
            enumerable: false,
            configurable: true
        });

        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
        var propertyDefineCorrect = obj.hasOwnProperty("prop");

        Object.defineProperty(obj, "prop", {
            set: setFunc
        });

        obj.prop = "overrideData";
        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

assert.sameValue(typeof desc1.set, "undefined", 'typeof desc1.set');
assert(propertyDefineCorrect, 'propertyDefineCorrect !== true');
assert.sameValue(desc2.set, setFunc, 'desc2.set');
assert.sameValue(verifySetFunc, "overrideData", 'verifySetFunc');
