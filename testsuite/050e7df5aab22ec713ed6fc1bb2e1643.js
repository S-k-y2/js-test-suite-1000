load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.2.1-4gs
description: >
    Strict Mode - SyntaxError is thrown if a VariableDeclarationNoIn
    occurs within strict code and its Identifier is arguments
negative: SyntaxError
flags: [onlyStrict]
---*/

throw NotEarlyError;
var arguments;
