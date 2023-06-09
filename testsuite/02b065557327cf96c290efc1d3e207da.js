load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("e77abdb32f8bc9e31b285641e9710ef0.js");
load("352fc54052b657308832185e13cd17c9.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-set-p-v-receiver
description: Consistent canonicalization of NaN values
info: >
  9.4.5.5 [[Set]] ( P, V, Receiver)

  ...
  2. If Type(P) is String, then
    ...
    b. If numericIndex is not undefined, then
      i. Return ? IntegerIndexedElementSet(O, numericIndex, V).
  ...

  9.4.5.9 IntegerIndexedElementSet ( O, index, value )

  ...
  15. Perform SetValueInBuffer(buffer, indexedPosition, elementType, numValue).
  ...

  24.1.1.6 SetValueInBuffer ( arrayBuffer, byteIndex, type, value [ ,
  isLittleEndian ] )

  ...
  8. If type is "Float32", then
     a. Set rawBytes to a List containing the 4 bytes that are the result
        of converting value to IEEE 754-2008 binary32 format using “Round to
        nearest, ties to even” rounding mode. If isLittleEndian is false, the
        bytes are arranged in big endian order. Otherwise, the bytes are
        arranged in little endian order. If value is NaN, rawValue may be set
        to any implementation chosen IEEE 754-2008 binary64 format Not-a-Number
        encoding. An implementation must always choose the same encoding for
        each implementation distinguishable NaN value.
  9. Else, if type is "Float64", then
     a. Set rawBytes to a List containing the 8 bytes that are the IEEE
        754-2008 binary64 format encoding of value. If isLittleEndian is false,
        the bytes are arranged in big endian order. Otherwise, the bytes are
        arranged in little endian order. If value is NaN, rawValue may be set
        to any implementation chosen IEEE 754-2008 binary32 format Not-a-Number
        encoding. An implementation must always choose the same encoding for
        each implementation distinguishable NaN value.
  ...
includes: [nans.js, testTypedArray.js, compareArray.js]
---*/

function body(FloatArray) {
  var sample = new FloatArray(1);
  var control, idx, someNaN, sampleBytes, controlBytes;

  for (idx = 0; idx < distinctNaNs.length; ++idx) {
    someNaN = distinctNaNs[idx];
    control = new FloatArray([someNaN]);

    sample[0] = someNaN;

    sampleBytes = new Uint8Array(sample.buffer);
    controlBytes = new Uint8Array(control.buffer);
    assert(compareArray(sampleBytes, controlBytes), 'NaN value #' + idx);
  }
}

testWithTypedArrayConstructors(body, [Float32Array, Float64Array]);
