load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch12/12.10/12.10.1/12.10.1-13-s.js
 * @description Strict Mode - SyntaxError isn't thrown when WithStatement body is in strict mode code
 * @noStrict
 */


function testcase() {
        with ({}) {
            "use strict";
        }
        return true;
    }
runTestCase(testcase);
