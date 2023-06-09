load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The | regular expression operator separates two alternatives.
    The pattern first tries to match the left Alternative (followed by the sequel of the regular expression).
    If it fails, it tries to match the right Disjunction (followed by the sequel of the regular expression)
es5id: 15.10.2.3_A1_T2
description: Execute /((a)|(ab))((c)|(bc))/.exec("abc") and check results
---*/

var __executed = /((a)|(ab))((c)|(bc))/.exec("abc");

var __expected = ["abc", "a", "a", undefined, "bc", undefined, "bc"];
__expected.index = 0;
__expected.input = "abc";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /((a)|(ab))((c)|(bc))/.exec("abc"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /((a)|(ab))((c)|(bc))/.exec("abc"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /((a)|(ab))((c)|(bc))/.exec("abc"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /((a)|(ab))((c)|(bc))/.exec("abc"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}
