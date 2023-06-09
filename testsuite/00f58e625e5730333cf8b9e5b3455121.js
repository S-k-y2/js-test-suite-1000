load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-func-block-scoping.case
// - src/annex-b-fns/eval-func/direct-if-decl-else-stmt.template
/*---
description: A block-scoped binding is created (IfStatement with a declaration in the first statement position in eval code)
esid: sec-functiondeclarations-in-ifstatement-statement-clauses
es6id: B.3.4
flags: [generated, noStrict]
info: |
    The following rules for IfStatement augment those in 13.6:

    IfStatement[Yield, Return]:
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else Statement[?Yield, ?Return]
        if ( Expression[In, ?Yield] ) Statement[?Yield, ?Return] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield]


    13.2.14 Runtime Semantics: BlockDeclarationInstantiation

    [...]
    4. For each element d in declarations do
       a. For each element dn of the BoundNames of d do
          i. If IsConstantDeclaration of d is true, then
             [...]
          ii. Else,
              2. Perform ! envRec.CreateMutableBinding(dn, false).

       b. If d is a GeneratorDeclaration production or a FunctionDeclaration
          production, then
          i. Let fn be the sole element of the BoundNames of d.
          ii. Let fo be the result of performing InstantiateFunctionObject for
              d with argument env.
          iii. Perform envRec.InitializeBinding(fn, fo).
---*/
var initialBV, currentBV, varBinding;

(function() {
  eval(
    'if (true) function f() { initialBV = f; f = 123; currentBV = f; return "decl"; } else ;varBinding = f;\
    f();'
  );
}());


assert.sameValue(
  initialBV(),
  'decl',
  'Block-scoped binding value is function object at execution time'
);
assert.sameValue(currentBV, 123, 'Block-scoped binding is mutable');
assert.sameValue(
  varBinding(),
  'decl',
  'Block-scoped binding is independent of outer var-scoped binding'
);
