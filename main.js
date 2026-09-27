'use strict';
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.o() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.tz();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.y(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.y.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.D();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.D.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.tA(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
function $ct_O__($thiz) {
  return $thiz;
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.D = (function() {
  return $systemIdentityHashCode(this);
});
$p.y = (function(that) {
  return (this === that);
});
$p.B = (function() {
  var i = this.D();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.B();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = null;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.F = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.o = (function() {
  return new $ac_O(this.b.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = false;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.F = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.o = (function() {
  return new $ac_Z(this.b.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Uint16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.o = (function() {
  return new $ac_C(this.b.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int8Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.o = (function() {
  return new $ac_B(this.b.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.o = (function() {
  return new $ac_S(this.b.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.o = (function() {
  return new $ac_I(this.b.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.o = (function() {
  return new $ac_J(this.b.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.o = (function() {
  return new $ac_F(this.b.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float64Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.o = (function() {
  return new $ac_D(this.b.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    B: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.b;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.b = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.b[i] = null;
      }
    } else {
      this.b = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.F = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.o = (function() {
    return new ArrayClass(this.b.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    B: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
var $typedArraysAreBigEndian = (new Int8Array(new Int32Array([1]).buffer)[0] === 0);
function $constArrayBuffer_B(len, encoded) {
  var buf = new ArrayBuffer(len);
  var view = new DataView(buf);
  var regularChunksEnd = ((encoded.length - 4) | 0);
  var i = 0;
  var j = 0;
  var chunk = 0;
  while (true) {
    chunk = (((encoded.charCodeAt(i) | (encoded.charCodeAt(((i + 1) | 0)) << 8)) | (encoded.charCodeAt(((i + 2) | 0)) << 16)) | (encoded.charCodeAt(((i + 3) | 0)) << 24));
    chunk = ((((chunk - 808464432) | 0) - ((chunk & 1616928864) >>> 3)) | 0);
    chunk = (((chunk & 1056980736) >>> 2) | (chunk & 4128831));
    chunk = (((chunk & 268369920) >>> 4) | (chunk & 4095));
    if ((i === regularChunksEnd)) {
      break;
    }
    view.setUint32(j, chunk, true);
    i = ((i + 4) | 0);
    j = ((j + 3) | 0);
  }
  var trailing = ((len - j) | 0);
  view.setUint8(j, chunk);
  if ((trailing !== 1)) {
    view.setUint8(((j + 1) | 0), (chunk >>> 8));
    if ((trailing === 3)) {
      view.setUint8(((j + 2) | 0), (chunk >>> 16));
    }
  }
  return buf;
}
function $constArrayBuffer_S(len, encoded) {
  var buf = $constArrayBuffer_B((len << 1), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt16(i, view.getInt16(i, true), false);
      i = ((i + 2) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_I(len, encoded) {
  var buf = $constArrayBuffer_B((len << 2), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt32(i, view.getInt32(i, true), false);
      i = ((i + 4) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_J(len, encoded) {
  return $constArrayBuffer_I((len << 1), encoded);
}
function $constTypedArrayU_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      v = ((v | (c - 48)) << 5);
    } else {
      v = (v | (c - 93));
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
      v = 0;
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constTypedArrayS_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  var first = true;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      if (first) {
        v = (((c - 48) << 27) >> 22);
        first = false;
      } else {
        v = ((v | (c - 48)) << 5);
      }
    } else {
      if (first) {
        v = (((c - 93) << 27) >> 27);
      } else {
        v = (v | (c - 93));
        first = true;
      }
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constArrRaw_B(len, encoded) {
  return new $ac_B(new Int8Array($constArrayBuffer_B(len, encoded)));
}
function $constArrRaw_S(len, encoded) {
  return new $ac_S(new Int16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_C(len, encoded) {
  return new $ac_C(new Uint16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_I(len, encoded) {
  return new $ac_I(new Int32Array($constArrayBuffer_I(len, encoded)));
}
function $constArrRaw_J(len, encoded) {
  return new $ac_J(new Int32Array($constArrayBuffer_J(len, encoded)));
}
function $constArrUVals_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, 0));
}
function $constArrUDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, (-1)));
}
function $constArrSVals_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, 0));
}
function $constArrSDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, (-1)));
}
function $constArrUVals_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, 0));
}
function $constArrUDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, (-1)));
}
function $constArrSVals_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, 0));
}
function $constArrSDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, (-1)));
}
/** @constructor */
function $c_Lapp_tulz_tuplez_Composition() {
}
$p = $c_Lapp_tulz_tuplez_Composition.prototype = new $h_O();
$p.constructor = $c_Lapp_tulz_tuplez_Composition;
/** @constructor */
function $h_Lapp_tulz_tuplez_Composition() {
}
$h_Lapp_tulz_tuplez_Composition.prototype = $p;
/** @constructor */
function $c_Lccrystal_site_Footer$() {
}
$p = $c_Lccrystal_site_Footer$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_Footer$;
/** @constructor */
function $h_Lccrystal_site_Footer$() {
}
$h_Lccrystal_site_Footer$.prototype = $p;
$p.ce = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.rA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("portal-footer"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("container footer-inner"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-brand-block"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-logo"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("crystal-glyph"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25c8", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-manifesto-quote"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\"Context is not a vector database. It is a sovereign, deterministic DAG.\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-subquote"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Engineered for biological software architects and computational AI entities pair-programming in high-stakes codebases.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-links-grid"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-col"), $m_Lcom_raquo_laminar_api_package$().a.fw().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Specifications & Standards", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.hN().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/blob/main/spec/v1/context-crystal.json"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "JSON Schema v1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/blob/main/spec/v1/context-crystal.json"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "JSON-LD Context", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/blob/main/skills/context-crystal/SKILL.md"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Universal Agent Skill", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-col"), $m_Lcom_raquo_laminar_api_package$().a.fw().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Engine & Protocols", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.hN().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/blob/main/cli/shared/src/main/scala/ccrystal/cli/mcp/DefaultMcpHandler.scala"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Native MCP Server Engine", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/blob/main/install.sh"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Single-Line Installer", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("llms.txt"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "llms.txt (Machine Ingestion)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("llms-full.txt"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "llms-full.txt (Full Corpus)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-col"), $m_Lcom_raquo_laminar_api_package$().a.fw().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Open Source", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.hN().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "GitHub Repository", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/releases"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Release Binaries", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/blob/main/LICENSE"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "MIT License", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("container footer-bottom"), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Copyright \u00a9 2026 Oswaldo C. Dantas J\u00fanior & Context Crystal Contributors. Pure functional Scala 3 Native & Scala.js.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
});
var $d_Lccrystal_site_Footer$ = new $TypeData().i($c_Lccrystal_site_Footer$, "ccrystal.site.Footer$", ({
  cw: 1
}));
var $n_Lccrystal_site_Footer$;
function $m_Lccrystal_site_Footer$() {
  if ((!$n_Lccrystal_site_Footer$)) {
    $n_Lccrystal_site_Footer$ = new $c_Lccrystal_site_Footer$();
  }
  return $n_Lccrystal_site_Footer$;
}
/** @constructor */
function $c_Lccrystal_site_Header$() {
}
$p = $c_Lccrystal_site_Header$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_Header$;
/** @constructor */
function $h_Lccrystal_site_Header$() {
}
$h_Lccrystal_site_Header$.prototype = $p;
$p.ce = (function() {
  var $x_24 = $m_Lcom_raquo_laminar_api_package$().a.s0();
  var $x_23 = $m_sr_ScalaRunTime$();
  var $x_22 = $m_Lcom_raquo_laminar_api_package$().a.g.f("portal-header");
  var $x_21 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_20 = $m_sr_ScalaRunTime$();
  var $x_19 = $m_Lcom_raquo_laminar_api_package$().a.g.f("container header-inner");
  var $x_18 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("brand-cluster"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("brand-logo"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("crystal-glyph"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25c8", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("brand-text-col"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("brand-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("brand-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "v1.0.0 \u2022 Zero-Token Context DAG", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])));
  var $x_17 = $m_Lcom_raquo_laminar_api_package$().a.sw();
  var $x_16 = $m_sr_ScalaRunTime$();
  var $x_15 = $m_Lcom_raquo_laminar_api_package$().a.g.f("header-nav");
  var $x_14 = $m_Lcom_raquo_laminar_api_package$().a;
  var $x_13 = $m_sci_Nil$();
  var $x_12 = $m_s_Predef$();
  var xs = $m_Lccrystal_site_Tab$().tr();
  var f = ((tab) => $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.ji(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().f2.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((tab$2) => ((active) => (((active === null) ? (tab$2 === null) : (active === tab$2)) ? "nav-pill active" : "nav-pill")))(tab)), $m_s_None$()), $m_Lcom_raquo_laminar_api_package$().a.hu()), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("nav-pill-icon"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, tab.ek, $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("nav-pill-text"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, tab.el, $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)).gG(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((tab$3) => (() => tab$3))(tab))), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((sink) => ((_$1) => {
    sink.dr(_$1);
  }))($m_Lccrystal_site_State$().f2.dv)))]))));
  var len = xs.b.length;
  var ys = new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_1 = i;
        var x0 = xs.b[i];
        ys.b[$x_1] = f(x0);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_I)) {
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = xs.b[i];
        ys.b[$x_2] = f(x0$1);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_D)) {
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = xs.b[i];
        ys.b[$x_3] = f(x0$2);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_J)) {
      while ((i < len)) {
        var $x_6 = i;
        var $x_4 = xs.b;
        var $x_5 = (i << 1);
        var x0$3_$_lo = $x_4[$x_5];
        var x0$3_$_hi = $x_4[(($x_5 + 1) | 0)];
        ys.b[$x_6] = f($bL(x0$3_$_lo, x0$3_$_hi));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_F)) {
      while ((i < len)) {
        var $x_7 = i;
        var x0$4 = xs.b[i];
        ys.b[$x_7] = f(x0$4);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_C)) {
      while ((i < len)) {
        var $x_8 = i;
        var x0$5 = xs.b[i];
        ys.b[$x_8] = f($bC(x0$5));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_B)) {
      while ((i < len)) {
        var $x_9 = i;
        var x0$6 = xs.b[i];
        ys.b[$x_9] = f(x0$6);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_S)) {
      while ((i < len)) {
        var $x_10 = i;
        var x0$7 = xs.b[i];
        ys.b[$x_10] = f(x0$7);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_Z)) {
      while ((i < len)) {
        var $x_11 = i;
        var x0$8 = xs.b[i];
        ys.b[$x_11] = f(x0$8);
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs);
    }
  }
  return $x_24.d($x_23.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_22, $x_21.d($x_20.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_19, $x_18, $x_17.d($x_16.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_15, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_14, $x_13.ee($x_12.kf(ys)), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("header-actions"), $m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("btn-github"), $m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.sR().f("noopener noreferrer"), $m_Lccrystal_site_Icons$().rW(16), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "GitHub", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])));
});
var $d_Lccrystal_site_Header$ = new $TypeData().i($c_Lccrystal_site_Header$, "ccrystal.site.Header$", ({
  cx: 1
}));
var $n_Lccrystal_site_Header$;
function $m_Lccrystal_site_Header$() {
  if ((!$n_Lccrystal_site_Header$)) {
    $n_Lccrystal_site_Header$ = new $c_Lccrystal_site_Header$();
  }
  return $n_Lccrystal_site_Header$;
}
/** @constructor */
function $c_Lccrystal_site_Icons$() {
}
$p = $c_Lccrystal_site_Icons$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_Icons$;
/** @constructor */
function $h_Lccrystal_site_Icons$() {
}
$h_Lccrystal_site_Icons$.prototype = $p;
$p.qW = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().eg().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().eZ().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f0().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eQ().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eL().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("client-brand-svg claude-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M13.5 2.5c-.3-.6-1.1-.8-1.7-.5l-1.3.8-1.3-.8c-.6-.3-1.4-.1-1.7.5l-1 1.7-1.8.4c-.7.1-1.2.7-1.1 1.4l.2 1.9-1.4 1.3c-.5.5-.6 1.3-.2 1.9l1 1.6-.6 1.8c-.2.7.1 1.4.7 1.7l1.7.8.4 1.8c.2.7.8 1.1 1.5 1l1.9-.3 1.3 1.4c.5.5 1.3.6 1.9.2l1.6-1 1.8.6c.7.2 1.4-.1 1.7-.7l.8-1.7 1.8-.4c.7-.2 1.1-.8 1-1.5l-.3-1.9 1.4-1.3c.5-.5.6-1.3.2-1.9l-1-1.6.6-1.8c.2-.7-.1-1.4-.7-1.7l-1.7-.8-.4-1.8c-.2-.7-.8-1.1-1.5-1l-1.9.3-1.3-1.4z M12 6.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11z")])))])));
});
$p.re = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().eg().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().eZ().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f0().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eQ().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eL().k("none"), $m_Lcom_raquo_laminar_api_package$().a.t().hK().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().hM().k("1.8"), $m_Lcom_raquo_laminar_api_package$().a.t().hL().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("client-brand-svg cursor-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M12 2.5 L20.5 7.4 L12 12.3 L3.5 7.4 Z")]))), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M3.5 7.4 L3.5 16.6 L12 21.5 L12 12.3 Z")]))), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M20.5 7.4 L20.5 16.6 L12 21.5 L12 12.3 Z")])))])));
});
$p.tu = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().eg().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().eZ().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f0().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eQ().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eL().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("client-brand-svg zed-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M3.5 5.5h17v3.2L10.2 15.3H20.5v3.2H3.5v-3.2L13.8 8.7H3.5V5.5z")])))])));
});
$p.rW = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().eg().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().eZ().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f0().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eQ().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eL().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("github-svg-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z")])))])));
});
$p.qZ = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().eg().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().eZ().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f0().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eQ().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eL().k("none"), $m_Lcom_raquo_laminar_api_package$().a.t().hK().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().hM().k("2"), $m_Lcom_raquo_laminar_api_package$().a.t().ka().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().hL().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("card-svg-icon amnesia-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().qV().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().rf().k("12"), $m_Lcom_raquo_laminar_api_package$().a.t().rg().k("12"), $m_Lcom_raquo_laminar_api_package$().a.t().sO().k("9")]))), $m_Lcom_raquo_laminar_api_package$().a.t().sM().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().sL().k("12,7 12,12 15,14")])))])));
});
$p.ri = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().eg().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().eZ().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f0().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eQ().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eL().k("none"), $m_Lcom_raquo_laminar_api_package$().a.t().hK().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().hM().k("2"), $m_Lcom_raquo_laminar_api_package$().a.t().ka().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().hL().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("card-svg-icon debris-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M3 6h18")]))), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2")]))), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6")]))), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M10 11v6")]))), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M14 11v6")])))])));
});
$p.tk = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().eg().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().eZ().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f0().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eQ().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eL().k("none"), $m_Lcom_raquo_laminar_api_package$().a.t().hK().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().hM().k("2"), $m_Lcom_raquo_laminar_api_package$().a.t().ka().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().hL().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("card-svg-icon burn-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10z")]))), $m_Lcom_raquo_laminar_api_package$().a.t().cd().aP($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().c9().k("M12 14a2 2 0 00-2 2c0 1.1.9 2 2 2s2-.9 2-2a2 2 0 00-2-2z")])))])));
});
var $d_Lccrystal_site_Icons$ = new $TypeData().i($c_Lccrystal_site_Icons$, "ccrystal.site.Icons$", ({
  cy: 1
}));
var $n_Lccrystal_site_Icons$;
function $m_Lccrystal_site_Icons$() {
  if ((!$n_Lccrystal_site_Icons$)) {
    $n_Lccrystal_site_Icons$ = new $c_Lccrystal_site_Icons$();
  }
  return $n_Lccrystal_site_Icons$;
}
function $s_Lccrystal_site_Main__main__AT__V(args) {
  $m_Lccrystal_site_Main$().sj(args);
}
function $p_Lccrystal_site_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$1) {
  if ((appContainer$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  return (appContainer$lzy1$1.hn ? appContainer$lzy1$1.ho : appContainer$lzy1$1.s5(document.querySelector("#app")));
}
function $p_Lccrystal_site_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2) {
  return (appContainer$lzy1$2.hn ? appContainer$lzy1$2.ho : $p_Lccrystal_site_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2));
}
/** @constructor */
function $c_Lccrystal_site_Main$() {
}
$p = $c_Lccrystal_site_Main$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_Main$;
/** @constructor */
function $h_Lccrystal_site_Main$() {
}
$h_Lccrystal_site_Main$.prototype = $p;
$p.sj = (function(args) {
  var appContainer$lzy1 = new $c_sr_LazyRef();
  var this$2 = $m_Lcom_raquo_laminar_api_package$().a;
  var container = new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((appContainer$lzy1$2) => (() => $p_Lccrystal_site_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element(this, appContainer$lzy1$2)))(appContainer$lzy1));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_Lccrystal_site_Main$().qE()));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().ca(this$2.m9.sJ(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().qJ(document, p.es.fV, p.fU), p.fT), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container.U(), rootNode.U());
  })), this$2.tp());
});
$p.qE = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("portal-root"), $m_Lccrystal_site_Header$().ce(), $m_Lcom_raquo_laminar_api_package$().a.sk().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("portal-main container"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().oM(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().f2.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x$1) => {
    var x = $s_Lccrystal_site_Tab$__Manifesto__Lccrystal_site_Tab();
    if (((x === null) ? (x$1 === null) : (x === x$1))) {
      return $m_Lccrystal_site_TabManifesto$().ce();
    }
    var x$3 = $s_Lccrystal_site_Tab$__Explorer__Lccrystal_site_Tab();
    if (((x$3 === null) ? (x$1 === null) : (x$3 === x$1))) {
      return $m_Lccrystal_site_TabExplorer$().ce();
    }
    var x$5 = $s_Lccrystal_site_Tab$__Quickstart__Lccrystal_site_Tab();
    if (((x$5 === null) ? (x$1 === null) : (x$5 === x$1))) {
      return $m_Lccrystal_site_TabQuickstart$().ce();
    }
    var x$7 = $s_Lccrystal_site_Tab$__Mcp__Lccrystal_site_Tab();
    if (((x$7 === null) ? (x$1 === null) : (x$7 === x$1))) {
      return $m_Lccrystal_site_TabMcp$().ce();
    }
    var x$9 = $s_Lccrystal_site_Tab$__AgentIngestion__Lccrystal_site_Tab();
    if (((x$9 === null) ? (x$1 === null) : (x$9 === x$1))) {
      return $m_Lccrystal_site_TabAgentIngestion$().ce();
    }
    throw new $c_s_MatchError(x$1);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().ir, (void 0)))]))), $m_Lccrystal_site_Footer$().ce()])));
});
var $d_Lccrystal_site_Main$ = new $TypeData().i($c_Lccrystal_site_Main$, "ccrystal.site.Main$", ({
  cz: 1
}));
var $n_Lccrystal_site_Main$;
function $m_Lccrystal_site_Main$() {
  if ((!$n_Lccrystal_site_Main$)) {
    $n_Lccrystal_site_Main$ = new $c_Lccrystal_site_Main$();
  }
  return $n_Lccrystal_site_Main$;
}
/** @constructor */
function $c_Lccrystal_site_State$() {
  this.f2 = null;
  this.cN = null;
  $n_Lccrystal_site_State$ = this;
  this.f2 = $m_Lcom_raquo_laminar_api_package$().a.f9.go($s_Lccrystal_site_Tab$__Manifesto__Lccrystal_site_Tab());
  this.cN = $m_Lcom_raquo_laminar_api_package$().a.f9.go($m_s_None$());
}
$p = $c_Lccrystal_site_State$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_State$;
/** @constructor */
function $h_Lccrystal_site_State$() {
}
$h_Lccrystal_site_State$.prototype = $p;
$p.fu = (function(id, text) {
  var \u03b41$ = window.navigator.clipboard.writeText(text);
  \u03b41$.then(((_$1) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lccrystal_site_State$().cN, new $c_s_Some(id));
    return (window.setTimeout((() => ($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_State$().cN.aK).N().bj(id) ? ($f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lccrystal_site_State$().cN, $m_s_None$()), (void 0)) : (void 0))), 2000.0) | 0);
  }));
});
var $d_Lccrystal_site_State$ = new $TypeData().i($c_Lccrystal_site_State$, "ccrystal.site.State$", ({
  cA: 1
}));
var $n_Lccrystal_site_State$;
function $m_Lccrystal_site_State$() {
  if ((!$n_Lccrystal_site_State$)) {
    $n_Lccrystal_site_State$ = new $c_Lccrystal_site_State$();
  }
  return $n_Lccrystal_site_State$;
}
/** @constructor */
function $c_Lccrystal_site_TabAgentIngestion$() {
}
$p = $c_Lccrystal_site_TabAgentIngestion$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabAgentIngestion$;
/** @constructor */
function $h_Lccrystal_site_TabAgentIngestion$() {
}
$h_Lccrystal_site_TabAgentIngestion$.prototype = $p;
$p.ce = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tab-content tab-agent-ingestion"), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("agent-intro"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("mcp-badge"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Machine-Readable Standard \u2022 Autonomous Ingestion \u2022 Zero Human Learning Curve", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.eP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Autonomous AI Agent Ingestion (`llms.txt`)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal adheres to the emergent `/llms.txt` standard. Autonomous coding agents (Claude, ChatGPT, Perplexity, Devin, Cursor, Windsurf) can ingest our canonical operational rules, CLI flags, and MCP schemas directly.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Machine-Readable Endpoints", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Standardized plain-text documentation endpoints hosted at the root of this portal:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("cards-grid two-col"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card endpoint-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("endpoint-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("file-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "CONCISE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "/llms.txt", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Optimized for LLM context limits. Contains the core operational philosophy, essential CLI commands, MCP tool mappings, and behavioral invariants.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("endpoint-actions"), $m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("llms.txt"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-mini active"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "View llms.txt \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card endpoint-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("endpoint-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("file-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "FULL CORPUS", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "/llms-full.txt", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Complete reference corpus. Includes the full JSON Schema v1 specification, comprehensive CLI subcommands, and multi-entity authorship protocol rules.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("endpoint-actions"), $m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("llms-full.txt"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-mini active"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "View llms-full.txt \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "2", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Direct Agent System Prompt / Custom Instructions", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Paste this directive into your agent harness, Cursor Rules, or custom instructions to instantly activate Context Crystal:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "# Context Crystal Operational Directive for AI Entities\nYou have access to Context Crystal (`ccrystal` CLI and native MCP server).\n- State Persistence: Never rely on chat window history. Inspect crystals at turn inception (`ccrystal list` or `crystal_list`).\n- Context Beam Hydration: Hydrate living context before major edits (`ccrystal hydrate <id> --tail 5`).\n- Zero Agent Debris: Always register transient leases for temporary worktrees (`ccrystal transient lease`) and ensure they are cleaned or promoted before goal conclusion.\n- Atomic Transitions: Batch context updates atomically using `ccrystal batch` or `crystal_batch`.\n- Cold Storage Over Deletion: Conclude goals when done (`ccrystal conclude`), squash intermediate nodes (`ccrystal melt`), and archive solid crystals (`ccrystal archive`) rather than destructive deletion.\n- Authoritative Discovery: Use `ccrystal --help` or `ccrystal <subcommand> --help` as guaranteed ground truth for CLI flags, and `ccrystal --for-ai` for protocol rules.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().eH(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().cN.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.cA === "agent-directive")) ? "\u2713 Copied" : "Copy Directive"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $m_Lccrystal_site_State$().fu("agent-directive", "# Context Crystal Operational Directive for AI Entities\nYou have access to Context Crystal (`ccrystal` CLI and native MCP server).\n- State Persistence: Never rely on chat window history. Inspect crystals at turn inception (`ccrystal list` or `crystal_list`).\n- Context Beam Hydration: Hydrate living context before major edits (`ccrystal hydrate <id> --tail 5`).\n- Zero Agent Debris: Always register transient leases for temporary worktrees (`ccrystal transient lease`) and ensure they are cleaned or promoted before goal conclusion.\n- Atomic Transitions: Batch context updates atomically using `ccrystal batch` or `crystal_batch`.\n- Cold Storage Over Deletion: Conclude goals when done (`ccrystal conclude`), squash intermediate nodes (`ccrystal melt`), and archive solid crystals (`ccrystal archive`) rather than destructive deletion.\n- Authoritative Discovery: Use `ccrystal --help` or `ccrystal <subcommand> --help` as guaranteed ground truth for CLI flags, and `ccrystal --for-ai` for protocol rules.");
  })))])))])))])))])));
});
var $d_Lccrystal_site_TabAgentIngestion$ = new $TypeData().i($c_Lccrystal_site_TabAgentIngestion$, "ccrystal.site.TabAgentIngestion$", ({
  cH: 1
}));
var $n_Lccrystal_site_TabAgentIngestion$;
function $m_Lccrystal_site_TabAgentIngestion$() {
  if ((!$n_Lccrystal_site_TabAgentIngestion$)) {
    $n_Lccrystal_site_TabAgentIngestion$ = new $c_Lccrystal_site_TabAgentIngestion$();
  }
  return $n_Lccrystal_site_TabAgentIngestion$;
}
function $p_Lccrystal_site_TabExplorer$__renderDagState__Lccrystal_site_TabExplorer$Scenario__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, sc) {
  var $x_36 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_35 = $m_sr_ScalaRunTime$();
  var $x_34 = $m_Lcom_raquo_laminar_api_package$().a.g.f("dag-state-container");
  var $x_33 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card goal-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tag-goal"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "GOAL", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("status-tag in-progress"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "InProgress", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.fw().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Build Resilient OAuth2 Service", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("intent-text"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Implement stateless JWT authentication with token revocation list and hardware test fixture.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_32 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_31 = $m_sr_ScalaRunTime$();
  var $x_30 = $m_Lcom_raquo_laminar_api_package$().a.g.f("state-card tasks-card");
  var $x_29 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_28 = $m_sr_ScalaRunTime$();
  var $x_27 = $m_Lcom_raquo_laminar_api_package$().a.g.f("state-card-header");
  var $x_26 = $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ACCEPTANCE CRITERIA", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_25 = $m_Lcom_raquo_laminar_api_package$().a.E();
  var $x_24 = $m_sr_ScalaRunTime$();
  var $x_23 = $m_Lcom_raquo_laminar_api_package$().a;
  var x$2 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  var $x_22 = $x_29.d($x_28.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_27, $x_26, $x_25.d($x_24.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($x_23, ("Completion: " + (((sc === null) ? (x$2 === null) : (sc === x$2)) ? "0/3" : "1/3")), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_21 = $m_Lcom_raquo_laminar_api_package$().a.hN();
  var $x_20 = $m_sr_ScalaRunTime$();
  var $x_19 = $m_Lcom_raquo_laminar_api_package$().a.g.f("task-list");
  var $x_18 = $m_Lcom_raquo_laminar_api_package$().a.cc();
  var $x_17 = $m_sr_ScalaRunTime$();
  var $x_16 = $m_Lcom_raquo_laminar_api_package$().a.g;
  var x$4 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  var $x_15 = $x_16.f(((!((sc === null) ? (x$4 === null) : (sc === x$4))) ? "done" : "pending"));
  var $x_14 = $m_Lcom_raquo_laminar_api_package$().a.E();
  var $x_13 = $m_sr_ScalaRunTime$();
  var x$6 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  var $x_12 = $x_32.d($x_31.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_30, $x_22, $x_21.d($x_20.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_19, $x_18.d($x_17.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_15, $x_14.d($x_13.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([((!((sc === null) ? (x$6 === null) : (sc === x$6))) ? $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u2713 ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e) : $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25fb ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e))]))), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "task-1: Implement JWT token verification parser", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pending"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25fb ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "task-2: Hook token revocation cache into Redis", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pending"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25fb ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "task-3: End-to-end integration test with token rotation", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
  var x$8 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((!((sc === null) ? (x$8 === null) : (sc === x$8)))) {
    var $x_11 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card lease-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tag-lease"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ACTIVE TRANSIENT LEASE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("policy-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "revert_on_conclusion", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("lease-item"), $m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "lease-1 (git_worktree): ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "/home/user/git/worktrees/oauth2-spike", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("lease-notice"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u26a0 Invariant: Must be cleaned before crystal goal can be marked Concluded.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  } else {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_11 = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  }
  var x$10 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
  if (((sc === null) ? (x$10 === null) : (sc === x$10))) {
    var $x_10 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card artifact-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tag-artifact"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "PHYSICAL ARTIFACT", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("role-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Precondition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("artifact-name"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "art_bench_01: Hardware Security Dongle Rig", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("artifact-coords"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Location: Laboratory Alpha, Bench 4B \u2022 geo:52.5200,13.4050", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  } else {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_10 = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  }
  var $x_9 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_8 = $m_sr_ScalaRunTime$();
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().a.g.f("state-card nodes-card");
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "CAUSAL DAG NODES", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Capture Fidelity: inferred", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_4 = $m_sr_ScalaRunTime$();
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().a.g.f("dag-node-timeline");
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dag-node-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-bullet")]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-content"), $m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "node-1 [Init]", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, " Initialized crystal with goal and criteria by usr_operator", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
  var x$12 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((!((sc === null) ? (x$12 === null) : (sc === x$12)))) {
    var $x_1 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dag-node-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-bullet green")]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-content"), $m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "node-2 [Checkpoint]", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, " Task 1 complete; acquired git_worktree lease by agt_antigravity", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
  } else {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_1 = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  }
  var x$14 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
  return $x_36.d($x_35.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_34, $x_33, $x_12, $x_11, $x_10, $x_9.d($x_8.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_7, $x_6, $x_5.d($x_4.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_3, $x_2, $x_1, (((sc === null) ? (x$14 === null) : (sc === x$14)) ? $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dag-node-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-bullet purple")]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-content"), $m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "node-3 [Action]", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, " Linked physical artifact art_bench_01 as test precondition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))) : ($m_Lcom_raquo_laminar_api_package$(), new $c_Lcom_raquo_laminar_nodes_CommentNode("")))])))])))])));
}
function $p_Lccrystal_site_TabExplorer$__generatePromptBeam__Lccrystal_site_TabExplorer$Scenario__I__Z__T($thiz, sc, tail, summaryOnly) {
  var sb = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
  sb.bi("=== CONTEXT CRYSTAL CAST: oauth2-auth-service ===\n\n");
  sb.bi("## Goal: Build Resilient OAuth2 Service\n");
  sb.bi("Intent: Implement stateless JWT authentication with token revocation list and hardware test fixture.\n");
  sb.bi("Status: in_progress\n\n");
  sb.bi("## Active Tasks:\n");
  var x$2 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if (((sc === null) ? (x$2 === null) : (sc === x$2))) {
    sb.bi("- [ ] task-1: Implement JWT token verification parser\n");
    sb.bi("- [ ] task-2: Hook token revocation cache into Redis\n");
    sb.bi("- [ ] task-3: End-to-end integration test with token rotation\n\n");
  } else {
    sb.bi("- [x] task-1: Implement JWT token verification parser\n");
    sb.bi("- [ ] task-2: Hook token revocation cache into Redis\n");
    sb.bi("- [ ] task-3: End-to-end integration test with token rotation\n\n");
  }
  var x$4 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((!((sc === null) ? (x$4 === null) : (sc === x$4)))) {
    sb.bi("## Active Transient Leases (Must be cleaned before conclusion):\n");
    sb.bi("- [lease-1] GitWorktree: /home/user/git/worktrees/oauth2-spike (Policy: revert_on_conclusion)\n\n");
  }
  var x$6 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
  if (((sc === null) ? (x$6 === null) : (sc === x$6))) {
    sb.bi("## Precondition Artifacts:\n");
    sb.bi("- [art_bench_01] Hardware Security Dongle Rig (Physical, Location: Lab Alpha, Bench 4B)\n\n");
  }
  if ((!summaryOnly)) {
    sb.bi((("## State Transitions (Tail: " + tail) + "):\n"));
    var nodes = new $c_scm_ListBuffer().gP($m_sr_ScalaRunTime$().c(new ($d_T.r().C)([])));
    nodes.hx("- [HumanPrompt] (usr_operator): Initialized crystal with goal and criteria");
    var x$8 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
    if ((!((sc === null) ? (x$8 === null) : (sc === x$8)))) {
      nodes.hx("- [Checkpoint] [inferred] (agt_antigravity): Task 1 complete; acquired git_worktree lease");
    }
    var x$10 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
    if (((sc === null) ? (x$10 === null) : (sc === x$10))) {
      nodes.hx("- [Action] [inferred] (agt_antigravity): Linked physical artifact art_bench_01 as test precondition");
    }
    $f_sc_StrictOptimizedIterableOps__takeRight__I__O(nodes, tail).ag(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((n) => sb.bi((n + "\n")))));
    sb.bi("\n");
  }
  sb.bi("=== END CAST ===");
  return sb.aW.z;
}
/** @constructor */
function $c_Lccrystal_site_TabExplorer$() {
  this.f3 = null;
  this.fJ = null;
  this.fI = null;
  $n_Lccrystal_site_TabExplorer$ = this;
  this.f3 = $m_Lcom_raquo_laminar_api_package$().a.f9.go($s_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike__Lccrystal_site_TabExplorer$Scenario());
  this.fJ = $m_Lcom_raquo_laminar_api_package$().a.f9.go(3);
  this.fI = $m_Lcom_raquo_laminar_api_package$().a.f9.go(false);
}
$p = $c_Lccrystal_site_TabExplorer$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabExplorer$;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$() {
}
$h_Lccrystal_site_TabExplorer$.prototype = $p;
$p.ce = (function() {
  var $x_38 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_37 = $m_sr_ScalaRunTime$();
  var $x_36 = $m_Lcom_raquo_laminar_api_package$().a.g.f("tab-content tab-explorer");
  var $x_35 = $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("explorer-intro"), $m_Lcom_raquo_laminar_api_package$().a.eP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Live Interactive DAG & Context Beam Explorer", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Experience how Context Crystal models living software intent, maintains immutable causal provenance, enforces clean transient resource leases, and shapes context beams for LLM prompts in real time:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_34 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_33 = $m_sr_ScalaRunTime$();
  var $x_32 = $m_Lcom_raquo_laminar_api_package$().a.g.f("explorer-toolbar");
  var $x_31 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_30 = $m_sr_ScalaRunTime$();
  var $x_29 = $m_Lcom_raquo_laminar_api_package$().a.g.f("toolbar-group");
  var $x_28 = $m_Lcom_raquo_laminar_api_package$().a.jV().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Select Scenario:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_27 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_26 = $m_sr_ScalaRunTime$();
  var $x_25 = $m_Lcom_raquo_laminar_api_package$().a.g.f("scenario-buttons");
  var $x_24 = $m_Lcom_raquo_laminar_api_package$().a;
  var $x_23 = $m_sci_Nil$();
  var $x_22 = $m_s_Predef$();
  var xs = $m_Lccrystal_site_TabExplorer$Scenario$().ts();
  var f = ((sc) => $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.ji(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_TabExplorer$().f3.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((sc$2) => ((curr) => (((curr === null) ? (sc$2 === null) : (curr === sc$2)) ? "btn-scenario active" : "btn-scenario")))(sc)), $m_s_None$()), $m_Lcom_raquo_laminar_api_package$().a.hu()), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, sc.fK, $m_Lcom_raquo_laminar_modifiers_RenderableText$().e), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)).gG(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((sc$3) => (() => sc$3))(sc))), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((sink) => ((_$1) => {
    sink.dr(_$1);
  }))($m_Lccrystal_site_TabExplorer$().f3.dv)))]))));
  var len = xs.b.length;
  var ys = new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_11 = i;
        var x0 = xs.b[i];
        ys.b[$x_11] = f(x0);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_I)) {
      while ((i < len)) {
        var $x_12 = i;
        var x0$1 = xs.b[i];
        ys.b[$x_12] = f(x0$1);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_D)) {
      while ((i < len)) {
        var $x_13 = i;
        var x0$2 = xs.b[i];
        ys.b[$x_13] = f(x0$2);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_J)) {
      while ((i < len)) {
        var $x_16 = i;
        var $x_14 = xs.b;
        var $x_15 = (i << 1);
        var x0$3_$_lo = $x_14[$x_15];
        var x0$3_$_hi = $x_14[(($x_15 + 1) | 0)];
        ys.b[$x_16] = f($bL(x0$3_$_lo, x0$3_$_hi));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_F)) {
      while ((i < len)) {
        var $x_17 = i;
        var x0$4 = xs.b[i];
        ys.b[$x_17] = f(x0$4);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_C)) {
      while ((i < len)) {
        var $x_18 = i;
        var x0$5 = xs.b[i];
        ys.b[$x_18] = f($bC(x0$5));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_B)) {
      while ((i < len)) {
        var $x_19 = i;
        var x0$6 = xs.b[i];
        ys.b[$x_19] = f(x0$6);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_S)) {
      while ((i < len)) {
        var $x_20 = i;
        var x0$7 = xs.b[i];
        ys.b[$x_20] = f(x0$7);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_Z)) {
      while ((i < len)) {
        var $x_21 = i;
        var x0$8 = xs.b[i];
        ys.b[$x_21] = f(x0$8);
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs);
    }
  }
  var $x_10 = $x_31.d($x_30.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_29, $x_28, $x_27.d($x_26.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_25, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_24, $x_23.ee($x_22.kf(ys)), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))])));
  var $x_9 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_8 = $m_sr_ScalaRunTime$();
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().a.g.f("toolbar-group beam-controls");
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().a.jV().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Beam Shaping:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_4 = $m_sr_ScalaRunTime$();
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().a.g.f("beam-pill-group");
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("control-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "--tail:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var this$22 = $m_Lcom_raquo_laminar_api_package$().a;
  var this$21 = new $c_sci_$colon$colon(1, new $c_sci_$colon$colon(2, new $c_sci_$colon$colon(3, new $c_sci_$colon$colon(5, $m_sci_Nil$()))));
  var f$1 = ((count) => {
    var count$1 = (count | 0);
    return $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.ji(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_TabExplorer$().fJ.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((curr$1) => (((curr$1 | 0) === count$1) ? "btn-mini active" : "btn-mini"))), $m_s_None$()), $m_Lcom_raquo_laminar_api_package$().a.hu()), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, ("" + count$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)).gG(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => count$1))), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((sink$1) => ((_$1$1) => {
      sink$1.dr(_$1$1);
    }))($m_Lccrystal_site_TabExplorer$().fJ.dv)))])));
  });
  if ((this$21 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0$9 = this$21.g5;
    var h = new $c_sci_$colon$colon(f$1(x0$9), $m_sci_Nil$());
    var t = h;
    var rest = this$21.a0;
    while ((rest !== $m_sci_Nil$())) {
      var x0$10 = rest.w();
      var nx = new $c_sci_$colon$colon(f$1(x0$10), $m_sci_Nil$());
      t.a0 = nx;
      t = nx;
      rest = rest.v();
    }
    var $x_1 = h;
  }
  return $x_38.d($x_37.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_36, $x_35, $x_34.d($x_33.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_32, $x_10, $x_9.d($x_8.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_7, $x_6, $x_5.d($x_4.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_3, $x_2, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$22, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$()), $m_Lcom_raquo_laminar_api_package$().a.jV().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("checkbox-toggle"), $m_Lcom_raquo_laminar_api_package$().a.s6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("checkbox"), $m_Lcom_raquo_laminar_api_package$().a.p1().qo(this.fI.aK), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.pA(), false, false)).sr(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((sink$2) => ((_$1$2) => {
    sink$2.dr(_$1$2);
  }))(this.fI.dv)))]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, " --summary-only", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("explorer-panes-grid"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-col pane-dag"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25c8 Living Crystal DAG State (.ccrystals/)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("crystal-id-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal: oauth2-auth-service", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-body"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().oM(new $c_Lcom_raquo_airstream_misc_MapSignal(this.f3.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((sc$2$1) => $p_Lccrystal_site_TabExplorer$__renderDagState__Lccrystal_site_TabExplorer$Scenario__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($m_Lccrystal_site_TabExplorer$(), sc$2$1))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().ir, (void 0)))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-col pane-beam"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25c8 Hydrated Context Beam (ccrystal hydrate)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().eH(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().cN.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.cA === "explorer-beam")) ? "\u2713 Copied" : "Copy Beam"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1$3) => {
    var sc$1 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_TabExplorer$().f3.aK).N();
    var tail = ($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_TabExplorer$().fJ.aK).N() | 0);
    var sumOnly = (!(!$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_TabExplorer$().fI.aK).N()));
    $m_Lccrystal_site_State$().fu("explorer-beam", $p_Lccrystal_site_TabExplorer$__generatePromptBeam__Lccrystal_site_TabExplorer$Scenario__I__Z__T($m_Lccrystal_site_TabExplorer$(), sc$1, tail, sumOnly));
  })))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("beam-output-code"), $m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().eH(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().r2(this.f3.aK, this.fJ.aK, this.fI.aK, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$5()), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x$1$2) => {
    if ((x$1$2 !== null)) {
      var sc$4 = x$1$2.ff;
      var tail$1 = (x$1$2.fg | 0);
      var sumOnly$1 = (!(!x$1$2.fh));
      return $p_Lccrystal_site_TabExplorer$__generatePromptBeam__Lccrystal_site_TabExplorer$Scenario__I__Z__T($m_Lccrystal_site_TabExplorer$(), sc$4, tail$1, sumOnly$1);
    }
    throw new $c_s_MatchError(x$1$2);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e))])))])))])))])))])));
});
var $d_Lccrystal_site_TabExplorer$ = new $TypeData().i($c_Lccrystal_site_TabExplorer$, "ccrystal.site.TabExplorer$", ({
  cI: 1
}));
var $n_Lccrystal_site_TabExplorer$;
function $m_Lccrystal_site_TabExplorer$() {
  if ((!$n_Lccrystal_site_TabExplorer$)) {
    $n_Lccrystal_site_TabExplorer$ = new $c_Lccrystal_site_TabExplorer$();
  }
  return $n_Lccrystal_site_TabExplorer$;
}
/** @constructor */
function $c_Lccrystal_site_TabManifesto$() {
}
$p = $c_Lccrystal_site_TabManifesto$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabManifesto$;
/** @constructor */
function $h_Lccrystal_site_TabManifesto$() {
}
$h_Lccrystal_site_TabManifesto$.prototype = $p;
$p.ce = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tab-content tab-manifesto"), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-section"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-badge"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("badge-pulse")]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Open Source \u2022 Scala Native Sub-5ms Engine \u2022 Model Context Protocol", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.rX().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context is not a vector database.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e), $m_Lcom_raquo_laminar_api_package$().a.qR().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("text-gradient"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "It is a deterministic DAG.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-lead"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal cures session amnesia and eliminates agent debris. A local-first, zero-token lifecycle and context beam engine engineered for software architects and autonomous AI entities collaborating with deliberate human craftsmanship.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-cta-group"), $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-primary"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25c7 Install in 5 Seconds", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)).gG(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $s_Lccrystal_site_Tab$__Quickstart__Lccrystal_site_Tab()))), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((sink) => ((_$1) => {
    sink.dr(_$1);
  }))($m_Lccrystal_site_State$().f2.dv)))]))), $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-secondary"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u2b21 Explore Live Interactive DAG", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)).gG(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $s_Lccrystal_site_Tab$__Explorer__Lccrystal_site_Tab()))), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((sink$1) => ((_$1$1) => {
    sink$1.dr(_$1$1);
  }))($m_Lccrystal_site_State$().f2.dv)))]))), $m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("btn-tertiary"), $m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "View on GitHub \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-terminal-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-header"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-dots"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dot red")]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dot yellow")]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dot green")])))]))), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "bash \u2014 single-line curl install", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().eH(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().cN.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.cA === "hero-install")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1$2) => {
    $m_Lccrystal_site_State$().fu("hero-install", "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh");
  })))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-body"), $m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-block"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-header text-center"), $m_Lcom_raquo_laminar_api_package$().a.eP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "The Three Systemic Failures of Ephemeral AI Context", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Why flat chat windows, proprietary SQLite silos, and vector embeddings break down in real engineering codebases:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("cards-grid three-col"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-icon"), $m_Lccrystal_site_Icons$().qZ(32)]))), $m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Session Amnesia", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Chat windows reset. Context is trapped in ephemeral IDE windows or proprietary cloud caches. Starting a new agent turn or switching machines loses hard-won architectural decisions and progress.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-icon"), $m_Lccrystal_site_Icons$().ri(32)]))), $m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Agent Debris Deficit", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Autonomous coding agents create temporary git worktrees, mock configurations, and scratch test harnesses that linger indefinitely as orphaned technical debt when turns end or crash.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-icon"), $m_Lccrystal_site_Icons$().tk(32)]))), $m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Token Inflation & Drift", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Re-summarizing entire conversations with an LLM burns valuable context budget and introduces hallucinatory drift into ground truth. Semantic vector similarity fails to represent exact causal state sequences.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-block"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-header text-center"), $m_Lcom_raquo_laminar_api_package$().a.eP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "The Sovereign Context Crystal Architecture", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "A unified, deterministic ontology connecting intent, causal history, transient resources, and world state:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("cards-grid two-col"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "THE CAVE CONTAINER", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "The Workspace Cave (.ccrystals/)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "A sovereign context container residing in your workspace or companion directory (`CCRYSTAL_STORE`). Houses active crystals, the multi-entity authorship registry, and shared artifact catalogs with zero proprietary locks.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "DETERMINISTIC CAUSALITY", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Directed Acyclic Graph (DAG)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Causal state transitions with cryptographic attribution, explicit event timestamps, capture fidelity (`inferred` vs `intercepted`), and semantic anchors enabling surgical sub-DAG cleavage and branching.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "CLEANLINESS GUARANTEE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Transient Resource Leases", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Temporary assets (e.g. isolated git worktrees, mock databases) require explicit leases. Context Crystal guarantees leases are cleaned or promoted before goal conclusion, leaving zero agent debris.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "WORLD-STATE GROUNDING", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Virtual & Physical Artifacts", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Bridges digital deliberation with real reality. First-class tracking of target deliverables, test instruments, and physical preconditions (lab benches, geo coordinates, civic addresses).", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-block comparison-section"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-header text-center"), $m_Lcom_raquo_laminar_api_package$().a.eP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Verified Ground-Truth Performance", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Engineered in pure functional Scala 3 Native with zero-reflection codecs and Immix GC:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("table-wrapper"), $m_Lcom_raquo_laminar_api_package$().a.kb().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("comparison-table"), $m_Lcom_raquo_laminar_api_package$().a.kd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Metric / Capability", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Vector DBs / RAG", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Ephemeral Chat Windows", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.kc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Execution Overhead", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "< 5ms Native CLI", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "200ms - 2,000ms API calls", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Session restart required", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Token Cost", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "0 Tokens for State Ops", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Heavy embedding token burn", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Full window re-prompting", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Data Format", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill cyan"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Strict JSON Schema v1 & JSON-LD", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Opaque binary vector indices", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Proprietary internal silos", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Agent Protocol", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Native Stdio MCP Server (15 Tools)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Custom vendor SDKs", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "None (isolated manual chat)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Debris Elimination", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Mandatory Transient Leases", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Unmanaged orphaned files", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Manual developer cleanup", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Lifecycle & Compaction", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Zero-LLM Melting & Cold Storage Archive", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Hallucinatory LLM re-summarization", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context bloat or manual wipe", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Storage & Concurrency", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Transactional OCC & Atomic Inode Swaps", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Eventual consistency or network locks", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Volatile RAM or SQLite lock contention", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Engineering Philosophy", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill cyan"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Human-in-the-Loop Craftsmanship", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Unsupervised runaway swarms", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Disposable ad-hoc prompts", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))])));
});
var $d_Lccrystal_site_TabManifesto$ = new $TypeData().i($c_Lccrystal_site_TabManifesto$, "ccrystal.site.TabManifesto$", ({
  cN: 1
}));
var $n_Lccrystal_site_TabManifesto$;
function $m_Lccrystal_site_TabManifesto$() {
  if ((!$n_Lccrystal_site_TabManifesto$)) {
    $n_Lccrystal_site_TabManifesto$ = new $c_Lccrystal_site_TabManifesto$();
  }
  return $n_Lccrystal_site_TabManifesto$;
}
/** @constructor */
function $c_Lccrystal_site_TabMcp$() {
}
$p = $c_Lccrystal_site_TabMcp$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabMcp$;
/** @constructor */
function $h_Lccrystal_site_TabMcp$() {
}
$h_Lccrystal_site_TabMcp$.prototype = $p;
$p.ce = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tab-content tab-mcp"), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("mcp-intro"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("mcp-badge"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Model Context Protocol \u2022 Stdio Transport \u2022 JSON-RPC 2.0", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.eP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Native Model Context Protocol (MCP) Server Engine", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal features an integrated, high-performance stdio MCP server running directly from the native binary (`ccrystal mcp`). No Node.js daemon, Python wrapper, or external orchestrator required.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Frictionless IDE & Client Setup", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Add Context Crystal to your preferred AI coding environment:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("cards-grid three-col mcp-clients-grid"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card client-config-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("client-header"), $m_Lccrystal_site_Icons$().qW(20), $m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Claude Desktop", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("config-path"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "~/.config/Claude/claude_desktop_config.json", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "{\n  \"mcpServers\": {\n    \"context-crystal\": {\n      \"command\": \"ccrystal\",\n      \"args\": [\"mcp\"]\n    }\n  }\n}", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card client-config-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("client-header"), $m_Lccrystal_site_Icons$().re(20), $m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Cursor IDE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("config-path"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, ".cursor/mcp.json", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "{\n  \"mcpServers\": {\n    \"context-crystal\": {\n      \"command\": \"ccrystal\",\n      \"args\": [\"mcp\"]\n    }\n  }\n}", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card client-config-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("client-header"), $m_Lccrystal_site_Icons$().tu(20), $m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Zed Editor", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("config-path"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "~/.config/zed/settings.json", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "{\n  \"context_servers\": {\n    \"context-crystal\": {\n      \"command\": \"ccrystal\",\n      \"args\": [\"mcp\"]\n    }\n  }\n}", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "2", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "The 15 Native MCP Tools", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "First-class protocol capabilities designed specifically for autonomous AI pairs:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("table-wrapper"), $m_Lcom_raquo_laminar_api_package$().a.kb().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("mcp-tools-table"), $m_Lcom_raquo_laminar_api_package$().a.kd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Tool Name", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Parameters", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Description & Behavioral Invariant", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.kc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_init", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "id, goal_title, intent, tasks?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Atomically instantiates a new crystal with predefined acceptance criteria.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_list", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "status?, json_output?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Queries crystals in the workspace cave with optional InProgress/Concluded filter.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_hydrate", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, tail?, from?, to?, depth?, summary_only?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Casts context beam into prompt with precise selective shaping flags.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_triage", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "filter?, json_output?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Deterministic cave hygiene: classifies crystals into solid, stale, or active aging buckets.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_artifact", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "action, id?, name?, substrate?, role?, uri?, cave?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Registers, lists, or inspects virtual and physical artifacts across cave or crystal.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_checkpoint", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, summary, fidelity?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Appends an immutable checkpoint transition node to the active DAG.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_task_transition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, task_id, status", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Transitions an acceptance criterion to completed, in_progress, or blocked.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_goal_transition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, status, reason?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Concludes or transitions crystal lifecycle goal (in_progress, concluded_success, concluded_abandoned).", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_transient_lease", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, resource_type, path?, desc, policy", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Registers an ephemeral resource lease (git_worktree, mock) with cleanup policy.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_slice_fork", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "source_id, fork_to, from?, to?, prune?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Cleaves sub-DAG at a semantic anchor and forks into a dedicated child crystal.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_melt", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, from, to, summary?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Deterministically squashes linear sub-DAG segment into single checkpoint without LLM drift.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_archive", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Moves concluded crystal into cold storage (.ccrystals/archive/) while preserving history.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_unarchive", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Restores archived crystal from cold storage back to active workspace cave.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_delete", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, force?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Destructive lifecycle removal with cascade orphaned entity preview.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_batch", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "commands", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Executes multiple semicolon-delimited CLI commands atomically in a single turn.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))])));
});
var $d_Lccrystal_site_TabMcp$ = new $TypeData().i($c_Lccrystal_site_TabMcp$, "ccrystal.site.TabMcp$", ({
  cO: 1
}));
var $n_Lccrystal_site_TabMcp$;
function $m_Lccrystal_site_TabMcp$() {
  if ((!$n_Lccrystal_site_TabMcp$)) {
    $n_Lccrystal_site_TabMcp$ = new $c_Lccrystal_site_TabMcp$();
  }
  return $n_Lccrystal_site_TabMcp$;
}
/** @constructor */
function $c_Lccrystal_site_TabQuickstart$() {
}
$p = $c_Lccrystal_site_TabQuickstart$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabQuickstart$;
/** @constructor */
function $h_Lccrystal_site_TabQuickstart$() {
}
$h_Lccrystal_site_TabQuickstart$.prototype = $p;
$p.ce = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tab-content tab-quickstart"), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("quickstart-intro"), $m_Lcom_raquo_laminar_api_package$().a.eP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Installation & Developer Quickstart", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Install the native zero-dependency binary in seconds or build from source using Scala Native.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Fast Installation (Linux & macOS)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Choose your preferred installation method: curl installer or Homebrew Tap.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("install-methods-grid"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("install-method-box"), $m_Lcom_raquo_laminar_api_package$().a.fw().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Option A: Single-Line Curl Installer (Recommended)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Verifies architecture, extracts official tarball, validates SHA256 checksums, and installs into `~/.local/bin/ccrystal`:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().eH(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().cN.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.cA === "qs-curl")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $m_Lccrystal_site_State$().fu("qs-curl", "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh");
  })))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("install-method-box"), $m_Lcom_raquo_laminar_api_package$().a.fw().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Option B: Homebrew Tap (macOS & Linux)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Install and manage updates via Homebrew package manager:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "brew tap oswaldo/tap && brew install ccrystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().eH(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().cN.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x$1$2) => (((x$1$2 instanceof $c_s_Some) && (x$1$2.cA === "qs-brew")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $m_Lccrystal_site_State$().fu("qs-brew", "brew tap oswaldo/tap && brew install ccrystal");
  })))])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "2", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Direct Distribution Packages (GitHub Releases)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Every release is packaged as an optimized `.tar.gz` bundle with Thin LTO, stripped binary, and SHA256SUMS integrity verification:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("table-wrapper"), $m_Lcom_raquo_laminar_api_package$().a.kb().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("binary-table"), $m_Lcom_raquo_laminar_api_package$().a.kd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Platform / Architecture", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Distribution Package", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Linking & Optimizations", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cL().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.kc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Linux x86_64", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal-v{version}-linux-x86_64.tar.gz", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Thin LTO, Immix GC, Static POSIX", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Linux aarch64 (ARM64)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal-v{version}-linux-aarch64.tar.gz", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Thin LTO, Immix GC, ARM64 POSIX", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "macOS Apple Silicon (aarch64)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal-v{version}-macos-aarch64.tar.gz", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Thin LTO, Immix GC, Native M-series (macOS 14, 15, 26)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "macOS Intel (x86_64)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal-v{version}-macos-x86_64.tar.gz", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Thin LTO, Immix GC, Intel 64-bit POSIX", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Windows (WSL2 Tier 2)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal-v{version}-linux-x86_64.tar.gz", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "WSL2 / Ubuntu Linux Subsystem", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.Y().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.aY().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Integrity Verification", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "SHA256SUMS", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Cryptographic SHA-256 Digest for all assets", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b3().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b5().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.ba().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Verify \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "3", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Compile From Source (Scala Native 3.9 LTS)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Requirements: JDK 21+, sbt 1.10+, and Clang/LLVM:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "# Clone repository\ngit clone https://github.com/oswaldo/context-crystal.git && cd context-crystal\n\n# Compile & link release native binary with Thin LTO\nsbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'\n\n# Install binary into user PATH (portable across Linux GNU & macOS BSD)\nmkdir -p ~/.local/bin && rm -f ~/.local/bin/ccrystal && cp ./cli/native/target/scala-3.9.0/ccrystal-cli ~/.local/bin/ccrystal && chmod +x ~/.local/bin/ccrystal && strip ~/.local/bin/ccrystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cD().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cz().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().eH(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().cN.aK, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x$1$3) => (((x$1$3 instanceof $c_s_Some) && (x$1$3.cA === "qs-build")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().ca($m_Lcom_raquo_laminar_api_package$().a.cy(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
    $m_Lccrystal_site_State$().fu("qs-build", "sbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'");
  })))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bB().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.E().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "4", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "First 5 Minutes: The Core Workflow", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.S().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Verified terminal sequence to initialize, hydrate, and maintain zero debris:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-steps-flow"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "1. Initialize Crystal with Atomic Tasks:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal init my-track -g \"Implement OAuth2 JWT Service\" -t \"Write JWT parser\" -t \"Setup revocation list\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "2. Hydrate Living Context Beam for Agent Prompts:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal hydrate my-track --tail 5", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "3. Acquire Transient Resource Lease (Guaranteed Debris Elimination):", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal transient lease my-track -t git_worktree -p ./worktrees/oauth -d \"Track spike worktree\" --policy revert_on_conclusion", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "4. Mark Acceptance Criterion Complete:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal task done my-track -t task-1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "5. Atomic Multi-Command Batching:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal batch \"task done my-track -t task-2; transient clean my-track -l lease-1; node add my-track -k checkpoint -s 'Completed OAuth2 milestone' --fidelity inferred\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "6. Deterministic Zero-LLM Melting (Sub-DAG Squashing):", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal melt my-track --from init-node --to milestone-1 -s \"Scaffolding & DB schema finalized\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "7. Conclude, Triage & Cold Storage Archiving:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bz().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.H().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal batch \"conclude my-track -s success -r 'Shipped to production'; archive my-track\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))])));
});
var $d_Lccrystal_site_TabQuickstart$ = new $TypeData().i($c_Lccrystal_site_TabQuickstart$, "ccrystal.site.TabQuickstart$", ({
  cP: 1
}));
var $n_Lccrystal_site_TabQuickstart$;
function $m_Lccrystal_site_TabQuickstart$() {
  if ((!$n_Lccrystal_site_TabQuickstart$)) {
    $n_Lccrystal_site_TabQuickstart$ = new $c_Lccrystal_site_TabQuickstart$();
  }
  return $n_Lccrystal_site_TabQuickstart$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_combine_CombineObservable$() {
}
$p = $c_Lcom_raquo_airstream_combine_CombineObservable$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_CombineObservable$;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_CombineObservable$() {
}
$h_Lcom_raquo_airstream_combine_CombineObservable$.prototype = $p;
$p.sh = (function(trys, combinator) {
  var elem = false;
  elem = true;
  var i = 0;
  var len = (trys.length | 0);
  while ((i < len)) {
    if (trys[i].jU()) {
      var ev$6 = false;
      elem = ev$6;
    }
    i = ((1 + i) | 0);
  }
  if (elem) {
    var values = trys.map(((_$3) => _$3.N()));
    return new $c_s_util_Success(combinator.i(values));
  } else {
    var arr = trys.map(((x$1) => ((x$1 instanceof $c_s_util_Failure) ? new $c_s_Some(x$1.e2) : $m_s_None$())));
    return new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError($m_sci_IndexedSeq$().jG($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), arr))));
  }
});
var $d_Lcom_raquo_airstream_combine_CombineObservable$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineObservable$, "com.raquo.airstream.combine.CombineObservable$", ({
  cR: 1
}));
var $n_Lcom_raquo_airstream_combine_CombineObservable$;
function $m_Lcom_raquo_airstream_combine_CombineObservable$() {
  if ((!$n_Lcom_raquo_airstream_combine_CombineObservable$)) {
    $n_Lcom_raquo_airstream_combine_CombineObservable$ = new $c_Lcom_raquo_airstream_combine_CombineObservable$();
  }
  return $n_Lcom_raquo_airstream_combine_CombineObservable$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_combine_generated_CombinableSignal$() {
}
$p = $c_Lcom_raquo_airstream_combine_generated_CombinableSignal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_generated_CombinableSignal$;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_generated_CombinableSignal$() {
}
$h_Lcom_raquo_airstream_combine_generated_CombinableSignal$.prototype = $p;
$p.r2 = (function(this$, s1, s2, c) {
  return $m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$().r3(this$, s1, s2, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((a, v1, v2) => new $c_T3(a, v1, v2))));
});
var $d_Lcom_raquo_airstream_combine_generated_CombinableSignal$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_generated_CombinableSignal$, "com.raquo.airstream.combine.generated.CombinableSignal$", ({
  cT: 1
}));
var $n_Lcom_raquo_airstream_combine_generated_CombinableSignal$;
function $m_Lcom_raquo_airstream_combine_generated_CombinableSignal$() {
  if ((!$n_Lcom_raquo_airstream_combine_generated_CombinableSignal$)) {
    $n_Lcom_raquo_airstream_combine_generated_CombinableSignal$ = new $c_Lcom_raquo_airstream_combine_generated_CombinableSignal$();
  }
  return $n_Lcom_raquo_airstream_combine_generated_CombinableSignal$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$() {
}
$p = $c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$() {
}
$h_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$.prototype = $p;
$p.r3 = (function(s1, s2, s3, combinator) {
  return new $c_Lcom_raquo_airstream_combine_CombineSignalN($m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Signal.r().C)([s1.fF(), s2.fF(), s3.fF()]))), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((arr) => combinator.hy(arr[0], arr[1], arr[2]))));
});
var $d_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$, "com.raquo.airstream.combine.generated.StaticSignalCombineOps$", ({
  cU: 1
}));
var $n_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$;
function $m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$() {
  if ((!$n_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$)) {
    $n_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$ = new $c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$();
  }
  return $n_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_common_InternalParentObserver$() {
}
$p = $c_Lcom_raquo_airstream_common_InternalParentObserver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_common_InternalParentObserver$;
/** @constructor */
function $h_Lcom_raquo_airstream_common_InternalParentObserver$() {
}
$h_Lcom_raquo_airstream_common_InternalParentObserver$.prototype = $p;
$p.rJ = (function(parent, onTry) {
  return new $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parent, onTry, this);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$ = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$, "com.raquo.airstream.common.InternalParentObserver$", ({
  cX: 1
}));
var $n_Lcom_raquo_airstream_common_InternalParentObserver$;
function $m_Lcom_raquo_airstream_common_InternalParentObserver$() {
  if ((!$n_Lcom_raquo_airstream_common_InternalParentObserver$)) {
    $n_Lcom_raquo_airstream_common_InternalParentObserver$ = new $c_Lcom_raquo_airstream_common_InternalParentObserver$();
  }
  return $n_Lcom_raquo_airstream_common_InternalParentObserver$;
}
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  aC: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).jO() + "@") + $thiz.D());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.eb();
  return ((x === (void 0)) ? $thiz.e8() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().pZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))), $m_s_PartialFunction$().hb, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.pZ = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.rK = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  d3: 1
}));
var $n_Lcom_raquo_airstream_core_Observer$;
function $m_Lcom_raquo_airstream_core_Observer$() {
  if ((!$n_Lcom_raquo_airstream_core_Observer$)) {
    $n_Lcom_raquo_airstream_core_Observer$ = new $c_Lcom_raquo_airstream_core_Observer$();
  }
  return $n_Lcom_raquo_airstream_core_Observer$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_ObserverList$() {
}
$p = $c_Lcom_raquo_airstream_core_ObserverList$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_ObserverList$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_ObserverList$() {
}
$h_Lcom_raquo_airstream_core_ObserverList$.prototype = $p;
$p.pG = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  d6: 1
}));
var $n_Lcom_raquo_airstream_core_ObserverList$;
function $m_Lcom_raquo_airstream_core_ObserverList$() {
  if ((!$n_Lcom_raquo_airstream_core_ObserverList$)) {
    $n_Lcom_raquo_airstream_core_ObserverList$ = new $c_Lcom_raquo_airstream_core_ObserverList$();
  }
  return $n_Lcom_raquo_airstream_core_ObserverList$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected() {
}
$p = $c_Lcom_raquo_airstream_core_Protected.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Protected;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected() {
}
$h_Lcom_raquo_airstream_core_Protected.prototype = $p;
var $d_Lcom_raquo_airstream_core_Protected = new $TypeData().i($c_Lcom_raquo_airstream_core_Protected, "com.raquo.airstream.core.Protected", ({
  d7: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected$() {
  this.q0 = null;
  $n_Lcom_raquo_airstream_core_Protected$ = this;
  this.q0 = new $c_Lcom_raquo_airstream_core_Protected();
}
$p = $c_Lcom_raquo_airstream_core_Protected$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Protected$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected$() {
}
$h_Lcom_raquo_airstream_core_Protected$.prototype = $p;
$p.ss = (function(minRank, observables) {
  var elem = 0;
  elem = minRank;
  var i = 0;
  var len = (observables.length | 0);
  while ((i < len)) {
    var observable = observables[i];
    var rank = observable.eX();
    if ((rank > elem)) {
      var ev$2 = rank;
      elem = ev$2;
    }
    i = ((1 + i) | 0);
  }
  return elem;
});
var $d_Lcom_raquo_airstream_core_Protected$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Protected$, "com.raquo.airstream.core.Protected$", ({
  d8: 1
}));
var $n_Lcom_raquo_airstream_core_Protected$;
function $m_Lcom_raquo_airstream_core_Protected$() {
  if ((!$n_Lcom_raquo_airstream_core_Protected$)) {
    $n_Lcom_raquo_airstream_core_Protected$ = new $c_Lcom_raquo_airstream_core_Protected$();
  }
  return $n_Lcom_raquo_airstream_core_Protected$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Signal$() {
  this.f6 = 0;
  this.f6 = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.px = (function() {
  if ((this.f6 === 2147483647)) {
    this.f6 = 1;
  } else {
    this.f6 = ((1 + this.f6) | 0);
  }
  return this.f6;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  d9: 1
}));
var $n_Lcom_raquo_airstream_core_Signal$;
function $m_Lcom_raquo_airstream_core_Signal$() {
  if ((!$n_Lcom_raquo_airstream_core_Signal$)) {
    $n_Lcom_raquo_airstream_core_Signal$ = new $c_Lcom_raquo_airstream_core_Signal$();
  }
  return $n_Lcom_raquo_airstream_core_Signal$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction(code) {
  this.hX = null;
  this.fS = null;
  this.hY = 0;
  this.hX = code;
  this.fS = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gO();
  this.hY = ((x === (void 0)) ? 1 : ((1 + x.hY) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().gU === (-1)) || (this.hY > $m_Lcom_raquo_airstream_core_Transaction$().gU))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cK(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().gU));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bt) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().em.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jk(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
$p.r5 = (function(observable) {
  var x = this.fS;
  var x$1 = ((x === (void 0)) ? (void 0) : x.bj(observable));
  return ((x$1 === (void 0)) ? false : x$1);
});
$p.rr = (function(observable) {
  var x = this.fS;
  if ((x === (void 0))) {
    var newQueue = new $c_Lcom_raquo_airstream_util_JsPriorityQueue(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((observable$1) => observable$1.hS)));
    this.fS = newQueue;
    var $x_1 = newQueue;
  } else {
    var $x_1 = x;
  }
  $x_1.rq(observable);
});
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  db: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.gU = 0;
  this.kz = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.gU = 1000;
  this.kz = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.p2 = (function(transaction) {
  try {
    transaction.hX.i(transaction);
    var x = transaction.fS;
    if ((x !== (void 0))) {
      while (((x.dw.length | 0) !== 0)) {
        if (((x.dw.length | 0) === 0)) {
          throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to dequeue an empty JsPriorityQueue");
        }
        $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V(x.dw.shift(), transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cK(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  dc: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.gV.length | 0) === 0)) {
    if ((($thiz.em.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
        while ((($thiz.em.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jk($thiz.em.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      while ((($thiz.gV.length | 0) > 0)) {
        var callback = $thiz.gV.shift();
        try {
          callback.i(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cK(e$2);
        }
      }
      while ((($thiz.em.length | 0) > 0)) {
        var _trx = $thiz.em.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jk(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bt = false;
  this.gV = null;
  this.em = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bt = false;
  this.gV = $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_F1.r().C)([])));
  this.em = $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  dd: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.en.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gW.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.gW.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.en.set(parent, newChildren);
  }
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O($thiz, parent) {
  var maybeParentChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var x = (((maybeParentChildren === (void 0)) || ((maybeParentChildren.length | 0) > 0)) ? maybeParentChildren : (void 0));
  if ((x === (void 0))) {
    return (void 0);
  } else {
    var nextChild = x.shift();
    if (((x.length | 0) === 0)) {
      (!(!$thiz.en.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.gW = null;
  this.en = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.gW = $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.en = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.jk = (function(newTransaction) {
  var x = this.gO();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().p2(newTransaction);
    this.ro(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.ro = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.gO();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().x(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.sN(transaction$tailLocal1);
    transaction$tailLocal1.hX = $m_Lcom_raquo_airstream_core_Transaction$().kz;
    var maybeNextTransaction = this.gO();
    if ($m_sr_BoxesRunTime$().x(maybeNextTransaction, (void 0))) {
      if (((this.en.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.en.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.eD + (transactions.length | 0)) | 0);
          numChildren.eD = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.eD) + " children for ") + (this.en.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().p2(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.sN = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().x(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.gO();
      if ((!$m_sr_BoxesRunTime$().x(maybeParentTransaction, (void 0)))) {
        doneTransaction$tailLocal1 = maybeParentTransaction;
      } else {
        return (void 0);
      }
    } else {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, maybeNextChildTrx);
      return (void 0);
    }
  }
});
$p.gO = (function() {
  return this.gW[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  de: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
function $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$)) {
    $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config(onWillStart, onStart, onStop) {
  this.kD = null;
  this.kB = null;
  this.kC = null;
  this.kD = onWillStart;
  this.kB = onStart;
  this.kC = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  dh: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config$() {
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config$;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config$() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype = $p;
$p.qK = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  di: 1
}));
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.dt.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.dt.splice(index, 1);
    if ((!$thiz.bW.j())) {
      subscription.pB();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.h1.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.h1.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.l0 = null;
  this.dt = null;
  this.f7 = false;
  this.h1 = null;
  this.bW = null;
  this.f8 = 0;
  this.l0 = onAccessAfterKilled;
  this.dt = $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.f7 = true;
  this.h1 = $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.bW = $m_s_None$();
  this.f8 = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.oB = (function() {
  if ((!(!this.bW.j()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.l0);
      this.bW = new $c_s_Some(newOwner);
      this.f7 = false;
      this.f8 = 0;
      var i = 0;
      var originalNumSubs = (this.dt.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.f8) | 0);
        this.dt[ix].py(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.f7 = true;
      this.f8 = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.bt || (!when))) {
      f();
    } else {
      this$4.bt = true;
      try {
        f();
      } finally {
        this$4.bt = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.rh = (function() {
  if ((!this.bW.j())) {
    this.f7 = false;
    var arr = this.dt;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].pB();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bW;
    if ((!this$4.j())) {
      this$4.N().pw();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.f7 = true;
    this.bW = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.qD = (function(subscription, prepend) {
  if (prepend) {
    this.f8 = ((1 + this.f8) | 0);
    this.dt.unshift(subscription);
  } else {
    this.dt.push(subscription);
  }
  var this$1 = this.bW;
  if ((!this$1.j())) {
    var x0 = this$1.N();
    subscription.py(x0);
  }
});
$p.sY = (function(subscription) {
  if (this.f7) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.h1.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  dm: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.h2 = null;
  this.l1 = null;
  this.h3 = null;
  this.h2 = dynamicOwner;
  this.l1 = activate;
  this.h3 = $m_s_None$();
  dynamicOwner.qD(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.hF = (function() {
  this.h2.sY(this);
});
$p.py = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.h3 = this.l1.i(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bt || (!when))) {
    f();
  } else {
    this$2.bt = true;
    try {
      f();
    } finally {
      this$2.bt = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.pB = (function() {
  var this$1 = this.h3;
  if ((!this$1.j())) {
    this$1.N().hF();
    this.h3 = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  dn: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = $p;
$p.gS = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => new $c_s_Some(activate.i(owner)))), prepend);
});
$p.pT = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => {
    activate.i(owner);
    return $m_s_None$();
  })), prepend);
});
$p.tc = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gS(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  dp: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.p3($m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fE();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fE().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fE().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fE().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fE().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.i5)) {
    $thiz.l4.U();
    $thiz.i5 = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.l5 = null;
  this.l4 = null;
  this.i5 = false;
  this.l5 = owner;
  this.l4 = cleanup;
  this.i5 = false;
  owner.pD(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.hF = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.l5, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  dr: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.l6 = null;
  this.l7 = null;
  this.du = null;
  this.eo = false;
  this.l6 = activate;
  this.l7 = deactivate;
  this.du = $m_s_None$();
  this.eo = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.sc = (function() {
  var this$1 = this.du;
  return ((!this$1.j()) && (!this$1.N().h2.bW.j()));
});
$p.t9 = (function(nextOwner) {
  if (this.eo) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.du;
  if ((!this$1.j())) {
    var x0 = this$1.N();
    var x$2 = x0.h2;
    var $x_1 = ((nextOwner === null) ? (x$2 === null) : (nextOwner === x$2));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.sc() && (!nextOwner.bW.j()))) {
      this.eo = true;
    }
    var this$3 = this.du;
    if ((!this$3.j())) {
      this$3.N().hF();
      this.du = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gS(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((parentOwner) => {
      if ((!this.eo)) {
        this.l6.U();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        if ((!this.eo)) {
          this.l7.U();
        }
      })));
    })), false);
    this.du = new $c_s_Some(newPilotSubscription);
    this.eo = false;
  }
});
$p.qY = (function() {
  if (this.eo) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.du;
  if ((!this$1.j())) {
    this$1.N().hF();
  }
  this.du = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  ds: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$() {
}
$p = $c_Lcom_raquo_airstream_state_Var$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$() {
}
$h_Lcom_raquo_airstream_state_Var$.prototype = $p;
$p.go = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  dw: 1
}));
var $n_Lcom_raquo_airstream_state_Var$;
function $m_Lcom_raquo_airstream_state_Var$() {
  if ((!$n_Lcom_raquo_airstream_state_Var$)) {
    $n_Lcom_raquo_airstream_state_Var$ = new $c_Lcom_raquo_airstream_state_Var$();
  }
  return $n_Lcom_raquo_airstream_state_Var$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_util_JsPriorityQueue(getRank) {
  this.ia = null;
  this.dw = null;
  this.ia = getRank;
  this.dw = $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().rL(new $ac_O([])));
}
$p = $c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_util_JsPriorityQueue;
/** @constructor */
function $h_Lcom_raquo_airstream_util_JsPriorityQueue() {
}
$h_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = $p;
$p.rq = (function(item) {
  var itemRank = (this.ia.i(item) | 0);
  var insertAtIndex = 0;
  var foundHigherRank = false;
  while (((insertAtIndex < (this.dw.length | 0)) && (!foundHigherRank))) {
    if (((this.ia.i(this.dw[insertAtIndex]) | 0) > itemRank)) {
      foundHigherRank = true;
    } else {
      insertAtIndex = ((1 + insertAtIndex) | 0);
    }
  }
  this.dw.splice(insertAtIndex, 0, item);
});
$p.bj = (function(item) {
  return ((this.dw.indexOf(item) | 0) !== (-1));
});
var $d_Lcom_raquo_airstream_util_JsPriorityQueue = new $TypeData().i($c_Lcom_raquo_airstream_util_JsPriorityQueue, "com.raquo.airstream.util.JsPriorityQueue", ({
  dz: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_web_DomEventStream$() {
}
$p = $c_Lcom_raquo_airstream_web_DomEventStream$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_web_DomEventStream$;
/** @constructor */
function $h_Lcom_raquo_airstream_web_DomEventStream$() {
}
$h_Lcom_raquo_airstream_web_DomEventStream$.prototype = $p;
$p.qJ = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().pp(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().qK(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  dA: 1
}));
var $n_Lcom_raquo_airstream_web_DomEventStream$;
function $m_Lcom_raquo_airstream_web_DomEventStream$() {
  if ((!$n_Lcom_raquo_airstream_web_DomEventStream$)) {
    $n_Lcom_raquo_airstream_web_DomEventStream$ = new $c_Lcom_raquo_airstream_web_DomEventStream$();
  }
  return $n_Lcom_raquo_airstream_web_DomEventStream$;
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$() {
}
$p = $c_Lcom_raquo_ew_JsArray$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_ew_JsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$() {
}
$h_Lcom_raquo_ew_JsArray$.prototype = $p;
$p.bq = (function(items) {
  return [...$m_sjsr_Compat$().ti(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  dB: 1
}));
var $n_Lcom_raquo_ew_JsArray$;
function $m_Lcom_raquo_ew_JsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$)) {
    $n_Lcom_raquo_ew_JsArray$ = new $c_Lcom_raquo_ew_JsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$;
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$RichJsArray$() {
}
$p = $c_Lcom_raquo_ew_JsArray$RichJsArray$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_ew_JsArray$RichJsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$RichJsArray$() {
}
$h_Lcom_raquo_ew_JsArray$RichJsArray$.prototype = $p;
$p.s1 = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.rB = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  dC: 1
}));
var $n_Lcom_raquo_ew_JsArray$RichJsArray$;
function $m_Lcom_raquo_ew_JsArray$RichJsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$RichJsArray$)) {
    $n_Lcom_raquo_ew_JsArray$RichJsArray$ = new $c_Lcom_raquo_ew_JsArray$RichJsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$RichJsArray$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$() {
  this.li = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.p8($m_Lcom_raquo_laminar_api_package$().a.t().eg());
  this.li = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.qF = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ad instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.sV = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ad instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.s8 = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ad instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.s7 = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ad instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.t0 = (function(parent, newChild, oldChild) {
  try {
    parent.replaceChild(newChild, oldChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ad instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.sg = (function(node, ancestor) {
  var node$tailLocal1 = node;
  while (true) {
    if ((node$tailLocal1.parentNode !== null)) {
      var effectiveParentNode = node$tailLocal1.parentNode;
    } else {
      var maybeShadowHost = node$tailLocal1.host;
      var effectiveParentNode = ((maybeShadowHost === (void 0)) ? null : maybeShadowHost);
    }
    if ((effectiveParentNode === null)) {
      return false;
    }
    if ($m_sr_BoxesRunTime$().x(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.qu = (function(element, listener) {
  element.addEventListener(listener.fa.es.fV, listener.ip, listener.iq);
});
$p.sW = (function(element, listener) {
  element.removeEventListener(listener.fa.es.fV, listener.ip, listener.iq);
});
$p.rc = (function(tag) {
  return document.createElement(tag.iB);
});
$p.rP = (function(element, attr) {
  var x = this.rQ(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.ii.jy(x));
});
$p.rQ = (function(element, attr) {
  var domValue = element.cf.getAttributeNS(null, attr.fW);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.pP = (function(element, attr, value) {
  this.t8(element, attr, attr.ii.gA(value));
});
$p.t8 = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.sX(element, attr);
  } else {
    element.cf.setAttribute(attr.fW, domValue);
  }
});
$p.sX = (function(element, attr) {
  element.cf.removeAttribute(attr.fW);
});
$p.rR = (function(element, prop) {
  return element.cf[prop.d6];
});
$p.pQ = (function(element, prop, value) {
  this.pR(element, prop, prop.ij.gA(value));
});
$p.pR = (function(element, prop, value) {
  element.cf[prop.d6] = value;
});
$p.p8 = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.iC);
});
$p.rU = (function(element, attr) {
  var x = this.rV(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.ik.jy(x));
});
$p.rV = (function(element, attr) {
  var $x_2 = element.dA;
  var this$2 = attr.h6;
  var $x_1 = $x_2.getAttributeNS((this$2.j() ? null : this$2.N()), attr.il);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.pS = (function(element, attr, value) {
  this.ta(element, attr, attr.ik.gA(value));
});
$p.ta = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.sZ(element, attr);
  } else {
    var this$1 = attr.h6;
    if (this$1.j()) {
      element.dA.setAttribute(attr.h5, domValue);
    } else {
      var x0 = this$1.N();
      element.dA.setAttributeNS(x0, attr.h5, domValue);
    }
  }
});
$p.sZ = (function(element, attr) {
  var $x_1 = element.dA;
  var this$2 = attr.h6;
  $x_1.removeAttributeNS((this$2.j() ? null : this$2.N()), attr.il);
});
$p.rb = (function(text) {
  return document.createComment(text);
});
$p.rd = (function(text) {
  return document.createTextNode(text);
});
$p.ps = (function(element) {
  return $m_sc_StringOps$().r4(element.tagName, 45);
});
$p.rO = (function(element) {
  if ((!(!(element instanceof HTMLInputElement)))) {
    if (((element.type === "checkbox") || (element.type === "radio"))) {
      return (!(!element.checked));
    }
  }
  if (this.ps(element)) {
    var x = element.checked;
    new $c_Lcom_raquo_laminar_DomApi$$anon$1(this);
    return ((x === (void 0)) ? (void 0) : (((typeof x) === "boolean") ? (!(!x)) : (void 0)));
  }
});
$p.rk = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.p9(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.p9 = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.li, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.rj = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  dD: 1
}));
var $n_Lcom_raquo_laminar_DomApi$;
function $m_Lcom_raquo_laminar_DomApi$() {
  if ((!$n_Lcom_raquo_laminar_DomApi$)) {
    $n_Lcom_raquo_laminar_DomApi$ = new $c_Lcom_raquo_laminar_DomApi$();
  }
  return $n_Lcom_raquo_laminar_DomApi$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_Seq(seq, scalaArray, jsArray) {
  this.ic = null;
  this.lj = null;
  this.ib = null;
  this.ic = seq;
  this.lj = scalaArray;
  this.ib = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.ag = (function(f) {
  if ((this.ic !== null)) {
    this.ic.ag(f);
  } else if ((this.ib !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().rB(this.ib, $m_sjs_js_Any$().pp(f));
  } else {
    $m_sc_ArrayOps$().rD(this.lj, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  dF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_Seq$() {
}
$p = $c_Lcom_raquo_laminar_Seq$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq$;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq$() {
}
$h_Lcom_raquo_laminar_Seq$.prototype = $p;
var $d_Lcom_raquo_laminar_Seq$ = new $TypeData().i($c_Lcom_raquo_laminar_Seq$, "com.raquo.laminar.Seq$", ({
  dG: 1
}));
var $n_Lcom_raquo_laminar_Seq$;
function $m_Lcom_raquo_laminar_Seq$() {
  if ((!$n_Lcom_raquo_laminar_Seq$)) {
    $n_Lcom_raquo_laminar_Seq$ = new $c_Lcom_raquo_laminar_Seq$();
  }
  return $n_Lcom_raquo_laminar_Seq$;
}
function $f_Lcom_raquo_laminar_api_AirstreamAliases__$init$__V($thiz) {
  $m_Lcom_raquo_airstream_core_Observer$();
  $m_Lcom_raquo_airstream_core_AirstreamError$();
  $thiz.f9 = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.q1 = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    _$1.nn.cf.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.bS().bW.j()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((c) => {
      if (ignoreNextActivation.hm) {
        var ev$5 = false;
        ignoreNextActivation.hm = ev$5;
      } else {
        fn.i(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pT(element.bS(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((owner) => {
      activate.i(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.aZ = null;
  this.ng = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.aZ = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.ng = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  dQ: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.g = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().aZ);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.fW, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().rP(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().pP(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.dx = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.h5, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().rU(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().pS(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.nh = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().a.pY();
  $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().a.k6()])));
  $m_Lcom_raquo_laminar_api_package$().a.pY();
  $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().a.k6(), $m_Lcom_raquo_laminar_api_package$().a.pA()])));
  $m_Lcom_raquo_laminar_api_package$().a.p1();
  $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().a.k6(), $m_Lcom_raquo_laminar_api_package$().a.cy()])));
  this.nh = $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  e1: 1
}));
var $n_Lcom_raquo_laminar_inputs_InputController$;
function $m_Lcom_raquo_laminar_inputs_InputController$() {
  if ((!$n_Lcom_raquo_laminar_inputs_InputController$)) {
    $n_Lcom_raquo_laminar_inputs_InputController$ = new $c_Lcom_raquo_laminar_inputs_InputController$();
  }
  return $n_Lcom_raquo_laminar_inputs_InputController$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_ChildInserter$() {
}
$p = $c_Lcom_raquo_laminar_inserters_ChildInserter$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_ChildInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_ChildInserter$() {
}
$h_Lcom_raquo_laminar_inserters_ChildInserter$.prototype = $p;
$p.oM = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.er)) {
      ctx.pj();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.te(maybeLastSeenChild.ay, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.ay = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.te = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.er)) {
    ctx.pj();
  }
  var elem = ctx.ep;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().x(maybeLastSeenChild.a7(), ctx.dz.a7().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().s9(ctx.eq, newChildNode, ctx.dz, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().pI(ctx.eq, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = ((elem$1 - 1) | 0);
    elem$1 = ev$4;
  }
  ctx.pH(newChildNode);
  ctx.dy.clear();
  ctx.dy.set(newChildNode.a7(), newChildNode);
  ctx.ep = 1;
});
var $d_Lcom_raquo_laminar_inserters_ChildInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildInserter$, "com.raquo.laminar.inserters.ChildInserter$", ({
  e2: 1
}));
var $n_Lcom_raquo_laminar_inserters_ChildInserter$;
function $m_Lcom_raquo_laminar_inserters_ChildInserter$() {
  if ((!$n_Lcom_raquo_laminar_inserters_ChildInserter$)) {
    $n_Lcom_raquo_laminar_inserters_ChildInserter$ = new $c_Lcom_raquo_laminar_inserters_ChildInserter$();
  }
  return $n_Lcom_raquo_laminar_inserters_ChildInserter$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_ChildTextInserter$() {
}
$p = $c_Lcom_raquo_laminar_inserters_ChildTextInserter$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_ChildTextInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_ChildTextInserter$() {
}
$h_Lcom_raquo_laminar_inserters_ChildTextInserter$.prototype = $p;
$p.eH = (function(textSource, renderable) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), false, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, _$1) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(textSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2, maybeTextNode) => ((newValue) => {
    var x = maybeTextNode.ay;
    if ((x === (void 0))) {
      var newTextNode = new $c_Lcom_raquo_laminar_nodes_TextNode(renderable.jp(newValue));
      this.tf(newTextNode, ctx$2);
      var ev$2 = newTextNode;
      maybeTextNode.ay = ev$2;
      ev$2 = null;
    } else {
      x.h7.textContent = renderable.jp(newValue);
    }
  }))(ctx, new $c_sr_ObjectRef((void 0)))), owner))), (void 0));
});
$p.tf = (function(newTextNode, ctx) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().pI(ctx.eq, ctx.dz, newTextNode, (void 0));
  ctx.dz = newTextNode;
  if (ctx.er) {
    ctx.er = false;
    ctx.pH(newTextNode);
    ctx.dy.clear();
    ctx.ep = 0;
  }
});
var $d_Lcom_raquo_laminar_inserters_ChildTextInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildTextInserter$, "com.raquo.laminar.inserters.ChildTextInserter$", ({
  e3: 1
}));
var $n_Lcom_raquo_laminar_inserters_ChildTextInserter$;
function $m_Lcom_raquo_laminar_inserters_ChildTextInserter$() {
  if ((!$n_Lcom_raquo_laminar_inserters_ChildTextInserter$)) {
    $n_Lcom_raquo_laminar_inserters_ChildTextInserter$ = new $c_Lcom_raquo_laminar_inserters_ChildTextInserter$();
  }
  return $n_Lcom_raquo_laminar_inserters_ChildTextInserter$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, extraNodeCount, extraNodesMap) {
  this.eq = null;
  this.dz = null;
  this.er = false;
  this.ep = 0;
  this.dy = null;
  this.eq = parentNode;
  this.dz = sentinelNode;
  this.er = strictMode;
  this.ep = extraNodeCount;
  this.dy = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.pj = (function() {
  if ((this.er || (this.ep !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().rj(this.eq.a7())));
  }
  if ((this.dy === null)) {
    this.dy = new Map();
  }
  if ((!(!(!(this.dz.a7() instanceof Comment))))) {
    var contentNode = this.dz;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().s8(this.eq.a7(), newSentinelNode.it, contentNode.a7());
    this.dz = newSentinelNode;
    this.ep = 1;
    this.dy.set(contentNode.a7(), contentNode);
  }
  this.er = true;
});
$p.pH = (function(after) {
  var elem = this.ep;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.a7().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.dy.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().sU(this.eq, maybePrevChild);
        var ev$5 = ((elem$1 - 1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  e6: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_InsertContext$() {
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext$() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext$.prototype = $p;
$p.t2 = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eG(parentNode, sentinelNode, hooks);
  return this.to(parentNode, sentinelNode, strictMode);
});
$p.to = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  e7: 1
}));
var $n_Lcom_raquo_laminar_inserters_InsertContext$;
function $m_Lcom_raquo_laminar_inserters_InsertContext$() {
  if ((!$n_Lcom_raquo_laminar_inserters_InsertContext$)) {
    $n_Lcom_raquo_laminar_inserters_InsertContext$ = new $c_Lcom_raquo_laminar_inserters_InsertContext$();
  }
  return $n_Lcom_raquo_laminar_inserters_InsertContext$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$() {
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$.prototype = $p;
$p.k4 = (function(items, separator) {
  return ((items === "") ? $m_sci_Nil$() : $m_sci_Nil$().ee($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => (_$1 !== ""))))));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  ea: 1
}));
var $n_Lcom_raquo_laminar_keys_CompositeKey$;
function $m_Lcom_raquo_laminar_keys_CompositeKey$() {
  if ((!$n_Lcom_raquo_laminar_keys_CompositeKey$)) {
    $n_Lcom_raquo_laminar_keys_CompositeKey$ = new $c_Lcom_raquo_laminar_keys_CompositeKey$();
  }
  return $n_Lcom_raquo_laminar_keys_CompositeKey$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, processor) {
  this.es = null;
  this.fU = false;
  this.h4 = false;
  this.fT = null;
  this.es = eventProp;
  this.fU = shouldUseCapture;
  this.h4 = shouldBePassive;
  this.fT = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.gG = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ev) => {
    var this$2 = this.fT.i(ev);
    return (this$2.j() ? $m_s_None$() : new $c_s_Some((this$2.N(), value.U())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.es, this.fU, this.h4, newProcessor);
});
$p.sr = (function() {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ev) => {
    var this$2 = this.fT.i(ev);
    if (this$2.j()) {
      return $m_s_None$();
    } else {
      this$2.N();
      var x = $m_Lcom_raquo_laminar_DomApi$().rO(ev.target);
      return new $c_s_Some((!(!((x === (void 0)) ? false : x))));
    }
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.es, this.fU, this.h4, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  ee: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor$() {
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor$() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor$.prototype = $p;
$p.ca = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  ef: 1
}));
var $n_Lcom_raquo_laminar_keys_EventProcessor$;
function $m_Lcom_raquo_laminar_keys_EventProcessor$() {
  if ((!$n_Lcom_raquo_laminar_keys_EventProcessor$)) {
    $n_Lcom_raquo_laminar_keys_EventProcessor$ = new $c_Lcom_raquo_laminar_keys_EventProcessor$();
  }
  return $n_Lcom_raquo_laminar_keys_EventProcessor$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_Key() {
}
$p = $c_Lcom_raquo_laminar_keys_Key.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_Key;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_Key() {
}
$h_Lcom_raquo_laminar_keys_Key.prototype = $p;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr$() {
  this.q3 = null;
  this.q4 = null;
  this.q5 = null;
  this.q6 = null;
  this.q3 = "http://www.w3.org/2000/svg";
  this.q4 = "http://www.w3.org/1999/xlink";
  this.q5 = "http://www.w3.org/XML/1998/namespace";
  this.q6 = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.sv = (function(namespace) {
  switch (namespace) {
    case "svg": {
      return "http://www.w3.org/2000/svg";
      break;
    }
    case "xlink": {
      return "http://www.w3.org/1999/xlink";
      break;
    }
    case "xml": {
      return "http://www.w3.org/XML/1998/namespace";
      break;
    }
    case "xmlns": {
      return "http://www.w3.org/2000/xmlns/";
      break;
    }
    default: {
      throw new $c_s_MatchError(namespace);
    }
  }
});
var $d_Lcom_raquo_laminar_keys_SvgAttr$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr$, "com.raquo.laminar.keys.SvgAttr$", ({
  ej: 1
}));
var $n_Lcom_raquo_laminar_keys_SvgAttr$;
function $m_Lcom_raquo_laminar_keys_SvgAttr$() {
  if ((!$n_Lcom_raquo_laminar_keys_SvgAttr$)) {
    $n_Lcom_raquo_laminar_keys_SvgAttr$ = new $c_Lcom_raquo_laminar_keys_SvgAttr$();
  }
  return $n_Lcom_raquo_laminar_keys_SvgAttr$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_MountContext(thisNode, owner) {
  this.nn = null;
  this.im = null;
  this.nn = thisNode;
  this.im = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  ek: 1
}));
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().i(1, "com.raquo.laminar.modifiers.Modifier", ({
  U: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.q7 = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.q7 = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  ep: 1
}));
var $n_Lcom_raquo_laminar_modifiers_Modifier$;
function $m_Lcom_raquo_laminar_modifiers_Modifier$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_Modifier$)) {
    $n_Lcom_raquo_laminar_modifiers_Modifier$ = new $c_Lcom_raquo_laminar_modifiers_Modifier$();
  }
  return $n_Lcom_raquo_laminar_modifiers_Modifier$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  this.ir = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.ir = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  et: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
function $m_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableNode$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$() {
  this.e = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.e = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => _$4.th())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  ey: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableText$;
function $m_Lcom_raquo_laminar_modifiers_RenderableText$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableText$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableText$ = new $c_Lcom_raquo_laminar_modifiers_RenderableText$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableText$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ParentNode$() {
}
$p = $c_Lcom_raquo_laminar_nodes_ParentNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ParentNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ParentNode$() {
}
$h_Lcom_raquo_laminar_nodes_ParentNode$.prototype = $p;
$p.eG = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.ej(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pC(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().qF(parent.a7(), child.a7());
  if (appended) {
    child.ef(nextParent);
  }
  return appended;
});
$p.sU = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().x(child.a7().parentNode, parent.a7())) {
    child.ej($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().sV(parent.a7(), child.a7());
    child.ef($m_s_None$());
  }
  return removed;
});
$p.s9 = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.ej(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pC(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().s7(parent.a7(), newChild.a7(), referenceChild.a7());
  newChild.ef(nextParent);
  return inserted;
});
$p.pI = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.fr().bj(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.ej($m_s_None$());
      newChild.ej(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.pC(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().t0(parent.a7(), newChild.a7(), oldChild.a7());
      if (replaced) {
        oldChild.ef($m_s_None$());
        newChild.ef(newChildNextParent);
      }
    }
  }
  return replaced;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  eB: 1
}));
var $n_Lcom_raquo_laminar_nodes_ParentNode$;
function $m_Lcom_raquo_laminar_nodes_ParentNode$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ParentNode$)) {
    $n_Lcom_raquo_laminar_nodes_ParentNode$ = new $c_Lcom_raquo_laminar_nodes_ParentNode$();
  }
  return $n_Lcom_raquo_laminar_nodes_ParentNode$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = $p;
$p.tn = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gS(element.bS(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.i(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  eC: 1
}));
var $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
function $m_Lcom_raquo_laminar_nodes_ReactiveElement$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ReactiveElement$)) {
    $n_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $c_Lcom_raquo_laminar_nodes_ReactiveElement$();
  }
  return $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  this.q8 = null;
  $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = this;
  this.q8 = $m_Lcom_raquo_laminar_receivers_ChildTextReceiver$();
}
$p = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildReceiver$, "com.raquo.laminar.receivers.ChildReceiver$", ({
  eI: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildTextReceiver$() {
}
$p = $c_Lcom_raquo_laminar_receivers_ChildTextReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildTextReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildTextReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildTextReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildTextReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildTextReceiver$, "com.raquo.laminar.receivers.ChildTextReceiver$", ({
  eJ: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildTextReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildTextReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildTextReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cJ("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
  var trace = [];
  var i = 0;
  while ((i < (lines.length | 0))) {
    var line = lines[i];
    if ((line !== "")) {
      var mtch = NormalizedFrameLine.exec(line);
      if ((mtch !== null)) {
        var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, mtch[1]);
        var $x_5 = classAndMethodName[0];
        var $x_4 = classAndMethodName[1];
        var $x_3 = mtch[2];
        var x$2 = mtch[3];
        var $x_2 = parseInt(x$2);
        var x$3 = mtch[4];
        var $x_1 = trace.push(new $c_jl_StackTraceElement($x_5, $x_4, $x_3, ($x_2 | 0), ((x$3 !== (void 0)) ? (parseInt(x$3) | 0) : (-1))));
      } else {
        (trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))) | 0);
      }
    }
    i = ((1 + i) | 0);
  }
  var len = (trace.length | 0);
  var result = new ($d_jl_StackTraceElement.r().C)(len);
  i = 0;
  while ((i < len)) {
    result.b[i] = trace[i];
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().cJ("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cJ("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cJ("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cJ("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cJ("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
  var matchBC = PatBC.exec(functionName);
  var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
  if ((matchBCOrS !== null)) {
    return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchBCOrS[1]), $p_jl_StackTrace$__decodeMethodName__T__T($thiz, matchBCOrS[2])];
  } else {
    var matchCT = PatCT.exec(functionName);
    var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchCTOrN[1]), "<init>"];
    } else {
      var matchM = PatM.exec(functionName);
      return ((matchM !== null) ? [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchM[1]), "<clinit>"] : ["<jscode>", functionName]);
    }
  }
}
function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
  var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  if ((!(!$m_jl_Utils$Cache$().iJ.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.cg) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    var index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        var key = ("T" + index);
        var value = ("scala_Tuple" + index);
        dict[key] = value;
      }
      var key$1 = ("F" + index);
      var value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0);
    }
    $thiz.iG = dict;
    $thiz.cg = (((1 | $thiz.cg) << 24) >> 24);
  }
  return $thiz.iG;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cg) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.iG);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.cg) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.iH = dict;
    $thiz.cg = (((2 | $thiz.cg) << 24) >> 24);
  }
  return $thiz.iH;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cg) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.iH);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cg) << 24) >> 24) === 0)) {
    $thiz.iF = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cg = (((4 | $thiz.cg) << 24) >> 24);
  }
  return $thiz.iF;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cg) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.iF);
}
function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
  if ((!(!encodedName.startsWith("init___")))) {
    return "<init>";
  } else {
    var methodNameLen = (encodedName.indexOf("__") | 0);
    return ((methodNameLen < 0) ? encodedName : encodedName.substring(0, methodNameLen));
  }
}
function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
  return ((!(!(!(!(!e))))) ? [] : ((!(!(!(!(e.arguments && e.stack))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ((!(!(!(!(e.stack && e.sourceURL))))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ((!(!(!(!(e.stack && e.number))))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ((!(!(!(!(e.stack && e.fileName))))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ((!(!(!(!(e.message && e["opera#sourceloc"]))))) ? ((!(!(!(!(!e.stacktrace))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ((!(!(!(!((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length)))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ((!(!(!(!((e.message && e.stack) && e.stacktrace))))) ? ((!(!(!(!(e.stacktrace.indexOf("called from line") < 0.0))))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ((!(!(!(!(e.stack && (!e.fileName)))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O($thiz, e)))))))));
}
function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cJ("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bU("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bU("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bU("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bU("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bU("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bU("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bU("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bU("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bU("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bU("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bU("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bU("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bU("Line (\\d+).*script (?:in )?(\\S+)", "i");
  var lines = e.message.split("\n");
  var result = [];
  var i = 2;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      (result.push(((("{anonymous}()@" + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bU("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[3];
      var fnName = ((x !== (void 0)) ? x : "{anonymous}");
      (result.push(((((fnName + "()@") + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cJ("^(.*)@(.+):(\\d+)$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[1];
      var fnName = ((x !== (void 0)) ? (x + "()") : "global code");
      (result.push(((((fnName + "@") + mtch[2]) + ":") + mtch[3])) | 0);
    }
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cJ("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var location = ((((mtch[4] + ":") + mtch[1]) + ":") + mtch[2]);
      var x$3 = mtch[2];
      var fnName0 = ((x$3 !== (void 0)) ? x$3 : "global code");
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cJ("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cJ("<anonymous function>"), "{anonymous}");
      (result.push(((fnName + "@") + location)) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
  return [];
}
function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
  while (true) {
    if ((i < ($p_jl_StackTrace$__compressedPrefixes__O($thiz).length | 0))) {
      var prefix = $p_jl_StackTrace$__compressedPrefixes__O($thiz)[i];
      if ((!(!encodedName$1.startsWith(prefix)))) {
        var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        return (("" + dict[prefix]) + encodedName$1.substring(prefix.length));
      } else {
        i = ((1 + i) | 0);
      }
    } else {
      return ((!(!encodedName$1.startsWith("L"))) ? encodedName$1.substring(1) : encodedName$1);
    }
  }
}
/** @constructor */
function $c_jl_StackTrace$() {
  this.iG = null;
  this.iH = null;
  this.iF = null;
  this.cg = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.rw = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  f3: 1
}));
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$();
  }
  return $n_jl_StackTrace$;
}
/** @constructor */
function $c_jl_StackTrace$StringRE$() {
}
$p = $c_jl_StackTrace$StringRE$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$StringRE$;
/** @constructor */
function $h_jl_StackTrace$StringRE$() {
}
$h_jl_StackTrace$StringRE$.prototype = $p;
$p.cJ = (function(this$) {
  return new RegExp(this$);
});
$p.bU = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  f4: 1
}));
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$();
  }
  return $n_jl_StackTrace$StringRE$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.22.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.iI = null;
  this.nJ = null;
  $n_jl_System$SystemProperties$ = this;
  this.iI = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.nJ = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.jN = (function(key, default$1) {
  if ((this.iI !== null)) {
    var dict = this.iI;
    return ((!(!$m_jl_Utils$Cache$().iJ.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.nJ.jN(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  f8: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.iJ = null;
  $n_jl_Utils$Cache$ = this;
  this.iJ = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  fb: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bz)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bz: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.cb = (function(array) {
  if ((array instanceof $ac_O)) {
    return array.b.length;
  } else if ((array instanceof $ac_Z)) {
    return array.b.length;
  } else if ((array instanceof $ac_C)) {
    return array.b.length;
  } else if ((array instanceof $ac_B)) {
    return array.b.length;
  } else if ((array instanceof $ac_S)) {
    return array.b.length;
  } else if ((array instanceof $ac_I)) {
    return array.b.length;
  } else if ((array instanceof $ac_J)) {
    return ((array.b.length >>> 1) | 0);
  } else if ((array instanceof $ac_F)) {
    return array.b.length;
  } else {
    if ((!(array instanceof $ac_D))) {
      $p_jl_reflect_Array$__mismatch__O__E(this, array);
    }
    return array.b.length;
  }
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  fd: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.qP = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.b.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.b[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
        continue;
      }
      if ((cmp !== 0)) {
        startIndex = ((1 + mid) | 0);
        continue;
      }
      return mid;
    }
  }
});
$p.pf = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = ((a.b.length >>> 1) | 0);
  if ((((b.b.length >>> 1) | 0) !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.b;
    var $x_2 = (i$1 << 1);
    var a$1_$_lo = $x_1[$x_2];
    var a$1_$_hi = $x_1[(($x_2 + 1) | 0)];
    var i$2 = i;
    var $x_3 = b.b;
    var $x_4 = (i$2 << 1);
    var b$1_$_lo = $x_3[$x_4];
    var b$1_$_hi = $x_3[(($x_4 + 1) | 0)];
    if ((!(((a$1_$_lo ^ b$1_$_lo) | (a$1_$_hi ^ b$1_$_hi)) === 0))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.jA = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.b.length;
  if ((b.b.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.b[i$1];
    var i$2 = i;
    if ((!($x_1 === b.b[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.pg = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.b.length;
  if ((b.b.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.b[i$1];
    var i$2 = i;
    if ((!($x_1 === b.b[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.pe = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.b.length;
  if ((b.b.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.b[i$1];
    var i$2 = i;
    if ((!($x_1 === b.b[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.pd = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.b.length;
  if ((b.b.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.b[i$1];
    var i$2 = i;
    if ((!($x_1 === b.b[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.ph = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.b.length;
  if ((b.b.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.b[i$1];
    var i$2 = i;
    if ((!($x_1 === b.b[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.a6 = (function(original, newLength) {
  var b = original.b.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).Z.Q().Z.U(newLength);
  original.F(0, ret, 0, copyLength);
  return ret;
});
$p.af = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.b.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).Z.Q().Z.U(retLength);
  original.F(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  fe: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sT(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sS(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rn(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rm(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().po(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().pU(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) - (((lo >>> 0) > (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + (((lo >>> 0) < (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.pU = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var qHat = (+Math.floor((1.0000000000000265E-9 * aHat)));
    var rHat = ((rlo - Math.imul(1000000000, (qHat | 0.0))) | 0);
    if ((rHat < 0)) {
      qHat = (qHat - 1.0);
      rHat = ((1000000000 + rHat) | 0);
    }
    var this$7 = rHat;
    var remStr = ("" + this$7);
    var $x_1 = qHat;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.po = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.rm = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((rhi - ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((rlo - lo$1) | 0) >>> 0) > (rlo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
$p.rn = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((ahi - ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((alo - lo$1) | 0) >>> 0) > (alo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo, hi);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(0, 0);
  } else {
    return $bL(1, 0);
  }
});
$p.sS = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) - (((lo$2 >>> 0) > (rlo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  }
  if ((ahi < 0)) {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.sT = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) - (((lo$2 >>> 0) > (alo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(alo, ahi);
  } else {
    var lo$4 = ((alo - blo) | 0);
    var hi$4 = ((((ahi - bhi) | 0) - (((lo$4 >>> 0) > (alo >>> 0)) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  fh: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_Array$EmptyArrays$() {
  this.iK = null;
  this.nN = null;
  $n_s_Array$EmptyArrays$ = this;
  this.iK = new $ac_I(0);
  this.nN = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  fn: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  aQ: 1
}));
var $d_F1 = new $TypeData().i(1, "scala.Function1", ({
  f: 1
}));
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
/** @constructor */
function $c_s_PartialFunction$() {
  this.nO = null;
  this.hb = null;
  $n_s_PartialFunction$ = this;
  this.nO = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2$2) => $m_s_PartialFunction$().nO));
  this.hb = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  fu: 1
}));
var $n_s_PartialFunction$;
function $m_s_PartialFunction$() {
  if ((!$n_s_PartialFunction$)) {
    $n_s_PartialFunction$ = new $c_s_PartialFunction$();
  }
  return $n_s_PartialFunction$;
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.nT = null;
  $n_sc_ArrayOps$ = this;
  this.nT = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().nT));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.rD = (function(this$, f) {
  var len = $m_jl_reflect_Array$().cb(this$);
  var i = 0;
  if ((this$ instanceof $ac_O)) {
    while ((i < len)) {
      f.i(this$.b[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_I)) {
    while ((i < len)) {
      f.i(this$.b[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_D)) {
    while ((i < len)) {
      f.i(this$.b[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_J)) {
    while ((i < len)) {
      var $x_2 = this$.b;
      var $x_3 = (i << 1);
      var $x_1_$_lo = $x_2[$x_3];
      var $x_1_$_hi = $x_2[(($x_3 + 1) | 0)];
      f.i($bL($x_1_$_lo, $x_1_$_hi));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_F)) {
    while ((i < len)) {
      f.i(this$.b[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_C)) {
    while ((i < len)) {
      f.i($bC(this$.b[i]));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_B)) {
    while ((i < len)) {
      f.i(this$.b[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_S)) {
    while ((i < len)) {
      f.i(this$.b[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_Z)) {
    while ((i < len)) {
      f.i(this$.b[i]);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(this$);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  fC: 1
}));
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
/** @constructor */
function $c_sc_Hashing$() {
}
$p = $c_sc_Hashing$.prototype = new $h_O();
$p.constructor = $c_sc_Hashing$;
/** @constructor */
function $h_sc_Hashing$() {
}
$h_sc_Hashing$.prototype = $p;
$p.cG = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  fO: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.r();
  while (it.u()) {
    f.i(it.n());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.r();
  while ((res && it.u())) {
    res = (!(!p.i(it.n())));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.G()) {
    case (-1): {
      return (!$thiz.r().u());
      break;
    }
    case 0: {
      return true;
      break;
    }
    default: {
      return false;
    }
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.r();
  var i = start;
  var x1 = $thiz.G();
  var srclen = ((x1 === (-1)) ? $m_jl_reflect_Array$().cb(dest) : x1);
  var destLen = $m_jl_reflect_Array$().cb(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.u())) {
    $m_sr_ScalaRunTime$().jo(dest, i, it.n());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.G() === 0) ? (("" + start) + end) : $thiz.e4($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aW.z);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aW;
  if ((start.length !== 0)) {
    jsb.z = (("" + jsb.z) + start);
  }
  var it = $thiz.r();
  if (it.u()) {
    var obj = it.n();
    jsb.z = (("" + jsb.z) + obj);
    while (it.u()) {
      if ((sep.length !== 0)) {
        jsb.z = (("" + jsb.z) + sep);
      }
      var obj$1 = it.n();
      jsb.z = (("" + jsb.z) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.z = (("" + jsb.z) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.G() >= 0)) {
    var destination = evidence$2.bL($thiz.G());
    $thiz.c8(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.b7();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.r();
    while (it.u()) {
      var elem = it.n();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.Z.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.Z.r().w(jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.o0 = null;
  this.g1 = null;
  this.o0 = head;
  this.g1 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.rZ = (function() {
  return this.o0.U().r();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  fX: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.o3 = null;
  $n_sc_StringOps$ = this;
  this.o3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_StringOps$().o3));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.r4 = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  g4: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$p = $c_scg_CommonErrors$.prototype = new $h_O();
$p.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $p;
$p.jQ = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  g8: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
function $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().pu($m_jl_System$SystemProperties$().jN("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      return 64;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.o6 = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.o6 = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  gh: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sci_LazyList$EmptyMarker$() {
}
$p = $c_sci_LazyList$EmptyMarker$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$EmptyMarker$;
/** @constructor */
function $h_sci_LazyList$EmptyMarker$() {
}
$h_sci_LazyList$EmptyMarker$.prototype = $p;
var $d_sci_LazyList$EmptyMarker$ = new $TypeData().i($c_sci_LazyList$EmptyMarker$, "scala.collection.immutable.LazyList$EmptyMarker$", ({
  gk: 1
}));
var $n_sci_LazyList$EmptyMarker$;
function $m_sci_LazyList$EmptyMarker$() {
  if ((!$n_sci_LazyList$EmptyMarker$)) {
    $n_sci_LazyList$EmptyMarker$ = new $c_sci_LazyList$EmptyMarker$();
  }
  return $n_sci_LazyList$EmptyMarker$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.j2 = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.jB = (function() {
  var state = this.j2;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.U();
});
$p.jR = (function(state) {
  if ((this.j2 !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.j2 = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  gm: 1
}));
/** @constructor */
function $c_sci_LazyList$MidEvaluation$() {
}
$p = $c_sci_LazyList$MidEvaluation$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$MidEvaluation$;
/** @constructor */
function $h_sci_LazyList$MidEvaluation$() {
}
$h_sci_LazyList$MidEvaluation$.prototype = $p;
var $d_sci_LazyList$MidEvaluation$ = new $TypeData().i($c_sci_LazyList$MidEvaluation$, "scala.collection.immutable.LazyList$MidEvaluation$", ({
  go: 1
}));
var $n_sci_LazyList$MidEvaluation$;
function $m_sci_LazyList$MidEvaluation$() {
  if ((!$n_sci_LazyList$MidEvaluation$)) {
    $n_sci_LazyList$MidEvaluation$ = new $c_sci_LazyList$MidEvaluation$();
  }
  return $n_sci_LazyList$MidEvaluation$;
}
/** @constructor */
function $c_sci_MapNode$() {
  this.o9 = null;
  $n_sci_MapNode$ = this;
  this.o9 = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  gE: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (($m_jl_reflect_Array$().cb(as) - 1) | 0)));
}
/** @constructor */
function $c_sci_Node() {
}
$p = $c_sci_Node.prototype = new $h_O();
$p.constructor = $c_sci_Node;
/** @constructor */
function $h_sci_Node() {
}
$h_sci_Node.prototype = $p;
$p.pF = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > ((as.b.length - 1) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((as.b.length - 1) | 0));
  as.F(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = ((((as.b.length - ix) | 0) - 1) | 0);
  as.F(srcPos, result, ix, length);
  return result;
});
$p.sa = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.b.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.b.length) | 0));
  as.F(0, result, 0, ix);
  result.b[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.b.length - ix) | 0);
  as.F(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  b1: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.gd = 0;
  $n_sci_Node$ = this;
  this.gd = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.eT = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.e6 = (function(mask) {
  return (1 << mask);
});
$p.s2 = (function(bitmap, bitpos) {
  return $m_jl_Integer$().cW((bitmap & ((bitpos - 1) | 0)));
});
$p.d1 = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.s2(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  gH: 1
}));
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$();
  }
  return $n_sci_Node$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.j6 = null;
  this.bJ = null;
  this.cV = null;
  this.fn = null;
  this.j7 = null;
  this.od = null;
  $n_sci_VectorStatics$ = this;
  this.j6 = new $ac_O(0);
  this.bJ = new ($d_O.r().r().C)(0);
  this.cV = new ($d_O.r().r().r().C)(0);
  this.fn = new ($d_O.r().r().r().r().C)(0);
  this.j7 = new ($d_O.r().r().r().r().r().C)(0);
  this.od = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.ft = (function(a, elem) {
  var alen = a.b.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.F(0, ac, 0, alen);
  ac.b[alen] = elem;
  return ac;
});
$p.L = (function(a, elem) {
  var ac = $m_ju_Arrays$().a6(a, ((1 + a.b.length) | 0));
  ac.b[((ac.b.length - 1) | 0)] = elem;
  return ac;
});
$p.cX = (function(elem, a) {
  var ac = $objectGetClass(a).Z.Q().Z.U(((1 + a.b.length) | 0));
  var length$1 = a.b.length;
  a.F(0, ac, 1, length$1);
  ac.b[0] = elem;
  return ac;
});
$p.jD = (function(level, a, f) {
  var i = 0;
  var len = a.b.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.i(a.b[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = ((level - 1) | 0);
    while ((i < len)) {
      this.jD(l, a.b[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.cx = (function(a, f) {
  var i = 0;
  while ((i < a.b.length)) {
    var v1 = a.b[i];
    var v2 = f.i(v1);
    if ((!Object.is(v1, v2))) {
      return this.so(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.so = (function(a, f, at, v2) {
  var ac = new $ac_O(a.b.length);
  if ((at > 0)) {
    a.F(0, ac, 0, at);
  }
  ac.b[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.b.length)) {
    ac.b[i] = f.i(a.b[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.ae = (function(n, a, f) {
  if ((n === 1)) {
    return this.cx(a, f);
  } else {
    var i = 0;
    while ((i < a.b.length)) {
      var v1 = a.b[i];
      var v2 = this.ae(((n - 1) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.sp(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.sp = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).Z.Q().Z.U(a.b.length);
  if ((at > 0)) {
    a.F(0, ac, 0, at);
  }
  ac.b[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.b.length)) {
    ac.b[i] = this.ae(((n - 1) | 0), a.b[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  gY: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_scm_HashSet$Node(_key, _hash, _next) {
  this.eC = null;
  this.dj = 0;
  this.aV = null;
  this.eC = _key;
  this.dj = _hash;
  this.aV = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.ry = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.dj) && $m_sr_BoxesRunTime$().x(k, _$this.eC))) {
      return _$this;
    } else if (((_$this.aV === null) || (_$this.dj > h))) {
      return null;
    } else {
      _$this = _$this.aV;
    }
  }
});
$p.ag = (function(f) {
  var _$this = this;
  while (true) {
    f.i(_$this.eC);
    if ((_$this.aV !== null)) {
      _$this = _$this.aV;
      continue;
    }
    break;
  }
});
$p.B = (function() {
  return ((((("Node(" + this.eC) + ", ") + this.dj) + ") -> ") + this.aV);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  hi: 1
}));
/** @constructor */
function $c_scm_MutationTracker$() {
}
$p = $c_scm_MutationTracker$.prototype = new $h_O();
$p.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $p;
$p.p0 = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  ho: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.x = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.rv(x, y) : ((x instanceof $Char) ? this.rt(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.rv = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.ru(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.ru = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.y(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.y($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.rt = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  hX: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  i1: 1
}));
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.eK = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.b[idx];
  } else if ((xs instanceof $ac_I)) {
    return xs.b[idx];
  } else if ((xs instanceof $ac_D)) {
    return xs.b[idx];
  } else if ((xs instanceof $ac_J)) {
    var $x_1 = xs.b;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  } else if ((xs instanceof $ac_F)) {
    return xs.b[idx];
  } else if ((xs instanceof $ac_C)) {
    return $bC(xs.b[idx]);
  } else if ((xs instanceof $ac_B)) {
    return xs.b[idx];
  } else if ((xs instanceof $ac_S)) {
    return xs.b[idx];
  } else if ((xs instanceof $ac_Z)) {
    return xs.b[idx];
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.jo = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.b[idx] = value;
  } else if ((xs instanceof $ac_I)) {
    xs.b[idx] = (value | 0);
  } else if ((xs instanceof $ac_D)) {
    xs.b[idx] = (+value);
  } else if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.b;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
  } else if ((xs instanceof $ac_F)) {
    xs.b[idx] = Math.fround(value);
  } else if ((xs instanceof $ac_C)) {
    xs.b[idx] = $uC(value);
  } else if ((xs instanceof $ac_B)) {
    xs.b[idx] = (value | 0);
  } else if ((xs instanceof $ac_S)) {
    xs.b[idx] = (value | 0);
  } else if ((xs instanceof $ac_Z)) {
    xs.b[idx] = (!(!value));
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.jj = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bA(), (x.aw() + "("), ",", ")");
});
$p.rL = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().hO(xs));
});
$p.c = (function(xs) {
  return ((xs === null) ? null : ((xs.b.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  i3: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.m = (function(hash, data) {
  var h = this.dq(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.dq = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.J = (function(hash, length) {
  return this.qO((hash ^ length));
});
$p.qO = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.fz = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.cF = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().po(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.X = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.cF((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.fz($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.eR = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  i5: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
}
$p = $c_sr_Statics$PFMarker$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
}
$h_sr_Statics$PFMarker$.prototype = $p;
var $d_sr_Statics$PFMarker$ = new $TypeData().i($c_sr_Statics$PFMarker$, "scala.runtime.Statics$PFMarker$", ({
  i6: 1
}));
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$();
  }
  return $n_sr_Statics$PFMarker$;
}
/** @constructor */
function $c_sjs_js_defined$() {
}
$p = $c_sjs_js_defined$.prototype = new $h_O();
$p.constructor = $c_sjs_js_defined$;
/** @constructor */
function $h_sjs_js_defined$() {
}
$h_sjs_js_defined$.prototype = $p;
$p.qI = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  ic: 1
}));
var $n_sjs_js_defined$;
function $m_sjs_js_defined$() {
  if ((!$n_sjs_js_defined$)) {
    $n_sjs_js_defined$ = new $c_sjs_js_defined$();
  }
  return $n_sjs_js_defined$;
}
/** @constructor */
function $c_sjs_js_timers_package$() {
}
$p = $c_sjs_js_timers_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
}
$h_sjs_js_timers_package$.prototype = $p;
$p.tb = (function(interval, body) {
  return setTimeout((() => {
    body.U();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  id: 1
}));
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$();
  }
  return $n_sjs_js_timers_package$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.ti = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hp;
  } else {
    var result = [];
    seq.ag(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  iq: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
/** @constructor */
function $c_s_util_control_NonFatal$() {
}
$p = $c_s_util_control_NonFatal$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NonFatal$;
/** @constructor */
function $h_s_util_control_NonFatal$() {
}
$h_s_util_control_NonFatal$.prototype = $p;
$p.eJ = (function(t) {
  return (!(false || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  it: 1
}));
var $n_s_util_control_NonFatal$;
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$();
  }
  return $n_s_util_control_NonFatal$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.m = (function(hash, data) {
  var h = this.dq(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.dq = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.J = (function(hash, length) {
  return this.bV((hash ^ length));
});
$p.bV = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.pV = (function(x, y, seed) {
  var h = seed;
  h = this.m(h, $f_T__hashCode__I("Tuple2"));
  h = this.m(h, x);
  h = this.m(h, y);
  return this.J(h, 2);
});
$p.fC = (function(x, seed, ignorePrefix) {
  var arr = x.au();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.aw()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.m(h, $f_T__hashCode__I(x.aw()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.m(h, $m_sr_Statics$().X(x.av(i)));
      i = ((1 + i) | 0);
    }
    return this.J(h, arr);
  }
});
$p.hB = (function(x, seed, caseClassName) {
  var arr = x.au();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.aw()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.m(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.m(h, $m_sr_Statics$().X(x.av(i)));
      i = ((1 + i) | 0);
    }
    return this.J(h, arr);
  }
});
$p.ke = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.r();
  while (iterator.u()) {
    var x = iterator.n();
    var h = $m_sr_Statics$().X(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.m(h$2, a);
  h$2 = this.m(h$2, b);
  h$2 = this.dq(h$2, c);
  return this.J(h$2, n);
});
$p.sK = (function(xs, seed) {
  var it = xs.r();
  var h = seed;
  if ((!it.u())) {
    return this.J(h, 0);
  }
  var x0 = it.n();
  if ((!it.u())) {
    return this.J(this.m(h, $m_sr_Statics$().X(x0)), 1);
  }
  var x1 = it.n();
  var initial = $m_sr_Statics$().X(x0);
  h = this.m(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().X(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.u()) {
    h = this.m(h, prev);
    var hash = $m_sr_Statics$().X(it.n());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.m(h, hash);
      i = ((1 + i) | 0);
      while (it.u()) {
        h = this.m(h, $m_sr_Statics$().X(it.n()));
        i = ((1 + i) | 0);
      }
      return this.J(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.bV(this.m(this.m(h0, rangeDiff), prev));
});
$p.oP = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().cb(a);
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      return this.J(this.m(h, $m_sr_Statics$().X($m_sr_ScalaRunTime$().eK(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().X($m_sr_ScalaRunTime$().eK(a, 0));
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().X($m_sr_ScalaRunTime$().eK(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().X($m_sr_ScalaRunTime$().eK(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().X($m_sr_ScalaRunTime$().eK(a, i)));
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.sP = (function(start, step, last, seed) {
  return this.bV(this.m(this.m(this.m(seed, start), step), last));
});
$p.s3 = (function(a, seed) {
  var h = seed;
  var l = a.A();
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      return this.J(this.m(h, $m_sr_Statics$().X(a.C(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().X(a.C(0));
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().X(a.C(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().X(a.C(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().X(a.C(i)));
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.si = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.j())) {
    var head = elems.w();
    var tail = elems.v();
    var hash = $m_sr_Statics$().X(head);
    h = this.m(h, hash);
    switch (rangeState) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.sP(initial, rangeDiff, prev, seed) : this.J(h, n));
});
$p.oY = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      return this.J(this.m(h, (a.b[0] ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = (a.b[0] ? 1231 : 1237);
      h = this.m(h, initial);
      var h0 = h;
      var prev = (a.b[1] ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = (a.b[i] ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, (a.b[i] ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.oQ = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      return this.J(this.m(h, a.b[0]), 1);
      break;
    }
    default: {
      var initial = a.b[0];
      h = this.m(h, initial);
      var h0 = h;
      var prev = a.b[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = a.b[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, a.b[i]);
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.oR = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      return this.J(this.m(h, a.b[0]), 1);
      break;
    }
    default: {
      var initial = a.b[0];
      h = this.m(h, initial);
      var h0 = h;
      var prev = a.b[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = a.b[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, a.b[i]);
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.oS = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      return this.J(this.m(h, $m_sr_Statics$().cF(a.b[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cF(a.b[0]);
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cF(a.b[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().cF(a.b[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().cF(a.b[i]));
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.oT = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      return this.J(this.m(h, $m_sr_Statics$().cF(a.b[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cF(a.b[0]);
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cF(a.b[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().cF(a.b[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().cF(a.b[i]));
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.oU = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      return this.J(this.m(h, a.b[0]), 1);
      break;
    }
    default: {
      var initial = a.b[0];
      h = this.m(h, initial);
      var h0 = h;
      var prev = a.b[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = a.b[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, a.b[i]);
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.oV = (function(a, seed) {
  var h = seed;
  var l = ((a.b.length >>> 1) | 0);
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      var $x_4 = h;
      var $x_3 = $m_sr_Statics$();
      var $x_2 = a.b;
      var $x_1_$_lo = $x_2[0];
      var $x_1_$_hi = $x_2[1];
      return this.J(this.m($x_4, $x_3.fz($x_1_$_lo, $x_1_$_hi)), 1);
      break;
    }
    default: {
      var $x_7 = $m_sr_Statics$();
      var $x_6 = a.b;
      var $x_5_$_lo = $x_6[0];
      var $x_5_$_hi = $x_6[1];
      var initial = $x_7.fz($x_5_$_lo, $x_5_$_hi);
      h = this.m(h, initial);
      var h0 = h;
      var $x_10 = $m_sr_Statics$();
      var $x_9 = a.b;
      var $x_8_$_lo = $x_9[2];
      var $x_8_$_hi = $x_9[3];
      var prev = $x_10.fz($x_8_$_lo, $x_8_$_hi);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var $x_14 = $m_sr_Statics$();
        var $x_12 = a.b;
        var $x_13 = (i << 1);
        var $x_11_$_lo = $x_12[$x_13];
        var $x_11_$_hi = $x_12[(($x_13 + 1) | 0)];
        var hash = $x_14.fz($x_11_$_lo, $x_11_$_hi);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_19 = h;
            var $x_18 = $m_sr_Statics$();
            var $x_16 = a.b;
            var $x_17 = (i << 1);
            var $x_15_$_lo = $x_16[$x_17];
            var $x_15_$_hi = $x_16[(($x_17 + 1) | 0)];
            h = this.m($x_19, $x_18.fz($x_15_$_lo, $x_15_$_hi));
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.oW = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      return this.J(this.m(h, a.b[0]), 1);
      break;
    }
    default: {
      var initial = a.b[0];
      h = this.m(h, initial);
      var h0 = h;
      var prev = a.b[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = a.b[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, a.b[i]);
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.oX = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.J(h, 0);
      break;
    }
    case 1: {
      return this.J(this.m(h, 0), 1);
      break;
    }
    default: {
      h = this.m(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, 0);
            i = ((1 + i) | 0);
          }
          return this.J(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.bV(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
/** @constructor */
function $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$5() {
}
$p = $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$5.prototype = new $h_Lapp_tulz_tuplez_Composition();
$p.constructor = $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$5;
/** @constructor */
function $h_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$5() {
}
$h_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$5.prototype = $p;
var $d_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$5 = new $TypeData().i($c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$5, "app.tulz.tuplez.Composition_Pri7$$anon$5", ({
  cv: 1,
  cu: 1
}));
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $thiz.hI(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.gL(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.gL(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.l3 = null;
  this.l2 = null;
  this.i4 = false;
  this.l2 = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.i4 = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.fE = (function() {
  return this.l3;
});
$p.p3 = (function(x$0) {
  this.l3 = x$0;
});
$p.pD = (function(subscription) {
  if (this.i4) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.l2.U();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.pw = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.i4 = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  dq: 1,
  bg: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.lU = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$() {
}
$h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = $p;
$p.fE = (function() {
  return this.lU;
});
$p.p3 = (function(x$0) {
  this.lU = x$0;
});
$p.pw = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.pD = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  dL: 1,
  bg: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$$anon$2(outer) {
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$$anon$2() {
}
$h_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = $p;
$p.gA = (function(scalaValue) {
  return scalaValue;
});
$p.jy = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  dR: 1,
  bj: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.nl = null;
  this.nm = null;
  this.ig = null;
  this.ie = null;
  this.nl = getRawDomValue;
  this.nm = setRawDomValue;
  this.ig = separator;
  this.ie = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.f = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().a.hu(), $m_Lcom_raquo_laminar_keys_CompositeKey$().k4(items, this.ig)));
});
$p.ji = (function(items, valueMapper) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, items.eW(), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, nextRawItems, thisBinder) => {
    var currentNormalizedItems = $f_Lcom_raquo_laminar_nodes_ReactiveElement__compositeValueItems__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List(element, this, thisBinder);
    var nextNormalizedItems = $m_Lcom_raquo_laminar_keys_CompositeKey$().k4(nextRawItems, this.ig);
    var f = ((elem) => currentNormalizedItems.bj(elem));
    var l = nextNormalizedItems;
    block: {
      var result;
      while (true) {
        if (l.j()) {
          var result = $m_sci_Nil$();
          break;
        } else {
          var h = l.w();
          var t = l.v();
          if ((!(!f(h)))) {
            l = t;
            continue;
          }
          var start = l;
          var remaining = t;
          while (true) {
            if (remaining.j()) {
              var result = start;
              break block;
            } else {
              var x = remaining.w();
              if ((!(!(!f(x))))) {
                remaining = remaining.v();
                continue;
              }
              var firstMiss = remaining;
              var newHead = new $c_sci_$colon$colon(start.w(), $m_sci_Nil$());
              var toProcess = start.v();
              var currentLast = newHead;
              while ((toProcess !== firstMiss)) {
                var newElem = new $c_sci_$colon$colon(toProcess.w(), $m_sci_Nil$());
                currentLast.a0 = newElem;
                currentLast = newElem;
                toProcess = toProcess.v();
              }
              var next = firstMiss.v();
              var nextToCopy = next;
              while ((!next.j())) {
                var head = next.w();
                if ((!(!(!f(head))))) {
                  next = next.v();
                } else {
                  while ((nextToCopy !== next)) {
                    var newElem$2 = new $c_sci_$colon$colon(nextToCopy.w(), $m_sci_Nil$());
                    currentLast.a0 = newElem$2;
                    currentLast = newElem$2;
                    nextToCopy = nextToCopy.v();
                  }
                  nextToCopy = next.v();
                  next = next.v();
                }
              }
              if ((!nextToCopy.j())) {
                currentLast.a0 = nextToCopy;
              }
              var result = newHead;
              break block;
            }
          }
        }
      }
    }
    var f$1 = ((elem$2) => nextNormalizedItems.bj(elem$2));
    var l$1 = currentNormalizedItems;
    block$2: {
      var $x_1;
      while (true) {
        if (l$1.j()) {
          var $x_1 = $m_sci_Nil$();
          break;
        } else {
          var h$1 = l$1.w();
          var t$1 = l$1.v();
          if ((!(!f$1(h$1)))) {
            l$1 = t$1;
            continue;
          }
          var start$1 = l$1;
          var remaining$1 = t$1;
          while (true) {
            if (remaining$1.j()) {
              var $x_1 = start$1;
              break block$2;
            } else {
              var x$1 = remaining$1.w();
              if ((!(!(!f$1(x$1))))) {
                remaining$1 = remaining$1.v();
                continue;
              }
              var firstMiss$1 = remaining$1;
              var newHead$1 = new $c_sci_$colon$colon(start$1.w(), $m_sci_Nil$());
              var toProcess$1 = start$1.v();
              var currentLast$1 = newHead$1;
              while ((toProcess$1 !== firstMiss$1)) {
                var newElem$1 = new $c_sci_$colon$colon(toProcess$1.w(), $m_sci_Nil$());
                currentLast$1.a0 = newElem$1;
                currentLast$1 = newElem$1;
                toProcess$1 = toProcess$1.v();
              }
              var next$1 = firstMiss$1.v();
              var nextToCopy$1 = next$1;
              while ((!next$1.j())) {
                var head$1 = next$1.w();
                if ((!(!(!f$1(head$1))))) {
                  next$1 = next$1.v();
                } else {
                  while ((nextToCopy$1 !== next$1)) {
                    var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.w(), $m_sci_Nil$());
                    currentLast$1.a0 = newElem$2$1;
                    currentLast$1 = newElem$2$1;
                    nextToCopy$1 = nextToCopy$1.v();
                  }
                  nextToCopy$1 = next$1.v();
                  next$1 = next$1.v();
                }
              }
              if ((!nextToCopy$1.j())) {
                currentLast$1.a0 = nextToCopy$1;
              }
              var $x_1 = newHead$1;
              break block$2;
            }
          }
        }
      }
    }
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this, thisBinder, result, $x_1);
  })));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  e9: 1,
  ax: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.ih = null;
  this.ih = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.pa = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().k4(domValue, this.ih);
});
$p.pc = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.ih, "");
});
$p.jy = (function(domValue) {
  return this.pa(domValue);
});
$p.gA = (function(scalaValue) {
  return this.pc(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  eb: 1,
  bj: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(outer) {
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = $p;
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$, "com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$", ({
  ed: 1,
  ec: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.fV = null;
  this.fV = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  eg: 1,
  ax: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.fW = null;
  this.ii = null;
  this.fW = name;
  this.ii = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.k = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().pP(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  eh: 1,
  ax: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.d6 = null;
  this.ij = null;
  this.d6 = name;
  this.ij = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.k = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().pQ(element, prop, value$2);
  })));
});
$p.qo = (function(values) {
  var update = ((this.d6 === "value") ? new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, nextValue, reason) => {
    var nextDomValue = this.ij.gA(nextValue);
    var x = $m_Lcom_raquo_laminar_DomApi$().rR(element, this);
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().x(nextDomValue, x)))) {
      $m_Lcom_raquo_laminar_DomApi$().pR(element, this, nextDomValue);
    }
  })) : new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element$2, nextValue$2, reason$2) => {
    $m_Lcom_raquo_laminar_DomApi$().pQ(element$2, this, nextValue$2);
  })));
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eW(), update);
});
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bm)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bm: 1,
  ax: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.il = null;
  this.ik = null;
  this.h5 = null;
  this.h6 = null;
  this.il = localName;
  this.ik = codec;
  var this$1 = (namespacePrefix.j() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.N() + ":") + localName)));
  this.h5 = (this$1.j() ? localName : this$1.N());
  this.h6 = (namespacePrefix.j() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().sv(namespacePrefix.N())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
$p.k = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().pS(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  ei: 1,
  ax: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = $p;
$p.ct = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  eq: 1,
  U: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.nv = null;
  this.nv = f$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = $p;
$p.ct = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.nv.i(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bt || (!when))) {
    f();
  } else {
    this$2.bt = true;
    try {
      f();
    } finally {
      this$2.bt = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  er: 1,
  U: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1, "com.raquo.laminar.modifiers.RenderableNode$$anon$1", ({
  eu: 1,
  es: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$, "com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$", ({
  ew: 1,
  ev: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
function $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$ = new $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$2, outer) {
  this.nw = null;
  this.nw = render$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = $p;
$p.jp = (function(value) {
  return this.nw.i(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  ez: 1,
  ex: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.jr(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().rk($thiz.a7(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.iB = null;
  this.iB = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.d = (function(modifiers) {
  var element = this.qS();
  modifiers.ag(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.ct(element);
  })));
  return element;
});
$p.qS = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().rc(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  eL: 1,
  bq: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.iC = null;
  this.iC = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
$p.aP = (function(modifiers) {
  var element = this.qT();
  modifiers.ag(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.ct(element);
  })));
  return element;
});
$p.qT = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, $m_Lcom_raquo_laminar_DomApi$().p8(this));
});
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  eM: 1,
  bq: 1
}));
/** @constructor */
function $c_jl_Character$() {
  this.iD = null;
  $n_jl_Character$ = this;
  this.iD = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.tj = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.rl = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().qP(this.iD, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.iD.b[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  eR: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.gN = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.pu = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gN(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gN(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) | 0);
  if ((i >= len)) {
    $m_jl_Integer$().gN(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.rl(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gN(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gN(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
$p.cW = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  eW: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.fc = null;
  this.fX = null;
  this.fd = null;
  this.fe = 0;
  this.fb = 0;
  this.fc = declaringClass;
  this.fX = methodName;
  this.fd = fileName;
  this.fe = lineNumber;
  this.fb = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.y = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.fd === that.fd) && (this.fe === that.fe)) && (this.fb === that.fb)) && (this.fc === that.fc)) && (this.fX === that.fX)));
});
$p.B = (function() {
  var result = "";
  if ((this.fc !== "<jscode>")) {
    result = ((("" + result) + this.fc) + ".");
  }
  result = (("" + result) + this.fX);
  if ((this.fd === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.fd);
    if ((this.fe >= 0)) {
      result = ((result + ":") + this.fe);
      if ((this.fb >= 0)) {
        result = ((result + ":") + this.fb);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.D = (function() {
  return (((($f_T__hashCode__I(this.fc) ^ $f_T__hashCode__I(this.fX)) ^ $f_T__hashCode__I(this.fd)) ^ this.fe) ^ this.fb);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.by)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  by: 1,
  a: 1
}));
/** @constructor */
function $c_jl_String$() {
}
$p = $c_jl_String$.prototype = new $h_O();
$p.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
$h_jl_String$.prototype = $p;
$p.sx = (function(value, offset, count) {
  var endOffset = ((offset + count) | 0);
  var result = "";
  var i = offset;
  while ((i !== endOffset)) {
    result = (result + ("" + $cToS(value.b[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  f6: 1,
  a: 1
}));
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.nL = s;
  $thiz.nM = writableStackTrace;
  if (writableStackTrace) {
    $thiz.rx();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.nL = null;
    this.nM = false;
    this.nK = null;
    this.h8 = null;
  }
  jS(cause) {
    return this;
  }
  gF() {
    return this.nL;
  }
  rx() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ad : this);
    this.nK = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  rT() {
    if ((this.h8 === null)) {
      if (this.nM) {
        this.h8 = $m_jl_StackTrace$().rw(this.nK);
      } else {
        this.h8 = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.h8;
  }
  B() {
    var className = $objectClassName(this);
    var message = this.gF();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  D() {
    return $c_O.prototype.D.call(this);
  }
  y(that) {
    return $c_O.prototype.y.call(this, that);
  }
  get "message"() {
    var m = this.gF();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.B();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.v)));
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.h9 = null;
  $n_s_$less$colon$less$ = this;
  this.h9 = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  fk: 1,
  a: 1
}));
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$();
  }
  return $n_s_$less$colon$less$;
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().jo(dest, j, $m_sr_ScalaRunTime$().eK(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.pk = (function(it, evidence$3) {
  var n = it.G();
  if ((n > (-1))) {
    var elements = evidence$3.bL(n);
    var iterator = it.r();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().jo(elements, i, iterator.n());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.b7();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.r();
    while (iterator$2.u()) {
      var elem = iterator$2.n();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.Z.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.Z.r().w(jsElems);
  }
});
$p.gy = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.Z.Z && $objectGetClass(dest).Z.R(srcClass.Z))) {
    src.F(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.pi = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.b.length !== ys.b.length)) {
    return false;
  }
  var len = xs.b.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().x(xs.b[i], ys.b[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  fm: 1,
  a: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.kf = (function(xs) {
  return ((xs === null) ? null : ((xs.b.length === 0) ? $m_scm_ArraySeq$().oh : new $c_scm_ArraySeq$ofRef(xs)));
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.cw(x) ? $thiz.i(x) : default$1.i(x));
}
/** @constructor */
function $c_sci_LazyList$Uninitialized$() {
}
$p = $c_sci_LazyList$Uninitialized$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$Uninitialized$;
/** @constructor */
function $h_sci_LazyList$Uninitialized$() {
}
$h_sci_LazyList$Uninitialized$.prototype = $p;
var $d_sci_LazyList$Uninitialized$ = new $TypeData().i($c_sci_LazyList$Uninitialized$, "scala.collection.immutable.LazyList$Uninitialized$", ({
  gp: 1,
  a: 1
}));
var $n_sci_LazyList$Uninitialized$;
function $m_sci_LazyList$Uninitialized$() {
  if ((!$n_sci_LazyList$Uninitialized$)) {
    $n_sci_LazyList$Uninitialized$ = new $c_sci_LazyList$Uninitialized$();
  }
  return $n_sci_LazyList$Uninitialized$;
}
/** @constructor */
function $c_sci_List$$anon$1() {
}
$p = $c_sci_List$$anon$1.prototype = new $h_O();
$p.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
}
$h_sci_List$$anon$1.prototype = $p;
$p.B = (function() {
  return "<function1>";
});
$p.i = (function(x) {
  return this;
});
var $d_sci_List$$anon$1 = new $TypeData().i($c_sci_List$$anon$1, "scala.collection.immutable.List$$anon$1", ({
  gr: 1,
  f: 1
}));
/** @constructor */
function $c_sci_MapNode() {
}
$p = $c_sci_MapNode.prototype = new $h_sci_Node();
$p.constructor = $c_sci_MapNode;
/** @constructor */
function $h_sci_MapNode() {
}
$h_sci_MapNode.prototype = $p;
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.bh($m_scm_Buffer$().hD(elems));
  } else {
    var it = elems.r();
    while (it.u()) {
      $thiz.b4(it.n());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.qd = null;
  this.qm = null;
  this.qe = null;
  this.qh = null;
  this.qi = null;
  this.qg = null;
  this.qf = null;
  this.qc = null;
  this.qn = null;
  this.qa = null;
  this.ql = null;
  this.qb = null;
  this.qj = null;
  this.qk = null;
  $n_s_reflect_ClassTag$ = this;
  this.qd = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.qm = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.qe = $m_s_reflect_ManifestFactory$CharManifest$();
  this.qh = $m_s_reflect_ManifestFactory$IntManifest$();
  this.qi = $m_s_reflect_ManifestFactory$LongManifest$();
  this.qg = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.qf = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.qc = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.qn = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.qa = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.ql = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qb = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qj = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.qk = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.oN = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  ht: 1,
  a: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.B = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.B = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.B = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.B = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$p = $c_sr_AbstractFunction4.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $p;
$p.B = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.hm = false;
  this.hm = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.B = (function() {
  return ("" + this.hm);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  hW: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.eD = 0;
  this.eD = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.B = (function() {
  return ("" + this.eD);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  hY: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.hn = false;
  this.ho = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.s5 = (function(value) {
  this.ho = value;
  this.hn = true;
  return value;
});
$p.B = (function() {
  return ("LazyRef " + (this.hn ? ("of: " + this.ho) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  hZ: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.ay = null;
  this.ay = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.B = (function() {
  return ("" + this.ay);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  i2: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.az = 0;
  this.e3 = 0;
  this.oy = 0;
  this.jh = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.az = $f_T__hashCode__I("Seq");
  this.e3 = $f_T__hashCode__I("Map");
  this.oy = $f_T__hashCode__I("Set");
  this.jh = this.ke($m_sci_Nil$(), this.e3);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cM = (function(x, y) {
  return this.pV($m_sr_Statics$().X(x), $m_sr_Statics$().X(y), (-889275714));
});
$p.pO = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.s3(xs, this.az) : ((xs instanceof $c_sci_List) ? this.si(xs, this.az) : this.sK(xs, this.az)));
});
$p.sq = (function(xs) {
  if (xs.j()) {
    return this.jh;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.e3;
    xs.eN(accum);
    h = this.m(h, accum.hq);
    h = this.m(h, accum.hr);
    h = this.dq(h, accum.hs);
    return this.J(h, accum.ht);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  iv: 1,
  iu: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$accum$1() {
  this.hq = 0;
  this.hr = 0;
  this.ht = 0;
  this.hs = 0;
  this.hq = 0;
  this.hr = 0;
  this.ht = 0;
  this.hs = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.B = (function() {
  return "<function2>";
});
$p.qH = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cM(k, v);
  this.hq = ((this.hq + h) | 0);
  this.hr = (this.hr ^ h);
  this.hs = Math.imul(this.hs, (1 | h));
  this.ht = ((1 + this.ht) | 0);
});
$p.eI = (function(v1, v2) {
  this.qH(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  iw: 1,
  aR: 1
}));
function $s_Lccrystal_site_Tab$__Manifesto__Lccrystal_site_Tab() {
  $m_Lccrystal_site_Tab$();
  return $t_Lccrystal_site_Tab$__Manifesto;
}
function $s_Lccrystal_site_Tab$__Explorer__Lccrystal_site_Tab() {
  $m_Lccrystal_site_Tab$();
  return $t_Lccrystal_site_Tab$__Explorer;
}
function $s_Lccrystal_site_Tab$__Quickstart__Lccrystal_site_Tab() {
  $m_Lccrystal_site_Tab$();
  return $t_Lccrystal_site_Tab$__Quickstart;
}
function $s_Lccrystal_site_Tab$__Mcp__Lccrystal_site_Tab() {
  $m_Lccrystal_site_Tab$();
  return $t_Lccrystal_site_Tab$__Mcp;
}
function $s_Lccrystal_site_Tab$__AgentIngestion__Lccrystal_site_Tab() {
  $m_Lccrystal_site_Tab$();
  return $t_Lccrystal_site_Tab$__AgentIngestion;
}
/** @constructor */
function $c_Lccrystal_site_Tab$() {
  this.kg = null;
  $n_Lccrystal_site_Tab$ = this;
  $t_Lccrystal_site_Tab$__Manifesto = new $c_Lccrystal_site_Tab$$anon$1();
  $t_Lccrystal_site_Tab$__Explorer = new $c_Lccrystal_site_Tab$$anon$2();
  $t_Lccrystal_site_Tab$__Quickstart = new $c_Lccrystal_site_Tab$$anon$3();
  $t_Lccrystal_site_Tab$__Mcp = new $c_Lccrystal_site_Tab$$anon$4();
  $t_Lccrystal_site_Tab$__AgentIngestion = new $c_Lccrystal_site_Tab$$anon$5();
  this.kg = new ($d_Lccrystal_site_Tab.r().C)([$s_Lccrystal_site_Tab$__Manifesto__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__Explorer__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__Quickstart__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__Mcp__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__AgentIngestion__Lccrystal_site_Tab()]);
}
$p = $c_Lccrystal_site_Tab$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_Tab$;
/** @constructor */
function $h_Lccrystal_site_Tab$() {
}
$h_Lccrystal_site_Tab$.prototype = $p;
$p.tr = (function() {
  return this.kg.o();
});
var $d_Lccrystal_site_Tab$ = new $TypeData().i($c_Lccrystal_site_Tab$, "ccrystal.site.Tab$", ({
  cB: 1,
  a0: 1,
  b6: 1
}));
var $n_Lccrystal_site_Tab$;
function $m_Lccrystal_site_Tab$() {
  if ((!$n_Lccrystal_site_Tab$)) {
    $n_Lccrystal_site_Tab$ = new $c_Lccrystal_site_Tab$();
  }
  return $n_Lccrystal_site_Tab$;
}
function $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario() {
  $m_Lccrystal_site_TabExplorer$Scenario$();
  return $t_Lccrystal_site_TabExplorer$Scenario$__Inception;
}
function $s_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike__Lccrystal_site_TabExplorer$Scenario() {
  $m_Lccrystal_site_TabExplorer$Scenario$();
  return $t_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike;
}
function $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario() {
  $m_Lccrystal_site_TabExplorer$Scenario$();
  return $t_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact;
}
/** @constructor */
function $c_Lccrystal_site_TabExplorer$Scenario$() {
  this.kh = null;
  $n_Lccrystal_site_TabExplorer$Scenario$ = this;
  $t_Lccrystal_site_TabExplorer$Scenario$__Inception = new $c_Lccrystal_site_TabExplorer$Scenario$$anon$1();
  $t_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike = new $c_Lccrystal_site_TabExplorer$Scenario$$anon$2();
  $t_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact = new $c_Lccrystal_site_TabExplorer$Scenario$$anon$3();
  this.kh = new ($d_Lccrystal_site_TabExplorer$Scenario.r().C)([$s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario(), $s_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike__Lccrystal_site_TabExplorer$Scenario(), $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario()]);
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$() {
}
$h_Lccrystal_site_TabExplorer$Scenario$.prototype = $p;
$p.ts = (function() {
  return this.kh.o();
});
var $d_Lccrystal_site_TabExplorer$Scenario$ = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$, "ccrystal.site.TabExplorer$Scenario$", ({
  cJ: 1,
  a0: 1,
  b6: 1
}));
var $n_Lccrystal_site_TabExplorer$Scenario$;
function $m_Lccrystal_site_TabExplorer$Scenario$() {
  if ((!$n_Lccrystal_site_TabExplorer$Scenario$)) {
    $n_Lccrystal_site_TabExplorer$Scenario$ = new $c_Lccrystal_site_TabExplorer$Scenario$();
  }
  return $n_Lccrystal_site_TabExplorer$Scenario$;
}
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.hU = null;
  this.ks = null;
  this.kt = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.hU = $m_scm_Buffer$().oO($m_sr_ScalaRunTime$().c(new ($d_F1.r().C)([])));
  this.ks = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    try {
      console.error(((this.eO(err) + "\n") + this.rS(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.kt = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ad : $x_1);
  }));
  this.sQ(this.ks);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.eO = (function(e) {
  try {
    var errorMessage = e.gF();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).jO() + ": ") + errorMessage);
});
$p.rS = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().kf(err.rT()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.r1 = (function(causes) {
  return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(causes.eM($m_s_$less$colon$less$().h9).a2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((e) => this.eO(e)))), "", "; ", ""));
});
$p.sQ = (function(fn) {
  this.hU.b4(fn);
});
$p.cK = (function(err) {
  var this$1 = this.hU;
  var it = this$1.r();
  while (it.u()) {
    var x0 = it.n();
    try {
      x0.i(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.kt;
      if (((x0 === null) ? (x$2 === null) : x0.y(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().tb(0.0, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  d2: 1,
  a0: 1,
  b6: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cH(true);
  $thiz.fB((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().pZ(onNext, $m_s_PartialFunction$().hb, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fy()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fy()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz) {
  return ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) > 0);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz) {
  var x = $thiz.ec();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_F0.r().C)([])));
    $thiz.fB(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aM: 1,
  aE: 1,
  a1: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.jp(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).ag(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().eG(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.lk = null;
  this.ll = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.sJ = (function() {
  if ((!this.ll)) {
    this.lk = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.ll = true;
  }
  return this.lk;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  dJ: 1,
  bk: 1,
  dW: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.no = null;
  this.io = null;
  this.no = key;
  this.io = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.ct = (function(element) {
  if ((!this.io.j())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.no, null, this.io, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  el: 1,
  U: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.fa = null;
  this.ip = null;
  this.iq = null;
  this.fa = eventProcessor;
  this.ip = ((ev) => {
    var processor = eventProcessor.fT;
    var this$2 = processor.i(ev);
    if ((!this$2.j())) {
      callback.i(this$2.N());
    }
  });
  this.iq = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.fa.fU;
    this$3.passive = outer.fa.h4;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.ct = (function(element) {
  this.qQ(element, false);
});
$p.qQ = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().qu(element.a7(), this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.im, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().sW(element.a7(), this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().tn(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gS(element.bS(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.i(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pT(element.bS(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner$1) => {
      activate.i(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.B = (function() {
  return (("EventListener(" + this.fa.es.fV) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  em: 1,
  U: 1,
  bn: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.nq = null;
  this.nr = null;
  this.np = null;
  this.nq = key;
  this.nr = value;
  this.np = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.ct = (function(element) {
  this.np.hy(element, this.nq, this.nr);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  en: 1,
  U: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.ns = null;
  this.nu = null;
  this.nt = null;
  this.ns = key;
  this.nu = values;
  this.nt = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.ct = (function(element) {
  this.jq(element);
});
$p.jq = (function(element) {
  element.pz(this.ns);
  var observable = this.nu;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((value) => {
    this.nt.hy(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().tc(element.bS(), observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  eo: 1,
  U: 1,
  bn: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.iz = null;
  this.nH = null;
  this.nI = null;
  this.nH = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().sg(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.nI = container;
  this.su();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.bS = (function() {
  return this.iz;
});
$p.jr = (function(x$0) {
  this.iz = x$0;
});
$p.su = (function() {
  this.iz.oB();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().eG(this, this.nH, (void 0));
});
$p.a7 = (function() {
  return this.nI;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  eG: 1,
  ay: 1,
  aO: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eK)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.Z.Z) {
    return ($thiz.Z.Q().jO() + "[]");
  } else {
    var name = $thiz.Z.N;
    var idx = ((name.length - 1) | 0);
    while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
      idx = ((idx - 1) | 0);
    }
    if (((idx >= 0) && ((((name.charCodeAt(idx) - 48) | 0) >>> 0) <= 9))) {
      idx = ((idx - 1) | 0);
      while (((idx >= 0) && ((((name.charCodeAt(idx) - 48) | 0) >>> 0) <= 9))) {
        idx = ((idx - 1) | 0);
      }
      while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
        idx = ((idx - 1) | 0);
      }
    }
    while (true) {
      if ((idx >= 0)) {
        var index$4 = idx;
        var currChar = name.charCodeAt(index$4);
        var $x_1 = ((currChar !== 36) && (currChar !== 46));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        idx = ((idx - 1) | 0);
      } else {
        break;
      }
    }
    var beginIndex = ((1 + idx) | 0);
    return name.substring(beginIndex);
  }
}
/** @constructor */
function $c_jl_Class($data) {
  this.iE = null;
  this.Z = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.B = (function() {
  return ((this.Z.Y ? "interface " : (this.Z.X ? "" : "class ")) + this.Z.N);
});
$p.jO = (function() {
  if ((this.iE === null)) {
    this.iE = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.iE;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  eS: 1,
  a: 1,
  a2: 1
}));
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().i($c_jl_Exception, "java.lang.Exception", ({
  E: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_s_$less$colon$less() {
}
$p = $c_s_$less$colon$less.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
}
$h_s_$less$colon$less.prototype = $p;
/** @constructor */
function $c_s_Predef$() {
  this.q9 = null;
  $n_s_Predef$ = this;
  this.q9 = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.t1 = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  fw: 1,
  fq: 1,
  fr: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.bp();
      break;
    }
    case 1: {
      return $thiz.bg();
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ff;
      break;
    }
    case 1: {
      return $thiz.fg;
      break;
    }
    case 2: {
      return $thiz.fh;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.fZ = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.fZ = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.as = (function(it) {
  return this.fZ.jE(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.at = (function() {
  return this.fZ.hH($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.dm = (function(elems) {
  return this.fZ.jE(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.hc = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.hc = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.as = (function(it) {
  return this.hc.as(it);
});
$p.at = (function() {
  return this.hc.at();
});
function $f_sc_IterableOps__headOption__s_Option($thiz) {
  var it = $thiz.r();
  return (it.u() ? new $c_s_Some(it.n()) : $m_s_None$());
}
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.G();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.r();
      while (it.u()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.n();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_IterableOps__map__F1__O($thiz, f) {
  return $thiz.br().as($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f));
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).jw(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().P : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.r();
  while ($thiz.u()) {
    if ((!those.u())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().x($thiz.n(), those.n()))) {
      return false;
    }
  }
  return (!those.u());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.P = null;
  $n_sc_Iterator$ = this;
  this.P = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.at = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.as = (function(source) {
  return source.r();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  fR: 1,
  F: 1,
  a: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.hf = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.hf = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.as = (function(it) {
  return this.hf.as(it);
});
$p.at = (function() {
  return this.hf.at();
});
/** @constructor */
function $c_sc_View$() {
}
$p = $c_sc_View$.prototype = new $h_O();
$p.constructor = $c_sc_View$;
/** @constructor */
function $h_sc_View$() {
}
$h_sc_View$.prototype = $p;
$p.pl = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((x3) => (() => x3.r()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().jH(it))));
});
$p.at = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2$2) => $m_sc_View$().pl(it$2$2))));
});
$p.as = (function(source) {
  return this.pl(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  g5: 1,
  F: 1,
  a: 1
}));
var $n_sc_View$;
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$();
  }
  return $n_sc_View$;
}
/** @constructor */
function $c_sci_BitmapIndexedMapNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.a3 = 0;
  this.ah = 0;
  this.aA = null;
  this.bO = null;
  this.bb = 0;
  this.bC = 0;
  this.a3 = dataMap;
  this.ah = nodeMap;
  this.aA = content;
  this.bO = originalHashes;
  this.bb = size;
  this.bC = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.b8 = (function() {
  return this.bb;
});
$p.e7 = (function() {
  return this.bC;
});
$p.e9 = (function(index) {
  return this.aA.b[(index << 1)];
});
$p.dp = (function(index) {
  return this.aA.b[((1 + (index << 1)) | 0)];
});
$p.jM = (function(index) {
  return new $c_T2(this.aA.b[(index << 1)], this.aA.b[((1 + (index << 1)) | 0)]);
});
$p.gE = (function(index) {
  return this.bO.b[index];
});
$p.cZ = (function(index) {
  return this.aA.b[((((this.aA.b.length - 1) | 0) - index) | 0)];
});
$p.jm = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().eT(keyHash, shift);
  var bitpos = $m_sci_Node$().e6(mask);
  if (((this.a3 & bitpos) !== 0)) {
    var index = $m_sci_Node$().d1(this.a3, mask, bitpos);
    if ($m_sr_BoxesRunTime$().x(key, this.e9(index))) {
      return this.dp(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.ah & bitpos) !== 0)) {
    return this.cZ($m_sci_Node$().d1(this.ah, mask, bitpos)).jm(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.jL = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().eT(keyHash, shift);
  var bitpos = $m_sci_Node$().e6(mask);
  if (((this.a3 & bitpos) !== 0)) {
    var index = $m_sci_Node$().d1(this.a3, mask, bitpos);
    return ($m_sr_BoxesRunTime$().x(key, this.e9(index)) ? this.dp(index) : f.U());
  } else {
    return (((this.ah & bitpos) !== 0) ? this.cZ($m_sci_Node$().d1(this.ah, mask, bitpos)).jL(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.U());
  }
});
$p.jx = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().eT(keyHash, shift);
  var bitpos = $m_sci_Node$().e6(mask);
  if (((this.a3 & bitpos) !== 0)) {
    var index = $m_sci_Node$().d1(this.a3, mask, bitpos);
    return ((this.bO.b[index] === originalHash) && $m_sr_BoxesRunTime$().x(key, this.e9(index)));
  } else {
    return (((this.ah & bitpos) !== 0) && this.cZ($m_sci_Node$().d1(this.ah, mask, bitpos)).jx(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.pW = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().eT(keyHash, shift);
  var bitpos = $m_sci_Node$().e6(mask);
  if (((this.a3 & bitpos) !== 0)) {
    var index = $m_sci_Node$().d1(this.a3, mask, bitpos);
    var key0 = this.e9(index);
    var key0UnimprovedHash = this.gE(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().x(key0, key))) {
      if (replaceValue) {
        var value0 = this.dp(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.ra(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.dp(index);
      var key0Hash = $m_sc_Hashing$().cG(key0UnimprovedHash);
      return this.r8(bitpos, key0Hash, this.k0(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.ah & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().d1(this.ah, mask, bitpos);
    var subNode = this.cZ(index$2);
    var subNodeNew$2 = subNode.pX(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.r9(bitpos, subNode, subNodeNew$2));
  } else {
    return this.r7(bitpos, key, originalHash, keyHash, value);
  }
});
$p.k0 = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().jI(new $c_sjsr_WrappedVarArgs([new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().eT(keyHash0, shift);
    var mask1 = $m_sci_Node$().eT(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().e6(mask0) | $m_sci_Node$().e6(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().e6(mask0);
      var node = this.k0(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().iK, node.b8(), node.e7());
    }
  }
});
$p.jP = (function() {
  return (this.ah !== 0);
});
$p.k2 = (function() {
  return $m_jl_Integer$().cW(this.ah);
});
$p.hE = (function() {
  return (this.a3 !== 0);
});
$p.k7 = (function() {
  return $m_jl_Integer$().cW(this.a3);
});
$p.gz = (function(bitpos) {
  return $m_jl_Integer$().cW((this.a3 & ((bitpos - 1) | 0)));
});
$p.k3 = (function(bitpos) {
  return $m_jl_Integer$().cW((this.ah & ((bitpos - 1) | 0)));
});
$p.ra = (function(bitpos, newKey, newValue) {
  var dataIx = this.gz(bitpos);
  var idx = (dataIx << 1);
  var src = this.aA;
  var dst = new $ac_O(src.b.length);
  var length = src.b.length;
  src.F(0, dst, 0, length);
  dst.b[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.a3, this.ah, dst, this.bO, this.bb, this.bC);
});
$p.r9 = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.aA.b.length - 1) | 0) - this.k3(bitpos)) | 0);
  var src = this.aA;
  var dst = new $ac_O(src.b.length);
  var length = src.b.length;
  src.F(0, dst, 0, length);
  dst.b[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.a3, this.ah, dst, this.bO, ((((this.bb - oldNode.b8()) | 0) + newNode.b8()) | 0), ((((this.bC - oldNode.e7()) | 0) + newNode.e7()) | 0));
});
$p.r7 = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.gz(bitpos);
  var idx = (dataIx << 1);
  var src = this.aA;
  var dst = new $ac_O(((2 + src.b.length) | 0));
  src.F(0, dst, 0, idx);
  dst.b[idx] = key;
  dst.b[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.b.length - idx) | 0);
  src.F(idx, dst, destPos, length);
  var dstHashes = this.sa(this.bO, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.a3 | bitpos), this.ah, dst, dstHashes, ((1 + this.bb) | 0), ((this.bC + keyHash) | 0));
});
$p.st = (function(bitpos, keyHash, node) {
  var dataIx = this.gz(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.aA.b.length - 2) | 0) - this.k3(bitpos)) | 0);
  var src = this.aA;
  var dst = new $ac_O(((src.b.length - 1) | 0));
  src.F(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.F(srcPos, dst, idxOld, length);
  dst.b[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.b.length - idxNew) | 0) - 2) | 0);
  src.F(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pF(this.bO, dataIx);
  this.a3 = (this.a3 ^ bitpos);
  this.ah = (this.ah | bitpos);
  this.aA = dst;
  this.bO = dstHashes;
  this.bb = ((((this.bb - 1) | 0) + node.b8()) | 0);
  this.bC = ((((this.bC - keyHash) | 0) + node.e7()) | 0);
  return this;
});
$p.r8 = (function(bitpos, keyHash, node) {
  var dataIx = this.gz(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.aA.b.length - 2) | 0) - this.k3(bitpos)) | 0);
  var src = this.aA;
  var dst = new $ac_O(((src.b.length - 1) | 0));
  src.F(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.F(srcPos, dst, idxOld, length);
  dst.b[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.b.length - idxNew) | 0) - 2) | 0);
  src.F(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pF(this.bO, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.a3 ^ bitpos), (this.ah | bitpos), dst, dstHashes, ((((this.bb - 1) | 0) + node.b8()) | 0), ((((this.bC - keyHash) | 0) + node.e7()) | 0));
});
$p.ag = (function(f) {
  var iN = $m_jl_Integer$().cW(this.a3);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.i(this.jM(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().cW(this.ah);
  var j = 0;
  while ((j < jN)) {
    this.cZ(j).ag(f);
    j = ((1 + j) | 0);
  }
});
$p.eN = (function(f) {
  var iN = $m_jl_Integer$().cW(this.a3);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.eI(this.e9(i$1), this.dp(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().cW(this.ah);
  var j = 0;
  while ((j < jN)) {
    this.cZ(j).eN(f);
    j = ((1 + j) | 0);
  }
});
$p.y = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bC === that.bC) && (this.ah === that.ah)) && (this.a3 === that.a3)) && (this.bb === that.bb)) && $m_ju_Arrays$().jA(this.bO, that.bO))) {
      var a1 = this.aA;
      var a2 = that.aA;
      var length = this.aA.b.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().x(a1.b[i], a2.b[i]);
          i = ((1 + i) | 0);
        }
        return isEqual;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.D = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.B = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.p6 = (function() {
  var this$1 = this.aA;
  var contentClone = this$1.o();
  var contentLength = contentClone.b.length;
  var i$1 = ($m_jl_Integer$().cW(this.a3) << 1);
  while ((i$1 < contentLength)) {
    contentClone.b[i$1] = contentClone.b[i$1].p7();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.a3, this.ah, contentClone, this.bO.o(), this.bb, this.bC);
});
$p.p7 = (function() {
  return this.p6();
});
$p.pX = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.pW(key, value, originalHash, hash, shift, replaceValue);
});
$p.jK = (function(index) {
  return this.cZ(index);
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bX)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  bX: 1,
  c6: 1,
  b1: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.j0 = 0;
  this.dL = 0;
  this.ai = null;
  this.j0 = originalHash;
  this.dL = hash;
  this.ai = content;
  $m_s_Predef$().t1((this.ai.A() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.fx = (function(key) {
  var iter = this.ai.r();
  var i = 0;
  while (iter.u()) {
    if ($m_sr_BoxesRunTime$().x(iter.n().bp(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.b8 = (function() {
  return this.ai.A();
});
$p.jm = (function(key, originalHash, hash, shift) {
  var this$1 = this.rM(key, originalHash, hash, shift);
  if (this$1.j()) {
    $m_sc_Iterator$().P.n();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.N();
  }
});
$p.rM = (function(key, originalHash, hash, shift) {
  if ((this.dL === hash)) {
    var index = this.fx(key);
    return ((index >= 0) ? new $c_s_Some(this.ai.C(index).bg()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.jL = (function(key, originalHash, hash, shift, f) {
  if ((this.dL === hash)) {
    var x1 = this.fx(key);
    return ((x1 === (-1)) ? f.U() : this.ai.C(x1).bg());
  } else {
    return f.U();
  }
});
$p.jx = (function(key, originalHash, hash, shift) {
  return ((this.dL === hash) && (this.fx(key) >= 0));
});
$p.pX = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.fx(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.ai.C(index).bg(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ai.eh(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ai.e5(new $c_T2(key, value))));
});
$p.jP = (function() {
  return false;
});
$p.k2 = (function() {
  return 0;
});
$p.cZ = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.hE = (function() {
  return true;
});
$p.k7 = (function() {
  return this.ai.A();
});
$p.e9 = (function(index) {
  return this.ai.C(index).bp();
});
$p.dp = (function(index) {
  return this.ai.C(index).bg();
});
$p.jM = (function(index) {
  return this.ai.C(index);
});
$p.gE = (function(index) {
  return this.j0;
});
$p.ag = (function(f) {
  this.ai.ag(f);
});
$p.eN = (function(f) {
  this.ai.ag(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bp();
      var v = x0$1$2$2.bg();
      return f.eI(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.y = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.dL === that.dL) && (this.ai.A() === that.ai.A()))) {
      var iter = this.ai.r();
      while (iter.u()) {
        var x1$2 = iter.n();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.bp();
        var value = x1$2.bg();
        var index = that.fx(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().x(value, that.ai.C(index).bg())))) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.D = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.B = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.e7 = (function() {
  return Math.imul(this.ai.A(), this.dL);
});
$p.p7 = (function() {
  return new $c_sci_HashCollisionMapNode(this.j0, this.dL, this.ai);
});
$p.jK = (function(index) {
  return this.cZ(index);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  bZ: 1,
  c6: 1,
  b1: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.j1 = null;
  $n_sci_HashMap$ = this;
  this.j1 = new $c_sci_HashMap($m_sci_MapNode$().o9);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.rF = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().jl(source).k8());
});
$p.at = (function() {
  return new $c_sci_HashMapBuilder();
});
$p.as = (function(it) {
  return this.rF(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  gc: 1,
  aU: 1,
  a: 1
}));
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$();
  }
  return $n_sci_HashMap$;
}
/** @constructor */
function $c_sci_Map$() {
}
$p = $c_sci_Map$.prototype = new $h_O();
$p.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
}
$h_sci_Map$.prototype = $p;
$p.rH = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.j()) {
      return $m_sci_Map$EmptyMap$();
    }
  }
  if ((it instanceof $c_sci_HashMap)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map1)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map2)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map3)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map4)) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  return new $c_sci_MapBuilderImpl().oC(it).pJ();
});
$p.at = (function() {
  return new $c_sci_MapBuilderImpl();
});
$p.as = (function(it) {
  return this.rH(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  gt: 1,
  aU: 1,
  a: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.G();
  if ((x1 !== (-1))) {
    var that = ((x1 + delta) | 0);
    $thiz.bk(((that < 0) ? 0 : that));
  }
}
function $f_scm_Builder__sizeHintBounded__I__sc_Iterable__V($thiz, size, boundingColl) {
  var s = boundingColl.G();
  if ((s !== (-1))) {
    $thiz.bk(((s < size) ? s : size));
  }
}
/** @constructor */
function $c_scm_HashSet$() {
}
$p = $c_scm_HashSet$.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$;
/** @constructor */
function $h_scm_HashSet$() {
}
$h_scm_HashSet$.prototype = $p;
$p.rI = (function(it) {
  var k = it.G();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).oF(it);
});
$p.at = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.as = (function(source) {
  return this.rI(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  hd: 1,
  F: 1,
  a: 1
}));
var $n_scm_HashSet$;
function $m_scm_HashSet$() {
  if ((!$n_scm_HashSet$)) {
    $n_scm_HashSet$ = new $c_scm_HashSet$();
  }
  return $n_scm_HashSet$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hs)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.oo = null;
  this.oo = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.U = (function() {
  return (0, this.oo)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  hR: 1,
  cm: 1,
  aQ: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.op = null;
  this.op = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.i = (function(x0) {
  return (0, this.op)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  hS: 1,
  cn: 1,
  f: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.oq = null;
  this.oq = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.eI = (function(x0, x1) {
  return (0, this.oq)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  hT: 1,
  co: 1,
  aR: 1
}));
/** @constructor */
function $c_sr_AbstractPartialFunction() {
}
$p = $c_sr_AbstractPartialFunction.prototype = new $h_O();
$p.constructor = $c_sr_AbstractPartialFunction;
/** @constructor */
function $h_sr_AbstractPartialFunction() {
}
$h_sr_AbstractPartialFunction.prototype = $p;
$p.B = (function() {
  return "<function1>";
});
$p.i = (function(x) {
  return this.c6(x, $m_s_PartialFunction$().hb);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  i0: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.pp = (function(f) {
  return ((arg1$2) => f.i(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  i7: 1,
  i8: 1,
  i9: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
/** @constructor */
function $c_sjsr_AnonFunction0() {
}
$p = $c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
}
$h_sjsr_AnonFunction0.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction1() {
}
$p = $c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
$h_sjsr_AnonFunction1.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction2() {
}
$p = $c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
}
$h_sjsr_AnonFunction2.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction3() {
}
$p = $c_sjsr_AnonFunction3.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sjsr_AnonFunction3;
/** @constructor */
function $h_sjsr_AnonFunction3() {
}
$h_sjsr_AnonFunction3.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction4() {
}
$p = $c_sjsr_AnonFunction4.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sjsr_AnonFunction4;
/** @constructor */
function $h_sjsr_AnonFunction4() {
}
$h_sjsr_AnonFunction4.prototype = $p;
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.is)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parentParam$2, onTryParam$1, outer) {
  this.kr = null;
  this.hT = null;
  this.kr = onTryParam$1;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.hT = parentParam$2;
}
$p = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2() {
}
$h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = $p;
$p.hI = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.k5 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gL = (function(nextValue, transaction) {
  this.kr.eI(nextValue, transaction);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2, "com.raquo.airstream.common.InternalParentObserver$$anon$2", ({
  cY: 1,
  aC: 1,
  cW: 1,
  b7: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.kw = null;
  this.ku = false;
  this.hV = null;
  this.kv = null;
  this.kw = onNextParam$2;
  this.ku = handleObserverErrors$3;
  this.hV = onErrorParam$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kv = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.eb = (function() {
  return this.kv;
});
$p.e8 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.dr = (function(nextValue) {
  try {
    this.kw.i(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.ku) {
      this.gI(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cK(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.gI = (function(error) {
  try {
    if (this.hV.cw(error)) {
      this.hV.i(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cK(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cK(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.ed = (function(nextValue) {
  nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((error) => {
    this.gI(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.dr(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  d4: 1,
  aE: 1,
  a1: 1,
  aM: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.hW = null;
  this.kx = false;
  this.ky = null;
  this.hW = onTryParam$2;
  this.kx = handleObserverErrors$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.ky = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.eb = (function() {
  return this.ky;
});
$p.e8 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.dr = (function(nextValue) {
  this.ed(new $c_s_util_Success(nextValue));
});
$p.gI = (function(error) {
  this.ed(new $c_s_util_Failure(error));
});
$p.ed = (function(nextValue) {
  try {
    if (this.hW.cw(nextValue)) {
      this.hW.i(nextValue);
    } else {
      nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cK(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.kx && nextValue.pt())) {
      this.gI(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cK(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cK(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  d5: 1,
  aE: 1,
  a1: 1,
  aM: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.lm = null;
  this.ln = false;
  this.ly = null;
  this.lz = false;
  this.lC = null;
  this.lD = false;
  this.lO = null;
  this.lP = false;
  this.lo = null;
  this.lp = false;
  this.lq = null;
  this.lr = false;
  this.ls = null;
  this.lt = false;
  this.lu = null;
  this.lv = false;
  this.lw = null;
  this.lx = false;
  this.lA = null;
  this.lB = false;
  this.lE = null;
  this.lF = false;
  this.lG = null;
  this.lN = false;
  this.lH = null;
  this.lI = false;
  this.lJ = null;
  this.lK = false;
  this.lL = null;
  this.lM = false;
  this.lQ = null;
  this.lR = false;
  this.lS = null;
  this.lT = false;
  this.dx = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$svg$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$svg$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$svg$() {
}
$h_Lcom_raquo_laminar_api_Laminar$svg$.prototype = $p;
$p.qV = (function() {
  if ((!this.ln)) {
    this.lm = new $c_Lcom_raquo_laminar_tags_SvgTag("circle", false);
    this.ln = true;
  }
  return this.lm;
});
$p.cd = (function() {
  if ((!this.lz)) {
    this.ly = new $c_Lcom_raquo_laminar_tags_SvgTag("path", false);
    this.lz = true;
  }
  return this.ly;
});
$p.sM = (function() {
  if ((!this.lD)) {
    this.lC = new $c_Lcom_raquo_laminar_tags_SvgTag("polyline", false);
    this.lD = true;
  }
  return this.lC;
});
$p.eg = (function() {
  if ((!this.lP)) {
    this.lO = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.lP = true;
  }
  return this.lO;
});
$p.rf = (function() {
  if ((!this.lp)) {
    this.lo = new $c_Lcom_raquo_laminar_keys_SvgAttr("cx", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lp = true;
  }
  return this.lo;
});
$p.rg = (function() {
  if ((!this.lr)) {
    this.lq = new $c_Lcom_raquo_laminar_keys_SvgAttr("cy", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lr = true;
  }
  return this.lq;
});
$p.c9 = (function() {
  if ((!this.lt)) {
    this.ls = new $c_Lcom_raquo_laminar_keys_SvgAttr("d", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lt = true;
  }
  return this.ls;
});
$p.eL = (function() {
  if ((!this.lv)) {
    this.lu = new $c_Lcom_raquo_laminar_keys_SvgAttr("fill", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lv = true;
  }
  return this.lu;
});
$p.eQ = (function() {
  if ((!this.lx)) {
    this.lw = new $c_Lcom_raquo_laminar_keys_SvgAttr("height", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lx = true;
  }
  return this.lw;
});
$p.sL = (function() {
  if ((!this.lB)) {
    this.lA = new $c_Lcom_raquo_laminar_keys_SvgAttr("points", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lB = true;
  }
  return this.lA;
});
$p.sO = (function() {
  if ((!this.lF)) {
    this.lE = new $c_Lcom_raquo_laminar_keys_SvgAttr("r", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lF = true;
  }
  return this.lE;
});
$p.hK = (function() {
  if ((!this.lN)) {
    this.lG = new $c_Lcom_raquo_laminar_keys_SvgAttr("stroke", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lN = true;
  }
  return this.lG;
});
$p.ka = (function() {
  if ((!this.lI)) {
    this.lH = new $c_Lcom_raquo_laminar_keys_SvgAttr("stroke-linecap", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lI = true;
  }
  return this.lH;
});
$p.hL = (function() {
  if ((!this.lK)) {
    this.lJ = new $c_Lcom_raquo_laminar_keys_SvgAttr("stroke-linejoin", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lK = true;
  }
  return this.lJ;
});
$p.hM = (function() {
  if ((!this.lM)) {
    this.lL = new $c_Lcom_raquo_laminar_keys_SvgAttr("stroke-width", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lM = true;
  }
  return this.lL;
});
$p.eZ = (function() {
  if ((!this.lR)) {
    this.lQ = new $c_Lcom_raquo_laminar_keys_SvgAttr("viewBox", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lR = true;
  }
  return this.lQ;
});
$p.f0 = (function() {
  if ((!this.lT)) {
    this.lS = new $c_Lcom_raquo_laminar_keys_SvgAttr("width", $m_Lcom_raquo_laminar_codecs_package$().aZ, $m_s_None$());
    this.lT = true;
  }
  return this.lS;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  dK: 1,
  e0: 1,
  dT: 1,
  dV: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.a = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.a = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  dO: 1,
  bi: 1,
  bl: 1,
  bh: 1
}));
var $n_Lcom_raquo_laminar_api_package$;
function $m_Lcom_raquo_laminar_api_package$() {
  if ((!$n_Lcom_raquo_laminar_api_package$)) {
    $n_Lcom_raquo_laminar_api_package$ = new $c_Lcom_raquo_laminar_api_package$();
  }
  return $n_Lcom_raquo_laminar_api_package$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_DynamicInserter(initialContext, preferStrictMode, insertFn, hooks) {
  this.ni = null;
  this.nk = false;
  this.nj = null;
  this.id = null;
  this.ni = initialContext;
  this.nk = preferStrictMode;
  this.nj = insertFn;
  this.id = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.jq = (function(element) {
  var this$1 = this.ni;
  var insertContext = (this$1.j() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().t2(element, this.nk, this.id) : this$1.N());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((mountContext) => this.nj.hy(insertContext, mountContext.im, this.id)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gS(element.bS(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.i(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.ct = (function(element) {
  this.jq(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  e4: 1,
  U: 1,
  e8: 1,
  e5: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.is = null;
  this.it = null;
  this.is = $m_s_None$();
  this.it = $m_Lcom_raquo_laminar_DomApi$().rb(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.fr = (function() {
  return this.is;
});
$p.ef = (function(maybeNextParent) {
  this.is = maybeNextParent;
});
$p.ej = (function(maybeNextParent) {
});
$p.ct = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eG(parentNode, this, (void 0));
});
$p.a7 = (function() {
  return this.it;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  eA: 1,
  ay: 1,
  U: 1,
  aF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.iA = null;
  this.h7 = null;
  this.iA = $m_s_None$();
  this.h7 = $m_Lcom_raquo_laminar_DomApi$().rd(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.fr = (function() {
  return this.iA;
});
$p.ef = (function(maybeNextParent) {
  this.iA = maybeNextParent;
});
$p.ej = (function(maybeNextParent) {
});
$p.ct = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eG(parentNode, this, (void 0));
});
$p.th = (function() {
  return this.h7.data;
});
$p.a7 = (function() {
  return this.h7;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  eH: 1,
  ay: 1,
  U: 1,
  aF: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Boolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.br)));
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  br: 1,
  a: 1,
  a6: 1,
  a2: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bs)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bs: 1,
  a: 1,
  a6: 1,
  a2: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eX)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eY)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.z = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  $thiz.z = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.z = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.oI = (function(str) {
  var str$1 = $m_jl_String$().sx(str, 0, str.b.length);
  this.z = (("" + this.z) + str$1);
  return this;
});
$p.B = (function() {
  return this.z;
});
$p.A = (function() {
  return this.z.length;
});
$p.oZ = (function(index) {
  return this.z.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  f7: 1,
  aP: 1,
  eN: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f9)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fc)));
}
/** @constructor */
function $c_s_$eq$colon$eq() {
}
$p = $c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$p.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
}
$h_s_$eq$colon$eq.prototype = $p;
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
}
$p = $c_s_PartialFunction$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
}
$h_s_PartialFunction$$anon$1.prototype = $p;
$p.c6 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.B = (function() {
  return "<function1>";
});
$p.cw = (function(x) {
  return false;
});
$p.jn = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.i = (function(v1) {
  this.jn(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  fv: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.r = (function() {
  return this;
});
$p.jw = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.dn = (function(n) {
  return this.gQ(n, (-1));
});
$p.gQ = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.B = (function() {
  return "<iterator>";
});
$p.ag = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.c8 = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.e4 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.eV = (function() {
  return $m_sci_Nil$().ee(this);
});
$p.G = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Map$() {
  this.hf = null;
  this.o1 = null;
  this.o2 = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.o1 = $ct_O__(new $c_O());
  this.o2 = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sc_Map$().o1));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  fZ: 1,
  g0: 1,
  aU: 1,
  a: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.et = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.et = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.oO = (function(elems) {
  return this.et.dm(elems);
});
$p.hD = (function(it) {
  return this.et.as(it);
});
$p.at = (function() {
  return this.et.at();
});
$p.as = (function(source) {
  return this.hD(source);
});
$p.dm = (function(elems) {
  return this.oO(elems);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cE(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.gC(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bs(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bs(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.G();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.G();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.r(), that);
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.br().at();
  var it = $thiz.r();
  while (it.u()) {
    b.b4(f.i(it.n()));
  }
  return b.b6();
}
function $f_sc_StrictOptimizedIterableOps__flatten__F1__O($thiz, toIterableOnce) {
  var b = $thiz.br().at();
  var it = $thiz.r();
  while (it.u()) {
    b.bh(toIterableOnce.i(it.n()));
  }
  return b.b6();
}
function $f_sc_StrictOptimizedIterableOps__takeRight__I__O($thiz, n) {
  var b = $thiz.eU();
  $f_scm_Builder__sizeHintBounded__I__sc_Iterable__V(b, n, $thiz);
  var lead = $thiz.r().dn(n);
  var it = $thiz.r();
  while (lead.u()) {
    lead.n();
    it.n();
  }
  while (it.u()) {
    b.b4(it.n());
  }
  return b.b6();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.hc = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.rG = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.as.call(this, it));
});
$p.as = (function(it) {
  return this.rG(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  gi: 1,
  fQ: 1,
  F: 1,
  a: 1
}));
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$();
  }
  return $n_sci_Iterable$;
}
/** @constructor */
function $c_sci_LazyList$() {
  this.V = null;
  $n_sci_LazyList$ = this;
  this.V = $ct_sci_LazyList__O__(new $c_sci_LazyList(), $m_sci_LazyList$EmptyMarker$());
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.dm = (function(elems) {
  return this.jH(elems);
});
$p.pM = (function(ll, f) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef) => (() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var rest = new $c_sr_ObjectRef(restRef.ay);
    while (((!itHasNext) && (!(rest.ay.aJ() === $m_sci_LazyList$().V)))) {
      it.ay = f.i(rest.ay.w()).r();
      itHasNext = it.ay.u();
      if ((!itHasNext)) {
        rest.ay = rest.ay.b9();
        restRef.ay = rest.ay;
      }
    }
    if (itHasNext) {
      var head = it.ay.n();
      rest.ay = rest.ay.b9();
      restRef.ay = rest.ay;
      $m_sci_LazyList$();
      return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), head, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().k9(it.ay, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().pM(rest.ay, f)))))))));
    } else {
      return $m_sci_LazyList$().V;
    }
  }))(new $c_sr_ObjectRef(ll))));
});
$p.t6 = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.ay;
    var i = iRef.eD;
    while (((i > 0) && (!(rest.aJ() === $m_sci_LazyList$().V)))) {
      rest = rest.b9();
      restRef.ay = rest;
      i = ((i - 1) | 0);
      iRef.eD = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.jH = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.G() === 0) ? this.V : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().pL(coll.r()))))));
});
$p.k9 = (function(it, suffix) {
  return (it.u() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.n(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().k9(it, suffix))))) : suffix.U());
});
$p.pL = (function(it) {
  return (it.u() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.n(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().pL(it))))) : this.V);
});
$p.at = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.as = (function(source) {
  return this.jH(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  gj: 1,
  W: 1,
  F: 1,
  a: 1
}));
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$();
  }
  return $n_sci_LazyList$;
}
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.ge = null;
  this.oi = null;
  this.ge = outer;
  this.oi = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.qB = (function(x) {
  this.ge.b4(x);
  return this;
});
$p.qr = (function(xs) {
  this.ge.bh(xs);
  return this;
});
$p.bk = (function(size) {
  this.ge.bk(size);
});
$p.b6 = (function() {
  return this.oi.i(this.ge.b6());
});
$p.bh = (function(elems) {
  return this.qr(elems);
});
$p.b4 = (function(elem) {
  return this.qB(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  h8: 1,
  M: 1,
  I: 1,
  G: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.dY = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.dY = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.bk = (function(size) {
});
$p.qC = (function(elem) {
  this.dY.b4(elem);
  return this;
});
$p.qs = (function(xs) {
  this.dY.bh(xs);
  return this;
});
$p.bh = (function(elems) {
  return this.qs(elems);
});
$p.b4 = (function(elem) {
  return this.qC(elem);
});
$p.b6 = (function() {
  return this.dY;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  b4: 1,
  M: 1,
  I: 1,
  G: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(f) {
  this.ot = null;
  this.ot = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d() {
}
$h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = $p;
$p.U = (function() {
  return (0, this.ot)();
});
var $d_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d, "scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d", ({
  ig: 1,
  ie: 1,
  cm: 1,
  aQ: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(f) {
  this.ou = null;
  this.ou = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1() {
}
$h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = $p;
$p.i = (function(x0) {
  return (0, this.ou)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1 = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1, "scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1", ({
  ii: 1,
  ih: 1,
  cn: 1,
  f: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(f) {
  this.ov = null;
  this.ov = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7() {
}
$h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = $p;
$p.eI = (function(x0, x1) {
  return (0, this.ov)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7, "scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7", ({
  ik: 1,
  ij: 1,
  co: 1,
  aR: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(f) {
  this.ow = null;
  this.ow = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96() {
}
$h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = $p;
$p.hy = (function(x0, x1, x2) {
  return (0, this.ow)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96, "scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96", ({
  im: 1,
  il: 1,
  hU: 1,
  fo: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c(f) {
  this.ox = null;
  this.ox = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c() {
}
$h_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c.prototype = $p;
$p.qG = (function(x0, x1, x2, x3) {
  return (0, this.ox)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c, "scala.scalajs.runtime.AnonFunction4.$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c", ({
  ip: 1,
  io: 1,
  hV: 1,
  fp: 1
}));
/** @constructor */
function $c_s_util_Try() {
}
$p = $c_s_util_Try.prototype = new $h_O();
$p.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
}
$h_s_util_Try.prototype = $p;
function $ct_Lccrystal_site_Tab__T__T__T__($thiz, id, label, icon) {
  $thiz.el = label;
  $thiz.ek = icon;
  return $thiz;
}
/** @constructor */
function $c_Lccrystal_site_Tab() {
  this.el = null;
  this.ek = null;
}
$p = $c_Lccrystal_site_Tab.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_Tab;
/** @constructor */
function $h_Lccrystal_site_Tab() {
}
$h_Lccrystal_site_Tab.prototype = $p;
$p.bA = (function() {
  return new $c_s_Product$$anon$1(this);
});
var $d_Lccrystal_site_Tab = new $TypeData().i(0, "ccrystal.site.Tab", ({
  ak: 1,
  d: 1,
  u: 1,
  a: 1,
  a5: 1
}));
function $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__($thiz, id, title, desc) {
  $thiz.fK = title;
  return $thiz;
}
/** @constructor */
function $c_Lccrystal_site_TabExplorer$Scenario() {
  this.fK = null;
}
$p = $c_Lccrystal_site_TabExplorer$Scenario.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario() {
}
$h_Lccrystal_site_TabExplorer$Scenario.prototype = $p;
$p.bA = (function() {
  return new $c_s_Product$$anon$1(this);
});
var $d_Lccrystal_site_TabExplorer$Scenario = new $TypeData().i(0, "ccrystal.site.TabExplorer$Scenario", ({
  aB: 1,
  d: 1,
  u: 1,
  a: 1,
  a5: 1
}));
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.gv($m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gw($m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.f1(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.gH(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.bt || (!when))) {
    var $x_1 = f();
  } else {
    this$2.bt = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.bt = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.cY();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.d2();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.bt || (!when))) {
    f();
  } else {
    this$3.bt = true;
    try {
      f();
    } finally {
      this$3.bt = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pG($thiz.d2(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pG($thiz.cY(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.gT())) {
    $thiz.gM();
    $thiz.f1(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.gJ();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.gK();
    $thiz.f1(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cY();
  var $x_1 = this$.length;
  var this$$1 = $thiz.d2();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.kA = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kA = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.sd = (function(x) {
  return ((x !== null) || false);
});
$p.qL = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.kA, x, _$1);
  }))), (void 0)) : default$1.i(x));
});
$p.cw = (function(x) {
  return this.sd(x);
});
$p.c6 = (function(x, default$1) {
  return this.qL(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  dg: 1,
  aL: 1,
  f: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.dv = $m_Lcom_raquo_airstream_core_Observer$().rK(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $thiz.dv.ed(tryValue);
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.l9 = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.l9 = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.sf = (function(x) {
  return true;
});
$p.qN = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.l9.t7(x, _$1);
  })));
});
$p.cw = (function(x) {
  return this.sf(x);
});
$p.c6 = (function(x, default$1) {
  return this.qN(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  dx: 1,
  aL: 1,
  f: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$$anon$1(outer) {
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
}
$p = $c_Lcom_raquo_laminar_DomApi$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$$anon$1() {
}
$h_Lcom_raquo_laminar_DomApi$$anon$1.prototype = $p;
$p.cw = (function(x) {
  return (((typeof x) === "boolean") && true);
});
$p.c6 = (function(x, default$1) {
  return (((typeof x) === "boolean") ? (!(!x)) : default$1.i(x));
});
var $d_Lcom_raquo_laminar_DomApi$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$$anon$1, "com.raquo.laminar.DomApi$$anon$1", ({
  dE: 1,
  aL: 1,
  f: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.p5(new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.bS().oB();
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.bS().rh();
  }))));
  $thiz.jt((void 0));
  $thiz.js($m_sci_Map$EmptyMap$());
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.fs() === (void 0))) {
    $thiz.jt($m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener]))));
  } else if (unsafePrepend) {
    var x$1 = $thiz.fs();
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.fs();
    if ((x$2 === (void 0))) {
      var $x_2;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_2 = x$2;
    }
    $x_2.push(listener);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V($thiz, index) {
  var x = $thiz.fs();
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.fs();
  if ((x === (void 0))) {
    return (-1);
  } else {
    var found = false;
    var ix = 0;
    while (((!found) && (ix < (x.length | 0)))) {
      var x$1 = x[ix];
      if (((x$1 === null) ? (listener === null) : $dp_equals__O__Z(x$1, listener))) {
        found = true;
      } else {
        ix = ((1 + ix) | 0);
      }
    }
    return (found ? ix : (-1));
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__compositeValueItems__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List($thiz, prop, reason) {
  return $thiz.gx().d0(prop, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$()))).r0(new $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V($thiz, key, reason, addItems, removeItems) {
  var keyItemsWithReason = $thiz.gx().d0(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.j())) {
      var x0 = these.w();
      var x = x0.bp();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.bg();
        if ((!((x$3 === null) ? (reason === null) : $dp_equals__O__Z(x$3, reason)))) {
          var $x_1 = true;
        } else {
          var $x_1 = (reason === null);
        }
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        return true;
      }
      these = these.v();
    }
    return false;
  });
  var itemsToAdd = $f_sc_SeqOps__distinct__O(addItems);
  var l = removeItems;
  block: {
    var result;
    while (true) {
      if (l.j()) {
        var result = $m_sci_Nil$();
        break;
      } else {
        var h = l.w();
        var t = l.v();
        if ((!(!f(h)))) {
          l = t;
          continue;
        }
        var start = l;
        var remaining = t;
        while (true) {
          if (remaining.j()) {
            var result = start;
            break block;
          } else {
            var x$1 = remaining.w();
            if ((!(!(!f(x$1))))) {
              remaining = remaining.v();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.w(), $m_sci_Nil$());
            var toProcess = start.v();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.w(), $m_sci_Nil$());
              currentLast.a0 = newElem;
              currentLast = newElem;
              toProcess = toProcess.v();
            }
            var next = firstMiss.v();
            var nextToCopy = next;
            while ((!next.j())) {
              var head = next.w();
              if ((!(!(!f(head))))) {
                next = next.v();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.w(), $m_sci_Nil$());
                  currentLast.a0 = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.v();
                }
                nextToCopy = next.v();
                next = next.v();
              }
            }
            if ((!nextToCopy.j())) {
              currentLast.a0 = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.gx().d0(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.bj(t$1.bp()));
  var l$1 = this$1;
  block$2: {
    var result$1;
    while (true) {
      if (l$1.j()) {
        var result$1 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.w();
        var t$2 = l$1.v();
        if ((!(!f$1(h$1)))) {
          l$1 = t$2;
          continue;
        }
        var start$1 = l$1;
        var remaining$1 = t$2;
        while (true) {
          if (remaining$1.j()) {
            var result$1 = start$1;
            break block$2;
          } else {
            var x$2 = remaining$1.w();
            if ((!(!(!f$1(x$2))))) {
              remaining$1 = remaining$1.v();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.w(), $m_sci_Nil$());
            var toProcess$1 = start$1.v();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.w(), $m_sci_Nil$());
              currentLast$1.a0 = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.v();
            }
            var next$1 = firstMiss$1.v();
            var nextToCopy$1 = next$1;
            while ((!next$1.j())) {
              var head$1 = next$1.w();
              if ((!(!(!f$1(head$1))))) {
                next$1 = next$1.v();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.w(), $m_sci_Nil$());
                  currentLast$1.a0 = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.v();
                }
                nextToCopy$1 = next$1.v();
                next$1 = next$1.v();
              }
            }
            if ((!nextToCopy$1.j())) {
              currentLast$1.a0 = nextToCopy$1;
            }
            var result$1 = newHead$1;
            break block$2;
          }
        }
      }
    }
  }
  var f$2 = ((_$2) => new $c_T2(_$2, reason));
  if ((itemsToAdd === $m_sci_Nil$())) {
    var $x_2 = $m_sci_Nil$();
  } else {
    var x0$1 = itemsToAdd.w();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.v();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.w();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.a0 = nx;
      t$3 = nx;
      rest = rest.v();
    }
    var $x_2 = h$2;
  }
  var newItems = result$1.oK($x_2);
  var domValues = key.ie.pa(key.nl.i($thiz));
  var f$3 = ((elem) => result.bj(elem));
  var l$2 = domValues;
  block$4: {
    var $x_4;
    while (true) {
      if (l$2.j()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.w();
        var t$4 = l$2.v();
        if ((!(!f$3(h$3)))) {
          l$2 = t$4;
          continue;
        }
        var start$2 = l$2;
        var remaining$2 = t$4;
        while (true) {
          if (remaining$2.j()) {
            var $x_4 = start$2;
            break block$4;
          } else {
            var x$4 = remaining$2.w();
            if ((!(!(!f$3(x$4))))) {
              remaining$2 = remaining$2.v();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.w(), $m_sci_Nil$());
            var toProcess$2 = start$2.v();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.w(), $m_sci_Nil$());
              currentLast$2.a0 = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.v();
            }
            var next$2 = firstMiss$2.v();
            var nextToCopy$2 = next$2;
            while ((!next$2.j())) {
              var head$2 = next$2.w();
              if ((!(!(!f$3(head$2))))) {
                next$2 = next$2.v();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.w(), $m_sci_Nil$());
                  currentLast$2.a0 = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.v();
                }
                nextToCopy$2 = next$2.v();
                next$2 = next$2.v();
              }
            }
            if ((!nextToCopy$2.j())) {
              currentLast$2.a0 = nextToCopy$2;
            }
            var $x_4 = newHead$2;
            break block$4;
          }
        }
      }
    }
  }
  var l$3 = itemsToAdd;
  block$6: {
    var $x_3;
    while (true) {
      if (l$3.j()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$3.w();
        var t$5 = l$3.v();
        if ((!(!f(h$4)))) {
          l$3 = t$5;
          continue;
        }
        var start$3 = l$3;
        var remaining$3 = t$5;
        while (true) {
          if (remaining$3.j()) {
            var $x_3 = start$3;
            break block$6;
          } else {
            var x$5 = remaining$3.w();
            if ((!(!(!f(x$5))))) {
              remaining$3 = remaining$3.v();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.w(), $m_sci_Nil$());
            var toProcess$3 = start$3.v();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.w(), $m_sci_Nil$());
              currentLast$3.a0 = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.v();
            }
            var next$3 = firstMiss$3.v();
            var nextToCopy$3 = next$3;
            while ((!next$3.j())) {
              var head$3 = next$3.w();
              if ((!(!(!f(head$3))))) {
                next$3 = next$3.v();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.w(), $m_sci_Nil$());
                  currentLast$3.a0 = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.v();
                }
                nextToCopy$3 = next$3.v();
                next$3 = next$3.v();
              }
            }
            if ((!nextToCopy$3.j())) {
              currentLast$3.a0 = nextToCopy$3;
            }
            var $x_3 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_4.oK($x_3);
  $thiz.js($thiz.gx().ei(key, newItems));
  key.nm.eI($thiz, key.ie.pc(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.fr(), maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.fr();
  $thiz.p4(maybeNextParent);
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.j()) && (!maybePrevParent.N().bS().bW.j()));
  var isNextParentActive = ((!maybeNextParent.j()) && (!maybeNextParent.N().bS().bW.j()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.j() ? $m_s_None$() : new $c_s_Some(maybeNextParent.N().bS())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.j()) {
    $thiz.ju().qY();
  } else {
    var x0 = maybeNextOwner.N();
    $thiz.ju().t9(x0);
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason$5) {
  this.iu = null;
  this.iu = reason$5;
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = $p;
$p.se = (function(x) {
  if ((x !== null)) {
    x.bp();
    var r = x.bg();
    var x$3 = this.iu;
    if (((r === null) ? (x$3 === null) : (r === x$3))) {
      return true;
    }
  }
  return false;
});
$p.qM = (function(x, default$1) {
  if ((x !== null)) {
    var item = x.bp();
    var r = x.bg();
    var x$3 = this.iu;
    if (((r === null) ? (x$3 === null) : (r === x$3))) {
      return item;
    }
  }
  return default$1.i(x);
});
$p.cw = (function(x) {
  return this.se(x);
});
$p.c6 = (function(x, default$1) {
  return this.qM(x, default$1);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1, "com.raquo.laminar.nodes.ReactiveElement$$anon$1", ({
  eD: 1,
  aL: 1,
  f: 1,
  j: 1,
  a: 1
}));
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  eO: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  eQ: 1,
  ah: 1,
  a: 1,
  a6: 1,
  a2: 1
}), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_jl_ClassCastException = new $TypeData().i($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  bt: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  bv: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  eU: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  bw: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  eZ: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f1)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  f2: 1,
  ah: 1,
  a: 1,
  a6: 1,
  a2: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  fa: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  ff: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  fg: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
}
$p = $c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$p.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
}
$h_s_$less$colon$less$$anon$1.prototype = $p;
$p.i = (function(x) {
  return x;
});
$p.B = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().i($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  fl: 1,
  fi: 1,
  fj: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.iL)) {
    if (($thiz.ha === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.ha;
      var cls = $objectGetClass(this$1);
      var $x_1 = $p_s_MatchError__liftedTree1$1__T__T($thiz, ((cls === null) ? "of a JS class" : ("of class " + cls.Z.N)));
    }
    $thiz.iM = $x_1;
    $thiz.iL = true;
  }
  return $thiz.iM;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.iL) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.iM);
}
function $p_s_MatchError__liftedTree1$1__T__T($thiz, ofClass$1) {
  try {
    return ((($thiz.ha + " (") + ofClass$1) + ")");
  } catch (e) {
    return ("an instance " + ofClass$1);
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.iM = null;
    this.ha = null;
    this.iL = false;
    this.ha = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gF() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  fs: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_s_Option() {
}
$p = $c_s_Option.prototype = new $h_O();
$p.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $p;
$p.j = (function() {
  return (this === $m_s_None$());
});
$p.G = (function() {
  return ((!this.j()) | 0);
});
$p.bj = (function(elem) {
  return ((!this.j()) && $m_sr_BoxesRunTime$().x(this.N(), elem));
});
$p.r = (function() {
  return (this.j() ? $m_sc_Iterator$().P : new $c_sc_Iterator$$anon$20(this.N()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fY = 0;
  this.nQ = 0;
  this.nP = null;
  this.nP = outer;
  this.fY = 0;
  this.nQ = outer.au();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.u = (function() {
  return (this.fY < this.nQ);
});
$p.n = (function() {
  var result = this.nP.av(this.fY);
  this.fY = ((1 + this.fY) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  fx: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.nR = null;
  this.nS = null;
  this.nR = _1;
  this.nS = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.au = (function() {
  return 2;
});
$p.av = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.bp = (function() {
  return this.nR;
});
$p.bg = (function() {
  return this.nS;
});
$p.B = (function() {
  return (((("(" + this.bp()) + ",") + this.bg()) + ")");
});
$p.aw = (function() {
  return "Tuple2";
});
$p.bA = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.D = (function() {
  return $m_s_util_hashing_MurmurHash3$().fC(this, (-116390334), true);
});
$p.y = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().x(this.bp(), x$1.bp()) && $m_sr_BoxesRunTime$().x(this.bg(), x$1.bg()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bC: 1,
  fy: 1,
  u: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.ff = null;
  this.fg = null;
  this.fh = null;
  this.ff = _1;
  this.fg = _2;
  this.fh = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.au = (function() {
  return 3;
});
$p.av = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.B = (function() {
  return (((((("(" + this.ff) + ",") + this.fg) + ",") + this.fh) + ")");
});
$p.aw = (function() {
  return "Tuple3";
});
$p.bA = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.D = (function() {
  return $m_s_util_hashing_MurmurHash3$().fC(this, (-192629203), true);
});
$p.y = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T3) && ($m_sr_BoxesRunTime$().x(this.ff, x$1.ff) && ($m_sr_BoxesRunTime$().x(this.fg, x$1.fg) && $m_sr_BoxesRunTime$().x(this.fh, x$1.fh)))));
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  bD: 1,
  fz: 1,
  u: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.fZ = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  fN: 1,
  fM: 1,
  F: 1,
  a: 1,
  W: 1
}));
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.br().as($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.j())) {
    return $thiz.C(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.c7() : $thiz.B())));
  }
}
function $f_sc_IndexedSeqOps__headOption__s_Option($thiz) {
  return ($thiz.j() ? $m_s_None$() : new $c_s_Some($thiz.w()));
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.c7() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.e)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e)));
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.u = (function() {
  return false;
});
$p.k1 = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.G = (function() {
  return 0;
});
$p.gQ = (function(from, until) {
  return this;
});
$p.n = (function() {
  this.k1();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  fS: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.g0 = false;
  this.nV = null;
  this.nV = a$1;
  this.g0 = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.u = (function() {
  return (!this.g0);
});
$p.n = (function() {
  if (this.g0) {
    return $m_sc_Iterator$().P.n();
  } else {
    this.g0 = true;
    return this.nV;
  }
});
$p.gQ = (function(from, until) {
  return (((this.g0 || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().P : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  fT: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.nY = null;
  this.hd = false;
  this.nX = null;
  this.iW = null;
  this.nW = null;
  this.iW = outer;
  this.nW = f$1;
  this.nY = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.hd = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.u = (function() {
  while (true) {
    if (this.hd) {
      return true;
    } else if (this.iW.u()) {
      var a = this.iW.n();
      if ((!this.nY.hw(this.nW.i(a)))) {
        continue;
      }
      this.nX = a;
      this.hd = true;
      return true;
    } else {
      return false;
    }
  }
});
$p.n = (function() {
  if (this.u()) {
    this.hd = false;
    return this.nX;
  } else {
    return $m_sc_Iterator$().P.n();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  fV: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.he = null;
  this.nZ = null;
  this.he = outer;
  this.nZ = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.G = (function() {
  return this.he.G();
});
$p.u = (function() {
  return this.he.u();
});
$p.n = (function() {
  return this.nZ.i(this.he.n());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  fW: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bN instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bN;
      $thiz.bN = c.bN;
      $thiz.dB = c.dB;
      if ((c.ci !== null)) {
        if (($thiz.ch === null)) {
          $thiz.ch = c.ch;
        }
        c.ch.g1 = $thiz.ci;
        $thiz.ci = c.ci;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.ci === null)) {
      $thiz.bN = null;
      $thiz.ch = null;
      return false;
    } else {
      $thiz.bN = $thiz.ci.rZ();
      if (($thiz.ch === $thiz.ci)) {
        $thiz.ch = $thiz.ch.g1;
      }
      $thiz.ci = $thiz.ci.g1;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.dB) {
        return true;
      } else {
        if ((!(($thiz.bN !== null) && $thiz.bN.u()))) {
          continue;
        }
        $thiz.dB = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.bN = null;
  this.ci = null;
  this.ch = null;
  this.dB = false;
  this.bN = current;
  this.ci = null;
  this.ch = null;
  this.dB = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.u = (function() {
  if (this.dB) {
    return true;
  } else if ((this.bN !== null)) {
    if (this.bN.u()) {
      this.dB = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.n = (function() {
  if (this.u()) {
    this.dB = false;
    return this.bN.n();
  } else {
    return $m_sc_Iterator$().P.n();
  }
});
$p.jw = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.ci === null)) {
    this.ci = c;
    this.ch = c;
  } else {
    this.ch.g1 = c;
    this.ch = c;
  }
  if ((this.bN === null)) {
    this.bN = $m_sc_Iterator$().P;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  bJ: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.d8 > 0)) {
    if ($thiz.dC.u()) {
      $thiz.dC.n();
      $thiz.d8 = (($thiz.d8 - 1) | 0);
    } else {
      $thiz.d8 = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.bZ < 0)) {
    return (-1);
  } else {
    var that = (($thiz.bZ - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.dC = null;
  this.bZ = 0;
  this.d8 = 0;
  this.dC = underlying;
  this.bZ = limit;
  this.d8 = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.G = (function() {
  var size = this.dC.G();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.d8) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.bZ < 0)) {
      return dropSize;
    } else {
      var x = this.bZ;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.u = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.bZ !== 0) && this.dC.u());
});
$p.n = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bZ > 0)) {
    this.bZ = ((this.bZ - 1) | 0);
    return this.dC.n();
  } else {
    return ((this.bZ < 0) ? this.dC.n() : $m_sc_Iterator$().P.n());
  }
});
$p.gQ = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.bZ < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.d8 + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().P;
  } else if ((sum < 0)) {
    this.d8 = 2147483647;
    this.bZ = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.dC, ((sum - 2147483647) | 0), rest))));
  } else {
    this.d8 = sum;
    this.bZ = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  fY: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $f_sc_LinearSeqOps__headOption__s_Option($thiz) {
  return ($thiz.j() ? $m_s_None$() : new $c_s_Some($thiz.w()));
}
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.j())) {
    len = ((1 + len) | 0);
    these = these.v();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $thiz, len));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.bs(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.pb(n);
  if (skipped.j()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.w();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ((!xs.j()) | 0);
    } else {
      if ((!xs.j())) {
        var temp$i = ((1 + i) | 0);
        var temp$xs = xs.v();
        i = temp$i;
        xs = temp$xs;
        continue;
      }
      return (-1);
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      if ((((!a.j()) && (!b.j())) && $m_sr_BoxesRunTime$().x(a.w(), b.w()))) {
        var temp$a = a.v();
        var temp$b = b.v();
        a = temp$a;
        b = temp$b;
        continue;
      }
      return (a.j() && b.j());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.g3 = null;
  this.g3 = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.u = (function() {
  return (!this.g3.j());
});
$p.n = (function() {
  var r = this.g3.w();
  this.g3 = this.g3.v();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  g2: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.da === null)) {
    $thiz.da = new $ac_I(($m_sci_Node$().gd << 1));
    $thiz.g7 = new ($d_sci_Node.r().C)($m_sci_Node$().gd);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.ex = node;
  $thiz.c0 = 0;
  $thiz.g6 = node.k7();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bP = ((1 + $thiz.bP) | 0);
  var cursorIndex = ($thiz.bP << 1);
  var lengthIndex = ((1 + ($thiz.bP << 1)) | 0);
  $thiz.g7.b[$thiz.bP] = node;
  $thiz.da.b[cursorIndex] = 0;
  $thiz.da.b[lengthIndex] = node.k2();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bP = (($thiz.bP - 1) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bP >= 0)) {
    var cursorIndex = ($thiz.bP << 1);
    var lengthIndex = ((1 + ($thiz.bP << 1)) | 0);
    var nodeCursor = $thiz.da.b[cursorIndex];
    if ((nodeCursor < $thiz.da.b[lengthIndex])) {
      var ev$1 = $thiz.da;
      ev$1.b[cursorIndex] = ((1 + ev$1.b[cursorIndex]) | 0);
      var nextNode = $thiz.g7.b[$thiz.bP].jK(nodeCursor);
      if (nextNode.jP()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.hE()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true;
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz);
    }
  }
  return false;
}
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.c0 = 0;
  $thiz.g6 = 0;
  $thiz.bP = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.jP()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.hE()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.c0 = 0;
  this.g6 = 0;
  this.ex = null;
  this.bP = 0;
  this.da = null;
  this.g7 = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.u = (function() {
  return ((this.c0 < this.g6) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.hi = node;
  $thiz.dK = ((node.k7() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.c1 = ((1 + $thiz.c1) | 0);
  $thiz.g9.b[$thiz.c1] = node;
  $thiz.g8.b[$thiz.c1] = ((node.k2() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.c1 = (($thiz.c1 - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.c1 >= 0)) {
    var nodeCursor = $thiz.g8.b[$thiz.c1];
    $thiz.g8.b[$thiz.c1] = ((nodeCursor - 1) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.g9.b[$thiz.c1].jK(nodeCursor));
    } else {
      var currNode = $thiz.g9.b[$thiz.c1];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.hE()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.dK = (-1);
  $thiz.c1 = (-1);
  $thiz.g8 = new $ac_I(((1 + $m_sci_Node$().gd) | 0));
  $thiz.g9 = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().gd) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.dK = 0;
  this.hi = null;
  this.c1 = 0;
  this.g8 = null;
  this.g9 = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.u = (function() {
  return ((this.dK >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.fi !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.b.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.b.length) | 0));
  as.F(0, result, 0, ix);
  result.b[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.b.length - ix) | 0);
  as.F(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.gz(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aA;
  var dst = new $ac_O(((2 + src.b.length) | 0));
  src.F(0, dst, 0, idx);
  dst.b[idx] = key;
  dst.b[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.b.length - idx) | 0);
  src.F(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bO, dataIx, originalHash);
  bm.a3 = (bm.a3 | bitpos);
  bm.aA = dst;
  bm.bO = dstHashes;
  bm.bb = ((1 + bm.bb) | 0);
  bm.bC = ((bm.bC + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.fi = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.cP = $thiz.cP.p6();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.fi = null;
  this.cP = null;
  this.cP = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().nN, $m_s_Array$EmptyArrays$().iK, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.bk = (function(size) {
});
$p.fG = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().eT(keyHash, shift);
    var bitpos = $m_sci_Node$().e6(mask);
    if (((mapNode.a3 & bitpos) !== 0)) {
      var index = $m_sci_Node$().d1(mapNode.a3, mask, bitpos);
      var key0 = mapNode.e9(index);
      var key0UnimprovedHash = mapNode.gE(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().x(key0, key))) {
        mapNode.aA.b[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.dp(index);
        var key0Hash = $m_sc_Hashing$().cG(key0UnimprovedHash);
        var subNodeNew = mapNode.k0(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.st(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.ah & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().d1(mapNode.ah, mask, bitpos);
      var subNode = mapNode.cZ(index$2);
      var beforeSize = subNode.b8();
      var beforeHash = subNode.e7();
      this.fG(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.bb = ((mapNode.bb + ((subNode.b8() - beforeSize) | 0)) | 0);
      mapNode.bC = ((mapNode.bC + ((subNode.e7() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.fx(key);
    if ((index$3 < 0)) {
      mapNode.ai = mapNode.ai.e5(new $c_T2(key, value));
    } else {
      mapNode.ai = mapNode.ai.eh(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.k8 = (function() {
  if ((this.cP.bb === 0)) {
    return $m_sci_HashMap$().j1;
  } else if ((this.fi !== null)) {
    return this.fi;
  } else {
    this.fi = new $c_sci_HashMap(this.cP);
    return this.fi;
  }
});
$p.oH = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().X(elem.bp());
  var im = $m_sc_Hashing$().cG(h);
  this.fG(this.cP, elem.bp(), elem.bg(), h, im, 0);
  return this;
});
$p.eF = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().X(key);
  this.fG(this.cP, key, value, originalHash, $m_sc_Hashing$().cG(originalHash), 0);
  return this;
});
$p.jl = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.tB();
    while (iter.u()) {
      var next = iter.n();
      var originalHash = xs.tm(next.pr());
      var hash = $m_sc_Hashing$().cG(originalHash);
      this.fG(this.cP, next.pv(), next.tq(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.rs();
    while (iter$2.u()) {
      var next$2 = iter$2.n();
      var originalHash$2 = xs.tm(next$2.pr());
      var hash$2 = $m_sc_Hashing$().cG(originalHash$2);
      this.fG(this.cP, next$2.pv(), next$2.tq(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.eN(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2$2, value$2$2) => this.eF(key$2$2, value$2$2))));
  } else {
    var it = xs.r();
    while (it.u()) {
      this.oH(it.n());
    }
  }
  return this;
});
$p.bh = (function(elems) {
  return this.jl(elems);
});
$p.b4 = (function(elem) {
  return this.oH(elem);
});
$p.b6 = (function() {
  return this.k8();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  gd: 1,
  ac: 1,
  M: 1,
  I: 1,
  G: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.et = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.jG = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.hD.call(this, it));
});
$p.as = (function(source) {
  return this.jG(source);
});
$p.hD = (function(it) {
  return this.jG(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  gg: 1,
  aV: 1,
  W: 1,
  F: 1,
  a: 1
}));
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$();
  }
  return $n_sci_IndexedSeq$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.fj = null;
  this.o7 = null;
  this.qX();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.bk = (function(size) {
});
$p.qX = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.o7 = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.jB()))));
  this.fj = deferred;
});
$p.t5 = (function() {
  this.fj.jR(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().V)));
  return this.o7;
});
$p.qy = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.fj.jR(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.jB())))));
  })));
  this.fj = deferred;
  return this;
});
$p.qp = (function(xs) {
  if ((xs.G() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.fj.jR(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().k9(xs.r(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.jB()))))));
    this.fj = deferred;
  }
  return this;
});
$p.bh = (function(elems) {
  return this.qp(elems);
});
$p.b4 = (function(elem) {
  return this.qy(elem);
});
$p.b6 = (function() {
  return this.t5();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  gl: 1,
  ac: 1,
  M: 1,
  I: 1,
  G: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.fk = null;
  this.fk = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.u = (function() {
  return (!(this.fk.aJ() === $m_sci_LazyList$().V));
});
$p.n = (function() {
  if ((this.fk.aJ() === $m_sci_LazyList$().V)) {
    return $m_sc_Iterator$().P.n();
  } else {
    var res = this.fk.w();
    this.fk = this.fk.b9();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  gn: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_List$() {
  this.ga = null;
  $n_sci_List$ = this;
  this.ga = new $c_sci_List$$anon$1();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.dm = (function(elems) {
  return $m_sci_Nil$().ee(elems);
});
$p.at = (function() {
  return new $c_scm_ListBuffer();
});
$p.as = (function(source) {
  return $m_sci_Nil$().ee(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  gq: 1,
  ar: 1,
  W: 1,
  F: 1,
  a: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  $thiz.fl = outer;
  $thiz.dN = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dN = 0;
  this.fl = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.u = (function() {
  return (this.dN < 2);
});
$p.n = (function() {
  switch (this.dN) {
    case 0: {
      var result = new $c_T2(this.fl.cj, this.fl.db);
      break;
    }
    case 1: {
      var result = new $c_T2(this.fl.ck, this.fl.dc);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().P.n();
    }
  }
  this.dN = ((1 + this.dN) | 0);
  return result;
});
$p.dn = (function(n) {
  this.dN = ((this.dN + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $thiz.dO = outer;
  $thiz.dP = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dP = 0;
  this.dO = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.u = (function() {
  return (this.dP < 3);
});
$p.n = (function() {
  switch (this.dP) {
    case 0: {
      var result = new $c_T2(this.dO.c2, this.dO.cR);
      break;
    }
    case 1: {
      var result = new $c_T2(this.dO.c3, this.dO.cS);
      break;
    }
    case 2: {
      var result = new $c_T2(this.dO.c4, this.dO.cT);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().P.n();
    }
  }
  this.dP = ((1 + this.dP) | 0);
  return result;
});
$p.dn = (function(n) {
  this.dP = ((this.dP + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $thiz.cU = outer;
  $thiz.dQ = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dQ = 0;
  this.cU = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.u = (function() {
  return (this.dQ < 4);
});
$p.n = (function() {
  switch (this.dQ) {
    case 0: {
      var result = new $c_T2(this.cU.bD, this.cU.cl);
      break;
    }
    case 1: {
      var result = new $c_T2(this.cU.bE, this.cU.cm);
      break;
    }
    case 2: {
      var result = new $c_T2(this.cU.bF, this.cU.cn);
      break;
    }
    case 3: {
      var result = new $c_T2(this.cU.bG, this.cU.co);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().P.n();
    }
  }
  this.dQ = ((1 + this.dQ) | 0);
  return result;
});
$p.dn = (function(n) {
  this.dQ = ((this.dQ + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.dd = null;
  this.gb = false;
  this.ey = null;
  this.dd = $m_sci_Map$EmptyMap$();
  this.gb = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.bk = (function(size) {
});
$p.pJ = (function() {
  return (this.gb ? this.ey.k8() : this.dd);
});
$p.qw = (function(key, value) {
  if (this.gb) {
    this.ey.eF(key, value);
  } else if ((this.dd.b8() < 4)) {
    this.dd = this.dd.ei(key, value);
  } else if (this.dd.bj(key)) {
    this.dd = this.dd.ei(key, value);
  } else {
    this.gb = true;
    if ((this.ey === null)) {
      this.ey = new $c_sci_HashMapBuilder();
    }
    this.dd.qU(this.ey);
    this.ey.eF(key, value);
  }
  return this;
});
$p.oC = (function(xs) {
  return (this.gb ? (this.ey.jl(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.bh = (function(elems) {
  return this.oC(elems);
});
$p.b4 = (function(elem) {
  return this.qw(elem.bp(), elem.bg());
});
$p.b6 = (function() {
  return this.pJ();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  gB: 1,
  ac: 1,
  M: 1,
  I: 1,
  G: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().pu($m_jl_System$SystemProperties$().jN("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
  } catch (e) {
    if (false) {
      return 250;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.ob = 0;
  this.oc = null;
  $n_sci_Vector$ = this;
  this.ob = $ps_sci_Vector$__liftedTree1$1__I();
  this.oc = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.dm = (function(elems) {
  return this.jI(elems);
});
$p.jI = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.G();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((((knownSize - 1) | 0) >>> 0) <= 31)) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.ar().b7();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cO;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.c8(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.r().c8(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().oD(it).pK();
    }
  }
});
$p.at = (function() {
  return new $c_sci_VectorBuilder();
});
$p.as = (function(source) {
  return this.jI(source);
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  gO: 1,
  ar: 1,
  W: 1,
  F: 1,
  a: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.T >= 6)) {
    a = $thiz.aT;
    var i = (($thiz.O >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.F(i, dest, 0, length);
    }
    var num = $thiz.O;
    var t = (((num >> 24) >>> 7) | 0);
    var newOffset = (((33554431 & ((num + t) | 0)) - t) | 0);
    $thiz.K = (($thiz.K - (($thiz.O - newOffset) | 0)) | 0);
    $thiz.O = newOffset;
    if (((($thiz.K >>> 25) | 0) === 0)) {
      $thiz.T = 5;
    }
    aParent = a;
    a = a.b[0];
  }
  if (($thiz.T >= 5)) {
    if ((a === null)) {
      a = $thiz.a4;
    }
    var i$2 = (31 & (($thiz.O >>> 20) | 0));
    if (($thiz.T === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.F(i$2, dest$1, 0, length$1);
      }
      $thiz.a4 = a;
      var num$1 = $thiz.O;
      var t$1 = (((num$1 >> 19) >>> 12) | 0);
      var newOffset$1 = (((1048575 & ((num$1 + t$1) | 0)) - t$1) | 0);
      $thiz.K = (($thiz.K - (($thiz.O - newOffset$1) | 0)) | 0);
      $thiz.O = newOffset$1;
      if (((($thiz.K >>> 20) | 0) === 0)) {
        $thiz.T = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().af(a, i$2, 32);
      }
      aParent.b[0] = a;
    }
    aParent = a;
    a = a.b[0];
  }
  if (($thiz.T >= 4)) {
    if ((a === null)) {
      a = $thiz.W;
    }
    var i$3 = (31 & (($thiz.O >>> 15) | 0));
    if (($thiz.T === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.F(i$3, dest$2, 0, length$2);
      }
      $thiz.W = a;
      var num$2 = $thiz.O;
      var t$2 = (((num$2 >> 14) >>> 17) | 0);
      var newOffset$2 = (((32767 & ((num$2 + t$2) | 0)) - t$2) | 0);
      $thiz.K = (($thiz.K - (($thiz.O - newOffset$2) | 0)) | 0);
      $thiz.O = newOffset$2;
      if (((($thiz.K >>> 15) | 0) === 0)) {
        $thiz.T = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().af(a, i$3, 32);
      }
      aParent.b[0] = a;
    }
    aParent = a;
    a = a.b[0];
  }
  if (($thiz.T >= 3)) {
    if ((a === null)) {
      a = $thiz.Q;
    }
    var i$4 = (31 & (($thiz.O >>> 10) | 0));
    if (($thiz.T === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.F(i$4, dest$3, 0, length$3);
      }
      $thiz.Q = a;
      var num$3 = $thiz.O;
      var t$3 = (((num$3 >> 9) >>> 22) | 0);
      var newOffset$3 = (((1023 & ((num$3 + t$3) | 0)) - t$3) | 0);
      $thiz.K = (($thiz.K - (($thiz.O - newOffset$3) | 0)) | 0);
      $thiz.O = newOffset$3;
      if (((($thiz.K >>> 10) | 0) === 0)) {
        $thiz.T = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().af(a, i$4, 32);
      }
      aParent.b[0] = a;
    }
    aParent = a;
    a = a.b[0];
  }
  if (($thiz.T >= 2)) {
    if ((a === null)) {
      a = $thiz.M;
    }
    var i$5 = (31 & (($thiz.O >>> 5) | 0));
    if (($thiz.T === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.F(i$5, dest$4, 0, length$4);
      }
      $thiz.M = a;
      var num$4 = $thiz.O;
      var t$4 = (((num$4 >> 4) >>> 27) | 0);
      var newOffset$4 = (((31 & ((num$4 + t$4) | 0)) - t$4) | 0);
      $thiz.K = (($thiz.K - (($thiz.O - newOffset$4) | 0)) | 0);
      $thiz.O = newOffset$4;
      if (((($thiz.K >>> 5) | 0) === 0)) {
        $thiz.T = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().af(a, i$5, 32);
      }
      aParent.b[0] = a;
    }
    aParent = a;
    a = a.b[0];
  }
  if (($thiz.T >= 1)) {
    if ((a === null)) {
      a = $thiz.a1;
    }
    var i$6 = (31 & $thiz.O);
    if (($thiz.T === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.F(i$6, dest$5, 0, length$5);
      }
      $thiz.a1 = a;
      $thiz.R = (($thiz.R - $thiz.O) | 0);
      $thiz.O = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().af(a, i$6, 32);
      }
      aParent.b[0] = a;
    }
  }
  $thiz.hj = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.b.length;
  if ((dl > 0)) {
    if (($thiz.R === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.R) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.a1;
    var destPos = $thiz.R;
    data.F(0, dest, destPos, copy1);
    $thiz.R = (($thiz.R + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.a1;
      data.F(copy1, dest$1, 0, copy2);
      $thiz.R = (($thiz.R + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.b.length === 0)) {
    return (void 0);
  }
  if (($thiz.R === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.b.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.K) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.K >>> 5) | 0));
      var dest = $thiz.M;
      slice.F(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.M;
        slice.F(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      var num = $thiz.K;
      var t = (((num >> 9) >>> 22) | 0);
      if (((((1023 & ((num + t) | 0)) - t) | 0) !== 0)) {
        var f = ((e$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2, 2);
        });
        var len = slice.b.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var x0 = slice.b[i];
            f(x0);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i < len)) {
            var x0$1 = slice.b[i];
            f(x0$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i < len)) {
            var x0$2 = slice.b[i];
            f(x0$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i < len)) {
            var $x_1 = slice.b;
            var $x_2 = (i << 1);
            var x0$3_$_lo = $x_1[$x_2];
            var x0$3_$_hi = $x_1[(($x_2 + 1) | 0)];
            f($bL(x0$3_$_lo, x0$3_$_hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i < len)) {
            var x0$4 = slice.b[i];
            f(x0$4);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i < len)) {
            var x0$5 = slice.b[i];
            f($bC(x0$5));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i < len)) {
            var x0$6 = slice.b[i];
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i < len)) {
            var x0$7 = slice.b[i];
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i < len)) {
            var x0$8 = slice.b[i];
            f(x0$8);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.K) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.K >>> 10) | 0));
      var dest$2 = $thiz.Q;
      slice.F(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.Q;
        slice.F(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      var num$1 = $thiz.K;
      var t$1 = (((num$1 >> 14) >>> 17) | 0);
      if (((((32767 & ((num$1 + t$1) | 0)) - t$1) | 0) !== 0)) {
        var f$1 = ((e$2$2$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$1, 3);
        });
        var len$1 = slice.b.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$9 = slice.b[i$1];
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$1 < len$1)) {
            var x0$10 = slice.b[i$1];
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$1 < len$1)) {
            var x0$11 = slice.b[i$1];
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$1 < len$1)) {
            var $x_3 = slice.b;
            var $x_4 = (i$1 << 1);
            var x0$12_$_lo = $x_3[$x_4];
            var x0$12_$_hi = $x_3[(($x_4 + 1) | 0)];
            f$1($bL(x0$12_$_lo, x0$12_$_hi));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$1 < len$1)) {
            var x0$13 = slice.b[i$1];
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$1 < len$1)) {
            var x0$14 = slice.b[i$1];
            f$1($bC(x0$14));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$1 < len$1)) {
            var x0$15 = slice.b[i$1];
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$1 < len$1)) {
            var x0$16 = slice.b[i$1];
            f$1(x0$16);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$1 < len$1)) {
            var x0$17 = slice.b[i$1];
            f$1(x0$17);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.K) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.K >>> 15) | 0));
      var dest$4 = $thiz.W;
      slice.F(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.W;
        slice.F(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      var num$2 = $thiz.K;
      var t$2 = (((num$2 >> 19) >>> 12) | 0);
      if (((((1048575 & ((num$2 + t$2) | 0)) - t$2) | 0) !== 0)) {
        var f$2 = ((e$2$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$2, 4);
        });
        var len$2 = slice.b.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$18 = slice.b[i$2];
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$2 < len$2)) {
            var x0$19 = slice.b[i$2];
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$2 < len$2)) {
            var x0$20 = slice.b[i$2];
            f$2(x0$20);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$2 < len$2)) {
            var $x_5 = slice.b;
            var $x_6 = (i$2 << 1);
            var x0$21_$_lo = $x_5[$x_6];
            var x0$21_$_hi = $x_5[(($x_6 + 1) | 0)];
            f$2($bL(x0$21_$_lo, x0$21_$_hi));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$2 < len$2)) {
            var x0$22 = slice.b[i$2];
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$2 < len$2)) {
            var x0$23 = slice.b[i$2];
            f$2($bC(x0$23));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$2 < len$2)) {
            var x0$24 = slice.b[i$2];
            f$2(x0$24);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$2 < len$2)) {
            var x0$25 = slice.b[i$2];
            f$2(x0$25);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$2 < len$2)) {
            var x0$26 = slice.b[i$2];
            f$2(x0$26);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.K) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.K >>> 20) | 0));
      var dest$6 = $thiz.a4;
      slice.F(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.a4;
        slice.F(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      var num$3 = $thiz.K;
      var t$3 = (((num$3 >> 24) >>> 7) | 0);
      if (((((33554431 & ((num$3 + t$3) | 0)) - t$3) | 0) !== 0)) {
        var f$3 = ((e$2$2$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$3, 5);
        });
        var len$3 = slice.b.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$27 = slice.b[i$3];
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$3 < len$3)) {
            var x0$28 = slice.b[i$3];
            f$3(x0$28);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$3 < len$3)) {
            var x0$29 = slice.b[i$3];
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$3 < len$3)) {
            var $x_7 = slice.b;
            var $x_8 = (i$3 << 1);
            var x0$30_$_lo = $x_7[$x_8];
            var x0$30_$_hi = $x_7[(($x_8 + 1) | 0)];
            f$3($bL(x0$30_$_lo, x0$30_$_hi));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$3 < len$3)) {
            var x0$31 = slice.b[i$3];
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$3 < len$3)) {
            var x0$32 = slice.b[i$3];
            f$3($bC(x0$32));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$3 < len$3)) {
            var x0$33 = slice.b[i$3];
            f$3(x0$33);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$3 < len$3)) {
            var x0$34 = slice.b[i$3];
            f$3(x0$34);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$3 < len$3)) {
            var x0$35 = slice.b[i$3];
            f$3(x0$35);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.K >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aT;
      slice.F(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.d5();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.d4(sliceIdx);
    var idx = sliceIdx;
    var c = (((sliceCount + ((sliceCount >>> 31) | 0)) | 0) >> 1);
    var a = ((idx - c) | 0);
    var sign = (a >> 31);
    var x1 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.R === 32) || ($thiz.R === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().jD(((x1 - 2) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.K) | 0);
  var xor = (idx ^ $thiz.K);
  $thiz.K = idx;
  $thiz.R = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.K + n) | 0);
    var xor = (idx ^ $thiz.K);
    $thiz.K = idx;
    $thiz.R = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.a1) + ", a2=") + $thiz.M) + ", a3=") + $thiz.Q) + ", a4=") + $thiz.W) + ", a5=") + $thiz.a4) + ", a6=") + $thiz.aT) + ", depth=") + $thiz.T));
  } else if ((xor < 1024)) {
    if (($thiz.T <= 1)) {
      $thiz.M = new ($d_O.r().r().C)(32);
      $thiz.M.b[0] = $thiz.a1;
      $thiz.T = 2;
    }
    $thiz.a1 = new $ac_O(32);
    $thiz.M.b[(31 & ((idx >>> 5) | 0))] = $thiz.a1;
  } else if ((xor < 32768)) {
    if (($thiz.T <= 2)) {
      $thiz.Q = new ($d_O.r().r().r().C)(32);
      $thiz.Q.b[0] = $thiz.M;
      $thiz.T = 3;
    }
    $thiz.a1 = new $ac_O(32);
    $thiz.M = new ($d_O.r().r().C)(32);
    $thiz.M.b[(31 & ((idx >>> 5) | 0))] = $thiz.a1;
    $thiz.Q.b[(31 & ((idx >>> 10) | 0))] = $thiz.M;
  } else if ((xor < 1048576)) {
    if (($thiz.T <= 3)) {
      $thiz.W = new ($d_O.r().r().r().r().C)(32);
      $thiz.W.b[0] = $thiz.Q;
      $thiz.T = 4;
    }
    $thiz.a1 = new $ac_O(32);
    $thiz.M = new ($d_O.r().r().C)(32);
    $thiz.Q = new ($d_O.r().r().r().C)(32);
    $thiz.M.b[(31 & ((idx >>> 5) | 0))] = $thiz.a1;
    $thiz.Q.b[(31 & ((idx >>> 10) | 0))] = $thiz.M;
    $thiz.W.b[(31 & ((idx >>> 15) | 0))] = $thiz.Q;
  } else if ((xor < 33554432)) {
    if (($thiz.T <= 4)) {
      $thiz.a4 = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.a4.b[0] = $thiz.W;
      $thiz.T = 5;
    }
    $thiz.a1 = new $ac_O(32);
    $thiz.M = new ($d_O.r().r().C)(32);
    $thiz.Q = new ($d_O.r().r().r().C)(32);
    $thiz.W = new ($d_O.r().r().r().r().C)(32);
    $thiz.M.b[(31 & ((idx >>> 5) | 0))] = $thiz.a1;
    $thiz.Q.b[(31 & ((idx >>> 10) | 0))] = $thiz.M;
    $thiz.W.b[(31 & ((idx >>> 15) | 0))] = $thiz.Q;
    $thiz.a4.b[(31 & ((idx >>> 20) | 0))] = $thiz.W;
  } else {
    if (($thiz.T <= 5)) {
      $thiz.aT = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aT.b[0] = $thiz.a4;
      $thiz.T = 6;
    }
    $thiz.a1 = new $ac_O(32);
    $thiz.M = new ($d_O.r().r().C)(32);
    $thiz.Q = new ($d_O.r().r().r().C)(32);
    $thiz.W = new ($d_O.r().r().r().r().C)(32);
    $thiz.a4 = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.M.b[(31 & ((idx >>> 5) | 0))] = $thiz.a1;
    $thiz.Q.b[(31 & ((idx >>> 10) | 0))] = $thiz.M;
    $thiz.W.b[(31 & ((idx >>> 15) | 0))] = $thiz.Q;
    $thiz.a4.b[(31 & ((idx >>> 20) | 0))] = $thiz.W;
    $thiz.aT.b[((idx >>> 25) | 0)] = $thiz.a4;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aT = null;
  this.a4 = null;
  this.W = null;
  this.Q = null;
  this.M = null;
  this.a1 = null;
  this.R = 0;
  this.K = 0;
  this.O = 0;
  this.hj = false;
  this.T = 0;
  this.a1 = new $ac_O(32);
  this.R = 0;
  this.K = 0;
  this.O = 0;
  this.hj = false;
  this.T = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.bk = (function(size) {
});
$p.s4 = (function(v) {
  var x1 = v.d5();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.T = 1;
      var i = v.l.b.length;
      this.R = (31 & i);
      this.K = ((i - this.R) | 0);
      var a = v.l;
      this.a1 = ((a.b.length === 32) ? a : $m_ju_Arrays$().af(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.by;
      var a$1 = v.q;
      this.a1 = ((a$1.b.length === 32) ? a$1 : $m_ju_Arrays$().af(a$1, 0, 32));
      this.T = 2;
      this.O = ((32 - v.bR) | 0);
      var i$1 = ((v.s + this.O) | 0);
      this.R = (31 & i$1);
      this.K = ((i$1 - this.R) | 0);
      this.M = new ($d_O.r().r().C)(32);
      this.M.b[0] = v.l;
      var dest = this.M;
      var length = d2.b.length;
      d2.F(0, dest, 1, length);
      this.M.b[((1 + d2.b.length) | 0)] = this.a1;
      break;
    }
    case 5: {
      var d3 = v.be;
      var s2 = v.bf;
      var a$2 = v.q;
      this.a1 = ((a$2.b.length === 32) ? a$2 : $m_ju_Arrays$().af(a$2, 0, 32));
      this.T = 3;
      this.O = ((1024 - v.bv) | 0);
      var i$2 = ((v.s + this.O) | 0);
      this.R = (31 & i$2);
      this.K = ((i$2 - this.R) | 0);
      this.Q = new ($d_O.r().r().r().C)(32);
      this.Q.b[0] = $m_sci_VectorStatics$().cX(v.l, v.bI);
      var dest$1 = this.Q;
      var length$1 = d3.b.length;
      d3.F(0, dest$1, 1, length$1);
      this.M = $m_ju_Arrays$().a6(s2, 32);
      this.Q.b[((1 + d3.b.length) | 0)] = this.M;
      this.M.b[s2.b.length] = this.a1;
      break;
    }
    case 7: {
      var d4 = v.aM;
      var s3 = v.aO;
      var s2$2 = v.aN;
      var a$3 = v.q;
      this.a1 = ((a$3.b.length === 32) ? a$3 : $m_ju_Arrays$().af(a$3, 0, 32));
      this.T = 4;
      this.O = ((32768 - v.b2) | 0);
      var i$3 = ((v.s + this.O) | 0);
      this.R = (31 & i$3);
      this.K = ((i$3 - this.R) | 0);
      this.W = new ($d_O.r().r().r().r().C)(32);
      this.W.b[0] = $m_sci_VectorStatics$().cX($m_sci_VectorStatics$().cX(v.l, v.bm), v.bn);
      var dest$2 = this.W;
      var length$2 = d4.b.length;
      d4.F(0, dest$2, 1, length$2);
      this.Q = $m_ju_Arrays$().a6(s3, 32);
      this.M = $m_ju_Arrays$().a6(s2$2, 32);
      this.W.b[((1 + d4.b.length) | 0)] = this.Q;
      this.Q.b[s3.b.length] = this.M;
      this.M.b[s2$2.b.length] = this.a1;
      break;
    }
    case 9: {
      var d5 = v.aj;
      var s4 = v.am;
      var s3$2 = v.al;
      var s2$3 = v.ak;
      var a$4 = v.q;
      this.a1 = ((a$4.b.length === 32) ? a$4 : $m_ju_Arrays$().af(a$4, 0, 32));
      this.T = 5;
      this.O = ((1048576 - v.aE) | 0);
      var i$4 = ((v.s + this.O) | 0);
      this.R = (31 & i$4);
      this.K = ((i$4 - this.R) | 0);
      this.a4 = new ($d_O.r().r().r().r().r().C)(32);
      this.a4.b[0] = $m_sci_VectorStatics$().cX($m_sci_VectorStatics$().cX($m_sci_VectorStatics$().cX(v.l, v.aQ), v.aR), v.aS);
      var dest$3 = this.a4;
      var length$3 = d5.b.length;
      d5.F(0, dest$3, 1, length$3);
      this.W = $m_ju_Arrays$().a6(s4, 32);
      this.Q = $m_ju_Arrays$().a6(s3$2, 32);
      this.M = $m_ju_Arrays$().a6(s2$3, 32);
      this.a4.b[((1 + d5.b.length) | 0)] = this.W;
      this.W.b[s4.b.length] = this.Q;
      this.Q.b[s3$2.b.length] = this.M;
      this.M.b[s2$3.b.length] = this.a1;
      break;
    }
    case 11: {
      var d6 = v.a8;
      var s5 = v.ac;
      var s4$2 = v.ab;
      var s3$3 = v.aa;
      var s2$4 = v.a9;
      var a$5 = v.q;
      this.a1 = ((a$5.b.length === 32) ? a$5 : $m_ju_Arrays$().af(a$5, 0, 32));
      this.T = 6;
      this.O = ((33554432 - v.ax) | 0);
      var i$5 = ((v.s + this.O) | 0);
      this.R = (31 & i$5);
      this.K = ((i$5 - this.R) | 0);
      this.aT = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aT.b[0] = $m_sci_VectorStatics$().cX($m_sci_VectorStatics$().cX($m_sci_VectorStatics$().cX($m_sci_VectorStatics$().cX(v.l, v.aF), v.aG), v.aH), v.aI);
      var dest$4 = this.aT;
      var length$4 = d6.b.length;
      d6.F(0, dest$4, 1, length$4);
      this.a4 = $m_ju_Arrays$().a6(s5, 32);
      this.W = $m_ju_Arrays$().a6(s4$2, 32);
      this.Q = $m_ju_Arrays$().a6(s3$3, 32);
      this.M = $m_ju_Arrays$().a6(s2$4, 32);
      this.aT.b[((1 + d6.b.length) | 0)] = this.a4;
      this.a4.b[s5.b.length] = this.W;
      this.W.b[s4$2.b.length] = this.Q;
      this.Q.b[s3$3.b.length] = this.M;
      this.M.b[s2$4.b.length] = this.a1;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.R === 0) && (this.K > 0))) {
    this.R = 32;
    this.K = ((this.K - 32) | 0);
  }
  return this;
});
$p.qz = (function(elem) {
  if ((this.R === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.a1.b[this.R] = elem;
  this.R = ((1 + this.R) | 0);
  return this;
});
$p.oD = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.R === 0) && (this.K === 0)) && (!this.hj)) ? this.s4(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.pK = (function() {
  if (this.hj) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.R + this.K) | 0);
  var realLen = ((len - this.O) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.a1;
    return new $c_sci_Vector1(((a.b.length === realLen) ? a : $m_ju_Arrays$().a6(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & ((len - 1) | 0));
    var i2 = ((((len - 1) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().af(this.M, 1, i2);
    var prefix1 = this.M.b[0];
    var a$1 = this.M.b[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.b.length === len$1) ? a$1 : $m_ju_Arrays$().a6(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.O) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & ((len - 1) | 0));
    var i2$2 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3 = ((((len - 1) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().af(this.Q, 1, i3);
    var a$2 = this.Q.b[0];
    var prefix2 = $m_ju_Arrays$().af(a$2, 1, a$2.b.length);
    var prefix1$2 = this.Q.b[0].b[0];
    var suffix2 = $m_ju_Arrays$().a6(this.Q.b[i3], i2$2);
    var a$3 = this.Q.b[i3].b[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.b.length === len$2) ? a$3 : $m_ju_Arrays$().a6(a$3, len$2));
    var len1 = prefix1$2.b.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.b.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & ((len - 1) | 0));
    var i2$3 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$2 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4 = ((((len - 1) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().af(this.W, 1, i4);
    var a$4 = this.W.b[0];
    var prefix3 = $m_ju_Arrays$().af(a$4, 1, a$4.b.length);
    var a$5 = this.W.b[0].b[0];
    var prefix2$2 = $m_ju_Arrays$().af(a$5, 1, a$5.b.length);
    var prefix1$3 = this.W.b[0].b[0].b[0];
    var suffix3 = $m_ju_Arrays$().a6(this.W.b[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().a6(this.W.b[i4].b[i3$2], i2$3);
    var a$6 = this.W.b[i4].b[i3$2].b[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.b.length === len$3) ? a$6 : $m_ju_Arrays$().a6(a$6, len$3));
    var len1$2 = prefix1$3.b.length;
    var len12$2 = ((len1$2 + (prefix2$2.b.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.b.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & ((len - 1) | 0));
    var i2$4 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$3 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$2 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5 = ((((len - 1) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().af(this.a4, 1, i5);
    var a$7 = this.a4.b[0];
    var prefix4 = $m_ju_Arrays$().af(a$7, 1, a$7.b.length);
    var a$8 = this.a4.b[0].b[0];
    var prefix3$2 = $m_ju_Arrays$().af(a$8, 1, a$8.b.length);
    var a$9 = this.a4.b[0].b[0].b[0];
    var prefix2$3 = $m_ju_Arrays$().af(a$9, 1, a$9.b.length);
    var prefix1$4 = this.a4.b[0].b[0].b[0].b[0];
    var suffix4 = $m_ju_Arrays$().a6(this.a4.b[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().a6(this.a4.b[i5].b[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().a6(this.a4.b[i5].b[i4$2].b[i3$3], i2$4);
    var a$10 = this.a4.b[i5].b[i4$2].b[i3$3].b[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.b.length === len$4) ? a$10 : $m_ju_Arrays$().a6(a$10, len$4));
    var len1$3 = prefix1$4.b.length;
    var len12$3 = ((len1$3 + (prefix2$3.b.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.b.length << 10)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.b.length << 15)) | 0), data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & ((len - 1) | 0));
    var i2$5 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$4 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$3 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5$2 = (31 & ((((len - 1) | 0) >>> 20) | 0));
    var i6 = ((((len - 1) | 0) >>> 25) | 0);
    var data$5 = $m_ju_Arrays$().af(this.aT, 1, i6);
    var a$11 = this.aT.b[0];
    var prefix5 = $m_ju_Arrays$().af(a$11, 1, a$11.b.length);
    var a$12 = this.aT.b[0].b[0];
    var prefix4$2 = $m_ju_Arrays$().af(a$12, 1, a$12.b.length);
    var a$13 = this.aT.b[0].b[0].b[0];
    var prefix3$3 = $m_ju_Arrays$().af(a$13, 1, a$13.b.length);
    var a$14 = this.aT.b[0].b[0].b[0].b[0];
    var prefix2$4 = $m_ju_Arrays$().af(a$14, 1, a$14.b.length);
    var prefix1$5 = this.aT.b[0].b[0].b[0].b[0].b[0];
    var suffix5 = $m_ju_Arrays$().a6(this.aT.b[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().a6(this.aT.b[i6].b[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().a6(this.aT.b[i6].b[i5$2].b[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().a6(this.aT.b[i6].b[i5$2].b[i4$3].b[i3$4], i2$5);
    var a$15 = this.aT.b[i6].b[i5$2].b[i4$3].b[i3$4].b[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.b.length === len$5) ? a$15 : $m_ju_Arrays$().a6(a$15, len$5));
    var len1$4 = prefix1$5.b.length;
    var len12$4 = ((len1$4 + (prefix2$4.b.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.b.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.b.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.b.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.B = (function() {
  return (((((((("VectorBuilder(len1=" + this.R) + ", lenRest=") + this.K) + ", offset=") + this.O) + ", depth=") + this.T) + ")");
});
$p.b6 = (function() {
  return this.pK();
});
$p.bh = (function(elems) {
  return this.oD(elems);
});
$p.b4 = (function(elem) {
  return this.qz(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  gW: 1,
  ac: 1,
  M: 1,
  I: 1,
  G: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.oe = null;
  $n_scm_ArrayBuffer$ = this;
  this.oe = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.dm = (function(elems) {
  return this.pm(elems);
});
$p.pm = (function(coll) {
  var k = coll.G();
  if ((k >= 0)) {
    var array = this.pN(this.oe, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.c8(array, 0, 2147483647) : coll.r().c8(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).oE(coll);
  }
});
$p.at = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.t4 = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else {
    if ((targetLen > 2147483639)) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
    }
    if ((arrayLen > 1073741819)) {
      return 2147483639;
    } else {
      var x = (arrayLen << 1);
      var y = ((x > 16) ? x : 16);
      return ((targetLen > y) ? targetLen : y);
    }
  }
});
$p.pN = (function(array, curSize, targetSize) {
  var newLen = this.t4(array.b.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.F(0, res, 0, curSize);
    return res;
  }
});
$p.as = (function(source) {
  return this.pm(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  h1: 1,
  ar: 1,
  W: 1,
  F: 1,
  a: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.dY = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.bk = (function(size) {
  this.dY.bk(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  h2: 1,
  b4: 1,
  M: 1,
  I: 1,
  G: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.et = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  h7: 1,
  aV: 1,
  W: 1,
  F: 1,
  a: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
/** @constructor */
function $c_scm_HashSet$$anon$4(initialCapacity$1, loadFactor$1) {
  this.dY = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.bk = (function(size) {
  this.dY.bk(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  hh: 1,
  b4: 1,
  M: 1,
  I: 1,
  G: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.gg = outer;
  $thiz.e0 = 0;
  $thiz.di = null;
  $thiz.gh = outer.aU.b.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.e0 = 0;
  this.di = null;
  this.gh = 0;
  this.gg = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.u = (function() {
  if ((this.di !== null)) {
    return true;
  } else {
    while ((this.e0 < this.gh)) {
      var n = this.gg.aU.b[this.e0];
      this.e0 = ((1 + this.e0) | 0);
      if ((n !== null)) {
        this.di = n;
        return true;
      }
    }
    return false;
  }
});
$p.n = (function() {
  if ((!this.u())) {
    return $m_sc_Iterator$().P.n();
  } else {
    var r = this.jC(this.di);
    this.di = this.di.aV;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.gi = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.gi = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.bk = (function(size) {
});
$p.bh = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b6 = (function() {
  return this.gi;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.et = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  hk: 1,
  aV: 1,
  W: 1,
  F: 1,
  a: 1
}));
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$();
  }
  return $n_scm_IndexedSeq$;
}
/** @constructor */
function $c_scm_ListBuffer$() {
}
$p = $c_scm_ListBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
}
$h_scm_ListBuffer$.prototype = $p;
$p.dm = (function(elems) {
  return new $c_scm_ListBuffer().gP(elems);
});
$p.at = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.as = (function(source) {
  return new $c_scm_ListBuffer().gP(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  hn: 1,
  ar: 1,
  W: 1,
  F: 1,
  a: 1
}));
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$();
  }
  return $n_scm_ListBuffer$;
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.jg = null;
  this.on = null;
  this.om = 0;
  this.jg = underlying;
  this.on = mutationCount;
  this.om = (mutationCount.U() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.u = (function() {
  $m_scm_MutationTracker$().p0(this.om, (this.on.U() | 0), "mutation occurred during iteration");
  return this.jg.u();
});
$p.n = (function() {
  return this.jg.n();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  hp: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.b7();
    var x$3 = x.b7();
    return ((x$2 === null) ? (x$3 === null) : (x$2 === x$3));
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.Z.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.Z.Q())) + "]") : clazz.Z.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.gk = 0;
  this.or = 0;
  this.os = null;
  this.os = x$2;
  this.gk = 0;
  this.or = x$2.au();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.u = (function() {
  return (this.gk < this.or);
});
$p.n = (function() {
  var result = this.os.av(this.gk);
  this.gk = ((1 + this.gk) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  i4: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$p = $c_sjs_js_WrappedArray$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $p;
$p.dm = (function(elems) {
  return this.pn(elems);
});
$p.at = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.pn = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).b6();
});
$p.as = (function(source) {
  return this.pn(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  ib: 1,
  ar: 1,
  W: 1,
  F: 1,
  a: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
}
$p = $c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
}
$h_sjsr_WrappedVarArgs$.prototype = $p;
$p.dm = (function(elems) {
  return this.jJ(elems);
});
$p.jJ = (function(source) {
  return this.at().bh(source).b6();
});
$p.at = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.e1))));
});
$p.as = (function(source) {
  return this.jJ(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  ir: 1,
  ar: 1,
  W: 1,
  F: 1,
  a: 1
}));
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$();
  }
  return $n_sjsr_WrappedVarArgs$;
}
/** @constructor */
function $c_s_util_Failure(exception) {
  this.e2 = null;
  this.e2 = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.jU = (function() {
  return true;
});
$p.pt = (function() {
  return false;
});
$p.N = (function() {
  var $x_1 = this.e2;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ad : $x_1);
});
$p.jX = (function(f) {
  return this;
});
$p.pE = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.c6(this.e2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().eJ(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.cv = (function(fa, fb) {
  return fa.i(this.e2);
});
$p.aw = (function() {
  return "Failure";
});
$p.au = (function() {
  return 1;
});
$p.av = (function(x$1) {
  return ((x$1 === 0) ? this.e2 : $m_sr_Statics$().eR(x$1));
});
$p.bA = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.D = (function() {
  return $m_s_util_hashing_MurmurHash3$().fC(this, (-1408943127), true);
});
$p.B = (function() {
  return $m_sr_ScalaRunTime$().jj(this);
});
$p.y = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.e2;
    var x$2 = x$1.e2;
    return ((x === null) ? (x$2 === null) : x.y(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  cr: 1,
  ct: 1,
  u: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.eE = null;
  this.eE = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.jU = (function() {
  return false;
});
$p.pt = (function() {
  return true;
});
$p.N = (function() {
  return this.eE;
});
$p.jX = (function(f) {
  try {
    return new $c_s_util_Success(f.i(this.eE));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().eJ(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.pE = (function(pf) {
  return this;
});
$p.cv = (function(fa, fb) {
  try {
    return fb.i(this.eE);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().eJ(e$2)) {
      return fa.i(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.aw = (function() {
  return "Success";
});
$p.au = (function() {
  return 1;
});
$p.av = (function(x$1) {
  return ((x$1 === 0) ? this.eE : $m_sr_Statics$().eR(x$1));
});
$p.bA = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.D = (function() {
  return $m_s_util_hashing_MurmurHash3$().fC(this, (-1750213842), true);
});
$p.B = (function() {
  return $m_sr_ScalaRunTime$().jj(this);
});
$p.y = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().x(this.eE, x$1.eE)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  cs: 1,
  ct: 1,
  u: 1,
  d: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  if ((!transaction.r5($thiz))) {
    transaction.rr($thiz);
  }
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gB($thiz.jv(), transaction);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V($thiz) {
  var arr = $thiz.hR;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$1 = arr[i];
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(_$1.hT, _$1, false);
    i = ((1 + i) | 0);
  }
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V($thiz) {
  var arr = $thiz.hR;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$2 = arr[i];
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(_$2.hT, _$2);
    i = ((1 + i) | 0);
  }
}
class $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(causes) {
    super();
    this.fM = null;
    this.fM = causes;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().r1(causes), null, true, true);
    var this$3 = causes.eM($m_s_$less$colon$less$().h9).bT();
    if ((!this$3.j())) {
      this.jS(this$3.N());
    }
  }
  bA() {
    return new $c_s_Product$$anon$1(this);
  }
  D() {
    return $m_s_util_hashing_MurmurHash3$().hB(this, (-889275714), null);
  }
  y(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError)) {
      var x = this.fM;
      var x$2 = x$0.fM;
      return ((x === null) ? (x$2 === null) : x.y(x$2));
    } else {
      return false;
    }
  }
  au() {
    return 1;
  }
  aw() {
    return "CombinedError";
  }
  av(n) {
    if ((n === 0)) {
      return this.fM;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  B() {
    return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(this.fM.eM($m_s_$less$colon$less$().h9).eV(), "", "; ", ""));
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$CombinedError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b8)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$CombinedError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$CombinedError, "com.raquo.airstream.core.AirstreamError$CombinedError", ({
  b8: 1,
  au: 1,
  v: 1,
  a: 1,
  d: 1,
  u: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fO = null;
    this.fN = null;
    this.fO = error;
    this.fN = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eO(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eO(cause)), null, true, true);
    this.jS(cause);
  }
  bA() {
    return new $c_s_Product$$anon$1(this);
  }
  D() {
    return $m_s_util_hashing_MurmurHash3$().hB(this, (-889275714), null);
  }
  y(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.fO;
      var x$2 = x$0.fO;
      if (((x === null) ? (x$2 === null) : x.y(x$2))) {
        var x$3 = this.fN;
        var x$4 = x$0.fN;
        return ((x$3 === null) ? (x$4 === null) : x$3.y(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  au() {
    return 2;
  }
  aw() {
    return "ErrorHandlingError";
  }
  av(n) {
    if ((n === 0)) {
      return this.fO;
    }
    if ((n === 1)) {
      return this.fN;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  B() {
    return ((("ErrorHandlingError: " + this.fO) + "; cause: ") + this.fN);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b9)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  b9: 1,
  au: 1,
  v: 1,
  a: 1,
  d: 1,
  u: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.fP = null;
    this.fP = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eO(error)), null, true, true);
  }
  bA() {
    return new $c_s_Product$$anon$1(this);
  }
  D() {
    return $m_s_util_hashing_MurmurHash3$().hB(this, (-889275714), null);
  }
  y(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.fP;
      var x$2 = x$0.fP;
      return ((x === null) ? (x$2 === null) : x.y(x$2));
    } else {
      return false;
    }
  }
  au() {
    return 1;
  }
  aw() {
    return "ObserverError";
  }
  av(n) {
    if ((n === 0)) {
      return this.fP;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  B() {
    return ("ObserverError: " + this.fP);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ba)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  ba: 1,
  au: 1,
  v: 1,
  a: 1,
  d: 1,
  u: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fR = null;
    this.fQ = null;
    this.fR = error;
    this.fQ = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eO(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eO(cause)), null, true, true);
    this.jS(cause);
  }
  bA() {
    return new $c_s_Product$$anon$1(this);
  }
  D() {
    return $m_s_util_hashing_MurmurHash3$().hB(this, (-889275714), null);
  }
  y(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.fR;
      var x$2 = x$0.fR;
      if (((x === null) ? (x$2 === null) : x.y(x$2))) {
        var x$3 = this.fQ;
        var x$4 = x$0.fQ;
        return ((x$3 === null) ? (x$4 === null) : x$3.y(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  au() {
    return 2;
  }
  aw() {
    return "ObserverErrorHandlingError";
  }
  av(n) {
    if ((n === 0)) {
      return this.fR;
    }
    if ((n === 1)) {
      return this.fQ;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  B() {
    return ((("ObserverErrorHandlingError: " + this.fR) + "; cause: ") + this.fQ);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bb)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bb: 1,
  au: 1,
  v: 1,
  a: 1,
  d: 1,
  u: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.f5 = null;
    this.f4 = 0;
    this.f5 = trx;
    this.f4 = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  bA() {
    return new $c_s_Product$$anon$1(this);
  }
  D() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().m(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().X(this.f5));
    acc = $m_sr_Statics$().m(acc, this.f4);
    return $m_sr_Statics$().J(acc, 2);
  }
  y(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.f4 === x$0.f4)) {
        var x = this.f5;
        var x$2 = x$0.f5;
        return ((x === null) ? (x$2 === null) : (x === x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  au() {
    return 2;
  }
  aw() {
    return "TransactionDepthExceeded";
  }
  av(n) {
    if ((n === 0)) {
      return this.f5;
    }
    if ((n === 1)) {
      return this.f4;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  B() {
    return ((("TransactionDepthExceeded: " + this.f5) + "; maxDepth: ") + this.f4);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bc)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bc: 1,
  au: 1,
  v: 1,
  a: 1,
  d: 1,
  u: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.gR();
}
var $d_Lcom_raquo_airstream_core_Signal = new $TypeData().i(1, "com.raquo.airstream.core.Signal", ({
  aD: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1
}));
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.kJ = 1;
  $thiz.gY = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.gY = ((1 + $thiz.gY) | 0);
  $thiz.gX.kD.U();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.gX.kB.U(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().eJ(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
    }
  }
  $x_1.pE(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.gX.kC.U();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.l8 = null;
  this.dv = null;
  this.i7 = null;
  this.i6 = null;
  this.aK = null;
  this.l8 = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.i7 = initial;
  this.i6 = new $c_Lcom_raquo_airstream_state_VarSignal(this.i7, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.aK = this.i6;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.eb = (function() {
  return this.l8;
});
$p.e8 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fF = (function() {
  return this.aK;
});
$p.t7 = (function(value, transaction) {
  this.i7 = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.i6, value, transaction);
});
$p.eW = (function() {
  return this.aK;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  dt: 1,
  ag: 1,
  av: 1,
  aE: 1,
  a1: 1,
  dv: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.iw;
  if ((x === (void 0))) {
    $thiz.iw = $m_sjs_js_defined$().qI($m_Lcom_raquo_ew_JsArray$().bq($m_sr_ScalaRunTime$().c(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.nA;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].tC() === propDomName)) {
          var $x_1 = i;
          break _return;
        }
        i = ((1 + i) | 0);
      }
      var $x_1 = (-1);
    }
    return ($x_1 >= 0);
  } else {
    return false;
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(tag, ref) {
  this.iv = null;
  this.nB = null;
  this.nz = null;
  this.ny = null;
  this.nx = null;
  this.ix = null;
  this.cf = null;
  this.nA = null;
  this.iw = null;
  this.ix = tag;
  this.cf = ref;
  this.iv = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.nA = (void 0);
  this.iw = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.fr = (function() {
  return this.iv;
});
$p.p4 = (function(x$1) {
  this.iv = x$1;
});
$p.ct = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eG(parentNode, this, (void 0));
});
$p.bS = (function() {
  return this.nB;
});
$p.jr = (function(x$0) {
  this.nB = x$0;
});
$p.ju = (function() {
  return this.nz;
});
$p.fs = (function() {
  return this.ny;
});
$p.gx = (function() {
  return this.nx;
});
$p.jt = (function(x$1) {
  this.ny = x$1;
});
$p.js = (function(x$1) {
  this.nx = x$1;
});
$p.p5 = (function(x$0) {
  this.nz = x$0;
});
$p.ej = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.ef = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.r6 = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().ps(this.cf)) {
    var x1 = this.ix;
    if (false) {
      return x1.tx();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().nh;
  }
});
$p.sb = (function(propDomName) {
  var x = this.r6();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().s1(x, propDomName, 0));
});
$p.pz = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.sb(key.d6)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.d6)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.d6) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().p9(this.cf)) + "` that already has an input controller for `") + key.d6) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.d6);
      }
    }
  }
});
$p.B = (function() {
  return (("ReactiveHtmlElement(" + ((this.cf !== null) ? this.cf.outerHTML : ("tag=" + this.ix.iB))) + ")");
});
$p.a7 = (function() {
  return this.cf;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  eE: 1,
  ay: 1,
  U: 1,
  aF: 1,
  aO: 1,
  bp: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(tag, ref) {
  this.iy = null;
  this.nF = null;
  this.nE = null;
  this.nD = null;
  this.nC = null;
  this.nG = null;
  this.dA = null;
  this.nG = tag;
  this.dA = ref;
  this.iy = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveSvgElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = $p;
$p.fr = (function() {
  return this.iy;
});
$p.p4 = (function(x$1) {
  this.iy = x$1;
});
$p.ct = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eG(parentNode, this, (void 0));
});
$p.bS = (function() {
  return this.nF;
});
$p.jr = (function(x$0) {
  this.nF = x$0;
});
$p.ju = (function() {
  return this.nE;
});
$p.fs = (function() {
  return this.nD;
});
$p.gx = (function() {
  return this.nC;
});
$p.jt = (function(x$1) {
  this.nD = x$1;
});
$p.js = (function(x$1) {
  this.nC = x$1;
});
$p.p5 = (function(x$0) {
  this.nE = x$0;
});
$p.ej = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.ef = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.pz = (function(key) {
});
$p.B = (function() {
  return (("ReactiveSvgElement(" + ((this.dA !== null) ? this.dA.outerHTML : ("tag=" + this.nG.iC))) + ")");
});
$p.a7 = (function() {
  return this.dA;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveSvgElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveSvgElement, "com.raquo.laminar.nodes.ReactiveSvgElement", ({
  eF: 1,
  ay: 1,
  U: 1,
  aF: 1,
  aO: 1,
  bp: 1
}));
function $ct_jl_ArrayIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_ArrayIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().i($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  eP: 1,
  bw: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bu: 1,
  ah: 1,
  a: 1,
  a6: 1,
  a2: 1,
  az: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  eT: 1,
  ah: 1,
  a: 1,
  a6: 1,
  a2: 1,
  az: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  eV: 1,
  ah: 1,
  a: 1,
  a6: 1,
  a2: 1,
  az: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().pU($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bx)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bx: 1,
  ah: 1,
  a: 1,
  a6: 1,
  a2: 1,
  az: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  f0: 1,
  bv: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1
}));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().tj(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  f5: 1,
  a: 1,
  a6: 1,
  aP: 1,
  a2: 1,
  az: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.rN = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.aw = (function() {
  return "None";
});
$p.au = (function() {
  return 0;
});
$p.av = (function(x$1) {
  return $m_sr_Statics$().eR(x$1);
});
$p.bA = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.D = (function() {
  return 2433880;
});
$p.B = (function() {
  return "None";
});
$p.N = (function() {
  this.rN();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  ft: 1,
  bA: 1,
  b: 1,
  u: 1,
  d: 1,
  a: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.cA = null;
  this.cA = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.N = (function() {
  return this.cA;
});
$p.aw = (function() {
  return "Some";
});
$p.au = (function() {
  return 1;
});
$p.av = (function(x$1) {
  return ((x$1 === 0) ? this.cA : $m_sr_Statics$().eR(x$1));
});
$p.bA = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.D = (function() {
  return $m_s_util_hashing_MurmurHash3$().fC(this, 1323286827, true);
});
$p.B = (function() {
  return $m_sr_ScalaRunTime$().jj(this);
});
$p.y = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().x(this.cA, x$1.cA)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bB)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bB: 1,
  bA: 1,
  b: 1,
  u: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.c7 = (function() {
  return this.bw();
});
$p.gD = (function(coll) {
  return this.br().as(coll);
});
$p.eU = (function() {
  return this.br().at();
});
$p.bT = (function() {
  return $f_sc_IterableOps__headOption__s_Option(this);
});
$p.a2 = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$p.ag = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.fv = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.j = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.c8 = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.e4 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.eV = (function() {
  return $m_sci_Nil$().ee(this);
});
$p.G = (function() {
  return (-1);
});
$p.gC = (function(coll) {
  return this.gD(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.bX = xs;
  $thiz.I = 0;
  $thiz.bM = $m_jl_reflect_Array$().cb($thiz.bX);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.bX = null;
  this.I = 0;
  this.bM = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.G = (function() {
  return ((this.bM - this.I) | 0);
});
$p.u = (function() {
  return (this.I < this.bM);
});
$p.n = (function() {
  if ((this.I >= $m_jl_reflect_Array$().cb(this.bX))) {
    $m_sc_Iterator$().P.n();
  }
  var r = $m_sr_ScalaRunTime$().eK(this.bX, this.I);
  this.I = ((1 + this.I) | 0);
  return r;
});
$p.dn = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.I + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.bM;
    } else {
      var a = this.bM;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.I = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bY) ? $thiz.bY : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.iV = self;
  $thiz.d7 = 0;
  $thiz.bY = self.A();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.iV = null;
  this.d7 = 0;
  this.bY = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.G = (function() {
  return this.bY;
});
$p.u = (function() {
  return (this.bY > 0);
});
$p.n = (function() {
  if ((this.bY > 0)) {
    var r = this.iV.C(this.d7);
    this.d7 = ((1 + this.d7) | 0);
    this.bY = ((this.bY - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().P.n();
  }
});
$p.dn = (function(n) {
  if ((n > 0)) {
    this.d7 = ((this.d7 + n) | 0);
    var b = ((this.bY - n) | 0);
    this.bY = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gQ = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bY = ((b < 0) ? 0 : b);
  this.d7 = ((this.d7 + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bH: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.gi = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().P);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.qx = (function(elem) {
  this.gi = this.gi.jw(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.b4 = (function(elem) {
  return this.qx(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  fU: 1,
  hj: 1,
  ac: 1,
  M: 1,
  I: 1,
  G: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.d0(x, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => default$1.i(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.r();
  while (it.u()) {
    var next = it.n();
    f.eI(next.bp(), next.bg());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.r(), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bp();
      var v = x0$1$2$2.bg();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.eU();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.r();
  while (it.u()) {
    var next = it.n();
    if (seen.hw(f.i(next))) {
      builder.b4(next);
    }
  }
  return builder.b6();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.ea().at();
  b.bh($thiz);
  b.bh(suffix);
  return b.b6();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.iX)) {
    $thiz.iY = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.iX = true;
  }
  return $thiz.iY;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.iX) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.iY);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.iY = null;
  this.iZ = null;
  this.iX = false;
  $n_sci_ArraySeq$ = this;
  this.iZ = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.jF = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.hO($m_s_Array$().pk(it, tag)));
});
$p.hH = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2$2) => $m_sci_ArraySeq$().hO($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.hO = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    return new $c_sci_ArraySeq$ofRef(x);
  } else if ((x instanceof $ac_I)) {
    return new $c_sci_ArraySeq$ofInt(x);
  } else if ((x instanceof $ac_D)) {
    return new $c_sci_ArraySeq$ofDouble(x);
  } else if ((x instanceof $ac_J)) {
    return new $c_sci_ArraySeq$ofLong(x);
  } else if ((x instanceof $ac_F)) {
    return new $c_sci_ArraySeq$ofFloat(x);
  } else if ((x instanceof $ac_C)) {
    return new $c_sci_ArraySeq$ofChar(x);
  } else if ((x instanceof $ac_B)) {
    return new $c_sci_ArraySeq$ofByte(x);
  } else if ((x instanceof $ac_S)) {
    return new $c_sci_ArraySeq$ofShort(x);
  } else if ((x instanceof $ac_Z)) {
    return new $c_sci_ArraySeq$ofBoolean(x);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_sci_ArraySeq$ofUnit(x);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$p.jE = (function(it, evidence$5) {
  return this.jF(it, evidence$5);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  ga: 1,
  bL: 1,
  bF: 1,
  bE: 1,
  bG: 1,
  a: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_sci_HashMapBuilder$$anon$1(outer, x2$1) {
  this.c0 = 0;
  this.g6 = 0;
  this.ex = null;
  this.bP = 0;
  this.da = null;
  this.g7 = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bx);
  while (this.u()) {
    var originalHash = this.ex.gE(this.c0);
    outer.fG(outer.cP, this.ex.e9(this.c0), this.ex.dp(this.c0), originalHash, $m_sc_Hashing$().cG(originalHash), 0);
    this.c0 = ((1 + this.c0) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.k1 = (function() {
  $m_sc_Iterator$().P.n();
  throw new $c_jl_ClassCastException();
});
$p.n = (function() {
  this.k1();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  ge: 1,
  bY: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.t)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.t)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dN = 0;
  this.fl = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  gv: 1,
  gw: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dP = 0;
  this.dO = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  gx: 1,
  gy: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dQ = 0;
  this.cU = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  gz: 1,
  gA: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.dK = 0;
  this.hi = null;
  this.c1 = 0;
  this.g8 = null;
  this.g9 = null;
  this.j3 = 0;
  this.o8 = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.j3 = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.D = (function() {
  return $m_s_util_hashing_MurmurHash3$().pV(this.j3, $m_sr_Statics$().X(this.o8), (-889275714));
});
$p.sz = (function() {
  if ((!this.u())) {
    $m_sc_Iterator$().P.n();
  }
  this.j3 = this.hi.gE(this.dK);
  this.o8 = this.hi.dp(this.dK);
  this.dK = ((this.dK - 1) | 0);
  return this;
});
$p.n = (function() {
  return this.sz();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  gC: 1,
  gb: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.c0 = 0;
  this.g6 = 0;
  this.ex = null;
  this.bP = 0;
  this.da = null;
  this.g7 = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.sy = (function() {
  if ((!this.u())) {
    $m_sc_Iterator$().P.n();
  }
  var payload = this.ex.jM(this.c0);
  this.c0 = ((1 + this.c0) | 0);
  return payload;
});
$p.n = (function() {
  return this.sy();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  gD: 1,
  bY: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bQ <= $thiz.aL)) {
    $m_sc_Iterator$().P.n();
  }
  $thiz.dS = ((1 + $thiz.dS) | 0);
  var slice = $thiz.j5.d4($thiz.dS);
  while ((slice.b.length === 0)) {
    $thiz.dS = ((1 + $thiz.dS) | 0);
    slice = $thiz.j5.d4($thiz.dS);
  }
  $thiz.gc = $thiz.eA;
  var count = $thiz.oa;
  var idx = $thiz.dS;
  var c = (((count + ((count >>> 31) | 0)) | 0) >> 1);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.dR = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x1 = $thiz.dR;
  switch (x1) {
    case 1: {
      $thiz.bc = slice;
      break;
    }
    case 2: {
      $thiz.bd = slice;
      break;
    }
    case 3: {
      $thiz.bH = slice;
      break;
    }
    case 4: {
      $thiz.cC = slice;
      break;
    }
    case 5: {
      $thiz.ez = slice;
      break;
    }
    case 6: {
      $thiz.j4 = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.eA = (($thiz.gc + Math.imul(slice.b.length, (1 << Math.imul(5, (($thiz.dR - 1) | 0))))) | 0);
  if (($thiz.eA > $thiz.df)) {
    $thiz.eA = $thiz.df;
  }
  if (($thiz.dR > 1)) {
    $thiz.fm = (((1 << Math.imul(5, $thiz.dR)) - 1) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.aL - $thiz.bQ) | 0) + $thiz.df) | 0);
  if ((pos === $thiz.eA)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dR > 1)) {
    var io = ((pos - $thiz.gc) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.fm ^ io));
    $thiz.fm = io;
  }
  $thiz.bQ = (($thiz.bQ - $thiz.aL) | 0);
  var a = $thiz.bc.b.length;
  var b = $thiz.bQ;
  $thiz.de = ((a < b) ? a : b);
  $thiz.aL = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bc = $thiz.bd.b[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bd = $thiz.bH.b[(31 & ((io >>> 10) | 0))];
    $thiz.bc = $thiz.bd.b[0];
  } else if ((xor < 1048576)) {
    $thiz.bH = $thiz.cC.b[(31 & ((io >>> 15) | 0))];
    $thiz.bd = $thiz.bH.b[0];
    $thiz.bc = $thiz.bd.b[0];
  } else if ((xor < 33554432)) {
    $thiz.cC = $thiz.ez.b[(31 & ((io >>> 20) | 0))];
    $thiz.bH = $thiz.cC.b[0];
    $thiz.bd = $thiz.bH.b[0];
    $thiz.bc = $thiz.bd.b[0];
  } else {
    $thiz.ez = $thiz.j4.b[((io >>> 25) | 0)];
    $thiz.cC = $thiz.ez.b[0];
    $thiz.bH = $thiz.cC.b[0];
    $thiz.bd = $thiz.bH.b[0];
    $thiz.bc = $thiz.bd.b[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bc = $thiz.bd.b[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bd = $thiz.bH.b[(31 & ((io >>> 10) | 0))];
    $thiz.bc = $thiz.bd.b[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bH = $thiz.cC.b[(31 & ((io >>> 15) | 0))];
    $thiz.bd = $thiz.bH.b[(31 & ((io >>> 10) | 0))];
    $thiz.bc = $thiz.bd.b[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cC = $thiz.ez.b[(31 & ((io >>> 20) | 0))];
    $thiz.bH = $thiz.cC.b[(31 & ((io >>> 15) | 0))];
    $thiz.bd = $thiz.bH.b[(31 & ((io >>> 10) | 0))];
    $thiz.bc = $thiz.bd.b[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.ez = $thiz.j4.b[((io >>> 25) | 0)];
    $thiz.cC = $thiz.ez.b[(31 & ((io >>> 20) | 0))];
    $thiz.bH = $thiz.cC.b[(31 & ((io >>> 15) | 0))];
    $thiz.bd = $thiz.bH.b[(31 & ((io >>> 10) | 0))];
    $thiz.bc = $thiz.bd.b[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.j5 = null;
  this.df = 0;
  this.oa = 0;
  this.bc = null;
  this.bd = null;
  this.bH = null;
  this.cC = null;
  this.ez = null;
  this.j4 = null;
  this.de = 0;
  this.aL = 0;
  this.fm = 0;
  this.bQ = 0;
  this.dS = 0;
  this.dR = 0;
  this.gc = 0;
  this.eA = 0;
  this.j5 = v;
  this.df = totalLength;
  this.oa = sliceCount;
  this.bc = v.l;
  this.de = this.bc.b.length;
  this.aL = 0;
  this.fm = 0;
  this.bQ = this.df;
  this.dS = 0;
  this.dR = 1;
  this.gc = 0;
  this.eA = this.de;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.G = (function() {
  return ((this.bQ - this.aL) | 0);
});
$p.u = (function() {
  return (this.bQ > this.aL);
});
$p.n = (function() {
  if ((this.aL === this.de)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.bc.b[this.aL];
  this.aL = ((1 + this.aL) | 0);
  return r;
});
$p.dn = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.aL - this.bQ) | 0) + this.df) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.df;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.df)) {
      this.aL = 0;
      this.bQ = 0;
      this.de = 0;
    } else {
      while ((newpos >= this.eA)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.gc) | 0);
      if ((this.dR > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.fm ^ io));
        this.fm = io;
      }
      this.de = this.bc.b.length;
      this.aL = (31 & io);
      this.bQ = ((this.aL + ((this.df - newpos) | 0)) | 0);
      if ((this.de > this.bQ)) {
        this.de = this.bQ;
      }
    }
  }
  return this;
});
$p.c8 = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().cb(xs);
  var srcLen = ((this.bQ - this.aL) | 0);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? xsLen : ((xsLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var total$1 = ((total < 0) ? 0 : total);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total$1)) {
    if ((this.aL === this.de)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total$1 - copied) | 0);
    var b = ((this.bc.b.length - this.aL) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.bc;
      var srcPos = this.aL;
      var destPos = ((start + copied) | 0);
      src.F(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().gy(this.bc, this.aL, xs, ((start + copied) | 0), count);
    }
    this.aL = ((this.aL + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total$1;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  gF: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  B: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.ja = 0;
  $thiz.of = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.ja = 0;
  this.of = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.bk = (function(size) {
  if ((this.ja < size)) {
    this.t3(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.jc = null;
  this.oh = null;
  $n_scm_ArraySeq$ = this;
  this.jc = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.oh = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.rE = (function(it, evidence$2) {
  return this.jW($m_s_Array$().pk(it, evidence$2));
});
$p.hH = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.b7()), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => $m_scm_ArraySeq$().jW(x$2$2))));
});
$p.jW = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    return new $c_scm_ArraySeq$ofRef(x);
  } else if ((x instanceof $ac_I)) {
    return new $c_scm_ArraySeq$ofInt(x);
  } else if ((x instanceof $ac_D)) {
    return new $c_scm_ArraySeq$ofDouble(x);
  } else if ((x instanceof $ac_J)) {
    return new $c_scm_ArraySeq$ofLong(x);
  } else if ((x instanceof $ac_F)) {
    return new $c_scm_ArraySeq$ofFloat(x);
  } else if ((x instanceof $ac_C)) {
    return new $c_scm_ArraySeq$ofChar(x);
  } else if ((x instanceof $ac_B)) {
    return new $c_scm_ArraySeq$ofByte(x);
  } else if ((x instanceof $ac_S)) {
    return new $c_scm_ArraySeq$ofShort(x);
  } else if ((x instanceof $ac_Z)) {
    return new $c_scm_ArraySeq$ofBoolean(x);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_scm_ArraySeq$ofUnit(x);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$p.jE = (function(it, evidence$5) {
  return this.rE(it, evidence$5);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  h6: 1,
  bL: 1,
  bF: 1,
  bE: 1,
  bG: 1,
  a: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_scm_HashSet$$anon$1(outer) {
  this.e0 = 0;
  this.di = null;
  this.gh = 0;
  this.gg = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.jC = (function(nd) {
  return nd.eC;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  he: 1,
  b5: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.e0 = 0;
  this.di = null;
  this.gh = 0;
  this.gg = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.jC = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  hf: 1,
  b5: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.e0 = 0;
  this.di = null;
  this.gh = 0;
  this.gg = null;
  this.jf = 0;
  this.ol = null;
  this.ol = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.jf = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.D = (function() {
  return this.jf;
});
$p.jC = (function(nd) {
  this.jf = this.ol.hJ(nd.dj);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  hg: 1,
  b5: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.gj = null;
  this.gj = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.y = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.D = (function() {
  return $m_sr_Statics$().X(this.gj);
});
$p.B = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.gj);
});
$p.b7 = (function() {
  return this.gj;
});
$p.bL = (function(len) {
  return this.gj.Z.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  hu: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.bX = null;
  this.I = 0;
  this.bM = 0;
  this.iN = null;
  this.iN = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.sA = (function() {
  if ((this.I >= this.iN.b.length)) {
    $m_sc_Iterator$().P.n();
  }
  var r = this.iN.b[this.I];
  this.I = ((1 + this.I) | 0);
  return r;
});
$p.n = (function() {
  return this.sA();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  fD: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.bX = null;
  this.I = 0;
  this.bM = 0;
  this.iO = null;
  this.iO = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.sB = (function() {
  if ((this.I >= this.iO.b.length)) {
    $m_sc_Iterator$().P.n();
  }
  var r = this.iO.b[this.I];
  this.I = ((1 + this.I) | 0);
  return r;
});
$p.n = (function() {
  return $bC(this.sB());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  fE: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.bX = null;
  this.I = 0;
  this.bM = 0;
  this.iP = null;
  this.iP = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.sC = (function() {
  if ((this.I >= this.iP.b.length)) {
    $m_sc_Iterator$().P.n();
  }
  var r = this.iP.b[this.I];
  this.I = ((1 + this.I) | 0);
  return r;
});
$p.n = (function() {
  return this.sC();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  fF: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.bX = null;
  this.I = 0;
  this.bM = 0;
  this.iQ = null;
  this.iQ = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.sD = (function() {
  if ((this.I >= this.iQ.b.length)) {
    $m_sc_Iterator$().P.n();
  }
  var r = this.iQ.b[this.I];
  this.I = ((1 + this.I) | 0);
  return r;
});
$p.n = (function() {
  return this.sD();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  fG: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.bX = null;
  this.I = 0;
  this.bM = 0;
  this.iR = null;
  this.iR = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.sE = (function() {
  if ((this.I >= this.iR.b.length)) {
    $m_sc_Iterator$().P.n();
  }
  var r = this.iR.b[this.I];
  this.I = ((1 + this.I) | 0);
  return r;
});
$p.n = (function() {
  return this.sE();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  fH: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.bX = null;
  this.I = 0;
  this.bM = 0;
  this.iS = null;
  this.iS = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.sF = (function() {
  if ((this.I >= ((this.iS.b.length >>> 1) | 0))) {
    $m_sc_Iterator$().P.n();
  }
  var $x_1 = this.iS.b;
  var $x_2 = (this.I << 1);
  var r_$_lo = $x_1[$x_2];
  var r_$_hi = $x_1[(($x_2 + 1) | 0)];
  this.I = ((1 + this.I) | 0);
  return $bL(r_$_lo, r_$_hi);
});
$p.n = (function() {
  return this.sF();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  fI: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.bX = null;
  this.I = 0;
  this.bM = 0;
  this.iT = null;
  this.iT = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.sG = (function() {
  if ((this.I >= this.iT.b.length)) {
    $m_sc_Iterator$().P.n();
  }
  var r = this.iT.b[this.I];
  this.I = ((1 + this.I) | 0);
  return r;
});
$p.n = (function() {
  return this.sG();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  fJ: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.bX = null;
  this.I = 0;
  this.bM = 0;
  this.nU = null;
  this.nU = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.sH = (function() {
  if ((this.I >= this.nU.b.length)) {
    $m_sc_Iterator$().P.n();
  }
  this.I = ((1 + this.I) | 0);
});
$p.n = (function() {
  this.sH();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  fK: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.bX = null;
  this.I = 0;
  this.bM = 0;
  this.iU = null;
  this.iU = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.sI = (function() {
  if ((this.I >= this.iU.b.length)) {
    $m_sc_Iterator$().P.n();
  }
  var r = this.iU.b[this.I];
  this.I = ((1 + this.I) | 0);
  return r;
});
$p.n = (function() {
  return this.sI();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  fL: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.c7() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.X)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.ja = 0;
  this.of = 0;
  this.fp = null;
  this.og = false;
  this.jb = null;
  this.fp = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.og = (elementClass === $d_C.l());
  this.jb = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.oG = (function(elem) {
  var unboxedElem = (this.og ? $uC(elem) : ((elem === null) ? this.fp.Z.z : elem));
  this.jb.push(unboxedElem);
  return this;
});
$p.qq = (function(xs) {
  var it = xs.r();
  while (it.u()) {
    this.oG(it.n());
  }
  return this;
});
$p.t3 = (function(size) {
});
$p.b6 = (function() {
  var elemRuntimeClass = ((this.fp === $d_V.l()) ? $d_jl_Void.l() : (((this.fp === $d_sr_Null$.l()) || (this.fp === $d_sr_Nothing$.l())) ? $d_O.l() : this.fp));
  return elemRuntimeClass.Z.r().w(this.jb);
});
$p.B = (function() {
  return "ArrayBuilder.generic";
});
$p.bh = (function(elems) {
  return this.qq(elems);
});
$p.b4 = (function(elem) {
  return this.oG(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  h5: 1,
  h4: 1,
  ac: 1,
  M: 1,
  I: 1,
  G: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.iV = null;
  this.d7 = 0;
  this.bY = 0;
  this.ok = null;
  this.oj = 0;
  this.ok = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.oj = (mutationCount.U() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.u = (function() {
  $m_scm_MutationTracker$().p0(this.oj, (this.ok.U() | 0), "mutation occurred during iteration");
  return (this.bY > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  ha: 1,
  bH: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.B = (function() {
  return this.a5;
});
$p.y = (function(that) {
  return (this === that);
});
$p.D = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.ad = null;
    this.ad = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gF() {
    return $dp_toString__T(this.ad);
  }
  aw() {
    return "JavaScriptException";
  }
  au() {
    return 1;
  }
  av(x$1) {
    return ((x$1 === 0) ? this.ad : $m_sr_Statics$().eR(x$1));
  }
  bA() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  D() {
    return $m_s_util_hashing_MurmurHash3$().fC(this, 1744042595, true);
  }
  y(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().x(this.ad, x$1.ad)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cp)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  cp: 1,
  K: 1,
  E: 1,
  v: 1,
  a: 1,
  u: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.hG() === (void 0)))) {
    $thiz.hv($m_Lcom_raquo_airstream_core_Signal$().px());
  }
  $thiz.jZ(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.hG();
  if ((x === (void 0))) {
    $thiz.hv($m_Lcom_raquo_airstream_core_Signal$().px());
    var nextValue = $thiz.hC();
    $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
    var $x_1 = nextValue;
  } else {
    var $x_1 = x;
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, new $c_s_util_Failure(nextError), transaction);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  var isError = nextValue.jU();
  var elem = false;
  elem = false;
  $thiz.cH(false);
  var this$ = $thiz.cY();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.ed(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.d2();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.gL(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cH(true);
  var x = $thiz.ec();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].U();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cK(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cH(false);
  var this$ = $thiz.cY();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.dr(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cK(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.d2();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.hI(nextValue, transaction);
  }
  $thiz.cH(true);
  var x = $thiz.ec();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].U();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.cH(false);
  var this$ = $thiz.cY();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.gI(nextError);
  }
  var this$$1 = $thiz.d2();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.k5(nextError, transaction);
  }
  $thiz.cH(true);
  var x = $thiz.ec();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].U();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, _$2, transaction);
  })));
}
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.j())) {
      return s;
    } else {
      var temp$n = ((n - 1) | 0);
      var temp$s = s.v();
      n = temp$n;
      s = temp$s;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.bs(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.eU();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.r();
    var different = false;
    while (it.u()) {
      var next = it.n();
      if (seen.hw(f.i(next))) {
        builder.b4(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.b6() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.b7 = (function() {
  return $d_Z.l();
});
$p.bL = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.b7 = (function() {
  return $d_B.l();
});
$p.bL = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.b7 = (function() {
  return $d_C.l();
});
$p.bL = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.b7 = (function() {
  return $d_D.l();
});
$p.bL = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.b7 = (function() {
  return $d_F.l();
});
$p.bL = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.b7 = (function() {
  return $d_I.l();
});
$p.bL = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.b7 = (function() {
  return $d_J.l();
});
$p.bL = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.dl = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.B = (function() {
  return this.dl;
});
$p.y = (function(that) {
  return (this === that);
});
$p.D = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.b7 = (function() {
  return $d_S.l();
});
$p.bL = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.a5 = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.b7 = (function() {
  return $d_V.l();
});
$p.bL = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
function $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray($thiz) {
  return $thiz.fL.map(((_$1) => _$1.fq()));
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V($thiz) {
  var arr = $thiz.fL;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(arr[i]);
    i = ((1 + i) | 0);
  }
  if ($f_Lcom_raquo_airstream_common_MultiParentSignal__updateParentLastUpdateIds__Z($thiz)) {
    $f_Lcom_raquo_airstream_common_MultiParentSignal__updateCurrentValueFromParent__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__updateParentLastUpdateIds__Z($thiz) {
  var elem = false;
  elem = false;
  var arr = $thiz.fL;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var parent = arr[i];
    var ix = i;
    var newLastUpdateId = parent.fq();
    if ((newLastUpdateId !== ($thiz.oA()[ix] | 0))) {
      $thiz.oA()[ix] = newLastUpdateId;
      var ev$3 = true;
      elem = ev$3;
    }
    i = ((1 + i) | 0);
  }
  return elem;
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__updateCurrentValueFromParent__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, $thiz.jv());
}
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.br = (function() {
  return $m_sc_View$();
});
$p.B = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bw = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.b8() === that.b8())) {
      try {
        return $thiz.td(that);
      } catch (e) {
        if ((e instanceof $c_jl_ClassCastException)) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aX)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aX)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.dl = null;
  this.dl = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.b7 = (function() {
  return $d_O.l();
});
$p.bL = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  hv: 1,
  aK: 1,
  aJ: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.a5 = null;
  this.a5 = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  hx: 1,
  hw: 1,
  a8: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
  }
  return $n_s_reflect_ManifestFactory$BooleanManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.a5 = null;
  this.a5 = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  hz: 1,
  hy: 1,
  a8: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.a5 = null;
  this.a5 = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  hB: 1,
  hA: 1,
  a8: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.a5 = null;
  this.a5 = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  hD: 1,
  hC: 1,
  a8: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.a5 = null;
  this.a5 = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  hF: 1,
  hE: 1,
  a8: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.a5 = null;
  this.a5 = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  hH: 1,
  hG: 1,
  a8: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.a5 = null;
  this.a5 = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  hJ: 1,
  hI: 1,
  a8: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.dl = null;
  this.dl = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.b7 = (function() {
  return $d_sr_Nothing$.l();
});
$p.bL = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  hK: 1,
  aK: 1,
  aJ: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.dl = null;
  this.dl = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.b7 = (function() {
  return $d_sr_Null$.l();
});
$p.bL = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  hL: 1,
  aK: 1,
  aJ: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
  }
  return $n_s_reflect_ManifestFactory$NullManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.dl = null;
  this.dl = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.b7 = (function() {
  return $d_O.l();
});
$p.bL = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  hM: 1,
  aK: 1,
  aJ: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.a5 = null;
  this.a5 = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  hO: 1,
  hN: 1,
  a8: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
  }
  return $n_s_reflect_ManifestFactory$ShortManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.a5 = null;
  this.a5 = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  hQ: 1,
  hP: 1,
  a8: 1,
  T: 1,
  D: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
/** @constructor */
function $c_Lccrystal_site_Tab$$anon$1() {
  this.el = null;
  this.ek = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "manifesto", "Manifesto & Architecture", "\u25c8");
}
$p = $c_Lccrystal_site_Tab$$anon$1.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$1;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$1() {
}
$h_Lccrystal_site_Tab$$anon$1.prototype = $p;
$p.au = (function() {
  return 0;
});
$p.av = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aw = (function() {
  return "Manifesto";
});
$p.B = (function() {
  return "Manifesto";
});
var $d_Lccrystal_site_Tab$$anon$1 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$1, "ccrystal.site.Tab$$anon$1", ({
  cC: 1,
  ak: 1,
  d: 1,
  u: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_Tab$$anon$2() {
  this.el = null;
  this.ek = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "explorer", "Interactive DAG Explorer", "\u2b21");
}
$p = $c_Lccrystal_site_Tab$$anon$2.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$2;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$2() {
}
$h_Lccrystal_site_Tab$$anon$2.prototype = $p;
$p.au = (function() {
  return 0;
});
$p.av = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aw = (function() {
  return "Explorer";
});
$p.B = (function() {
  return "Explorer";
});
var $d_Lccrystal_site_Tab$$anon$2 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$2, "ccrystal.site.Tab$$anon$2", ({
  cD: 1,
  ak: 1,
  d: 1,
  u: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_Tab$$anon$3() {
  this.el = null;
  this.ek = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "quickstart", "Install & Quickstart", "\u25c7");
}
$p = $c_Lccrystal_site_Tab$$anon$3.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$3;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$3() {
}
$h_Lccrystal_site_Tab$$anon$3.prototype = $p;
$p.au = (function() {
  return 0;
});
$p.av = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aw = (function() {
  return "Quickstart";
});
$p.B = (function() {
  return "Quickstart";
});
var $d_Lccrystal_site_Tab$$anon$3 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$3, "ccrystal.site.Tab$$anon$3", ({
  cE: 1,
  ak: 1,
  d: 1,
  u: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_Tab$$anon$4() {
  this.el = null;
  this.ek = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "mcp", "Native MCP Reference", "\u2325");
}
$p = $c_Lccrystal_site_Tab$$anon$4.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$4;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$4() {
}
$h_Lccrystal_site_Tab$$anon$4.prototype = $p;
$p.au = (function() {
  return 0;
});
$p.av = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aw = (function() {
  return "Mcp";
});
$p.B = (function() {
  return "Mcp";
});
var $d_Lccrystal_site_Tab$$anon$4 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$4, "ccrystal.site.Tab$$anon$4", ({
  cF: 1,
  ak: 1,
  d: 1,
  u: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_Tab$$anon$5() {
  this.el = null;
  this.ek = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "agent-ingestion", "Agent Ingestion (llms.txt)", "\u00a7");
}
$p = $c_Lccrystal_site_Tab$$anon$5.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$5;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$5() {
}
$h_Lccrystal_site_Tab$$anon$5.prototype = $p;
$p.au = (function() {
  return 0;
});
$p.av = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aw = (function() {
  return "AgentIngestion";
});
$p.B = (function() {
  return "AgentIngestion";
});
var $d_Lccrystal_site_Tab$$anon$5 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$5, "ccrystal.site.Tab$$anon$5", ({
  cG: 1,
  ak: 1,
  d: 1,
  u: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_TabExplorer$Scenario$$anon$1() {
  this.fK = null;
  $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__(this, "inception", "1. Track Inception", "Goal defined, acceptance criteria seeded, single init transition.");
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$$anon$1.prototype = new $h_Lccrystal_site_TabExplorer$Scenario();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$$anon$1;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$$anon$1() {
}
$h_Lccrystal_site_TabExplorer$Scenario$$anon$1.prototype = $p;
$p.au = (function() {
  return 0;
});
$p.av = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aw = (function() {
  return "Inception";
});
$p.B = (function() {
  return "Inception";
});
var $d_Lccrystal_site_TabExplorer$Scenario$$anon$1 = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$$anon$1, "ccrystal.site.TabExplorer$Scenario$$anon$1", ({
  cK: 1,
  aB: 1,
  d: 1,
  u: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_TabExplorer$Scenario$$anon$2() {
  this.fK = null;
  $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__(this, "spike", "2. Active Engineering Spike", "Task 1 completed, git_worktree transient lease active, checkpoint recorded.");
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$$anon$2.prototype = new $h_Lccrystal_site_TabExplorer$Scenario();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$$anon$2;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$$anon$2() {
}
$h_Lccrystal_site_TabExplorer$Scenario$$anon$2.prototype = $p;
$p.au = (function() {
  return 0;
});
$p.av = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aw = (function() {
  return "ActiveSpike";
});
$p.B = (function() {
  return "ActiveSpike";
});
var $d_Lccrystal_site_TabExplorer$Scenario$$anon$2 = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$$anon$2, "ccrystal.site.TabExplorer$Scenario$$anon$2", ({
  cL: 1,
  aB: 1,
  d: 1,
  u: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_TabExplorer$Scenario$$anon$3() {
  this.fK = null;
  $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__(this, "artifact", "3. World-State & Artifacts", "Hardware test rig artifact registered as precondition; living context grounded.");
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$$anon$3.prototype = new $h_Lccrystal_site_TabExplorer$Scenario();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$$anon$3;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$$anon$3() {
}
$h_Lccrystal_site_TabExplorer$Scenario$$anon$3.prototype = $p;
$p.au = (function() {
  return 0;
});
$p.av = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aw = (function() {
  return "PhysicalArtifact";
});
$p.B = (function() {
  return "PhysicalArtifact";
});
var $d_Lccrystal_site_TabExplorer$Scenario$$anon$3 = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$$anon$3, "ccrystal.site.TabExplorer$Scenario$$anon$3", ({
  cM: 1,
  aB: 1,
  d: 1,
  u: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.gZ, $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.gZ, $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.kH = null;
  this.kG = false;
  this.kI = null;
  this.kE = null;
  this.kF = null;
  this.kK = false;
  this.kJ = 0;
  this.gY = 0;
  this.gX = null;
  this.kH = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.gX = makeConfig.qG(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => this.gY)), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.eb = (function() {
  return this.kH;
});
$p.e8 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fy = (function() {
  return this.kG;
});
$p.ec = (function() {
  return this.kI;
});
$p.cH = (function(x$1) {
  this.kG = x$1;
});
$p.fB = (function(x$1) {
  this.kI = x$1;
});
$p.y = (function(obj) {
  return (this === obj);
});
$p.D = (function() {
  return $systemIdentityHashCode(this);
});
$p.gH = (function(observer) {
});
$p.cY = (function() {
  return this.kE;
});
$p.d2 = (function() {
  return this.kF;
});
$p.gT = (function() {
  return this.kK;
});
$p.f1 = (function(x$1) {
  this.kK = x$1;
});
$p.gv = (function(x$0) {
  this.kE = x$0;
});
$p.gw = (function(x$0) {
  this.kF = x$0;
});
$p.gB = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eX = (function() {
  return this.kJ;
});
$p.gM = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.gJ = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.gK = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.eW = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  dj: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  be: 1,
  bd: 1,
  aw: 1,
  bf: 1,
  df: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.ld = null;
  this.lc = false;
  this.le = null;
  this.i8 = 0;
  this.la = null;
  this.lb = null;
  this.lh = false;
  this.i9 = null;
  this.lf = null;
  this.lg = 0;
  this.lf = parentDisplayName;
  this.ld = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.i8 = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.i9 = (void 0);
  this.lg = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.eb = (function() {
  return this.ld;
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fy = (function() {
  return this.lc;
});
$p.ec = (function() {
  return this.le;
});
$p.cH = (function(x$1) {
  this.lc = x$1;
});
$p.fB = (function(x$1) {
  this.le = x$1;
});
$p.gK = (function() {
});
$p.y = (function(obj) {
  return (this === obj);
});
$p.D = (function() {
  return $systemIdentityHashCode(this);
});
$p.fq = (function() {
  return this.i8;
});
$p.hv = (function(x$1) {
  this.i8 = x$1;
});
$p.fF = (function() {
  return this;
});
$p.gJ = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.gH = (function(observer) {
  observer.ed($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cY = (function() {
  return this.la;
});
$p.d2 = (function() {
  return this.lb;
});
$p.gT = (function() {
  return this.lh;
});
$p.f1 = (function(x$1) {
  this.lh = x$1;
});
$p.gv = (function(x$0) {
  this.la = x$0;
});
$p.gw = (function(x$0) {
  this.lb = x$0;
});
$p.hG = (function() {
  return this.i9;
});
$p.jZ = (function(x$1) {
  this.i9 = x$1;
});
$p.gB = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gR = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.eX = (function() {
  return this.lg;
});
$p.hC = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gM = (function() {
});
$p.e8 = (function() {
  return (this.lf.U() + ".signal");
});
$p.eW = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  dy: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1,
  aD: 1,
  aw: 1,
  aN: 1,
  du: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.hA($thiz)) {
        return $thiz.fD(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.m)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
}
/** @constructor */
function $c_sc_View$$anon$1(it$1) {
  this.o4 = null;
  this.o4 = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.r = (function() {
  return this.o4.U();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  g6: 1,
  a7: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  X: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.hh = null;
  this.o5 = null;
  this.hh = underlying;
  this.o5 = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.r = (function() {
  return new $c_sc_Iterator$$anon$8(this.hh.r(), this.o5);
});
$p.G = (function() {
  return ((this.hh.G() === 0) ? 0 : (-1));
});
$p.j = (function() {
  return this.hh.j();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  g7: 1,
  a7: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  X: 1,
  a: 1
}));
function $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f) {
  $thiz.ev = underlying;
  $thiz.g4 = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.ev = null;
  this.g4 = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.r = (function() {
  return new $c_sc_Iterator$$anon$9(this.ev.r(), this.g4);
});
$p.G = (function() {
  return this.ev.G();
});
$p.j = (function() {
  return this.ev.j();
});
var $d_sc_View$Map = new $TypeData().i($c_sc_View$Map, "scala.collection.View$Map", ({
  aH: 1,
  a7: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  X: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.i1 = ($thiz.ds !== null);
  $thiz.h0 = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.ds);
  if ($thiz.i1) {
    var newParentLastUpdateId = $thiz.ds.fq();
    if ((newParentLastUpdateId !== $thiz.h0)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.hC(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.h0 = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.i1) {
    $thiz.h0 = $thiz.ds.fq();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.ds, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.ds, $thiz);
}
/** @constructor */
function $c_sc_AbstractSet() {
}
$p = $c_sc_AbstractSet.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSet;
/** @constructor */
function $h_sc_AbstractSet() {
}
$h_sc_AbstractSet.prototype = $p;
$p.y = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.bw = (function() {
  return "Set";
});
$p.B = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.td = (function(that) {
  return this.fv(that);
});
$p.i = (function(v1) {
  return this.bj(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.b8() === o.b8())) {
      try {
        return $thiz.fv(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().x(x2.d0(kv$2$2.bp(), $m_sc_Map$().o2), kv$2$2.bg())))(o)));
      } catch (e) {
        if ((e instanceof $c_jl_ClassCastException)) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a9)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_combine_CombineSignalN(parents, combinator) {
  this.ko = null;
  this.kn = false;
  this.kp = null;
  this.hP = 0;
  this.kl = null;
  this.km = null;
  this.kq = false;
  this.hQ = null;
  this.ki = null;
  this.kj = false;
  this.fL = null;
  this.kk = null;
  this.hS = 0;
  this.hR = null;
  this.fL = parents;
  this.kk = combinator;
  this.ko = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hP = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hQ = (void 0);
  this.hS = ((1 + $m_Lcom_raquo_airstream_core_Protected$().ss(0, parents)) | 0);
  this.hR = parents.map(((parent) => $m_Lcom_raquo_airstream_common_InternalParentObserver$().rJ(parent, new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((_$1, trx) => {
    $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V(this, trx);
  })))));
}
$p = $c_Lcom_raquo_airstream_combine_CombineSignalN.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_CombineSignalN;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_CombineSignalN() {
}
$h_Lcom_raquo_airstream_combine_CombineSignalN.prototype = $p;
$p.eb = (function() {
  return this.ko;
});
$p.e8 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fy = (function() {
  return this.kn;
});
$p.ec = (function() {
  return this.kp;
});
$p.cH = (function(x$1) {
  this.kn = x$1;
});
$p.fB = (function(x$1) {
  this.kp = x$1;
});
$p.y = (function(obj) {
  return (this === obj);
});
$p.D = (function() {
  return $systemIdentityHashCode(this);
});
$p.fq = (function() {
  return this.hP;
});
$p.hv = (function(x$1) {
  this.hP = x$1;
});
$p.fF = (function() {
  return this;
});
$p.gH = (function(observer) {
  observer.ed($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cY = (function() {
  return this.kl;
});
$p.d2 = (function() {
  return this.km;
});
$p.gT = (function() {
  return this.kq;
});
$p.f1 = (function(x$1) {
  this.kq = x$1;
});
$p.gv = (function(x$0) {
  this.kl = x$0;
});
$p.gw = (function(x$0) {
  this.km = x$0;
});
$p.hG = (function() {
  return this.hQ;
});
$p.jZ = (function(x$1) {
  this.hQ = x$1;
});
$p.gR = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gB = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.oA = (function() {
  if ((!this.kj)) {
    this.ki = $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray(this);
    this.kj = true;
  }
  return this.ki;
});
$p.gM = (function() {
  $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V(this);
});
$p.gJ = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V(this);
});
$p.gK = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V(this);
});
$p.eX = (function() {
  return this.hS;
});
$p.jv = (function() {
  return $m_Lcom_raquo_airstream_combine_CombineObservable$().sh(this.fL.map(((_$2) => _$2.gR())), this.kk);
});
$p.hC = (function() {
  return this.jv();
});
$p.eW = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_combine_CombineSignalN = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineSignalN, "com.raquo.airstream.combine.CombineSignalN", ({
  cS: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1,
  aD: 1,
  aw: 1,
  aN: 1,
  cZ: 1,
  da: 1,
  cQ: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.kP = null;
  this.kO = false;
  this.kQ = null;
  this.kL = null;
  this.kN = null;
  this.kS = false;
  this.gZ = null;
  this.kM = null;
  this.kR = 0;
  this.gZ = parent;
  this.kM = fn;
  this.kP = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kR = ((1 + parent.eX()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.eb = (function() {
  return this.kP;
});
$p.e8 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fy = (function() {
  return this.kO;
});
$p.ec = (function() {
  return this.kQ;
});
$p.cH = (function(x$1) {
  this.kO = x$1;
});
$p.fB = (function(x$1) {
  this.kQ = x$1;
});
$p.y = (function(obj) {
  return (this === obj);
});
$p.D = (function() {
  return $systemIdentityHashCode(this);
});
$p.gH = (function(observer) {
});
$p.cY = (function() {
  return this.kL;
});
$p.d2 = (function() {
  return this.kN;
});
$p.gT = (function() {
  return this.kS;
});
$p.f1 = (function(x$1) {
  this.kS = x$1;
});
$p.gv = (function(x$0) {
  this.kL = x$0;
});
$p.gw = (function(x$0) {
  this.kN = x$0;
});
$p.gB = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gM = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.gZ);
});
$p.gJ = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gK = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.gL = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eX = (function() {
  return this.kR;
});
$p.hI = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.kM.i(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().eJ(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
    }
  }
  $x_1.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
    if ((!nextValue.j())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.N(), transaction);
    }
  })));
});
$p.k5 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eW = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  dk: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  be: 1,
  bd: 1,
  aw: 1,
  bf: 1,
  aC: 1,
  d1: 1,
  cV: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.kW = null;
  this.kV = false;
  this.kX = null;
  this.hZ = 0;
  this.kT = null;
  this.kU = null;
  this.kZ = false;
  this.i0 = null;
  this.i1 = false;
  this.h0 = 0;
  this.ds = null;
  this.i2 = null;
  this.i3 = null;
  this.kY = 0;
  this.ds = parent;
  this.i2 = project;
  this.i3 = recover;
  this.kW = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hZ = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.i0 = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.kY = ((1 + parent.eX()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.eb = (function() {
  return this.kW;
});
$p.e8 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fy = (function() {
  return this.kV;
});
$p.ec = (function() {
  return this.kX;
});
$p.cH = (function(x$1) {
  this.kV = x$1;
});
$p.fB = (function(x$1) {
  this.kX = x$1;
});
$p.y = (function(obj) {
  return (this === obj);
});
$p.D = (function() {
  return $systemIdentityHashCode(this);
});
$p.fq = (function() {
  return this.hZ;
});
$p.hv = (function(x$1) {
  this.hZ = x$1;
});
$p.fF = (function() {
  return this;
});
$p.gH = (function(observer) {
  observer.ed($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cY = (function() {
  return this.kT;
});
$p.d2 = (function() {
  return this.kU;
});
$p.gT = (function() {
  return this.kZ;
});
$p.f1 = (function(x$1) {
  this.kZ = x$1;
});
$p.gv = (function(x$0) {
  this.kT = x$0;
});
$p.gw = (function(x$0) {
  this.kU = x$0;
});
$p.hG = (function() {
  return this.i0;
});
$p.jZ = (function(x$1) {
  this.i0 = x$1;
});
$p.gR = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gB = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.hI = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.k5 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gM = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.gJ = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.gK = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.eX = (function() {
  return this.kY;
});
$p.gL = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.i3;
    if (this$2.j()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.N();
      try {
        var $x_1 = new $c_s_util_Success(x0.c6(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().eJ(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
        }
      }
      $x_1.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.j())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.N(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.jX(this.i2), transaction);
  })));
});
$p.hC = (function() {
  var originalValue = this.ds.gR().jX(this.i2);
  return originalValue.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.i3;
    if (this$2.j()) {
      return originalValue;
    } else {
      var x0 = this$2.N();
      try {
        var $x_1 = new $c_s_util_Success(x0.c6(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().eJ(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
        }
      }
      return $x_1.cv(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.j() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.N())));
          return (this$7.j() ? originalValue : this$7.N());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$6) => originalValue)));
});
$p.eW = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  dl: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1,
  aD: 1,
  aw: 1,
  aN: 1,
  aC: 1,
  b7: 1,
  d0: 1
}));
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.hA = (function(that) {
  return true;
});
$p.y = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.D = (function() {
  return $m_s_util_hashing_MurmurHash3$().pO(this);
});
$p.B = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cE = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.jT = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.bs = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fD = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.c6 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cw = (function(x) {
  return this.jT((x | 0));
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
$p.eS = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.bw = (function() {
  return "SeqView";
});
$p.cE = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bs = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.a2 = (function(f) {
  return this.eS(f);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.q)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aA)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.m9 = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.q2 = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
}
/** @constructor */
function $c_sc_AbstractMap() {
}
$p = $c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
}
$h_sc_AbstractMap.prototype = $p;
$p.y = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.D = (function() {
  return $m_s_util_hashing_MurmurHash3$().sq(this);
});
$p.bw = (function() {
  return "Map";
});
$p.B = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.gD = (function(coll) {
  return this.jY().as(coll);
});
$p.eU = (function() {
  return this.jY().at();
});
$p.c6 = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eN = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.cw = (function(key) {
  return this.bj(key);
});
$p.e4 = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.eu = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.eu = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.C = (function(idx) {
  return this.eu.C(idx);
});
$p.A = (function() {
  return this.eu.A();
});
$p.r = (function() {
  return this.eu.r();
});
$p.G = (function() {
  return this.eu.G();
});
$p.j = (function() {
  return this.eu.j();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  bK: 1,
  aS: 1,
  a7: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  X: 1,
  a: 1,
  aq: 1,
  k: 1
}));
function $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f) {
  $thiz.g2 = underlying;
  $thiz.hg = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.ev = null;
  this.g4 = null;
  this.g2 = null;
  this.hg = null;
}
$p = $c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$p.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
}
$h_sc_SeqView$Map.prototype = $p;
$p.eS = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.bw = (function() {
  return "SeqView";
});
$p.cE = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bs = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.C = (function(idx) {
  return this.hg.i(this.g2.C(idx));
});
$p.A = (function() {
  return this.g2.A();
});
$p.a2 = (function(f) {
  return this.eS(f);
});
var $d_sc_SeqView$Map = new $TypeData().i($c_sc_SeqView$Map, "scala.collection.SeqView$Map", ({
  aW: 1,
  aH: 1,
  a7: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  X: 1,
  a: 1,
  aq: 1,
  k: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.mk = null;
  this.ml = false;
  this.ma = null;
  this.mb = false;
  this.mc = null;
  this.md = false;
  this.me = null;
  this.mf = false;
  this.mg = null;
  this.mh = false;
  this.mi = null;
  this.mj = false;
  this.lX = null;
  this.lY = false;
  this.mO = null;
  this.mP = false;
  this.m5 = null;
  this.m6 = false;
  this.mM = null;
  this.mN = false;
  this.lZ = null;
  this.m0 = false;
  this.mq = null;
  this.mr = false;
  this.mo = null;
  this.mp = false;
  this.m1 = null;
  this.m2 = false;
  this.mE = null;
  this.mF = false;
  this.mG = null;
  this.mH = false;
  this.na = null;
  this.nb = false;
  this.ms = null;
  this.mt = false;
  this.m7 = null;
  this.m8 = false;
  this.mS = null;
  this.mT = false;
  this.mW = null;
  this.mX = false;
  this.n2 = null;
  this.n3 = false;
  this.n4 = null;
  this.n5 = false;
  this.mY = null;
  this.mZ = false;
  this.n0 = null;
  this.n1 = false;
  this.mK = null;
  this.mL = false;
  this.mw = null;
  this.mx = false;
  this.mu = null;
  this.mv = false;
  this.mm = null;
  this.mn = false;
  this.n8 = null;
  this.n9 = false;
  this.n6 = null;
  this.n7 = false;
  this.m3 = null;
  this.m4 = false;
  this.ne = null;
  this.nf = false;
  this.mU = null;
  this.mV = false;
  this.mA = null;
  this.mB = false;
  this.my = null;
  this.mz = false;
  this.mC = null;
  this.mD = false;
  this.g = null;
  this.mI = null;
  this.mJ = false;
  this.f9 = null;
  this.q1 = null;
  this.lV = null;
  this.lW = false;
  this.mQ = null;
  this.mR = false;
  this.m9 = null;
  this.nc = null;
  this.nd = false;
  this.q2 = null;
  $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V(this);
  $f_Lcom_raquo_laminar_api_MountHooks__$init$__V(this);
  $f_Lcom_raquo_laminar_api_AirstreamAliases__$init$__V(this);
  $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V(this);
  $f_Lcom_raquo_laminar_api_Laminar__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$$anon$1() {
}
$h_Lcom_raquo_laminar_api_package$$anon$1.prototype = $p;
$p.s0 = (function() {
  if ((!this.ml)) {
    this.mk = new $c_Lcom_raquo_laminar_tags_HtmlTag("header", false);
    this.ml = true;
  }
  return this.mk;
});
$p.rA = (function() {
  if ((!this.mb)) {
    this.ma = new $c_Lcom_raquo_laminar_tags_HtmlTag("footer", false);
    this.mb = true;
  }
  return this.ma;
});
$p.rX = (function() {
  if ((!this.md)) {
    this.mc = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.md = true;
  }
  return this.mc;
});
$p.eP = (function() {
  if ((!this.mf)) {
    this.me = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.mf = true;
  }
  return this.me;
});
$p.bK = (function() {
  if ((!this.mh)) {
    this.mg = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.mh = true;
  }
  return this.mg;
});
$p.fw = (function() {
  if ((!this.mj)) {
    this.mi = new $c_Lcom_raquo_laminar_tags_HtmlTag("h4", false);
    this.mj = true;
  }
  return this.mi;
});
$p.b3 = (function() {
  if ((!this.lY)) {
    this.lX = new $c_Lcom_raquo_laminar_tags_HtmlTag("a", false);
    this.lY = true;
  }
  return this.lX;
});
$p.aY = (function() {
  if ((!this.mP)) {
    this.mO = new $c_Lcom_raquo_laminar_tags_HtmlTag("strong", false);
    this.mP = true;
  }
  return this.mO;
});
$p.H = (function() {
  if ((!this.m6)) {
    this.m5 = new $c_Lcom_raquo_laminar_tags_HtmlTag("code", false);
    this.m6 = true;
  }
  return this.m5;
});
$p.E = (function() {
  if ((!this.mN)) {
    this.mM = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.mN = true;
  }
  return this.mM;
});
$p.qR = (function() {
  if ((!this.m0)) {
    this.lZ = new $c_Lcom_raquo_laminar_tags_HtmlTag("br", true);
    this.m0 = true;
  }
  return this.lZ;
});
$p.jV = (function() {
  if ((!this.mr)) {
    this.mq = new $c_Lcom_raquo_laminar_tags_HtmlTag("label", false);
    this.mr = true;
  }
  return this.mq;
});
$p.s6 = (function() {
  if ((!this.mp)) {
    this.mo = new $c_Lcom_raquo_laminar_tags_HtmlTag("input", true);
    this.mp = true;
  }
  return this.mo;
});
$p.cD = (function() {
  if ((!this.m2)) {
    this.m1 = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.m2 = true;
  }
  return this.m1;
});
$p.S = (function() {
  if ((!this.mF)) {
    this.mE = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.mF = true;
  }
  return this.mE;
});
$p.bz = (function() {
  if ((!this.mH)) {
    this.mG = new $c_Lcom_raquo_laminar_tags_HtmlTag("pre", false);
    this.mH = true;
  }
  return this.mG;
});
$p.hN = (function() {
  if ((!this.nb)) {
    this.na = new $c_Lcom_raquo_laminar_tags_HtmlTag("ul", false);
    this.nb = true;
  }
  return this.na;
});
$p.cc = (function() {
  if ((!this.mt)) {
    this.ms = new $c_Lcom_raquo_laminar_tags_HtmlTag("li", false);
    this.mt = true;
  }
  return this.ms;
});
$p.h = (function() {
  if ((!this.m8)) {
    this.m7 = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.m8 = true;
  }
  return this.m7;
});
$p.kb = (function() {
  if ((!this.mT)) {
    this.mS = new $c_Lcom_raquo_laminar_tags_HtmlTag("table", false);
    this.mT = true;
  }
  return this.mS;
});
$p.kc = (function() {
  if ((!this.mX)) {
    this.mW = new $c_Lcom_raquo_laminar_tags_HtmlTag("tbody", false);
    this.mX = true;
  }
  return this.mW;
});
$p.kd = (function() {
  if ((!this.n3)) {
    this.n2 = new $c_Lcom_raquo_laminar_tags_HtmlTag("thead", false);
    this.n3 = true;
  }
  return this.n2;
});
$p.Y = (function() {
  if ((!this.n5)) {
    this.n4 = new $c_Lcom_raquo_laminar_tags_HtmlTag("tr", false);
    this.n5 = true;
  }
  return this.n4;
});
$p.p = (function() {
  if ((!this.mZ)) {
    this.mY = new $c_Lcom_raquo_laminar_tags_HtmlTag("td", false);
    this.mZ = true;
  }
  return this.mY;
});
$p.cL = (function() {
  if ((!this.n1)) {
    this.n0 = new $c_Lcom_raquo_laminar_tags_HtmlTag("th", false);
    this.n1 = true;
  }
  return this.n0;
});
$p.bB = (function() {
  if ((!this.mL)) {
    this.mK = new $c_Lcom_raquo_laminar_tags_HtmlTag("section", false);
    this.mL = true;
  }
  return this.mK;
});
$p.sw = (function() {
  if ((!this.mx)) {
    this.mw = new $c_Lcom_raquo_laminar_tags_HtmlTag("nav", false);
    this.mx = true;
  }
  return this.mw;
});
$p.sk = (function() {
  if ((!this.mv)) {
    this.mu = new $c_Lcom_raquo_laminar_tags_HtmlTag("main", false);
    this.mv = true;
  }
  return this.mu;
});
$p.b5 = (function() {
  if ((!this.mn)) {
    this.mm = new $c_Lcom_raquo_laminar_keys_HtmlAttr("href", $m_Lcom_raquo_laminar_codecs_package$().aZ);
    this.mn = true;
  }
  return this.mm;
});
$p.tl = (function() {
  if ((!this.n9)) {
    this.n8 = new $c_Lcom_raquo_laminar_keys_HtmlAttr("type", $m_Lcom_raquo_laminar_codecs_package$().aZ);
    this.n9 = true;
  }
  return this.n8;
});
$p.cz = (function() {
  if ((!this.n7)) {
    this.n6 = this.tl();
    this.n7 = true;
  }
  return this.n6;
});
$p.p1 = (function() {
  if ((!this.m4)) {
    this.m3 = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().ng);
    this.m4 = true;
  }
  return this.m3;
});
$p.pY = (function() {
  if ((!this.nf)) {
    this.ne = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().aZ);
    this.nf = true;
  }
  return this.ne;
});
$p.ba = (function() {
  if ((!this.mV)) {
    this.mU = new $c_Lcom_raquo_laminar_keys_HtmlProp("target", $m_Lcom_raquo_laminar_codecs_package$().aZ);
    this.mV = true;
  }
  return this.mU;
});
$p.cy = (function() {
  if ((!this.mB)) {
    this.mA = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.mB = true;
  }
  return this.mA;
});
$p.pA = (function() {
  if ((!this.mz)) {
    this.my = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.mz = true;
  }
  return this.my;
});
$p.k6 = (function() {
  if ((!this.mD)) {
    this.mC = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.mD = true;
  }
  return this.mC;
});
$p.sR = (function() {
  if ((!this.mJ)) {
    this.mI = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey(this, "rel", " ");
    this.mJ = true;
  }
  return this.mI;
});
$p.hu = (function() {
  if ((!this.lW)) {
    this.lV = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.lW = true;
  }
  return this.lV;
});
$p.t = (function() {
  if ((!this.mR)) {
    this.mQ = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.mR = true;
  }
  return this.mQ;
});
$p.tp = (function() {
  if ((!this.nd)) {
    this.nc = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.nd = true;
  }
  return this.nc;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  dP: 1,
  dZ: 1,
  dS: 1,
  dX: 1,
  bk: 1,
  dY: 1,
  dU: 1,
  dN: 1,
  dH: 1,
  dM: 1,
  bi: 1,
  bl: 1,
  bh: 1,
  dI: 1
}));
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aa)));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$p = $c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $p;
$p.bw = (function() {
  return "IndexedSeqView";
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bT = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bs = (function(len) {
  var x = this.A();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.A();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.eu = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.r = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bw = (function() {
  return "IndexedSeqView";
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bT = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bs = (function(len) {
  var x = this.A();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.A();
});
$p.eS = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.a2 = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  fP: 1,
  bK: 1,
  aS: 1,
  a7: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  X: 1,
  a: 1,
  aq: 1,
  k: 1,
  aG: 1,
  n: 1
}));
function $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__($thiz, underlying, f) {
  $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Map() {
  this.ev = null;
  this.g4 = null;
  this.g2 = null;
  this.hg = null;
}
$p = $c_sc_IndexedSeqView$Map.prototype = new $h_sc_SeqView$Map();
$p.constructor = $c_sc_IndexedSeqView$Map;
/** @constructor */
function $h_sc_IndexedSeqView$Map() {
}
$h_sc_IndexedSeqView$Map.prototype = $p;
$p.r = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.fA = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bw = (function() {
  return "IndexedSeqView";
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bT = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bs = (function(len) {
  var x = this.A();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.A();
});
$p.eS = (function(f) {
  return this.fA(f);
});
$p.a2 = (function(f) {
  return this.fA(f);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  bI: 1,
  aW: 1,
  aH: 1,
  a7: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  X: 1,
  a: 1,
  aq: 1,
  k: 1,
  aG: 1,
  n: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.j9 = null;
  this.j8 = null;
  this.j9 = underlying;
  this.j8 = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.C = (function(n) {
  return this.j9.C(n);
});
$p.A = (function() {
  return this.j9.bo;
});
$p.c7 = (function() {
  return "ArrayBufferView";
});
$p.r = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.j8);
});
$p.fA = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.j8);
});
$p.eS = (function(f) {
  return this.fA(f);
});
$p.a2 = (function(f) {
  return this.fA(f);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  h3: 1,
  fA: 1,
  aS: 1,
  a7: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  X: 1,
  a: 1,
  aq: 1,
  k: 1,
  aG: 1,
  n: 1
}));
/** @constructor */
function $c_sci_AbstractMap() {
}
$p = $c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$p.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
}
$h_sci_AbstractMap.prototype = $p;
$p.jY = (function() {
  return $m_sci_Map$();
});
$p.br = (function() {
  return $m_sci_Iterable$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ((!$is_sci_IndexedSeq(that)) || ($thiz.A() === that.A()));
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.A();
      var equal = (length === o.A());
      if (equal) {
        var index = 0;
        var a = $thiz.hz();
        var b = o.hz();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().x($thiz.C(index), o.C(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.r().dn(index);
          var thatIt = o.r().dn(index);
          while ((equal && thisIt.u())) {
            equal = $m_sr_BoxesRunTime$().x(thisIt.n(), thatIt.n());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.z)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.z)));
}
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gI)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gJ)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gK)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gL)));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_CheckedIndexedSeqView$Map(underlying, f, mutationCount) {
  this.ev = null;
  this.g4 = null;
  this.g2 = null;
  this.hg = null;
  this.gf = null;
  this.gf = mutationCount;
  $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(this, underlying, f);
}
$p = $c_scm_CheckedIndexedSeqView$Map.prototype = new $h_sc_IndexedSeqView$Map();
$p.constructor = $c_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Map() {
}
$h_scm_CheckedIndexedSeqView$Map.prototype = $p;
$p.r = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.gf);
});
$p.fA = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gf);
});
$p.eS = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gf);
});
$p.a2 = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gf);
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().i($c_scm_CheckedIndexedSeqView$Map, "scala.collection.mutable.CheckedIndexedSeqView$Map", ({
  hb: 1,
  bI: 1,
  aW: 1,
  aH: 1,
  a7: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  X: 1,
  a: 1,
  aq: 1,
  k: 1,
  aG: 1,
  n: 1,
  h9: 1
}));
/** @constructor */
function $c_sci_Map$EmptyMap$() {
}
$p = $c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
}
$h_sci_Map$EmptyMap$.prototype = $p;
$p.b8 = (function() {
  return 0;
});
$p.G = (function() {
  return 0;
});
$p.j = (function() {
  return true;
});
$p.jn = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.bj = (function(key) {
  return false;
});
$p.d0 = (function(key, default$1) {
  return default$1.U();
});
$p.r = (function() {
  return $m_sc_Iterator$().P;
});
$p.ei = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.i = (function(key) {
  this.jn(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  gu: 1,
  as: 1,
  an: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a9: 1,
  ap: 1,
  j: 1,
  f: 1,
  ao: 1,
  d: 1,
  aa: 1,
  t: 1,
  at: 1,
  a: 1
}));
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$();
  }
  return $n_sci_Map$EmptyMap$;
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.cB = null;
  this.dM = null;
  this.cB = key1;
  this.dM = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.a2 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b8 = (function() {
  return 1;
});
$p.G = (function() {
  return 1;
});
$p.j = (function() {
  return false;
});
$p.i = (function(key) {
  if ($m_sr_BoxesRunTime$().x(key, this.cB)) {
    return this.dM;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bj = (function(key) {
  return $m_sr_BoxesRunTime$().x(key, this.cB);
});
$p.d0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().x(key, this.cB) ? this.dM : default$1.U());
});
$p.r = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cB, this.dM));
});
$p.eY = (function(key, value) {
  return ($m_sr_BoxesRunTime$().x(key, this.cB) ? new $c_sci_Map$Map1(this.cB, value) : new $c_sci_Map$Map2(this.cB, this.dM, key, value));
});
$p.ag = (function(f) {
  f.i(new $c_T2(this.cB, this.dM));
});
$p.fv = (function(p) {
  return (!(!p.i(new $c_T2(this.cB, this.dM))));
});
$p.D = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cM(this.cB, this.dM);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().e3;
  h = $m_s_util_hashing_MurmurHash3$().m(h, a);
  h = $m_s_util_hashing_MurmurHash3$().m(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dq(h, c);
  return $m_s_util_hashing_MurmurHash3$().J(h, 1);
});
$p.ei = (function(key, value) {
  return this.eY(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c2)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  c2: 1,
  as: 1,
  an: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a9: 1,
  ap: 1,
  j: 1,
  f: 1,
  ao: 1,
  d: 1,
  aa: 1,
  t: 1,
  at: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.cj = null;
  this.db = null;
  this.ck = null;
  this.dc = null;
  this.cj = key1;
  this.db = value1;
  this.ck = key2;
  this.dc = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.a2 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b8 = (function() {
  return 2;
});
$p.G = (function() {
  return 2;
});
$p.j = (function() {
  return false;
});
$p.i = (function(key) {
  if ($m_sr_BoxesRunTime$().x(key, this.cj)) {
    return this.db;
  } else if ($m_sr_BoxesRunTime$().x(key, this.ck)) {
    return this.dc;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bj = (function(key) {
  return ($m_sr_BoxesRunTime$().x(key, this.cj) || $m_sr_BoxesRunTime$().x(key, this.ck));
});
$p.d0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().x(key, this.cj) ? this.db : ($m_sr_BoxesRunTime$().x(key, this.ck) ? this.dc : default$1.U()));
});
$p.r = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.eY = (function(key, value) {
  return ($m_sr_BoxesRunTime$().x(key, this.cj) ? new $c_sci_Map$Map2(this.cj, value, this.ck, this.dc) : ($m_sr_BoxesRunTime$().x(key, this.ck) ? new $c_sci_Map$Map2(this.cj, this.db, this.ck, value) : new $c_sci_Map$Map3(this.cj, this.db, this.ck, this.dc, key, value)));
});
$p.ag = (function(f) {
  f.i(new $c_T2(this.cj, this.db));
  f.i(new $c_T2(this.ck, this.dc));
});
$p.fv = (function(p) {
  return ((!(!p.i(new $c_T2(this.cj, this.db)))) && (!(!p.i(new $c_T2(this.ck, this.dc)))));
});
$p.D = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cM(this.cj, this.db);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cM(this.ck, this.dc);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().e3;
  h = $m_s_util_hashing_MurmurHash3$().m(h, a);
  h = $m_s_util_hashing_MurmurHash3$().m(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dq(h, c);
  return $m_s_util_hashing_MurmurHash3$().J(h, 2);
});
$p.ei = (function(key, value) {
  return this.eY(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c3)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  c3: 1,
  as: 1,
  an: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a9: 1,
  ap: 1,
  j: 1,
  f: 1,
  ao: 1,
  d: 1,
  aa: 1,
  t: 1,
  at: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.c2 = null;
  this.cR = null;
  this.c3 = null;
  this.cS = null;
  this.c4 = null;
  this.cT = null;
  this.c2 = key1;
  this.cR = value1;
  this.c3 = key2;
  this.cS = value2;
  this.c4 = key3;
  this.cT = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.a2 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b8 = (function() {
  return 3;
});
$p.G = (function() {
  return 3;
});
$p.j = (function() {
  return false;
});
$p.i = (function(key) {
  if ($m_sr_BoxesRunTime$().x(key, this.c2)) {
    return this.cR;
  } else if ($m_sr_BoxesRunTime$().x(key, this.c3)) {
    return this.cS;
  } else if ($m_sr_BoxesRunTime$().x(key, this.c4)) {
    return this.cT;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bj = (function(key) {
  return (($m_sr_BoxesRunTime$().x(key, this.c2) || $m_sr_BoxesRunTime$().x(key, this.c3)) || $m_sr_BoxesRunTime$().x(key, this.c4));
});
$p.d0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().x(key, this.c2) ? this.cR : ($m_sr_BoxesRunTime$().x(key, this.c3) ? this.cS : ($m_sr_BoxesRunTime$().x(key, this.c4) ? this.cT : default$1.U())));
});
$p.r = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.eY = (function(key, value) {
  return ($m_sr_BoxesRunTime$().x(key, this.c2) ? new $c_sci_Map$Map3(this.c2, value, this.c3, this.cS, this.c4, this.cT) : ($m_sr_BoxesRunTime$().x(key, this.c3) ? new $c_sci_Map$Map3(this.c2, this.cR, this.c3, value, this.c4, this.cT) : ($m_sr_BoxesRunTime$().x(key, this.c4) ? new $c_sci_Map$Map3(this.c2, this.cR, this.c3, this.cS, this.c4, value) : new $c_sci_Map$Map4(this.c2, this.cR, this.c3, this.cS, this.c4, this.cT, key, value))));
});
$p.ag = (function(f) {
  f.i(new $c_T2(this.c2, this.cR));
  f.i(new $c_T2(this.c3, this.cS));
  f.i(new $c_T2(this.c4, this.cT));
});
$p.fv = (function(p) {
  return (((!(!p.i(new $c_T2(this.c2, this.cR)))) && (!(!p.i(new $c_T2(this.c3, this.cS))))) && (!(!p.i(new $c_T2(this.c4, this.cT)))));
});
$p.D = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cM(this.c2, this.cR);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cM(this.c3, this.cS);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cM(this.c4, this.cT);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().e3;
  h = $m_s_util_hashing_MurmurHash3$().m(h, a);
  h = $m_s_util_hashing_MurmurHash3$().m(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dq(h, c);
  return $m_s_util_hashing_MurmurHash3$().J(h, 3);
});
$p.ei = (function(key, value) {
  return this.eY(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  c4: 1,
  as: 1,
  an: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a9: 1,
  ap: 1,
  j: 1,
  f: 1,
  ao: 1,
  d: 1,
  aa: 1,
  t: 1,
  at: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bD = null;
  this.cl = null;
  this.bE = null;
  this.cm = null;
  this.bF = null;
  this.cn = null;
  this.bG = null;
  this.co = null;
  this.bD = key1;
  this.cl = value1;
  this.bE = key2;
  this.cm = value2;
  this.bF = key3;
  this.cn = value3;
  this.bG = key4;
  this.co = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.a2 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b8 = (function() {
  return 4;
});
$p.G = (function() {
  return 4;
});
$p.j = (function() {
  return false;
});
$p.i = (function(key) {
  if ($m_sr_BoxesRunTime$().x(key, this.bD)) {
    return this.cl;
  } else if ($m_sr_BoxesRunTime$().x(key, this.bE)) {
    return this.cm;
  } else if ($m_sr_BoxesRunTime$().x(key, this.bF)) {
    return this.cn;
  } else if ($m_sr_BoxesRunTime$().x(key, this.bG)) {
    return this.co;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bj = (function(key) {
  return ((($m_sr_BoxesRunTime$().x(key, this.bD) || $m_sr_BoxesRunTime$().x(key, this.bE)) || $m_sr_BoxesRunTime$().x(key, this.bF)) || $m_sr_BoxesRunTime$().x(key, this.bG));
});
$p.d0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().x(key, this.bD) ? this.cl : ($m_sr_BoxesRunTime$().x(key, this.bE) ? this.cm : ($m_sr_BoxesRunTime$().x(key, this.bF) ? this.cn : ($m_sr_BoxesRunTime$().x(key, this.bG) ? this.co : default$1.U()))));
});
$p.r = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.eY = (function(key, value) {
  return ($m_sr_BoxesRunTime$().x(key, this.bD) ? new $c_sci_Map$Map4(this.bD, value, this.bE, this.cm, this.bF, this.cn, this.bG, this.co) : ($m_sr_BoxesRunTime$().x(key, this.bE) ? new $c_sci_Map$Map4(this.bD, this.cl, this.bE, value, this.bF, this.cn, this.bG, this.co) : ($m_sr_BoxesRunTime$().x(key, this.bF) ? new $c_sci_Map$Map4(this.bD, this.cl, this.bE, this.cm, this.bF, value, this.bG, this.co) : ($m_sr_BoxesRunTime$().x(key, this.bG) ? new $c_sci_Map$Map4(this.bD, this.cl, this.bE, this.cm, this.bF, this.cn, this.bG, value) : $m_sci_HashMap$().j1.fH(this.bD, this.cl).fH(this.bE, this.cm).fH(this.bF, this.cn).fH(this.bG, this.co).fH(key, value)))));
});
$p.ag = (function(f) {
  f.i(new $c_T2(this.bD, this.cl));
  f.i(new $c_T2(this.bE, this.cm));
  f.i(new $c_T2(this.bF, this.cn));
  f.i(new $c_T2(this.bG, this.co));
});
$p.fv = (function(p) {
  return ((((!(!p.i(new $c_T2(this.bD, this.cl)))) && (!(!p.i(new $c_T2(this.bE, this.cm))))) && (!(!p.i(new $c_T2(this.bF, this.cn))))) && (!(!p.i(new $c_T2(this.bG, this.co)))));
});
$p.qU = (function(builder) {
  return builder.eF(this.bD, this.cl).eF(this.bE, this.cm).eF(this.bF, this.cn).eF(this.bG, this.co);
});
$p.D = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cM(this.bD, this.cl);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cM(this.bE, this.cm);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cM(this.bF, this.cn);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cM(this.bG, this.co);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().e3;
  h = $m_s_util_hashing_MurmurHash3$().m(h, a);
  h = $m_s_util_hashing_MurmurHash3$().m(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dq(h, c);
  return $m_s_util_hashing_MurmurHash3$().J(h, 4);
});
$p.ei = (function(key, value) {
  return this.eY(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  c5: 1,
  as: 1,
  an: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a9: 1,
  ap: 1,
  j: 1,
  f: 1,
  ao: 1,
  d: 1,
  aa: 1,
  t: 1,
  at: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gf)));
}
/** @constructor */
function $c_scm_AbstractSet() {
}
$p = $c_scm_AbstractSet.prototype = new $h_sc_AbstractSet();
$p.constructor = $c_scm_AbstractSet;
/** @constructor */
function $h_scm_AbstractSet() {
}
$h_scm_AbstractSet.prototype = $p;
$p.b6 = (function() {
  return this;
});
function $p_sci_LazyList__initState__V($thiz) {
  if (($thiz.bl === $m_sci_LazyList$Uninitialized$())) {
    if (($thiz.cQ === $m_sci_LazyList$MidEvaluation$())) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    var fun = $thiz.cQ;
    $thiz.cQ = $m_sci_LazyList$MidEvaluation$();
    try {
      var l = fun.U().aJ();
    } finally {
      $thiz.cQ = fun;
    }
    $thiz.cQ = l.cQ;
    $thiz.bl = l.bl;
  }
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (($thiz.aJ() === $m_sci_LazyList$().V) ? $m_sci_LazyList$().V : ($m_sci_LazyList$(), $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), f.i($thiz.w()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.b9(), f)))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.z = (("" + b.z) + start);
  if (($thiz.bl === $m_sci_LazyList$Uninitialized$())) {
    b.z = (b.z + "<not computed>");
  } else if (($thiz.aJ() !== $m_sci_LazyList$().V)) {
    var obj = $thiz.w();
    b.z = (("" + b.z) + obj);
    var cursor = $thiz;
    var scout = $thiz.b9();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.bl !== $m_sci_LazyList$Uninitialized$()) && (this$1.aJ() !== $m_sci_LazyList$().V))) {
        scout = scout.b9();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.bl !== $m_sci_LazyList$Uninitialized$()) && (this$2.aJ() !== $m_sci_LazyList$().V));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.z = (("" + b.z) + sep);
            var obj$1 = c.w();
            b.z = (("" + b.z) + obj$1);
            cursor = cursor.b9();
            scout = scout.b9();
            var this$3 = scout;
            if (((this$3.bl !== $m_sci_LazyList$Uninitialized$()) && (this$3.aJ() !== $m_sci_LazyList$().V))) {
              scout = scout.b9();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.bl !== $m_sci_LazyList$Uninitialized$()) && (this$4.aJ() !== $m_sci_LazyList$().V)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.z = (("" + b.z) + sep);
        var obj$2 = c$1.w();
        b.z = (("" + b.z) + obj$2);
        cursor = cursor.b9();
      }
      if ((!(cursor.bl !== $m_sci_LazyList$Uninitialized$()))) {
        b.z = (("" + b.z) + sep);
        b.z = (b.z + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.b9();
          scout = scout.b9();
        }
        while (true) {
          var ct = cursor.b9();
          if ((ct !== scout)) {
            var c$2 = cursor;
            b.z = (("" + b.z) + sep);
            var obj$3 = c$2.w();
            b.z = (("" + b.z) + obj$3);
          }
          cursor = ct;
          if ((cursor !== scout)) {
          } else {
            break;
          }
        }
      }
      b.z = (("" + b.z) + sep);
      b.z = (b.z + "<cycle>");
    }
  }
  b.z = (("" + b.z) + end);
  return b;
}
function $ct_sci_LazyList__O__($thiz, lazyState) {
  $thiz.bl = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : $m_sci_LazyList$Uninitialized$());
  $thiz.cQ = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : lazyState);
  return $thiz;
}
function $ct_sci_LazyList__O__sci_LazyList__($thiz, head, tail) {
  $ct_sci_LazyList__O__($thiz, $m_sci_LazyList$EmptyMarker$());
  $thiz.bl = head;
  $thiz.cQ = tail;
  return $thiz;
}
/** @constructor */
function $c_sci_LazyList() {
  this.bl = null;
  this.cQ = null;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bw = (function() {
  return "LinearSeq";
});
$p.bT = (function() {
  return $f_sc_LinearSeqOps__headOption__s_Option(this);
});
$p.A = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.bs = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.jT = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.C = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fD = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.aJ = (function() {
  while (true) {
    if ((this.bl !== $m_sci_LazyList$Uninitialized$())) {
      return ((this.cQ === null) ? $m_sci_LazyList$().V : this);
    } else {
      $p_sci_LazyList__initState__V(this);
    }
  }
});
$p.j = (function() {
  return (this.aJ() === $m_sci_LazyList$().V);
});
$p.G = (function() {
  return (((this.bl !== $m_sci_LazyList$Uninitialized$()) && (this.aJ() === $m_sci_LazyList$().V)) ? 0 : (-1));
});
$p.w = (function() {
  if ((this.aJ() === $m_sci_LazyList$().V)) {
    throw new $c_ju_NoSuchElementException("head of empty lazy list");
  } else {
    return this.bl;
  }
});
$p.b9 = (function() {
  if ((this.aJ() === $m_sci_LazyList$().V)) {
    throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
  } else {
    return this.cQ;
  }
});
$p.rC = (function() {
  var these = this;
  var those = this;
  if ((!(these.aJ() === $m_sci_LazyList$().V))) {
    these = these.b9();
  }
  while ((those !== these)) {
    if ((these.aJ() === $m_sci_LazyList$().V)) {
      return this;
    }
    these = these.b9();
    if ((these.aJ() === $m_sci_LazyList$().V)) {
      return this;
    }
    these = these.b9();
    if ((these === those)) {
      return this;
    }
    those = those.b9();
  }
  return this;
});
$p.r = (function() {
  return (((this.bl !== $m_sci_LazyList$Uninitialized$()) && (this.aJ() === $m_sci_LazyList$().V)) ? $m_sc_Iterator$().P : new $c_sci_LazyList$LazyIterator(this));
});
$p.ag = (function(f) {
  var _$this = this;
  while (true) {
    if ((!(_$this.aJ() === $m_sci_LazyList$().V))) {
      f.i(_$this.w());
      _$this = _$this.b9();
      continue;
    }
    break;
  }
});
$p.c7 = (function() {
  return "LazyList";
});
$p.sm = (function(f) {
  return (((this.bl !== $m_sci_LazyList$Uninitialized$()) && (this.aJ() === $m_sci_LazyList$().V)) ? $m_sci_LazyList$().V : $p_sci_LazyList__mapImpl__F1__sci_LazyList(this, f));
});
$p.rz = (function(f) {
  return (((this.bl !== $m_sci_LazyList$Uninitialized$()) && (this.aJ() === $m_sci_LazyList$().V)) ? $m_sci_LazyList$().V : $m_sci_LazyList$().pM(this, f));
});
$p.rp = (function(n) {
  return ((n <= 0) ? this : (((this.bl !== $m_sci_LazyList$Uninitialized$()) && (this.aJ() === $m_sci_LazyList$().V)) ? $m_sci_LazyList$().V : $m_sci_LazyList$().t6(this, n)));
});
$p.e4 = (function(sb, start, sep, end) {
  this.rC();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.aW, start, sep, end);
  return sb;
});
$p.B = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").z;
});
$p.i = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.cw = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.pb = (function(n) {
  return this.rp(n);
});
$p.eM = (function(asIterable) {
  return this.rz(asIterable);
});
$p.a2 = (function(f) {
  return this.sm(f);
});
$p.v = (function() {
  return this.b9();
});
$p.br = (function() {
  return $m_sci_LazyList$();
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  c1: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  aY: 1,
  aA: 1,
  aT: 1,
  aZ: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gZ)));
}
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.hp = null;
  this.hp = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cE = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a2 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.eM = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.hA = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fD = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.hz = (function() {
  return $m_sci_IndexedSeqDefaults$().o6;
});
$p.r = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bT = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bs = (function(len) {
  var x = this.A();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.A();
});
$p.y = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.D = (function() {
  return $m_s_util_hashing_MurmurHash3$().pO(this);
});
$p.B = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.c6 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eU = (function() {
  return $m_sjsr_WrappedVarArgs$().at();
});
$p.ag = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.c8 = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.e4 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.eV = (function() {
  return $m_sci_Nil$().ee(this);
});
$p.ea = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.A = (function() {
  return (this.hp.length | 0);
});
$p.C = (function(idx) {
  return this.hp[idx];
});
$p.c7 = (function() {
  return "WrappedVarArgs";
});
$p.gC = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().jJ(coll);
});
$p.cw = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.i = (function(v1) {
  return this.C((v1 | 0));
});
$p.br = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  cq: 1,
  z: 1,
  w: 1,
  t: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  x: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bx = null;
  this.bx = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.a2 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.jY = (function() {
  return $m_sci_HashMap$();
});
$p.G = (function() {
  return this.bx.bb;
});
$p.b8 = (function() {
  return this.bx.bb;
});
$p.j = (function() {
  return (this.bx.bb === 0);
});
$p.r = (function() {
  return (this.j() ? $m_sc_Iterator$().P : new $c_sci_MapKeyValueTupleIterator(this.bx));
});
$p.bj = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().X(key);
  var keyHash = $m_sc_Hashing$().cG(keyUnimprovedHash);
  return this.bx.jx(key, keyUnimprovedHash, keyHash, 0);
});
$p.i = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().X(key);
  var keyHash = $m_sc_Hashing$().cG(keyUnimprovedHash);
  return this.bx.jm(key, keyUnimprovedHash, keyHash, 0);
});
$p.d0 = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().X(key);
  var keyHash = $m_sc_Hashing$().cG(keyUnimprovedHash);
  return this.bx.jL(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fH = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().X(key);
  var newRootNode = this.bx.pW(key, value, keyUnimprovedHash, $m_sc_Hashing$().cG(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bx) ? this : new $c_sci_HashMap(newRootNode));
});
$p.ag = (function(f) {
  this.bx.ag(f);
});
$p.eN = (function(f) {
  this.bx.eN(f);
});
$p.y = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bx;
      var x$2 = that.bx;
      return ((x === null) ? (x$2 === null) : x.y(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.D = (function() {
  if (this.j()) {
    return $m_s_util_hashing_MurmurHash3$().jh;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bx);
    return $m_s_util_hashing_MurmurHash3$().ke(hashIterator, $m_s_util_hashing_MurmurHash3$().e3);
  }
});
$p.c7 = (function() {
  return "HashMap";
});
$p.ei = (function(key, value) {
  return this.fH(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  c0: 1,
  as: 1,
  an: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a9: 1,
  ap: 1,
  j: 1,
  f: 1,
  ao: 1,
  d: 1,
  aa: 1,
  t: 1,
  at: 1,
  gM: 1,
  g3: 1,
  l: 1,
  V: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gN)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gX)));
}
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
$p.bh = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (($thiz.aU.b.length - 1) | 0));
  var x1 = $thiz.aU.b[idx];
  if ((x1 === null)) {
    $thiz.aU.b[idx] = new $c_scm_HashSet$Node(elem, hash, null);
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.dj <= hash))) {
      if (((n.dj === hash) && $m_sr_BoxesRunTime$().x(elem, n.eC))) {
        return false;
      }
      prev = n;
      n = n.aV;
    }
    if ((prev === null)) {
      $thiz.aU.b[idx] = new $c_scm_HashSet$Node(elem, hash, x1);
    } else {
      prev.aV = new $c_scm_HashSet$Node(elem, hash, prev.aV);
    }
  }
  $thiz.dZ = ((1 + $thiz.dZ) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.aU.b.length;
  $thiz.je = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.dZ === 0)) {
    $thiz.aU = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.aU = $m_ju_Arrays$().a6($thiz.aU, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.aU.b[i];
        if ((old !== null)) {
          preLow.aV = null;
          preHigh.aV = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aV;
            if (((n.dj & oldlen) === 0)) {
              lastLow.aV = n;
              lastLow = n;
            } else {
              lastHigh.aV = n;
              lastHigh = n;
            }
            n = next;
          }
          lastLow.aV = null;
          if ((old !== preLow.aV)) {
            $thiz.aU.b[i] = preLow.aV;
          }
          if ((preHigh.aV !== null)) {
            $thiz.aU.b[((i + oldlen) | 0)] = preHigh.aV;
            lastHigh.aV = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashSet__tableSizeFor__I__I($thiz, capacity) {
  var x = ((capacity - 1) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824);
}
function $p_scm_HashSet__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.jd));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jd = loadFactor;
  $thiz.aU = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.je = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.aU.b.length);
  $thiz.dZ = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.jd = 0.0;
  this.aU = null;
  this.je = 0;
  this.dZ = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.a2 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b8 = (function() {
  return this.dZ;
});
$p.hJ = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.bj = (function(elem) {
  var hash = this.hJ($m_sr_Statics$().X(elem));
  var x1 = this.aU.b[(hash & ((this.aU.b.length - 1) | 0))];
  return (((x1 === null) ? null : x1.ry(elem, hash)) !== null);
});
$p.bk = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jd)));
  if ((target > this.aU.b.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.hw = (function(elem) {
  if ((((1 + this.dZ) | 0) >= this.je)) {
    $p_scm_HashSet__growTable__I__V(this, (this.aU.b.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.hJ($m_sr_Statics$().X(elem)));
});
$p.oF = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.hJ((h$2$2 | 0)));
    }));
    xs.tv.ty(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.u()) {
      var next = iter.n();
      $p_scm_HashSet__addElem__O__I__Z(this, next.eC, next.dj);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.rs();
    while (iter$2.u()) {
      var next$2 = iter$2.n();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.pv(), next$2.pr());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.r = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.br = (function() {
  return $m_scm_HashSet$();
});
$p.G = (function() {
  return this.dZ;
});
$p.j = (function() {
  return (this.dZ === 0);
});
$p.ag = (function(f) {
  var len = this.aU.b.length;
  var i = 0;
  while ((i < len)) {
    var n = this.aU.b[i];
    if ((n !== null)) {
      n.ag(f);
    }
    i = ((1 + i) | 0);
  }
});
$p.c7 = (function() {
  return "HashSet";
});
$p.D = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.u()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().ke(hashIterator, $m_s_util_hashing_MurmurHash3$().oy);
});
$p.b4 = (function(elem) {
  this.hw(elem);
  return this;
});
$p.bh = (function(elems) {
  return this.oF(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  ci: 1,
  h0: 1,
  fB: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aX: 1,
  g1: 1,
  f: 1,
  d: 1,
  hq: 1,
  J: 1,
  hr: 1,
  H: 1,
  B: 1,
  M: 1,
  I: 1,
  G: 1,
  aI: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gs)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hm)));
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.gD = (function(coll) {
  return $m_sci_ArraySeq$().jF(coll, this.ar());
});
$p.eU = (function() {
  return $m_sci_ArraySeq$().hH(this.ar());
});
$p.cE = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.eM = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.hA = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fD = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bw = (function() {
  return "IndexedSeq";
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bT = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bs = (function(len) {
  var x = this.A();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.A();
});
$p.ea = (function() {
  return $m_sci_ArraySeq$().iZ;
});
$p.sl = (function(f) {
  var a = new $ac_O(this.A());
  var i = 0;
  while ((i < a.b.length)) {
    a.b[i] = f.i(this.C(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().hO(a);
});
$p.c7 = (function() {
  return "ArraySeq";
});
$p.c8 = (function(xs, start, len) {
  var srcLen = this.A();
  var destLen = $m_jl_reflect_Array$().cb(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gy(this.d3(), 0, xs, start, copied);
  }
  return copied;
});
$p.hz = (function() {
  return 2147483647;
});
$p.gC = (function(coll) {
  return $m_sci_ArraySeq$().jF(coll, this.ar());
});
$p.a2 = (function(f) {
  return this.sl(f);
});
$p.br = (function() {
  return $m_sci_ArraySeq$().iZ;
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Y)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.l = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.l = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.cE = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.eM = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.hA = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fD = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bw = (function() {
  return "IndexedSeq";
});
$p.bT = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bs = (function(len) {
  var x = this.A();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.A();
});
$p.ea = (function() {
  return $m_sci_Vector$();
});
$p.A = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.s : this.l.b.length);
});
$p.r = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().oc : new $c_sci_NewVectorIterator(this, this.A(), this.d5()));
});
$p.c7 = (function() {
  return "Vector";
});
$p.c8 = (function(xs, start, len) {
  return this.r().c8(xs, start, len);
});
$p.hz = (function() {
  return $m_sci_Vector$().ob;
});
$p.aX = (function(index) {
  return $m_scg_CommonErrors$().jQ(index, ((this.A() - 1) | 0));
});
$p.w = (function() {
  if ((this.l.b.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.l.b[0];
  }
});
$p.ag = (function(f) {
  var c = this.d5();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = (((c + ((c >>> 31) | 0)) | 0) >> 1);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.jD(((((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0) - 1) | 0), this.d4(i), f);
    i = ((1 + i) | 0);
  }
});
$p.br = (function() {
  return $m_sci_Vector$();
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.cE = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a2 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bw = (function() {
  return "IndexedSeq";
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bT = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bs = (function(len) {
  var x = this.A();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.A();
});
$p.ea = (function() {
  return $m_scm_ArraySeq$().jc;
});
$p.pq = (function(coll) {
  var evidence$1 = this.ar();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.b7();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.G();
  var it = coll.r();
  while (it.u()) {
    var elem = it.n();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.Z.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.jW(elemRuntimeClass.Z.r().w(jsElems));
});
$p.eU = (function() {
  return $m_scm_ArraySeq$().hH(this.ar());
});
$p.c7 = (function() {
  return "ArraySeq";
});
$p.c8 = (function(xs, start, len) {
  var srcLen = this.A();
  var destLen = $m_jl_reflect_Array$().cb(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gy(this.cu(), 0, xs, start, copied);
  }
  return copied;
});
$p.y = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().cb(this.cu()) !== $m_jl_reflect_Array$().cb(other.cu()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.gC = (function(coll) {
  return this.pq(coll);
});
$p.gD = (function(coll) {
  return this.pq(coll);
});
$p.br = (function() {
  return $m_scm_ArraySeq$().jc;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.dD = null;
  this.dD = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.A = (function() {
  return this.dD.b.length;
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oY(this.dD, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().ph(this.dD, that.dD) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dD);
});
$p.gu = (function(i) {
  return this.dD.b[i];
});
$p.i = (function(v1) {
  return this.gu((v1 | 0));
});
$p.C = (function(i) {
  return this.gu(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.d3 = (function() {
  return this.dD;
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bN)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  bN: 1,
  Y: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.dE = null;
  this.dE = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.A = (function() {
  return this.dE.b.length;
});
$p.gl = (function(i) {
  return this.dE.b[i];
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oQ(this.dE, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().pd(this.dE, that.dE) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dE);
});
$p.i = (function(v1) {
  return this.gl((v1 | 0));
});
$p.C = (function(i) {
  return this.gl(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.d3 = (function() {
  return this.dE;
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bO)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  bO: 1,
  Y: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.d9 = null;
  this.d9 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.A = (function() {
  return this.d9.b.length;
});
$p.gm = (function(i) {
  return this.d9.b[i];
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oR(this.d9, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().pe(this.d9, that.d9) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.d9);
});
$p.e4 = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.d9).e4(sb, start, sep, end);
});
$p.i = (function(v1) {
  return $bC(this.gm((v1 | 0)));
});
$p.C = (function(i) {
  return $bC(this.gm(i));
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.d3 = (function() {
  return this.d9;
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bP)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  bP: 1,
  Y: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.dF = null;
  this.dF = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.A = (function() {
  return this.dF.b.length;
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oS(this.dF, this$1.az);
});
$p.y = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var array = this.dF;
    var thatArray = that.dF;
    if ((array === thatArray)) {
      return true;
    } else if ((array.b.length === thatArray.b.length)) {
      var i = 0;
      while (((i < array.b.length) && (array.b[i] === thatArray.b[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= array.b.length);
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dF);
});
$p.gp = (function(i) {
  return this.dF.b[i];
});
$p.i = (function(v1) {
  return this.gp((v1 | 0));
});
$p.C = (function(i) {
  return this.gp(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.d3 = (function() {
  return this.dF;
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bQ)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  bQ: 1,
  Y: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.dG = null;
  this.dG = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.A = (function() {
  return this.dG.b.length;
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oT(this.dG, this$1.az);
});
$p.y = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
    var array = this.dG;
    var thatArray = that.dG;
    if ((array === thatArray)) {
      return true;
    } else if ((array.b.length === thatArray.b.length)) {
      var i = 0;
      while (((i < array.b.length) && (array.b[i] === thatArray.b[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= array.b.length);
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dG);
});
$p.gq = (function(i) {
  return this.dG.b[i];
});
$p.i = (function(v1) {
  return this.gq((v1 | 0));
});
$p.C = (function(i) {
  return this.gq(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.d3 = (function() {
  return this.dG;
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bR)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  bR: 1,
  Y: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.dH = null;
  this.dH = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.A = (function() {
  return this.dH.b.length;
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oU(this.dH, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().jA(this.dH, that.dH) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dH);
});
$p.gr = (function(i) {
  return this.dH.b[i];
});
$p.i = (function(v1) {
  return this.gr((v1 | 0));
});
$p.C = (function(i) {
  return this.gr(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.d3 = (function() {
  return this.dH;
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bS)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  bS: 1,
  Y: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.dI = null;
  this.dI = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.A = (function() {
  return ((this.dI.b.length >>> 1) | 0);
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oV(this.dI, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().pf(this.dI, that.dI) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dI);
});
$p.gs = (function(i) {
  var $x_1 = this.dI.b;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.i = (function(v1) {
  return this.gs((v1 | 0));
});
$p.C = (function(i) {
  return this.gs(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.d3 = (function() {
  return this.dI;
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bT)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  bT: 1,
  Y: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.cO = null;
  this.cO = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.ar = (function() {
  return $m_s_reflect_ClassTag$().oN($objectGetClass(this.cO).Z.Q());
});
$p.A = (function() {
  return this.cO.b.length;
});
$p.C = (function(i) {
  return this.cO.b[i];
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oP(this.cO, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().pi(this.cO, that.cO) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.cO);
});
$p.i = (function(v1) {
  return this.C((v1 | 0));
});
$p.d3 = (function() {
  return this.cO;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bU)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  bU: 1,
  Y: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.dJ = null;
  this.dJ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.A = (function() {
  return this.dJ.b.length;
});
$p.gn = (function(i) {
  return this.dJ.b[i];
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oW(this.dJ, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().pg(this.dJ, that.dJ) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dJ);
});
$p.i = (function(v1) {
  return this.gn((v1 | 0));
});
$p.C = (function(i) {
  return this.gn(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.d3 = (function() {
  return this.dJ;
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bV)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  bV: 1,
  Y: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.ew = null;
  this.ew = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.A = (function() {
  return this.ew.b.length;
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oX(this.ew, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.ew.b.length === that.ew.b.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.ew);
});
$p.gt = (function(i) {
});
$p.i = (function(v1) {
  this.gt((v1 | 0));
});
$p.C = (function(i) {
  this.gt(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.d3 = (function() {
  return this.ew;
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bW)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  bW: 1,
  Y: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  a4: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ((!xs.j()) | 0);
    } else {
      if ((!xs.j())) {
        var temp$i = ((1 + i) | 0);
        var temp$xs = xs.v();
        i = temp$i;
        xs = temp$xs;
        continue;
      }
      return (-1);
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var aEmpty = a.j();
      var bEmpty = b.j();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().x(a.w(), b.w()))) {
        var temp$a = a.v();
        var temp$b = b.v();
        a = temp$a;
        b = temp$b;
        continue;
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.cE = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.r = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.eM = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.bw = (function() {
  return "LinearSeq";
});
$p.jT = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.C = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fD = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.ea = (function() {
  return $m_sci_List$();
});
$p.oz = (function(prefix) {
  if (this.j()) {
    return prefix;
  } else if (prefix.j()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.w(), this);
    var curr = result;
    var that = prefix.v();
    while ((!that.j())) {
      var temp = new $c_sci_$colon$colon(that.w(), this);
      curr.a0 = temp;
      curr = temp;
      that = that.v();
    }
    return result;
  }
});
$p.j = (function() {
  return (this === $m_sci_Nil$());
});
$p.ee = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.oz(prefix);
  }
  if ((prefix.G() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.j()) {
      return prefix.eV();
    }
  }
  var iter = prefix.r();
  if (iter.u()) {
    var result = new $c_sci_$colon$colon(iter.n(), this);
    var curr = result;
    while (iter.u()) {
      var temp = new $c_sci_$colon$colon(iter.n(), this);
      curr.a0 = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.oK = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.oz(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.sn = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.i(this.w()), $m_sci_Nil$());
    var t = h;
    var rest = this.v();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.i(rest.w()), $m_sci_Nil$());
      t.a0 = nx;
      t = nx;
      rest = rest.v();
    }
    return h;
  }
});
$p.r0 = (function(pf) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var rest = this;
    var h = null;
    var x = null;
    while ((h === null)) {
      x = pf.c6(rest.w(), $m_sci_List$().ga);
      if ((x !== $m_sci_List$().ga)) {
        h = new $c_sci_$colon$colon(x, $m_sci_Nil$());
      }
      rest = rest.v();
      if ((rest === $m_sci_Nil$())) {
        return ((h === null) ? $m_sci_Nil$() : h);
      }
    }
    var t = h;
    while ((rest !== $m_sci_Nil$())) {
      x = pf.c6(rest.w(), $m_sci_List$().ga);
      if ((x !== $m_sci_List$().ga)) {
        var nx = new $c_sci_$colon$colon(x, $m_sci_Nil$());
        t.a0 = nx;
        t = nx;
      }
      rest = rest.v();
    }
    return h;
  }
});
$p.ag = (function(f) {
  var these = this;
  while ((!these.j())) {
    f.i(these.w());
    these = these.v();
  }
});
$p.A = (function() {
  var these = this;
  var len = 0;
  while ((!these.j())) {
    len = ((1 + len) | 0);
    these = these.v();
  }
  return len;
});
$p.bs = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.bj = (function(elem) {
  var these = this;
  while ((!these.j())) {
    if ($m_sr_BoxesRunTime$().x(these.w(), elem)) {
      return true;
    }
    these = these.v();
  }
  return false;
});
$p.c7 = (function() {
  return "List";
});
$p.eV = (function() {
  return this;
});
$p.y = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.i = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.cw = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.pb = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.a2 = (function(f) {
  return this.sn(f);
});
$p.br = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b0)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.l = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.dT = null;
  this.dT = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.A = (function() {
  return this.dT.b.length;
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oY(this.dT, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().ph(this.dT, that.dT) : $c_scm_ArraySeq.prototype.y.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dT);
});
$p.gu = (function(index) {
  return this.dT.b[index];
});
$p.i = (function(v1) {
  return this.gu((v1 | 0));
});
$p.C = (function(i) {
  return this.gu(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cu = (function() {
  return this.dT;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  c8: 1,
  Z: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.dU = null;
  this.dU = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.A = (function() {
  return this.dU.b.length;
});
$p.gl = (function(index) {
  return this.dU.b[index];
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oQ(this.dU, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().pd(this.dU, that.dU) : $c_scm_ArraySeq.prototype.y.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dU);
});
$p.i = (function(v1) {
  return this.gl((v1 | 0));
});
$p.C = (function(i) {
  return this.gl(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cu = (function() {
  return this.dU;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  c9: 1,
  Z: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.c5 = null;
  this.c5 = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.A = (function() {
  return this.c5.b.length;
});
$p.gm = (function(index) {
  return this.c5.b[index];
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oR(this.c5, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().pe(this.c5, that.c5) : $c_scm_ArraySeq.prototype.y.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.c5);
});
$p.e4 = (function(sb, start, sep, end) {
  var jsb = sb.aW;
  if ((start.length !== 0)) {
    jsb.z = (("" + jsb.z) + start);
  }
  var len = this.c5.b.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.oI(this.c5);
    } else {
      jsb.A();
      var c = this.c5.b[0];
      var str = ("" + $cToS(c));
      jsb.z = (jsb.z + str);
      var i = 1;
      while ((i < len)) {
        jsb.z = (("" + jsb.z) + sep);
        var c$1 = this.c5.b[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.z = (jsb.z + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.z = (("" + jsb.z) + end);
  }
  return sb;
});
$p.i = (function(v1) {
  return $bC(this.gm((v1 | 0)));
});
$p.C = (function(i) {
  return $bC(this.gm(i));
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cu = (function() {
  return this.c5;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ca)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  ca: 1,
  Z: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.cp = null;
  this.cp = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.A = (function() {
  return this.cp.b.length;
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oS(this.cp, this$1.az);
});
$p.y = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var thatArray = that.cp;
    if ((this.cp === thatArray)) {
      return true;
    } else if ((this.cp.b.length === thatArray.b.length)) {
      var i = 0;
      while (((i < this.cp.b.length) && (this.cp.b[i] === thatArray.b[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.cp.b.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.y.call(this, that);
  }
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.cp);
});
$p.gp = (function(index) {
  return this.cp.b[index];
});
$p.i = (function(v1) {
  return this.gp((v1 | 0));
});
$p.C = (function(i) {
  return this.gp(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cu = (function() {
  return this.cp;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cb: 1,
  Z: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.cq = null;
  this.cq = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.A = (function() {
  return this.cq.b.length;
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oT(this.cq, this$1.az);
});
$p.y = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var thatArray = that.cq;
    if ((this.cq === thatArray)) {
      return true;
    } else if ((this.cq.b.length === thatArray.b.length)) {
      var i = 0;
      while (((i < this.cq.b.length) && (this.cq.b[i] === thatArray.b[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.cq.b.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.y.call(this, that);
  }
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.cq);
});
$p.gq = (function(index) {
  return this.cq.b[index];
});
$p.i = (function(v1) {
  return this.gq((v1 | 0));
});
$p.C = (function(i) {
  return this.gq(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cu = (function() {
  return this.cq;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cc: 1,
  Z: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.dV = null;
  this.dV = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.A = (function() {
  return this.dV.b.length;
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oU(this.dV, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().jA(this.dV, that.dV) : $c_scm_ArraySeq.prototype.y.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dV);
});
$p.gr = (function(index) {
  return this.dV.b[index];
});
$p.i = (function(v1) {
  return this.gr((v1 | 0));
});
$p.C = (function(i) {
  return this.gr(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cu = (function() {
  return this.dV;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cd)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  cd: 1,
  Z: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.dW = null;
  this.dW = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.A = (function() {
  return ((this.dW.b.length >>> 1) | 0);
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oV(this.dW, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().pf(this.dW, that.dW) : $c_scm_ArraySeq.prototype.y.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dW);
});
$p.gs = (function(index) {
  var $x_1 = this.dW.b;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.i = (function(v1) {
  return this.gs((v1 | 0));
});
$p.C = (function(i) {
  return this.gs(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cu = (function() {
  return this.dW;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ce)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  ce: 1,
  Z: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.dh = null;
  this.dh = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.ar = (function() {
  return $m_s_reflect_ClassTag$().oN($objectGetClass(this.dh).Z.Q());
});
$p.A = (function() {
  return this.dh.b.length;
});
$p.C = (function(index) {
  return this.dh.b[index];
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oP(this.dh, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().pi(this.dh, that.dh) : $c_scm_ArraySeq.prototype.y.call(this, that));
});
$p.r = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.dh);
});
$p.i = (function(v1) {
  return this.C((v1 | 0));
});
$p.cu = (function() {
  return this.dh;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  cf: 1,
  Z: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.dX = null;
  this.dX = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.A = (function() {
  return this.dX.b.length;
});
$p.gn = (function(index) {
  return this.dX.b[index];
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oW(this.dX, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().pg(this.dX, that.dX) : $c_scm_ArraySeq.prototype.y.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dX);
});
$p.i = (function(v1) {
  return this.gn((v1 | 0));
});
$p.C = (function(i) {
  return this.gn(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cu = (function() {
  return this.dX;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cg: 1,
  Z: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.eB = null;
  this.eB = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.A = (function() {
  return this.eB.b.length;
});
$p.D = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oX(this.eB, this$1.az);
});
$p.y = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.eB.b.length === that.eB.b.length) : $c_scm_ArraySeq.prototype.y.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.eB);
});
$p.gt = (function(index) {
});
$p.i = (function(v1) {
  this.gt((v1 | 0));
});
$p.C = (function(i) {
  this.gt(i);
});
$p.ar = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cu = (function() {
  return this.eB;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  ch: 1,
  Z: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hc)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.q = suffix1;
  $thiz.s = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.l = null;
  this.q = null;
  this.s = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.l = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.C = (function(index) {
  if (((index >= 0) && (index < this.l.b.length))) {
    return this.l.b[index];
  } else {
    throw this.aX(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.l.b.length))) {
    var a1 = this.l;
    var a1c = a1.o();
    a1c.b[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aX(index);
  }
});
$p.e5 = (function(elem) {
  if ((this.l.b.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().ft(this.l, elem));
  } else {
    var $x_2 = this.l;
    var $x_1 = $m_sci_VectorStatics$().bJ;
    var a = new $ac_O(1);
    a.b[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cI = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cx(this.l, f));
});
$p.d5 = (function() {
  return 1;
});
$p.d4 = (function(idx) {
  return this.l;
});
$p.a2 = (function(f) {
  return this.cI(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.l.b.length))) {
    return this.l.b[index];
  } else {
    throw this.aX(index);
  }
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  gQ: 1,
  aj: 1,
  ab: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.g5 = null;
  this.a0 = null;
  this.g5 = head;
  this.a0 = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.w = (function() {
  return this.g5;
});
$p.aw = (function() {
  return "::";
});
$p.au = (function() {
  return 2;
});
$p.av = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.g5;
      break;
    }
    case 1: {
      return this.a0;
      break;
    }
    default: {
      return $m_sr_Statics$().eR(x$1);
    }
  }
});
$p.bA = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return this.a0;
});
$p.bT = (function() {
  return new $c_s_Some(this.g5);
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  g9: 1,
  b0: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  aY: 1,
  aA: 1,
  aT: 1,
  aZ: 1,
  bM: 1,
  s: 1,
  l: 1,
  A: 1,
  V: 1,
  a: 1,
  u: 1
}));
/** @constructor */
function $c_sci_Nil$() {
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.rY = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.tg = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.G = (function() {
  return 0;
});
$p.r = (function() {
  return $m_sc_Iterator$().P;
});
$p.aw = (function() {
  return "Nil";
});
$p.au = (function() {
  return 0;
});
$p.av = (function(x$1) {
  return $m_sr_Statics$().eR(x$1);
});
$p.bA = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  this.tg();
});
$p.bT = (function() {
  return $m_s_None$();
});
$p.w = (function() {
  this.rY();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  gG: 1,
  b0: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  aY: 1,
  aA: 1,
  aT: 1,
  aZ: 1,
  bM: 1,
  s: 1,
  l: 1,
  A: 1,
  V: 1,
  a: 1,
  u: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.l = null;
  this.q = null;
  this.s = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().j6, $m_sci_VectorStatics$().j6, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.oL = (function(index) {
  throw this.aX(index);
});
$p.eh = (function(index, elem) {
  throw this.aX(index);
});
$p.e5 = (function(elem) {
  var a = new $ac_O(1);
  a.b[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.d5 = (function() {
  return 0;
});
$p.d4 = (function(idx) {
  return null;
});
$p.y = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aX = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.a2 = (function(f) {
  return this;
});
$p.i = (function(v1) {
  this.oL((v1 | 0));
});
$p.C = (function(i) {
  this.oL(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  gP: 1,
  ai: 1,
  aj: 1,
  ab: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  V: 1,
  a: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.l = null;
  this.q = null;
  this.s = 0;
  this.bR = 0;
  this.by = null;
  this.bR = len1;
  this.by = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.C = (function(index) {
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.bR) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.by.b.length) ? this.by.b[i2].b[i1] : this.q.b[(31 & io)]);
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.aX(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.s))) {
    if ((index >= this.bR)) {
      var io = ((index - this.bR) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.by.b.length)) {
        var a2 = this.by;
        var a2c = a2.o();
        var a1 = a2c.b[i2];
        var a1c = a1.o();
        a1c.b[i1] = elem;
        a2c.b[i2] = a1c;
        return new $c_sci_Vector2(this.l, this.bR, a2c, this.q, this.s);
      } else {
        var a1$1 = this.q;
        var a1c$1 = a1$1.o();
        a1c$1.b[i1] = elem;
        return new $c_sci_Vector2(this.l, this.bR, this.by, a1c$1, this.s);
      }
    } else {
      var a1$2 = this.l;
      var a1c$2 = a1$2.o();
      a1c$2.b[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bR, this.by, this.q, this.s);
    }
  } else {
    throw this.aX(index);
  }
});
$p.e5 = (function(elem) {
  if ((this.q.b.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().ft(this.q, elem);
    var x$2 = ((1 + this.s) | 0);
    return new $c_sci_Vector2(this.l, this.bR, this.by, x$1, x$2);
  } else if ((this.by.b.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().L(this.by, this.q);
    var a = new $ac_O(1);
    a.b[0] = elem;
    var x$8 = ((1 + this.s) | 0);
    return new $c_sci_Vector2(this.l, this.bR, x$6, a, x$8);
  } else {
    var $x_5 = this.l;
    var $x_4 = this.bR;
    var $x_3 = this.by;
    var $x_2 = this.bR;
    var $x_1 = $m_sci_VectorStatics$().cV;
    var x = this.q;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.b[0] = x;
    var a$2 = new $ac_O(1);
    a$2.b[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.s) | 0));
  }
});
$p.cI = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cx(this.l, f);
  var x$2 = $m_sci_VectorStatics$().ae(2, this.by, f);
  var x$3 = $m_sci_VectorStatics$().cx(this.q, f);
  return new $c_sci_Vector2(x$1, this.bR, x$2, x$3, this.s);
});
$p.d5 = (function() {
  return 3;
});
$p.d4 = (function(idx) {
  switch (idx) {
    case 0: {
      return this.l;
      break;
    }
    case 1: {
      return this.by;
      break;
    }
    case 2: {
      return this.q;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.a2 = (function(f) {
  return this.cI(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.bR) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.by.b.length) ? this.by.b[i2].b[i1] : this.q.b[(31 & io)]);
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.aX(index);
  }
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  gR: 1,
  ai: 1,
  aj: 1,
  ab: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.l = null;
  this.q = null;
  this.s = 0;
  this.bu = 0;
  this.bI = null;
  this.bv = 0;
  this.be = null;
  this.bf = null;
  this.bu = len1;
  this.bI = prefix2;
  this.bv = len12;
  this.be = data3;
  this.bf = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.C = (function(index) {
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.bv) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.be.b.length) ? this.be.b[i3].b[i2].b[i1] : ((i2 < this.bf.b.length) ? this.bf.b[i2].b[i1] : this.q.b[i1]));
    } else if ((index >= this.bu)) {
      var io$2 = ((index - this.bu) | 0);
      return this.bI.b[((io$2 >>> 5) | 0)].b[(31 & io$2)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.aX(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.s))) {
    if ((index >= this.bv)) {
      var io = ((index - this.bv) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.be.b.length)) {
        var a3 = this.be;
        var a3c = a3.o();
        var a2 = a3c.b[i3];
        var a2c = a2.o();
        var a1 = a2c.b[i2];
        var a1c = a1.o();
        a1c.b[i1] = elem;
        a2c.b[i2] = a1c;
        a3c.b[i3] = a2c;
        return new $c_sci_Vector3(this.l, this.bu, this.bI, this.bv, a3c, this.bf, this.q, this.s);
      } else if ((i2 < this.bf.b.length)) {
        var a2$1 = this.bf;
        var a2c$1 = a2$1.o();
        var a1$1 = a2c$1.b[i2];
        var a1c$1 = a1$1.o();
        a1c$1.b[i1] = elem;
        a2c$1.b[i2] = a1c$1;
        return new $c_sci_Vector3(this.l, this.bu, this.bI, this.bv, this.be, a2c$1, this.q, this.s);
      } else {
        var a1$2 = this.q;
        var a1c$2 = a1$2.o();
        a1c$2.b[i1] = elem;
        return new $c_sci_Vector3(this.l, this.bu, this.bI, this.bv, this.be, this.bf, a1c$2, this.s);
      }
    } else if ((index >= this.bu)) {
      var io$2 = ((index - this.bu) | 0);
      var a2$2 = this.bI;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.o();
      var a1$3 = a2c$2.b[idx2];
      var a1c$3 = a1$3.o();
      a1c$3.b[idx1] = elem;
      a2c$2.b[idx2] = a1c$3;
      return new $c_sci_Vector3(this.l, this.bu, a2c$2, this.bv, this.be, this.bf, this.q, this.s);
    } else {
      var a1$4 = this.l;
      var a1c$4 = a1$4.o();
      a1c$4.b[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bu, this.bI, this.bv, this.be, this.bf, this.q, this.s);
    }
  } else {
    throw this.aX(index);
  }
});
$p.e5 = (function(elem) {
  if ((this.q.b.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().ft(this.q, elem);
    var x$2 = ((1 + this.s) | 0);
    return new $c_sci_Vector3(this.l, this.bu, this.bI, this.bv, this.be, this.bf, x$1, x$2);
  } else if ((this.bf.b.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().L(this.bf, this.q);
    var a = new $ac_O(1);
    a.b[0] = elem;
    var x$11 = ((1 + this.s) | 0);
    return new $c_sci_Vector3(this.l, this.bu, this.bI, this.bv, this.be, x$9, a, x$11);
  } else if ((this.be.b.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().L(this.be, $m_sci_VectorStatics$().L(this.bf, this.q));
    var x$18 = $m_sci_VectorStatics$().bJ;
    var a$1 = new $ac_O(1);
    a$1.b[0] = elem;
    var x$20 = ((1 + this.s) | 0);
    return new $c_sci_Vector3(this.l, this.bu, this.bI, this.bv, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.l;
    var $x_7 = this.bu;
    var $x_6 = this.bI;
    var $x_5 = this.bv;
    var $x_4 = this.be;
    var $x_3 = this.bv;
    var $x_2 = $m_sci_VectorStatics$().fn;
    var x = $m_sci_VectorStatics$().L(this.bf, this.q);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.b[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bJ;
    var a$3 = new $ac_O(1);
    a$3.b[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.s) | 0));
  }
});
$p.cI = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cx(this.l, f);
  var x$2 = $m_sci_VectorStatics$().ae(2, this.bI, f);
  var x$3 = $m_sci_VectorStatics$().ae(3, this.be, f);
  var x$4 = $m_sci_VectorStatics$().ae(2, this.bf, f);
  var x$5 = $m_sci_VectorStatics$().cx(this.q, f);
  return new $c_sci_Vector3(x$1, this.bu, x$2, this.bv, x$3, x$4, x$5, this.s);
});
$p.d5 = (function() {
  return 5;
});
$p.d4 = (function(idx) {
  switch (idx) {
    case 0: {
      return this.l;
      break;
    }
    case 1: {
      return this.bI;
      break;
    }
    case 2: {
      return this.be;
      break;
    }
    case 3: {
      return this.bf;
      break;
    }
    case 4: {
      return this.q;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.a2 = (function(f) {
  return this.cI(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.bv) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.be.b.length) ? this.be.b[i3].b[i2].b[i1] : ((i2 < this.bf.b.length) ? this.bf.b[i2].b[i1] : this.q.b[i1]));
    } else if ((index >= this.bu)) {
      var io$2 = ((index - this.bu) | 0);
      return this.bI.b[((io$2 >>> 5) | 0)].b[(31 & io$2)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.aX(index);
  }
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  gS: 1,
  ai: 1,
  aj: 1,
  ab: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.l = null;
  this.q = null;
  this.s = 0;
  this.b0 = 0;
  this.bm = null;
  this.b1 = 0;
  this.bn = null;
  this.b2 = 0;
  this.aM = null;
  this.aO = null;
  this.aN = null;
  this.b0 = len1;
  this.bm = prefix2;
  this.b1 = len12;
  this.bn = prefix3;
  this.b2 = len123;
  this.aM = data4;
  this.aO = suffix3;
  this.aN = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.C = (function(index) {
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.b2) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aM.b.length) ? this.aM.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.aO.b.length) ? this.aO.b[i3].b[i2].b[i1] : ((i2 < this.aN.b.length) ? this.aN.b[i2].b[i1] : this.q.b[i1])));
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      return this.bn.b[((io$2 >>> 10) | 0)].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.b0)) {
      var io$3 = ((index - this.b0) | 0);
      return this.bm.b[((io$3 >>> 5) | 0)].b[(31 & io$3)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.aX(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.s))) {
    if ((index >= this.b2)) {
      var io = ((index - this.b2) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.aM.b.length)) {
        var a4 = this.aM;
        var a4c = a4.o();
        var a3 = a4c.b[i4];
        var a3c = a3.o();
        var a2 = a3c.b[i3];
        var a2c = a2.o();
        var a1 = a2c.b[i2];
        var a1c = a1.o();
        a1c.b[i1] = elem;
        a2c.b[i2] = a1c;
        a3c.b[i3] = a2c;
        a4c.b[i4] = a3c;
        return new $c_sci_Vector4(this.l, this.b0, this.bm, this.b1, this.bn, this.b2, a4c, this.aO, this.aN, this.q, this.s);
      } else if ((i3 < this.aO.b.length)) {
        var a3$1 = this.aO;
        var a3c$1 = a3$1.o();
        var a2$1 = a3c$1.b[i3];
        var a2c$1 = a2$1.o();
        var a1$1 = a2c$1.b[i2];
        var a1c$1 = a1$1.o();
        a1c$1.b[i1] = elem;
        a2c$1.b[i2] = a1c$1;
        a3c$1.b[i3] = a2c$1;
        return new $c_sci_Vector4(this.l, this.b0, this.bm, this.b1, this.bn, this.b2, this.aM, a3c$1, this.aN, this.q, this.s);
      } else if ((i2 < this.aN.b.length)) {
        var a2$2 = this.aN;
        var a2c$2 = a2$2.o();
        var a1$2 = a2c$2.b[i2];
        var a1c$2 = a1$2.o();
        a1c$2.b[i1] = elem;
        a2c$2.b[i2] = a1c$2;
        return new $c_sci_Vector4(this.l, this.b0, this.bm, this.b1, this.bn, this.b2, this.aM, this.aO, a2c$2, this.q, this.s);
      } else {
        var a1$3 = this.q;
        var a1c$3 = a1$3.o();
        a1c$3.b[i1] = elem;
        return new $c_sci_Vector4(this.l, this.b0, this.bm, this.b1, this.bn, this.b2, this.aM, this.aO, this.aN, a1c$3, this.s);
      }
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      var a3$2 = this.bn;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.o();
      var a2$3 = a3c$2.b[idx3];
      var a2c$3 = a2$3.o();
      var a1$4 = a2c$3.b[idx2];
      var a1c$4 = a1$4.o();
      a1c$4.b[idx1] = elem;
      a2c$3.b[idx2] = a1c$4;
      a3c$2.b[idx3] = a2c$3;
      return new $c_sci_Vector4(this.l, this.b0, this.bm, this.b1, a3c$2, this.b2, this.aM, this.aO, this.aN, this.q, this.s);
    } else if ((index >= this.b0)) {
      var io$3 = ((index - this.b0) | 0);
      var a2$4 = this.bm;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.o();
      var a1$5 = a2c$4.b[idx2$1];
      var a1c$5 = a1$5.o();
      a1c$5.b[idx1$1] = elem;
      a2c$4.b[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.l, this.b0, a2c$4, this.b1, this.bn, this.b2, this.aM, this.aO, this.aN, this.q, this.s);
    } else {
      var a1$6 = this.l;
      var a1c$6 = a1$6.o();
      a1c$6.b[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.b0, this.bm, this.b1, this.bn, this.b2, this.aM, this.aO, this.aN, this.q, this.s);
    }
  } else {
    throw this.aX(index);
  }
});
$p.e5 = (function(elem) {
  if ((this.q.b.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().ft(this.q, elem);
    var x$2 = ((1 + this.s) | 0);
    return new $c_sci_Vector4(this.l, this.b0, this.bm, this.b1, this.bn, this.b2, this.aM, this.aO, this.aN, x$1, x$2);
  } else if ((this.aN.b.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().L(this.aN, this.q);
    var a = new $ac_O(1);
    a.b[0] = elem;
    var x$14 = ((1 + this.s) | 0);
    return new $c_sci_Vector4(this.l, this.b0, this.bm, this.b1, this.bn, this.b2, this.aM, this.aO, x$12, a, x$14);
  } else if ((this.aO.b.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().L(this.aO, $m_sci_VectorStatics$().L(this.aN, this.q));
    var x$24 = $m_sci_VectorStatics$().bJ;
    var a$1 = new $ac_O(1);
    a$1.b[0] = elem;
    var x$26 = ((1 + this.s) | 0);
    return new $c_sci_Vector4(this.l, this.b0, this.bm, this.b1, this.bn, this.b2, this.aM, x$23, x$24, a$1, x$26);
  } else if ((this.aM.b.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().L(this.aM, $m_sci_VectorStatics$().L(this.aO, $m_sci_VectorStatics$().L(this.aN, this.q)));
    var x$35 = $m_sci_VectorStatics$().cV;
    var x$36 = $m_sci_VectorStatics$().bJ;
    var a$2 = new $ac_O(1);
    a$2.b[0] = elem;
    var x$38 = ((1 + this.s) | 0);
    return new $c_sci_Vector4(this.l, this.b0, this.bm, this.b1, this.bn, this.b2, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.l;
    var $x_10 = this.b0;
    var $x_9 = this.bm;
    var $x_8 = this.b1;
    var $x_7 = this.bn;
    var $x_6 = this.b2;
    var $x_5 = this.aM;
    var $x_4 = this.b2;
    var $x_3 = $m_sci_VectorStatics$().j7;
    var x = $m_sci_VectorStatics$().L(this.aO, $m_sci_VectorStatics$().L(this.aN, this.q));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.b[0] = x;
    var $x_2 = $m_sci_VectorStatics$().cV;
    var $x_1 = $m_sci_VectorStatics$().bJ;
    var a$4 = new $ac_O(1);
    a$4.b[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.s) | 0));
  }
});
$p.cI = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cx(this.l, f);
  var x$2 = $m_sci_VectorStatics$().ae(2, this.bm, f);
  var x$3 = $m_sci_VectorStatics$().ae(3, this.bn, f);
  var x$4 = $m_sci_VectorStatics$().ae(4, this.aM, f);
  var x$5 = $m_sci_VectorStatics$().ae(3, this.aO, f);
  var x$6 = $m_sci_VectorStatics$().ae(2, this.aN, f);
  var x$7 = $m_sci_VectorStatics$().cx(this.q, f);
  return new $c_sci_Vector4(x$1, this.b0, x$2, this.b1, x$3, this.b2, x$4, x$5, x$6, x$7, this.s);
});
$p.d5 = (function() {
  return 7;
});
$p.d4 = (function(idx) {
  switch (idx) {
    case 0: {
      return this.l;
      break;
    }
    case 1: {
      return this.bm;
      break;
    }
    case 2: {
      return this.bn;
      break;
    }
    case 3: {
      return this.aM;
      break;
    }
    case 4: {
      return this.aO;
      break;
    }
    case 5: {
      return this.aN;
      break;
    }
    case 6: {
      return this.q;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.a2 = (function(f) {
  return this.cI(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.b2) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aM.b.length) ? this.aM.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.aO.b.length) ? this.aO.b[i3].b[i2].b[i1] : ((i2 < this.aN.b.length) ? this.aN.b[i2].b[i1] : this.q.b[i1])));
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      return this.bn.b[((io$2 >>> 10) | 0)].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.b0)) {
      var io$3 = ((index - this.b0) | 0);
      return this.bm.b[((io$3 >>> 5) | 0)].b[(31 & io$3)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.aX(index);
  }
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  gT: 1,
  ai: 1,
  aj: 1,
  ab: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.l = null;
  this.q = null;
  this.s = 0;
  this.aB = 0;
  this.aQ = null;
  this.aC = 0;
  this.aR = null;
  this.aD = 0;
  this.aS = null;
  this.aE = 0;
  this.aj = null;
  this.am = null;
  this.al = null;
  this.ak = null;
  this.aB = len1;
  this.aQ = prefix2;
  this.aC = len12;
  this.aR = prefix3;
  this.aD = len123;
  this.aS = prefix4;
  this.aE = len1234;
  this.aj = data5;
  this.am = suffix4;
  this.al = suffix3;
  this.ak = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.C = (function(index) {
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.aE) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.aj.b.length) ? this.aj.b[i5].b[i4].b[i3].b[i2].b[i1] : ((i4 < this.am.b.length) ? this.am.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.al.b.length) ? this.al.b[i3].b[i2].b[i1] : ((i2 < this.ak.b.length) ? this.ak.b[i2].b[i1] : this.q.b[i1]))));
    } else if ((index >= this.aD)) {
      var io$2 = ((index - this.aD) | 0);
      return this.aS.b[((io$2 >>> 15) | 0)].b[(31 & ((io$2 >>> 10) | 0))].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.aC)) {
      var io$3 = ((index - this.aC) | 0);
      return this.aR.b[((io$3 >>> 10) | 0)].b[(31 & ((io$3 >>> 5) | 0))].b[(31 & io$3)];
    } else if ((index >= this.aB)) {
      var io$4 = ((index - this.aB) | 0);
      return this.aQ.b[((io$4 >>> 5) | 0)].b[(31 & io$4)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.aX(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.s))) {
    if ((index >= this.aE)) {
      var io = ((index - this.aE) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.aj.b.length)) {
        var a5 = this.aj;
        var a5c = a5.o();
        var a4 = a5c.b[i5];
        var a4c = a4.o();
        var a3 = a4c.b[i4];
        var a3c = a3.o();
        var a2 = a3c.b[i3];
        var a2c = a2.o();
        var a1 = a2c.b[i2];
        var a1c = a1.o();
        a1c.b[i1] = elem;
        a2c.b[i2] = a1c;
        a3c.b[i3] = a2c;
        a4c.b[i4] = a3c;
        a5c.b[i5] = a4c;
        return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, a5c, this.am, this.al, this.ak, this.q, this.s);
      } else if ((i4 < this.am.b.length)) {
        var a4$1 = this.am;
        var a4c$1 = a4$1.o();
        var a3$1 = a4c$1.b[i4];
        var a3c$1 = a3$1.o();
        var a2$1 = a3c$1.b[i3];
        var a2c$1 = a2$1.o();
        var a1$1 = a2c$1.b[i2];
        var a1c$1 = a1$1.o();
        a1c$1.b[i1] = elem;
        a2c$1.b[i2] = a1c$1;
        a3c$1.b[i3] = a2c$1;
        a4c$1.b[i4] = a3c$1;
        return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.aj, a4c$1, this.al, this.ak, this.q, this.s);
      } else if ((i3 < this.al.b.length)) {
        var a3$2 = this.al;
        var a3c$2 = a3$2.o();
        var a2$2 = a3c$2.b[i3];
        var a2c$2 = a2$2.o();
        var a1$2 = a2c$2.b[i2];
        var a1c$2 = a1$2.o();
        a1c$2.b[i1] = elem;
        a2c$2.b[i2] = a1c$2;
        a3c$2.b[i3] = a2c$2;
        return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.aj, this.am, a3c$2, this.ak, this.q, this.s);
      } else if ((i2 < this.ak.b.length)) {
        var a2$3 = this.ak;
        var a2c$3 = a2$3.o();
        var a1$3 = a2c$3.b[i2];
        var a1c$3 = a1$3.o();
        a1c$3.b[i1] = elem;
        a2c$3.b[i2] = a1c$3;
        return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.aj, this.am, this.al, a2c$3, this.q, this.s);
      } else {
        var a1$4 = this.q;
        var a1c$4 = a1$4.o();
        a1c$4.b[i1] = elem;
        return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.aj, this.am, this.al, this.ak, a1c$4, this.s);
      }
    } else if ((index >= this.aD)) {
      var io$2 = ((index - this.aD) | 0);
      var a4$2 = this.aS;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.o();
      var a3$3 = a4c$2.b[idx4];
      var a3c$3 = a3$3.o();
      var a2$4 = a3c$3.b[idx3];
      var a2c$4 = a2$4.o();
      var a1$5 = a2c$4.b[idx2];
      var a1c$5 = a1$5.o();
      a1c$5.b[idx1] = elem;
      a2c$4.b[idx2] = a1c$5;
      a3c$3.b[idx3] = a2c$4;
      a4c$2.b[idx4] = a3c$3;
      return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, a4c$2, this.aE, this.aj, this.am, this.al, this.ak, this.q, this.s);
    } else if ((index >= this.aC)) {
      var io$3 = ((index - this.aC) | 0);
      var a3$4 = this.aR;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.o();
      var a2$5 = a3c$4.b[idx3$1];
      var a2c$5 = a2$5.o();
      var a1$6 = a2c$5.b[idx2$1];
      var a1c$6 = a1$6.o();
      a1c$6.b[idx1$1] = elem;
      a2c$5.b[idx2$1] = a1c$6;
      a3c$4.b[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, a3c$4, this.aD, this.aS, this.aE, this.aj, this.am, this.al, this.ak, this.q, this.s);
    } else if ((index >= this.aB)) {
      var io$4 = ((index - this.aB) | 0);
      var a2$6 = this.aQ;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.o();
      var a1$7 = a2c$6.b[idx2$2];
      var a1c$7 = a1$7.o();
      a1c$7.b[idx1$2] = elem;
      a2c$6.b[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.l, this.aB, a2c$6, this.aC, this.aR, this.aD, this.aS, this.aE, this.aj, this.am, this.al, this.ak, this.q, this.s);
    } else {
      var a1$8 = this.l;
      var a1c$8 = a1$8.o();
      a1c$8.b[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.aj, this.am, this.al, this.ak, this.q, this.s);
    }
  } else {
    throw this.aX(index);
  }
});
$p.e5 = (function(elem) {
  if ((this.q.b.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().ft(this.q, elem);
    var x$2 = ((1 + this.s) | 0);
    return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.aj, this.am, this.al, this.ak, x$1, x$2);
  } else if ((this.ak.b.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().L(this.ak, this.q);
    var a = new $ac_O(1);
    a.b[0] = elem;
    var x$17 = ((1 + this.s) | 0);
    return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.aj, this.am, this.al, x$15, a, x$17);
  } else if ((this.al.b.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().L(this.al, $m_sci_VectorStatics$().L(this.ak, this.q));
    var x$30 = $m_sci_VectorStatics$().bJ;
    var a$1 = new $ac_O(1);
    a$1.b[0] = elem;
    var x$32 = ((1 + this.s) | 0);
    return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.aj, this.am, x$29, x$30, a$1, x$32);
  } else if ((this.am.b.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().L(this.am, $m_sci_VectorStatics$().L(this.al, $m_sci_VectorStatics$().L(this.ak, this.q)));
    var x$44 = $m_sci_VectorStatics$().cV;
    var x$45 = $m_sci_VectorStatics$().bJ;
    var a$2 = new $ac_O(1);
    a$2.b[0] = elem;
    var x$47 = ((1 + this.s) | 0);
    return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.aj, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.aj.b.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().L(this.aj, $m_sci_VectorStatics$().L(this.am, $m_sci_VectorStatics$().L(this.al, $m_sci_VectorStatics$().L(this.ak, this.q))));
    var x$58 = $m_sci_VectorStatics$().fn;
    var x$59 = $m_sci_VectorStatics$().cV;
    var x$60 = $m_sci_VectorStatics$().bJ;
    var a$3 = new $ac_O(1);
    a$3.b[0] = elem;
    var x$62 = ((1 + this.s) | 0);
    return new $c_sci_Vector5(this.l, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.l;
    var $x_13 = this.aB;
    var $x_12 = this.aQ;
    var $x_11 = this.aC;
    var $x_10 = this.aR;
    var $x_9 = this.aD;
    var $x_8 = this.aS;
    var $x_7 = this.aE;
    var $x_6 = this.aj;
    var $x_5 = this.aE;
    var $x_4 = $m_sci_VectorStatics$().od;
    var x = $m_sci_VectorStatics$().L(this.am, $m_sci_VectorStatics$().L(this.al, $m_sci_VectorStatics$().L(this.ak, this.q)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.b[0] = x;
    var $x_3 = $m_sci_VectorStatics$().fn;
    var $x_2 = $m_sci_VectorStatics$().cV;
    var $x_1 = $m_sci_VectorStatics$().bJ;
    var a$5 = new $ac_O(1);
    a$5.b[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.s) | 0));
  }
});
$p.cI = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cx(this.l, f);
  var x$2 = $m_sci_VectorStatics$().ae(2, this.aQ, f);
  var x$3 = $m_sci_VectorStatics$().ae(3, this.aR, f);
  var x$4 = $m_sci_VectorStatics$().ae(4, this.aS, f);
  var x$5 = $m_sci_VectorStatics$().ae(5, this.aj, f);
  var x$6 = $m_sci_VectorStatics$().ae(4, this.am, f);
  var x$7 = $m_sci_VectorStatics$().ae(3, this.al, f);
  var x$8 = $m_sci_VectorStatics$().ae(2, this.ak, f);
  var x$9 = $m_sci_VectorStatics$().cx(this.q, f);
  return new $c_sci_Vector5(x$1, this.aB, x$2, this.aC, x$3, this.aD, x$4, this.aE, x$5, x$6, x$7, x$8, x$9, this.s);
});
$p.d5 = (function() {
  return 9;
});
$p.d4 = (function(idx) {
  switch (idx) {
    case 0: {
      return this.l;
      break;
    }
    case 1: {
      return this.aQ;
      break;
    }
    case 2: {
      return this.aR;
      break;
    }
    case 3: {
      return this.aS;
      break;
    }
    case 4: {
      return this.aj;
      break;
    }
    case 5: {
      return this.am;
      break;
    }
    case 6: {
      return this.al;
      break;
    }
    case 7: {
      return this.ak;
      break;
    }
    case 8: {
      return this.q;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.a2 = (function(f) {
  return this.cI(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.aE) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.aj.b.length) ? this.aj.b[i5].b[i4].b[i3].b[i2].b[i1] : ((i4 < this.am.b.length) ? this.am.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.al.b.length) ? this.al.b[i3].b[i2].b[i1] : ((i2 < this.ak.b.length) ? this.ak.b[i2].b[i1] : this.q.b[i1]))));
    } else if ((index >= this.aD)) {
      var io$2 = ((index - this.aD) | 0);
      return this.aS.b[((io$2 >>> 15) | 0)].b[(31 & ((io$2 >>> 10) | 0))].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.aC)) {
      var io$3 = ((index - this.aC) | 0);
      return this.aR.b[((io$3 >>> 10) | 0)].b[(31 & ((io$3 >>> 5) | 0))].b[(31 & io$3)];
    } else if ((index >= this.aB)) {
      var io$4 = ((index - this.aB) | 0);
      return this.aQ.b[((io$4 >>> 5) | 0)].b[(31 & io$4)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.aX(index);
  }
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  gU: 1,
  ai: 1,
  aj: 1,
  ab: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.l = null;
  this.q = null;
  this.s = 0;
  this.an = 0;
  this.aF = null;
  this.ao = 0;
  this.aG = null;
  this.ap = 0;
  this.aH = null;
  this.aq = 0;
  this.aI = null;
  this.ax = 0;
  this.a8 = null;
  this.ac = null;
  this.ab = null;
  this.aa = null;
  this.a9 = null;
  this.an = len1;
  this.aF = prefix2;
  this.ao = len12;
  this.aG = prefix3;
  this.ap = len123;
  this.aH = prefix4;
  this.aq = len1234;
  this.aI = prefix5;
  this.ax = len12345;
  this.a8 = data6;
  this.ac = suffix5;
  this.ab = suffix4;
  this.aa = suffix3;
  this.a9 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.C = (function(index) {
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.ax) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a8.b.length) ? this.a8.b[i6].b[i5].b[i4].b[i3].b[i2].b[i1] : ((i5 < this.ac.b.length) ? this.ac.b[i5].b[i4].b[i3].b[i2].b[i1] : ((i4 < this.ab.b.length) ? this.ab.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.aa.b.length) ? this.aa.b[i3].b[i2].b[i1] : ((i2 < this.a9.b.length) ? this.a9.b[i2].b[i1] : this.q.b[i1])))));
    } else if ((index >= this.aq)) {
      var io$2 = ((index - this.aq) | 0);
      return this.aI.b[((io$2 >>> 20) | 0)].b[(31 & ((io$2 >>> 15) | 0))].b[(31 & ((io$2 >>> 10) | 0))].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.ap)) {
      var io$3 = ((index - this.ap) | 0);
      return this.aH.b[((io$3 >>> 15) | 0)].b[(31 & ((io$3 >>> 10) | 0))].b[(31 & ((io$3 >>> 5) | 0))].b[(31 & io$3)];
    } else if ((index >= this.ao)) {
      var io$4 = ((index - this.ao) | 0);
      return this.aG.b[((io$4 >>> 10) | 0)].b[(31 & ((io$4 >>> 5) | 0))].b[(31 & io$4)];
    } else if ((index >= this.an)) {
      var io$5 = ((index - this.an) | 0);
      return this.aF.b[((io$5 >>> 5) | 0)].b[(31 & io$5)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.aX(index);
  }
});
$p.eh = (function(index, elem) {
  if (((index >= 0) && (index < this.s))) {
    if ((index >= this.ax)) {
      var io = ((index - this.ax) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.a8.b.length)) {
        var a6 = this.a8;
        var a6c = a6.o();
        var a5 = a6c.b[i6];
        var a5c = a5.o();
        var a4 = a5c.b[i5];
        var a4c = a4.o();
        var a3 = a4c.b[i4];
        var a3c = a3.o();
        var a2 = a3c.b[i3];
        var a2c = a2.o();
        var a1 = a2c.b[i2];
        var a1c = a1.o();
        a1c.b[i1] = elem;
        a2c.b[i2] = a1c;
        a3c.b[i3] = a2c;
        a4c.b[i4] = a3c;
        a5c.b[i5] = a4c;
        a6c.b[i6] = a5c;
        return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, a6c, this.ac, this.ab, this.aa, this.a9, this.q, this.s);
      } else if ((i5 < this.ac.b.length)) {
        var a5$1 = this.ac;
        var a5c$1 = a5$1.o();
        var a4$1 = a5c$1.b[i5];
        var a4c$1 = a4$1.o();
        var a3$1 = a4c$1.b[i4];
        var a3c$1 = a3$1.o();
        var a2$1 = a3c$1.b[i3];
        var a2c$1 = a2$1.o();
        var a1$1 = a2c$1.b[i2];
        var a1c$1 = a1$1.o();
        a1c$1.b[i1] = elem;
        a2c$1.b[i2] = a1c$1;
        a3c$1.b[i3] = a2c$1;
        a4c$1.b[i4] = a3c$1;
        a5c$1.b[i5] = a4c$1;
        return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, a5c$1, this.ab, this.aa, this.a9, this.q, this.s);
      } else if ((i4 < this.ab.b.length)) {
        var a4$2 = this.ab;
        var a4c$2 = a4$2.o();
        var a3$2 = a4c$2.b[i4];
        var a3c$2 = a3$2.o();
        var a2$2 = a3c$2.b[i3];
        var a2c$2 = a2$2.o();
        var a1$2 = a2c$2.b[i2];
        var a1c$2 = a1$2.o();
        a1c$2.b[i1] = elem;
        a2c$2.b[i2] = a1c$2;
        a3c$2.b[i3] = a2c$2;
        a4c$2.b[i4] = a3c$2;
        return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, a4c$2, this.aa, this.a9, this.q, this.s);
      } else if ((i3 < this.aa.b.length)) {
        var a3$3 = this.aa;
        var a3c$3 = a3$3.o();
        var a2$3 = a3c$3.b[i3];
        var a2c$3 = a2$3.o();
        var a1$3 = a2c$3.b[i2];
        var a1c$3 = a1$3.o();
        a1c$3.b[i1] = elem;
        a2c$3.b[i2] = a1c$3;
        a3c$3.b[i3] = a2c$3;
        return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, this.ab, a3c$3, this.a9, this.q, this.s);
      } else if ((i2 < this.a9.b.length)) {
        var a2$4 = this.a9;
        var a2c$4 = a2$4.o();
        var a1$4 = a2c$4.b[i2];
        var a1c$4 = a1$4.o();
        a1c$4.b[i1] = elem;
        a2c$4.b[i2] = a1c$4;
        return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, this.ab, this.aa, a2c$4, this.q, this.s);
      } else {
        var a1$5 = this.q;
        var a1c$5 = a1$5.o();
        a1c$5.b[i1] = elem;
        return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, this.ab, this.aa, this.a9, a1c$5, this.s);
      }
    } else if ((index >= this.aq)) {
      var io$2 = ((index - this.aq) | 0);
      var a5$2 = this.aI;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.o();
      var a4$3 = a5c$2.b[idx5];
      var a4c$3 = a4$3.o();
      var a3$4 = a4c$3.b[idx4];
      var a3c$4 = a3$4.o();
      var a2$5 = a3c$4.b[idx3];
      var a2c$5 = a2$5.o();
      var a1$6 = a2c$5.b[idx2];
      var a1c$6 = a1$6.o();
      a1c$6.b[idx1] = elem;
      a2c$5.b[idx2] = a1c$6;
      a3c$4.b[idx3] = a2c$5;
      a4c$3.b[idx4] = a3c$4;
      a5c$2.b[idx5] = a4c$3;
      return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, a5c$2, this.ax, this.a8, this.ac, this.ab, this.aa, this.a9, this.q, this.s);
    } else if ((index >= this.ap)) {
      var io$3 = ((index - this.ap) | 0);
      var a4$4 = this.aH;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.o();
      var a3$5 = a4c$4.b[idx4$1];
      var a3c$5 = a3$5.o();
      var a2$6 = a3c$5.b[idx3$1];
      var a2c$6 = a2$6.o();
      var a1$7 = a2c$6.b[idx2$1];
      var a1c$7 = a1$7.o();
      a1c$7.b[idx1$1] = elem;
      a2c$6.b[idx2$1] = a1c$7;
      a3c$5.b[idx3$1] = a2c$6;
      a4c$4.b[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, a4c$4, this.aq, this.aI, this.ax, this.a8, this.ac, this.ab, this.aa, this.a9, this.q, this.s);
    } else if ((index >= this.ao)) {
      var io$4 = ((index - this.ao) | 0);
      var a3$6 = this.aG;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.o();
      var a2$7 = a3c$6.b[idx3$2];
      var a2c$7 = a2$7.o();
      var a1$8 = a2c$7.b[idx2$2];
      var a1c$8 = a1$8.o();
      a1c$8.b[idx1$2] = elem;
      a2c$7.b[idx2$2] = a1c$8;
      a3c$6.b[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, a3c$6, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, this.ab, this.aa, this.a9, this.q, this.s);
    } else if ((index >= this.an)) {
      var io$5 = ((index - this.an) | 0);
      var a2$8 = this.aF;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.o();
      var a1$9 = a2c$8.b[idx2$3];
      var a1c$9 = a1$9.o();
      a1c$9.b[idx1$3] = elem;
      a2c$8.b[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.l, this.an, a2c$8, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, this.ab, this.aa, this.a9, this.q, this.s);
    } else {
      var a1$10 = this.l;
      var a1c$10 = a1$10.o();
      a1c$10.b[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, this.ab, this.aa, this.a9, this.q, this.s);
    }
  } else {
    throw this.aX(index);
  }
});
$p.e5 = (function(elem) {
  if ((this.q.b.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().ft(this.q, elem);
    var x$2 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, this.ab, this.aa, this.a9, x$1, x$2);
  } else if ((this.a9.b.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().L(this.a9, this.q);
    var a = new $ac_O(1);
    a.b[0] = elem;
    var x$20 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, this.ab, this.aa, x$18, a, x$20);
  } else if ((this.aa.b.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().L(this.aa, $m_sci_VectorStatics$().L(this.a9, this.q));
    var x$36 = $m_sci_VectorStatics$().bJ;
    var a$1 = new $ac_O(1);
    a$1.b[0] = elem;
    var x$38 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, this.ab, x$35, x$36, a$1, x$38);
  } else if ((this.ab.b.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().L(this.ab, $m_sci_VectorStatics$().L(this.aa, $m_sci_VectorStatics$().L(this.a9, this.q)));
    var x$53 = $m_sci_VectorStatics$().cV;
    var x$54 = $m_sci_VectorStatics$().bJ;
    var a$2 = new $ac_O(1);
    a$2.b[0] = elem;
    var x$56 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, this.ac, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.ac.b.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().L(this.ac, $m_sci_VectorStatics$().L(this.ab, $m_sci_VectorStatics$().L(this.aa, $m_sci_VectorStatics$().L(this.a9, this.q))));
    var x$70 = $m_sci_VectorStatics$().fn;
    var x$71 = $m_sci_VectorStatics$().cV;
    var x$72 = $m_sci_VectorStatics$().bJ;
    var a$3 = new $ac_O(1);
    a$3.b[0] = elem;
    var x$74 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, this.a8, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.a8.b.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().L(this.a8, $m_sci_VectorStatics$().L(this.ac, $m_sci_VectorStatics$().L(this.ab, $m_sci_VectorStatics$().L(this.aa, $m_sci_VectorStatics$().L(this.a9, this.q)))));
    var x$87 = $m_sci_VectorStatics$().j7;
    var x$88 = $m_sci_VectorStatics$().fn;
    var x$89 = $m_sci_VectorStatics$().cV;
    var x$90 = $m_sci_VectorStatics$().bJ;
    var a$4 = new $ac_O(1);
    a$4.b[0] = elem;
    var x$92 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.an, this.aF, this.ao, this.aG, this.ap, this.aH, this.aq, this.aI, this.ax, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cI = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cx(this.l, f);
  var x$2 = $m_sci_VectorStatics$().ae(2, this.aF, f);
  var x$3 = $m_sci_VectorStatics$().ae(3, this.aG, f);
  var x$4 = $m_sci_VectorStatics$().ae(4, this.aH, f);
  var x$5 = $m_sci_VectorStatics$().ae(5, this.aI, f);
  var x$6 = $m_sci_VectorStatics$().ae(6, this.a8, f);
  var x$7 = $m_sci_VectorStatics$().ae(5, this.ac, f);
  var x$8 = $m_sci_VectorStatics$().ae(4, this.ab, f);
  var x$9 = $m_sci_VectorStatics$().ae(3, this.aa, f);
  var x$10 = $m_sci_VectorStatics$().ae(2, this.a9, f);
  var x$11 = $m_sci_VectorStatics$().cx(this.q, f);
  return new $c_sci_Vector6(x$1, this.an, x$2, this.ao, x$3, this.ap, x$4, this.aq, x$5, this.ax, x$6, x$7, x$8, x$9, x$10, x$11, this.s);
});
$p.d5 = (function() {
  return 11;
});
$p.d4 = (function(idx) {
  switch (idx) {
    case 0: {
      return this.l;
      break;
    }
    case 1: {
      return this.aF;
      break;
    }
    case 2: {
      return this.aG;
      break;
    }
    case 3: {
      return this.aH;
      break;
    }
    case 4: {
      return this.aI;
      break;
    }
    case 5: {
      return this.a8;
      break;
    }
    case 6: {
      return this.ac;
      break;
    }
    case 7: {
      return this.ab;
      break;
    }
    case 8: {
      return this.aa;
      break;
    }
    case 9: {
      return this.a9;
      break;
    }
    case 10: {
      return this.q;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.a2 = (function(f) {
  return this.cI(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.ax) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a8.b.length) ? this.a8.b[i6].b[i5].b[i4].b[i3].b[i2].b[i1] : ((i5 < this.ac.b.length) ? this.ac.b[i5].b[i4].b[i3].b[i2].b[i1] : ((i4 < this.ab.b.length) ? this.ab.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.aa.b.length) ? this.aa.b[i3].b[i2].b[i1] : ((i2 < this.a9.b.length) ? this.a9.b[i2].b[i1] : this.q.b[i1])))));
    } else if ((index >= this.aq)) {
      var io$2 = ((index - this.aq) | 0);
      return this.aI.b[((io$2 >>> 20) | 0)].b[(31 & ((io$2 >>> 15) | 0))].b[(31 & ((io$2 >>> 10) | 0))].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.ap)) {
      var io$3 = ((index - this.ap) | 0);
      return this.aH.b[((io$3 >>> 15) | 0)].b[(31 & ((io$3 >>> 10) | 0))].b[(31 & ((io$3 >>> 5) | 0))].b[(31 & io$3)];
    } else if ((index >= this.ao)) {
      var io$4 = ((index - this.ao) | 0);
      return this.aG.b[((io$4 >>> 10) | 0)].b[(31 & ((io$4 >>> 5) | 0))].b[(31 & io$4)];
    } else if ((index >= this.an)) {
      var io$5 = ((index - this.an) | 0);
      return this.aF.b[((io$5 >>> 5) | 0)].b[(31 & io$5)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.aX(index);
  }
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  gV: 1,
  ai: 1,
  aj: 1,
  ab: 1,
  y: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  w: 1,
  t: 1,
  x: 1,
  z: 1,
  q: 1,
  n: 1,
  C: 1,
  A: 1,
  s: 1,
  l: 1,
  V: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.aW = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aW = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.bw = (function() {
  return "IndexedSeq";
});
$p.r = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.a2 = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bT = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bs = (function(len) {
  var x = this.aW.A();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bk = (function(size) {
});
$p.bh = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.A = (function() {
  return this.aW.A();
});
$p.G = (function() {
  return this.aW.A();
});
$p.qv = (function(x) {
  var this$1 = this.aW;
  var str = ("" + $cToS(x));
  this$1.z = (this$1.z + str);
  return this;
});
$p.B = (function() {
  return this.aW.z;
});
$p.bi = (function(s) {
  var this$1 = this.aW;
  this$1.z = (("" + this$1.z) + s);
  return this;
});
$p.oJ = (function(xs) {
  if (false) {
    var this$3 = this.aW;
    var str = xs.tw;
    this$3.z = (("" + this$3.z) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.aW.oI(xs.c5);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.aW;
    var s = xs.aW;
    this$4.z = (("" + this$4.z) + s);
  } else {
    var ks = xs.G();
    if ((ks !== 0)) {
      var b = this.aW;
      if ((ks > 0)) {
        b.A();
      }
      var it = xs.r();
      while (it.u()) {
        var c = $uC(it.n());
        var str$1 = ("" + $cToS(c));
        b.z = (b.z + str$1);
      }
    }
  }
  return this;
});
$p.j = (function() {
  return (this.aW.A() === 0);
});
$p.br = (function() {
  return $m_scm_IndexedSeq$();
});
$p.b6 = (function() {
  return this.aW.z;
});
$p.b4 = (function(elem) {
  return this.qv($uC(elem));
});
$p.gC = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oJ(coll);
});
$p.gD = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oJ(coll);
});
$p.i = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aW.oZ(i));
});
$p.C = (function(i) {
  return $bC(this.aW.oZ(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cl: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  ac: 1,
  M: 1,
  I: 1,
  G: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  aP: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hl)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().gP($thiz);
  $thiz.cr = buf.cr;
  $thiz.dk = buf.dk;
  $thiz.hk = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.hl = ((1 + $thiz.hl) | 0);
  if ($thiz.hk) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.hl = 0;
  this.cr = null;
  this.dk = null;
  this.hk = false;
  this.cs = 0;
  this.hl = 0;
  this.cr = $m_sci_Nil$();
  this.dk = null;
  this.hk = false;
  this.cs = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.bk = (function(size) {
});
$p.cE = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a2 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.r = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cr.r(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.hl)));
});
$p.ea = (function() {
  return $m_scm_ListBuffer$();
});
$p.C = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cr, i);
});
$p.A = (function() {
  return this.cs;
});
$p.G = (function() {
  return this.cs;
});
$p.j = (function() {
  return (this.cs === 0);
});
$p.eV = (function() {
  this.hk = (!this.j());
  return this.cr;
});
$p.hx = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.cs === 0)) {
    this.cr = last1;
  } else {
    this.dk.a0 = last1;
  }
  this.dk = last1;
  this.cs = ((1 + this.cs) | 0);
  return this;
});
$p.gP = (function(xs) {
  var it = xs.r();
  if (it.u()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.n(), $m_sci_Nil$());
    this.cr = last0;
    while (it.u()) {
      var last1 = new $c_sci_$colon$colon(it.n(), $m_sci_Nil$());
      last0.a0 = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.cs = len;
    this.dk = last0;
  }
  return this;
});
$p.qt = (function(xs) {
  var it = xs.r();
  if (it.u()) {
    var fresh = new $c_scm_ListBuffer().gP(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.cs === 0)) {
      this.cr = fresh.cr;
    } else {
      this.dk.a0 = fresh.cr;
    }
    this.dk = fresh.dk;
    this.cs = ((this.cs + fresh.cs) | 0);
  }
  return this;
});
$p.bw = (function() {
  return "ListBuffer";
});
$p.bh = (function(elems) {
  return this.qt(elems);
});
$p.b4 = (function(elem) {
  return this.hx(elem);
});
$p.b6 = (function() {
  return this.eV();
});
$p.i = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.cr, i);
});
$p.br = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  ck: 1,
  b2: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  b3: 1,
  I: 1,
  G: 1,
  aI: 1,
  s: 1,
  l: 1,
  ac: 1,
  M: 1,
  V: 1,
  a: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.fo = 0;
  $thiz.dg = initialElements;
  $thiz.bo = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.fo = 0;
  this.dg = null;
  this.bo = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.cE = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a2 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.r = (function() {
  return this.tt().r();
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bT = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bs = (function(len) {
  var x = this.bo;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.bo;
});
$p.jz = (function(n) {
  this.dg = $m_scm_ArrayBuffer$().pN(this.dg, this.bo, n);
});
$p.bk = (function(size) {
  if (((size > this.bo) && (size >= 1))) {
    this.jz(size);
  }
});
$p.C = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().jQ(n, ((this.bo - 1) | 0));
  }
  if ((hi > this.bo)) {
    throw $m_scg_CommonErrors$().jQ(((hi - 1) | 0), ((this.bo - 1) | 0));
  }
  return this.dg.b[n];
});
$p.A = (function() {
  return this.bo;
});
$p.tt = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.fo)));
});
$p.ea = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.qA = (function(elem) {
  this.fo = ((1 + this.fo) | 0);
  var newSize = ((1 + this.bo) | 0);
  if ((this.dg.b.length <= ((newSize - 1) | 0))) {
    this.jz(newSize);
  }
  this.bo = newSize;
  this.dg.b[((newSize - 1) | 0)] = elem;
  return this;
});
$p.oE = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.bo;
    if ((elemsLength > 0)) {
      this.fo = ((1 + this.fo) | 0);
      this.jz(((this.bo + elemsLength) | 0));
      $m_s_Array$().gy(elems.dg, 0, this.dg, this.bo, elemsLength);
      this.bo = ((this.bo + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bw = (function() {
  return "ArrayBuffer";
});
$p.c8 = (function(xs, start, len) {
  var srcLen = this.bo;
  var destLen = $m_jl_reflect_Array$().cb(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gy(this.dg, 0, xs, start, copied);
  }
  return copied;
});
$p.bh = (function(elems) {
  return this.oE(elems);
});
$p.b4 = (function(elem) {
  return this.qA(elem);
});
$p.br = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.i = (function(v1) {
  return this.C((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c7)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  c7: 1,
  b2: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  b3: 1,
  I: 1,
  G: 1,
  aI: 1,
  cj: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  V: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.e1 = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.e1 = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bk = (function(size) {
});
$p.bw = (function() {
  return "IndexedSeq";
});
$p.r = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.a2 = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bT = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bs = (function(len) {
  var x = (this.e1.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cE = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.ea = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.C = (function(index) {
  return this.e1[index];
});
$p.A = (function() {
  return (this.e1.length | 0);
});
$p.G = (function() {
  return (this.e1.length | 0);
});
$p.c7 = (function() {
  return "WrappedArray";
});
$p.b6 = (function() {
  return this;
});
$p.b4 = (function(elem) {
  this.e1.push(elem);
  return this;
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  return this.e1[index];
});
$p.br = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  ia: 1,
  b2: 1,
  L: 1,
  o: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  f: 1,
  k: 1,
  d: 1,
  N: 1,
  J: 1,
  O: 1,
  H: 1,
  B: 1,
  b3: 1,
  I: 1,
  G: 1,
  aI: 1,
  s: 1,
  l: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  cj: 1,
  M: 1,
  a: 1
}));
var $t_Lccrystal_site_Tab$__Manifesto = null;
var $t_Lccrystal_site_Tab$__Explorer = null;
var $t_Lccrystal_site_Tab$__Quickstart = null;
var $t_Lccrystal_site_Tab$__Mcp = null;
var $t_Lccrystal_site_Tab$__AgentIngestion = null;
var $t_Lccrystal_site_TabExplorer$Scenario$__Inception = null;
var $t_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike = null;
var $t_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact = null;
$s_Lccrystal_site_Main__main__AT__V(new ($d_T.r().C)([]));
