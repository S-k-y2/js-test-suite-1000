load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

assertSame('', Function.prototype.name);

var descr = Object.getOwnPropertyDescriptor(Function.prototype, 'name');
assertFalse(descr.enumerable);
assertTrue(descr.configurable);
assertFalse(descr.writable);
assertSame('', descr.value);
