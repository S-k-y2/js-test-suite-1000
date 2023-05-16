load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("01e0ec3a9a01836764c05319def52ae3.js");
load("e76ff365d64777bcbc1bae1e7cf335bc.js");
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is mozilla.org code.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   pschwartau@netscape.com
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

/*
 * Date: 21 Feb 2001
 * See http://bugzilla.mozilla.org/show_bug.cgi?id=69607
 *
 * SUMMARY:  testing that we don't crash on trivial JavaScript
 *
 */
//-----------------------------------------------------------------------------
var gTestfile = 'regress-69607.js';
var BUGNUMBER = 69607;
var summary = "Testing that we don't crash on trivial JavaScript";
var var1;
var var2;
var var3;

printBugNumber(BUGNUMBER);
printStatus (summary);

/*
 * The crash this bug reported was caused by precisely these lines
 * placed in top-level code (i.e. not wrapped inside a function) -
 */
if(false)
{
  var1 = 0;
}
else
{
  var2 = 0;
}

if(false)
{
  var3 = 0;
}

reportCompare('No Crash', 'No Crash', '');

