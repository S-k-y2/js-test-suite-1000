load("201224b0d1c296b45befd2285e95dd42.js");

function f(a) { 
    return a >>> 0; 
};

assertEq(f(-2147483647), 2147483649);
assertEq(f(-2147483648), 2147483648);
assertEq(f(-2147483649), 2147483647);
