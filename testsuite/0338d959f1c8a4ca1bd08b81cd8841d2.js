load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: fit

// Throwing an exception from an onPop handler when yielding terminates the debuggee
// but does not close the generator-iterator.

load("e2c808509c360663d6364e14c187fc8f.js")

var g = newGlobal();
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
dbg.onDebuggerStatement = function handleDebugger(frame) {
    frame.onPop = function (c) {
        throw "fit";
    };
};
g.eval("function* g() { for (var i = 0; i < 10; i++) { debugger; yield i; } }");
g.eval("var it = g();");
assertEq(gw.executeInGlobal("it.next();"), null);

dbg.enabled = false;
assertIteratorNext(g.it, 1);
