load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.1.6
description: >
  Default parameters' effect on function length
info: |
  Function length is counted by the non initialized parameters in the left.

  9.2.4 FunctionInitialize (F, kind, ParameterList, Body, Scope)

  [...]
  2. Let len be the ExpectedArgumentCount of ParameterList.
  3. Perform ! DefinePropertyOrThrow(F, "length", PropertyDescriptor{[[Value]]:
     len, [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true}).
  [...]

  FormalsList : FormalParameter

    1. If HasInitializer of FormalParameter is true return 0
    2. Return 1.

  FormalsList : FormalsList , FormalParameter

    1. Let count be the ExpectedArgumentCount of FormalsList.
    2. If HasInitializer of FormalsList is true or HasInitializer of
    FormalParameter is true, return count.
    3. Return count+1.
features: [default-parameters]
includes: [propertyHelper.js]
---*/


function* f1(x = 42) {}

assert.sameValue(f1.length, 0, 'FormalsList: x = 42');
verifyNotEnumerable(f1, 'length');
verifyNotWritable(f1, 'length');
verifyConfigurable(f1, 'length');

function* f2(x = 42, y) {}

assert.sameValue(f2.length, 0, 'FormalsList: x = 42, y');
verifyNotEnumerable(f2, 'length');
verifyNotWritable(f2, 'length');
verifyConfigurable(f2, 'length');

function* f3(x, y = 42) {}

assert.sameValue(f3.length, 1, 'FormalsList: x, y = 42');
verifyNotEnumerable(f3, 'length');
verifyNotWritable(f3, 'length');
verifyConfigurable(f3, 'length');

function* f4(x, y = 42, z) {}

assert.sameValue(f4.length, 1, 'FormalsList: x, y = 42, z');
verifyNotEnumerable(f4, 'length');
verifyNotWritable(f4, 'length');
verifyConfigurable(f4, 'length');
