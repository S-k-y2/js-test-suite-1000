load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.prototype.settime
es6id: 20.3.4.27
description: >
  Behavior when the "this" value is a Date object describing an invald date
info: |
  1. Perform ? thisTimeValue(this value).
  2. Let t be ? ToNumber(time).
  3. Let v be TimeClip(t).
  4. Set the [[DateValue]] internal slot of this Date object to v.
  5. Return v.
---*/

var date = new Date(NaN);
var result;

result = date.setTime(0);

assert.sameValue(result, 0, 'return value');
assert.sameValue(date.getTime(), 0, '[[DateValue]] internal slot');
