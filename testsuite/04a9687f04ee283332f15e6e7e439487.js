load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol.for
es6id: 19.4.2.1
description: Error resulting from string coercion of first argument
info: >
    1. Let stringKey be ? ToString(key).
---*/

var subject = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  Symbol.for(subject);
});

subject = Symbol('s');

assert.throws(TypeError, function() {
  Symbol.for(subject);
});
