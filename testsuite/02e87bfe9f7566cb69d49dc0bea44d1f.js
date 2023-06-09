load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Compound Assignment Operator calls PutValue(lref, v)
es5id: S11.13.2_A5.1_T2
description: >
    Evaluating LeftHandSideExpression lref returns Reference type; Reference
    base value is an environment record and environment record kind is
    object environment record. PutValue(lref, v) uses the initially
    created Reference even if the environment binding is no longer present.
    Binding in surrounding global environment record is not changed.
    Check operator is "x *= y".
flags: [noStrict]
---*/

var x = 0;
var scope = {
  get x() {
    delete this.x;
    return 2;
  }
};

with (scope) {
  x *= 3;
}

if (scope.x !== 6) {
  $ERROR('#1: scope.x === 6. Actual: ' + (scope.x));
}
if (x !== 0) {
  $ERROR('#2: x === 0. Actual: ' + (x));
}
