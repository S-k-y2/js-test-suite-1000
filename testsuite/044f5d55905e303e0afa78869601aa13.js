load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production x += y is the same as x = x + y
 *
 * @path ch11/11.13/11.13.2/S11.13.2_A4.4_T1.1.js
 * @description Type(x) and Type(y) vary between primitive boolean and Boolean object
 */

//CHECK#1
x = true;
x += true;
if (x !== 2) {
  $ERROR('#1: x = true; x += true; x === 2. Actual: ' + (x));
}

//CHECK#2
x = new Boolean(true);
x += true;
if (x !== 2) {
  $ERROR('#2: x = new Boolean(true); x += true; x === 2. Actual: ' + (x));
}

//CHECK#3
x = true;
x += new Boolean(true);
if (x !== 2) {
  $ERROR('#3: x = true; x += new Boolean(true); x === 2. Actual: ' + (x));
}

//CHECK#4
x = new Boolean(true);
x += new Boolean(true);
if (x !== 2) {
  $ERROR('#4: x = new Boolean(true); x += new Boolean(true); x === 2. Actual: ' + (x));
}

