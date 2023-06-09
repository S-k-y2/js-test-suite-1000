load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol.prototype.valueof
es6id: 19.4.3.3
description: Called on a Symbol value
info: |
  1. Let s be the this value.
  2. If Type(s) is Symbol, return s.
---*/

var valueOf = Symbol.prototype.valueOf;
var subject = Symbol('s');

assert.sameValue(valueOf.call(subject), subject);
