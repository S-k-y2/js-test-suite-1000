load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Since LineTerminator between Postfix Increment/Decrement Operator(I/DO) and operand is not allowed but
 * between Prefix I/DO and operand admitted, Postfix I/DO in combination with prefix I/DO after automatic semicolon insertion gives valid result
 *
 * @path ch07/7.9/S7.9_A5.6_T1.js
 * @description Try use Variable1 \n ++ \n Variable2 construction
 */

var x=0, y=0;

x
++
y

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((x!==0)&(y!==1)) {
	$ERROR('#1: Check Postfix Increment Operator for automatic semicolon insertion');
}
//
//////////////////////////////////////////////////////////////////////////////

x
++y

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ((x!==0)&(y!==2)) {
	$ERROR('#2: Check Postfix Increment Operator for automatic semicolon insertion');
}
//
//////////////////////////////////////////////////////////////////////////////

