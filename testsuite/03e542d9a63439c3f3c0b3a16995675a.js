load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("dad23d658043681e79913afa6a72ec65.js");
load("27a82c9057fc064528049eb47ece4be8.js");
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
 * The Original Code is JavaScript Engine testing utilities.
 *
 * The Initial Developer of the Original Code is
 * Mozilla Foundation.
 * Portions created by the Initial Developer are Copyright (C) 2008
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
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

var gTestfile = 'regress-444787.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 444787;
var summary = 'Object.getPrototypeOf';
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
 
  var i;
  var type;
  var instance;
  var types = [
    Array,
    Boolean,
    Date,
    Error,
    Function,
    Math,
    Number,
    Object,
    RegExp,
    String,
    ];

  for (i = 0; i < types.length; i++)
  {
    type = types[i];

    if (typeof type.__proto__ != 'undefined')
    {
      expect = type.__proto__;
      actual = Object.getPrototypeOf(type);
      reportCompare(expect, actual, summary + ': ' + type.name);
    }

    try
    {
      eval('instance = new ' + type.name);
      expect = type.prototype;
      actual = Object.getPrototypeOf(instance);
      reportCompare(expect, actual, summary + ': new ' + type.name);
    }
    catch(ex if ex instanceof TypeError)
    {
      print('Ignore ' + ex);
    }
    catch(ex)
    {
      actual = ex + '';
      reportCompare(expect, actual, summary + ': new ' + type.name);
    }

  }

  types = [null, undefined];

  for (i = 0; i < types.length; i++)
  {
    type = types[i];
    expect = 'TypeError: Object.getPrototype is not a function';
    try
    {
      actual = Object.getPrototype(null);
    }
    catch(ex)
    {
      actual = ex + '';
    }
    reportCompare(expect, actual, summary + ': ' + type);
  }

  var objects = [
    {instance: [0], type: Array},
    {instance: true, type: Boolean},
    {instance: false, type: Boolean},
    {instance: (function () {}), type: Function},
    {instance: eval, type: Function},
    {instance: parseInt, type: Function},
    {instance: 1.0, type: Number},
    {instance: Infinity, type: Number},
    {instance: NaN, type: Number},
    {instance: Math.PI, type: Number},
    {instance: {a: ''}, type: Object},
    {instance: /foo/, type: RegExp},
    {instance: "bar", type: String}
    ];

  for (i = 0; i < objects.length; i++)
  {
    instance = objects[i].instance;
    type     = objects[i].type;
    expect   = type.prototype;
    actual   = Object.getPrototypeOf(instance);
    reportCompare(expect, actual, summary + ' instance: ' + instance + ', type: ' + type.name);
  }

  exitFunc ('test');
}
