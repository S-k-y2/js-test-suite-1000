load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.3
description: >
  "prototype" property of TypedArray
info: >
  22.2.2.3 %TypedArray%.prototype

  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js, testTypedArray.js]
---*/

verifyNotEnumerable(TypedArray, 'prototype');
verifyNotWritable(TypedArray, 'prototype');
verifyNotConfigurable(TypedArray, 'prototype');
