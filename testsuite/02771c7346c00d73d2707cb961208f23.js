load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Resolving with a resolved Promise instance whose `then` method has been overridden from a fulfilled promise
es6id: 25.4.5.3
info: >
    [...]
    7. Return PerformPromiseThen(promise, onFulfilled, onRejected,
       resultCapability).

    25.4.5.3.1 PerformPromiseThen
    [...]
    8. Else if the value of promise's [[PromiseState]] internal slot is
       "fulfilled",
       a. Let value be the value of promise's [[PromiseResult]] internal slot.
       b. EnqueueJob("PromiseJobs", PromiseReactionJob, «fulfillReaction,
          value»).

    25.4.2.1 PromiseReactionJob
    [...]
    8. Let status be Call(promiseCapability.[[Resolve]], undefined,
       «handlerResult.[[value]]»).
    [...]

    25.4.1.3.2 Promise Resolve Functions
    [...]
    8. Let then be Get(resolution, "then").
    9. If then is an abrupt completion, then
       [...]
    10. Let thenAction be then.[[value]].
    11. If IsCallable(thenAction) is false, then
        [...]
    12. Perform EnqueueJob ("PromiseJobs", PromiseResolveThenableJob,
        «promise, resolution, thenAction»)
flags: [async]
---*/

var value = {};
var thenable = new Promise(function(resolve) { resolve(); });
var p1 = new Promise(function(resolve) { resolve(); });
var p2;

thenable.then = function(resolve) {
  resolve(value);
};

p2 = p1.then(function() {
    return thenable;
  });

p2.then(function(x) {
    if (x !== value) {
      $DONE('The promise should be fulfilled with the resolution value of the provided promise.');
      return;
    }

    $DONE();
  }, function() {
    $DONE('The promise should not be rejected.');
  });
