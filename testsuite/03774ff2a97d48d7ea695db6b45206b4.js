load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-120
description: >
    Object.defineProperties - 'value' property of 'descObj' is own
    accessor property that overrides an inherited data property
    (8.10.5 step 5.a)
---*/

        var obj = {}; 

        var proto = {
            value: "inheritedDataProperty"
        };

        var Con = function () { };
        Con.prototype = proto;

        var descObj = new Con();

        Object.defineProperty(descObj, "value", {
            get: function () {
                return "ownAccessorProperty";
            }
        });


        Object.defineProperties(obj, {
            property: descObj
        });

assert.sameValue(obj.property, "ownAccessorProperty", 'obj.property');
