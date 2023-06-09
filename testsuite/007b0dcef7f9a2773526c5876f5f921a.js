load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x -= y is the same as x = x - y
es5id: 11.13.2_A4.5_T1.4
description: Type(x) and Type(y) vary between Null and Undefined
---*/

var x;

//CHECK#1
x = null;
x -= undefined;
if (isNaN(x) !== true) {
  $ERROR('#1: x = null; x -= undefined; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#2
x = undefined;
x -= null;
if (isNaN(x) !== true) {
  $ERROR('#2: x = undefined; x -= null; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#3
x = undefined;
x -= undefined;
if (isNaN(x) !== true) {
  $ERROR('#3: x = undefined; x -= undefined; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#4
x = null;
x -= null;
if (x !== 0) {
  $ERROR('#4: x = null; x -= null; x === 0. Actual: ' + (x));
}
