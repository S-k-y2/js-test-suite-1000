load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Line Terminator cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits
 *
 * @path ch07/7.3/S7.3_A6_T4.js
 * @description Insert PARAGRAPH SEPARATOR (U+2029) in var x
 * @negative
 */

var\u2029x;

