load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The [[Prototype]] property of the newly constructed object
    is set to the original Array prototype object, the one that
    is the initial value of Array.prototype
es5id: 15.4.1_A1.1_T1
description: >
    Create new property of Array.prototype. When new Array object has
    this property
---*/

//CHECK#1
Array.prototype.myproperty = 1;
var x = Array(); 
if (x.myproperty !== 1) {
  $ERROR('#1: Array.prototype.myproperty = 1; var x = Array(); x.myproperty === 1. Actual: ' + (x.myproperty));
}

//CHECK#2
if (x.hasOwnProperty('myproperty') !== false) {
  $ERROR('#2: Array.prototype.myproperty = 1; var x = Array(); x.hasOwnProperty(\'myproperty\') === false. Actual: ' + (x.hasOwnProperty('myproperty')));
}
