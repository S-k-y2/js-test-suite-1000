load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("a933351025cd04d593f2b4eef938c419.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 352742;
var summary = 'Array filter on {valueOf: Function}';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  print('If the test harness fails, this test fails.');
  expect = 4; 
  z = {valueOf: Function};
  actual = 2;
  try {
    [11].filter(z);
  }
  catch(e)
  {
    actual = 3;
  }
  actual = 4;

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
