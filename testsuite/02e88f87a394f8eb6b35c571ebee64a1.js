load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          12.6.2-1.js
   ECMA Section:       12.6.2 The for Statement

   1. first expression is not present.
   2. second expression is not present
   3. third expression is not present


   Author:             christine@netscape.com
   Date:               15 september 1997
*/

var SECTION = "12.6.2-1";
var VERSION = "ECMA_1";
startTest();
var TITLE   = "The for statement";

writeHeaderToLog( SECTION + " "+ TITLE);

new TestCase( "12.6.2-1", "for statement",  99,     testprogram() );

test();


function testprogram() {
  myVar = 0;

  for ( ; ; ) {
    if ( ++myVar == 99 )
      break;
  }

  return myVar;
}
