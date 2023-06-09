load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-10-5
description: >
    Array.prototype.reduceRight reduces array in descending order of
    indices(initialvalue present)
---*/

  function callbackfn(prevVal, curVal,  idx, obj)
  {
    return prevVal + curVal;
  }
  var srcArr = ['1','2','3','4','5'];

assert.sameValue(srcArr.reduceRight(callbackfn,'6'), '654321', 'srcArr.reduceRight(callbackfn,"6")');
