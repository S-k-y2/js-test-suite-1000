load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function foo(a) {
  return (a[0] >>> 0) > 0;
}

var a = new Uint32Array([4]);
var b = new Uint32Array([0x80000000]);
assertTrue(foo(a));
assertTrue(foo(a));
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo(b))
