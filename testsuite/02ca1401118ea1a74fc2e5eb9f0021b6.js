load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch10/10.4/10.4.3/10.4.3-1-102-s.js
 * @description Strict Mode - checking 'this' (strict anonymous function passed as arg to String.prototype.replace from non-strict context)
 * @onlyStrict
 */
    
function testcase() {
var x = 3;

return ("ab".replace("b", (function () { 
                                "use strict";
                                return function () {
                                    x = this;
                                    return "a";
                                }
                           })())==="aa") && (x===undefined);
}
runTestCase(testcase);