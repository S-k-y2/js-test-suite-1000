load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Line Terminator between LeftHandSideExpression and "++" is not allowed
 *
 * @path ch11/11.3/11.3.1/S11.3.1_A1.1_T2.js
 * @description Carriage Return
 * @negative
 */

//CHECK#1
eval("var x = 1; x\u000D++");

