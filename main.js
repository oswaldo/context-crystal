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
var $L0;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
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
      if ((arg0 instanceof $c_RTLong)) {
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
      if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.tQ();
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
        return instance.z(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.z.call(instance, x0);
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
        return instance.E();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.E.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.tR(x0);
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
  return $s_RTLong__fromDoubleBits__D__O__RTLong(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__RTLong__O__D(arg0, dataView);
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
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
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
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $L0 : arg0);
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
$p.E = (function() {
  return $systemIdentityHashCode(this);
});
$p.z = (function(that) {
  return (this === that);
});
$p.D = (function() {
  var i = this.E();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.D();
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
$p.H = (function(srcPos, dest, destPos, length) {
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
$p.H = (function(srcPos, dest, destPos, length) {
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
$p.H = (function(srcPos, dest, destPos, length) {
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
$p.H = (function(srcPos, dest, destPos, length) {
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
$p.H = (function(srcPos, dest, destPos, length) {
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
$p.H = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.o = (function() {
  return new $ac_I(this.b.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = $L0;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.H = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
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
$p.H = (function(srcPos, dest, destPos, length) {
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
$p.H = (function(srcPos, dest, destPos, length) {
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
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass);
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
$p.y = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
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
  this.w = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
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
  $p.H = (function(srcPos, dest, destPos, length) {
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
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), ((that) => {
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
var $d_J = new $TypeData().p(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
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
$p.cj = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.rN().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("portal-footer"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("container footer-inner"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-brand-block"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-logo"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("crystal-glyph"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25c8", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-manifesto-quote"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\"Context is not a vector database. It is a sovereign, deterministic DAG.\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-subquote"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Engineered for biological software architects and computational AI entities pair-programming in high-stakes codebases.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-links-grid"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-col"), $m_Lcom_raquo_laminar_api_package$().a.eU().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Specifications & Standards", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.hR().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/blob/main/spec/v1/context-crystal.json"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "JSON Schema v1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/blob/main/spec/v1/context-crystal.json"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "JSON-LD Context", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/blob/main/skills/context-crystal/SKILL.md"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Universal Agent Skill", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-col"), $m_Lcom_raquo_laminar_api_package$().a.eU().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Engine & Protocols", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.hR().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/blob/main/cli/shared/src/main/scala/ccrystal/cli/mcp/DefaultMcpHandler.scala"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Native MCP Server Engine", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/blob/main/install.sh"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Single-Line Installer", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("llms.txt"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "llms.txt (Machine Ingestion)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("llms-full.txt"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "llms-full.txt (Full Corpus)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("footer-col"), $m_Lcom_raquo_laminar_api_package$().a.eU().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Open Source", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.hR().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "GitHub Repository", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/releases"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Release Binaries", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/blob/main/LICENSE"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "MIT License", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("container footer-bottom"), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Copyright \u00a9 2026 Oswaldo C. Dantas J\u00fanior & Context Crystal Contributors. Pure functional Scala 3 Native & Scala.js.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
});
var $d_Lccrystal_site_Footer$ = new $TypeData().i($c_Lccrystal_site_Footer$, "ccrystal.site.Footer$", ({
  cy: 1
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
$p.cj = (function() {
  var $x_22 = $m_Lcom_raquo_laminar_api_package$().a.sb();
  var $x_21 = $m_sr_ScalaRunTime$();
  var $x_20 = $m_Lcom_raquo_laminar_api_package$().a.g.f("portal-header");
  var $x_19 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_18 = $m_sr_ScalaRunTime$();
  var $x_17 = $m_Lcom_raquo_laminar_api_package$().a.g.f("container header-inner");
  var $x_16 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("brand-cluster"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("brand-logo"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("crystal-glyph"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25c8", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("brand-text-col"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("brand-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("brand-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "v1.0.0 \u2022 Zero-Token Context DAG", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])));
  var $x_15 = $m_Lcom_raquo_laminar_api_package$().a.sH();
  var $x_14 = $m_sr_ScalaRunTime$();
  var $x_13 = $m_Lcom_raquo_laminar_api_package$().a.g.f("header-nav");
  var $x_12 = $m_Lcom_raquo_laminar_api_package$().a;
  var $x_11 = $m_sci_Nil$();
  var $x_10 = $m_s_Predef$();
  var xs = $m_Lccrystal_site_Tab$().tD();
  var f = ((tab) => $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.jp(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().f7.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((tab$2) => ((active) => (((active === null) ? (tab$2 === null) : (active === tab$2)) ? "nav-pill active" : "nav-pill")))(tab)), $m_s_None$()), $m_Lcom_raquo_laminar_api_package$().a.hz()), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("nav-pill-icon"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, tab.ep, $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("nav-pill-text"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, tab.eq, $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)).gK(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((tab$3) => (() => tab$3))(tab))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.dr(_$1);
  }))($m_Lccrystal_site_State$().f7.dv)))]))));
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
        var $x_4 = i;
        var t = xs.b[i];
        var lo = t.u;
        var hi = t.v;
        ys.b[$x_4] = f(new $c_RTLong(lo, hi));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_F)) {
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = xs.b[i];
        ys.b[$x_5] = f(x0$3);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_C)) {
      while ((i < len)) {
        var $x_6 = i;
        var x0$4 = xs.b[i];
        ys.b[$x_6] = f($bC(x0$4));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_B)) {
      while ((i < len)) {
        var $x_7 = i;
        var x0$5 = xs.b[i];
        ys.b[$x_7] = f(x0$5);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_S)) {
      while ((i < len)) {
        var $x_8 = i;
        var x0$6 = xs.b[i];
        ys.b[$x_8] = f(x0$6);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_Z)) {
      while ((i < len)) {
        var $x_9 = i;
        var x0$7 = xs.b[i];
        ys.b[$x_9] = f(x0$7);
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs);
    }
  }
  return $x_22.d($x_21.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_20, $x_19.d($x_18.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_17, $x_16, $x_15.d($x_14.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_13, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_12, $x_11.ej($x_10.km(ys)), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("header-actions"), $m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("btn-github"), $m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.t2().f("noopener noreferrer"), $m_Lccrystal_site_Icons$().s8(16), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "GitHub", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])));
});
var $d_Lccrystal_site_Header$ = new $TypeData().i($c_Lccrystal_site_Header$, "ccrystal.site.Header$", ({
  cz: 1
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
$p.r9 = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().el().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().f4().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f5().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eV().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eP().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("client-brand-svg claude-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M13.5 2.5c-.3-.6-1.1-.8-1.7-.5l-1.3.8-1.3-.8c-.6-.3-1.4-.1-1.7.5l-1 1.7-1.8.4c-.7.1-1.2.7-1.1 1.4l.2 1.9-1.4 1.3c-.5.5-.6 1.3-.2 1.9l1 1.6-.6 1.8c-.2.7.1 1.4.7 1.7l1.7.8.4 1.8c.2.7.8 1.1 1.5 1l1.9-.3 1.3 1.4c.5.5 1.3.6 1.9.2l1.6-1 1.8.6c.7.2 1.4-.1 1.7-.7l.8-1.7 1.8-.4c.7-.2 1.1-.8 1-1.5l-.3-1.9 1.4-1.3c.5-.5.6-1.3.2-1.9l-1-1.6.6-1.8c.2-.7-.1-1.4-.7-1.7l-1.7-.8-.4-1.8c-.2-.7-.8-1.1-1.5-1l-1.9.3-1.3-1.4z M12 6.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11z")])))])));
});
$p.rr = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().el().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().f4().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f5().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eV().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eP().k("none"), $m_Lcom_raquo_laminar_api_package$().a.t().hO().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().hQ().k("1.8"), $m_Lcom_raquo_laminar_api_package$().a.t().hP().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("client-brand-svg cursor-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M12 2.5 L20.5 7.4 L12 12.3 L3.5 7.4 Z")]))), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M3.5 7.4 L3.5 16.6 L12 21.5 L12 12.3 Z")]))), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M20.5 7.4 L20.5 16.6 L12 21.5 L12 12.3 Z")])))])));
});
$p.tG = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().el().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().f4().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f5().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eV().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eP().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("client-brand-svg zed-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M3.5 5.5h17v3.2L10.2 15.3H20.5v3.2H3.5v-3.2L13.8 8.7H3.5V5.5z")])))])));
});
$p.s8 = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().el().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().f4().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f5().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eV().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eP().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("github-svg-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z")])))])));
});
$p.rc = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().el().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().f4().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f5().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eV().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eP().k("none"), $m_Lcom_raquo_laminar_api_package$().a.t().hO().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().hQ().k("2"), $m_Lcom_raquo_laminar_api_package$().a.t().kh().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().hP().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("card-svg-icon amnesia-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().r8().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().rs().k("12"), $m_Lcom_raquo_laminar_api_package$().a.t().rt().k("12"), $m_Lcom_raquo_laminar_api_package$().a.t().sZ().k("9")]))), $m_Lcom_raquo_laminar_api_package$().a.t().sX().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().sW().k("12,7 12,12 15,14")])))])));
});
$p.rv = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().el().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().f4().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f5().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eV().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eP().k("none"), $m_Lcom_raquo_laminar_api_package$().a.t().hO().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().hQ().k("2"), $m_Lcom_raquo_laminar_api_package$().a.t().kh().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().hP().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("card-svg-icon debris-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M3 6h18")]))), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2")]))), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6")]))), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M10 11v6")]))), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M14 11v6")])))])));
});
$p.tv = (function(size) {
  return $m_Lcom_raquo_laminar_api_package$().a.t().el().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().f4().k("0 0 24 24"), $m_Lcom_raquo_laminar_api_package$().a.t().f5().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eV().k((size + "px")), $m_Lcom_raquo_laminar_api_package$().a.t().eP().k("none"), $m_Lcom_raquo_laminar_api_package$().a.t().hO().k("currentColor"), $m_Lcom_raquo_laminar_api_package$().a.t().hQ().k("2"), $m_Lcom_raquo_laminar_api_package$().a.t().kh().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().hP().k("round"), $m_Lcom_raquo_laminar_api_package$().a.t().dx.f("card-svg-icon burn-icon"), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10z")]))), $m_Lcom_raquo_laminar_api_package$().a.t().ci().aT($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.t().cg().k("M12 14a2 2 0 00-2 2c0 1.1.9 2 2 2s2-.9 2-2a2 2 0 00-2-2z")])))])));
});
var $d_Lccrystal_site_Icons$ = new $TypeData().i($c_Lccrystal_site_Icons$, "ccrystal.site.Icons$", ({
  cA: 1
}));
var $n_Lccrystal_site_Icons$;
function $m_Lccrystal_site_Icons$() {
  if ((!$n_Lccrystal_site_Icons$)) {
    $n_Lccrystal_site_Icons$ = new $c_Lccrystal_site_Icons$();
  }
  return $n_Lccrystal_site_Icons$;
}
function $s_Lccrystal_site_Main__main__AT__V(args) {
  $m_Lccrystal_site_Main$().su(args);
}
function $p_Lccrystal_site_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$1) {
  if ((appContainer$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  return (appContainer$lzy1$1.hs ? appContainer$lzy1$1.ht : appContainer$lzy1$1.sg(document.querySelector("#app")));
}
function $p_Lccrystal_site_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2) {
  return (appContainer$lzy1$2.hs ? appContainer$lzy1$2.ht : $p_Lccrystal_site_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2));
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
$p.su = (function(args) {
  var appContainer$lzy1 = new $c_sr_LazyRef();
  var this$2 = $m_Lcom_raquo_laminar_api_package$().a;
  var container = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((appContainer$lzy1$2) => (() => $p_Lccrystal_site_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element(this, appContainer$lzy1$2)))(appContainer$lzy1));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lccrystal_site_Main$().qR()));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().bL(this$2.mg.sU(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().qW(document, p.ex.fW, p.fV), p.fU), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container.Y(), rootNode.Y());
  })), this$2.tA());
});
$p.qR = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("portal-root"), $m_Lccrystal_site_Header$().cj(), $m_Lcom_raquo_laminar_api_package$().a.sv().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("portal-main container"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().oV(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().f7.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x = $s_Lccrystal_site_Tab$__Manifesto__Lccrystal_site_Tab();
    if (((x === null) ? (x$1 === null) : (x === x$1))) {
      return $m_Lccrystal_site_TabManifesto$().cj();
    }
    var x$3 = $s_Lccrystal_site_Tab$__Explorer__Lccrystal_site_Tab();
    if (((x$3 === null) ? (x$1 === null) : (x$3 === x$1))) {
      return $m_Lccrystal_site_TabExplorer$().cj();
    }
    var x$5 = $s_Lccrystal_site_Tab$__Quickstart__Lccrystal_site_Tab();
    if (((x$5 === null) ? (x$1 === null) : (x$5 === x$1))) {
      return $m_Lccrystal_site_TabQuickstart$().cj();
    }
    var x$7 = $s_Lccrystal_site_Tab$__Mcp__Lccrystal_site_Tab();
    if (((x$7 === null) ? (x$1 === null) : (x$7 === x$1))) {
      return $m_Lccrystal_site_TabMcp$().cj();
    }
    var x$9 = $s_Lccrystal_site_Tab$__AgentIngestion__Lccrystal_site_Tab();
    if (((x$9 === null) ? (x$1 === null) : (x$9 === x$1))) {
      return $m_Lccrystal_site_TabAgentIngestion$().cj();
    }
    throw new $c_s_MatchError(x$1);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().iv, (void 0)))]))), $m_Lccrystal_site_Footer$().cj()])));
});
var $d_Lccrystal_site_Main$ = new $TypeData().i($c_Lccrystal_site_Main$, "ccrystal.site.Main$", ({
  cB: 1
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
  this.f7 = null;
  this.ck = null;
  $n_Lccrystal_site_State$ = this;
  this.f7 = $m_Lcom_raquo_laminar_api_package$().a.fe.gq($s_Lccrystal_site_Tab$__Manifesto__Lccrystal_site_Tab());
  this.ck = $m_Lcom_raquo_laminar_api_package$().a.fe.gq($m_s_None$());
}
$p = $c_Lccrystal_site_State$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_State$;
/** @constructor */
function $h_Lccrystal_site_State$() {
}
$h_Lccrystal_site_State$.prototype = $p;
$p.ec = (function(id, text) {
  var \u03b41$ = window.navigator.clipboard.writeText(text);
  \u03b41$.then(((_$1) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lccrystal_site_State$().ck, new $c_s_Some(id));
    return (window.setTimeout((() => ($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_State$().ck.ax).Q().bm(id) ? ($f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lccrystal_site_State$().ck, $m_s_None$()), (void 0)) : (void 0))), 2000.0) | 0);
  }));
});
var $d_Lccrystal_site_State$ = new $TypeData().i($c_Lccrystal_site_State$, "ccrystal.site.State$", ({
  cC: 1
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
$p.cj = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tab-content tab-agent-ingestion"), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("agent-intro"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("mcp-badge"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Machine-Readable Standard \u2022 Autonomous Ingestion \u2022 Zero Human Learning Curve", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.eT().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Autonomous AI Agent Ingestion (`llms.txt`)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal adheres to the emergent `/llms.txt` standard. Autonomous coding agents (Claude, ChatGPT, Perplexity, Devin, Cursor, Windsurf) can ingest our canonical operational rules, CLI flags, and MCP schemas directly.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Machine-Readable Endpoints", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Standardized plain-text documentation endpoints hosted at the root of this portal:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("cards-grid two-col"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card endpoint-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("endpoint-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("file-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "CONCISE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "/llms.txt", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Optimized for LLM context limits. Contains the core operational philosophy, essential CLI commands, MCP tool mappings, and behavioral invariants.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("endpoint-actions"), $m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("llms.txt"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-mini active"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "View llms.txt \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card endpoint-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("endpoint-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("file-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "FULL CORPUS", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "/llms-full.txt", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Complete reference corpus. Includes the full JSON Schema v1 specification, comprehensive CLI subcommands, and multi-entity authorship protocol rules.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("endpoint-actions"), $m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("llms-full.txt"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-mini active"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "View llms-full.txt \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "2", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Direct Agent System Prompt / Custom Instructions", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Paste this directive into your agent harness, Cursor Rules, or custom instructions to instantly activate Context Crystal:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "# Context Crystal Operational Directive for AI Entities\nYou have access to Context Crystal (`ccrystal` CLI and native MCP server).\n- State Persistence: Never rely on chat window history. Inspect crystals at turn inception (`ccrystal list` or `crystal_list`).\n- Context Beam Hydration: Hydrate living context before major edits (`ccrystal hydrate <id> --tail 5`).\n- Zero Agent Debris: Always register transient leases for temporary worktrees (`ccrystal transient lease`) and ensure they are cleaned or promoted before goal conclusion.\n- Atomic Transitions: Batch context updates atomically using `ccrystal batch` or `crystal_batch`.\n- Cold Storage Over Deletion: Conclude goals when done (`ccrystal conclude`), squash intermediate nodes (`ccrystal melt`), and archive solid crystals (`ccrystal archive`) rather than destructive deletion.\n- Authoritative Discovery: Use `ccrystal --help` or `ccrystal <subcommand> --help` as guaranteed ground truth for CLI flags, and `ccrystal --for-ai` for protocol rules.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().dl(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().ck.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.c2 === "agent-directive")) ? "\u2713 Copied" : "Copy Directive"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $m_Lccrystal_site_State$().ec("agent-directive", "# Context Crystal Operational Directive for AI Entities\nYou have access to Context Crystal (`ccrystal` CLI and native MCP server).\n- State Persistence: Never rely on chat window history. Inspect crystals at turn inception (`ccrystal list` or `crystal_list`).\n- Context Beam Hydration: Hydrate living context before major edits (`ccrystal hydrate <id> --tail 5`).\n- Zero Agent Debris: Always register transient leases for temporary worktrees (`ccrystal transient lease`) and ensure they are cleaned or promoted before goal conclusion.\n- Atomic Transitions: Batch context updates atomically using `ccrystal batch` or `crystal_batch`.\n- Cold Storage Over Deletion: Conclude goals when done (`ccrystal conclude`), squash intermediate nodes (`ccrystal melt`), and archive solid crystals (`ccrystal archive`) rather than destructive deletion.\n- Authoritative Discovery: Use `ccrystal --help` or `ccrystal <subcommand> --help` as guaranteed ground truth for CLI flags, and `ccrystal --for-ai` for protocol rules.");
  })))])))])))])))])));
});
var $d_Lccrystal_site_TabAgentIngestion$ = new $TypeData().i($c_Lccrystal_site_TabAgentIngestion$, "ccrystal.site.TabAgentIngestion$", ({
  cJ: 1
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
  var $x_33 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card goal-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tag-goal"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "GOAL", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("status-tag in-progress"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "InProgress", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.eU().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Build Resilient OAuth2 Service", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("intent-text"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Implement stateless JWT authentication with token revocation list and hardware test fixture.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_32 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_31 = $m_sr_ScalaRunTime$();
  var $x_30 = $m_Lcom_raquo_laminar_api_package$().a.g.f("state-card tasks-card");
  var $x_29 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_28 = $m_sr_ScalaRunTime$();
  var $x_27 = $m_Lcom_raquo_laminar_api_package$().a.g.f("state-card-header");
  var $x_26 = $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ACCEPTANCE CRITERIA", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_25 = $m_Lcom_raquo_laminar_api_package$().a.G();
  var $x_24 = $m_sr_ScalaRunTime$();
  var $x_23 = $m_Lcom_raquo_laminar_api_package$().a;
  var x$2 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  var $x_22 = $x_29.d($x_28.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_27, $x_26, $x_25.d($x_24.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($x_23, ("Completion: " + ((sc === x$2) ? "0/3" : "1/3")), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_21 = $m_Lcom_raquo_laminar_api_package$().a.hR();
  var $x_20 = $m_sr_ScalaRunTime$();
  var $x_19 = $m_Lcom_raquo_laminar_api_package$().a.g.f("task-list");
  var $x_18 = $m_Lcom_raquo_laminar_api_package$().a.ch();
  var $x_17 = $m_sr_ScalaRunTime$();
  var $x_16 = $m_Lcom_raquo_laminar_api_package$().a.g;
  var x$4 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  var $x_15 = $x_16.f(((!(sc === x$4)) ? "done" : "pending"));
  var $x_14 = $m_Lcom_raquo_laminar_api_package$().a.G();
  var $x_13 = $m_sr_ScalaRunTime$();
  var x$6 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  var $x_12 = $x_32.d($x_31.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_30, $x_22, $x_21.d($x_20.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_19, $x_18.d($x_17.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_15, $x_14.d($x_13.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([((!(sc === x$6)) ? $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u2713 ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e) : $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25fb ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e))]))), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "task-1: Implement JWT token verification parser", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pending"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25fb ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "task-2: Hook token revocation cache into Redis", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.ch().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pending"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25fb ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "task-3: End-to-end integration test with token rotation", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
  var x$8 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((!(sc === x$8))) {
    var $x_11 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card lease-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tag-lease"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ACTIVE TRANSIENT LEASE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("policy-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "revert_on_conclusion", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("lease-item"), $m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "lease-1 (git_worktree): ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "/home/user/git/worktrees/oauth2-spike", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("lease-notice"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u26a0 Invariant: Must be cleaned before crystal goal can be marked Concluded.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  } else {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_11 = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  }
  var x$10 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
  if ((sc === x$10)) {
    var $x_10 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card artifact-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tag-artifact"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "PHYSICAL ARTIFACT", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("role-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Precondition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("artifact-name"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "art_bench_01: Hardware Security Dongle Rig", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("artifact-coords"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Location: Laboratory Alpha, Bench 4B \u2022 geo:52.5200,13.4050", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  } else {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_10 = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  }
  var $x_9 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_8 = $m_sr_ScalaRunTime$();
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().a.g.f("state-card nodes-card");
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("state-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "CAUSAL DAG NODES", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Capture Fidelity: inferred", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_4 = $m_sr_ScalaRunTime$();
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().a.g.f("dag-node-timeline");
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dag-node-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-bullet")]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-content"), $m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "node-1 [Init]", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, " Initialized crystal with goal and criteria by usr_operator", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
  var x$12 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((!(sc === x$12))) {
    var $x_1 = $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dag-node-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-bullet green")]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-content"), $m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "node-2 [Checkpoint]", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, " Task 1 complete; acquired git_worktree lease by agt_antigravity", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
  } else {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_1 = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  }
  var x$14 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
  return $x_36.d($x_35.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_34, $x_33, $x_12, $x_11, $x_10, $x_9.d($x_8.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_7, $x_6, $x_5.d($x_4.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_3, $x_2, $x_1, ((sc === x$14) ? $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dag-node-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-bullet purple")]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("node-content"), $m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "node-3 [Action]", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, " Linked physical artifact art_bench_01 as test precondition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))) : ($m_Lcom_raquo_laminar_api_package$(), new $c_Lcom_raquo_laminar_nodes_CommentNode("")))])))])))])));
}
function $p_Lccrystal_site_TabExplorer$__generatePromptBeam__Lccrystal_site_TabExplorer$Scenario__I__Z__T($thiz, sc, tail, summaryOnly) {
  var sb = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
  sb.bl("=== CONTEXT CRYSTAL CAST: oauth2-auth-service ===\n\n");
  sb.bl("## Goal: Build Resilient OAuth2 Service\n");
  sb.bl("Intent: Implement stateless JWT authentication with token revocation list and hardware test fixture.\n");
  sb.bl("Status: in_progress\n\n");
  sb.bl("## Active Tasks:\n");
  var x$2 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((sc === x$2)) {
    sb.bl("- [ ] task-1: Implement JWT token verification parser\n");
    sb.bl("- [ ] task-2: Hook token revocation cache into Redis\n");
    sb.bl("- [ ] task-3: End-to-end integration test with token rotation\n\n");
  } else {
    sb.bl("- [x] task-1: Implement JWT token verification parser\n");
    sb.bl("- [ ] task-2: Hook token revocation cache into Redis\n");
    sb.bl("- [ ] task-3: End-to-end integration test with token rotation\n\n");
  }
  var x$4 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((!(sc === x$4))) {
    sb.bl("## Active Transient Leases (Must be cleaned before conclusion):\n");
    sb.bl("- [lease-1] GitWorktree: /home/user/git/worktrees/oauth2-spike (Policy: revert_on_conclusion)\n\n");
  }
  var x$6 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
  if ((sc === x$6)) {
    sb.bl("## Precondition Artifacts:\n");
    sb.bl("- [art_bench_01] Hardware Security Dongle Rig (Physical, Location: Lab Alpha, Bench 4B)\n\n");
  }
  if ((!summaryOnly)) {
    sb.bl((("## State Transitions (Tail: " + tail) + "):\n"));
    var nodes = new $c_scm_ListBuffer().gS($m_sr_ScalaRunTime$().c(new ($d_T.r().C)([])));
    nodes.hC("- [HumanPrompt] (usr_operator): Initialized crystal with goal and criteria");
    var x$8 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
    if ((!(sc === x$8))) {
      nodes.hC("- [Checkpoint] [inferred] (agt_antigravity): Task 1 complete; acquired git_worktree lease");
    }
    var x$10 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
    if ((sc === x$10)) {
      nodes.hC("- [Action] [inferred] (agt_antigravity): Linked physical artifact art_bench_01 as test precondition");
    }
    $f_sc_StrictOptimizedIterableOps__takeRight__I__O(nodes, tail).aj(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((n) => sb.bl((n + "\n")))));
    sb.bl("\n");
  }
  sb.bl("=== END CAST ===");
  return sb.b0.B;
}
/** @constructor */
function $c_Lccrystal_site_TabExplorer$() {
  this.f8 = null;
  this.fK = null;
  this.fJ = null;
  $n_Lccrystal_site_TabExplorer$ = this;
  this.f8 = $m_Lcom_raquo_laminar_api_package$().a.fe.gq($s_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike__Lccrystal_site_TabExplorer$Scenario());
  this.fK = $m_Lcom_raquo_laminar_api_package$().a.fe.gq(3);
  this.fJ = $m_Lcom_raquo_laminar_api_package$().a.fe.gq(false);
}
$p = $c_Lccrystal_site_TabExplorer$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabExplorer$;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$() {
}
$h_Lccrystal_site_TabExplorer$.prototype = $p;
$p.cj = (function() {
  var $x_37 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_36 = $m_sr_ScalaRunTime$();
  var $x_35 = $m_Lcom_raquo_laminar_api_package$().a.g.f("tab-content tab-explorer");
  var $x_34 = $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("explorer-intro"), $m_Lcom_raquo_laminar_api_package$().a.eT().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Live Interactive DAG & Context Beam Explorer", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Experience how Context Crystal models living software intent, maintains immutable causal provenance, enforces clean transient resource leases, and shapes context beams for LLM prompts in real time:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_33 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_32 = $m_sr_ScalaRunTime$();
  var $x_31 = $m_Lcom_raquo_laminar_api_package$().a.g.f("explorer-toolbar");
  var $x_30 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_29 = $m_sr_ScalaRunTime$();
  var $x_28 = $m_Lcom_raquo_laminar_api_package$().a.g.f("toolbar-group");
  var $x_27 = $m_Lcom_raquo_laminar_api_package$().a.k2().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Select Scenario:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_26 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_25 = $m_sr_ScalaRunTime$();
  var $x_24 = $m_Lcom_raquo_laminar_api_package$().a.g.f("scenario-buttons");
  var $x_23 = $m_Lcom_raquo_laminar_api_package$().a;
  var $x_22 = $m_sci_Nil$();
  var $x_21 = $m_s_Predef$();
  var xs = $m_Lccrystal_site_TabExplorer$Scenario$().tE();
  var f = ((sc) => $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.jp(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_TabExplorer$().f8.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sc$2) => ((curr) => (((curr === null) ? (sc$2 === null) : (curr === sc$2)) ? "btn-scenario active" : "btn-scenario")))(sc)), $m_s_None$()), $m_Lcom_raquo_laminar_api_package$().a.hz()), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, sc.fL, $m_Lcom_raquo_laminar_modifiers_RenderableText$().e), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)).gK(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((sc$3) => (() => sc$3))(sc))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.dr(_$1);
  }))($m_Lccrystal_site_TabExplorer$().f8.dv)))]))));
  var len = xs.b.length;
  var ys = new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_12 = i;
        var x0 = xs.b[i];
        ys.b[$x_12] = f(x0);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_I)) {
      while ((i < len)) {
        var $x_13 = i;
        var x0$1 = xs.b[i];
        ys.b[$x_13] = f(x0$1);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_D)) {
      while ((i < len)) {
        var $x_14 = i;
        var x0$2 = xs.b[i];
        ys.b[$x_14] = f(x0$2);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_J)) {
      while ((i < len)) {
        var $x_15 = i;
        var t = xs.b[i];
        var lo = t.u;
        var hi = t.v;
        ys.b[$x_15] = f(new $c_RTLong(lo, hi));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_F)) {
      while ((i < len)) {
        var $x_16 = i;
        var x0$3 = xs.b[i];
        ys.b[$x_16] = f(x0$3);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_C)) {
      while ((i < len)) {
        var $x_17 = i;
        var x0$4 = xs.b[i];
        ys.b[$x_17] = f($bC(x0$4));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_B)) {
      while ((i < len)) {
        var $x_18 = i;
        var x0$5 = xs.b[i];
        ys.b[$x_18] = f(x0$5);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_S)) {
      while ((i < len)) {
        var $x_19 = i;
        var x0$6 = xs.b[i];
        ys.b[$x_19] = f(x0$6);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_Z)) {
      while ((i < len)) {
        var $x_20 = i;
        var x0$7 = xs.b[i];
        ys.b[$x_20] = f(x0$7);
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs);
    }
  }
  var $x_11 = $x_30.d($x_29.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_28, $x_27, $x_26.d($x_25.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_24, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_23, $x_22.ej($x_21.km(ys)), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))])));
  var $x_10 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_9 = $m_sr_ScalaRunTime$();
  var $x_8 = $m_Lcom_raquo_laminar_api_package$().a.g.f("toolbar-group beam-controls");
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().a.k2().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Beam Shaping:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().a.h();
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().a.g.f("beam-pill-group");
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("control-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "--tail:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().a;
  var this$21 = new $c_sci_$colon$colon(1, new $c_sci_$colon$colon(2, new $c_sci_$colon$colon(3, new $c_sci_$colon$colon(5, $m_sci_Nil$()))));
  var f$1 = ((count) => {
    var count$1 = (count | 0);
    return $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.jp(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_TabExplorer$().fK.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((curr$1) => (((curr$1 | 0) === count$1) ? "btn-mini active" : "btn-mini"))), $m_s_None$()), $m_Lcom_raquo_laminar_api_package$().a.hz()), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, ("" + count$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)).gK(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => count$1))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$1) => ((_$1$1) => {
      sink$1.dr(_$1$1);
    }))($m_Lccrystal_site_TabExplorer$().fK.dv)))])));
  });
  if ((this$21 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0$8 = this$21.g6;
    var h = new $c_sci_$colon$colon(f$1(x0$8), $m_sci_Nil$());
    var t$1 = h;
    var rest = this$21.a1;
    while ((rest !== $m_sci_Nil$())) {
      var x0$9 = rest.w();
      var nx = new $c_sci_$colon$colon(f$1(x0$9), $m_sci_Nil$());
      t$1.a1 = nx;
      t$1 = nx;
      rest = rest.y();
    }
    var $x_1 = h;
  }
  return $x_37.d($x_36.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_35, $x_34, $x_33.d($x_32.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_31, $x_11, $x_10.d($x_9.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_8, $x_7, $x_6.d($x_5.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$()), $m_Lcom_raquo_laminar_api_package$().a.k2().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("checkbox-toggle"), $m_Lcom_raquo_laminar_api_package$().a.sh().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("checkbox"), $m_Lcom_raquo_laminar_api_package$().a.pa().qB(this.fJ.ax), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.pL(), false, false)).sC(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$2) => ((_$1$2) => {
    sink$2.dr(_$1$2);
  }))(this.fJ.dv)))]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, " --summary-only", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("explorer-panes-grid"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-col pane-dag"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25c8 Living Crystal DAG State (.ccrystals/)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("crystal-id-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal: oauth2-auth-service", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-body"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().oV(new $c_Lcom_raquo_airstream_misc_MapSignal(this.f8.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sc$2$1) => $p_Lccrystal_site_TabExplorer$__renderDagState__Lccrystal_site_TabExplorer$Scenario__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($m_Lccrystal_site_TabExplorer$(), sc$2$1))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().iv, (void 0)))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-col pane-beam"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pane-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25c8 Hydrated Context Beam (ccrystal hydrate)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().dl(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().ck.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.c2 === "explorer-beam")) ? "\u2713 Copied" : "Copy Beam"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$3) => {
    var sc$1 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_TabExplorer$().f8.ax).Q();
    var tail = ($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_TabExplorer$().fK.ax).Q() | 0);
    var sumOnly = (!(!$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_TabExplorer$().fJ.ax).Q()));
    $m_Lccrystal_site_State$().ec("explorer-beam", $p_Lccrystal_site_TabExplorer$__generatePromptBeam__Lccrystal_site_TabExplorer$Scenario__I__Z__T($m_Lccrystal_site_TabExplorer$(), sc$1, tail, sumOnly));
  })))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("beam-output-code"), $m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().dl(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().rf(this.f8.ax, this.fK.ax, this.fJ.ax, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$5()), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 !== null)) {
      var sc$4 = x$1$2.fk;
      var tail$1 = (x$1$2.fl | 0);
      var sumOnly$1 = (!(!x$1$2.fm));
      return $p_Lccrystal_site_TabExplorer$__generatePromptBeam__Lccrystal_site_TabExplorer$Scenario__I__Z__T($m_Lccrystal_site_TabExplorer$(), sc$4, tail$1, sumOnly$1);
    }
    throw new $c_s_MatchError(x$1$2);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e))])))])))])))])))])));
});
var $d_Lccrystal_site_TabExplorer$ = new $TypeData().i($c_Lccrystal_site_TabExplorer$, "ccrystal.site.TabExplorer$", ({
  cK: 1
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
$p.cj = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tab-content tab-manifesto"), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-section"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-badge"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("badge-pulse")]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Open Source \u2022 Scala Native Sub-5ms Engine \u2022 Model Context Protocol", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.s9().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context is not a vector database.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e), $m_Lcom_raquo_laminar_api_package$().a.r4().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("text-gradient"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "It is a deterministic DAG.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-lead"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal cures session amnesia and eliminates agent debris. A local-first, zero-token lifecycle and context beam engine engineered for software architects and autonomous AI entities collaborating with deliberate human craftsmanship.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-cta-group"), $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-primary"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u25c7 Install in 5 Seconds", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)).gK(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $s_Lccrystal_site_Tab$__Quickstart__Lccrystal_site_Tab()))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.dr(_$1);
  }))($m_Lccrystal_site_State$().f7.dv)))]))), $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-secondary"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "\u2b21 Explore Live Interactive DAG", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)).gK(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $s_Lccrystal_site_Tab$__Explorer__Lccrystal_site_Tab()))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$1) => ((_$1$1) => {
    sink$1.dr(_$1$1);
  }))($m_Lccrystal_site_State$().f7.dv)))]))), $m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("btn-tertiary"), $m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "View on GitHub \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("hero-terminal-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-header"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-dots"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dot red")]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dot yellow")]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("dot green")])))]))), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "bash \u2014 single-line curl install", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().dl(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().ck.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.c2 === "hero-install")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$2) => {
    $m_Lccrystal_site_State$().ec("hero-install", "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh");
  })))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-body"), $m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-block"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-header text-center"), $m_Lcom_raquo_laminar_api_package$().a.eT().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "The Three Systemic Failures of Ephemeral AI Context", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Why flat chat windows, proprietary SQLite silos, and vector embeddings break down in real engineering codebases:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("cards-grid three-col"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-icon"), $m_Lccrystal_site_Icons$().rc(32)]))), $m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Session Amnesia", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Chat windows reset. Context is trapped in ephemeral IDE windows or proprietary cloud caches. Starting a new agent turn or switching machines loses hard-won architectural decisions and progress.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-icon"), $m_Lccrystal_site_Icons$().rv(32)]))), $m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Agent Debris Deficit", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Autonomous coding agents create temporary git worktrees, mock configurations, and scratch test harnesses that linger indefinitely as orphaned technical debt when turns end or crash.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-icon"), $m_Lccrystal_site_Icons$().tv(32)]))), $m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Token Inflation & Drift", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Re-summarizing entire conversations with an LLM burns valuable context budget and introduces hallucinatory drift into ground truth. Semantic vector similarity fails to represent exact causal state sequences.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-block"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-header text-center"), $m_Lcom_raquo_laminar_api_package$().a.eT().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "The Sovereign Context Crystal Architecture", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "A unified, deterministic ontology connecting intent, causal history, transient resources, and world state:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("cards-grid two-col"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "THE CAVE CONTAINER", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "The Workspace Cave (.ccrystals/)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "A sovereign context container residing in your workspace or companion directory (`CCRYSTAL_STORE`). Houses active crystals, the multi-entity authorship registry, and shared artifact catalogs with zero proprietary locks.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "DETERMINISTIC CAUSALITY", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Directed Acyclic Graph (DAG)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Causal state transitions with cryptographic attribution, explicit event timestamps, capture fidelity (`inferred` vs `intercepted`), and semantic anchors enabling surgical sub-DAG cleavage and branching.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "CLEANLINESS GUARANTEE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Transient Resource Leases", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Temporary assets (e.g. isolated git worktrees, mock databases) require explicit leases. Context Crystal guarantees leases are cleaned or promoted before goal conclusion, leaving zero agent debris.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "WORLD-STATE GROUNDING", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Virtual & Physical Artifacts", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Bridges digital deliberation with real reality. First-class tracking of target deliverables, test instruments, and physical preconditions (lab benches, geo coordinates, civic addresses).", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-block comparison-section"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("section-header text-center"), $m_Lcom_raquo_laminar_api_package$().a.eT().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Architectural & Operational Comparison", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Understanding the fundamental trade-offs between deterministic lifecycle tracking, semantic retrieval, and conversational history:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("table-wrapper"), $m_Lcom_raquo_laminar_api_package$().a.ki().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("comparison-table"), $m_Lcom_raquo_laminar_api_package$().a.kk().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Dimension / Scope", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal (State DAG)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Vector Retrieval / RAG", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Ephemeral Chat History", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.kj().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Primary Objective", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill cyan"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Deterministic state map & task progression", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Associative semantic recall over text corpus", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Conversational exchange & exploratory ideation", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Execution Model", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Local-first native binary (sub-5ms startup)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Remote API or local vector engine", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Cloud inference session roundtrips", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "State Management Overhead", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "0 LLM tokens for lifecycle & DAG operations", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Embedding & retrieval query tokens", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Full-transcript re-prompting & lossy compaction", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Data Representation", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill cyan"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Strict JSON Schema v1 & JSON-LD DAG", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "High-dimensional vector embeddings & indices", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Unstructured natural language chat logs", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Workspace Scaffolding", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Explicit transient leases (worktrees, mocks)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Out of scope (managed externally)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Manual developer tracking & cleanup", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "History Compaction", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Deterministic topological melting & cold archival", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Top-K similarity thresholding / re-ranking", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Lossy prompt compaction or context reset", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Concurrency & Integrity", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Optimistic Concurrency Control (OCC) & atomic swaps", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Database-dependent ACID / eventual consistency", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Single-user session state", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Agent Tooling Protocol", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Native Stdio MCP Server (15 tools) & POSIX CLI", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Vendor client libraries & REST endpoints", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "IDE vendor prompts & proprietary extensions", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))])));
});
var $d_Lccrystal_site_TabManifesto$ = new $TypeData().i($c_Lccrystal_site_TabManifesto$, "ccrystal.site.TabManifesto$", ({
  cP: 1
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
$p.cj = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tab-content tab-mcp"), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("mcp-intro"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("mcp-badge"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Model Context Protocol \u2022 Stdio Transport \u2022 JSON-RPC 2.0", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.eT().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Native Model Context Protocol (MCP) Server Engine", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal features an integrated, high-performance stdio MCP server running directly from the native binary (`ccrystal mcp`). No Node.js daemon, Python wrapper, or external orchestrator required.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Frictionless IDE & Agent Harness Setup", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Connect Context Crystal to your preferred AI coding environment:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("cards-grid two-col"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card client-config-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("client-header"), $m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Automated Onboarding (Recommended)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("config-path"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Claude Desktop \u2022 Cursor \u2022 Windsurf \u2022 Zed \u2022 Google Antigravity \u2022 Claude Code", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Context Crystal automatically discovers installed IDEs and agent runtimes, updates their configurations, and creates defensive `.ccrystal.bak` rollback snapshots:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal agent install --all", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().dl(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().ck.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.c2 === "agent-install")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $m_Lccrystal_site_State$().ec("agent-install", "ccrystal agent install --all");
  })))])))]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("config-path"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Run diagnostic anytime to inspect health: `ccrystal agent doctor`", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("feature-card client-config-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("client-header"), $m_Lccrystal_site_Icons$().r9(18), $m_Lccrystal_site_Icons$().rr(18), $m_Lccrystal_site_Icons$().tG(18), $m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Manual Configuration", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("config-path"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Claude Desktop, Cursor, Windsurf, Zed, and Custom Harnesses", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "{\n  \"mcpServers\": {\n    \"context-crystal\": {\n      \"command\": \"ccrystal\",\n      \"args\": [\"mcp\"]\n    }\n  }\n}", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("config-path"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Config files: Claude (~/.config/Claude/claude_desktop_config.json) \u2022 Cursor (.cursor/mcp.json) \u2022 Windsurf (~/.codeium/windsurf/mcp_config.json) \u2022 Zed (context_servers in settings.json)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "2", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "The 15 Native MCP Tools", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "First-class protocol capabilities designed specifically for autonomous AI pairs:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("table-wrapper"), $m_Lcom_raquo_laminar_api_package$().a.ki().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("mcp-tools-table"), $m_Lcom_raquo_laminar_api_package$().a.kk().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Tool Name", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Parameters", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Description & Behavioral Invariant", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.kj().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_init", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "id, goal_title, intent, tasks?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Atomically instantiates a new crystal with predefined acceptance criteria.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_list", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "status?, json_output?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Queries crystals in the workspace cave with optional InProgress/Concluded filter.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_hydrate", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, tail?, from?, to?, depth?, summary_only?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Casts context beam into prompt with precise selective shaping flags.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_triage", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "filter?, json_output?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Deterministic cave hygiene: classifies crystals into solid, stale, or active aging buckets.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_artifact", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "action, id?, name?, substrate?, role?, uri?, cave?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Registers, lists, or inspects virtual and physical artifacts across cave or crystal.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_checkpoint", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, summary, fidelity?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Appends an immutable checkpoint transition node to the active DAG.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_task_transition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, task_id, status", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Transitions an acceptance criterion to completed, in_progress, or blocked.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_goal_transition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, status, reason?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Concludes or transitions crystal lifecycle goal (in_progress, concluded_success, concluded_abandoned).", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_transient_lease", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, resource_type, path?, desc, policy", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Registers an ephemeral resource lease (git_worktree, mock) with cleanup policy.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_slice_fork", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "source_id, fork_to, from?, to?, prune?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Cleaves sub-DAG at a semantic anchor and forks into a dedicated child crystal.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_melt", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, from, to, summary?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Deterministically squashes linear sub-DAG segment into single checkpoint without LLM drift.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_archive", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Moves concluded crystal into cold storage (.ccrystals/archive/) while preserving history.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_unarchive", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Restores archived crystal from cold storage back to active workspace cave.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_delete", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_id, force?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Destructive lifecycle removal with cascade orphaned entity preview.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "crystal_batch", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "commands", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Executes multiple semicolon-delimited CLI commands atomically in a single turn.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))])));
});
var $d_Lccrystal_site_TabMcp$ = new $TypeData().i($c_Lccrystal_site_TabMcp$, "ccrystal.site.TabMcp$", ({
  cQ: 1
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
$p.cj = (function() {
  return $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("tab-content tab-quickstart"), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("quickstart-intro"), $m_Lcom_raquo_laminar_api_package$().a.eT().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Installation & Developer Quickstart", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Install the native zero-dependency binary in seconds or build from source using Scala Native.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Fast Installation (Linux & macOS)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Choose your preferred installation method: curl bootstrap, Homebrew, or Coursier (cs):", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("install-methods-grid"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("install-method-box"), $m_Lcom_raquo_laminar_api_package$().a.eU().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Option A: Single-Line Curl Installer (Recommended)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Verifies architecture, extracts official tarball, validates SHA256 checksums, and installs into `~/.local/bin/ccrystal`:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().dl(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().ck.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.c2 === "qs-curl")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $m_Lccrystal_site_State$().ec("qs-curl", "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh");
  })))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("install-method-box"), $m_Lcom_raquo_laminar_api_package$().a.eU().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Option B: Homebrew (macOS & Linux)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Install and manage updates via Homebrew package manager:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "brew install oswaldo/context-crystal/ccrystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().dl(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().ck.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => (((x$1$2 instanceof $c_s_Some) && (x$1$2.c2 === "qs-brew")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $m_Lccrystal_site_State$().ec("qs-brew", "brew install oswaldo/context-crystal/ccrystal");
  })))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("install-method-box"), $m_Lcom_raquo_laminar_api_package$().a.eU().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Option C: Coursier (Universal / Contrib Catalog)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Install binary globally via official Coursier contrib channel:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "cs install --contrib ccrystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().dl(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().ck.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3) => (((x$1$3 instanceof $c_s_Some) && (x$1$3.c2 === "qs-cs")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $m_Lccrystal_site_State$().ec("qs-cs", "cs install --contrib ccrystal");
  })))])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "2", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Direct Distribution Packages (GitHub Releases)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Every release is packaged as an optimized `.tar.gz` bundle with Thin LTO, stripped binary, and SHA256SUMS integrity verification:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("table-wrapper"), $m_Lcom_raquo_laminar_api_package$().a.ki().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("binary-table"), $m_Lcom_raquo_laminar_api_package$().a.kk().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Platform / Architecture", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Distribution Package", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Linking & Optimizations", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.cM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.kj().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Linux x86_64", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal-v{version}-linux-x86_64.tar.gz", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Thin LTO, Immix GC, Static POSIX", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Linux aarch64 (ARM64)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal-v{version}-linux-aarch64.tar.gz", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Thin LTO, Immix GC, ARM64 POSIX", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "macOS Apple Silicon (aarch64)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal-v{version}-macos-aarch64.tar.gz", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Thin LTO, Immix GC, Native M-series (macOS 14, 15, 26)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "macOS Intel (x86_64)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal-v{version}-macos-x86_64.tar.gz", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Thin LTO, Immix GC, Intel 64-bit POSIX", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Windows (WSL2 Tier 2)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal-v{version}-linux-x86_64.tar.gz", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "WSL2 / Ubuntu Linux Subsystem", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.a0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bc().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Integrity Verification", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "SHA256SUMS", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Cryptographic SHA-256 Digest for all assets", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.p().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b6().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.b8().k("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().a.bd().k("_blank"), $m_Lcom_raquo_laminar_api_package$().a.g.f("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Verify \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "3", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Compile From Source (Scala Native 3.9 LTS)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Requirements: JDK 21+, sbt 1.10+, and Clang/LLVM:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "# Clone repository\ngit clone https://github.com/oswaldo/context-crystal.git && cd context-crystal\n\n# Compile & link release native binary with Thin LTO\nsbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'\n\n# Install binary into user PATH (portable across Linux GNU & macOS BSD)\nmkdir -p ~/.local/bin && rm -f ~/.local/bin/ccrystal && cp ./cli/native/target/scala-3.9.0/ccrystal-cli ~/.local/bin/ccrystal && chmod +x ~/.local/bin/ccrystal && strip ~/.local/bin/ccrystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().a.cd().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.c0().k("button"), $m_Lcom_raquo_laminar_api_package$().a.g.f("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().dl(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().ck.ax, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$4) => (((x$1$4 instanceof $c_s_Some) && (x$1$4.c2 === "qs-build")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().bL($m_Lcom_raquo_laminar_api_package$().a.bX(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
    $m_Lccrystal_site_State$().ec("qs-build", "sbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'");
  })))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.bC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().a.G().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "4", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.bM().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "First 5 Minutes: The Core Workflow", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.R().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "Verified terminal sequence to initialize, hydrate, and maintain zero debris:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-steps-flow"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "1. Initialize Crystal with Atomic Tasks:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal init my-track -g \"Implement OAuth2 JWT Service\" -t \"Write JWT parser\" -t \"Setup revocation list\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "2. Hydrate Living Context Beam for Agent Prompts:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal hydrate my-track --tail 5", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "3. Acquire Transient Resource Lease (Guaranteed Debris Elimination):", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal transient lease my-track -t git_worktree -p ./worktrees/oauth -d \"Track spike worktree\" --policy revert_on_conclusion", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "4. Mark Acceptance Criterion Complete:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal task done my-track -t task-1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "5. Atomic Multi-Command Batching:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal batch \"task done my-track -t task-2; transient clean my-track -l lease-1; node add my-track -k checkpoint -s 'Completed OAuth2 milestone' --fidelity inferred\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "6. Deterministic Zero-LLM Melting (Sub-DAG Squashing):", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal melt my-track --from init-node --to milestone-1 -s \"Scaffolding & DB schema finalized\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "7. Conclude, Triage & Cold Storage Archiving:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().a.h().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.g.f("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().a.bA().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().a.I().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().a, "ccrystal batch \"conclude my-track -s success -r 'Shipped to production'; archive my-track\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))])));
});
var $d_Lccrystal_site_TabQuickstart$ = new $TypeData().i($c_Lccrystal_site_TabQuickstart$, "ccrystal.site.TabQuickstart$", ({
  cR: 1
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
$p.ss = (function(trys, combinator) {
  var elem = false;
  elem = true;
  var i = 0;
  var len = (trys.length | 0);
  while ((i < len)) {
    if (trys[i].k1()) {
      var ev$6 = false;
      elem = ev$6;
    }
    i = ((1 + i) | 0);
  }
  if (elem) {
    var values = trys.map(((_$3) => _$3.Q()));
    return new $c_s_util_Success(combinator.i(values));
  } else {
    var arr = trys.map(((x$1) => ((x$1 instanceof $c_s_util_Failure) ? new $c_s_Some(x$1.e6) : $m_s_None$())));
    return new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError($m_sci_IndexedSeq$().jN($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), arr))));
  }
});
var $d_Lcom_raquo_airstream_combine_CombineObservable$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineObservable$, "com.raquo.airstream.combine.CombineObservable$", ({
  cT: 1
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
$p.rf = (function(this$, s1, s2, c) {
  return $m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$().rg(this$, s1, s2, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((a, v1, v2) => new $c_T3(a, v1, v2))));
});
var $d_Lcom_raquo_airstream_combine_generated_CombinableSignal$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_generated_CombinableSignal$, "com.raquo.airstream.combine.generated.CombinableSignal$", ({
  cV: 1
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
$p.rg = (function(s1, s2, s3, combinator) {
  return new $c_Lcom_raquo_airstream_combine_CombineSignalN($m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Signal.r().C)([s1.fG(), s2.fG(), s3.fG()]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((arr) => combinator.hD(arr[0], arr[1], arr[2]))));
});
var $d_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$ = new $TypeData().i($c_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$, "com.raquo.airstream.combine.generated.StaticSignalCombineOps$", ({
  cW: 1
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
$p.rV = (function(parent, onTry) {
  return new $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parent, onTry, this);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$ = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$, "com.raquo.airstream.common.InternalParentObserver$", ({
  cZ: 1
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
  return (($objectGetClass($thiz).jV() + "@") + $thiz.E());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.eg();
  return ((x === (void 0)) ? $thiz.ed() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().qc(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().hf, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.qc = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.rW = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  d5: 1
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
$p.pU = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  d8: 1
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
  d9: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Protected$() {
  this.qd = null;
  $n_Lcom_raquo_airstream_core_Protected$ = this;
  this.qd = new $c_Lcom_raquo_airstream_core_Protected();
}
$p = $c_Lcom_raquo_airstream_core_Protected$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Protected$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected$() {
}
$h_Lcom_raquo_airstream_core_Protected$.prototype = $p;
$p.sD = (function(minRank, observables) {
  var elem = 0;
  elem = minRank;
  var i = 0;
  var len = (observables.length | 0);
  while ((i < len)) {
    var observable = observables[i];
    var rank = observable.f2();
    if ((rank > elem)) {
      var ev$2 = rank;
      elem = ev$2;
    }
    i = ((1 + i) | 0);
  }
  return elem;
});
var $d_Lcom_raquo_airstream_core_Protected$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Protected$, "com.raquo.airstream.core.Protected$", ({
  da: 1
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
  this.fb = 0;
  this.fb = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.pI = (function() {
  if ((this.fb === 2147483647)) {
    this.fb = 1;
  } else {
    this.fb = ((1 + this.fb) | 0);
  }
  return this.fb;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  db: 1
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
  this.i1 = null;
  this.fT = null;
  this.i2 = 0;
  this.i1 = code;
  this.fT = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gR();
  this.i2 = ((x === (void 0)) ? 1 : ((1 + x.i2) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().gX === (-1)) || (this.i2 > $m_Lcom_raquo_airstream_core_Transaction$().gX))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().gX));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bu) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().er.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jr(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
$p.ri = (function(observable) {
  var x = this.fT;
  var x$1 = ((x === (void 0)) ? (void 0) : x.bm(observable));
  return ((x$1 === (void 0)) ? false : x$1);
});
$p.rE = (function(observable) {
  var x = this.fT;
  if ((x === (void 0))) {
    var newQueue = new $c_Lcom_raquo_airstream_util_JsPriorityQueue(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((observable$1) => observable$1.hW)));
    this.fT = newQueue;
    var $x_1 = newQueue;
  } else {
    var $x_1 = x;
  }
  $x_1.rD(observable);
});
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  dd: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.gX = 0;
  this.kG = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.gX = 1000;
  this.kG = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.pb = (function(transaction) {
  try {
    transaction.i1.i(transaction);
    var x = transaction.fT;
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
    $m_Lcom_raquo_airstream_core_AirstreamError$().cL(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  de: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.gY.length | 0) === 0)) {
    if ((($thiz.er.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.er.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jr($thiz.er.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.gY.length | 0) > 0)) {
        var callback = $thiz.gY.shift();
        try {
          callback.i(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cL(e$2);
        }
      }
      while ((($thiz.er.length | 0) > 0)) {
        var _trx = $thiz.er.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jr(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bu = false;
  this.gY = null;
  this.er = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bu = false;
  this.gY = $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_F1.r().C)([])));
  this.er = $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  df: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.es.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gZ.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.gZ.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.es.set(parent, newChildren);
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
      (!(!$thiz.es.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.gZ = null;
  this.es = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.gZ = $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.es = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.jr = (function(newTransaction) {
  var x = this.gR();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().pb(newTransaction);
    this.rB(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.rB = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.gR();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().A(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.sY(transaction$tailLocal1);
    transaction$tailLocal1.i1 = $m_Lcom_raquo_airstream_core_Transaction$().kG;
    var maybeNextTransaction = this.gR();
    if ($m_sr_BoxesRunTime$().A(maybeNextTransaction, (void 0))) {
      if (((this.es.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.es.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.eI + (transactions.length | 0)) | 0);
          numChildren.eI = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.eI) + " children for ") + (this.es.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().pb(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.sY = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().A(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.gR();
      if ((!$m_sr_BoxesRunTime$().A(maybeParentTransaction, (void 0)))) {
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
$p.gR = (function() {
  return this.gZ[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  dg: 1
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
  this.kK = null;
  this.kI = null;
  this.kJ = null;
  this.kK = onWillStart;
  this.kI = onStart;
  this.kJ = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  dj: 1
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
$p.qX = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  dk: 1
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
    if ((!$thiz.c1.j())) {
      subscription.pM();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.h4.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.h4.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.l7 = null;
  this.dt = null;
  this.fc = false;
  this.h4 = null;
  this.c1 = null;
  this.fd = 0;
  this.l7 = onAccessAfterKilled;
  this.dt = $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.fc = true;
  this.h4 = $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.c1 = $m_s_None$();
  this.fd = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.oK = (function() {
  if ((!(!this.c1.j()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.l7);
      this.c1 = new $c_s_Some(newOwner);
      this.fc = false;
      this.fd = 0;
      var i = 0;
      var originalNumSubs = (this.dt.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.fd) | 0);
        this.dt[ix].pJ(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.fc = true;
      this.fd = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.bu || (!when))) {
      f();
    } else {
      this$4.bu = true;
      try {
        f();
      } finally {
        this$4.bu = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.ru = (function() {
  if ((!this.c1.j())) {
    this.fc = false;
    var arr = this.dt;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].pM();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.c1;
    if ((!this$4.j())) {
      this$4.Q().pH();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.fc = true;
    this.c1 = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.qQ = (function(subscription, prepend) {
  if (prepend) {
    this.fd = ((1 + this.fd) | 0);
    this.dt.unshift(subscription);
  } else {
    this.dt.push(subscription);
  }
  var this$1 = this.c1;
  if ((!this$1.j())) {
    var x0 = this$1.Q();
    subscription.pJ(x0);
  }
});
$p.t9 = (function(subscription) {
  if (this.fc) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.h4.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  dp: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.h5 = null;
  this.l8 = null;
  this.h6 = null;
  this.h5 = dynamicOwner;
  this.l8 = activate;
  this.h6 = $m_s_None$();
  dynamicOwner.qQ(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.hJ = (function() {
  this.h5.t9(this);
});
$p.pJ = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.h6 = this.l8.i(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bu || (!when))) {
    f();
  } else {
    this$2.bu = true;
    try {
      f();
    } finally {
      this$2.bu = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.pM = (function() {
  var this$1 = this.h6;
  if ((!this$1.j())) {
    this$1.Q().hJ();
    this.h6 = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  dq: 1
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
$p.gV = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.i(owner)))), prepend);
});
$p.q7 = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.i(owner);
    return $m_s_None$();
  })), prepend);
});
$p.tn = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gV(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  dr: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.pc($m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fF();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fF().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fF().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fF().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fF().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.i9)) {
    $thiz.lb.Y();
    $thiz.i9 = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.lc = null;
  this.lb = null;
  this.i9 = false;
  this.lc = owner;
  this.lb = cleanup;
  this.i9 = false;
  owner.pR(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.hJ = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.lc, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  dt: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.ld = null;
  this.le = null;
  this.du = null;
  this.et = false;
  this.ld = activate;
  this.le = deactivate;
  this.du = $m_s_None$();
  this.et = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.sn = (function() {
  var this$1 = this.du;
  return ((!this$1.j()) && (!this$1.Q().h5.c1.j()));
});
$p.tk = (function(nextOwner) {
  if (this.et) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.du;
  if ((!this$1.j())) {
    var x0 = this$1.Q();
    var x$2 = x0.h5;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.sn() && (!nextOwner.c1.j()))) {
      this.et = true;
    }
    var this$3 = this.du;
    if ((!this$3.j())) {
      this$3.Q().hJ();
      this.du = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gV(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.et)) {
        this.ld.Y();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.et)) {
          this.le.Y();
        }
      })));
    })), false);
    this.du = new $c_s_Some(newPilotSubscription);
    this.et = false;
  }
});
$p.rb = (function() {
  if (this.et) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.du;
  if ((!this$1.j())) {
    this$1.Q().hJ();
  }
  this.du = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  du: 1
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
$p.gq = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  dy: 1
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
  this.ie = null;
  this.dw = null;
  this.ie = getRank;
  this.dw = $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().rX(new $ac_O([])));
}
$p = $c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_util_JsPriorityQueue;
/** @constructor */
function $h_Lcom_raquo_airstream_util_JsPriorityQueue() {
}
$h_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = $p;
$p.rD = (function(item) {
  var itemRank = (this.ie.i(item) | 0);
  var insertAtIndex = 0;
  var foundHigherRank = false;
  while (((insertAtIndex < (this.dw.length | 0)) && (!foundHigherRank))) {
    if (((this.ie.i(this.dw[insertAtIndex]) | 0) > itemRank)) {
      foundHigherRank = true;
    } else {
      insertAtIndex = ((1 + insertAtIndex) | 0);
    }
  }
  this.dw.splice(insertAtIndex, 0, item);
});
$p.bm = (function(item) {
  return ((this.dw.indexOf(item) | 0) !== (-1));
});
var $d_Lcom_raquo_airstream_util_JsPriorityQueue = new $TypeData().i($c_Lcom_raquo_airstream_util_JsPriorityQueue, "com.raquo.airstream.util.JsPriorityQueue", ({
  dB: 1
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
$p.qW = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().pA(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().qX(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  dC: 1
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
$p.br = (function(items) {
  return [...$m_sjsr_Compat$().tt(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  dD: 1
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
$p.sc = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.rO = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  dE: 1
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
  this.lp = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.ph($m_Lcom_raquo_laminar_api_package$().a.t().el());
  this.lp = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.qS = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ag instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
  }
});
$p.t6 = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ag instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
  }
});
$p.sj = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ag instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
  }
});
$p.si = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ag instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
  }
});
$p.tb = (function(parent, newChild, oldChild) {
  try {
    parent.replaceChild(newChild, oldChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ag instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
  }
});
$p.sr = (function(node, ancestor) {
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
    if ($m_sr_BoxesRunTime$().A(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.qH = (function(element, listener) {
  element.addEventListener(listener.ff.ex.fW, listener.it, listener.iu);
});
$p.t7 = (function(element, listener) {
  element.removeEventListener(listener.ff.ex.fW, listener.it, listener.iu);
});
$p.rp = (function(tag) {
  return document.createElement(tag.iF);
});
$p.s1 = (function(element, attr) {
  var x = this.s2(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.im.jF(x));
});
$p.s2 = (function(element, attr) {
  var domValue = element.cl.getAttributeNS(null, attr.fX);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.q3 = (function(element, attr, value) {
  this.tj(element, attr, attr.im.gC(value));
});
$p.tj = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.t8(element, attr);
  } else {
    element.cl.setAttribute(attr.fX, domValue);
  }
});
$p.t8 = (function(element, attr) {
  element.cl.removeAttribute(attr.fX);
});
$p.s3 = (function(element, prop) {
  return element.cl[prop.d6];
});
$p.q4 = (function(element, prop, value) {
  this.q5(element, prop, prop.io.gC(value));
});
$p.q5 = (function(element, prop, value) {
  element.cl[prop.d6] = value;
});
$p.ph = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.iG);
});
$p.s6 = (function(element, attr) {
  var x = this.s7(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.ip.jF(x));
});
$p.s7 = (function(element, attr) {
  var $x_2 = element.dA;
  var this$2 = attr.h9;
  var $x_1 = $x_2.getAttributeNS((this$2.j() ? null : this$2.Q()), attr.iq);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.q6 = (function(element, attr, value) {
  this.tl(element, attr, attr.ip.gC(value));
});
$p.tl = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.ta(element, attr);
  } else {
    var this$1 = attr.h9;
    if (this$1.j()) {
      element.dA.setAttribute(attr.h8, domValue);
    } else {
      var x0 = this$1.Q();
      element.dA.setAttributeNS(x0, attr.h8, domValue);
    }
  }
});
$p.ta = (function(element, attr) {
  var $x_1 = element.dA;
  var this$2 = attr.h9;
  $x_1.removeAttributeNS((this$2.j() ? null : this$2.Q()), attr.iq);
});
$p.ro = (function(text) {
  return document.createComment(text);
});
$p.rq = (function(text) {
  return document.createTextNode(text);
});
$p.pD = (function(element) {
  return $m_sc_StringOps$().rh(element.tagName, 45);
});
$p.s0 = (function(element) {
  if ((!(!(element instanceof HTMLInputElement)))) {
    if (((element.type === "checkbox") || (element.type === "radio"))) {
      return (!(!element.checked));
    }
  }
  if (this.pD(element)) {
    var x = element.checked;
    new $c_Lcom_raquo_laminar_DomApi$$anon$1(this);
    return ((x === (void 0)) ? (void 0) : (((typeof x) === "boolean") ? (!(!x)) : (void 0)));
  }
});
$p.rx = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.pi(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.pi = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.lp, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.rw = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  dF: 1
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
  this.ih = null;
  this.lq = null;
  this.ig = null;
  this.ih = seq;
  this.lq = scalaArray;
  this.ig = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.aj = (function(f) {
  if ((this.ih !== null)) {
    this.ih.aj(f);
  } else if ((this.ig !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().rO(this.ig, $m_sjs_js_Any$().pA(f));
  } else {
    $m_sc_ArrayOps$().rP(this.lq, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  dH: 1
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
  dI: 1
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
  $thiz.fe = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.qe = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.nu.cl.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.bV().c1.j()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.hr) {
        var ev$5 = false;
        ignoreNextActivation.hr = ev$5;
      } else {
        fn.i(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().q7(element.bV(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.i(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.b2 = null;
  this.nn = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.b2 = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.nn = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  dS: 1
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
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().b2);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.fX, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().s1(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().q3(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.dx = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.h8, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().s6(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().q6(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.no = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().a.qb();
  $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().a.kd()])));
  $m_Lcom_raquo_laminar_api_package$().a.qb();
  $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().a.kd(), $m_Lcom_raquo_laminar_api_package$().a.pL()])));
  $m_Lcom_raquo_laminar_api_package$().a.pa();
  $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().a.kd(), $m_Lcom_raquo_laminar_api_package$().a.bX()])));
  this.no = $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  e3: 1
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
$p.oV = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.ew)) {
      ctx.pv();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.tp(maybeLastSeenChild.az, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.az = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.tp = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.ew)) {
    ctx.pv();
  }
  var elem = ctx.eu;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().A(maybeLastSeenChild.aa(), ctx.dz.aa().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().sk(ctx.ev, newChildNode, ctx.dz, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().pW(ctx.ev, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = (((-1) + elem$1) | 0);
    elem$1 = ev$4;
  }
  ctx.pV(newChildNode);
  ctx.dy.clear();
  ctx.dy.set(newChildNode.aa(), newChildNode);
  ctx.eu = 1;
});
var $d_Lcom_raquo_laminar_inserters_ChildInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildInserter$, "com.raquo.laminar.inserters.ChildInserter$", ({
  e4: 1
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
$p.dl = (function(textSource, renderable) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), false, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, _$1) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(textSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2, maybeTextNode) => ((newValue) => {
    var x = maybeTextNode.az;
    if ((x === (void 0))) {
      var newTextNode = new $c_Lcom_raquo_laminar_nodes_TextNode(renderable.jw(newValue));
      this.tq(newTextNode, ctx$2);
      var ev$2 = newTextNode;
      maybeTextNode.az = ev$2;
      ev$2 = null;
    } else {
      x.ha.textContent = renderable.jw(newValue);
    }
  }))(ctx, new $c_sr_ObjectRef((void 0)))), owner))), (void 0));
});
$p.tq = (function(newTextNode, ctx) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().pW(ctx.ev, ctx.dz, newTextNode, (void 0));
  ctx.dz = newTextNode;
  if (ctx.ew) {
    ctx.ew = false;
    ctx.pV(newTextNode);
    ctx.dy.clear();
    ctx.eu = 0;
  }
});
var $d_Lcom_raquo_laminar_inserters_ChildTextInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildTextInserter$, "com.raquo.laminar.inserters.ChildTextInserter$", ({
  e5: 1
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
  this.ev = null;
  this.dz = null;
  this.ew = false;
  this.eu = 0;
  this.dy = null;
  this.ev = parentNode;
  this.dz = sentinelNode;
  this.ew = strictMode;
  this.eu = extraNodeCount;
  this.dy = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.pv = (function() {
  if ((this.ew || (this.eu !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().rw(this.ev.aa())));
  }
  if ((this.dy === null)) {
    this.dy = new Map();
  }
  if ((!(!(!(this.dz.aa() instanceof Comment))))) {
    var contentNode = this.dz;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().sj(this.ev.aa(), newSentinelNode.ix, contentNode.aa());
    this.dz = newSentinelNode;
    this.eu = 1;
    this.dy.set(contentNode.aa(), contentNode);
  }
  this.ew = true;
});
$p.pV = (function(after) {
  var elem = this.eu;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.aa().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.dy.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().t5(this.ev, maybePrevChild);
        var ev$5 = (((-1) + elem$1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  e8: 1
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
$p.td = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eL(parentNode, sentinelNode, hooks);
  return this.tz(parentNode, sentinelNode, strictMode);
});
$p.tz = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  e9: 1
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
$p.kb = (function(items, separator) {
  return ((items === "") ? $m_sci_Nil$() : $m_sci_Nil$().ej($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => (_$1 !== ""))))));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  ec: 1
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
  this.ex = null;
  this.fV = false;
  this.h7 = false;
  this.fU = null;
  this.ex = eventProp;
  this.fV = shouldUseCapture;
  this.h7 = shouldBePassive;
  this.fU = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.gK = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.fU.i(ev);
    return (this$2.j() ? $m_s_None$() : new $c_s_Some((this$2.Q(), value.Y())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.ex, this.fV, this.h7, newProcessor);
});
$p.sC = (function() {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.fU.i(ev);
    if (this$2.j()) {
      return $m_s_None$();
    } else {
      this$2.Q();
      var x = $m_Lcom_raquo_laminar_DomApi$().s0(ev.target);
      return new $c_s_Some((!(!((x === (void 0)) ? false : x))));
    }
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.ex, this.fV, this.h7, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  eg: 1
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
$p.bL = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  eh: 1
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
  this.qg = null;
  this.qh = null;
  this.qi = null;
  this.qj = null;
  this.qg = "http://www.w3.org/2000/svg";
  this.qh = "http://www.w3.org/1999/xlink";
  this.qi = "http://www.w3.org/XML/1998/namespace";
  this.qj = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.sG = (function(namespace) {
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
  el: 1
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
  this.nu = null;
  this.ir = null;
  this.nu = thisNode;
  this.ir = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  em: 1
}));
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().i(1, "com.raquo.laminar.modifiers.Modifier", ({
  U: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.qk = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.qk = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  er: 1
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
  this.iv = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.iv = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  ev: 1
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
  this.e = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.ts())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  eA: 1
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
$p.eL = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.eo(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pN(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().qS(parent.aa(), child.aa());
  if (appended) {
    child.ek(nextParent);
  }
  return appended;
});
$p.t5 = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().A(child.aa().parentNode, parent.aa())) {
    child.eo($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().t6(parent.aa(), child.aa());
    child.ek($m_s_None$());
  }
  return removed;
});
$p.sk = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.eo(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pN(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().si(parent.aa(), newChild.aa(), referenceChild.aa());
  newChild.ek(nextParent);
  return inserted;
});
$p.pW = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.fv().bm(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.eo($m_s_None$());
      newChild.eo(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.pN(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().tb(parent.aa(), newChild.aa(), oldChild.aa());
      if (replaced) {
        oldChild.ek($m_s_None$());
        newChild.ek(newChildNextParent);
      }
    }
  }
  return replaced;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  eD: 1
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
$p.ty = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gV(element.bV(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.i(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  eE: 1
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
  this.ql = null;
  $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = this;
  this.ql = $m_Lcom_raquo_laminar_receivers_ChildTextReceiver$();
}
$p = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildReceiver$, "com.raquo.laminar.receivers.ChildReceiver$", ({
  eK: 1
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
  eL: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildTextReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildTextReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildTextReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildTextReceiver$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cK("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().cK("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cK("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cK("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cK("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cK("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().iN.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.cm) << 24) >> 24) === 0)) {
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
    $thiz.iK = dict;
    $thiz.cm = (((1 | $thiz.cm) << 24) >> 24);
  }
  return $thiz.iK;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cm) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.iK);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.cm) << 24) >> 24) === 0)) {
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
    $thiz.iL = dict;
    $thiz.cm = (((2 | $thiz.cm) << 24) >> 24);
  }
  return $thiz.iL;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cm) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.iL);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cm) << 24) >> 24) === 0)) {
    $thiz.iJ = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cm = (((4 | $thiz.cm) << 24) >> 24);
  }
  return $thiz.iJ;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cm) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.iJ);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cK("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bY("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bY("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bY("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bY("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bY("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bY("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bY("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bY("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bY("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bY("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bY("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bY("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bY("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().bY("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cK("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cK("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cK("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cK("<anonymous function>"), "{anonymous}");
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
  this.iK = null;
  this.iL = null;
  this.iJ = null;
  this.cm = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.rJ = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  f6: 1
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
$p.cK = (function(this$) {
  return new RegExp(this$);
});
$p.bY = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  f7: 1
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
  result["java.vm.version"] = "1.20.1";
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
  this.iM = null;
  this.nQ = null;
  $n_jl_System$SystemProperties$ = this;
  this.iM = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.nQ = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.jU = (function(key, default$1) {
  if ((this.iM !== null)) {
    var dict = this.iM;
    return ((!(!$m_jl_Utils$Cache$().iN.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.nQ.jU(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  fc: 1
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
  this.iN = null;
  $n_jl_Utils$Cache$ = this;
  this.iN = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  ff: 1
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
$p.cA = (function(array) {
  return ((array instanceof $ac_O) ? array.b.length : ((array instanceof $ac_Z) ? array.b.length : ((array instanceof $ac_C) ? array.b.length : ((array instanceof $ac_B) ? array.b.length : ((array instanceof $ac_S) ? array.b.length : ((array instanceof $ac_I) ? array.b.length : ((array instanceof $ac_J) ? array.b.length : ((array instanceof $ac_F) ? array.b.length : ((array instanceof $ac_D) ? array.b.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  fh: 1
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
$p.r2 = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.b.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.b[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
$p.pq = (function(a, b) {
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
    var t = a.b[i$1];
    var lo = t.u;
    var hi = t.v;
    var i$2 = i;
    var t$1 = b.b[i$2];
    var lo$1 = t$1.u;
    var hi$1 = t$1.v;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.jH = (function(a, b) {
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
$p.pr = (function(a, b) {
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
$p.pn = (function(a, b) {
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
$p.pm = (function(a, b) {
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
$p.ps = (function(a, b) {
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
$p.po = (function(a, b) {
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
    if ((!Object.is($x_1, b.b[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.pp = (function(a, b) {
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
    if ((!Object.is($x_1, b.b[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.a9 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.b.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).a3.Q().a3.U(newLength);
  original.H(0, ret, 0, copyLength);
  return ret;
});
$p.ai = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.b.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).a3.Q().a3.U(retLength);
  original.H(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  fi: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.t4(a.u, a.v, b.u, b.v), this$1.T);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.t3(a.u, a.v, b.u, b.v), this$1.T);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.rA(a.u, a.v, b.u, b.v), this$1.T);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.rz(a.u, a.v, b.u, b.v), this$1.T);
}
function $s_RTLong__fromDoubleBits__D__O__RTLong(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  return new $c_RTLong((fpBitsDataView.getInt32(0, true) | 0), (fpBitsDataView.getInt32(4, true) | 0));
}
function $s_RTLong__fromDouble__D__RTLong(value) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.pP(value), this$1.T);
}
function $s_RTLong__fromUnsignedInt__I__RTLong(value) {
  return new $c_RTLong(value, 0);
}
function $s_RTLong__fromInt__I__RTLong(value) {
  return new $c_RTLong(value, (value >> 31));
}
function $s_RTLong__clz__RTLong__I(a) {
  var hi = a.v;
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(a.u)) | 0));
}
function $s_RTLong__toFloat__RTLong__F(a) {
  var lo = a.u;
  var hi = a.v;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__RTLong__D(a) {
  var lo = a.u;
  return ((4.294967296E9 * a.v) + (lo >>> 0.0));
}
function $s_RTLong__toInt__RTLong__I(a) {
  return a.u;
}
function $s_RTLong__bitsToDouble__RTLong__O__D(a, fpBitsDataView) {
  fpBitsDataView.setInt32(0, a.u, true);
  fpBitsDataView.setInt32(4, a.v, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__RTLong__RTLong__RTLong(a, b) {
  var alo = a.u;
  var blo = b.u;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.v) + Math.imul(a.v, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
}
function $s_RTLong__sub__RTLong__RTLong__RTLong(a, b) {
  var alo = a.u;
  var blo = b.u;
  var lo = ((alo - blo) | 0);
  return new $c_RTLong(lo, ((((a.v - b.v) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0));
}
function $s_RTLong__add__RTLong__RTLong__RTLong(a, b) {
  var alo = a.u;
  var blo = b.u;
  var lo = ((alo + blo) | 0);
  return new $c_RTLong(lo, ((((a.v + b.v) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0));
}
function $s_RTLong__sar__RTLong__I__RTLong(a, n) {
  var hi = a.v;
  return new $c_RTLong((((32 & n) === 0) ? (((a.u >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
}
function $s_RTLong__shr__RTLong__I__RTLong(a, n) {
  var hi = a.v;
  return new $c_RTLong((((32 & n) === 0) ? (((a.u >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
}
function $s_RTLong__shl__RTLong__I__RTLong(a, n) {
  var lo = a.u;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (a.v << n)) : (lo << n)));
}
function $s_RTLong__xor__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.u ^ b.u), (a.v ^ b.v));
}
function $s_RTLong__and__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.u & b.u), (a.v & b.v));
}
function $s_RTLong__or__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.u | b.u), (a.v | b.v));
}
function $s_RTLong__geu__RTLong__RTLong__Z(a, b) {
  var ahi = a.v;
  var bhi = b.v;
  return ((ahi === bhi) ? ((a.u >>> 0) >= (b.u >>> 0)) : ((ahi >>> 0) >= (bhi >>> 0)));
}
function $s_RTLong__gtu__RTLong__RTLong__Z(a, b) {
  var ahi = a.v;
  var bhi = b.v;
  return ((ahi === bhi) ? ((a.u >>> 0) > (b.u >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__RTLong__RTLong__Z(a, b) {
  var ahi = a.v;
  var bhi = b.v;
  return ((ahi === bhi) ? ((a.u >>> 0) <= (b.u >>> 0)) : ((ahi >>> 0) <= (bhi >>> 0)));
}
function $s_RTLong__ltu__RTLong__RTLong__Z(a, b) {
  var ahi = a.v;
  var bhi = b.v;
  return ((ahi === bhi) ? ((a.u >>> 0) < (b.u >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__RTLong__RTLong__Z(a, b) {
  var ahi = a.v;
  var bhi = b.v;
  return ((ahi === bhi) ? ((a.u >>> 0) >= (b.u >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__RTLong__RTLong__Z(a, b) {
  var ahi = a.v;
  var bhi = b.v;
  return ((ahi === bhi) ? ((a.u >>> 0) > (b.u >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__RTLong__RTLong__Z(a, b) {
  var ahi = a.v;
  var bhi = b.v;
  return ((ahi === bhi) ? ((a.u >>> 0) <= (b.u >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__RTLong__RTLong__Z(a, b) {
  var ahi = a.v;
  var bhi = b.v;
  return ((ahi === bhi) ? ((a.u >>> 0) < (b.u >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__RTLong__RTLong__Z(a, b) {
  return (!((a.u === b.u) && (a.v === b.v)));
}
function $s_RTLong__equals__RTLong__RTLong__Z(a, b) {
  return ((a.u === b.u) && (a.v === b.v));
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.u = 0;
  this.v = 0;
  this.u = lo;
  this.v = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.z = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.u === that.u) && (this.v === that.v)));
});
$p.E = (function() {
  return (this.u ^ this.v);
});
$p.D = (function() {
  return $m_RTLong$().pQ(this.u, this.v);
});
$p.tK = (function() {
  return ((this.u << 24) >> 24);
});
$p.tW = (function() {
  return ((this.u << 16) >> 16);
});
$p.tS = (function() {
  return this.u;
});
$p.tT = (function() {
  return this;
});
$p.tO = (function() {
  var lo = this.u;
  var hi = this.v;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
});
$p.tN = (function() {
  var lo = this.u;
  return ((4.294967296E9 * this.v) + (lo >>> 0.0));
});
$p.tM = (function(that) {
  return $m_RTLong$().pO(this.u, this.v, that.u, that.v);
});
$p.tL = (function(that) {
  return $m_RTLong$().pO(this.u, this.v, that.u, that.v);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bA)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  bA: 1
}));
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble / bDouble);
      $thiz.T = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.T = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.T = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.T = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, true);
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble % bDouble);
      $thiz.T = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.T = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.T = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.T = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, false);
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__Z__I($thiz, alo, ahi, blo, bhi, askQuotient) {
  var shift = ((((bhi !== 0) ? Math.clz32(bhi) : ((32 + Math.clz32(blo)) | 0)) - ((ahi !== 0) ? Math.clz32(ahi) : ((32 + Math.clz32(alo)) | 0))) | 0);
  var b = shift;
  var lo = (((32 & b) === 0) ? (blo << b) : 0);
  var hi = (((32 & b) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - b) | 0)) | 0) | (bhi << b)) : (blo << b));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? ((alo$1 >>> 0) >= (blo$1 >>> 0)) : ((ahi$1 >>> 0) >= (bhi$1 >>> 0)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((hi$1 - hi$2) | 0) + ((((~lo$1) & lo$2) | ((~(lo$1 ^ lo$2)) & lo$3)) >> 31)) | 0);
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? ((alo$2 >>> 0) >= (blo >>> 0)) : ((ahi$2 >>> 0) >= (bhi >>> 0)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + (lo$6 >>> 0.0));
    var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
    if (askQuotient) {
      var x = (remDouble / bDouble);
      var lo$7 = (x | 0.0);
      var hi$7 = ((x / 4.294967296E9) | 0.0);
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((hi$8 + hi$7) | 0) + ((((lo$8 & lo$7) | ((lo$8 | lo$7) & (~lo$9))) >>> 31) | 0)) | 0);
      $thiz.T = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = (remDouble % bDouble);
      $thiz.T = ((rem_mod_bDouble / 4.294967296E9) | 0.0);
      return (rem_mod_bDouble | 0.0);
    }
  } else if (askQuotient) {
    $thiz.T = quotHi;
    return quotLo;
  } else {
    $thiz.T = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.T = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.pQ = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = (+Math.floor((1.0E-9 * approxNum)));
    var approxRem = ((rlo - Math.imul(1000000000, (approxQuot | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = (((-1000000000) + approxRem) | 0);
    }
    var this$4 = approxRem;
    var remStr = ("" + this$4);
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.pP = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.T = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.T = 2147483647;
    return (-1);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((value / 4.294967296E9) | 0.0);
    this.T = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.pO = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (((alo >>> 0) < (blo >>> 0)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.rz = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.T = 0;
        return (-2147483648);
      } else {
        var lo = ((alo / $checkIntDivisor(blo)) | 0);
        this.T = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.T = (-1);
      return (-1);
    } else {
      this.T = 0;
      return 0;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi = this.T;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.T = hi$1;
      return lo$1;
    }
  }
});
$p.rA = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.T = 0;
      return (((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.T = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
$p.t3 = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      var lo = ((alo % $checkIntDivisor(blo)) | 0);
      this.T = (lo >> 31);
      return lo;
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.T = 0;
      return 0;
    } else {
      this.T = ahi;
      return alo;
    }
  } else {
    var sign = (ahi >> 31);
    var xlo = (alo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var sign$1 = (bhi >> 31);
    var xlo$1 = (blo ^ sign$1);
    var rlo$1 = ((xlo$1 - sign$1) | 0);
    var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, rlo, rhi, rlo$1, rhi$1);
    if ((ahi < 0)) {
      var hi = this.T;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.T = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
});
$p.t4 = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.T = 0;
      return (((alo >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.T = ahi;
      return alo;
    }
  } else {
    return $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  fl: 1
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
  this.iO = null;
  this.nU = null;
  $n_s_Array$EmptyArrays$ = this;
  this.iO = new $ac_I(0);
  this.nU = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  fr: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  aR: 1
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
  this.nV = null;
  this.hf = null;
  $n_s_PartialFunction$ = this;
  this.nV = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().nV));
  this.hf = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  fy: 1
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
  this.o0 = null;
  $n_sc_ArrayOps$ = this;
  this.o0 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().o0));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.rP = (function(this$, f) {
  var len = $m_jl_reflect_Array$().cA(this$);
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
      f.i(this$.b[i]);
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
  fG: 1
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
$p.cH = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  fS: 1
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
  while (it.x()) {
    f.i(it.n());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.r();
  while ((res && it.x())) {
    res = (!(!p.i(it.n())));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.J()) {
    case (-1): {
      return (!$thiz.r().x());
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
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $thiz.r();
  var i = start;
  var y = (($m_jl_reflect_Array$().cA(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.x())) {
    $m_sr_ScalaRunTime$().jv(xs, i, it.n());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.J() === 0) ? (("" + start) + end) : $thiz.e8($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).b0.B);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.b0;
  if ((start.length !== 0)) {
    jsb.B = (("" + jsb.B) + start);
  }
  var it = $thiz.r();
  if (it.x()) {
    var obj = it.n();
    jsb.B = (("" + jsb.B) + obj);
    while (it.x()) {
      jsb.B = (("" + jsb.B) + sep);
      var obj$1 = it.n();
      jsb.B = (("" + jsb.B) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.B = (("" + jsb.B) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.J() >= 0)) {
    var destination = evidence$2.bN($thiz.J());
    $thiz.cf(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.ba();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.r();
    while (it.x()) {
      var elem = it.n();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a3.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.a3.r().w(jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.o7 = null;
  this.g2 = null;
  this.o7 = head;
  this.g2 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.sa = (function() {
  return this.o7.Y().r();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  g1: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.oa = null;
  $n_sc_StringOps$ = this;
  this.oa = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().oa));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.rh = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  g8: 1
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
$p.gI = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  gc: 1
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
    return $m_jl_Integer$().pF($m_jl_System$SystemProperties$().jU("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
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
  this.od = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.od = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  gl: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.j9 = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.jI = (function() {
  var state = this.j9;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.Y();
});
$p.jY = (function(state) {
  if ((this.j9 !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.j9 = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  gp: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.oi = null;
  $n_sci_MapNode$ = this;
  this.oi = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  gH: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().cA(as)) | 0)));
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
$p.pT = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > (((-1) + as.b.length) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I((((-1) + as.b.length) | 0));
  as.H(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + ((as.b.length - ix) | 0)) | 0);
  as.H(srcPos, result, ix, length);
  return result;
});
$p.sl = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.b.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.b.length) | 0));
  as.H(0, result, 0, ix);
  result.b[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.b.length - ix) | 0);
  as.H(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  b2: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.gf = 0;
  $n_sci_Node$ = this;
  this.gf = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.eY = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.ea = (function(mask) {
  return (1 << mask);
});
$p.sd = (function(bitmap, bitpos) {
  return $m_jl_Integer$().cV((bitmap & (((-1) + bitpos) | 0)));
});
$p.d0 = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.sd(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  gK: 1
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
  this.jd = null;
  this.bK = null;
  this.cU = null;
  this.fs = null;
  this.je = null;
  this.om = null;
  $n_sci_VectorStatics$ = this;
  this.jd = new $ac_O(0);
  this.bK = new ($d_O.r().r().C)(0);
  this.cU = new ($d_O.r().r().r().C)(0);
  this.fs = new ($d_O.r().r().r().r().C)(0);
  this.je = new ($d_O.r().r().r().r().r().C)(0);
  this.om = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.fx = (function(a, elem) {
  var alen = a.b.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.H(0, ac, 0, alen);
  ac.b[alen] = elem;
  return ac;
});
$p.O = (function(a, elem) {
  var ac = $m_ju_Arrays$().a9(a, ((1 + a.b.length) | 0));
  ac.b[(((-1) + ac.b.length) | 0)] = elem;
  return ac;
});
$p.cW = (function(elem, a) {
  var ac = $objectGetClass(a).a3.Q().a3.U(((1 + a.b.length) | 0));
  var length$1 = a.b.length;
  a.H(0, ac, 1, length$1);
  ac.b[0] = elem;
  return ac;
});
$p.jK = (function(level, a, f) {
  var i = 0;
  var len = a.b.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.i(a.b[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.jK(l, a.b[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.cC = (function(a, f) {
  var i = 0;
  while ((i < a.b.length)) {
    var v1 = a.b[i];
    var v2 = f.i(v1);
    if ((!Object.is(v1, v2))) {
      return this.sz(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.sz = (function(a, f, at, v2) {
  var ac = new $ac_O(a.b.length);
  if ((at > 0)) {
    a.H(0, ac, 0, at);
  }
  ac.b[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.b.length)) {
    ac.b[i] = f.i(a.b[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.ah = (function(n, a, f) {
  if ((n === 1)) {
    return this.cC(a, f);
  } else {
    var i = 0;
    while ((i < a.b.length)) {
      var v1 = a.b[i];
      var v2 = this.ah((((-1) + n) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.sA(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.sA = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).a3.Q().a3.U(a.b.length);
  if ((at > 0)) {
    a.H(0, ac, 0, at);
  }
  ac.b[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.b.length)) {
    ac.b[i] = this.ah((((-1) + n) | 0), a.b[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  h1: 1
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
  this.eH = null;
  this.di = 0;
  this.aZ = null;
  this.eH = _key;
  this.di = _hash;
  this.aZ = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.rL = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.di) && $m_sr_BoxesRunTime$().A(k, _$this.eH))) {
      return _$this;
    } else if (((_$this.aZ === null) || (_$this.di > h))) {
      return null;
    } else {
      _$this = _$this.aZ;
    }
  }
});
$p.aj = (function(f) {
  var _$this = this;
  while (true) {
    f.i(_$this.eH);
    if ((_$this.aZ !== null)) {
      _$this = _$this.aZ;
      continue;
    }
    break;
  }
});
$p.D = (function() {
  return ((((("Node(" + this.eH) + ", ") + this.di) + ") -> ") + this.aZ);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  hl: 1
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
$p.p9 = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  hr: 1
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
$p.A = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.rI(x, y) : ((x instanceof $Char) ? this.rG(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.rI = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.rH(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.u;
      var hi = t.v;
      var value = y.c;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.rH = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.u;
      return (x2 === ((4.294967296E9 * t.v) + (lo >>> 0.0)));
    } else {
      return (false && yn.z(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.u;
    var hi$1 = t$1.v;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.u;
      var hi$2 = t$2.v;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * hi$1) + (lo$1 >>> 0.0)) === x3$3);
    } else {
      return (false && yn.z(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.rG = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.u;
      var hi = t.v;
      var value = xc.c;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  i0: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  i4: 1
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
$p.eO = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.b[idx];
  } else if ((xs instanceof $ac_I)) {
    return xs.b[idx];
  } else if ((xs instanceof $ac_D)) {
    return xs.b[idx];
  } else if ((xs instanceof $ac_J)) {
    return xs.b[idx];
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
$p.jv = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.b[idx] = value;
  } else if ((xs instanceof $ac_I)) {
    xs.b[idx] = (value | 0);
  } else if ((xs instanceof $ac_D)) {
    xs.b[idx] = (+value);
  } else if ((xs instanceof $ac_J)) {
    xs.b[idx] = $uJ(value);
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
$p.jq = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bB(), (x.aD() + "("), ",", ")");
});
$p.rX = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().hS(xs));
});
$p.c = (function(xs) {
  return ((xs === null) ? null : ((xs.b.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  i6: 1
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
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.dq = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.N = (function(hash, length) {
  return this.r1((hash ^ length));
});
$p.r1 = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.fB = (function(lv) {
  var lo = lv.u;
  var hi = lv.v;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.cG = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.pP(dv);
    var hi = this$1.T;
    if ((((4.294967296E9 * hi) + (lo >>> 0.0)) === dv)) {
      return (lo ^ hi);
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
$p.a2 = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.cG((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.fB(new $c_RTLong(t.u, t.v));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.eW = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  i8: 1
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
  i9: 1
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
$p.qV = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  ig: 1
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
$p.tm = (function(interval, body) {
  return setTimeout((() => {
    body.Y();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  ih: 1
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
$p.tt = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hu;
  } else {
    var result = [];
    seq.aj(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  it: 1
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
$p.eN = (function(t) {
  return (!(false || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  iw: 1
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
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.dq = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.N = (function(hash, length) {
  return this.bZ((hash ^ length));
});
$p.bZ = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.q8 = (function(x, y, seed) {
  var h = seed;
  h = this.m(h, $f_T__hashCode__I("Tuple2"));
  h = this.m(h, x);
  h = this.m(h, y);
  return this.N(h, 2);
});
$p.d2 = (function(x, seed, ignorePrefix) {
  var arr = x.aB();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.aD());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.m(h, $f_T__hashCode__I(x.aD()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.m(h, $m_sr_Statics$().a2(x.aC(i)));
      i = ((1 + i) | 0);
    }
    return this.N(h, arr);
  }
});
$p.kl = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.r();
  while (iterator.x()) {
    var x = iterator.n();
    var h = $m_sr_Statics$().a2(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.m(h$2, a);
  h$2 = this.m(h$2, b);
  h$2 = this.dq(h$2, c);
  return this.N(h$2, n);
});
$p.sV = (function(xs, seed) {
  var it = xs.r();
  var h = seed;
  if ((!it.x())) {
    return this.N(h, 0);
  }
  var x0 = it.n();
  if ((!it.x())) {
    return this.N(this.m(h, $m_sr_Statics$().a2(x0)), 1);
  }
  var x1 = it.n();
  var initial = $m_sr_Statics$().a2(x0);
  h = this.m(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().a2(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.x()) {
    h = this.m(h, prev);
    var hash = $m_sr_Statics$().a2(it.n());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.m(h, hash);
      i = ((1 + i) | 0);
      while (it.x()) {
        h = this.m(h, $m_sr_Statics$().a2(it.n()));
        i = ((1 + i) | 0);
      }
      return this.N(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.bZ(this.m(this.m(h0, rangeDiff), prev));
});
$p.oY = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().cA(a);
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      return this.N(this.m(h, $m_sr_Statics$().a2($m_sr_ScalaRunTime$().eO(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a2($m_sr_ScalaRunTime$().eO(a, 0));
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a2($m_sr_ScalaRunTime$().eO(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().a2($m_sr_ScalaRunTime$().eO(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().a2($m_sr_ScalaRunTime$().eO(a, i)));
            i = ((1 + i) | 0);
          }
          return this.N(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.t0 = (function(start, step, last, seed) {
  return this.bZ(this.m(this.m(this.m(seed, start), step), last));
});
$p.se = (function(a, seed) {
  var h = seed;
  var l = a.C();
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      return this.N(this.m(h, $m_sr_Statics$().a2(a.F(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a2(a.F(0));
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a2(a.F(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().a2(a.F(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().a2(a.F(i)));
            i = ((1 + i) | 0);
          }
          return this.N(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.st = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.j())) {
    var head = elems.w();
    var tail = elems.y();
    var hash = $m_sr_Statics$().a2(head);
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
  return ((rangeState === 2) ? this.t0(initial, rangeDiff, prev, seed) : this.N(h, n));
});
$p.p7 = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      return this.N(this.m(h, (a.b[0] ? 1231 : 1237)), 1);
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
          return this.N(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.oZ = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      return this.N(this.m(h, a.b[0]), 1);
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
          return this.N(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.p0 = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      return this.N(this.m(h, a.b[0]), 1);
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
          return this.N(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.p1 = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      return this.N(this.m(h, $m_sr_Statics$().cG(a.b[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cG(a.b[0]);
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cG(a.b[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().cG(a.b[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().cG(a.b[i]));
            i = ((1 + i) | 0);
          }
          return this.N(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.p2 = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      return this.N(this.m(h, $m_sr_Statics$().cG(a.b[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cG(a.b[0]);
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cG(a.b[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().cG(a.b[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().cG(a.b[i]));
            i = ((1 + i) | 0);
          }
          return this.N(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.p3 = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      return this.N(this.m(h, a.b[0]), 1);
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
          return this.N(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.p4 = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = a.b[0];
      return this.N(this.m($x_1, $m_sr_Statics$().fB(new $c_RTLong(t.u, t.v))), 1);
      break;
    }
    default: {
      var t$1 = a.b[0];
      var initial = $m_sr_Statics$().fB(new $c_RTLong(t$1.u, t$1.v));
      h = this.m(h, initial);
      var h0 = h;
      var t$2 = a.b[1];
      var prev = $m_sr_Statics$().fB(new $c_RTLong(t$2.u, t$2.v));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var t$3 = a.b[i];
        var hash = $m_sr_Statics$().fB(new $c_RTLong(t$3.u, t$3.v));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.b[i];
            h = this.m($x_2, $m_sr_Statics$().fB(new $c_RTLong(t$4.u, t$4.v)));
            i = ((1 + i) | 0);
          }
          return this.N(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.p5 = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      return this.N(this.m(h, a.b[0]), 1);
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
          return this.N(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.p6 = (function(a, seed) {
  var h = seed;
  var l = a.b.length;
  switch (l) {
    case 0: {
      return this.N(h, 0);
      break;
    }
    case 1: {
      return this.N(this.m(h, 0), 1);
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
          return this.N(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.bZ(this.m(this.m(h0, rangeDiff), prev));
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
  cx: 1,
  cw: 1
}));
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.hM(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.gP(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.gP(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.la = null;
  this.l9 = null;
  this.i8 = false;
  this.l9 = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.i8 = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.fF = (function() {
  return this.la;
});
$p.pc = (function(x$0) {
  this.la = x$0;
});
$p.pR = (function(subscription) {
  if (this.i8) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.l9.Y();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.pH = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.i8 = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  ds: 1,
  bh: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.m1 = null;
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
$p.fF = (function() {
  return this.m1;
});
$p.pc = (function(x$0) {
  this.m1 = x$0;
});
$p.pH = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.pR = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  dN: 1,
  bh: 1
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
$p.gC = (function(scalaValue) {
  return scalaValue;
});
$p.jF = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  dT: 1,
  bk: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.ns = null;
  this.nt = null;
  this.ik = null;
  this.ij = null;
  this.ns = getRawDomValue;
  this.nt = setRawDomValue;
  this.ik = separator;
  this.ij = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.f = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().a.hz(), $m_Lcom_raquo_laminar_keys_CompositeKey$().kb(items, this.ik)));
});
$p.jp = (function(items, valueMapper) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, items.f1(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextRawItems, thisBinder) => {
    var currentNormalizedItems = $f_Lcom_raquo_laminar_nodes_ReactiveElement__compositeValueItems__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List(element, this, thisBinder);
    var nextNormalizedItems = $m_Lcom_raquo_laminar_keys_CompositeKey$().kb(nextRawItems, this.ik);
    var f = ((elem) => currentNormalizedItems.bm(elem));
    var l = nextNormalizedItems;
    block: {
      var result;
      while (true) {
        if (l.j()) {
          var result = $m_sci_Nil$();
          break;
        } else {
          var h = l.w();
          var t = l.y();
          if (((!(!f(h))) === true)) {
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
              if (((!(!f(x))) !== true)) {
                remaining = remaining.y();
                continue;
              }
              var firstMiss = remaining;
              var newHead = new $c_sci_$colon$colon(start.w(), $m_sci_Nil$());
              var toProcess = start.y();
              var currentLast = newHead;
              while ((toProcess !== firstMiss)) {
                var newElem = new $c_sci_$colon$colon(toProcess.w(), $m_sci_Nil$());
                currentLast.a1 = newElem;
                currentLast = newElem;
                toProcess = toProcess.y();
              }
              var next = firstMiss.y();
              var nextToCopy = next;
              while ((!next.j())) {
                var head = next.w();
                if (((!(!f(head))) !== true)) {
                  next = next.y();
                } else {
                  while ((nextToCopy !== next)) {
                    var newElem$2 = new $c_sci_$colon$colon(nextToCopy.w(), $m_sci_Nil$());
                    currentLast.a1 = newElem$2;
                    currentLast = newElem$2;
                    nextToCopy = nextToCopy.y();
                  }
                  nextToCopy = next.y();
                  next = next.y();
                }
              }
              if ((!nextToCopy.j())) {
                currentLast.a1 = nextToCopy;
              }
              var result = newHead;
              break block;
            }
          }
        }
      }
    }
    var f$1 = ((elem$2) => nextNormalizedItems.bm(elem$2));
    var l$1 = currentNormalizedItems;
    block$2: {
      var $x_1;
      while (true) {
        if (l$1.j()) {
          var $x_1 = $m_sci_Nil$();
          break;
        } else {
          var h$1 = l$1.w();
          var t$1 = l$1.y();
          if (((!(!f$1(h$1))) === true)) {
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
              if (((!(!f$1(x$1))) !== true)) {
                remaining$1 = remaining$1.y();
                continue;
              }
              var firstMiss$1 = remaining$1;
              var newHead$1 = new $c_sci_$colon$colon(start$1.w(), $m_sci_Nil$());
              var toProcess$1 = start$1.y();
              var currentLast$1 = newHead$1;
              while ((toProcess$1 !== firstMiss$1)) {
                var newElem$1 = new $c_sci_$colon$colon(toProcess$1.w(), $m_sci_Nil$());
                currentLast$1.a1 = newElem$1;
                currentLast$1 = newElem$1;
                toProcess$1 = toProcess$1.y();
              }
              var next$1 = firstMiss$1.y();
              var nextToCopy$1 = next$1;
              while ((!next$1.j())) {
                var head$1 = next$1.w();
                if (((!(!f$1(head$1))) !== true)) {
                  next$1 = next$1.y();
                } else {
                  while ((nextToCopy$1 !== next$1)) {
                    var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.w(), $m_sci_Nil$());
                    currentLast$1.a1 = newElem$2$1;
                    currentLast$1 = newElem$2$1;
                    nextToCopy$1 = nextToCopy$1.y();
                  }
                  nextToCopy$1 = next$1.y();
                  next$1 = next$1.y();
                }
              }
              if ((!nextToCopy$1.j())) {
                currentLast$1.a1 = nextToCopy$1;
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
  eb: 1,
  ax: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.il = null;
  this.il = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.pj = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().kb(domValue, this.il);
});
$p.pl = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.il, "");
});
$p.jF = (function(domValue) {
  return this.pj(domValue);
});
$p.gC = (function(scalaValue) {
  return this.pl(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  ed: 1,
  bk: 1
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
  ef: 1,
  ee: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.fW = null;
  this.fW = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  ei: 1,
  ax: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.fX = null;
  this.im = null;
  this.fX = name;
  this.im = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.k = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().q3(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  ej: 1,
  ax: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.d6 = null;
  this.io = null;
  this.d6 = name;
  this.io = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.k = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().q4(element, prop, value$2);
  })));
});
$p.qB = (function(values) {
  var update = ((this.d6 === "value") ? new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextValue, reason) => {
    var nextDomValue = this.io.gC(nextValue);
    var x = $m_Lcom_raquo_laminar_DomApi$().s3(element, this);
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().A(nextDomValue, x)))) {
      $m_Lcom_raquo_laminar_DomApi$().q5(element, this, nextDomValue);
    }
  })) : new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element$2, nextValue$2, reason$2) => {
    $m_Lcom_raquo_laminar_DomApi$().q4(element$2, this, nextValue$2);
  })));
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.f1(), update);
});
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bn)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bn: 1,
  ax: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.iq = null;
  this.ip = null;
  this.h8 = null;
  this.h9 = null;
  this.iq = localName;
  this.ip = codec;
  var this$1 = (namespacePrefix.j() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.Q() + ":") + localName)));
  this.h8 = (this$1.j() ? localName : this$1.Q());
  this.h9 = (namespacePrefix.j() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().sG(namespacePrefix.Q())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
$p.k = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().q6(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  ek: 1,
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
$p.cx = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  es: 1,
  U: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.nC = null;
  this.nC = f$2;
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
$p.cx = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.nC.i(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bu || (!when))) {
    f();
  } else {
    this$2.bu = true;
    try {
      f();
    } finally {
      this$2.bu = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  et: 1,
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
  ew: 1,
  eu: 1
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
  ey: 1,
  ex: 1
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
  this.nD = null;
  this.nD = render$2;
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
$p.jw = (function(value) {
  return this.nD.i(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  eB: 1,
  ez: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.jy(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().rx($thiz.aa(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.iF = null;
  this.iF = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.d = (function(modifiers) {
  var element = this.r5();
  modifiers.aj(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.cx(element);
  })));
  return element;
});
$p.r5 = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().rp(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  eN: 1,
  br: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.iG = null;
  this.iG = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
$p.aT = (function(modifiers) {
  var element = this.r6();
  modifiers.aj(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.cx(element);
  })));
  return element;
});
$p.r6 = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, $m_Lcom_raquo_laminar_DomApi$().ph(this));
});
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  eO: 1,
  br: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.hb) << 24) >> 24) === 0)) {
    $thiz.iH = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.hb = (((32 | $thiz.hb) << 24) >> 24);
  }
  return $thiz.iH;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.hb) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.iH);
}
/** @constructor */
function $c_jl_Character$() {
  this.iH = null;
  this.hb = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.tu = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.ry = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().r2($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).b[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  eT: 1,
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
$p.gJ = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.pF = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    this.gJ(s);
  }
  var len = s.length;
  if ((len === 0)) {
    this.gJ(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    this.gJ(s);
  }
  var result = 0;
  while ((i !== len)) {
    var digit = character.ry(s.charCodeAt(i), radix);
    if (((digit === (-1)) || ((result >>> 0) > (overflowBarrier >>> 0)))) {
      this.gJ(s);
    }
    result = ((Math.imul(result, radix) + digit) | 0);
    i = ((1 + i) | 0);
  }
  if (((result >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    this.gJ(s);
  }
  return (((result ^ sign) - sign) | 0);
});
$p.cV = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  eY: 1,
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
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.fh = null;
  this.fY = null;
  this.fi = null;
  this.fj = 0;
  this.fg = 0;
  this.fh = declaringClass;
  this.fY = methodName;
  this.fi = fileName;
  this.fj = lineNumber;
  this.fg = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.z = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.fi === that.fi) && (this.fj === that.fj)) && (this.fg === that.fg)) && (this.fh === that.fh)) && (this.fY === that.fY)));
});
$p.D = (function() {
  var result = "";
  if ((this.fh !== "<jscode>")) {
    result = ((("" + result) + this.fh) + ".");
  }
  result = (("" + result) + this.fY);
  if ((this.fi === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.fi);
    if ((this.fj >= 0)) {
      result = ((result + ":") + this.fj);
      if ((this.fg >= 0)) {
        result = ((result + ":") + this.fg);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.E = (function() {
  return (((($f_T__hashCode__I(this.fh) ^ $f_T__hashCode__I(this.fY)) ^ $f_T__hashCode__I(this.fi)) ^ this.fj) ^ this.fg);
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
$p.sI = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > value.b.length))) {
    throw new $c_jl_StringIndexOutOfBoundsException();
  }
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.b[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  f9: 1,
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
  $thiz.nS = s;
  $thiz.nT = writableStackTrace;
  if (writableStackTrace) {
    $thiz.rK();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.nS = null;
    this.nT = false;
    this.nR = null;
    this.hc = null;
  }
  jZ(cause) {
    return this;
  }
  gH() {
    return this.nS;
  }
  rK() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ag : this);
    this.nR = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  s5() {
    if ((this.hc === null)) {
      if (this.nT) {
        this.hc = $m_jl_StackTrace$().rJ(this.nR);
      } else {
        this.hc = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.hc;
  }
  D() {
    var className = $objectClassName(this);
    var message = this.gH();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  E() {
    return $c_O.prototype.E.call(this);
  }
  z(that) {
    return $c_O.prototype.z.call(this, that);
  }
  get "message"() {
    var m = this.gH();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.D();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.hd = null;
  $n_s_$less$colon$less$ = this;
  this.hd = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  fo: 1,
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
    $m_sr_ScalaRunTime$().jv(dest, j, $m_sr_ScalaRunTime$().eO(src, i));
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
$p.pw = (function(it, evidence$3) {
  var n = it.J();
  if ((n > (-1))) {
    var elements = evidence$3.bN(n);
    var iterator = it.r();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().jv(elements, i, iterator.n());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.ba();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.r();
    while (iterator$2.x()) {
      var elem = iterator$2.n();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a3.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.a3.r().w(jsElems);
  }
});
$p.gA = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.a3.Z && $objectGetClass(dest).a3.R(srcClass.a3))) {
    src.H(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.pt = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.b.length !== ys.b.length)) {
    return false;
  }
  var len = xs.b.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().A(xs.b[i], ys.b[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  fq: 1,
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
$p.km = (function(xs) {
  return ((xs === null) ? null : ((xs.b.length === 0) ? $m_scm_ArraySeq$().oq : new $c_scm_ArraySeq$ofRef(xs)));
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.cB(x) ? $thiz.i(x) : default$1.i(x));
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
$p.D = (function() {
  return "<function1>";
});
$p.i = (function(x) {
  return this;
});
var $d_sci_List$$anon$1 = new $TypeData().i($c_sci_List$$anon$1, "scala.collection.immutable.List$$anon$1", ({
  gu: 1,
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
    $thiz.bk($m_scm_Buffer$().hH(elems));
  } else {
    var it = elems.r();
    while (it.x()) {
      $thiz.b7(it.n());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.qq = null;
  this.qz = null;
  this.qr = null;
  this.qu = null;
  this.qv = null;
  this.qt = null;
  this.qs = null;
  this.qp = null;
  this.qA = null;
  this.qn = null;
  this.qy = null;
  this.qo = null;
  this.qw = null;
  this.qx = null;
  $n_s_reflect_ClassTag$ = this;
  this.qq = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.qz = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.qr = $m_s_reflect_ManifestFactory$CharManifest$();
  this.qu = $m_s_reflect_ManifestFactory$IntManifest$();
  this.qv = $m_s_reflect_ManifestFactory$LongManifest$();
  this.qt = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.qs = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.qp = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.qA = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.qn = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.qy = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qo = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qw = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.qx = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.oW = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  hw: 1,
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
$p.D = (function() {
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
$p.D = (function() {
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
$p.D = (function() {
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
$p.D = (function() {
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
$p.D = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.hr = false;
  this.hr = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.D = (function() {
  return ("" + this.hr);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  hZ: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.eI = 0;
  this.eI = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.D = (function() {
  return ("" + this.eI);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  i1: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.hs = false;
  this.ht = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.sg = (function(value) {
  this.ht = value;
  this.hs = true;
  return value;
});
$p.D = (function() {
  return ("LazyRef " + (this.hs ? ("of: " + this.ht) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  i2: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.az = null;
  this.az = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.D = (function() {
  return ("" + this.az);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  i5: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.aA = 0;
  this.e7 = 0;
  this.oH = 0;
  this.jo = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.aA = $f_T__hashCode__I("Seq");
  this.e7 = $f_T__hashCode__I("Map");
  this.oH = $f_T__hashCode__I("Set");
  this.jo = this.kl($m_sci_Nil$(), this.e7);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cN = (function(x, y) {
  return this.q8($m_sr_Statics$().a2(x), $m_sr_Statics$().a2(y), (-889275714));
});
$p.q2 = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.se(xs, this.aA) : ((xs instanceof $c_sci_List) ? this.st(xs, this.aA) : this.sV(xs, this.aA)));
});
$p.sB = (function(xs) {
  if (xs.j()) {
    return this.jo;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.e7;
    xs.eR(accum);
    h = this.m(h, accum.hv);
    h = this.m(h, accum.hw);
    h = this.dq(h, accum.hx);
    return this.N(h, accum.hy);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  iy: 1,
  ix: 1
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
  this.hv = 0;
  this.hw = 0;
  this.hy = 0;
  this.hx = 0;
  this.hv = 0;
  this.hw = 0;
  this.hy = 0;
  this.hx = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.D = (function() {
  return "<function2>";
});
$p.qU = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cN(k, v);
  this.hv = ((this.hv + h) | 0);
  this.hw = (this.hw ^ h);
  this.hx = Math.imul(this.hx, (1 | h));
  this.hy = ((1 + this.hy) | 0);
});
$p.eM = (function(v1, v2) {
  this.qU(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  iz: 1,
  aS: 1
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
  this.kn = null;
  $n_Lccrystal_site_Tab$ = this;
  $t_Lccrystal_site_Tab$__Manifesto = new $c_Lccrystal_site_Tab$$anon$1();
  $t_Lccrystal_site_Tab$__Explorer = new $c_Lccrystal_site_Tab$$anon$2();
  $t_Lccrystal_site_Tab$__Quickstart = new $c_Lccrystal_site_Tab$$anon$3();
  $t_Lccrystal_site_Tab$__Mcp = new $c_Lccrystal_site_Tab$$anon$4();
  $t_Lccrystal_site_Tab$__AgentIngestion = new $c_Lccrystal_site_Tab$$anon$5();
  this.kn = new ($d_Lccrystal_site_Tab.r().C)([$s_Lccrystal_site_Tab$__Manifesto__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__Explorer__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__Quickstart__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__Mcp__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__AgentIngestion__Lccrystal_site_Tab()]);
}
$p = $c_Lccrystal_site_Tab$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_Tab$;
/** @constructor */
function $h_Lccrystal_site_Tab$() {
}
$h_Lccrystal_site_Tab$.prototype = $p;
$p.tD = (function() {
  return this.kn.o();
});
var $d_Lccrystal_site_Tab$ = new $TypeData().i($c_Lccrystal_site_Tab$, "ccrystal.site.Tab$", ({
  cD: 1,
  a0: 1,
  b7: 1
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
  this.ko = null;
  $n_Lccrystal_site_TabExplorer$Scenario$ = this;
  $t_Lccrystal_site_TabExplorer$Scenario$__Inception = new $c_Lccrystal_site_TabExplorer$Scenario$$anon$1();
  $t_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike = new $c_Lccrystal_site_TabExplorer$Scenario$$anon$2();
  $t_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact = new $c_Lccrystal_site_TabExplorer$Scenario$$anon$3();
  this.ko = new ($d_Lccrystal_site_TabExplorer$Scenario.r().C)([$s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario(), $s_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike__Lccrystal_site_TabExplorer$Scenario(), $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario()]);
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$() {
}
$h_Lccrystal_site_TabExplorer$Scenario$.prototype = $p;
$p.tE = (function() {
  return this.ko.o();
});
var $d_Lccrystal_site_TabExplorer$Scenario$ = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$, "ccrystal.site.TabExplorer$Scenario$", ({
  cL: 1,
  a0: 1,
  b7: 1
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
  this.hY = null;
  this.kz = null;
  this.kA = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.hY = $m_scm_Buffer$().oX($m_sr_ScalaRunTime$().c(new ($d_F1.r().C)([])));
  this.kz = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.eS(err) + "\n") + this.s4(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.kA = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ag : $x_1);
  }));
  this.t1(this.kz);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.eS = (function(e) {
  try {
    var errorMessage = e.gH();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).jV() + ": ") + errorMessage);
});
$p.s4 = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().km(err.s5()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.re = (function(causes) {
  return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(causes.eQ($m_s_$less$colon$less$().hd).a5(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => this.eS(e)))), "", "; ", ""));
});
$p.t1 = (function(fn) {
  this.hY.b7(fn);
});
$p.cL = (function(err) {
  var this$1 = this.hY;
  var it = this$1.r();
  while (it.x()) {
    var x0 = it.n();
    try {
      x0.i(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.kA;
      if (((x0 === null) ? (x$2 === null) : x0.z(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().tm(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  d4: 1,
  a0: 1,
  b7: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cI(true);
  $thiz.fD((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().qc(onNext, $m_s_PartialFunction$().hf, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fA()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fA()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz) {
  return ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) > 0);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz) {
  var x = $thiz.eh();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_F0.r().C)([])));
    $thiz.fD(newArray);
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
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.jw(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).aj(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().eL(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.lr = null;
  this.ls = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.sU = (function() {
  if ((!this.ls)) {
    this.lr = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.ls = true;
  }
  return this.lr;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  dL: 1,
  bl: 1,
  dY: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.nv = null;
  this.is = null;
  this.nv = key;
  this.is = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.cx = (function(element) {
  if ((!this.is.j())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.nv, null, this.is, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  en: 1,
  U: 1,
  bp: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.ff = null;
  this.it = null;
  this.iu = null;
  this.ff = eventProcessor;
  this.it = ((ev) => {
    var processor = eventProcessor.fU;
    var this$2 = processor.i(ev);
    if ((!this$2.j())) {
      callback.i(this$2.Q());
    }
  });
  this.iu = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.ff.fV;
    this$3.passive = outer.ff.h7;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.cx = (function(element) {
  this.r3(element, false);
});
$p.r3 = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().qH(element.aa(), this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.ir, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().t7(element.aa(), this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().ty(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gV(element.bV(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.i(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().q7(element.bV(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.i(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.D = (function() {
  return (("EventListener(" + this.ff.ex.fW) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  eo: 1,
  U: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.nx = null;
  this.ny = null;
  this.nw = null;
  this.nx = key;
  this.ny = value;
  this.nw = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.cx = (function(element) {
  this.nw.hD(element, this.nx, this.ny);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  ep: 1,
  U: 1,
  bp: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.nz = null;
  this.nB = null;
  this.nA = null;
  this.nz = key;
  this.nB = values;
  this.nA = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.cx = (function(element) {
  this.jx(element);
});
$p.jx = (function(element) {
  element.pK(this.nz);
  var observable = this.nB;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.nA.hD(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().tn(element.bV(), observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  eq: 1,
  U: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.iD = null;
  this.nO = null;
  this.nP = null;
  this.nO = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().sr(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.nP = container;
  this.sF();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.bV = (function() {
  return this.iD;
});
$p.jy = (function(x$0) {
  this.iD = x$0;
});
$p.sF = (function() {
  this.iD.oK();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().eL(this, this.nO, (void 0));
});
$p.aa = (function() {
  return this.nP;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  eI: 1,
  ay: 1,
  aO: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eM)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.a3.Z) {
    return ($thiz.a3.Q().jV() + "[]");
  } else {
    var name = $thiz.a3.N;
    var idx = (((-1) + name.length) | 0);
    while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
      idx = (((-1) + idx) | 0);
    }
    if ((idx >= 0)) {
      var index$1 = idx;
      var c = name.charCodeAt(index$1);
      var $x_1 = ((c >= 48) && (c <= 57));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      idx = (((-1) + idx) | 0);
      while (true) {
        if ((idx >= 0)) {
          var index$2 = idx;
          var c$1 = name.charCodeAt(index$2);
          var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          idx = (((-1) + idx) | 0);
        } else {
          break;
        }
      }
      while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
        idx = (((-1) + idx) | 0);
      }
    }
    while (true) {
      if ((idx >= 0)) {
        var index$4 = idx;
        var currChar = name.charCodeAt(index$4);
        var $x_3 = ((currChar !== 46) && (currChar !== 36));
      } else {
        var $x_3 = false;
      }
      if ($x_3) {
        idx = (((-1) + idx) | 0);
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
  this.iI = null;
  this.a3 = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.D = (function() {
  return ((this.a3.Y ? "interface " : (this.a3.X ? "" : "class ")) + this.a3.N);
});
$p.jV = (function() {
  if ((this.iI === null)) {
    this.iI = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.iI;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  eU: 1,
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
  D: 1,
  u: 1,
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
  this.qm = null;
  $n_s_Predef$ = this;
  this.qm = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.tc = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  fA: 1,
  fu: 1,
  fv: 1
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
      return $thiz.bq();
      break;
    }
    case 1: {
      return $thiz.bj();
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
      return $thiz.fk;
      break;
    }
    case 1: {
      return $thiz.fl;
      break;
    }
    case 2: {
      return $thiz.fm;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.g0 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.g0 = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.av = (function(it) {
  return this.g0.jL(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aw = (function() {
  return this.g0.hL($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.dm = (function(elems) {
  return this.g0.jL(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.hg = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.hg = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.av = (function(it) {
  return this.hg.av(it);
});
$p.aw = (function() {
  return this.hg.aw();
});
function $f_sc_IterableOps__headOption__s_Option($thiz) {
  var it = $thiz.r();
  return (it.x() ? new $c_s_Some(it.n()) : $m_s_None$());
}
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.J();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.r();
      while (it.x()) {
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
  return $thiz.bs().av($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f));
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).jD(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().U : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.r();
  while (($thiz.x() && those.x())) {
    if ((!$m_sr_BoxesRunTime$().A($thiz.n(), those.n()))) {
      return false;
    }
  }
  return ($thiz.x() === those.x());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.U = null;
  $n_sc_Iterator$ = this;
  this.U = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.aw = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.av = (function(source) {
  return source.r();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  fV: 1,
  G: 1,
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
  $thiz.hj = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.hj = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.av = (function(it) {
  return this.hj.av(it);
});
$p.aw = (function() {
  return this.hj.aw();
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
$p.px = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.r()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().jO(it))));
});
$p.aw = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().px(it$2$2))));
});
$p.av = (function(source) {
  return this.px(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  g9: 1,
  G: 1,
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
  this.a6 = 0;
  this.ak = 0;
  this.aE = null;
  this.bQ = null;
  this.be = 0;
  this.bD = 0;
  this.a6 = dataMap;
  this.ak = nodeMap;
  this.aE = content;
  this.bQ = originalHashes;
  this.be = size;
  this.bD = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.bb = (function() {
  return this.be;
});
$p.eb = (function() {
  return this.bD;
});
$p.ee = (function(index) {
  return this.aE.b[(index << 1)];
});
$p.dp = (function(index) {
  return this.aE.b[((1 + (index << 1)) | 0)];
});
$p.jT = (function(index) {
  return new $c_T2(this.aE.b[(index << 1)], this.aE.b[((1 + (index << 1)) | 0)]);
});
$p.gG = (function(index) {
  return this.bQ.b[index];
});
$p.cY = (function(index) {
  return this.aE.b[(((((-1) + this.aE.b.length) | 0) - index) | 0)];
});
$p.jt = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().eY(keyHash, shift);
  var bitpos = $m_sci_Node$().ea(mask);
  if (((this.a6 & bitpos) !== 0)) {
    var index = $m_sci_Node$().d0(this.a6, mask, bitpos);
    if ($m_sr_BoxesRunTime$().A(key, this.ee(index))) {
      return this.dp(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.ak & bitpos) !== 0)) {
    return this.cY($m_sci_Node$().d0(this.ak, mask, bitpos)).jt(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.jS = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().eY(keyHash, shift);
  var bitpos = $m_sci_Node$().ea(mask);
  if (((this.a6 & bitpos) !== 0)) {
    var index = $m_sci_Node$().d0(this.a6, mask, bitpos);
    return ($m_sr_BoxesRunTime$().A(key, this.ee(index)) ? this.dp(index) : f.Y());
  } else {
    return (((this.ak & bitpos) !== 0) ? this.cY($m_sci_Node$().d0(this.ak, mask, bitpos)).jS(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.Y());
  }
});
$p.jE = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().eY(keyHash, shift);
  var bitpos = $m_sci_Node$().ea(mask);
  if (((this.a6 & bitpos) !== 0)) {
    var index = $m_sci_Node$().d0(this.a6, mask, bitpos);
    return ((this.bQ.b[index] === originalHash) && $m_sr_BoxesRunTime$().A(key, this.ee(index)));
  } else {
    return (((this.ak & bitpos) !== 0) && this.cY($m_sci_Node$().d0(this.ak, mask, bitpos)).jE(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.q9 = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().eY(keyHash, shift);
  var bitpos = $m_sci_Node$().ea(mask);
  if (((this.a6 & bitpos) !== 0)) {
    var index = $m_sci_Node$().d0(this.a6, mask, bitpos);
    var key0 = this.ee(index);
    var key0UnimprovedHash = this.gG(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().A(key0, key))) {
      if (replaceValue) {
        var value0 = this.dp(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.rn(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.dp(index);
      var key0Hash = $m_sc_Hashing$().cH(key0UnimprovedHash);
      return this.rl(bitpos, key0Hash, this.k7(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.ak & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().d0(this.ak, mask, bitpos);
    var subNode = this.cY(index$2);
    var subNodeNew$2 = subNode.qa(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.rm(bitpos, subNode, subNodeNew$2));
  } else {
    return this.rk(bitpos, key, originalHash, keyHash, value);
  }
});
$p.k7 = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().jP(new $c_sjsr_WrappedVarArgs([new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().eY(keyHash0, shift);
    var mask1 = $m_sci_Node$().eY(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().ea(mask0) | $m_sci_Node$().ea(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().ea(mask0);
      var node = this.k7(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().iO, node.bb(), node.eb());
    }
  }
});
$p.jW = (function() {
  return (this.ak !== 0);
});
$p.k9 = (function() {
  return $m_jl_Integer$().cV(this.ak);
});
$p.hI = (function() {
  return (this.a6 !== 0);
});
$p.ke = (function() {
  return $m_jl_Integer$().cV(this.a6);
});
$p.gB = (function(bitpos) {
  return $m_jl_Integer$().cV((this.a6 & (((-1) + bitpos) | 0)));
});
$p.ka = (function(bitpos) {
  return $m_jl_Integer$().cV((this.ak & (((-1) + bitpos) | 0)));
});
$p.rn = (function(bitpos, newKey, newValue) {
  var dataIx = this.gB(bitpos);
  var idx = (dataIx << 1);
  var src = this.aE;
  var dst = new $ac_O(src.b.length);
  var length = src.b.length;
  src.H(0, dst, 0, length);
  dst.b[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.a6, this.ak, dst, this.bQ, this.be, this.bD);
});
$p.rm = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.aE.b.length) | 0) - this.ka(bitpos)) | 0);
  var src = this.aE;
  var dst = new $ac_O(src.b.length);
  var length = src.b.length;
  src.H(0, dst, 0, length);
  dst.b[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.a6, this.ak, dst, this.bQ, ((((this.be - oldNode.bb()) | 0) + newNode.bb()) | 0), ((((this.bD - oldNode.eb()) | 0) + newNode.eb()) | 0));
});
$p.rk = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.gB(bitpos);
  var idx = (dataIx << 1);
  var src = this.aE;
  var dst = new $ac_O(((2 + src.b.length) | 0));
  src.H(0, dst, 0, idx);
  dst.b[idx] = key;
  dst.b[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.b.length - idx) | 0);
  src.H(idx, dst, destPos, length);
  var dstHashes = this.sl(this.bQ, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.a6 | bitpos), this.ak, dst, dstHashes, ((1 + this.be) | 0), ((this.bD + keyHash) | 0));
});
$p.sE = (function(bitpos, keyHash, node) {
  var dataIx = this.gB(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aE.b.length) | 0) - this.ka(bitpos)) | 0);
  var src = this.aE;
  var dst = new $ac_O((((-1) + src.b.length) | 0));
  src.H(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.H(srcPos, dst, idxOld, length);
  dst.b[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.b.length - idxNew) | 0)) | 0);
  src.H(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pT(this.bQ, dataIx);
  this.a6 = (this.a6 ^ bitpos);
  this.ak = (this.ak | bitpos);
  this.aE = dst;
  this.bQ = dstHashes;
  this.be = (((((-1) + this.be) | 0) + node.bb()) | 0);
  this.bD = ((((this.bD - keyHash) | 0) + node.eb()) | 0);
  return this;
});
$p.rl = (function(bitpos, keyHash, node) {
  var dataIx = this.gB(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aE.b.length) | 0) - this.ka(bitpos)) | 0);
  var src = this.aE;
  var dst = new $ac_O((((-1) + src.b.length) | 0));
  src.H(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.H(srcPos, dst, idxOld, length);
  dst.b[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.b.length - idxNew) | 0)) | 0);
  src.H(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pT(this.bQ, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.a6 ^ bitpos), (this.ak | bitpos), dst, dstHashes, (((((-1) + this.be) | 0) + node.bb()) | 0), ((((this.bD - keyHash) | 0) + node.eb()) | 0));
});
$p.aj = (function(f) {
  var iN = $m_jl_Integer$().cV(this.a6);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.i(this.jT(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().cV(this.ak);
  var j = 0;
  while ((j < jN)) {
    this.cY(j).aj(f);
    j = ((1 + j) | 0);
  }
});
$p.eR = (function(f) {
  var iN = $m_jl_Integer$().cV(this.a6);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.eM(this.ee(i$1), this.dp(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().cV(this.ak);
  var j = 0;
  while ((j < jN)) {
    this.cY(j).eR(f);
    j = ((1 + j) | 0);
  }
});
$p.z = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bD === that.bD) && (this.ak === that.ak)) && (this.a6 === that.a6)) && (this.be === that.be)) && $m_ju_Arrays$().jH(this.bQ, that.bQ))) {
      var a1 = this.aE;
      var a2 = that.aE;
      var length = this.aE.b.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().A(a1.b[i], a2.b[i]);
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
$p.E = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.pf = (function() {
  var this$1 = this.aE;
  var contentClone = this$1.o();
  var contentLength = contentClone.b.length;
  var i$1 = ($m_jl_Integer$().cV(this.a6) << 1);
  while ((i$1 < contentLength)) {
    contentClone.b[i$1] = contentClone.b[i$1].pg();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.a6, this.ak, contentClone, this.bQ.o(), this.be, this.bD);
});
$p.pg = (function() {
  return this.pf();
});
$p.qa = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.q9(key, value, originalHash, hash, shift, replaceValue);
});
$p.jR = (function(index) {
  return this.cY(index);
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bY)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  bY: 1,
  c8: 1,
  b2: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.j4 = 0;
  this.dL = 0;
  this.al = null;
  this.j4 = originalHash;
  this.dL = hash;
  this.al = content;
  $m_s_Predef$().tc((this.al.C() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.fz = (function(key) {
  var iter = this.al.r();
  var i = 0;
  while (iter.x()) {
    if ($m_sr_BoxesRunTime$().A(iter.n().bq(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.bb = (function() {
  return this.al.C();
});
$p.jt = (function(key, originalHash, hash, shift) {
  var this$1 = this.rY(key, originalHash, hash, shift);
  if (this$1.j()) {
    $m_sc_Iterator$().U.n();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.Q();
  }
});
$p.rY = (function(key, originalHash, hash, shift) {
  if ((this.dL === hash)) {
    var index = this.fz(key);
    return ((index >= 0) ? new $c_s_Some(this.al.F(index).bj()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.jS = (function(key, originalHash, hash, shift, f) {
  if ((this.dL === hash)) {
    var x1 = this.fz(key);
    return ((x1 === (-1)) ? f.Y() : this.al.F(x1).bj());
  } else {
    return f.Y();
  }
});
$p.jE = (function(key, originalHash, hash, shift) {
  return ((this.dL === hash) && (this.fz(key) >= 0));
});
$p.qa = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.fz(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.al.F(index).bj(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.al.em(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.al.e9(new $c_T2(key, value))));
});
$p.jW = (function() {
  return false;
});
$p.k9 = (function() {
  return 0;
});
$p.cY = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.hI = (function() {
  return true;
});
$p.ke = (function() {
  return this.al.C();
});
$p.ee = (function(index) {
  return this.al.F(index).bq();
});
$p.dp = (function(index) {
  return this.al.F(index).bj();
});
$p.jT = (function(index) {
  return this.al.F(index);
});
$p.gG = (function(index) {
  return this.j4;
});
$p.aj = (function(f) {
  this.al.aj(f);
});
$p.eR = (function(f) {
  this.al.aj(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bq();
      var v = x0$1$2$2.bj();
      return f.eM(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.z = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.dL === that.dL) && (this.al.C() === that.al.C()))) {
      var iter = this.al.r();
      while (iter.x()) {
        var x1$2 = iter.n();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.bq();
        var value = x1$2.bj();
        var index = that.fz(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().A(value, that.al.F(index).bj())))) {
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
$p.E = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.eb = (function() {
  return Math.imul(this.al.C(), this.dL);
});
$p.pg = (function() {
  return new $c_sci_HashCollisionMapNode(this.j4, this.dL, this.al);
});
$p.jR = (function(index) {
  return this.cY(index);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  c0: 1,
  c8: 1,
  b2: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.j5 = null;
  $n_sci_HashMap$ = this;
  this.j5 = new $c_sci_HashMap($m_sci_MapNode$().oi);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.rR = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().js(source).kf());
});
$p.aw = (function() {
  return new $c_sci_HashMapBuilder();
});
$p.av = (function(it) {
  return this.rR(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  gg: 1,
  aV: 1,
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
function $c_sci_LazyList$State$Cons(head, tail) {
  this.of = null;
  this.og = null;
  this.of = head;
  this.og = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.w = (function() {
  return this.of;
});
$p.aN = (function() {
  return this.og;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  gr: 1,
  c3: 1,
  a: 1
}));
/** @constructor */
function $c_sci_LazyList$State$Empty$() {
}
$p = $c_sci_LazyList$State$Empty$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Empty$;
/** @constructor */
function $h_sci_LazyList$State$Empty$() {
}
$h_sci_LazyList$State$Empty$.prototype = $p;
$p.jX = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list");
});
$p.aN = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.w = (function() {
  this.jX();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  gs: 1,
  c3: 1,
  a: 1
}));
var $n_sci_LazyList$State$Empty$;
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$();
  }
  return $n_sci_LazyList$State$Empty$;
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
$p.rT = (function(it) {
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
  return new $c_sci_MapBuilderImpl().oL(it).pX();
});
$p.aw = (function() {
  return new $c_sci_MapBuilderImpl();
});
$p.av = (function(it) {
  return this.rT(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  gw: 1,
  aV: 1,
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
  var x1 = coll.J();
  if ((x1 !== (-1))) {
    var that = ((x1 + delta) | 0);
    $thiz.bn(((that < 0) ? 0 : that));
  }
}
function $f_scm_Builder__sizeHintBounded__I__sc_Iterable__V($thiz, size, boundingColl) {
  var s = boundingColl.J();
  if ((s !== (-1))) {
    $thiz.bn(((s < size) ? s : size));
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
$p.rU = (function(it) {
  var k = it.J();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).oO(it);
});
$p.aw = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.av = (function(source) {
  return this.rU(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  hg: 1,
  G: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hv)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.ox = null;
  this.ox = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.Y = (function() {
  return (0, this.ox)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  hU: 1,
  co: 1,
  aR: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.oy = null;
  this.oy = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.i = (function(x0) {
  return (0, this.oy)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  hV: 1,
  cp: 1,
  f: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.oz = null;
  this.oz = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $p;
$p.eM = (function(x0, x1) {
  return (0, this.oz)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  hW: 1,
  cq: 1,
  aS: 1
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
$p.D = (function() {
  return "<function1>";
});
$p.i = (function(x) {
  return this.cc(x, $m_s_PartialFunction$().hf);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  i3: 1,
  u: 1,
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
$p.pA = (function(f) {
  return ((arg1$2) => f.i(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  ia: 1,
  ib: 1,
  ic: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iv)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parentParam$2, onTryParam$1, outer) {
  this.ky = null;
  this.hX = null;
  this.ky = onTryParam$1;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.hX = parentParam$2;
}
$p = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2() {
}
$h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = $p;
$p.hM = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.kc = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gP = (function(nextValue, transaction) {
  this.ky.eM(nextValue, transaction);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2, "com.raquo.airstream.common.InternalParentObserver$$anon$2", ({
  d0: 1,
  aC: 1,
  cY: 1,
  b8: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.kD = null;
  this.kB = false;
  this.hZ = null;
  this.kC = null;
  this.kD = onNextParam$2;
  this.kB = handleObserverErrors$3;
  this.hZ = onErrorParam$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kC = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.eg = (function() {
  return this.kC;
});
$p.ed = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.D = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.dr = (function(nextValue) {
  try {
    this.kD.i(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.kB) {
      this.gM(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.gM = (function(error) {
  try {
    if (this.hZ.cB(error)) {
      this.hZ.i(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cL(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.ei = (function(nextValue) {
  nextValue.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.gM(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.dr(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  d6: 1,
  aE: 1,
  a1: 1,
  aM: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.i0 = null;
  this.kE = false;
  this.kF = null;
  this.i0 = onTryParam$2;
  this.kE = handleObserverErrors$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kF = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.eg = (function() {
  return this.kF;
});
$p.ed = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.D = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.dr = (function(nextValue) {
  this.ei(new $c_s_util_Success(nextValue));
});
$p.gM = (function(error) {
  this.ei(new $c_s_util_Failure(error));
});
$p.ei = (function(nextValue) {
  try {
    if (this.i0.cB(nextValue)) {
      this.i0.i(nextValue);
    } else {
      nextValue.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cL(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.kE && nextValue.pE())) {
      this.gM(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  d7: 1,
  aE: 1,
  a1: 1,
  aM: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.lt = null;
  this.lu = false;
  this.lF = null;
  this.lG = false;
  this.lJ = null;
  this.lK = false;
  this.lV = null;
  this.lW = false;
  this.lv = null;
  this.lw = false;
  this.lx = null;
  this.ly = false;
  this.lz = null;
  this.lA = false;
  this.lB = null;
  this.lC = false;
  this.lD = null;
  this.lE = false;
  this.lH = null;
  this.lI = false;
  this.lL = null;
  this.lM = false;
  this.lN = null;
  this.lU = false;
  this.lO = null;
  this.lP = false;
  this.lQ = null;
  this.lR = false;
  this.lS = null;
  this.lT = false;
  this.lX = null;
  this.lY = false;
  this.lZ = null;
  this.m0 = false;
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
$p.r8 = (function() {
  if ((!this.lu)) {
    this.lt = new $c_Lcom_raquo_laminar_tags_SvgTag("circle", false);
    this.lu = true;
  }
  return this.lt;
});
$p.ci = (function() {
  if ((!this.lG)) {
    this.lF = new $c_Lcom_raquo_laminar_tags_SvgTag("path", false);
    this.lG = true;
  }
  return this.lF;
});
$p.sX = (function() {
  if ((!this.lK)) {
    this.lJ = new $c_Lcom_raquo_laminar_tags_SvgTag("polyline", false);
    this.lK = true;
  }
  return this.lJ;
});
$p.el = (function() {
  if ((!this.lW)) {
    this.lV = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.lW = true;
  }
  return this.lV;
});
$p.rs = (function() {
  if ((!this.lw)) {
    this.lv = new $c_Lcom_raquo_laminar_keys_SvgAttr("cx", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lw = true;
  }
  return this.lv;
});
$p.rt = (function() {
  if ((!this.ly)) {
    this.lx = new $c_Lcom_raquo_laminar_keys_SvgAttr("cy", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.ly = true;
  }
  return this.lx;
});
$p.cg = (function() {
  if ((!this.lA)) {
    this.lz = new $c_Lcom_raquo_laminar_keys_SvgAttr("d", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lA = true;
  }
  return this.lz;
});
$p.eP = (function() {
  if ((!this.lC)) {
    this.lB = new $c_Lcom_raquo_laminar_keys_SvgAttr("fill", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lC = true;
  }
  return this.lB;
});
$p.eV = (function() {
  if ((!this.lE)) {
    this.lD = new $c_Lcom_raquo_laminar_keys_SvgAttr("height", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lE = true;
  }
  return this.lD;
});
$p.sW = (function() {
  if ((!this.lI)) {
    this.lH = new $c_Lcom_raquo_laminar_keys_SvgAttr("points", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lI = true;
  }
  return this.lH;
});
$p.sZ = (function() {
  if ((!this.lM)) {
    this.lL = new $c_Lcom_raquo_laminar_keys_SvgAttr("r", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lM = true;
  }
  return this.lL;
});
$p.hO = (function() {
  if ((!this.lU)) {
    this.lN = new $c_Lcom_raquo_laminar_keys_SvgAttr("stroke", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lU = true;
  }
  return this.lN;
});
$p.kh = (function() {
  if ((!this.lP)) {
    this.lO = new $c_Lcom_raquo_laminar_keys_SvgAttr("stroke-linecap", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lP = true;
  }
  return this.lO;
});
$p.hP = (function() {
  if ((!this.lR)) {
    this.lQ = new $c_Lcom_raquo_laminar_keys_SvgAttr("stroke-linejoin", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lR = true;
  }
  return this.lQ;
});
$p.hQ = (function() {
  if ((!this.lT)) {
    this.lS = new $c_Lcom_raquo_laminar_keys_SvgAttr("stroke-width", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lT = true;
  }
  return this.lS;
});
$p.f4 = (function() {
  if ((!this.lY)) {
    this.lX = new $c_Lcom_raquo_laminar_keys_SvgAttr("viewBox", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.lY = true;
  }
  return this.lX;
});
$p.f5 = (function() {
  if ((!this.m0)) {
    this.lZ = new $c_Lcom_raquo_laminar_keys_SvgAttr("width", $m_Lcom_raquo_laminar_codecs_package$().b2, $m_s_None$());
    this.m0 = true;
  }
  return this.lZ;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  dM: 1,
  e2: 1,
  dV: 1,
  dX: 1
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
  dQ: 1,
  bj: 1,
  bm: 1,
  bi: 1
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
  this.np = null;
  this.nr = false;
  this.nq = null;
  this.ii = null;
  this.np = initialContext;
  this.nr = preferStrictMode;
  this.nq = insertFn;
  this.ii = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.jx = (function(element) {
  var this$1 = this.np;
  var insertContext = (this$1.j() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().td(element, this.nr, this.ii) : this$1.Q());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.nq.hD(insertContext, mountContext.ir, this.ii)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gV(element.bV(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.i(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.cx = (function(element) {
  this.jx(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  e6: 1,
  U: 1,
  ea: 1,
  e7: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.iw = null;
  this.ix = null;
  this.iw = $m_s_None$();
  this.ix = $m_Lcom_raquo_laminar_DomApi$().ro(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.fv = (function() {
  return this.iw;
});
$p.ek = (function(maybeNextParent) {
  this.iw = maybeNextParent;
});
$p.eo = (function(maybeNextParent) {
});
$p.cx = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eL(parentNode, this, (void 0));
});
$p.aa = (function() {
  return this.ix;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  eC: 1,
  ay: 1,
  U: 1,
  aF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.iE = null;
  this.ha = null;
  this.iE = $m_s_None$();
  this.ha = $m_Lcom_raquo_laminar_DomApi$().rq(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.fv = (function() {
  return this.iE;
});
$p.ek = (function(maybeNextParent) {
  this.iE = maybeNextParent;
});
$p.eo = (function(maybeNextParent) {
});
$p.cx = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eL(parentNode, this, (void 0));
});
$p.ts = (function() {
  return this.ha.data;
});
$p.aa = (function() {
  return this.ha;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  eJ: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bs)));
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  bs: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bt: 1,
  a: 1,
  a6: 1,
  a2: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eZ)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f0)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.B = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException();
  }
  $thiz.B = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.B = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.oR = (function(str) {
  var str$1 = $m_jl_String$().sI(str, 0, str.b.length);
  this.B = (("" + this.B) + str$1);
  return this;
});
$p.D = (function() {
  return this.B;
});
$p.C = (function() {
  return this.B.length;
});
$p.p8 = (function(index) {
  return this.B.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  fa: 1,
  aP: 1,
  eP: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fd)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fg)));
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
$p.cc = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.D = (function() {
  return "<function1>";
});
$p.cB = (function(x) {
  return false;
});
$p.ju = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.i = (function(v1) {
  this.ju(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  fz: 1,
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
$p.jD = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.dn = (function(n) {
  return this.gT(n, (-1));
});
$p.gT = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.D = (function() {
  return "<iterator>";
});
$p.aj = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.cf = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.e8 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.f0 = (function() {
  return $m_sci_Nil$().ej(this);
});
$p.J = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Map$() {
  this.hj = null;
  this.o8 = null;
  this.o9 = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.o8 = $ct_O__(new $c_O());
  this.o9 = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sc_Map$().o8));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  g3: 1,
  g4: 1,
  aV: 1,
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
  $thiz.ey = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.ey = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.oX = (function(elems) {
  return this.ey.dm(elems);
});
$p.hH = (function(it) {
  return this.ey.av(it);
});
$p.aw = (function() {
  return this.ey.aw();
});
$p.av = (function(source) {
  return this.hH(source);
});
$p.dm = (function(elems) {
  return this.oX(elems);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cF(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.gE(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bt(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bt(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.J();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.J();
    var $x_1 = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.r(), that);
  } else {
    return false;
  }
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.bs().aw();
  var it = $thiz.r();
  while (it.x()) {
    b.b7(f.i(it.n()));
  }
  return b.b9();
}
function $f_sc_StrictOptimizedIterableOps__flatten__F1__O($thiz, toIterableOnce) {
  var b = $thiz.bs().aw();
  var it = $thiz.r();
  while (it.x()) {
    b.bk(toIterableOnce.i(it.n()));
  }
  return b.b9();
}
function $f_sc_StrictOptimizedIterableOps__takeRight__I__O($thiz, n) {
  var b = $thiz.eZ();
  $f_scm_Builder__sizeHintBounded__I__sc_Iterable__V(b, n, $thiz);
  var lead = $thiz.r().dn(n);
  var it = $thiz.r();
  while (lead.x()) {
    lead.n();
    it.n();
  }
  while (it.x()) {
    b.b7(it.n());
  }
  return b.b9();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.hg = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.rS = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.av.call(this, it));
});
$p.av = (function(it) {
  return this.rS(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  gm: 1,
  fU: 1,
  G: 1,
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
  this.gb = null;
  $n_sci_LazyList$ = this;
  this.gb = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).pu();
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.dm = (function(elems) {
  return this.jO(elems);
});
$p.pZ = (function(ll, f) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef) => (() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var rest = new $c_sr_ObjectRef(restRef.az);
    while (((!itHasNext) && (!rest.az.j()))) {
      it.az = f.i(rest.az.L().w()).r();
      itHasNext = it.az.x();
      if ((!itHasNext)) {
        rest.az = rest.az.L().aN();
        restRef.az = rest.az;
      }
    }
    if (itHasNext) {
      var head = it.az.n();
      rest.az = rest.az.L().aN();
      restRef.az = rest.az;
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(head, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().kg(it.az, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().pZ(rest.az, f).L()))))))));
    } else {
      return $m_sci_LazyList$State$Empty$();
    }
  }))(new $c_sr_ObjectRef(ll))));
});
$p.th = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.az;
    var i = iRef.eI;
    while (((i > 0) && (!rest.j()))) {
      rest = rest.L().aN();
      restRef.az = rest;
      i = (((-1) + i) | 0);
      iRef.eI = i;
    }
    return rest.L();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.jO = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.J() === 0) ? this.gb : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().q0(coll.r()))))));
});
$p.kg = (function(it, suffix) {
  return (it.x() ? new $c_sci_LazyList$State$Cons(it.n(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().kg(it, suffix))))) : suffix.Y());
});
$p.q0 = (function(it) {
  return (it.x() ? new $c_sci_LazyList$State$Cons(it.n(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().q0(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.aw = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.av = (function(source) {
  return this.jO(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  gn: 1,
  W: 1,
  G: 1,
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
  this.gg = null;
  this.or = null;
  this.gg = outer;
  this.or = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.qO = (function(x) {
  this.gg.b7(x);
  return this;
});
$p.qE = (function(xs) {
  this.gg.bk(xs);
  return this;
});
$p.bn = (function(size) {
  this.gg.bn(size);
});
$p.b9 = (function() {
  return this.or.i(this.gg.b9());
});
$p.bk = (function(elems) {
  return this.qE(elems);
});
$p.b7 = (function(elem) {
  return this.qO(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  hb: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.e2 = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.e2 = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.bn = (function(size) {
});
$p.qP = (function(elem) {
  this.e2.b7(elem);
  return this;
});
$p.qF = (function(xs) {
  this.e2.bk(xs);
  return this;
});
$p.bk = (function(elems) {
  return this.qF(elems);
});
$p.b7 = (function(elem) {
  return this.qP(elem);
});
$p.b9 = (function() {
  return this.e2;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  b5: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.oC = null;
  this.oC = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.Y = (function() {
  return (0, this.oC)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  ij: 1,
  ii: 1,
  co: 1,
  aR: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.oD = null;
  this.oD = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.i = (function(x0) {
  return (0, this.oD)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  il: 1,
  ik: 1,
  cp: 1,
  f: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.oE = null;
  this.oE = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.eM = (function(x0, x1) {
  return (0, this.oE)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  io: 1,
  im: 1,
  cq: 1,
  aS: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.oF = null;
  this.oF = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.hD = (function(x0, x1, x2) {
  return (0, this.oF)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  iq: 1,
  ip: 1,
  hX: 1,
  fs: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.oG = null;
  this.oG = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.qT = (function(x0, x1, x2, x3) {
  return (0, this.oG)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  is: 1,
  ir: 1,
  hY: 1,
  ft: 1
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
  $thiz.eq = label;
  $thiz.ep = icon;
  return $thiz;
}
/** @constructor */
function $c_Lccrystal_site_Tab() {
  this.eq = null;
  this.ep = null;
}
$p = $c_Lccrystal_site_Tab.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_Tab;
/** @constructor */
function $h_Lccrystal_site_Tab() {
}
$h_Lccrystal_site_Tab.prototype = $p;
$p.bB = (function() {
  return new $c_s_Product$$anon$1(this);
});
var $d_Lccrystal_site_Tab = new $TypeData().i(0, "ccrystal.site.Tab", ({
  ak: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1
}));
function $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__($thiz, id, title, desc) {
  $thiz.fL = title;
  return $thiz;
}
/** @constructor */
function $c_Lccrystal_site_TabExplorer$Scenario() {
  this.fL = null;
}
$p = $c_Lccrystal_site_TabExplorer$Scenario.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario() {
}
$h_Lccrystal_site_TabExplorer$Scenario.prototype = $p;
$p.bB = (function() {
  return new $c_s_Product$$anon$1(this);
});
var $d_Lccrystal_site_TabExplorer$Scenario = new $TypeData().i(0, "ccrystal.site.TabExplorer$Scenario", ({
  aB: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1
}));
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.gx($m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gy($m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.f6(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.gL(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.bu || (!when))) {
    var $x_1 = f();
  } else {
    this$2.bu = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.bu = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.cX();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.d1();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.bu || (!when))) {
    f();
  } else {
    this$3.bu = true;
    try {
      f();
    } finally {
      this$3.bu = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pU($thiz.d1(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pU($thiz.cX(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.gW())) {
    $thiz.gQ();
    $thiz.f6(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.gN();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.gO();
    $thiz.f6(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cX();
  var $x_1 = this$.length;
  var this$$1 = $thiz.d1();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.kH = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kH = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.so = (function(x) {
  return (x !== null);
});
$p.qY = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.kH, x, _$1);
  }))), (void 0)) : default$1.i(x));
});
$p.cB = (function(x) {
  return this.so(x);
});
$p.cc = (function(x, default$1) {
  return this.qY(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  di: 1,
  aL: 1,
  f: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.dv = $m_Lcom_raquo_airstream_core_Observer$().rW(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $thiz.dv.ei(tryValue);
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.lg = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.lg = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.sq = (function(x) {
  return true;
});
$p.r0 = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.lg.ti(x, _$1);
  })));
});
$p.cB = (function(x) {
  return this.sq(x);
});
$p.cc = (function(x, default$1) {
  return this.r0(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  dz: 1,
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
$p.cB = (function(x) {
  return (((typeof x) === "boolean") && true);
});
$p.cc = (function(x, default$1) {
  return (((typeof x) === "boolean") ? (!(!x)) : default$1.i(x));
});
var $d_Lcom_raquo_laminar_DomApi$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$$anon$1, "com.raquo.laminar.DomApi$$anon$1", ({
  dG: 1,
  aL: 1,
  f: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.pe(new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.bV().oK();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.bV().ru();
  }))));
  $thiz.jA((void 0));
  $thiz.jz($m_sci_Map$EmptyMap$());
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.fw() === (void 0))) {
    $thiz.jA($m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener]))));
  } else if (unsafePrepend) {
    var x$1 = $thiz.fw();
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.fw();
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
  var x = $thiz.fw();
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.fw();
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
  return $thiz.gz().cZ(prop, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$()))).rd(new $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V($thiz, key, reason, addItems, removeItems) {
  var keyItemsWithReason = $thiz.gz().cZ(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.j())) {
      var x0 = these.w();
      var x = x0.bq();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.bj();
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
      these = these.y();
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
        var t = l.y();
        if (((!(!f(h))) === true)) {
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
            if (((!(!f(x$1))) !== true)) {
              remaining = remaining.y();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.w(), $m_sci_Nil$());
            var toProcess = start.y();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.w(), $m_sci_Nil$());
              currentLast.a1 = newElem;
              currentLast = newElem;
              toProcess = toProcess.y();
            }
            var next = firstMiss.y();
            var nextToCopy = next;
            while ((!next.j())) {
              var head = next.w();
              if (((!(!f(head))) !== true)) {
                next = next.y();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.w(), $m_sci_Nil$());
                  currentLast.a1 = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.y();
                }
                nextToCopy = next.y();
                next = next.y();
              }
            }
            if ((!nextToCopy.j())) {
              currentLast.a1 = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.gz().cZ(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.bm(t$1.bq()));
  var l$1 = this$1;
  block$2: {
    var $x_3;
    while (true) {
      if (l$1.j()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.w();
        var t$2 = l$1.y();
        if (((!(!f$1(h$1))) === true)) {
          l$1 = t$2;
          continue;
        }
        var start$1 = l$1;
        var remaining$1 = t$2;
        while (true) {
          if (remaining$1.j()) {
            var $x_3 = start$1;
            break block$2;
          } else {
            var x$2 = remaining$1.w();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$1 = remaining$1.y();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.w(), $m_sci_Nil$());
            var toProcess$1 = start$1.y();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.w(), $m_sci_Nil$());
              currentLast$1.a1 = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.y();
            }
            var next$1 = firstMiss$1.y();
            var nextToCopy$1 = next$1;
            while ((!next$1.j())) {
              var head$1 = next$1.w();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.y();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.w(), $m_sci_Nil$());
                  currentLast$1.a1 = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.y();
                }
                nextToCopy$1 = next$1.y();
                next$1 = next$1.y();
              }
            }
            if ((!nextToCopy$1.j())) {
              currentLast$1.a1 = nextToCopy$1;
            }
            var $x_3 = newHead$1;
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
    var rest = itemsToAdd.y();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.w();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.a1 = nx;
      t$3 = nx;
      rest = rest.y();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.oT($x_2);
  var domValues = key.ij.pj(key.ns.i($thiz));
  var f$3 = ((elem) => result.bm(elem));
  var l$2 = domValues;
  block$4: {
    var $x_5;
    while (true) {
      if (l$2.j()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.w();
        var t$4 = l$2.y();
        if (((!(!f$3(h$3))) === true)) {
          l$2 = t$4;
          continue;
        }
        var start$2 = l$2;
        var remaining$2 = t$4;
        while (true) {
          if (remaining$2.j()) {
            var $x_5 = start$2;
            break block$4;
          } else {
            var x$4 = remaining$2.w();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$2 = remaining$2.y();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.w(), $m_sci_Nil$());
            var toProcess$2 = start$2.y();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.w(), $m_sci_Nil$());
              currentLast$2.a1 = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.y();
            }
            var next$2 = firstMiss$2.y();
            var nextToCopy$2 = next$2;
            while ((!next$2.j())) {
              var head$2 = next$2.w();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.y();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.w(), $m_sci_Nil$());
                  currentLast$2.a1 = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.y();
                }
                nextToCopy$2 = next$2.y();
                next$2 = next$2.y();
              }
            }
            if ((!nextToCopy$2.j())) {
              currentLast$2.a1 = nextToCopy$2;
            }
            var $x_5 = newHead$2;
            break block$4;
          }
        }
      }
    }
  }
  var l$3 = itemsToAdd;
  block$6: {
    var $x_4;
    while (true) {
      if (l$3.j()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$3.w();
        var t$5 = l$3.y();
        if (((!(!f(h$4))) === true)) {
          l$3 = t$5;
          continue;
        }
        var start$3 = l$3;
        var remaining$3 = t$5;
        while (true) {
          if (remaining$3.j()) {
            var $x_4 = start$3;
            break block$6;
          } else {
            var x$5 = remaining$3.w();
            if (((!(!f(x$5))) !== true)) {
              remaining$3 = remaining$3.y();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.w(), $m_sci_Nil$());
            var toProcess$3 = start$3.y();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.w(), $m_sci_Nil$());
              currentLast$3.a1 = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.y();
            }
            var next$3 = firstMiss$3.y();
            var nextToCopy$3 = next$3;
            while ((!next$3.j())) {
              var head$3 = next$3.w();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.y();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.w(), $m_sci_Nil$());
                  currentLast$3.a1 = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.y();
                }
                nextToCopy$3 = next$3.y();
                next$3 = next$3.y();
              }
            }
            if ((!nextToCopy$3.j())) {
              currentLast$3.a1 = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.oT($x_4);
  $thiz.jz($thiz.gz().en(key, newItems));
  key.nt.eM($thiz, key.ij.pl(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.fv(), maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.fv();
  $thiz.pd(maybeNextParent);
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.j()) && (!maybePrevParent.Q().bV().c1.j()));
  var isNextParentActive = ((!maybeNextParent.j()) && (!maybeNextParent.Q().bV().c1.j()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.j() ? $m_s_None$() : new $c_s_Some(maybeNextParent.Q().bV())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.j()) {
    $thiz.jB().rb();
  } else {
    var x0 = maybeNextOwner.Q();
    $thiz.jB().tk(x0);
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason$5) {
  this.iy = null;
  this.iy = reason$5;
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = $p;
$p.sp = (function(x) {
  if ((x !== null)) {
    x.bq();
    var r = x.bj();
    var x$3 = this.iy;
    if ((r === x$3)) {
      return true;
    }
  }
  return false;
});
$p.qZ = (function(x, default$1) {
  if ((x !== null)) {
    var item = x.bq();
    var r = x.bj();
    var x$3 = this.iy;
    if ((r === x$3)) {
      return item;
    }
  }
  return default$1.i(x);
});
$p.cB = (function(x) {
  return this.sp(x);
});
$p.cc = (function(x, default$1) {
  return this.qZ(x, default$1);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1, "com.raquo.laminar.nodes.ReactiveElement$$anon$1", ({
  eF: 1,
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
  eQ: 1,
  E: 1,
  D: 1,
  u: 1,
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
  eS: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_jl_ClassCastException = new $TypeData().i($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  bu: 1,
  E: 1,
  D: 1,
  u: 1,
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
  bw: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  eW: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  aQ: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().i($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  f1: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  f2: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f4)));
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
  f5: 1,
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
  fe: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  fj: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  fk: 1,
  E: 1,
  D: 1,
  u: 1,
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
$p.D = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().i($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  fp: 1,
  fm: 1,
  fn: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.iP)) {
    $thiz.iQ = (($thiz.he === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.iP = true;
  }
  return $thiz.iQ;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.iP) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.iQ);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.he;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.he + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.iQ = null;
    this.he = null;
    this.iP = false;
    this.he = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gH() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  fw: 1,
  E: 1,
  D: 1,
  u: 1,
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
$p.J = (function() {
  return (this.j() ? 0 : 1);
});
$p.bm = (function(elem) {
  return ((!this.j()) && $m_sr_BoxesRunTime$().A(this.Q(), elem));
});
$p.r = (function() {
  return (this.j() ? $m_sc_Iterator$().U : new $c_sc_Iterator$$anon$20(this.Q()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fZ = 0;
  this.nX = 0;
  this.nW = null;
  this.nW = outer;
  this.fZ = 0;
  this.nX = outer.aB();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.x = (function() {
  return (this.fZ < this.nX);
});
$p.n = (function() {
  var result = this.nW.aC(this.fZ);
  this.fZ = ((1 + this.fZ) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  fB: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.nY = null;
  this.nZ = null;
  this.nY = _1;
  this.nZ = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.aB = (function() {
  return 2;
});
$p.aC = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.bq = (function() {
  return this.nY;
});
$p.bj = (function() {
  return this.nZ;
});
$p.D = (function() {
  return (((("(" + this.bq()) + ",") + this.bj()) + ")");
});
$p.aD = (function() {
  return "Tuple2";
});
$p.bB = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.E = (function() {
  return $m_s_util_hashing_MurmurHash3$().d2(this, (-889275714), false);
});
$p.z = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().A(this.bq(), x$1.bq()) && $m_sr_BoxesRunTime$().A(this.bj(), x$1.bj()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bD: 1,
  fC: 1,
  v: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.fk = null;
  this.fl = null;
  this.fm = null;
  this.fk = _1;
  this.fl = _2;
  this.fm = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.aB = (function() {
  return 3;
});
$p.aC = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.D = (function() {
  return (((((("(" + this.fk) + ",") + this.fl) + ",") + this.fm) + ")");
});
$p.aD = (function() {
  return "Tuple3";
});
$p.bB = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.E = (function() {
  return $m_s_util_hashing_MurmurHash3$().d2(this, (-889275714), false);
});
$p.z = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T3) && ($m_sr_BoxesRunTime$().A(this.fk, x$1.fk) && ($m_sr_BoxesRunTime$().A(this.fl, x$1.fl) && $m_sr_BoxesRunTime$().A(this.fm, x$1.fm)))));
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bE)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  bE: 1,
  fD: 1,
  v: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.g0 = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  fR: 1,
  fQ: 1,
  G: 1,
  a: 1,
  W: 1
}));
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.bs().av($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.j())) {
    return $thiz.F(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.ce() : $thiz.D())));
  }
}
function $f_sc_IndexedSeqOps__headOption__s_Option($thiz) {
  return ($thiz.j() ? $m_s_None$() : new $c_s_Some($thiz.w()));
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.ce() + "("), ", ", ")");
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
$p.x = (function() {
  return false;
});
$p.k8 = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.J = (function() {
  return 0;
});
$p.gT = (function(from, until) {
  return this;
});
$p.n = (function() {
  this.k8();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  fW: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.g1 = false;
  this.o2 = null;
  this.o2 = a$1;
  this.g1 = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.x = (function() {
  return (!this.g1);
});
$p.n = (function() {
  if (this.g1) {
    return $m_sc_Iterator$().U.n();
  } else {
    this.g1 = true;
    return this.o2;
  }
});
$p.gT = (function(from, until) {
  return (((this.g1 || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().U : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  fX: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.o5 = null;
  this.hh = false;
  this.o4 = null;
  this.j0 = null;
  this.o3 = null;
  this.j0 = outer;
  this.o3 = f$1;
  this.o5 = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.hh = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.x = (function() {
  while (true) {
    if (this.hh) {
      return true;
    } else if (this.j0.x()) {
      var a = this.j0.n();
      if (this.o5.hB(this.o3.i(a))) {
        this.o4 = a;
        this.hh = true;
        return true;
      }
    } else {
      return false;
    }
  }
});
$p.n = (function() {
  if (this.x()) {
    this.hh = false;
    return this.o4;
  } else {
    return $m_sc_Iterator$().U.n();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  fZ: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.hi = null;
  this.o6 = null;
  this.hi = outer;
  this.o6 = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.J = (function() {
  return this.hi.J();
});
$p.x = (function() {
  return this.hi.x();
});
$p.n = (function() {
  return this.o6.i(this.hi.n());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  g0: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bP instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bP;
      $thiz.bP = c.bP;
      $thiz.dB = c.dB;
      if ((c.co !== null)) {
        if (($thiz.cn === null)) {
          $thiz.cn = c.cn;
        }
        c.cn.g2 = $thiz.co;
        $thiz.co = c.co;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.co === null)) {
      $thiz.bP = null;
      $thiz.cn = null;
      return false;
    } else {
      $thiz.bP = $thiz.co.sa();
      if (($thiz.cn === $thiz.co)) {
        $thiz.cn = $thiz.cn.g2;
      }
      $thiz.co = $thiz.co.g2;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.dB) {
        return true;
      } else if ((($thiz.bP !== null) && $thiz.bP.x())) {
        $thiz.dB = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.bP = null;
  this.co = null;
  this.cn = null;
  this.dB = false;
  this.bP = current;
  this.co = null;
  this.cn = null;
  this.dB = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.x = (function() {
  if (this.dB) {
    return true;
  } else if ((this.bP !== null)) {
    if (this.bP.x()) {
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
  if (this.x()) {
    this.dB = false;
    return this.bP.n();
  } else {
    return $m_sc_Iterator$().U.n();
  }
});
$p.jD = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.co === null)) {
    this.co = c;
    this.cn = c;
  } else {
    this.cn.g2 = c;
    this.cn = c;
  }
  if ((this.bP === null)) {
    this.bP = $m_sc_Iterator$().U;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  bK: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.d8 > 0)) {
    if ($thiz.dC.x()) {
      $thiz.dC.n();
      $thiz.d8 = (((-1) + $thiz.d8) | 0);
    } else {
      $thiz.d8 = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.c5 < 0)) {
    return (-1);
  } else {
    var that = (($thiz.c5 - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.dC = null;
  this.c5 = 0;
  this.d8 = 0;
  this.dC = underlying;
  this.c5 = limit;
  this.d8 = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.J = (function() {
  var size = this.dC.J();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.d8) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.c5 < 0)) {
      return dropSize;
    } else {
      var x = this.c5;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.x = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.c5 !== 0) && this.dC.x());
});
$p.n = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.c5 > 0)) {
    this.c5 = (((-1) + this.c5) | 0);
    return this.dC.n();
  } else {
    return ((this.c5 < 0) ? this.dC.n() : $m_sc_Iterator$().U.n());
  }
});
$p.gT = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.c5 < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.d8 + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().U;
  } else if ((sum < 0)) {
    this.d8 = 2147483647;
    this.c5 = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.dC, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.d8 = sum;
    this.c5 = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  g2: 1,
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
    these = these.y();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $thiz, len));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.bt(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.pk(n);
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
      return (xs.j() ? 0 : 1);
    } else if (xs.j()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.y();
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else if ((((!a.j()) && (!b.j())) && $m_sr_BoxesRunTime$().A(a.w(), b.w()))) {
      var temp$a = a.y();
      var temp$b = b.y();
      a = temp$a;
      b = temp$b;
    } else {
      return (a.j() && b.j());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.g4 = null;
  this.g4 = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.x = (function() {
  return (!this.g4.j());
});
$p.n = (function() {
  var r = this.g4.w();
  this.g4 = this.g4.y();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  g6: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.da === null)) {
    $thiz.da = new $ac_I(($m_sci_Node$().gf << 1));
    $thiz.g8 = new ($d_sci_Node.r().C)($m_sci_Node$().gf);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.eC = node;
  $thiz.c6 = 0;
  $thiz.g7 = node.ke();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bR = ((1 + $thiz.bR) | 0);
  var cursorIndex = ($thiz.bR << 1);
  var lengthIndex = ((1 + ($thiz.bR << 1)) | 0);
  $thiz.g8.b[$thiz.bR] = node;
  $thiz.da.b[cursorIndex] = 0;
  $thiz.da.b[lengthIndex] = node.k9();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bR = (((-1) + $thiz.bR) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bR >= 0)) {
    var cursorIndex = ($thiz.bR << 1);
    var lengthIndex = ((1 + ($thiz.bR << 1)) | 0);
    var nodeCursor = $thiz.da.b[cursorIndex];
    if ((nodeCursor < $thiz.da.b[lengthIndex])) {
      var ev$1 = $thiz.da;
      ev$1.b[cursorIndex] = ((1 + ev$1.b[cursorIndex]) | 0);
      var nextNode = $thiz.g8.b[$thiz.bR].jR(nodeCursor);
      if (nextNode.jW()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.hI()) {
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
  $thiz.c6 = 0;
  $thiz.g7 = 0;
  $thiz.bR = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.jW()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.hI()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.c6 = 0;
  this.g7 = 0;
  this.eC = null;
  this.bR = 0;
  this.da = null;
  this.g8 = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.x = (function() {
  return ((this.c6 < this.g7) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.hm = node;
  $thiz.dK = (((-1) + node.ke()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.c7 = ((1 + $thiz.c7) | 0);
  $thiz.ga.b[$thiz.c7] = node;
  $thiz.g9.b[$thiz.c7] = (((-1) + node.k9()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.c7 = (((-1) + $thiz.c7) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.c7 >= 0)) {
    var nodeCursor = $thiz.g9.b[$thiz.c7];
    $thiz.g9.b[$thiz.c7] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.ga.b[$thiz.c7].jR(nodeCursor));
    } else {
      var currNode = $thiz.ga.b[$thiz.c7];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.hI()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.dK = (-1);
  $thiz.c7 = (-1);
  $thiz.g9 = new $ac_I(((1 + $m_sci_Node$().gf) | 0));
  $thiz.ga = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().gf) | 0));
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
  this.hm = null;
  this.c7 = 0;
  this.g9 = null;
  this.ga = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.x = (function() {
  return ((this.dK >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.fn !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.b.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.b.length) | 0));
  as.H(0, result, 0, ix);
  result.b[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.b.length - ix) | 0);
  as.H(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.gB(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aE;
  var dst = new $ac_O(((2 + src.b.length) | 0));
  src.H(0, dst, 0, idx);
  dst.b[idx] = key;
  dst.b[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.b.length - idx) | 0);
  src.H(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bQ, dataIx, originalHash);
  bm.a6 = (bm.a6 | bitpos);
  bm.aE = dst;
  bm.bQ = dstHashes;
  bm.be = ((1 + bm.be) | 0);
  bm.bD = ((bm.bD + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.fn = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.cP = $thiz.cP.pf();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.fn = null;
  this.cP = null;
  this.cP = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().nU, $m_s_Array$EmptyArrays$().iO, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.bn = (function(size) {
});
$p.fH = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().eY(keyHash, shift);
    var bitpos = $m_sci_Node$().ea(mask);
    if (((mapNode.a6 & bitpos) !== 0)) {
      var index = $m_sci_Node$().d0(mapNode.a6, mask, bitpos);
      var key0 = mapNode.ee(index);
      var key0UnimprovedHash = mapNode.gG(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().A(key0, key))) {
        mapNode.aE.b[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.dp(index);
        var key0Hash = $m_sc_Hashing$().cH(key0UnimprovedHash);
        var subNodeNew = mapNode.k7(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.sE(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.ak & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().d0(mapNode.ak, mask, bitpos);
      var subNode = mapNode.cY(index$2);
      var beforeSize = subNode.bb();
      var beforeHash = subNode.eb();
      this.fH(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.be = ((mapNode.be + ((subNode.bb() - beforeSize) | 0)) | 0);
      mapNode.bD = ((mapNode.bD + ((subNode.eb() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.fz(key);
    if ((index$3 < 0)) {
      mapNode.al = mapNode.al.e9(new $c_T2(key, value));
    } else {
      mapNode.al = mapNode.al.em(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.kf = (function() {
  if ((this.cP.be === 0)) {
    return $m_sci_HashMap$().j5;
  } else if ((this.fn !== null)) {
    return this.fn;
  } else {
    this.fn = new $c_sci_HashMap(this.cP);
    return this.fn;
  }
});
$p.oQ = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().a2(elem.bq());
  var im = $m_sc_Hashing$().cH(h);
  this.fH(this.cP, elem.bq(), elem.bj(), h, im, 0);
  return this;
});
$p.eK = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().a2(key);
  this.fH(this.cP, key, value, originalHash, $m_sc_Hashing$().cH(originalHash), 0);
  return this;
});
$p.js = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.tU();
    while (iter.x()) {
      var next = iter.n();
      var originalHash = xs.tx(next.pC());
      var hash = $m_sc_Hashing$().cH(originalHash);
      this.fH(this.cP, next.pG(), next.tC(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.rF();
    while (iter$2.x()) {
      var next$2 = iter$2.n();
      var originalHash$2 = xs.tx(next$2.pC());
      var hash$2 = $m_sc_Hashing$().cH(originalHash$2);
      this.fH(this.cP, next$2.pG(), next$2.tC(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.eR(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.eK(key$2$2, value$2$2))));
  } else {
    var it = xs.r();
    while (it.x()) {
      this.oQ(it.n());
    }
  }
  return this;
});
$p.bk = (function(elems) {
  return this.js(elems);
});
$p.b7 = (function(elem) {
  return this.oQ(elem);
});
$p.b9 = (function() {
  return this.kf();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  gh: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.ey = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.jN = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.hH.call(this, it));
});
$p.av = (function(source) {
  return this.jN(source);
});
$p.hH = (function(it) {
  return this.jN(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  gk: 1,
  aW: 1,
  W: 1,
  G: 1,
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
  this.fo = null;
  this.oe = null;
  this.ra();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.bn = (function(size) {
});
$p.ra = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.oe = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jI()))));
  this.fo = deferred;
});
$p.tg = (function() {
  this.fo.jY(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.oe;
});
$p.qL = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.fo.jY(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jI())))));
  })));
  this.fo = deferred;
  return this;
});
$p.qC = (function(xs) {
  if ((xs.J() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.fo.jY(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().kg(xs.r(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jI()))))));
    this.fo = deferred;
  }
  return this;
});
$p.bk = (function(elems) {
  return this.qC(elems);
});
$p.b7 = (function(elem) {
  return this.qL(elem);
});
$p.b9 = (function() {
  return this.tg();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  go: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.fp = null;
  this.fp = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.x = (function() {
  return (!this.fp.j());
});
$p.n = (function() {
  if (this.fp.j()) {
    return $m_sc_Iterator$().U.n();
  } else {
    var res = this.fp.L().w();
    this.fp = this.fp.L().aN();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  gq: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_List$() {
  this.gc = null;
  $n_sci_List$ = this;
  this.gc = new $c_sci_List$$anon$1();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.dm = (function(elems) {
  return $m_sci_Nil$().ej(elems);
});
$p.aw = (function() {
  return new $c_scm_ListBuffer();
});
$p.av = (function(source) {
  return $m_sci_Nil$().ej(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  gt: 1,
  ar: 1,
  W: 1,
  G: 1,
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
  $thiz.fq = outer;
  $thiz.dN = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dN = 0;
  this.fq = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.x = (function() {
  return (this.dN < 2);
});
$p.n = (function() {
  switch (this.dN) {
    case 0: {
      var result = new $c_T2(this.fq.cp, this.fq.db);
      break;
    }
    case 1: {
      var result = new $c_T2(this.fq.cq, this.fq.dc);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().U.n();
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
$p.x = (function() {
  return (this.dP < 3);
});
$p.n = (function() {
  switch (this.dP) {
    case 0: {
      var result = new $c_T2(this.dO.c8, this.dO.cQ);
      break;
    }
    case 1: {
      var result = new $c_T2(this.dO.c9, this.dO.cR);
      break;
    }
    case 2: {
      var result = new $c_T2(this.dO.ca, this.dO.cS);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().U.n();
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
  $thiz.cT = outer;
  $thiz.dQ = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dQ = 0;
  this.cT = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.x = (function() {
  return (this.dQ < 4);
});
$p.n = (function() {
  switch (this.dQ) {
    case 0: {
      var result = new $c_T2(this.cT.bE, this.cT.cr);
      break;
    }
    case 1: {
      var result = new $c_T2(this.cT.bF, this.cT.cs);
      break;
    }
    case 2: {
      var result = new $c_T2(this.cT.bG, this.cT.ct);
      break;
    }
    case 3: {
      var result = new $c_T2(this.cT.bH, this.cT.cu);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().U.n();
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
  this.gd = false;
  this.eD = null;
  this.dd = $m_sci_Map$EmptyMap$();
  this.gd = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.bn = (function(size) {
});
$p.pX = (function() {
  return (this.gd ? this.eD.kf() : this.dd);
});
$p.qJ = (function(key, value) {
  if (this.gd) {
    this.eD.eK(key, value);
  } else if ((this.dd.bb() < 4)) {
    this.dd = this.dd.en(key, value);
  } else if (this.dd.bm(key)) {
    this.dd = this.dd.en(key, value);
  } else {
    this.gd = true;
    if ((this.eD === null)) {
      this.eD = new $c_sci_HashMapBuilder();
    }
    this.dd.r7(this.eD);
    this.eD.eK(key, value);
  }
  return this;
});
$p.oL = (function(xs) {
  return (this.gd ? (this.eD.js(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.bk = (function(elems) {
  return this.oL(elems);
});
$p.b7 = (function(elem) {
  return this.qJ(elem.bq(), elem.bj());
});
$p.b9 = (function() {
  return this.pX();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  gE: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().pF($m_jl_System$SystemProperties$().jU("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
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
  this.ok = 0;
  this.ol = null;
  $n_sci_Vector$ = this;
  this.ok = $ps_sci_Vector$__liftedTree1$1__I();
  this.ol = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.dm = (function(elems) {
  return this.jP(elems);
});
$p.jP = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.J();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.au().ba();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cO;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.cf(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.r().cf(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().oM(it).pY();
    }
  }
});
$p.aw = (function() {
  return new $c_sci_VectorBuilder();
});
$p.av = (function(source) {
  return this.jP(source);
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  gR: 1,
  ar: 1,
  W: 1,
  G: 1,
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
  if (($thiz.X >= 6)) {
    a = $thiz.aX;
    var i = (($thiz.S >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.H(i, dest, 0, length);
    }
    var newOffset = (($thiz.S % 33554432) | 0);
    $thiz.M = (($thiz.M - (($thiz.S - newOffset) | 0)) | 0);
    $thiz.S = newOffset;
    if (((($thiz.M >>> 25) | 0) === 0)) {
      $thiz.X = 5;
    }
    aParent = a;
    a = a.b[0];
  }
  if (($thiz.X >= 5)) {
    if ((a === null)) {
      a = $thiz.a7;
    }
    var i$2 = (31 & (($thiz.S >>> 20) | 0));
    if (($thiz.X === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.H(i$2, dest$1, 0, length$1);
      }
      $thiz.a7 = a;
      var newOffset$1 = (($thiz.S % 1048576) | 0);
      $thiz.M = (($thiz.M - (($thiz.S - newOffset$1) | 0)) | 0);
      $thiz.S = newOffset$1;
      if (((($thiz.M >>> 20) | 0) === 0)) {
        $thiz.X = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().ai(a, i$2, 32);
      }
      aParent.b[0] = a;
    }
    aParent = a;
    a = a.b[0];
  }
  if (($thiz.X >= 4)) {
    if ((a === null)) {
      a = $thiz.Z;
    }
    var i$3 = (31 & (($thiz.S >>> 15) | 0));
    if (($thiz.X === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.H(i$3, dest$2, 0, length$2);
      }
      $thiz.Z = a;
      var newOffset$2 = (($thiz.S % 32768) | 0);
      $thiz.M = (($thiz.M - (($thiz.S - newOffset$2) | 0)) | 0);
      $thiz.S = newOffset$2;
      if (((($thiz.M >>> 15) | 0) === 0)) {
        $thiz.X = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().ai(a, i$3, 32);
      }
      aParent.b[0] = a;
    }
    aParent = a;
    a = a.b[0];
  }
  if (($thiz.X >= 3)) {
    if ((a === null)) {
      a = $thiz.V;
    }
    var i$4 = (31 & (($thiz.S >>> 10) | 0));
    if (($thiz.X === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.H(i$4, dest$3, 0, length$3);
      }
      $thiz.V = a;
      var newOffset$3 = (($thiz.S % 1024) | 0);
      $thiz.M = (($thiz.M - (($thiz.S - newOffset$3) | 0)) | 0);
      $thiz.S = newOffset$3;
      if (((($thiz.M >>> 10) | 0) === 0)) {
        $thiz.X = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().ai(a, i$4, 32);
      }
      aParent.b[0] = a;
    }
    aParent = a;
    a = a.b[0];
  }
  if (($thiz.X >= 2)) {
    if ((a === null)) {
      a = $thiz.P;
    }
    var i$5 = (31 & (($thiz.S >>> 5) | 0));
    if (($thiz.X === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.H(i$5, dest$4, 0, length$4);
      }
      $thiz.P = a;
      var newOffset$4 = (($thiz.S % 32) | 0);
      $thiz.M = (($thiz.M - (($thiz.S - newOffset$4) | 0)) | 0);
      $thiz.S = newOffset$4;
      if (((($thiz.M >>> 5) | 0) === 0)) {
        $thiz.X = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().ai(a, i$5, 32);
      }
      aParent.b[0] = a;
    }
    aParent = a;
    a = a.b[0];
  }
  if (($thiz.X >= 1)) {
    if ((a === null)) {
      a = $thiz.a4;
    }
    var i$6 = (31 & $thiz.S);
    if (($thiz.X === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.H(i$6, dest$5, 0, length$5);
      }
      $thiz.a4 = a;
      $thiz.W = (($thiz.W - $thiz.S) | 0);
      $thiz.S = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().ai(a, i$6, 32);
      }
      aParent.b[0] = a;
    }
  }
  $thiz.ho = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.b.length;
  if ((dl > 0)) {
    if (($thiz.W === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.W) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.a4;
    var destPos = $thiz.W;
    data.H(0, dest, destPos, copy1);
    $thiz.W = (($thiz.W + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.a4;
      data.H(copy1, dest$1, 0, copy2);
      $thiz.W = (($thiz.W + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.b.length === 0)) {
    return (void 0);
  }
  if (($thiz.W === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.b.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.M) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.M >>> 5) | 0));
      var dest = $thiz.P;
      slice.H(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.P;
        slice.H(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.M % 1024) | 0) !== 0)) {
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
            var t = slice.b[i];
            var lo = t.u;
            var hi = t.v;
            f(new $c_RTLong(lo, hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i < len)) {
            var x0$3 = slice.b[i];
            f(x0$3);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i < len)) {
            var x0$4 = slice.b[i];
            f($bC(x0$4));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i < len)) {
            var x0$5 = slice.b[i];
            f(x0$5);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i < len)) {
            var x0$6 = slice.b[i];
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i < len)) {
            var x0$7 = slice.b[i];
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.M) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.M >>> 10) | 0));
      var dest$2 = $thiz.V;
      slice.H(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.V;
        slice.H(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.M % 32768) | 0) !== 0)) {
        var f$1 = ((e$2$2$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$1, 3);
        });
        var len$1 = slice.b.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$8 = slice.b[i$1];
            f$1(x0$8);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$1 < len$1)) {
            var x0$9 = slice.b[i$1];
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$1 < len$1)) {
            var x0$10 = slice.b[i$1];
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$1 < len$1)) {
            var t$1 = slice.b[i$1];
            var lo$1 = t$1.u;
            var hi$1 = t$1.v;
            f$1(new $c_RTLong(lo$1, hi$1));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$1 < len$1)) {
            var x0$11 = slice.b[i$1];
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$1 < len$1)) {
            var x0$12 = slice.b[i$1];
            f$1($bC(x0$12));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$1 < len$1)) {
            var x0$13 = slice.b[i$1];
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$1 < len$1)) {
            var x0$14 = slice.b[i$1];
            f$1(x0$14);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$1 < len$1)) {
            var x0$15 = slice.b[i$1];
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.M) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.M >>> 15) | 0));
      var dest$4 = $thiz.Z;
      slice.H(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.Z;
        slice.H(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.M % 1048576) | 0) !== 0)) {
        var f$2 = ((e$2$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$2, 4);
        });
        var len$2 = slice.b.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$16 = slice.b[i$2];
            f$2(x0$16);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$2 < len$2)) {
            var x0$17 = slice.b[i$2];
            f$2(x0$17);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$2 < len$2)) {
            var x0$18 = slice.b[i$2];
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$2 < len$2)) {
            var t$2 = slice.b[i$2];
            var lo$2 = t$2.u;
            var hi$2 = t$2.v;
            f$2(new $c_RTLong(lo$2, hi$2));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$2 < len$2)) {
            var x0$19 = slice.b[i$2];
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$2 < len$2)) {
            var x0$20 = slice.b[i$2];
            f$2($bC(x0$20));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$2 < len$2)) {
            var x0$21 = slice.b[i$2];
            f$2(x0$21);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$2 < len$2)) {
            var x0$22 = slice.b[i$2];
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$2 < len$2)) {
            var x0$23 = slice.b[i$2];
            f$2(x0$23);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.M) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.M >>> 20) | 0));
      var dest$6 = $thiz.a7;
      slice.H(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.a7;
        slice.H(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.M % 33554432) | 0) !== 0)) {
        var f$3 = ((e$2$2$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$3, 5);
        });
        var len$3 = slice.b.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$24 = slice.b[i$3];
            f$3(x0$24);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$3 < len$3)) {
            var x0$25 = slice.b[i$3];
            f$3(x0$25);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$3 < len$3)) {
            var x0$26 = slice.b[i$3];
            f$3(x0$26);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$3 < len$3)) {
            var t$3 = slice.b[i$3];
            var lo$3 = t$3.u;
            var hi$3 = t$3.v;
            f$3(new $c_RTLong(lo$3, hi$3));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$3 < len$3)) {
            var x0$27 = slice.b[i$3];
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$3 < len$3)) {
            var x0$28 = slice.b[i$3];
            f$3($bC(x0$28));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$3 < len$3)) {
            var x0$29 = slice.b[i$3];
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$3 < len$3)) {
            var x0$30 = slice.b[i$3];
            f$3(x0$30);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$3 < len$3)) {
            var x0$31 = slice.b[i$3];
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.M >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aX;
      slice.H(0, dest$8, destPos$5, sl);
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
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var sign = (a >> 31);
    var x1 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.W === 32) || ($thiz.W === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().jK((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.M) | 0);
  var xor = (idx ^ $thiz.M);
  $thiz.M = idx;
  $thiz.W = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.M + n) | 0);
    var xor = (idx ^ $thiz.M);
    $thiz.M = idx;
    $thiz.W = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.a4) + ", a2=") + $thiz.P) + ", a3=") + $thiz.V) + ", a4=") + $thiz.Z) + ", a5=") + $thiz.a7) + ", a6=") + $thiz.aX) + ", depth=") + $thiz.X));
  } else if ((xor < 1024)) {
    if (($thiz.X <= 1)) {
      $thiz.P = new ($d_O.r().r().C)(32);
      $thiz.P.b[0] = $thiz.a4;
      $thiz.X = 2;
    }
    $thiz.a4 = new $ac_O(32);
    $thiz.P.b[(31 & ((idx >>> 5) | 0))] = $thiz.a4;
  } else if ((xor < 32768)) {
    if (($thiz.X <= 2)) {
      $thiz.V = new ($d_O.r().r().r().C)(32);
      $thiz.V.b[0] = $thiz.P;
      $thiz.X = 3;
    }
    $thiz.a4 = new $ac_O(32);
    $thiz.P = new ($d_O.r().r().C)(32);
    $thiz.P.b[(31 & ((idx >>> 5) | 0))] = $thiz.a4;
    $thiz.V.b[(31 & ((idx >>> 10) | 0))] = $thiz.P;
  } else if ((xor < 1048576)) {
    if (($thiz.X <= 3)) {
      $thiz.Z = new ($d_O.r().r().r().r().C)(32);
      $thiz.Z.b[0] = $thiz.V;
      $thiz.X = 4;
    }
    $thiz.a4 = new $ac_O(32);
    $thiz.P = new ($d_O.r().r().C)(32);
    $thiz.V = new ($d_O.r().r().r().C)(32);
    $thiz.P.b[(31 & ((idx >>> 5) | 0))] = $thiz.a4;
    $thiz.V.b[(31 & ((idx >>> 10) | 0))] = $thiz.P;
    $thiz.Z.b[(31 & ((idx >>> 15) | 0))] = $thiz.V;
  } else if ((xor < 33554432)) {
    if (($thiz.X <= 4)) {
      $thiz.a7 = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.a7.b[0] = $thiz.Z;
      $thiz.X = 5;
    }
    $thiz.a4 = new $ac_O(32);
    $thiz.P = new ($d_O.r().r().C)(32);
    $thiz.V = new ($d_O.r().r().r().C)(32);
    $thiz.Z = new ($d_O.r().r().r().r().C)(32);
    $thiz.P.b[(31 & ((idx >>> 5) | 0))] = $thiz.a4;
    $thiz.V.b[(31 & ((idx >>> 10) | 0))] = $thiz.P;
    $thiz.Z.b[(31 & ((idx >>> 15) | 0))] = $thiz.V;
    $thiz.a7.b[(31 & ((idx >>> 20) | 0))] = $thiz.Z;
  } else {
    if (($thiz.X <= 5)) {
      $thiz.aX = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aX.b[0] = $thiz.a7;
      $thiz.X = 6;
    }
    $thiz.a4 = new $ac_O(32);
    $thiz.P = new ($d_O.r().r().C)(32);
    $thiz.V = new ($d_O.r().r().r().C)(32);
    $thiz.Z = new ($d_O.r().r().r().r().C)(32);
    $thiz.a7 = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.P.b[(31 & ((idx >>> 5) | 0))] = $thiz.a4;
    $thiz.V.b[(31 & ((idx >>> 10) | 0))] = $thiz.P;
    $thiz.Z.b[(31 & ((idx >>> 15) | 0))] = $thiz.V;
    $thiz.a7.b[(31 & ((idx >>> 20) | 0))] = $thiz.Z;
    $thiz.aX.b[((idx >>> 25) | 0)] = $thiz.a7;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aX = null;
  this.a7 = null;
  this.Z = null;
  this.V = null;
  this.P = null;
  this.a4 = null;
  this.W = 0;
  this.M = 0;
  this.S = 0;
  this.ho = false;
  this.X = 0;
  this.a4 = new $ac_O(32);
  this.W = 0;
  this.M = 0;
  this.S = 0;
  this.ho = false;
  this.X = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.bn = (function(size) {
});
$p.sf = (function(v) {
  var x1 = v.d5();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.X = 1;
      var i = v.l.b.length;
      this.W = (31 & i);
      this.M = ((i - this.W) | 0);
      var a = v.l;
      this.a4 = ((a.b.length === 32) ? a : $m_ju_Arrays$().ai(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bz;
      var a$1 = v.q;
      this.a4 = ((a$1.b.length === 32) ? a$1 : $m_ju_Arrays$().ai(a$1, 0, 32));
      this.X = 2;
      this.S = ((32 - v.bU) | 0);
      var i$1 = ((v.s + this.S) | 0);
      this.W = (31 & i$1);
      this.M = ((i$1 - this.W) | 0);
      this.P = new ($d_O.r().r().C)(32);
      this.P.b[0] = v.l;
      var dest = this.P;
      var length = d2.b.length;
      d2.H(0, dest, 1, length);
      this.P.b[((1 + d2.b.length) | 0)] = this.a4;
      break;
    }
    case 5: {
      var d3 = v.bh;
      var s2 = v.bi;
      var a$2 = v.q;
      this.a4 = ((a$2.b.length === 32) ? a$2 : $m_ju_Arrays$().ai(a$2, 0, 32));
      this.X = 3;
      this.S = ((1024 - v.bw) | 0);
      var i$2 = ((v.s + this.S) | 0);
      this.W = (31 & i$2);
      this.M = ((i$2 - this.W) | 0);
      this.V = new ($d_O.r().r().r().C)(32);
      this.V.b[0] = $m_sci_VectorStatics$().cW(v.l, v.bJ);
      var dest$1 = this.V;
      var length$1 = d3.b.length;
      d3.H(0, dest$1, 1, length$1);
      this.P = $m_ju_Arrays$().a9(s2, 32);
      this.V.b[((1 + d3.b.length) | 0)] = this.P;
      this.P.b[s2.b.length] = this.a4;
      break;
    }
    case 7: {
      var d4 = v.aP;
      var s3 = v.aR;
      var s2$2 = v.aQ;
      var a$3 = v.q;
      this.a4 = ((a$3.b.length === 32) ? a$3 : $m_ju_Arrays$().ai(a$3, 0, 32));
      this.X = 4;
      this.S = ((32768 - v.b5) | 0);
      var i$3 = ((v.s + this.S) | 0);
      this.W = (31 & i$3);
      this.M = ((i$3 - this.W) | 0);
      this.Z = new ($d_O.r().r().r().r().C)(32);
      this.Z.b[0] = $m_sci_VectorStatics$().cW($m_sci_VectorStatics$().cW(v.l, v.bo), v.bp);
      var dest$2 = this.Z;
      var length$2 = d4.b.length;
      d4.H(0, dest$2, 1, length$2);
      this.V = $m_ju_Arrays$().a9(s3, 32);
      this.P = $m_ju_Arrays$().a9(s2$2, 32);
      this.Z.b[((1 + d4.b.length) | 0)] = this.V;
      this.V.b[s3.b.length] = this.P;
      this.P.b[s2$2.b.length] = this.a4;
      break;
    }
    case 9: {
      var d5 = v.am;
      var s4 = v.ap;
      var s3$2 = v.ao;
      var s2$3 = v.an;
      var a$4 = v.q;
      this.a4 = ((a$4.b.length === 32) ? a$4 : $m_ju_Arrays$().ai(a$4, 0, 32));
      this.X = 5;
      this.S = ((1048576 - v.aI) | 0);
      var i$4 = ((v.s + this.S) | 0);
      this.W = (31 & i$4);
      this.M = ((i$4 - this.W) | 0);
      this.a7 = new ($d_O.r().r().r().r().r().C)(32);
      this.a7.b[0] = $m_sci_VectorStatics$().cW($m_sci_VectorStatics$().cW($m_sci_VectorStatics$().cW(v.l, v.aU), v.aV), v.aW);
      var dest$3 = this.a7;
      var length$3 = d5.b.length;
      d5.H(0, dest$3, 1, length$3);
      this.Z = $m_ju_Arrays$().a9(s4, 32);
      this.V = $m_ju_Arrays$().a9(s3$2, 32);
      this.P = $m_ju_Arrays$().a9(s2$3, 32);
      this.a7.b[((1 + d5.b.length) | 0)] = this.Z;
      this.Z.b[s4.b.length] = this.V;
      this.V.b[s3$2.b.length] = this.P;
      this.P.b[s2$3.b.length] = this.a4;
      break;
    }
    case 11: {
      var d6 = v.ab;
      var s5 = v.af;
      var s4$2 = v.ae;
      var s3$3 = v.ad;
      var s2$4 = v.ac;
      var a$5 = v.q;
      this.a4 = ((a$5.b.length === 32) ? a$5 : $m_ju_Arrays$().ai(a$5, 0, 32));
      this.X = 6;
      this.S = ((33554432 - v.ay) | 0);
      var i$5 = ((v.s + this.S) | 0);
      this.W = (31 & i$5);
      this.M = ((i$5 - this.W) | 0);
      this.aX = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aX.b[0] = $m_sci_VectorStatics$().cW($m_sci_VectorStatics$().cW($m_sci_VectorStatics$().cW($m_sci_VectorStatics$().cW(v.l, v.aJ), v.aK), v.aL), v.aM);
      var dest$4 = this.aX;
      var length$4 = d6.b.length;
      d6.H(0, dest$4, 1, length$4);
      this.a7 = $m_ju_Arrays$().a9(s5, 32);
      this.Z = $m_ju_Arrays$().a9(s4$2, 32);
      this.V = $m_ju_Arrays$().a9(s3$3, 32);
      this.P = $m_ju_Arrays$().a9(s2$4, 32);
      this.aX.b[((1 + d6.b.length) | 0)] = this.a7;
      this.a7.b[s5.b.length] = this.Z;
      this.Z.b[s4$2.b.length] = this.V;
      this.V.b[s3$3.b.length] = this.P;
      this.P.b[s2$4.b.length] = this.a4;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.W === 0) && (this.M > 0))) {
    this.W = 32;
    this.M = (((-32) + this.M) | 0);
  }
  return this;
});
$p.qM = (function(elem) {
  if ((this.W === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.a4.b[this.W] = elem;
  this.W = ((1 + this.W) | 0);
  return this;
});
$p.oM = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.W === 0) && (this.M === 0)) && (!this.ho)) ? this.sf(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.pY = (function() {
  if (this.ho) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.W + this.M) | 0);
  var realLen = ((len - this.S) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.a4;
    return new $c_sci_Vector1(((a.b.length === realLen) ? a : $m_ju_Arrays$().a9(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().ai(this.P, 1, i2);
    var prefix1 = this.P.b[0];
    var a$1 = this.P.b[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.b.length === len$1) ? a$1 : $m_ju_Arrays$().a9(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.S) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().ai(this.V, 1, i3);
    var a$2 = this.V.b[0];
    var prefix2 = $m_ju_Arrays$().ai(a$2, 1, a$2.b.length);
    var prefix1$2 = this.V.b[0].b[0];
    var suffix2 = $m_ju_Arrays$().a9(this.V.b[i3], i2$2);
    var a$3 = this.V.b[i3].b[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.b.length === len$2) ? a$3 : $m_ju_Arrays$().a9(a$3, len$2));
    var len1 = prefix1$2.b.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.b.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().ai(this.Z, 1, i4);
    var a$4 = this.Z.b[0];
    var prefix3 = $m_ju_Arrays$().ai(a$4, 1, a$4.b.length);
    var a$5 = this.Z.b[0].b[0];
    var prefix2$2 = $m_ju_Arrays$().ai(a$5, 1, a$5.b.length);
    var prefix1$3 = this.Z.b[0].b[0].b[0];
    var suffix3 = $m_ju_Arrays$().a9(this.Z.b[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().a9(this.Z.b[i4].b[i3$2], i2$3);
    var a$6 = this.Z.b[i4].b[i3$2].b[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.b.length === len$3) ? a$6 : $m_ju_Arrays$().a9(a$6, len$3));
    var len1$2 = prefix1$3.b.length;
    var len12$2 = ((len1$2 + (prefix2$2.b.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.b.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().ai(this.a7, 1, i5);
    var a$7 = this.a7.b[0];
    var prefix4 = $m_ju_Arrays$().ai(a$7, 1, a$7.b.length);
    var a$8 = this.a7.b[0].b[0];
    var prefix3$2 = $m_ju_Arrays$().ai(a$8, 1, a$8.b.length);
    var a$9 = this.a7.b[0].b[0].b[0];
    var prefix2$3 = $m_ju_Arrays$().ai(a$9, 1, a$9.b.length);
    var prefix1$4 = this.a7.b[0].b[0].b[0].b[0];
    var suffix4 = $m_ju_Arrays$().a9(this.a7.b[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().a9(this.a7.b[i5].b[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().a9(this.a7.b[i5].b[i4$2].b[i3$3], i2$4);
    var a$10 = this.a7.b[i5].b[i4$2].b[i3$3].b[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.b.length === len$4) ? a$10 : $m_ju_Arrays$().a9(a$10, len$4));
    var len1$3 = prefix1$4.b.length;
    var len12$3 = ((len1$3 + (prefix2$3.b.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.b.length << 10)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.b.length << 15)) | 0), data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var data$5 = $m_ju_Arrays$().ai(this.aX, 1, i6);
    var a$11 = this.aX.b[0];
    var prefix5 = $m_ju_Arrays$().ai(a$11, 1, a$11.b.length);
    var a$12 = this.aX.b[0].b[0];
    var prefix4$2 = $m_ju_Arrays$().ai(a$12, 1, a$12.b.length);
    var a$13 = this.aX.b[0].b[0].b[0];
    var prefix3$3 = $m_ju_Arrays$().ai(a$13, 1, a$13.b.length);
    var a$14 = this.aX.b[0].b[0].b[0].b[0];
    var prefix2$4 = $m_ju_Arrays$().ai(a$14, 1, a$14.b.length);
    var prefix1$5 = this.aX.b[0].b[0].b[0].b[0].b[0];
    var suffix5 = $m_ju_Arrays$().a9(this.aX.b[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().a9(this.aX.b[i6].b[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().a9(this.aX.b[i6].b[i5$2].b[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().a9(this.aX.b[i6].b[i5$2].b[i4$3].b[i3$4], i2$5);
    var a$15 = this.aX.b[i6].b[i5$2].b[i4$3].b[i3$4].b[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.b.length === len$5) ? a$15 : $m_ju_Arrays$().a9(a$15, len$5));
    var len1$4 = prefix1$5.b.length;
    var len12$4 = ((len1$4 + (prefix2$4.b.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.b.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.b.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.b.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.D = (function() {
  return (((((((("VectorBuilder(len1=" + this.W) + ", lenRest=") + this.M) + ", offset=") + this.S) + ", depth=") + this.X) + ")");
});
$p.b9 = (function() {
  return this.pY();
});
$p.bk = (function(elems) {
  return this.oM(elems);
});
$p.b7 = (function(elem) {
  return this.qM(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  gZ: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.on = null;
  $n_scm_ArrayBuffer$ = this;
  this.on = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.dm = (function(elems) {
  return this.py(elems);
});
$p.py = (function(coll) {
  var k = coll.J();
  if ((k >= 0)) {
    var array = this.q1(this.on, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.cf(array, 0, 2147483647) : coll.r().cf(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).oN(coll);
  }
});
$p.aw = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.tf = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else if ((targetLen > 2147483639)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
  } else if ((arrayLen > 1073741819)) {
    return 2147483639;
  } else {
    var x = (arrayLen << 1);
    var y = ((x > 16) ? x : 16);
    return ((targetLen > y) ? targetLen : y);
  }
});
$p.q1 = (function(array, curSize, targetSize) {
  var newLen = this.tf(array.b.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.H(0, res, 0, curSize);
    return res;
  }
});
$p.av = (function(source) {
  return this.py(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  h4: 1,
  ar: 1,
  W: 1,
  G: 1,
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
  this.e2 = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.bn = (function(size) {
  this.e2.bn(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  h5: 1,
  b5: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.ey = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  ha: 1,
  aW: 1,
  W: 1,
  G: 1,
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
  this.e2 = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.bn = (function(size) {
  this.e2.bn(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  hk: 1,
  b5: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.gi = outer;
  $thiz.e4 = 0;
  $thiz.dh = null;
  $thiz.gj = outer.aY.b.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.e4 = 0;
  this.dh = null;
  this.gj = 0;
  this.gi = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.x = (function() {
  if ((this.dh !== null)) {
    return true;
  } else {
    while ((this.e4 < this.gj)) {
      var n = this.gi.aY.b[this.e4];
      this.e4 = ((1 + this.e4) | 0);
      if ((n !== null)) {
        this.dh = n;
        return true;
      }
    }
    return false;
  }
});
$p.n = (function() {
  if ((!this.x())) {
    return $m_sc_Iterator$().U.n();
  } else {
    var r = this.jJ(this.dh);
    this.dh = this.dh.aZ;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.gk = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.gk = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.bn = (function(size) {
});
$p.bk = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b9 = (function() {
  return this.gk;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.ey = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  hn: 1,
  aW: 1,
  W: 1,
  G: 1,
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
  return new $c_scm_ListBuffer().gS(elems);
});
$p.aw = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.av = (function(source) {
  return new $c_scm_ListBuffer().gS(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  hq: 1,
  ar: 1,
  W: 1,
  G: 1,
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
  this.jn = null;
  this.ow = null;
  this.ov = 0;
  this.jn = underlying;
  this.ow = mutationCount;
  this.ov = (mutationCount.Y() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.x = (function() {
  $m_scm_MutationTracker$().p9(this.ov, (this.ow.Y() | 0), "mutation occurred during iteration");
  return this.jn.x();
});
$p.n = (function() {
  return this.jn.n();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  hs: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.ba();
    var x$3 = x.ba();
    return (x$2 === x$3);
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.a3.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.a3.Q())) + "]") : clazz.a3.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.F)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.F)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.gm = 0;
  this.oA = 0;
  this.oB = null;
  this.oB = x$2;
  this.gm = 0;
  this.oA = x$2.aB();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.x = (function() {
  return (this.gm < this.oA);
});
$p.n = (function() {
  var result = this.oB.aC(this.gm);
  this.gm = ((1 + this.gm) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  i7: 1,
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
  return this.pz(elems);
});
$p.aw = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.pz = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).b9();
});
$p.av = (function(source) {
  return this.pz(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  ie: 1,
  ar: 1,
  W: 1,
  G: 1,
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
  return this.jQ(elems);
});
$p.jQ = (function(source) {
  return this.aw().bk(source).b9();
});
$p.aw = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.e5))));
});
$p.av = (function(source) {
  return this.jQ(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  iu: 1,
  ar: 1,
  W: 1,
  G: 1,
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
  this.e6 = null;
  this.e6 = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.k1 = (function() {
  return true;
});
$p.pE = (function() {
  return false;
});
$p.Q = (function() {
  var $x_1 = this.e6;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ag : $x_1);
});
$p.k4 = (function(f) {
  return this;
});
$p.pS = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.cc(this.e6, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().eN(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
  }
});
$p.cz = (function(fa, fb) {
  return fa.i(this.e6);
});
$p.aD = (function() {
  return "Failure";
});
$p.aB = (function() {
  return 1;
});
$p.aC = (function(x$1) {
  return ((x$1 === 0) ? this.e6 : $m_sr_Statics$().eW(x$1));
});
$p.bB = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.E = (function() {
  return $m_s_util_hashing_MurmurHash3$().d2(this, (-889275714), false);
});
$p.D = (function() {
  return $m_sr_ScalaRunTime$().jq(this);
});
$p.z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.e6;
    var x$2 = x$1.e6;
    return ((x === null) ? (x$2 === null) : x.z(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ct)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  ct: 1,
  cv: 1,
  v: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.eJ = null;
  this.eJ = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.k1 = (function() {
  return false;
});
$p.pE = (function() {
  return true;
});
$p.Q = (function() {
  return this.eJ;
});
$p.k4 = (function(f) {
  try {
    return new $c_s_util_Success(f.i(this.eJ));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().eN(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
  }
});
$p.pS = (function(pf) {
  return this;
});
$p.cz = (function(fa, fb) {
  try {
    return fb.i(this.eJ);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().eN(e$2)) {
      return fa.i(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
  }
});
$p.aD = (function() {
  return "Success";
});
$p.aB = (function() {
  return 1;
});
$p.aC = (function(x$1) {
  return ((x$1 === 0) ? this.eJ : $m_sr_Statics$().eW(x$1));
});
$p.bB = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.E = (function() {
  return $m_s_util_hashing_MurmurHash3$().d2(this, (-889275714), false);
});
$p.D = (function() {
  return $m_sr_ScalaRunTime$().jq(this);
});
$p.z = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().A(this.eJ, x$1.eJ)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  cu: 1,
  cv: 1,
  v: 1,
  d: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  if ((!transaction.ri($thiz))) {
    transaction.rE($thiz);
  }
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gD($thiz.jC(), transaction);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V($thiz) {
  var arr = $thiz.hV;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$1 = arr[i];
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(_$1.hX, _$1, false);
    i = ((1 + i) | 0);
  }
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V($thiz) {
  var arr = $thiz.hV;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$2 = arr[i];
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(_$2.hX, _$2);
    i = ((1 + i) | 0);
  }
}
class $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(causes) {
    super();
    this.fN = null;
    this.fN = causes;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().re(causes), null, true, true);
    var this$3 = causes.eQ($m_s_$less$colon$less$().hd).bW();
    if ((!this$3.j())) {
      this.jZ(this$3.Q());
    }
  }
  bB() {
    return new $c_s_Product$$anon$1(this);
  }
  E() {
    return $m_s_util_hashing_MurmurHash3$().d2(this, (-889275714), false);
  }
  z(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError)) {
      var x = this.fN;
      var x$2 = x$0.fN;
      return ((x === null) ? (x$2 === null) : x.z(x$2));
    } else {
      return false;
    }
  }
  aB() {
    return 1;
  }
  aD() {
    return "CombinedError";
  }
  aC(n) {
    if ((n === 0)) {
      return this.fN;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  D() {
    return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(this.fN.eQ($m_s_$less$colon$less$().hd).f0(), "", "; ", ""));
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$CombinedError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b9)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$CombinedError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$CombinedError, "com.raquo.airstream.core.AirstreamError$CombinedError", ({
  b9: 1,
  au: 1,
  u: 1,
  a: 1,
  d: 1,
  v: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fP = null;
    this.fO = null;
    this.fP = error;
    this.fO = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eS(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eS(cause)), null, true, true);
    this.jZ(cause);
  }
  bB() {
    return new $c_s_Product$$anon$1(this);
  }
  E() {
    return $m_s_util_hashing_MurmurHash3$().d2(this, (-889275714), false);
  }
  z(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.fP;
      var x$2 = x$0.fP;
      if (((x === null) ? (x$2 === null) : x.z(x$2))) {
        var x$3 = this.fO;
        var x$4 = x$0.fO;
        return ((x$3 === null) ? (x$4 === null) : x$3.z(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aB() {
    return 2;
  }
  aD() {
    return "ErrorHandlingError";
  }
  aC(n) {
    if ((n === 0)) {
      return this.fP;
    }
    if ((n === 1)) {
      return this.fO;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  D() {
    return ((("ErrorHandlingError: " + this.fP) + "; cause: ") + this.fO);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ba)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  ba: 1,
  au: 1,
  u: 1,
  a: 1,
  d: 1,
  v: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.fQ = null;
    this.fQ = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eS(error)), null, true, true);
  }
  bB() {
    return new $c_s_Product$$anon$1(this);
  }
  E() {
    return $m_s_util_hashing_MurmurHash3$().d2(this, (-889275714), false);
  }
  z(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.fQ;
      var x$2 = x$0.fQ;
      return ((x === null) ? (x$2 === null) : x.z(x$2));
    } else {
      return false;
    }
  }
  aB() {
    return 1;
  }
  aD() {
    return "ObserverError";
  }
  aC(n) {
    if ((n === 0)) {
      return this.fQ;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  D() {
    return ("ObserverError: " + this.fQ);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bb)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bb: 1,
  au: 1,
  u: 1,
  a: 1,
  d: 1,
  v: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fS = null;
    this.fR = null;
    this.fS = error;
    this.fR = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eS(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eS(cause)), null, true, true);
    this.jZ(cause);
  }
  bB() {
    return new $c_s_Product$$anon$1(this);
  }
  E() {
    return $m_s_util_hashing_MurmurHash3$().d2(this, (-889275714), false);
  }
  z(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.fS;
      var x$2 = x$0.fS;
      if (((x === null) ? (x$2 === null) : x.z(x$2))) {
        var x$3 = this.fR;
        var x$4 = x$0.fR;
        return ((x$3 === null) ? (x$4 === null) : x$3.z(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aB() {
    return 2;
  }
  aD() {
    return "ObserverErrorHandlingError";
  }
  aC(n) {
    if ((n === 0)) {
      return this.fS;
    }
    if ((n === 1)) {
      return this.fR;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  D() {
    return ((("ObserverErrorHandlingError: " + this.fS) + "; cause: ") + this.fR);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bc)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bc: 1,
  au: 1,
  u: 1,
  a: 1,
  d: 1,
  v: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.fa = null;
    this.f9 = 0;
    this.fa = trx;
    this.f9 = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  bB() {
    return new $c_s_Product$$anon$1(this);
  }
  E() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().m(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().m(acc, $m_sr_Statics$().a2(this.fa));
    acc = $m_sr_Statics$().m(acc, this.f9);
    return $m_sr_Statics$().N(acc, 2);
  }
  z(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.f9 === x$0.f9)) {
        var x = this.fa;
        var x$2 = x$0.fa;
        return (x === x$2);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aB() {
    return 2;
  }
  aD() {
    return "TransactionDepthExceeded";
  }
  aC(n) {
    if ((n === 0)) {
      return this.fa;
    }
    if ((n === 1)) {
      return this.f9;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  D() {
    return ((("TransactionDepthExceeded: " + this.fa) + "; maxDepth: ") + this.f9);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bd)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bd: 1,
  au: 1,
  u: 1,
  a: 1,
  d: 1,
  v: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.gU();
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
  $thiz.kQ = 1;
  $thiz.h1 = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.h1 = ((1 + $thiz.h1) | 0);
  $thiz.h0.kK.Y();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.h0.kI.Y(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().eN(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
    }
  }
  $x_1.pS(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.h0.kJ.Y();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.lf = null;
  this.dv = null;
  this.ib = null;
  this.ia = null;
  this.ax = null;
  this.lf = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.ib = initial;
  this.ia = new $c_Lcom_raquo_airstream_state_VarSignal(this.ib, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.ax = this.ia;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.eg = (function() {
  return this.lf;
});
$p.ed = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.D = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fG = (function() {
  return this.ax;
});
$p.ti = (function(value, transaction) {
  this.ib = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.ia, value, transaction);
});
$p.f1 = (function() {
  return this.ax;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  dv: 1,
  ag: 1,
  av: 1,
  aE: 1,
  a1: 1,
  dx: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.iA;
  if ((x === (void 0))) {
    $thiz.iA = $m_sjs_js_defined$().qV($m_Lcom_raquo_ew_JsArray$().br($m_sr_ScalaRunTime$().c(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.nH;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].tV() === propDomName)) {
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
  this.iz = null;
  this.nI = null;
  this.nG = null;
  this.nF = null;
  this.nE = null;
  this.iB = null;
  this.cl = null;
  this.nH = null;
  this.iA = null;
  this.iB = tag;
  this.cl = ref;
  this.iz = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.nH = (void 0);
  this.iA = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.fv = (function() {
  return this.iz;
});
$p.pd = (function(x$1) {
  this.iz = x$1;
});
$p.cx = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eL(parentNode, this, (void 0));
});
$p.bV = (function() {
  return this.nI;
});
$p.jy = (function(x$0) {
  this.nI = x$0;
});
$p.jB = (function() {
  return this.nG;
});
$p.fw = (function() {
  return this.nF;
});
$p.gz = (function() {
  return this.nE;
});
$p.jA = (function(x$1) {
  this.nF = x$1;
});
$p.jz = (function(x$1) {
  this.nE = x$1;
});
$p.pe = (function(x$0) {
  this.nG = x$0;
});
$p.eo = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.ek = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.rj = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().pD(this.cl)) {
    var x1 = this.iB;
    if (false) {
      return x1.tJ();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().no;
  }
});
$p.sm = (function(propDomName) {
  var x = this.rj();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().sc(x, propDomName, 0));
});
$p.pK = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.sm(key.d6)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.d6)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.d6) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().pi(this.cl)) + "` that already has an input controller for `") + key.d6) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.d6);
      }
    }
  }
});
$p.D = (function() {
  return (("ReactiveHtmlElement(" + ((this.cl !== null) ? this.cl.outerHTML : ("tag=" + this.iB.iF))) + ")");
});
$p.aa = (function() {
  return this.cl;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  eG: 1,
  ay: 1,
  U: 1,
  aF: 1,
  aO: 1,
  bq: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(tag, ref) {
  this.iC = null;
  this.nM = null;
  this.nL = null;
  this.nK = null;
  this.nJ = null;
  this.nN = null;
  this.dA = null;
  this.nN = tag;
  this.dA = ref;
  this.iC = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveSvgElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = $p;
$p.fv = (function() {
  return this.iC;
});
$p.pd = (function(x$1) {
  this.iC = x$1;
});
$p.cx = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eL(parentNode, this, (void 0));
});
$p.bV = (function() {
  return this.nM;
});
$p.jy = (function(x$0) {
  this.nM = x$0;
});
$p.jB = (function() {
  return this.nL;
});
$p.fw = (function() {
  return this.nK;
});
$p.gz = (function() {
  return this.nJ;
});
$p.jA = (function(x$1) {
  this.nK = x$1;
});
$p.jz = (function(x$1) {
  this.nJ = x$1;
});
$p.pe = (function(x$0) {
  this.nL = x$0;
});
$p.eo = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.ek = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.pK = (function(key) {
});
$p.D = (function() {
  return (("ReactiveSvgElement(" + ((this.dA !== null) ? this.dA.outerHTML : ("tag=" + this.nN.iG))) + ")");
});
$p.aa = (function() {
  return this.dA;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveSvgElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveSvgElement, "com.raquo.laminar.nodes.ReactiveSvgElement", ({
  eH: 1,
  ay: 1,
  U: 1,
  aF: 1,
  aO: 1,
  bq: 1
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
  eR: 1,
  aQ: 1,
  E: 1,
  D: 1,
  u: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bv: 1,
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
  eV: 1,
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
  eX: 1,
  ah: 1,
  a: 1,
  a6: 1,
  a2: 1,
  az: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.u === that.u) && ($thiz.v === that.v)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.u ^ $thiz.v);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().pQ($thiz.u, $thiz.v);
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
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  f3: 1,
  bw: 1,
  E: 1,
  D: 1,
  u: 1,
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
  var str = $m_jl_Character$().tu(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  f8: 1,
  a: 1,
  a6: 1,
  aP: 1,
  a2: 1,
  az: 1
}), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().i($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  fb: 1,
  aQ: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.rZ = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.aD = (function() {
  return "None";
});
$p.aB = (function() {
  return 0;
});
$p.aC = (function(x$1) {
  return $m_sr_Statics$().eW(x$1);
});
$p.bB = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.E = (function() {
  return 2433880;
});
$p.D = (function() {
  return "None";
});
$p.Q = (function() {
  this.rZ();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  fx: 1,
  bB: 1,
  b: 1,
  v: 1,
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
  this.c2 = null;
  this.c2 = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.Q = (function() {
  return this.c2;
});
$p.aD = (function() {
  return "Some";
});
$p.aB = (function() {
  return 1;
});
$p.aC = (function(x$1) {
  return ((x$1 === 0) ? this.c2 : $m_sr_Statics$().eW(x$1));
});
$p.bB = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.E = (function() {
  return $m_s_util_hashing_MurmurHash3$().d2(this, (-889275714), false);
});
$p.D = (function() {
  return $m_sr_ScalaRunTime$().jq(this);
});
$p.z = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().A(this.c2, x$1.c2)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bC: 1,
  bB: 1,
  b: 1,
  v: 1,
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
$p.ce = (function() {
  return this.bx();
});
$p.gF = (function(coll) {
  return this.bs().av(coll);
});
$p.eZ = (function() {
  return this.bs().aw();
});
$p.bW = (function() {
  return $f_sc_IterableOps__headOption__s_Option(this);
});
$p.a5 = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$p.aj = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.fy = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.j = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.cf = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.e8 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.f0 = (function() {
  return $m_sci_Nil$().ej(this);
});
$p.J = (function() {
  return (-1);
});
$p.gE = (function(coll) {
  return this.gF(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.c3 = xs;
  $thiz.K = 0;
  $thiz.bO = $m_jl_reflect_Array$().cA($thiz.c3);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.c3 = null;
  this.K = 0;
  this.bO = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.J = (function() {
  return ((this.bO - this.K) | 0);
});
$p.x = (function() {
  return (this.K < this.bO);
});
$p.n = (function() {
  if ((this.K >= $m_jl_reflect_Array$().cA(this.c3))) {
    $m_sc_Iterator$().U.n();
  }
  var r = $m_sr_ScalaRunTime$().eO(this.c3, this.K);
  this.K = ((1 + this.K) | 0);
  return r;
});
$p.dn = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.K + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.bO;
    } else {
      var a = this.bO;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.K = $x_1;
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
  return ((value < 0) ? 0 : ((value > $thiz.c4) ? $thiz.c4 : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.iZ = self;
  $thiz.d7 = 0;
  $thiz.c4 = self.C();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.iZ = null;
  this.d7 = 0;
  this.c4 = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.J = (function() {
  return this.c4;
});
$p.x = (function() {
  return (this.c4 > 0);
});
$p.n = (function() {
  if ((this.c4 > 0)) {
    var r = this.iZ.F(this.d7);
    this.d7 = ((1 + this.d7) | 0);
    this.c4 = (((-1) + this.c4) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().U.n();
  }
});
$p.dn = (function(n) {
  if ((n > 0)) {
    this.d7 = ((this.d7 + n) | 0);
    var b = ((this.c4 - n) | 0);
    this.c4 = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gT = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.c4 = ((b < 0) ? 0 : b);
  this.d7 = ((this.d7 + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bI: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.gk = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().U);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.qK = (function(elem) {
  this.gk = this.gk.jD(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.b7 = (function(elem) {
  return this.qK(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  fY: 1,
  hm: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.cZ(x, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => default$1.i(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.r();
  while (it.x()) {
    var next = it.n();
    f.eM(next.bq(), next.bj());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.r(), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bq();
      var v = x0$1$2$2.bj();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.eZ();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.r();
  while (it.x()) {
    var next = it.n();
    if (seen.hB(f.i(next))) {
      builder.b7(next);
    }
  }
  return builder.b9();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.ef().aw();
  b.bk($thiz);
  b.bk(suffix);
  return b.b9();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.j1)) {
    $thiz.j2 = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.j1 = true;
  }
  return $thiz.j2;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.j1) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.j2);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.j2 = null;
  this.j3 = null;
  this.j1 = false;
  $n_sci_ArraySeq$ = this;
  this.j3 = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.jM = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.hS($m_s_Array$().pw(it, tag)));
});
$p.hL = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().hS($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.hS = (function(x) {
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
$p.jL = (function(it, evidence$5) {
  return this.jM(it, evidence$5);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  ge: 1,
  bM: 1,
  bG: 1,
  bF: 1,
  bH: 1,
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
  this.c6 = 0;
  this.g7 = 0;
  this.eC = null;
  this.bR = 0;
  this.da = null;
  this.g8 = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.by);
  while (this.x()) {
    var originalHash = this.eC.gG(this.c6);
    outer.fH(outer.cP, this.eC.ee(this.c6), this.eC.dp(this.c6), originalHash, $m_sc_Hashing$().cH(originalHash), 0);
    this.c6 = ((1 + this.c6) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.k8 = (function() {
  $m_sc_Iterator$().U.n();
  throw new $c_jl_ClassCastException();
});
$p.n = (function() {
  this.k8();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  gi: 1,
  bZ: 1,
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
  this.fq = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  gy: 1,
  gz: 1,
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
  gA: 1,
  gB: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dQ = 0;
  this.cT = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  gC: 1,
  gD: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.dK = 0;
  this.hm = null;
  this.c7 = 0;
  this.g9 = null;
  this.ga = null;
  this.ja = 0;
  this.oh = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.ja = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.E = (function() {
  return $m_s_util_hashing_MurmurHash3$().q8(this.ja, $m_sr_Statics$().a2(this.oh), (-889275714));
});
$p.sK = (function() {
  if ((!this.x())) {
    $m_sc_Iterator$().U.n();
  }
  this.ja = this.hm.gG(this.dK);
  this.oh = this.hm.dp(this.dK);
  this.dK = (((-1) + this.dK) | 0);
  return this;
});
$p.n = (function() {
  return this.sK();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  gF: 1,
  gf: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.c6 = 0;
  this.g7 = 0;
  this.eC = null;
  this.bR = 0;
  this.da = null;
  this.g8 = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.sJ = (function() {
  if ((!this.x())) {
    $m_sc_Iterator$().U.n();
  }
  var payload = this.eC.jT(this.c6);
  this.c6 = ((1 + this.c6) | 0);
  return payload;
});
$p.n = (function() {
  return this.sJ();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  gG: 1,
  bZ: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bT <= $thiz.aO)) {
    $m_sc_Iterator$().U.n();
  }
  $thiz.dS = ((1 + $thiz.dS) | 0);
  var slice = $thiz.jc.d4($thiz.dS);
  while ((slice.b.length === 0)) {
    $thiz.dS = ((1 + $thiz.dS) | 0);
    slice = $thiz.jc.d4($thiz.dS);
  }
  $thiz.ge = $thiz.eF;
  var count = $thiz.oj;
  var idx = $thiz.dS;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.dR = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x1 = $thiz.dR;
  switch (x1) {
    case 1: {
      $thiz.bf = slice;
      break;
    }
    case 2: {
      $thiz.bg = slice;
      break;
    }
    case 3: {
      $thiz.bI = slice;
      break;
    }
    case 4: {
      $thiz.cE = slice;
      break;
    }
    case 5: {
      $thiz.eE = slice;
      break;
    }
    case 6: {
      $thiz.jb = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.eF = (($thiz.ge + Math.imul(slice.b.length, (1 << Math.imul(5, (((-1) + $thiz.dR) | 0))))) | 0);
  if (($thiz.eF > $thiz.df)) {
    $thiz.eF = $thiz.df;
  }
  if (($thiz.dR > 1)) {
    $thiz.fr = (((-1) + (1 << Math.imul(5, $thiz.dR))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.aO - $thiz.bT) | 0) + $thiz.df) | 0);
  if ((pos === $thiz.eF)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dR > 1)) {
    var io = ((pos - $thiz.ge) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.fr ^ io));
    $thiz.fr = io;
  }
  $thiz.bT = (($thiz.bT - $thiz.aO) | 0);
  var a = $thiz.bf.b.length;
  var b = $thiz.bT;
  $thiz.de = ((a < b) ? a : b);
  $thiz.aO = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bf = $thiz.bg.b[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bg = $thiz.bI.b[(31 & ((io >>> 10) | 0))];
    $thiz.bf = $thiz.bg.b[0];
  } else if ((xor < 1048576)) {
    $thiz.bI = $thiz.cE.b[(31 & ((io >>> 15) | 0))];
    $thiz.bg = $thiz.bI.b[0];
    $thiz.bf = $thiz.bg.b[0];
  } else if ((xor < 33554432)) {
    $thiz.cE = $thiz.eE.b[(31 & ((io >>> 20) | 0))];
    $thiz.bI = $thiz.cE.b[0];
    $thiz.bg = $thiz.bI.b[0];
    $thiz.bf = $thiz.bg.b[0];
  } else {
    $thiz.eE = $thiz.jb.b[((io >>> 25) | 0)];
    $thiz.cE = $thiz.eE.b[0];
    $thiz.bI = $thiz.cE.b[0];
    $thiz.bg = $thiz.bI.b[0];
    $thiz.bf = $thiz.bg.b[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bf = $thiz.bg.b[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bg = $thiz.bI.b[(31 & ((io >>> 10) | 0))];
    $thiz.bf = $thiz.bg.b[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bI = $thiz.cE.b[(31 & ((io >>> 15) | 0))];
    $thiz.bg = $thiz.bI.b[(31 & ((io >>> 10) | 0))];
    $thiz.bf = $thiz.bg.b[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cE = $thiz.eE.b[(31 & ((io >>> 20) | 0))];
    $thiz.bI = $thiz.cE.b[(31 & ((io >>> 15) | 0))];
    $thiz.bg = $thiz.bI.b[(31 & ((io >>> 10) | 0))];
    $thiz.bf = $thiz.bg.b[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.eE = $thiz.jb.b[((io >>> 25) | 0)];
    $thiz.cE = $thiz.eE.b[(31 & ((io >>> 20) | 0))];
    $thiz.bI = $thiz.cE.b[(31 & ((io >>> 15) | 0))];
    $thiz.bg = $thiz.bI.b[(31 & ((io >>> 10) | 0))];
    $thiz.bf = $thiz.bg.b[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.jc = null;
  this.df = 0;
  this.oj = 0;
  this.bf = null;
  this.bg = null;
  this.bI = null;
  this.cE = null;
  this.eE = null;
  this.jb = null;
  this.de = 0;
  this.aO = 0;
  this.fr = 0;
  this.bT = 0;
  this.dS = 0;
  this.dR = 0;
  this.ge = 0;
  this.eF = 0;
  this.jc = v;
  this.df = totalLength;
  this.oj = sliceCount;
  this.bf = v.l;
  this.de = this.bf.b.length;
  this.aO = 0;
  this.fr = 0;
  this.bT = this.df;
  this.dS = 0;
  this.dR = 1;
  this.ge = 0;
  this.eF = this.de;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.J = (function() {
  return ((this.bT - this.aO) | 0);
});
$p.x = (function() {
  return (this.bT > this.aO);
});
$p.n = (function() {
  if ((this.aO === this.de)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.bf.b[this.aO];
  this.aO = ((1 + this.aO) | 0);
  return r;
});
$p.dn = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.aO - this.bT) | 0) + this.df) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.df;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.df)) {
      this.aO = 0;
      this.bT = 0;
      this.de = 0;
    } else {
      while ((newpos >= this.eF)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.ge) | 0);
      if ((this.dR > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.fr ^ io));
        this.fr = io;
      }
      this.de = this.bf.b.length;
      this.aO = (31 & io);
      this.bT = ((this.aO + ((this.df - newpos) | 0)) | 0);
      if ((this.de > this.bT)) {
        this.de = this.bT;
      }
    }
  }
  return this;
});
$p.cf = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().cA(xs);
  var srcLen = ((this.bT - this.aO) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.aO === this.de)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.bf.b.length - this.aO) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.bf;
      var srcPos = this.aO;
      var destPos = ((start + copied) | 0);
      src.H(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().gA(this.bf, this.aO, xs, ((start + copied) | 0), count);
    }
    this.aO = ((this.aO + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  gI: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  B: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.jh = 0;
  $thiz.oo = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.jh = 0;
  this.oo = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.bn = (function(size) {
  if ((this.jh < size)) {
    this.te(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.jj = null;
  this.oq = null;
  $n_scm_ArraySeq$ = this;
  this.jj = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.oq = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.rQ = (function(it, evidence$2) {
  return this.k3($m_s_Array$().pw(it, evidence$2));
});
$p.hL = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.ba()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().k3(x$2$2))));
});
$p.k3 = (function(x) {
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
$p.jL = (function(it, evidence$5) {
  return this.rQ(it, evidence$5);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  h9: 1,
  bM: 1,
  bG: 1,
  bF: 1,
  bH: 1,
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
  this.e4 = 0;
  this.dh = null;
  this.gj = 0;
  this.gi = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.jJ = (function(nd) {
  return nd.eH;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  hh: 1,
  b6: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.e4 = 0;
  this.dh = null;
  this.gj = 0;
  this.gi = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.jJ = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  hi: 1,
  b6: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.e4 = 0;
  this.dh = null;
  this.gj = 0;
  this.gi = null;
  this.jm = 0;
  this.ou = null;
  this.ou = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.jm = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.E = (function() {
  return this.jm;
});
$p.jJ = (function(nd) {
  this.jm = this.ou.hN(nd.di);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  hj: 1,
  b6: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.gl = null;
  this.gl = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.z = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.E = (function() {
  return $m_sr_Statics$().a2(this.gl);
});
$p.D = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.gl);
});
$p.ba = (function() {
  return this.gl;
});
$p.bN = (function(len) {
  return this.gl.a3.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  hx: 1,
  F: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.c3 = null;
  this.K = 0;
  this.bO = 0;
  this.iR = null;
  this.iR = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.sL = (function() {
  if ((this.K >= this.iR.b.length)) {
    $m_sc_Iterator$().U.n();
  }
  var r = this.iR.b[this.K];
  this.K = ((1 + this.K) | 0);
  return r;
});
$p.n = (function() {
  return this.sL();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  fH: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.c3 = null;
  this.K = 0;
  this.bO = 0;
  this.iS = null;
  this.iS = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.sM = (function() {
  if ((this.K >= this.iS.b.length)) {
    $m_sc_Iterator$().U.n();
  }
  var r = this.iS.b[this.K];
  this.K = ((1 + this.K) | 0);
  return r;
});
$p.n = (function() {
  return $bC(this.sM());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  fI: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.c3 = null;
  this.K = 0;
  this.bO = 0;
  this.iT = null;
  this.iT = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.sN = (function() {
  if ((this.K >= this.iT.b.length)) {
    $m_sc_Iterator$().U.n();
  }
  var r = this.iT.b[this.K];
  this.K = ((1 + this.K) | 0);
  return r;
});
$p.n = (function() {
  return this.sN();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  fJ: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.c3 = null;
  this.K = 0;
  this.bO = 0;
  this.iU = null;
  this.iU = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.sO = (function() {
  if ((this.K >= this.iU.b.length)) {
    $m_sc_Iterator$().U.n();
  }
  var r = this.iU.b[this.K];
  this.K = ((1 + this.K) | 0);
  return r;
});
$p.n = (function() {
  return this.sO();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  fK: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.c3 = null;
  this.K = 0;
  this.bO = 0;
  this.iV = null;
  this.iV = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.sP = (function() {
  if ((this.K >= this.iV.b.length)) {
    $m_sc_Iterator$().U.n();
  }
  var r = this.iV.b[this.K];
  this.K = ((1 + this.K) | 0);
  return r;
});
$p.n = (function() {
  return this.sP();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  fL: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.c3 = null;
  this.K = 0;
  this.bO = 0;
  this.iW = null;
  this.iW = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.sQ = (function() {
  if ((this.K >= this.iW.b.length)) {
    $m_sc_Iterator$().U.n();
  }
  var t = this.iW.b[this.K];
  var lo = t.u;
  var hi = t.v;
  this.K = ((1 + this.K) | 0);
  return new $c_RTLong(lo, hi);
});
$p.n = (function() {
  return this.sQ();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  fM: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.c3 = null;
  this.K = 0;
  this.bO = 0;
  this.iX = null;
  this.iX = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.sR = (function() {
  if ((this.K >= this.iX.b.length)) {
    $m_sc_Iterator$().U.n();
  }
  var r = this.iX.b[this.K];
  this.K = ((1 + this.K) | 0);
  return r;
});
$p.n = (function() {
  return this.sR();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  fN: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.c3 = null;
  this.K = 0;
  this.bO = 0;
  this.o1 = null;
  this.o1 = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.sS = (function() {
  if ((this.K >= this.o1.b.length)) {
    $m_sc_Iterator$().U.n();
  }
  this.K = ((1 + this.K) | 0);
});
$p.n = (function() {
  this.sS();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  fO: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.c3 = null;
  this.K = 0;
  this.bO = 0;
  this.iY = null;
  this.iY = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.sT = (function() {
  if ((this.K >= this.iY.b.length)) {
    $m_sc_Iterator$().U.n();
  }
  var r = this.iY.b[this.K];
  this.K = ((1 + this.K) | 0);
  return r;
});
$p.n = (function() {
  return this.sT();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  fP: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.ce() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.X)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.jh = 0;
  this.oo = 0;
  this.ft = null;
  this.op = false;
  this.ji = null;
  this.ft = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.op = (elementClass === $d_C.l());
  this.ji = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.oP = (function(elem) {
  var unboxedElem = (this.op ? $uC(elem) : ((elem === null) ? this.ft.a3.z : elem));
  this.ji.push(unboxedElem);
  return this;
});
$p.qD = (function(xs) {
  var it = xs.r();
  while (it.x()) {
    this.oP(it.n());
  }
  return this;
});
$p.te = (function(size) {
});
$p.b9 = (function() {
  var elemRuntimeClass = ((this.ft === $d_V.l()) ? $d_jl_Void.l() : (((this.ft === $d_sr_Null$.l()) || (this.ft === $d_sr_Nothing$.l())) ? $d_O.l() : this.ft));
  return elemRuntimeClass.a3.r().w(this.ji);
});
$p.D = (function() {
  return "ArrayBuilder.generic";
});
$p.bk = (function(elems) {
  return this.qD(elems);
});
$p.b7 = (function(elem) {
  return this.oP(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  h8: 1,
  h7: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.iZ = null;
  this.d7 = 0;
  this.c4 = 0;
  this.ot = null;
  this.os = 0;
  this.ot = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.os = (mutationCount.Y() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.x = (function() {
  $m_scm_MutationTracker$().p9(this.os, (this.ot.Y() | 0), "mutation occurred during iteration");
  return (this.c4 > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  hd: 1,
  bI: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.a8 = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.D = (function() {
  return this.a8;
});
$p.z = (function(that) {
  return (this === that);
});
$p.E = (function() {
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
    this.ag = null;
    this.ag = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gH() {
    return $dp_toString__T(this.ag);
  }
  aD() {
    return "JavaScriptException";
  }
  aB() {
    return 1;
  }
  aC(x$1) {
    return ((x$1 === 0) ? this.ag : $m_sr_Statics$().eW(x$1));
  }
  bB() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  E() {
    return $m_s_util_hashing_MurmurHash3$().d2(this, (-889275714), false);
  }
  z(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().A(this.ag, x$1.ag)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  cr: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1,
  v: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.hK() === (void 0)))) {
    $thiz.hA($m_Lcom_raquo_airstream_core_Signal$().pI());
  }
  $thiz.k6(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.hK();
  if ((x === (void 0))) {
    $thiz.hA($m_Lcom_raquo_airstream_core_Signal$().pI());
    var nextValue = $thiz.hG();
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
  var isError = nextValue.k1();
  var elem = false;
  elem = false;
  $thiz.cI(false);
  var this$ = $thiz.cX();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.ei(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.d1();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.gP(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cI(true);
  var x = $thiz.eh();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].Y();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cL(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cI(false);
  var this$ = $thiz.cX();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.dr(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cL(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.d1();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.hM(nextValue, transaction);
  }
  $thiz.cI(true);
  var x = $thiz.eh();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].Y();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.cI(false);
  var this$ = $thiz.cX();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.gM(nextError);
  }
  var this$$1 = $thiz.d1();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.kc(nextError, transaction);
  }
  $thiz.cI(true);
  var x = $thiz.eh();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].Y();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, _$2, transaction);
  })));
}
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.j())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.y();
      n = temp$n;
      s = temp$s;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.bt(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.eZ();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.r();
    var different = false;
    while (it.x()) {
      var next = it.n();
      if (seen.hB(f.i(next))) {
        builder.b7(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.b9() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.a8 = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.ba = (function() {
  return $d_Z.l();
});
$p.bN = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.a8 = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.ba = (function() {
  return $d_B.l();
});
$p.bN = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.a8 = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.ba = (function() {
  return $d_C.l();
});
$p.bN = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.a8 = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.ba = (function() {
  return $d_D.l();
});
$p.bN = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.a8 = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.ba = (function() {
  return $d_F.l();
});
$p.bN = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.a8 = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.ba = (function() {
  return $d_I.l();
});
$p.bN = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.a8 = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.ba = (function() {
  return $d_J.l();
});
$p.bN = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.dk = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.D = (function() {
  return this.dk;
});
$p.z = (function(that) {
  return (this === that);
});
$p.E = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.a8 = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.ba = (function() {
  return $d_S.l();
});
$p.bN = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.a8 = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.ba = (function() {
  return $d_V.l();
});
$p.bN = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
function $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray($thiz) {
  return $thiz.fM.map(((_$1) => _$1.fu()));
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V($thiz) {
  var arr = $thiz.fM;
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
  var arr = $thiz.fM;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var parent = arr[i];
    var ix = i;
    var newLastUpdateId = parent.fu();
    if ((newLastUpdateId !== ($thiz.oJ()[ix] | 0))) {
      $thiz.oJ()[ix] = newLastUpdateId;
      var ev$3 = true;
      elem = ev$3;
    }
    i = ((1 + i) | 0);
  }
  return elem;
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__updateCurrentValueFromParent__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, $thiz.jC());
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
$p.bs = (function() {
  return $m_sc_View$();
});
$p.D = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bx = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.bb() === that.bb())) {
      try {
        return $thiz.to(that);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.aY)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aY)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.dk = null;
  this.dk = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.ba = (function() {
  return $d_O.l();
});
$p.bN = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  hy: 1,
  aK: 1,
  aJ: 1,
  T: 1,
  F: 1,
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
  this.a8 = null;
  this.a8 = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  hA: 1,
  hz: 1,
  a8: 1,
  T: 1,
  F: 1,
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
  this.a8 = null;
  this.a8 = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  hC: 1,
  hB: 1,
  a8: 1,
  T: 1,
  F: 1,
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
  this.a8 = null;
  this.a8 = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  hE: 1,
  hD: 1,
  a8: 1,
  T: 1,
  F: 1,
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
  this.a8 = null;
  this.a8 = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  hG: 1,
  hF: 1,
  a8: 1,
  T: 1,
  F: 1,
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
  this.a8 = null;
  this.a8 = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  hI: 1,
  hH: 1,
  a8: 1,
  T: 1,
  F: 1,
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
  this.a8 = null;
  this.a8 = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  hK: 1,
  hJ: 1,
  a8: 1,
  T: 1,
  F: 1,
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
  this.a8 = null;
  this.a8 = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  hM: 1,
  hL: 1,
  a8: 1,
  T: 1,
  F: 1,
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
  this.dk = null;
  this.dk = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.ba = (function() {
  return $d_sr_Nothing$.l();
});
$p.bN = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  hN: 1,
  aK: 1,
  aJ: 1,
  T: 1,
  F: 1,
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
  this.dk = null;
  this.dk = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.ba = (function() {
  return $d_sr_Null$.l();
});
$p.bN = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  hO: 1,
  aK: 1,
  aJ: 1,
  T: 1,
  F: 1,
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
  this.dk = null;
  this.dk = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.ba = (function() {
  return $d_O.l();
});
$p.bN = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  hP: 1,
  aK: 1,
  aJ: 1,
  T: 1,
  F: 1,
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
  this.a8 = null;
  this.a8 = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  hR: 1,
  hQ: 1,
  a8: 1,
  T: 1,
  F: 1,
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
  this.a8 = null;
  this.a8 = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  hT: 1,
  hS: 1,
  a8: 1,
  T: 1,
  F: 1,
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
  this.eq = null;
  this.ep = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "manifesto", "Manifesto & Architecture", "\u25c8");
}
$p = $c_Lccrystal_site_Tab$$anon$1.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$1;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$1() {
}
$h_Lccrystal_site_Tab$$anon$1.prototype = $p;
$p.aB = (function() {
  return 0;
});
$p.aC = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aD = (function() {
  return "Manifesto";
});
$p.D = (function() {
  return "Manifesto";
});
var $d_Lccrystal_site_Tab$$anon$1 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$1, "ccrystal.site.Tab$$anon$1", ({
  cE: 1,
  ak: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_Tab$$anon$2() {
  this.eq = null;
  this.ep = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "explorer", "Interactive DAG Explorer", "\u2b21");
}
$p = $c_Lccrystal_site_Tab$$anon$2.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$2;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$2() {
}
$h_Lccrystal_site_Tab$$anon$2.prototype = $p;
$p.aB = (function() {
  return 0;
});
$p.aC = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aD = (function() {
  return "Explorer";
});
$p.D = (function() {
  return "Explorer";
});
var $d_Lccrystal_site_Tab$$anon$2 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$2, "ccrystal.site.Tab$$anon$2", ({
  cF: 1,
  ak: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_Tab$$anon$3() {
  this.eq = null;
  this.ep = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "quickstart", "Install & Quickstart", "\u25c7");
}
$p = $c_Lccrystal_site_Tab$$anon$3.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$3;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$3() {
}
$h_Lccrystal_site_Tab$$anon$3.prototype = $p;
$p.aB = (function() {
  return 0;
});
$p.aC = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aD = (function() {
  return "Quickstart";
});
$p.D = (function() {
  return "Quickstart";
});
var $d_Lccrystal_site_Tab$$anon$3 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$3, "ccrystal.site.Tab$$anon$3", ({
  cG: 1,
  ak: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_Tab$$anon$4() {
  this.eq = null;
  this.ep = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "mcp", "Native MCP Reference", "\u2325");
}
$p = $c_Lccrystal_site_Tab$$anon$4.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$4;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$4() {
}
$h_Lccrystal_site_Tab$$anon$4.prototype = $p;
$p.aB = (function() {
  return 0;
});
$p.aC = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aD = (function() {
  return "Mcp";
});
$p.D = (function() {
  return "Mcp";
});
var $d_Lccrystal_site_Tab$$anon$4 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$4, "ccrystal.site.Tab$$anon$4", ({
  cH: 1,
  ak: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_Tab$$anon$5() {
  this.eq = null;
  this.ep = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "agent-ingestion", "Agent Ingestion (llms.txt)", "\u00a7");
}
$p = $c_Lccrystal_site_Tab$$anon$5.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$5;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$5() {
}
$h_Lccrystal_site_Tab$$anon$5.prototype = $p;
$p.aB = (function() {
  return 0;
});
$p.aC = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aD = (function() {
  return "AgentIngestion";
});
$p.D = (function() {
  return "AgentIngestion";
});
var $d_Lccrystal_site_Tab$$anon$5 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$5, "ccrystal.site.Tab$$anon$5", ({
  cI: 1,
  ak: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_TabExplorer$Scenario$$anon$1() {
  this.fL = null;
  $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__(this, "inception", "1. Track Inception", "Goal defined, acceptance criteria seeded, single init transition.");
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$$anon$1.prototype = new $h_Lccrystal_site_TabExplorer$Scenario();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$$anon$1;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$$anon$1() {
}
$h_Lccrystal_site_TabExplorer$Scenario$$anon$1.prototype = $p;
$p.aB = (function() {
  return 0;
});
$p.aC = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aD = (function() {
  return "Inception";
});
$p.D = (function() {
  return "Inception";
});
var $d_Lccrystal_site_TabExplorer$Scenario$$anon$1 = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$$anon$1, "ccrystal.site.TabExplorer$Scenario$$anon$1", ({
  cM: 1,
  aB: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_TabExplorer$Scenario$$anon$2() {
  this.fL = null;
  $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__(this, "spike", "2. Active Engineering Spike", "Task 1 completed, git_worktree transient lease active, checkpoint recorded.");
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$$anon$2.prototype = new $h_Lccrystal_site_TabExplorer$Scenario();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$$anon$2;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$$anon$2() {
}
$h_Lccrystal_site_TabExplorer$Scenario$$anon$2.prototype = $p;
$p.aB = (function() {
  return 0;
});
$p.aC = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aD = (function() {
  return "ActiveSpike";
});
$p.D = (function() {
  return "ActiveSpike";
});
var $d_Lccrystal_site_TabExplorer$Scenario$$anon$2 = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$$anon$2, "ccrystal.site.TabExplorer$Scenario$$anon$2", ({
  cN: 1,
  aB: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
/** @constructor */
function $c_Lccrystal_site_TabExplorer$Scenario$$anon$3() {
  this.fL = null;
  $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__(this, "artifact", "3. World-State & Artifacts", "Hardware test rig artifact registered as precondition; living context grounded.");
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$$anon$3.prototype = new $h_Lccrystal_site_TabExplorer$Scenario();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$$anon$3;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$$anon$3() {
}
$h_Lccrystal_site_TabExplorer$Scenario$$anon$3.prototype = $p;
$p.aB = (function() {
  return 0;
});
$p.aC = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aD = (function() {
  return "PhysicalArtifact";
});
$p.D = (function() {
  return "PhysicalArtifact";
});
var $d_Lccrystal_site_TabExplorer$Scenario$$anon$3 = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$$anon$3, "ccrystal.site.TabExplorer$Scenario$$anon$3", ({
  cO: 1,
  aB: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1,
  af: 1,
  a0: 1,
  ad: 1,
  ae: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.h2, $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.h2, $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.kO = null;
  this.kN = false;
  this.kP = null;
  this.kL = null;
  this.kM = null;
  this.kR = false;
  this.kQ = 0;
  this.h1 = 0;
  this.h0 = null;
  this.kO = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.h0 = makeConfig.qT(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.h1)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.eg = (function() {
  return this.kO;
});
$p.ed = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.D = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fA = (function() {
  return this.kN;
});
$p.eh = (function() {
  return this.kP;
});
$p.cI = (function(x$1) {
  this.kN = x$1;
});
$p.fD = (function(x$1) {
  this.kP = x$1;
});
$p.z = (function(obj) {
  return (this === obj);
});
$p.E = (function() {
  return $systemIdentityHashCode(this);
});
$p.gL = (function(observer) {
});
$p.cX = (function() {
  return this.kL;
});
$p.d1 = (function() {
  return this.kM;
});
$p.gW = (function() {
  return this.kR;
});
$p.f6 = (function(x$1) {
  this.kR = x$1;
});
$p.gx = (function(x$0) {
  this.kL = x$0;
});
$p.gy = (function(x$0) {
  this.kM = x$0;
});
$p.gD = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.f2 = (function() {
  return this.kQ;
});
$p.gQ = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.gN = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.gO = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.f1 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  dl: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  bf: 1,
  be: 1,
  aw: 1,
  bg: 1,
  dh: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.lk = null;
  this.lj = false;
  this.ll = null;
  this.ic = 0;
  this.lh = null;
  this.li = null;
  this.lo = false;
  this.id = null;
  this.lm = null;
  this.ln = 0;
  this.lm = parentDisplayName;
  this.lk = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.ic = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.id = (void 0);
  this.ln = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.eg = (function() {
  return this.lk;
});
$p.D = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fA = (function() {
  return this.lj;
});
$p.eh = (function() {
  return this.ll;
});
$p.cI = (function(x$1) {
  this.lj = x$1;
});
$p.fD = (function(x$1) {
  this.ll = x$1;
});
$p.gO = (function() {
});
$p.z = (function(obj) {
  return (this === obj);
});
$p.E = (function() {
  return $systemIdentityHashCode(this);
});
$p.fu = (function() {
  return this.ic;
});
$p.hA = (function(x$1) {
  this.ic = x$1;
});
$p.fG = (function() {
  return this;
});
$p.gN = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.gL = (function(observer) {
  observer.ei($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cX = (function() {
  return this.lh;
});
$p.d1 = (function() {
  return this.li;
});
$p.gW = (function() {
  return this.lo;
});
$p.f6 = (function(x$1) {
  this.lo = x$1;
});
$p.gx = (function(x$0) {
  this.lh = x$0;
});
$p.gy = (function(x$0) {
  this.li = x$0;
});
$p.hK = (function() {
  return this.id;
});
$p.k6 = (function(x$1) {
  this.id = x$1;
});
$p.gD = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gU = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.f2 = (function() {
  return this.ln;
});
$p.hG = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gQ = (function() {
});
$p.ed = (function() {
  return (this.lm.Y() + ".signal");
});
$p.f1 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  dA: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1,
  aD: 1,
  aw: 1,
  aN: 1,
  dw: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.hF($thiz)) {
        return $thiz.fE(o);
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
  this.ob = null;
  this.ob = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.r = (function() {
  return this.ob.Y();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  ga: 1,
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
  this.hl = null;
  this.oc = null;
  this.hl = underlying;
  this.oc = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.r = (function() {
  return new $c_sc_Iterator$$anon$8(this.hl.r(), this.oc);
});
$p.J = (function() {
  return ((this.hl.J() === 0) ? 0 : (-1));
});
$p.j = (function() {
  return this.hl.j();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  gb: 1,
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
  $thiz.eA = underlying;
  $thiz.g5 = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.eA = null;
  this.g5 = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.r = (function() {
  return new $c_sc_Iterator$$anon$9(this.eA.r(), this.g5);
});
$p.J = (function() {
  return this.eA.J();
});
$p.j = (function() {
  return this.eA.j();
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
  $thiz.i5 = ($thiz.ds !== null);
  $thiz.h3 = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.ds);
  if ($thiz.i5) {
    var newParentLastUpdateId = $thiz.ds.fu();
    if ((newParentLastUpdateId !== $thiz.h3)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.hG(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.h3 = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.i5) {
    $thiz.h3 = $thiz.ds.fu();
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
$p.z = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.bx = (function() {
  return "Set";
});
$p.D = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.to = (function(that) {
  return this.fy(that);
});
$p.i = (function(v1) {
  return this.bm(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.bb() === o.bb())) {
      try {
        return $thiz.fy(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().A(x2.cZ(kv$2$2.bq(), $m_sc_Map$().o9), kv$2$2.bj())))(o)));
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
  this.kv = null;
  this.ku = false;
  this.kw = null;
  this.hT = 0;
  this.ks = null;
  this.kt = null;
  this.kx = false;
  this.hU = null;
  this.kp = null;
  this.kq = false;
  this.fM = null;
  this.kr = null;
  this.hW = 0;
  this.hV = null;
  this.fM = parents;
  this.kr = combinator;
  this.kv = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hT = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hU = (void 0);
  this.hW = ((1 + $m_Lcom_raquo_airstream_core_Protected$().sD(0, parents)) | 0);
  this.hV = parents.map(((parent) => $m_Lcom_raquo_airstream_common_InternalParentObserver$().rV(parent, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$1, trx) => {
    $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V(this, trx);
  })))));
}
$p = $c_Lcom_raquo_airstream_combine_CombineSignalN.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_CombineSignalN;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_CombineSignalN() {
}
$h_Lcom_raquo_airstream_combine_CombineSignalN.prototype = $p;
$p.eg = (function() {
  return this.kv;
});
$p.ed = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.D = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fA = (function() {
  return this.ku;
});
$p.eh = (function() {
  return this.kw;
});
$p.cI = (function(x$1) {
  this.ku = x$1;
});
$p.fD = (function(x$1) {
  this.kw = x$1;
});
$p.z = (function(obj) {
  return (this === obj);
});
$p.E = (function() {
  return $systemIdentityHashCode(this);
});
$p.fu = (function() {
  return this.hT;
});
$p.hA = (function(x$1) {
  this.hT = x$1;
});
$p.fG = (function() {
  return this;
});
$p.gL = (function(observer) {
  observer.ei($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cX = (function() {
  return this.ks;
});
$p.d1 = (function() {
  return this.kt;
});
$p.gW = (function() {
  return this.kx;
});
$p.f6 = (function(x$1) {
  this.kx = x$1;
});
$p.gx = (function(x$0) {
  this.ks = x$0;
});
$p.gy = (function(x$0) {
  this.kt = x$0;
});
$p.hK = (function() {
  return this.hU;
});
$p.k6 = (function(x$1) {
  this.hU = x$1;
});
$p.gU = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gD = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.oJ = (function() {
  if ((!this.kq)) {
    this.kp = $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray(this);
    this.kq = true;
  }
  return this.kp;
});
$p.gQ = (function() {
  $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V(this);
});
$p.gN = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V(this);
});
$p.gO = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V(this);
});
$p.f2 = (function() {
  return this.hW;
});
$p.jC = (function() {
  return $m_Lcom_raquo_airstream_combine_CombineObservable$().ss(this.fM.map(((_$2) => _$2.gU())), this.kr);
});
$p.hG = (function() {
  return this.jC();
});
$p.f1 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_combine_CombineSignalN = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineSignalN, "com.raquo.airstream.combine.CombineSignalN", ({
  cU: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1,
  aD: 1,
  aw: 1,
  aN: 1,
  d1: 1,
  dc: 1,
  cS: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.kW = null;
  this.kV = false;
  this.kX = null;
  this.kS = null;
  this.kU = null;
  this.kZ = false;
  this.h2 = null;
  this.kT = null;
  this.kY = 0;
  this.h2 = parent;
  this.kT = fn;
  this.kW = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kY = ((1 + parent.f2()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.eg = (function() {
  return this.kW;
});
$p.ed = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.D = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fA = (function() {
  return this.kV;
});
$p.eh = (function() {
  return this.kX;
});
$p.cI = (function(x$1) {
  this.kV = x$1;
});
$p.fD = (function(x$1) {
  this.kX = x$1;
});
$p.z = (function(obj) {
  return (this === obj);
});
$p.E = (function() {
  return $systemIdentityHashCode(this);
});
$p.gL = (function(observer) {
});
$p.cX = (function() {
  return this.kS;
});
$p.d1 = (function() {
  return this.kU;
});
$p.gW = (function() {
  return this.kZ;
});
$p.f6 = (function(x$1) {
  this.kZ = x$1;
});
$p.gx = (function(x$0) {
  this.kS = x$0;
});
$p.gy = (function(x$0) {
  this.kU = x$0;
});
$p.gD = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gQ = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.h2);
});
$p.gN = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gO = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.gP = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.f2 = (function() {
  return this.kY;
});
$p.hM = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.kT.i(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().eN(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
    }
  }
  $x_1.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.j())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.Q(), transaction);
    }
  })));
});
$p.kc = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.f1 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  dm: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  bf: 1,
  be: 1,
  aw: 1,
  bg: 1,
  aC: 1,
  d3: 1,
  cX: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.l3 = null;
  this.l2 = false;
  this.l4 = null;
  this.i3 = 0;
  this.l0 = null;
  this.l1 = null;
  this.l6 = false;
  this.i4 = null;
  this.i5 = false;
  this.h3 = 0;
  this.ds = null;
  this.i6 = null;
  this.i7 = null;
  this.l5 = 0;
  this.ds = parent;
  this.i6 = project;
  this.i7 = recover;
  this.l3 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.i3 = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.i4 = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.l5 = ((1 + parent.f2()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.eg = (function() {
  return this.l3;
});
$p.ed = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.D = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fA = (function() {
  return this.l2;
});
$p.eh = (function() {
  return this.l4;
});
$p.cI = (function(x$1) {
  this.l2 = x$1;
});
$p.fD = (function(x$1) {
  this.l4 = x$1;
});
$p.z = (function(obj) {
  return (this === obj);
});
$p.E = (function() {
  return $systemIdentityHashCode(this);
});
$p.fu = (function() {
  return this.i3;
});
$p.hA = (function(x$1) {
  this.i3 = x$1;
});
$p.fG = (function() {
  return this;
});
$p.gL = (function(observer) {
  observer.ei($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cX = (function() {
  return this.l0;
});
$p.d1 = (function() {
  return this.l1;
});
$p.gW = (function() {
  return this.l6;
});
$p.f6 = (function(x$1) {
  this.l6 = x$1;
});
$p.gx = (function(x$0) {
  this.l0 = x$0;
});
$p.gy = (function(x$0) {
  this.l1 = x$0;
});
$p.hK = (function() {
  return this.i4;
});
$p.k6 = (function(x$1) {
  this.i4 = x$1;
});
$p.gU = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gD = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.hM = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.kc = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gQ = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.gN = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.gO = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.f2 = (function() {
  return this.l5;
});
$p.gP = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.i7;
    if (this$2.j()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.Q();
      try {
        var $x_1 = new $c_s_util_Success(x0.cc(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().eN(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
        }
      }
      $x_1.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.j())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.Q(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.k4(this.i6), transaction);
  })));
});
$p.hG = (function() {
  var originalValue = this.ds.gU().k4(this.i6);
  return originalValue.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.i7;
    if (this$2.j()) {
      return originalValue;
    } else {
      var x0 = this$2.Q();
      try {
        var $x_1 = new $c_s_util_Success(x0.cc(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().eN(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ag : e$2);
        }
      }
      return $x_1.cz(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.j() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.Q())));
          return (this$7.j() ? originalValue : this$7.Q());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => originalValue)));
});
$p.f1 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  dn: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1,
  aD: 1,
  aw: 1,
  aN: 1,
  aC: 1,
  b8: 1,
  d2: 1
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
$p.hF = (function(that) {
  return true;
});
$p.z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.E = (function() {
  return $m_s_util_hashing_MurmurHash3$().q2(this);
});
$p.D = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cF = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.k0 = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.bt = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fE = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.cc = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cB = (function(x) {
  return this.k0((x | 0));
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
$p.eX = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.bx = (function() {
  return "SeqView";
});
$p.cF = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bt = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.a5 = (function(f) {
  return this.eX(f);
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
  $thiz.mg = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.qf = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
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
$p.z = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.E = (function() {
  return $m_s_util_hashing_MurmurHash3$().sB(this);
});
$p.bx = (function() {
  return "Map";
});
$p.D = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.gF = (function(coll) {
  return this.k5().av(coll);
});
$p.eZ = (function() {
  return this.k5().aw();
});
$p.cc = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eR = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.cB = (function(key) {
  return this.bm(key);
});
$p.e8 = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.ez = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.ez = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.F = (function(idx) {
  return this.ez.F(idx);
});
$p.C = (function() {
  return this.ez.C();
});
$p.r = (function() {
  return this.ez.r();
});
$p.J = (function() {
  return this.ez.J();
});
$p.j = (function() {
  return this.ez.j();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  bL: 1,
  aT: 1,
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
  $thiz.g3 = underlying;
  $thiz.hk = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.eA = null;
  this.g5 = null;
  this.g3 = null;
  this.hk = null;
}
$p = $c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$p.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
}
$h_sc_SeqView$Map.prototype = $p;
$p.eX = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.bx = (function() {
  return "SeqView";
});
$p.cF = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bt = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.F = (function(idx) {
  return this.hk.i(this.g3.F(idx));
});
$p.C = (function() {
  return this.g3.C();
});
$p.a5 = (function(f) {
  return this.eX(f);
});
var $d_sc_SeqView$Map = new $TypeData().i($c_sc_SeqView$Map, "scala.collection.SeqView$Map", ({
  aX: 1,
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
  this.mr = null;
  this.ms = false;
  this.mh = null;
  this.mi = false;
  this.mj = null;
  this.mk = false;
  this.ml = null;
  this.mm = false;
  this.mn = null;
  this.mo = false;
  this.mp = null;
  this.mq = false;
  this.m4 = null;
  this.m5 = false;
  this.mV = null;
  this.mW = false;
  this.mc = null;
  this.md = false;
  this.mT = null;
  this.mU = false;
  this.m6 = null;
  this.m7 = false;
  this.mx = null;
  this.my = false;
  this.mv = null;
  this.mw = false;
  this.m8 = null;
  this.m9 = false;
  this.mL = null;
  this.mM = false;
  this.mN = null;
  this.mO = false;
  this.nh = null;
  this.ni = false;
  this.mz = null;
  this.mA = false;
  this.me = null;
  this.mf = false;
  this.mZ = null;
  this.n0 = false;
  this.n3 = null;
  this.n4 = false;
  this.n9 = null;
  this.na = false;
  this.nb = null;
  this.nc = false;
  this.n5 = null;
  this.n6 = false;
  this.n7 = null;
  this.n8 = false;
  this.mR = null;
  this.mS = false;
  this.mD = null;
  this.mE = false;
  this.mB = null;
  this.mC = false;
  this.mt = null;
  this.mu = false;
  this.nf = null;
  this.ng = false;
  this.nd = null;
  this.ne = false;
  this.ma = null;
  this.mb = false;
  this.nl = null;
  this.nm = false;
  this.n1 = null;
  this.n2 = false;
  this.mH = null;
  this.mI = false;
  this.mF = null;
  this.mG = false;
  this.mJ = null;
  this.mK = false;
  this.g = null;
  this.mP = null;
  this.mQ = false;
  this.fe = null;
  this.qe = null;
  this.m2 = null;
  this.m3 = false;
  this.mX = null;
  this.mY = false;
  this.mg = null;
  this.nj = null;
  this.nk = false;
  this.qf = null;
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
$p.sb = (function() {
  if ((!this.ms)) {
    this.mr = new $c_Lcom_raquo_laminar_tags_HtmlTag("header", false);
    this.ms = true;
  }
  return this.mr;
});
$p.rN = (function() {
  if ((!this.mi)) {
    this.mh = new $c_Lcom_raquo_laminar_tags_HtmlTag("footer", false);
    this.mi = true;
  }
  return this.mh;
});
$p.s9 = (function() {
  if ((!this.mk)) {
    this.mj = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.mk = true;
  }
  return this.mj;
});
$p.eT = (function() {
  if ((!this.mm)) {
    this.ml = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.mm = true;
  }
  return this.ml;
});
$p.bM = (function() {
  if ((!this.mo)) {
    this.mn = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.mo = true;
  }
  return this.mn;
});
$p.eU = (function() {
  if ((!this.mq)) {
    this.mp = new $c_Lcom_raquo_laminar_tags_HtmlTag("h4", false);
    this.mq = true;
  }
  return this.mp;
});
$p.b6 = (function() {
  if ((!this.m5)) {
    this.m4 = new $c_Lcom_raquo_laminar_tags_HtmlTag("a", false);
    this.m5 = true;
  }
  return this.m4;
});
$p.bc = (function() {
  if ((!this.mW)) {
    this.mV = new $c_Lcom_raquo_laminar_tags_HtmlTag("strong", false);
    this.mW = true;
  }
  return this.mV;
});
$p.I = (function() {
  if ((!this.md)) {
    this.mc = new $c_Lcom_raquo_laminar_tags_HtmlTag("code", false);
    this.md = true;
  }
  return this.mc;
});
$p.G = (function() {
  if ((!this.mU)) {
    this.mT = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.mU = true;
  }
  return this.mT;
});
$p.r4 = (function() {
  if ((!this.m7)) {
    this.m6 = new $c_Lcom_raquo_laminar_tags_HtmlTag("br", true);
    this.m7 = true;
  }
  return this.m6;
});
$p.k2 = (function() {
  if ((!this.my)) {
    this.mx = new $c_Lcom_raquo_laminar_tags_HtmlTag("label", false);
    this.my = true;
  }
  return this.mx;
});
$p.sh = (function() {
  if ((!this.mw)) {
    this.mv = new $c_Lcom_raquo_laminar_tags_HtmlTag("input", true);
    this.mw = true;
  }
  return this.mv;
});
$p.cd = (function() {
  if ((!this.m9)) {
    this.m8 = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.m9 = true;
  }
  return this.m8;
});
$p.R = (function() {
  if ((!this.mM)) {
    this.mL = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.mM = true;
  }
  return this.mL;
});
$p.bA = (function() {
  if ((!this.mO)) {
    this.mN = new $c_Lcom_raquo_laminar_tags_HtmlTag("pre", false);
    this.mO = true;
  }
  return this.mN;
});
$p.hR = (function() {
  if ((!this.ni)) {
    this.nh = new $c_Lcom_raquo_laminar_tags_HtmlTag("ul", false);
    this.ni = true;
  }
  return this.nh;
});
$p.ch = (function() {
  if ((!this.mA)) {
    this.mz = new $c_Lcom_raquo_laminar_tags_HtmlTag("li", false);
    this.mA = true;
  }
  return this.mz;
});
$p.h = (function() {
  if ((!this.mf)) {
    this.me = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.mf = true;
  }
  return this.me;
});
$p.ki = (function() {
  if ((!this.n0)) {
    this.mZ = new $c_Lcom_raquo_laminar_tags_HtmlTag("table", false);
    this.n0 = true;
  }
  return this.mZ;
});
$p.kj = (function() {
  if ((!this.n4)) {
    this.n3 = new $c_Lcom_raquo_laminar_tags_HtmlTag("tbody", false);
    this.n4 = true;
  }
  return this.n3;
});
$p.kk = (function() {
  if ((!this.na)) {
    this.n9 = new $c_Lcom_raquo_laminar_tags_HtmlTag("thead", false);
    this.na = true;
  }
  return this.n9;
});
$p.a0 = (function() {
  if ((!this.nc)) {
    this.nb = new $c_Lcom_raquo_laminar_tags_HtmlTag("tr", false);
    this.nc = true;
  }
  return this.nb;
});
$p.p = (function() {
  if ((!this.n6)) {
    this.n5 = new $c_Lcom_raquo_laminar_tags_HtmlTag("td", false);
    this.n6 = true;
  }
  return this.n5;
});
$p.cM = (function() {
  if ((!this.n8)) {
    this.n7 = new $c_Lcom_raquo_laminar_tags_HtmlTag("th", false);
    this.n8 = true;
  }
  return this.n7;
});
$p.bC = (function() {
  if ((!this.mS)) {
    this.mR = new $c_Lcom_raquo_laminar_tags_HtmlTag("section", false);
    this.mS = true;
  }
  return this.mR;
});
$p.sH = (function() {
  if ((!this.mE)) {
    this.mD = new $c_Lcom_raquo_laminar_tags_HtmlTag("nav", false);
    this.mE = true;
  }
  return this.mD;
});
$p.sv = (function() {
  if ((!this.mC)) {
    this.mB = new $c_Lcom_raquo_laminar_tags_HtmlTag("main", false);
    this.mC = true;
  }
  return this.mB;
});
$p.b8 = (function() {
  if ((!this.mu)) {
    this.mt = new $c_Lcom_raquo_laminar_keys_HtmlAttr("href", $m_Lcom_raquo_laminar_codecs_package$().b2);
    this.mu = true;
  }
  return this.mt;
});
$p.tw = (function() {
  if ((!this.ng)) {
    this.nf = new $c_Lcom_raquo_laminar_keys_HtmlAttr("type", $m_Lcom_raquo_laminar_codecs_package$().b2);
    this.ng = true;
  }
  return this.nf;
});
$p.c0 = (function() {
  if ((!this.ne)) {
    this.nd = this.tw();
    this.ne = true;
  }
  return this.nd;
});
$p.pa = (function() {
  if ((!this.mb)) {
    this.ma = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().nn);
    this.mb = true;
  }
  return this.ma;
});
$p.qb = (function() {
  if ((!this.nm)) {
    this.nl = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().b2);
    this.nm = true;
  }
  return this.nl;
});
$p.bd = (function() {
  if ((!this.n2)) {
    this.n1 = new $c_Lcom_raquo_laminar_keys_HtmlProp("target", $m_Lcom_raquo_laminar_codecs_package$().b2);
    this.n2 = true;
  }
  return this.n1;
});
$p.bX = (function() {
  if ((!this.mI)) {
    this.mH = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.mI = true;
  }
  return this.mH;
});
$p.pL = (function() {
  if ((!this.mG)) {
    this.mF = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.mG = true;
  }
  return this.mF;
});
$p.kd = (function() {
  if ((!this.mK)) {
    this.mJ = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.mK = true;
  }
  return this.mJ;
});
$p.t2 = (function() {
  if ((!this.mQ)) {
    this.mP = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey(this, "rel", " ");
    this.mQ = true;
  }
  return this.mP;
});
$p.hz = (function() {
  if ((!this.m3)) {
    this.m2 = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.m3 = true;
  }
  return this.m2;
});
$p.t = (function() {
  if ((!this.mY)) {
    this.mX = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.mY = true;
  }
  return this.mX;
});
$p.tA = (function() {
  if ((!this.nk)) {
    this.nj = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.nk = true;
  }
  return this.nj;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  dR: 1,
  e1: 1,
  dU: 1,
  dZ: 1,
  bl: 1,
  e0: 1,
  dW: 1,
  dP: 1,
  dJ: 1,
  dO: 1,
  bj: 1,
  bm: 1,
  bi: 1,
  dK: 1
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
$p.bx = (function() {
  return "IndexedSeqView";
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bW = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bt = (function(len) {
  var x = this.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.J = (function() {
  return this.C();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.ez = null;
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
$p.bx = (function() {
  return "IndexedSeqView";
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bW = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bt = (function(len) {
  var x = this.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.J = (function() {
  return this.C();
});
$p.eX = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.a5 = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  fT: 1,
  bL: 1,
  aT: 1,
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
  this.eA = null;
  this.g5 = null;
  this.g3 = null;
  this.hk = null;
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
$p.fC = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bx = (function() {
  return "IndexedSeqView";
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bW = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bt = (function(len) {
  var x = this.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.J = (function() {
  return this.C();
});
$p.eX = (function(f) {
  return this.fC(f);
});
$p.a5 = (function(f) {
  return this.fC(f);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  bJ: 1,
  aX: 1,
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
  this.jg = null;
  this.jf = null;
  this.jg = underlying;
  this.jf = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.F = (function(n) {
  return this.jg.F(n);
});
$p.C = (function() {
  return this.jg.aS;
});
$p.ce = (function() {
  return "ArrayBufferView";
});
$p.r = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.jf);
});
$p.fC = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.jf);
});
$p.eX = (function(f) {
  return this.fC(f);
});
$p.a5 = (function(f) {
  return this.fC(f);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  h6: 1,
  fE: 1,
  aT: 1,
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
$p.k5 = (function() {
  return $m_sci_Map$();
});
$p.bs = (function() {
  return $m_sci_Iterable$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ((!$is_sci_IndexedSeq(that)) || ($thiz.C() === that.C()));
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.C();
      var equal = (length === o.C());
      if (equal) {
        var index = 0;
        var a = $thiz.hE();
        var b = o.hE();
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
          equal = $m_sr_BoxesRunTime$().A($thiz.F(index), o.F(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.r().dn(index);
          var thatIt = o.r().dn(index);
          while ((equal && thisIt.x())) {
            equal = $m_sr_BoxesRunTime$().A(thisIt.n(), thatIt.n());
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gL)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gM)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gN)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gO)));
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
  this.eA = null;
  this.g5 = null;
  this.g3 = null;
  this.hk = null;
  this.gh = null;
  this.gh = mutationCount;
  $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(this, underlying, f);
}
$p = $c_scm_CheckedIndexedSeqView$Map.prototype = new $h_sc_IndexedSeqView$Map();
$p.constructor = $c_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Map() {
}
$h_scm_CheckedIndexedSeqView$Map.prototype = $p;
$p.r = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.gh);
});
$p.fC = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gh);
});
$p.eX = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gh);
});
$p.a5 = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gh);
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().i($c_scm_CheckedIndexedSeqView$Map, "scala.collection.mutable.CheckedIndexedSeqView$Map", ({
  he: 1,
  bJ: 1,
  aX: 1,
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
  hc: 1
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
$p.bb = (function() {
  return 0;
});
$p.J = (function() {
  return 0;
});
$p.j = (function() {
  return true;
});
$p.ju = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.bm = (function(key) {
  return false;
});
$p.cZ = (function(key, default$1) {
  return default$1.Y();
});
$p.r = (function() {
  return $m_sc_Iterator$().U;
});
$p.en = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.i = (function(key) {
  this.ju(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  gx: 1,
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
  this.cD = null;
  this.dM = null;
  this.cD = key1;
  this.dM = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.a5 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bb = (function() {
  return 1;
});
$p.J = (function() {
  return 1;
});
$p.j = (function() {
  return false;
});
$p.i = (function(key) {
  if ($m_sr_BoxesRunTime$().A(key, this.cD)) {
    return this.dM;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bm = (function(key) {
  return $m_sr_BoxesRunTime$().A(key, this.cD);
});
$p.cZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().A(key, this.cD) ? this.dM : default$1.Y());
});
$p.r = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cD, this.dM));
});
$p.f3 = (function(key, value) {
  return ($m_sr_BoxesRunTime$().A(key, this.cD) ? new $c_sci_Map$Map1(this.cD, value) : new $c_sci_Map$Map2(this.cD, this.dM, key, value));
});
$p.aj = (function(f) {
  f.i(new $c_T2(this.cD, this.dM));
});
$p.fy = (function(p) {
  return (!(!p.i(new $c_T2(this.cD, this.dM))));
});
$p.E = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cN(this.cD, this.dM);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().e7;
  h = $m_s_util_hashing_MurmurHash3$().m(h, a);
  h = $m_s_util_hashing_MurmurHash3$().m(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dq(h, c);
  return $m_s_util_hashing_MurmurHash3$().N(h, 1);
});
$p.en = (function(key, value) {
  return this.f3(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
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
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.cp = null;
  this.db = null;
  this.cq = null;
  this.dc = null;
  this.cp = key1;
  this.db = value1;
  this.cq = key2;
  this.dc = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.a5 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bb = (function() {
  return 2;
});
$p.J = (function() {
  return 2;
});
$p.j = (function() {
  return false;
});
$p.i = (function(key) {
  if ($m_sr_BoxesRunTime$().A(key, this.cp)) {
    return this.db;
  } else if ($m_sr_BoxesRunTime$().A(key, this.cq)) {
    return this.dc;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bm = (function(key) {
  return ($m_sr_BoxesRunTime$().A(key, this.cp) || $m_sr_BoxesRunTime$().A(key, this.cq));
});
$p.cZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().A(key, this.cp) ? this.db : ($m_sr_BoxesRunTime$().A(key, this.cq) ? this.dc : default$1.Y()));
});
$p.r = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.f3 = (function(key, value) {
  return ($m_sr_BoxesRunTime$().A(key, this.cp) ? new $c_sci_Map$Map2(this.cp, value, this.cq, this.dc) : ($m_sr_BoxesRunTime$().A(key, this.cq) ? new $c_sci_Map$Map2(this.cp, this.db, this.cq, value) : new $c_sci_Map$Map3(this.cp, this.db, this.cq, this.dc, key, value)));
});
$p.aj = (function(f) {
  f.i(new $c_T2(this.cp, this.db));
  f.i(new $c_T2(this.cq, this.dc));
});
$p.fy = (function(p) {
  return ((!(!p.i(new $c_T2(this.cp, this.db)))) && (!(!p.i(new $c_T2(this.cq, this.dc)))));
});
$p.E = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cN(this.cp, this.db);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cN(this.cq, this.dc);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().e7;
  h = $m_s_util_hashing_MurmurHash3$().m(h, a);
  h = $m_s_util_hashing_MurmurHash3$().m(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dq(h, c);
  return $m_s_util_hashing_MurmurHash3$().N(h, 2);
});
$p.en = (function(key, value) {
  return this.f3(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
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
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.c8 = null;
  this.cQ = null;
  this.c9 = null;
  this.cR = null;
  this.ca = null;
  this.cS = null;
  this.c8 = key1;
  this.cQ = value1;
  this.c9 = key2;
  this.cR = value2;
  this.ca = key3;
  this.cS = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.a5 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bb = (function() {
  return 3;
});
$p.J = (function() {
  return 3;
});
$p.j = (function() {
  return false;
});
$p.i = (function(key) {
  if ($m_sr_BoxesRunTime$().A(key, this.c8)) {
    return this.cQ;
  } else if ($m_sr_BoxesRunTime$().A(key, this.c9)) {
    return this.cR;
  } else if ($m_sr_BoxesRunTime$().A(key, this.ca)) {
    return this.cS;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bm = (function(key) {
  return (($m_sr_BoxesRunTime$().A(key, this.c8) || $m_sr_BoxesRunTime$().A(key, this.c9)) || $m_sr_BoxesRunTime$().A(key, this.ca));
});
$p.cZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().A(key, this.c8) ? this.cQ : ($m_sr_BoxesRunTime$().A(key, this.c9) ? this.cR : ($m_sr_BoxesRunTime$().A(key, this.ca) ? this.cS : default$1.Y())));
});
$p.r = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.f3 = (function(key, value) {
  return ($m_sr_BoxesRunTime$().A(key, this.c8) ? new $c_sci_Map$Map3(this.c8, value, this.c9, this.cR, this.ca, this.cS) : ($m_sr_BoxesRunTime$().A(key, this.c9) ? new $c_sci_Map$Map3(this.c8, this.cQ, this.c9, value, this.ca, this.cS) : ($m_sr_BoxesRunTime$().A(key, this.ca) ? new $c_sci_Map$Map3(this.c8, this.cQ, this.c9, this.cR, this.ca, value) : new $c_sci_Map$Map4(this.c8, this.cQ, this.c9, this.cR, this.ca, this.cS, key, value))));
});
$p.aj = (function(f) {
  f.i(new $c_T2(this.c8, this.cQ));
  f.i(new $c_T2(this.c9, this.cR));
  f.i(new $c_T2(this.ca, this.cS));
});
$p.fy = (function(p) {
  return (((!(!p.i(new $c_T2(this.c8, this.cQ)))) && (!(!p.i(new $c_T2(this.c9, this.cR))))) && (!(!p.i(new $c_T2(this.ca, this.cS)))));
});
$p.E = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cN(this.c8, this.cQ);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cN(this.c9, this.cR);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cN(this.ca, this.cS);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().e7;
  h = $m_s_util_hashing_MurmurHash3$().m(h, a);
  h = $m_s_util_hashing_MurmurHash3$().m(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dq(h, c);
  return $m_s_util_hashing_MurmurHash3$().N(h, 3);
});
$p.en = (function(key, value) {
  return this.f3(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c6)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  c6: 1,
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
  this.bE = null;
  this.cr = null;
  this.bF = null;
  this.cs = null;
  this.bG = null;
  this.ct = null;
  this.bH = null;
  this.cu = null;
  this.bE = key1;
  this.cr = value1;
  this.bF = key2;
  this.cs = value2;
  this.bG = key3;
  this.ct = value3;
  this.bH = key4;
  this.cu = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.a5 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bb = (function() {
  return 4;
});
$p.J = (function() {
  return 4;
});
$p.j = (function() {
  return false;
});
$p.i = (function(key) {
  if ($m_sr_BoxesRunTime$().A(key, this.bE)) {
    return this.cr;
  } else if ($m_sr_BoxesRunTime$().A(key, this.bF)) {
    return this.cs;
  } else if ($m_sr_BoxesRunTime$().A(key, this.bG)) {
    return this.ct;
  } else if ($m_sr_BoxesRunTime$().A(key, this.bH)) {
    return this.cu;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bm = (function(key) {
  return ((($m_sr_BoxesRunTime$().A(key, this.bE) || $m_sr_BoxesRunTime$().A(key, this.bF)) || $m_sr_BoxesRunTime$().A(key, this.bG)) || $m_sr_BoxesRunTime$().A(key, this.bH));
});
$p.cZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().A(key, this.bE) ? this.cr : ($m_sr_BoxesRunTime$().A(key, this.bF) ? this.cs : ($m_sr_BoxesRunTime$().A(key, this.bG) ? this.ct : ($m_sr_BoxesRunTime$().A(key, this.bH) ? this.cu : default$1.Y()))));
});
$p.r = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.f3 = (function(key, value) {
  return ($m_sr_BoxesRunTime$().A(key, this.bE) ? new $c_sci_Map$Map4(this.bE, value, this.bF, this.cs, this.bG, this.ct, this.bH, this.cu) : ($m_sr_BoxesRunTime$().A(key, this.bF) ? new $c_sci_Map$Map4(this.bE, this.cr, this.bF, value, this.bG, this.ct, this.bH, this.cu) : ($m_sr_BoxesRunTime$().A(key, this.bG) ? new $c_sci_Map$Map4(this.bE, this.cr, this.bF, this.cs, this.bG, value, this.bH, this.cu) : ($m_sr_BoxesRunTime$().A(key, this.bH) ? new $c_sci_Map$Map4(this.bE, this.cr, this.bF, this.cs, this.bG, this.ct, this.bH, value) : $m_sci_HashMap$().j5.fI(this.bE, this.cr).fI(this.bF, this.cs).fI(this.bG, this.ct).fI(this.bH, this.cu).fI(key, value)))));
});
$p.aj = (function(f) {
  f.i(new $c_T2(this.bE, this.cr));
  f.i(new $c_T2(this.bF, this.cs));
  f.i(new $c_T2(this.bG, this.ct));
  f.i(new $c_T2(this.bH, this.cu));
});
$p.fy = (function(p) {
  return ((((!(!p.i(new $c_T2(this.bE, this.cr)))) && (!(!p.i(new $c_T2(this.bF, this.cs))))) && (!(!p.i(new $c_T2(this.bG, this.ct))))) && (!(!p.i(new $c_T2(this.bH, this.cu)))));
});
$p.r7 = (function(builder) {
  return builder.eK(this.bE, this.cr).eK(this.bF, this.cs).eK(this.bG, this.ct).eK(this.bH, this.cu);
});
$p.E = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cN(this.bE, this.cr);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cN(this.bF, this.cs);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cN(this.bG, this.ct);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cN(this.bH, this.cu);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().e7;
  h = $m_s_util_hashing_MurmurHash3$().m(h, a);
  h = $m_s_util_hashing_MurmurHash3$().m(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dq(h, c);
  return $m_s_util_hashing_MurmurHash3$().N(h, 4);
});
$p.en = (function(key, value) {
  return this.f3(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c7)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  c7: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gj)));
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
$p.b9 = (function() {
  return this;
});
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.j6)) {
    if ($thiz.hn) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.hn = true;
    try {
      var res = $thiz.j7.Y();
    } finally {
      $thiz.hn = false;
    }
    $thiz.bS = true;
    $thiz.j7 = null;
    $thiz.j8 = res;
    $thiz.j6 = true;
  }
  return $thiz.j8;
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => ($thiz.j() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.i($thiz.L().w()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.L().aN(), f)))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.B = (("" + b.B) + start);
  if ((!$thiz.bS)) {
    b.B = (b.B + "<not computed>");
  } else if ((!$thiz.j())) {
    var obj = $thiz.L().w();
    b.B = (("" + b.B) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.L().aN();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.bS) || (elem.L() !== elem$2.L())))) {
      elem = elem$2;
      if ((elem$2.bS && (!elem$2.j()))) {
        elem$2 = elem$2.L().aN();
        while ((((elem !== elem$2) && (elem$2.bS && (!elem$2.j()))) && (elem.L() !== elem$2.L()))) {
          b.B = (("" + b.B) + sep);
          var obj$1 = elem.L().w();
          b.B = (("" + b.B) + obj$1);
          elem = elem.L().aN();
          elem$2 = elem$2.L().aN();
          if ((elem$2.bS && (!elem$2.j()))) {
            elem$2 = elem$2.L().aN();
          }
        }
      }
    }
    if ((!(elem$2.bS && (!elem$2.j())))) {
      while ((elem !== elem$2)) {
        b.B = (("" + b.B) + sep);
        var obj$2 = elem.L().w();
        b.B = (("" + b.B) + obj$2);
        elem = elem.L().aN();
      }
      if ((!elem.bS)) {
        b.B = (("" + b.B) + sep);
        b.B = (b.B + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.L() === b$1.L())))) {
          runner = runner.L().aN();
          elem$2 = elem$2.L().aN();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.L() === b$2.L())) && (k > 0))) {
        b.B = (("" + b.B) + sep);
        var obj$3 = elem.L().w();
        b.B = (("" + b.B) + obj$3);
        elem = elem.L().aN();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.L() === b$3.L())))) {
          b.B = (("" + b.B) + sep);
          var obj$4 = elem.L().w();
          b.B = (("" + b.B) + obj$4);
          elem = elem.L().aN();
        } else {
          break;
        }
      }
      b.B = (("" + b.B) + sep);
      b.B = (b.B + "<cycle>");
    }
  }
  b.B = (("" + b.B) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.j8 = null;
  this.j7 = null;
  this.bS = false;
  this.hn = false;
  this.j6 = false;
  this.j7 = lazyState;
  this.bS = false;
  this.hn = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bx = (function() {
  return "LinearSeq";
});
$p.bW = (function() {
  return $f_sc_LinearSeqOps__headOption__s_Option(this);
});
$p.C = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.bt = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.k0 = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.F = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fE = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.L = (function() {
  return ((!this.j6) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.j8);
});
$p.j = (function() {
  return (this.L() === $m_sci_LazyList$State$Empty$());
});
$p.J = (function() {
  return ((this.bS && (this.L() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.w = (function() {
  return this.L().w();
});
$p.pu = (function() {
  var these = this;
  var those = this;
  if ((!these.j())) {
    these = these.L().aN();
  }
  while ((those !== these)) {
    if (these.j()) {
      return this;
    }
    these = these.L().aN();
    if (these.j()) {
      return this;
    }
    these = these.L().aN();
    if ((these === those)) {
      return this;
    }
    those = those.L().aN();
  }
  return this;
});
$p.r = (function() {
  return ((this.bS && (this.L() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().U : new $c_sci_LazyList$LazyIterator(this));
});
$p.aj = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.j())) {
      f.i(_$this.L().w());
      _$this = _$this.L().aN();
      continue;
    }
    break;
  }
});
$p.ce = (function() {
  return "LazyList";
});
$p.sx = (function(f) {
  return ((this.bS && (this.L() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().gb : ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => (this.j() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.i(this.L().w()), $p_sci_LazyList__mapImpl__F1__sci_LazyList(this.L().aN(), f)))))))));
});
$p.rM = (function(f) {
  return ((this.bS && (this.L() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().gb : $m_sci_LazyList$().pZ(this, f));
});
$p.rC = (function(n) {
  return ((n <= 0) ? this : ((this.bS && (this.L() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().gb : $m_sci_LazyList$().th(this, n)));
});
$p.e8 = (function(sb, start, sep, end) {
  this.pu();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.b0, start, sep, end);
  return sb;
});
$p.D = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").B;
});
$p.i = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.cB = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.pk = (function(n) {
  return this.rC(n);
});
$p.eQ = (function(asIterable) {
  return this.rM(asIterable);
});
$p.a5 = (function(f) {
  return this.sx(f);
});
$p.y = (function() {
  return this.L().aN();
});
$p.bs = (function() {
  return $m_sci_LazyList$();
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c2)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  c2: 1,
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
  aZ: 1,
  aA: 1,
  aU: 1,
  b0: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.h2)));
}
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.hu = null;
  this.hu = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cF = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a5 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.eQ = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.hF = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fE = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.hE = (function() {
  return $m_sci_IndexedSeqDefaults$().od;
});
$p.r = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bW = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bt = (function(len) {
  var x = this.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.J = (function() {
  return this.C();
});
$p.z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.E = (function() {
  return $m_s_util_hashing_MurmurHash3$().q2(this);
});
$p.D = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.cc = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eZ = (function() {
  return $m_sjsr_WrappedVarArgs$().aw();
});
$p.aj = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.cf = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.e8 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.f0 = (function() {
  return $m_sci_Nil$().ej(this);
});
$p.ef = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.C = (function() {
  return (this.hu.length | 0);
});
$p.F = (function(idx) {
  return this.hu[idx];
});
$p.ce = (function() {
  return "WrappedVarArgs";
});
$p.gE = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().jQ(coll);
});
$p.cB = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.i = (function(v1) {
  return this.F((v1 | 0));
});
$p.bs = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  cs: 1,
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
  this.by = null;
  this.by = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.a5 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.k5 = (function() {
  return $m_sci_HashMap$();
});
$p.J = (function() {
  return this.by.be;
});
$p.bb = (function() {
  return this.by.be;
});
$p.j = (function() {
  return (this.by.be === 0);
});
$p.r = (function() {
  return (this.j() ? $m_sc_Iterator$().U : new $c_sci_MapKeyValueTupleIterator(this.by));
});
$p.bm = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().a2(key);
  var keyHash = $m_sc_Hashing$().cH(keyUnimprovedHash);
  return this.by.jE(key, keyUnimprovedHash, keyHash, 0);
});
$p.i = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().a2(key);
  var keyHash = $m_sc_Hashing$().cH(keyUnimprovedHash);
  return this.by.jt(key, keyUnimprovedHash, keyHash, 0);
});
$p.cZ = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().a2(key);
  var keyHash = $m_sc_Hashing$().cH(keyUnimprovedHash);
  return this.by.jS(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fI = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().a2(key);
  var newRootNode = this.by.q9(key, value, keyUnimprovedHash, $m_sc_Hashing$().cH(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.by) ? this : new $c_sci_HashMap(newRootNode));
});
$p.aj = (function(f) {
  this.by.aj(f);
});
$p.eR = (function(f) {
  this.by.eR(f);
});
$p.z = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.by;
      var x$2 = that.by;
      return ((x === null) ? (x$2 === null) : x.z(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.E = (function() {
  if (this.j()) {
    return $m_s_util_hashing_MurmurHash3$().jo;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.by);
    return $m_s_util_hashing_MurmurHash3$().kl(hashIterator, $m_s_util_hashing_MurmurHash3$().e7);
  }
});
$p.ce = (function() {
  return "HashMap";
});
$p.en = (function(key, value) {
  return this.fI(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  c1: 1,
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
  gP: 1,
  g7: 1,
  l: 1,
  V: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gQ)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.h0)));
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
$p.bk = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (((-1) + $thiz.aY.b.length) | 0));
  var x1 = $thiz.aY.b[idx];
  if ((x1 === null)) {
    $thiz.aY.b[idx] = new $c_scm_HashSet$Node(elem, hash, null);
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.di <= hash))) {
      if (((n.di === hash) && $m_sr_BoxesRunTime$().A(elem, n.eH))) {
        return false;
      }
      prev = n;
      n = n.aZ;
    }
    if ((prev === null)) {
      $thiz.aY.b[idx] = new $c_scm_HashSet$Node(elem, hash, x1);
    } else {
      prev.aZ = new $c_scm_HashSet$Node(elem, hash, prev.aZ);
    }
  }
  $thiz.e3 = ((1 + $thiz.e3) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.aY.b.length;
  $thiz.jl = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.e3 === 0)) {
    $thiz.aY = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.aY = $m_ju_Arrays$().a9($thiz.aY, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.aY.b[i];
        if ((old !== null)) {
          preLow.aZ = null;
          preHigh.aZ = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aZ;
            if (((n.di & oldlen) === 0)) {
              lastLow.aZ = n;
              lastLow = n;
            } else {
              lastHigh.aZ = n;
              lastHigh = n;
            }
            n = next;
          }
          lastLow.aZ = null;
          if ((old !== preLow.aZ)) {
            $thiz.aY.b[i] = preLow.aZ;
          }
          if ((preHigh.aZ !== null)) {
            $thiz.aY.b[((i + oldlen) | 0)] = preHigh.aZ;
            lastHigh.aZ = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashSet__tableSizeFor__I__I($thiz, capacity) {
  var x = (((-1) + capacity) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824);
}
function $p_scm_HashSet__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.jk));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jk = loadFactor;
  $thiz.aY = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.jl = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.aY.b.length);
  $thiz.e3 = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.jk = 0.0;
  this.aY = null;
  this.jl = 0;
  this.e3 = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.a5 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bb = (function() {
  return this.e3;
});
$p.hN = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.bm = (function(elem) {
  var hash = this.hN($m_sr_Statics$().a2(elem));
  var x1 = this.aY.b[(hash & (((-1) + this.aY.b.length) | 0))];
  return (((x1 === null) ? null : x1.rL(elem, hash)) !== null);
});
$p.bn = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jk)));
  if ((target > this.aY.b.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.hB = (function(elem) {
  if ((((1 + this.e3) | 0) >= this.jl)) {
    $p_scm_HashSet__growTable__I__V(this, (this.aY.b.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.hN($m_sr_Statics$().a2(elem)));
});
$p.oO = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.hN((h$2$2 | 0)));
    }));
    xs.tH.tP(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.x()) {
      var next = iter.n();
      $p_scm_HashSet__addElem__O__I__Z(this, next.eH, next.di);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.rF();
    while (iter$2.x()) {
      var next$2 = iter$2.n();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.pG(), next$2.pC());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.r = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.bs = (function() {
  return $m_scm_HashSet$();
});
$p.J = (function() {
  return this.e3;
});
$p.j = (function() {
  return (this.e3 === 0);
});
$p.aj = (function(f) {
  var len = this.aY.b.length;
  var i = 0;
  while ((i < len)) {
    var n = this.aY.b[i];
    if ((n !== null)) {
      n.aj(f);
    }
    i = ((1 + i) | 0);
  }
});
$p.ce = (function() {
  return "HashSet";
});
$p.E = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.x()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().kl(hashIterator, $m_s_util_hashing_MurmurHash3$().oH);
});
$p.b7 = (function(elem) {
  this.hB(elem);
  return this;
});
$p.bk = (function(elems) {
  return this.oO(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  ck: 1,
  h3: 1,
  fF: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aY: 1,
  g5: 1,
  f: 1,
  d: 1,
  ht: 1,
  K: 1,
  hu: 1,
  I: 1,
  B: 1,
  M: 1,
  J: 1,
  H: 1,
  aI: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gv)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hp)));
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
$p.gF = (function(coll) {
  return $m_sci_ArraySeq$().jM(coll, this.au());
});
$p.eZ = (function() {
  return $m_sci_ArraySeq$().hL(this.au());
});
$p.cF = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.eQ = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.hF = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fE = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bx = (function() {
  return "IndexedSeq";
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bW = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bt = (function(len) {
  var x = this.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.J = (function() {
  return this.C();
});
$p.ef = (function() {
  return $m_sci_ArraySeq$().j3;
});
$p.sw = (function(f) {
  var a = new $ac_O(this.C());
  var i = 0;
  while ((i < a.b.length)) {
    a.b[i] = f.i(this.F(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().hS(a);
});
$p.ce = (function() {
  return "ArraySeq";
});
$p.cf = (function(xs, start, len) {
  var srcLen = this.C();
  var destLen = $m_jl_reflect_Array$().cA(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().gA(this.d3(), 0, xs, start, copied);
  }
  return copied;
});
$p.hE = (function() {
  return 2147483647;
});
$p.gE = (function(coll) {
  return $m_sci_ArraySeq$().jM(coll, this.au());
});
$p.a5 = (function(f) {
  return this.sw(f);
});
$p.bs = (function() {
  return $m_sci_ArraySeq$().j3;
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
$p.cF = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.eQ = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.hF = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fE = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bx = (function() {
  return "IndexedSeq";
});
$p.bW = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bt = (function(len) {
  var x = this.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.J = (function() {
  return this.C();
});
$p.ef = (function() {
  return $m_sci_Vector$();
});
$p.C = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.s : this.l.b.length);
});
$p.r = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().ol : new $c_sci_NewVectorIterator(this, this.C(), this.d5()));
});
$p.ce = (function() {
  return "Vector";
});
$p.cf = (function(xs, start, len) {
  return this.r().cf(xs, start, len);
});
$p.hE = (function() {
  return $m_sci_Vector$().ok;
});
$p.b1 = (function(index) {
  return $m_scg_CommonErrors$().gI(index, (((-1) + this.C()) | 0));
});
$p.w = (function() {
  if ((this.l.b.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.l.b[0];
  }
});
$p.aj = (function(f) {
  var c = this.d5();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.jK((((-1) + ((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0)) | 0), this.d4(i), f);
    i = ((1 + i) | 0);
  }
});
$p.bs = (function() {
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
$p.cF = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a5 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bx = (function() {
  return "IndexedSeq";
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bW = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bt = (function(len) {
  var x = this.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.J = (function() {
  return this.C();
});
$p.ef = (function() {
  return $m_scm_ArraySeq$().jj;
});
$p.pB = (function(coll) {
  var evidence$1 = this.au();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.ba();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.J();
  var it = coll.r();
  while (it.x()) {
    var elem = it.n();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a3.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.k3(elemRuntimeClass.a3.r().w(jsElems));
});
$p.eZ = (function() {
  return $m_scm_ArraySeq$().hL(this.au());
});
$p.ce = (function() {
  return "ArraySeq";
});
$p.cf = (function(xs, start, len) {
  var srcLen = this.C();
  var destLen = $m_jl_reflect_Array$().cA(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().gA(this.cy(), 0, xs, start, copied);
  }
  return copied;
});
$p.z = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().cA(this.cy()) !== $m_jl_reflect_Array$().cA(other.cy()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.gE = (function(coll) {
  return this.pB(coll);
});
$p.gF = (function(coll) {
  return this.pB(coll);
});
$p.bs = (function() {
  return $m_scm_ArraySeq$().jj;
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
$p.C = (function() {
  return this.dD.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p7(this.dD, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().ps(this.dD, that.dD) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dD);
});
$p.gw = (function(i) {
  return this.dD.b[i];
});
$p.i = (function(v1) {
  return this.gw((v1 | 0));
});
$p.F = (function(i) {
  return this.gw(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.d3 = (function() {
  return this.dD;
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bO)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
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
$p.C = (function() {
  return this.dE.b.length;
});
$p.gn = (function(i) {
  return this.dE.b[i];
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oZ(this.dE, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().pm(this.dE, that.dE) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dE);
});
$p.i = (function(v1) {
  return this.gn((v1 | 0));
});
$p.F = (function(i) {
  return this.gn(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.d3 = (function() {
  return this.dE;
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bP)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
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
$p.C = (function() {
  return this.d9.b.length;
});
$p.go = (function(i) {
  return this.d9.b[i];
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p0(this.d9, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().pn(this.d9, that.d9) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.d9);
});
$p.e8 = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.d9).e8(sb, start, sep, end);
});
$p.i = (function(v1) {
  return $bC(this.go((v1 | 0)));
});
$p.F = (function(i) {
  return $bC(this.go(i));
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.d3 = (function() {
  return this.d9;
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bQ)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
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
$p.C = (function() {
  return this.dF.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p1(this.dF, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().po(this.dF, that.dF) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dF);
});
$p.gr = (function(i) {
  return this.dF.b[i];
});
$p.i = (function(v1) {
  return this.gr((v1 | 0));
});
$p.F = (function(i) {
  return this.gr(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.d3 = (function() {
  return this.dF;
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bR)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
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
$p.C = (function() {
  return this.dG.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p2(this.dG, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().pp(this.dG, that.dG) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dG);
});
$p.gs = (function(i) {
  return this.dG.b[i];
});
$p.i = (function(v1) {
  return this.gs((v1 | 0));
});
$p.F = (function(i) {
  return this.gs(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.d3 = (function() {
  return this.dG;
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bS)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
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
$p.C = (function() {
  return this.dH.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p3(this.dH, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().jH(this.dH, that.dH) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dH);
});
$p.gt = (function(i) {
  return this.dH.b[i];
});
$p.i = (function(v1) {
  return this.gt((v1 | 0));
});
$p.F = (function(i) {
  return this.gt(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.d3 = (function() {
  return this.dH;
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bT)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
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
$p.C = (function() {
  return this.dI.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p4(this.dI, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().pq(this.dI, that.dI) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dI);
});
$p.gu = (function(i) {
  return this.dI.b[i];
});
$p.i = (function(v1) {
  return this.gu((v1 | 0));
});
$p.F = (function(i) {
  return this.gu(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.d3 = (function() {
  return this.dI;
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bU)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
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
$p.au = (function() {
  return $m_s_reflect_ClassTag$().oW($objectGetClass(this.cO).a3.Q());
});
$p.C = (function() {
  return this.cO.b.length;
});
$p.F = (function(i) {
  return this.cO.b[i];
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oY(this.cO, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().pt(this.cO, that.cO) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.cO);
});
$p.i = (function(v1) {
  return this.F((v1 | 0));
});
$p.d3 = (function() {
  return this.cO;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bV)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
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
$p.C = (function() {
  return this.dJ.b.length;
});
$p.gp = (function(i) {
  return this.dJ.b[i];
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p5(this.dJ, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().pr(this.dJ, that.dJ) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dJ);
});
$p.i = (function(v1) {
  return this.gp((v1 | 0));
});
$p.F = (function(i) {
  return this.gp(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.d3 = (function() {
  return this.dJ;
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bW)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
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
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.eB = null;
  this.eB = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.C = (function() {
  return this.eB.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p6(this.eB, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.eB.b.length === that.eB.b.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.eB);
});
$p.gv = (function(i) {
});
$p.i = (function(v1) {
  this.gv((v1 | 0));
});
$p.F = (function(i) {
  this.gv(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.d3 = (function() {
  return this.eB;
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bX)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  bX: 1,
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
      return (xs.j() ? 0 : 1);
    } else if (xs.j()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.y();
      i = temp$i;
      xs = temp$xs;
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
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().A(a.w(), b.w()))) {
        var temp$a = a.y();
        var temp$b = b.y();
        a = temp$a;
        b = temp$b;
      } else {
        return (aEmpty && bEmpty);
      }
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
$p.cF = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.r = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.eQ = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.bx = (function() {
  return "LinearSeq";
});
$p.k0 = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.F = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fE = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.ef = (function() {
  return $m_sci_List$();
});
$p.oI = (function(prefix) {
  if (this.j()) {
    return prefix;
  } else if (prefix.j()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.w(), this);
    var curr = result;
    var that = prefix.y();
    while ((!that.j())) {
      var temp = new $c_sci_$colon$colon(that.w(), this);
      curr.a1 = temp;
      curr = temp;
      that = that.y();
    }
    return result;
  }
});
$p.j = (function() {
  return (this === $m_sci_Nil$());
});
$p.ej = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.oI(prefix);
  }
  if ((prefix.J() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.j()) {
      return prefix.f0();
    }
  }
  var iter = prefix.r();
  if (iter.x()) {
    var result = new $c_sci_$colon$colon(iter.n(), this);
    var curr = result;
    while (iter.x()) {
      var temp = new $c_sci_$colon$colon(iter.n(), this);
      curr.a1 = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.oT = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.oI(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.sy = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.i(this.w()), $m_sci_Nil$());
    var t = h;
    var rest = this.y();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.i(rest.w()), $m_sci_Nil$());
      t.a1 = nx;
      t = nx;
      rest = rest.y();
    }
    return h;
  }
});
$p.rd = (function(pf) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var rest = this;
    var h = null;
    var x = null;
    while ((h === null)) {
      x = pf.cc(rest.w(), $m_sci_List$().gc);
      if ((x !== $m_sci_List$().gc)) {
        h = new $c_sci_$colon$colon(x, $m_sci_Nil$());
      }
      rest = rest.y();
      if ((rest === $m_sci_Nil$())) {
        return ((h === null) ? $m_sci_Nil$() : h);
      }
    }
    var t = h;
    while ((rest !== $m_sci_Nil$())) {
      x = pf.cc(rest.w(), $m_sci_List$().gc);
      if ((x !== $m_sci_List$().gc)) {
        var nx = new $c_sci_$colon$colon(x, $m_sci_Nil$());
        t.a1 = nx;
        t = nx;
      }
      rest = rest.y();
    }
    return h;
  }
});
$p.aj = (function(f) {
  var these = this;
  while ((!these.j())) {
    f.i(these.w());
    these = these.y();
  }
});
$p.C = (function() {
  var these = this;
  var len = 0;
  while ((!these.j())) {
    len = ((1 + len) | 0);
    these = these.y();
  }
  return len;
});
$p.bt = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.bm = (function(elem) {
  var these = this;
  while ((!these.j())) {
    if ($m_sr_BoxesRunTime$().A(these.w(), elem)) {
      return true;
    }
    these = these.y();
  }
  return false;
});
$p.ce = (function() {
  return "List";
});
$p.f0 = (function() {
  return this;
});
$p.z = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.i = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.cB = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.pk = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.a5 = (function(f) {
  return this.sy(f);
});
$p.bs = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b1)));
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
  this.dV = null;
  this.dV = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.C = (function() {
  return this.dV.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p7(this.dV, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().ps(this.dV, that.dV) : $c_scm_ArraySeq.prototype.z.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dV);
});
$p.gw = (function(index) {
  return this.dV.b[index];
});
$p.i = (function(v1) {
  return this.gw((v1 | 0));
});
$p.F = (function(i) {
  return this.gw(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cy = (function() {
  return this.dV;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ca)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
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
  K: 1,
  O: 1,
  I: 1,
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
  this.dW = null;
  this.dW = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.C = (function() {
  return this.dW.b.length;
});
$p.gn = (function(index) {
  return this.dW.b[index];
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oZ(this.dW, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().pm(this.dW, that.dW) : $c_scm_ArraySeq.prototype.z.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dW);
});
$p.i = (function(v1) {
  return this.gn((v1 | 0));
});
$p.F = (function(i) {
  return this.gn(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cy = (function() {
  return this.dW;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
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
  K: 1,
  O: 1,
  I: 1,
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
  this.cb = null;
  this.cb = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.C = (function() {
  return this.cb.b.length;
});
$p.go = (function(index) {
  return this.cb.b[index];
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p0(this.cb, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().pn(this.cb, that.cb) : $c_scm_ArraySeq.prototype.z.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.cb);
});
$p.e8 = (function(sb, start, sep, end) {
  var jsb = sb.b0;
  if ((start.length !== 0)) {
    jsb.B = (("" + jsb.B) + start);
  }
  var len = this.cb.b.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.oR(this.cb);
    } else {
      jsb.C();
      var c = this.cb.b[0];
      var str = ("" + $cToS(c));
      jsb.B = (jsb.B + str);
      var i = 1;
      while ((i < len)) {
        jsb.B = (("" + jsb.B) + sep);
        var c$1 = this.cb.b[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.B = (jsb.B + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.B = (("" + jsb.B) + end);
  }
  return sb;
});
$p.i = (function(v1) {
  return $bC(this.go((v1 | 0)));
});
$p.F = (function(i) {
  return $bC(this.go(i));
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cy = (function() {
  return this.cb;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
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
  K: 1,
  O: 1,
  I: 1,
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
  this.dX = null;
  this.dX = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.C = (function() {
  return this.dX.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p1(this.dX, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().po(this.dX, that.dX) : $c_scm_ArraySeq.prototype.z.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dX);
});
$p.gr = (function(index) {
  return this.dX.b[index];
});
$p.i = (function(v1) {
  return this.gr((v1 | 0));
});
$p.F = (function(i) {
  return this.gr(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cy = (function() {
  return this.dX;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cd)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
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
  K: 1,
  O: 1,
  I: 1,
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
  this.dY = null;
  this.dY = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.C = (function() {
  return this.dY.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p2(this.dY, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().pp(this.dY, that.dY) : $c_scm_ArraySeq.prototype.z.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dY);
});
$p.gs = (function(index) {
  return this.dY.b[index];
});
$p.i = (function(v1) {
  return this.gs((v1 | 0));
});
$p.F = (function(i) {
  return this.gs(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cy = (function() {
  return this.dY;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ce)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
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
  K: 1,
  O: 1,
  I: 1,
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
  this.dZ = null;
  this.dZ = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.C = (function() {
  return this.dZ.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p3(this.dZ, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().jH(this.dZ, that.dZ) : $c_scm_ArraySeq.prototype.z.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dZ);
});
$p.gt = (function(index) {
  return this.dZ.b[index];
});
$p.i = (function(v1) {
  return this.gt((v1 | 0));
});
$p.F = (function(i) {
  return this.gt(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cy = (function() {
  return this.dZ;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
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
  K: 1,
  O: 1,
  I: 1,
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
  this.e0 = null;
  this.e0 = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.C = (function() {
  return this.e0.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p4(this.e0, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().pq(this.e0, that.e0) : $c_scm_ArraySeq.prototype.z.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.e0);
});
$p.gu = (function(index) {
  return this.e0.b[index];
});
$p.i = (function(v1) {
  return this.gu((v1 | 0));
});
$p.F = (function(i) {
  return this.gu(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cy = (function() {
  return this.e0;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
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
  K: 1,
  O: 1,
  I: 1,
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
  this.dg = null;
  this.dg = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.au = (function() {
  return $m_s_reflect_ClassTag$().oW($objectGetClass(this.dg).a3.Q());
});
$p.C = (function() {
  return this.dg.b.length;
});
$p.F = (function(index) {
  return this.dg.b[index];
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oY(this.dg, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().pt(this.dg, that.dg) : $c_scm_ArraySeq.prototype.z.call(this, that));
});
$p.r = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.dg);
});
$p.i = (function(v1) {
  return this.F((v1 | 0));
});
$p.cy = (function() {
  return this.dg;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
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
  K: 1,
  O: 1,
  I: 1,
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
  this.e1 = null;
  this.e1 = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.C = (function() {
  return this.e1.b.length;
});
$p.gp = (function(index) {
  return this.e1.b[index];
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p5(this.e1, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().pr(this.e1, that.e1) : $c_scm_ArraySeq.prototype.z.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.e1);
});
$p.i = (function(v1) {
  return this.gp((v1 | 0));
});
$p.F = (function(i) {
  return this.gp(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cy = (function() {
  return this.e1;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  ci: 1,
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
  K: 1,
  O: 1,
  I: 1,
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
  this.eG = null;
  this.eG = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.C = (function() {
  return this.eG.b.length;
});
$p.E = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.p6(this.eG, this$1.aA);
});
$p.z = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.eG.b.length === that.eG.b.length) : $c_scm_ArraySeq.prototype.z.call(this, that));
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.eG);
});
$p.gv = (function(index) {
});
$p.i = (function(v1) {
  this.gv((v1 | 0));
});
$p.F = (function(i) {
  this.gv(i);
});
$p.au = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cy = (function() {
  return this.eG;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cj: 1,
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
  K: 1,
  O: 1,
  I: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hf)));
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
$p.F = (function(index) {
  if (((index >= 0) && (index < this.l.b.length))) {
    return this.l.b[index];
  } else {
    throw this.b1(index);
  }
});
$p.em = (function(index, elem) {
  if (((index >= 0) && (index < this.l.b.length))) {
    var a1 = this.l;
    var a1c = a1.o();
    a1c.b[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.b1(index);
  }
});
$p.e9 = (function(elem) {
  if ((this.l.b.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().fx(this.l, elem));
  } else {
    var $x_2 = this.l;
    var $x_1 = $m_sci_VectorStatics$().bK;
    var a = new $ac_O(1);
    a.b[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cJ = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cC(this.l, f));
});
$p.d5 = (function() {
  return 1;
});
$p.d4 = (function(idx) {
  return this.l;
});
$p.a5 = (function(f) {
  return this.cJ(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.l.b.length))) {
    return this.l.b[index];
  } else {
    throw this.b1(index);
  }
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  gT: 1,
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
  this.g6 = null;
  this.a1 = null;
  this.g6 = head;
  this.a1 = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.w = (function() {
  return this.g6;
});
$p.aD = (function() {
  return "::";
});
$p.aB = (function() {
  return 2;
});
$p.aC = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.g6;
      break;
    }
    case 1: {
      return this.a1;
      break;
    }
    default: {
      return $m_sr_Statics$().eW(x$1);
    }
  }
});
$p.bB = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.y = (function() {
  return this.a1;
});
$p.bW = (function() {
  return new $c_s_Some(this.g6);
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  gd: 1,
  b1: 1,
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
  aZ: 1,
  aA: 1,
  aU: 1,
  b0: 1,
  bN: 1,
  s: 1,
  l: 1,
  A: 1,
  V: 1,
  a: 1,
  v: 1
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
$p.jX = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.tr = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.J = (function() {
  return 0;
});
$p.r = (function() {
  return $m_sc_Iterator$().U;
});
$p.aD = (function() {
  return "Nil";
});
$p.aB = (function() {
  return 0;
});
$p.aC = (function(x$1) {
  return $m_sr_Statics$().eW(x$1);
});
$p.bB = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.y = (function() {
  this.tr();
});
$p.bW = (function() {
  return $m_s_None$();
});
$p.w = (function() {
  this.jX();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  gJ: 1,
  b1: 1,
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
  aZ: 1,
  aA: 1,
  aU: 1,
  b0: 1,
  bN: 1,
  s: 1,
  l: 1,
  A: 1,
  V: 1,
  a: 1,
  v: 1
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
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().jd, $m_sci_VectorStatics$().jd, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.oU = (function(index) {
  throw this.b1(index);
});
$p.em = (function(index, elem) {
  throw this.b1(index);
});
$p.e9 = (function(elem) {
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
$p.z = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.b1 = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.a5 = (function(f) {
  return this;
});
$p.i = (function(v1) {
  this.oU((v1 | 0));
});
$p.F = (function(i) {
  this.oU(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
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
  this.bU = 0;
  this.bz = null;
  this.bU = len1;
  this.bz = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.F = (function(index) {
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.bU) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bz.b.length) ? this.bz.b[i2].b[i1] : this.q.b[(31 & io)]);
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.b1(index);
  }
});
$p.em = (function(index, elem) {
  if (((index >= 0) && (index < this.s))) {
    if ((index >= this.bU)) {
      var io = ((index - this.bU) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bz.b.length)) {
        var a2 = this.bz;
        var a2c = a2.o();
        var a1 = a2c.b[i2];
        var a1c = a1.o();
        a1c.b[i1] = elem;
        a2c.b[i2] = a1c;
        return new $c_sci_Vector2(this.l, this.bU, a2c, this.q, this.s);
      } else {
        var a1$1 = this.q;
        var a1c$1 = a1$1.o();
        a1c$1.b[i1] = elem;
        return new $c_sci_Vector2(this.l, this.bU, this.bz, a1c$1, this.s);
      }
    } else {
      var a1$2 = this.l;
      var a1c$2 = a1$2.o();
      a1c$2.b[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bU, this.bz, this.q, this.s);
    }
  } else {
    throw this.b1(index);
  }
});
$p.e9 = (function(elem) {
  if ((this.q.b.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fx(this.q, elem);
    var x$2 = ((1 + this.s) | 0);
    return new $c_sci_Vector2(this.l, this.bU, this.bz, x$1, x$2);
  } else if ((this.bz.b.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().O(this.bz, this.q);
    var a = new $ac_O(1);
    a.b[0] = elem;
    var x$8 = ((1 + this.s) | 0);
    return new $c_sci_Vector2(this.l, this.bU, x$6, a, x$8);
  } else {
    var $x_5 = this.l;
    var $x_4 = this.bU;
    var $x_3 = this.bz;
    var $x_2 = this.bU;
    var $x_1 = $m_sci_VectorStatics$().cU;
    var x = this.q;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.b[0] = x;
    var a$2 = new $ac_O(1);
    a$2.b[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.s) | 0));
  }
});
$p.cJ = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cC(this.l, f);
  var x$2 = $m_sci_VectorStatics$().ah(2, this.bz, f);
  var x$3 = $m_sci_VectorStatics$().cC(this.q, f);
  return new $c_sci_Vector2(x$1, this.bU, x$2, x$3, this.s);
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
      return this.bz;
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
$p.a5 = (function(f) {
  return this.cJ(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.bU) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bz.b.length) ? this.bz.b[i2].b[i1] : this.q.b[(31 & io)]);
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.b1(index);
  }
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
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
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.l = null;
  this.q = null;
  this.s = 0;
  this.bv = 0;
  this.bJ = null;
  this.bw = 0;
  this.bh = null;
  this.bi = null;
  this.bv = len1;
  this.bJ = prefix2;
  this.bw = len12;
  this.bh = data3;
  this.bi = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.F = (function(index) {
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.bw) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.bh.b.length) ? this.bh.b[i3].b[i2].b[i1] : ((i2 < this.bi.b.length) ? this.bi.b[i2].b[i1] : this.q.b[i1]));
    } else if ((index >= this.bv)) {
      var io$2 = ((index - this.bv) | 0);
      return this.bJ.b[((io$2 >>> 5) | 0)].b[(31 & io$2)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.b1(index);
  }
});
$p.em = (function(index, elem) {
  if (((index >= 0) && (index < this.s))) {
    if ((index >= this.bw)) {
      var io = ((index - this.bw) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.bh.b.length)) {
        var a3 = this.bh;
        var a3c = a3.o();
        var a2 = a3c.b[i3];
        var a2c = a2.o();
        var a1 = a2c.b[i2];
        var a1c = a1.o();
        a1c.b[i1] = elem;
        a2c.b[i2] = a1c;
        a3c.b[i3] = a2c;
        return new $c_sci_Vector3(this.l, this.bv, this.bJ, this.bw, a3c, this.bi, this.q, this.s);
      } else if ((i2 < this.bi.b.length)) {
        var a2$1 = this.bi;
        var a2c$1 = a2$1.o();
        var a1$1 = a2c$1.b[i2];
        var a1c$1 = a1$1.o();
        a1c$1.b[i1] = elem;
        a2c$1.b[i2] = a1c$1;
        return new $c_sci_Vector3(this.l, this.bv, this.bJ, this.bw, this.bh, a2c$1, this.q, this.s);
      } else {
        var a1$2 = this.q;
        var a1c$2 = a1$2.o();
        a1c$2.b[i1] = elem;
        return new $c_sci_Vector3(this.l, this.bv, this.bJ, this.bw, this.bh, this.bi, a1c$2, this.s);
      }
    } else if ((index >= this.bv)) {
      var io$2 = ((index - this.bv) | 0);
      var a2$2 = this.bJ;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.o();
      var a1$3 = a2c$2.b[idx2];
      var a1c$3 = a1$3.o();
      a1c$3.b[idx1] = elem;
      a2c$2.b[idx2] = a1c$3;
      return new $c_sci_Vector3(this.l, this.bv, a2c$2, this.bw, this.bh, this.bi, this.q, this.s);
    } else {
      var a1$4 = this.l;
      var a1c$4 = a1$4.o();
      a1c$4.b[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bv, this.bJ, this.bw, this.bh, this.bi, this.q, this.s);
    }
  } else {
    throw this.b1(index);
  }
});
$p.e9 = (function(elem) {
  if ((this.q.b.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fx(this.q, elem);
    var x$2 = ((1 + this.s) | 0);
    return new $c_sci_Vector3(this.l, this.bv, this.bJ, this.bw, this.bh, this.bi, x$1, x$2);
  } else if ((this.bi.b.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().O(this.bi, this.q);
    var a = new $ac_O(1);
    a.b[0] = elem;
    var x$11 = ((1 + this.s) | 0);
    return new $c_sci_Vector3(this.l, this.bv, this.bJ, this.bw, this.bh, x$9, a, x$11);
  } else if ((this.bh.b.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().O(this.bh, $m_sci_VectorStatics$().O(this.bi, this.q));
    var x$18 = $m_sci_VectorStatics$().bK;
    var a$1 = new $ac_O(1);
    a$1.b[0] = elem;
    var x$20 = ((1 + this.s) | 0);
    return new $c_sci_Vector3(this.l, this.bv, this.bJ, this.bw, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.l;
    var $x_7 = this.bv;
    var $x_6 = this.bJ;
    var $x_5 = this.bw;
    var $x_4 = this.bh;
    var $x_3 = this.bw;
    var $x_2 = $m_sci_VectorStatics$().fs;
    var x = $m_sci_VectorStatics$().O(this.bi, this.q);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.b[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bK;
    var a$3 = new $ac_O(1);
    a$3.b[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.s) | 0));
  }
});
$p.cJ = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cC(this.l, f);
  var x$2 = $m_sci_VectorStatics$().ah(2, this.bJ, f);
  var x$3 = $m_sci_VectorStatics$().ah(3, this.bh, f);
  var x$4 = $m_sci_VectorStatics$().ah(2, this.bi, f);
  var x$5 = $m_sci_VectorStatics$().cC(this.q, f);
  return new $c_sci_Vector3(x$1, this.bv, x$2, this.bw, x$3, x$4, x$5, this.s);
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
      return this.bJ;
      break;
    }
    case 2: {
      return this.bh;
      break;
    }
    case 3: {
      return this.bi;
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
$p.a5 = (function(f) {
  return this.cJ(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.bw) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.bh.b.length) ? this.bh.b[i3].b[i2].b[i1] : ((i2 < this.bi.b.length) ? this.bi.b[i2].b[i1] : this.q.b[i1]));
    } else if ((index >= this.bv)) {
      var io$2 = ((index - this.bv) | 0);
      return this.bJ.b[((io$2 >>> 5) | 0)].b[(31 & io$2)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.b1(index);
  }
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
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
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.l = null;
  this.q = null;
  this.s = 0;
  this.b3 = 0;
  this.bo = null;
  this.b4 = 0;
  this.bp = null;
  this.b5 = 0;
  this.aP = null;
  this.aR = null;
  this.aQ = null;
  this.b3 = len1;
  this.bo = prefix2;
  this.b4 = len12;
  this.bp = prefix3;
  this.b5 = len123;
  this.aP = data4;
  this.aR = suffix3;
  this.aQ = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.F = (function(index) {
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.b5) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aP.b.length) ? this.aP.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.aR.b.length) ? this.aR.b[i3].b[i2].b[i1] : ((i2 < this.aQ.b.length) ? this.aQ.b[i2].b[i1] : this.q.b[i1])));
    } else if ((index >= this.b4)) {
      var io$2 = ((index - this.b4) | 0);
      return this.bp.b[((io$2 >>> 10) | 0)].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.b3)) {
      var io$3 = ((index - this.b3) | 0);
      return this.bo.b[((io$3 >>> 5) | 0)].b[(31 & io$3)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.b1(index);
  }
});
$p.em = (function(index, elem) {
  if (((index >= 0) && (index < this.s))) {
    if ((index >= this.b5)) {
      var io = ((index - this.b5) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.aP.b.length)) {
        var a4 = this.aP;
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
        return new $c_sci_Vector4(this.l, this.b3, this.bo, this.b4, this.bp, this.b5, a4c, this.aR, this.aQ, this.q, this.s);
      } else if ((i3 < this.aR.b.length)) {
        var a3$1 = this.aR;
        var a3c$1 = a3$1.o();
        var a2$1 = a3c$1.b[i3];
        var a2c$1 = a2$1.o();
        var a1$1 = a2c$1.b[i2];
        var a1c$1 = a1$1.o();
        a1c$1.b[i1] = elem;
        a2c$1.b[i2] = a1c$1;
        a3c$1.b[i3] = a2c$1;
        return new $c_sci_Vector4(this.l, this.b3, this.bo, this.b4, this.bp, this.b5, this.aP, a3c$1, this.aQ, this.q, this.s);
      } else if ((i2 < this.aQ.b.length)) {
        var a2$2 = this.aQ;
        var a2c$2 = a2$2.o();
        var a1$2 = a2c$2.b[i2];
        var a1c$2 = a1$2.o();
        a1c$2.b[i1] = elem;
        a2c$2.b[i2] = a1c$2;
        return new $c_sci_Vector4(this.l, this.b3, this.bo, this.b4, this.bp, this.b5, this.aP, this.aR, a2c$2, this.q, this.s);
      } else {
        var a1$3 = this.q;
        var a1c$3 = a1$3.o();
        a1c$3.b[i1] = elem;
        return new $c_sci_Vector4(this.l, this.b3, this.bo, this.b4, this.bp, this.b5, this.aP, this.aR, this.aQ, a1c$3, this.s);
      }
    } else if ((index >= this.b4)) {
      var io$2 = ((index - this.b4) | 0);
      var a3$2 = this.bp;
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
      return new $c_sci_Vector4(this.l, this.b3, this.bo, this.b4, a3c$2, this.b5, this.aP, this.aR, this.aQ, this.q, this.s);
    } else if ((index >= this.b3)) {
      var io$3 = ((index - this.b3) | 0);
      var a2$4 = this.bo;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.o();
      var a1$5 = a2c$4.b[idx2$1];
      var a1c$5 = a1$5.o();
      a1c$5.b[idx1$1] = elem;
      a2c$4.b[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.l, this.b3, a2c$4, this.b4, this.bp, this.b5, this.aP, this.aR, this.aQ, this.q, this.s);
    } else {
      var a1$6 = this.l;
      var a1c$6 = a1$6.o();
      a1c$6.b[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.b3, this.bo, this.b4, this.bp, this.b5, this.aP, this.aR, this.aQ, this.q, this.s);
    }
  } else {
    throw this.b1(index);
  }
});
$p.e9 = (function(elem) {
  if ((this.q.b.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fx(this.q, elem);
    var x$2 = ((1 + this.s) | 0);
    return new $c_sci_Vector4(this.l, this.b3, this.bo, this.b4, this.bp, this.b5, this.aP, this.aR, this.aQ, x$1, x$2);
  } else if ((this.aQ.b.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().O(this.aQ, this.q);
    var a = new $ac_O(1);
    a.b[0] = elem;
    var x$14 = ((1 + this.s) | 0);
    return new $c_sci_Vector4(this.l, this.b3, this.bo, this.b4, this.bp, this.b5, this.aP, this.aR, x$12, a, x$14);
  } else if ((this.aR.b.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().O(this.aR, $m_sci_VectorStatics$().O(this.aQ, this.q));
    var x$24 = $m_sci_VectorStatics$().bK;
    var a$1 = new $ac_O(1);
    a$1.b[0] = elem;
    var x$26 = ((1 + this.s) | 0);
    return new $c_sci_Vector4(this.l, this.b3, this.bo, this.b4, this.bp, this.b5, this.aP, x$23, x$24, a$1, x$26);
  } else if ((this.aP.b.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().O(this.aP, $m_sci_VectorStatics$().O(this.aR, $m_sci_VectorStatics$().O(this.aQ, this.q)));
    var x$35 = $m_sci_VectorStatics$().cU;
    var x$36 = $m_sci_VectorStatics$().bK;
    var a$2 = new $ac_O(1);
    a$2.b[0] = elem;
    var x$38 = ((1 + this.s) | 0);
    return new $c_sci_Vector4(this.l, this.b3, this.bo, this.b4, this.bp, this.b5, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.l;
    var $x_10 = this.b3;
    var $x_9 = this.bo;
    var $x_8 = this.b4;
    var $x_7 = this.bp;
    var $x_6 = this.b5;
    var $x_5 = this.aP;
    var $x_4 = this.b5;
    var $x_3 = $m_sci_VectorStatics$().je;
    var x = $m_sci_VectorStatics$().O(this.aR, $m_sci_VectorStatics$().O(this.aQ, this.q));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.b[0] = x;
    var $x_2 = $m_sci_VectorStatics$().cU;
    var $x_1 = $m_sci_VectorStatics$().bK;
    var a$4 = new $ac_O(1);
    a$4.b[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.s) | 0));
  }
});
$p.cJ = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cC(this.l, f);
  var x$2 = $m_sci_VectorStatics$().ah(2, this.bo, f);
  var x$3 = $m_sci_VectorStatics$().ah(3, this.bp, f);
  var x$4 = $m_sci_VectorStatics$().ah(4, this.aP, f);
  var x$5 = $m_sci_VectorStatics$().ah(3, this.aR, f);
  var x$6 = $m_sci_VectorStatics$().ah(2, this.aQ, f);
  var x$7 = $m_sci_VectorStatics$().cC(this.q, f);
  return new $c_sci_Vector4(x$1, this.b3, x$2, this.b4, x$3, this.b5, x$4, x$5, x$6, x$7, this.s);
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
      return this.bo;
      break;
    }
    case 2: {
      return this.bp;
      break;
    }
    case 3: {
      return this.aP;
      break;
    }
    case 4: {
      return this.aR;
      break;
    }
    case 5: {
      return this.aQ;
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
$p.a5 = (function(f) {
  return this.cJ(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.b5) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aP.b.length) ? this.aP.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.aR.b.length) ? this.aR.b[i3].b[i2].b[i1] : ((i2 < this.aQ.b.length) ? this.aQ.b[i2].b[i1] : this.q.b[i1])));
    } else if ((index >= this.b4)) {
      var io$2 = ((index - this.b4) | 0);
      return this.bp.b[((io$2 >>> 10) | 0)].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.b3)) {
      var io$3 = ((index - this.b3) | 0);
      return this.bo.b[((io$3 >>> 5) | 0)].b[(31 & io$3)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.b1(index);
  }
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  gW: 1,
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
  this.aF = 0;
  this.aU = null;
  this.aG = 0;
  this.aV = null;
  this.aH = 0;
  this.aW = null;
  this.aI = 0;
  this.am = null;
  this.ap = null;
  this.ao = null;
  this.an = null;
  this.aF = len1;
  this.aU = prefix2;
  this.aG = len12;
  this.aV = prefix3;
  this.aH = len123;
  this.aW = prefix4;
  this.aI = len1234;
  this.am = data5;
  this.ap = suffix4;
  this.ao = suffix3;
  this.an = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.F = (function(index) {
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.aI) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.am.b.length) ? this.am.b[i5].b[i4].b[i3].b[i2].b[i1] : ((i4 < this.ap.b.length) ? this.ap.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.ao.b.length) ? this.ao.b[i3].b[i2].b[i1] : ((i2 < this.an.b.length) ? this.an.b[i2].b[i1] : this.q.b[i1]))));
    } else if ((index >= this.aH)) {
      var io$2 = ((index - this.aH) | 0);
      return this.aW.b[((io$2 >>> 15) | 0)].b[(31 & ((io$2 >>> 10) | 0))].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.aG)) {
      var io$3 = ((index - this.aG) | 0);
      return this.aV.b[((io$3 >>> 10) | 0)].b[(31 & ((io$3 >>> 5) | 0))].b[(31 & io$3)];
    } else if ((index >= this.aF)) {
      var io$4 = ((index - this.aF) | 0);
      return this.aU.b[((io$4 >>> 5) | 0)].b[(31 & io$4)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.b1(index);
  }
});
$p.em = (function(index, elem) {
  if (((index >= 0) && (index < this.s))) {
    if ((index >= this.aI)) {
      var io = ((index - this.aI) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.am.b.length)) {
        var a5 = this.am;
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
        return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, a5c, this.ap, this.ao, this.an, this.q, this.s);
      } else if ((i4 < this.ap.b.length)) {
        var a4$1 = this.ap;
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
        return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, this.am, a4c$1, this.ao, this.an, this.q, this.s);
      } else if ((i3 < this.ao.b.length)) {
        var a3$2 = this.ao;
        var a3c$2 = a3$2.o();
        var a2$2 = a3c$2.b[i3];
        var a2c$2 = a2$2.o();
        var a1$2 = a2c$2.b[i2];
        var a1c$2 = a1$2.o();
        a1c$2.b[i1] = elem;
        a2c$2.b[i2] = a1c$2;
        a3c$2.b[i3] = a2c$2;
        return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, this.am, this.ap, a3c$2, this.an, this.q, this.s);
      } else if ((i2 < this.an.b.length)) {
        var a2$3 = this.an;
        var a2c$3 = a2$3.o();
        var a1$3 = a2c$3.b[i2];
        var a1c$3 = a1$3.o();
        a1c$3.b[i1] = elem;
        a2c$3.b[i2] = a1c$3;
        return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, this.am, this.ap, this.ao, a2c$3, this.q, this.s);
      } else {
        var a1$4 = this.q;
        var a1c$4 = a1$4.o();
        a1c$4.b[i1] = elem;
        return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, this.am, this.ap, this.ao, this.an, a1c$4, this.s);
      }
    } else if ((index >= this.aH)) {
      var io$2 = ((index - this.aH) | 0);
      var a4$2 = this.aW;
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
      return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, a4c$2, this.aI, this.am, this.ap, this.ao, this.an, this.q, this.s);
    } else if ((index >= this.aG)) {
      var io$3 = ((index - this.aG) | 0);
      var a3$4 = this.aV;
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
      return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, a3c$4, this.aH, this.aW, this.aI, this.am, this.ap, this.ao, this.an, this.q, this.s);
    } else if ((index >= this.aF)) {
      var io$4 = ((index - this.aF) | 0);
      var a2$6 = this.aU;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.o();
      var a1$7 = a2c$6.b[idx2$2];
      var a1c$7 = a1$7.o();
      a1c$7.b[idx1$2] = elem;
      a2c$6.b[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.l, this.aF, a2c$6, this.aG, this.aV, this.aH, this.aW, this.aI, this.am, this.ap, this.ao, this.an, this.q, this.s);
    } else {
      var a1$8 = this.l;
      var a1c$8 = a1$8.o();
      a1c$8.b[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, this.am, this.ap, this.ao, this.an, this.q, this.s);
    }
  } else {
    throw this.b1(index);
  }
});
$p.e9 = (function(elem) {
  if ((this.q.b.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fx(this.q, elem);
    var x$2 = ((1 + this.s) | 0);
    return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, this.am, this.ap, this.ao, this.an, x$1, x$2);
  } else if ((this.an.b.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().O(this.an, this.q);
    var a = new $ac_O(1);
    a.b[0] = elem;
    var x$17 = ((1 + this.s) | 0);
    return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, this.am, this.ap, this.ao, x$15, a, x$17);
  } else if ((this.ao.b.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().O(this.ao, $m_sci_VectorStatics$().O(this.an, this.q));
    var x$30 = $m_sci_VectorStatics$().bK;
    var a$1 = new $ac_O(1);
    a$1.b[0] = elem;
    var x$32 = ((1 + this.s) | 0);
    return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, this.am, this.ap, x$29, x$30, a$1, x$32);
  } else if ((this.ap.b.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().O(this.ap, $m_sci_VectorStatics$().O(this.ao, $m_sci_VectorStatics$().O(this.an, this.q)));
    var x$44 = $m_sci_VectorStatics$().cU;
    var x$45 = $m_sci_VectorStatics$().bK;
    var a$2 = new $ac_O(1);
    a$2.b[0] = elem;
    var x$47 = ((1 + this.s) | 0);
    return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, this.am, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.am.b.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().O(this.am, $m_sci_VectorStatics$().O(this.ap, $m_sci_VectorStatics$().O(this.ao, $m_sci_VectorStatics$().O(this.an, this.q))));
    var x$58 = $m_sci_VectorStatics$().fs;
    var x$59 = $m_sci_VectorStatics$().cU;
    var x$60 = $m_sci_VectorStatics$().bK;
    var a$3 = new $ac_O(1);
    a$3.b[0] = elem;
    var x$62 = ((1 + this.s) | 0);
    return new $c_sci_Vector5(this.l, this.aF, this.aU, this.aG, this.aV, this.aH, this.aW, this.aI, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.l;
    var $x_13 = this.aF;
    var $x_12 = this.aU;
    var $x_11 = this.aG;
    var $x_10 = this.aV;
    var $x_9 = this.aH;
    var $x_8 = this.aW;
    var $x_7 = this.aI;
    var $x_6 = this.am;
    var $x_5 = this.aI;
    var $x_4 = $m_sci_VectorStatics$().om;
    var x = $m_sci_VectorStatics$().O(this.ap, $m_sci_VectorStatics$().O(this.ao, $m_sci_VectorStatics$().O(this.an, this.q)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.b[0] = x;
    var $x_3 = $m_sci_VectorStatics$().fs;
    var $x_2 = $m_sci_VectorStatics$().cU;
    var $x_1 = $m_sci_VectorStatics$().bK;
    var a$5 = new $ac_O(1);
    a$5.b[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.s) | 0));
  }
});
$p.cJ = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cC(this.l, f);
  var x$2 = $m_sci_VectorStatics$().ah(2, this.aU, f);
  var x$3 = $m_sci_VectorStatics$().ah(3, this.aV, f);
  var x$4 = $m_sci_VectorStatics$().ah(4, this.aW, f);
  var x$5 = $m_sci_VectorStatics$().ah(5, this.am, f);
  var x$6 = $m_sci_VectorStatics$().ah(4, this.ap, f);
  var x$7 = $m_sci_VectorStatics$().ah(3, this.ao, f);
  var x$8 = $m_sci_VectorStatics$().ah(2, this.an, f);
  var x$9 = $m_sci_VectorStatics$().cC(this.q, f);
  return new $c_sci_Vector5(x$1, this.aF, x$2, this.aG, x$3, this.aH, x$4, this.aI, x$5, x$6, x$7, x$8, x$9, this.s);
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
      return this.aU;
      break;
    }
    case 2: {
      return this.aV;
      break;
    }
    case 3: {
      return this.aW;
      break;
    }
    case 4: {
      return this.am;
      break;
    }
    case 5: {
      return this.ap;
      break;
    }
    case 6: {
      return this.ao;
      break;
    }
    case 7: {
      return this.an;
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
$p.a5 = (function(f) {
  return this.cJ(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.aI) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.am.b.length) ? this.am.b[i5].b[i4].b[i3].b[i2].b[i1] : ((i4 < this.ap.b.length) ? this.ap.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.ao.b.length) ? this.ao.b[i3].b[i2].b[i1] : ((i2 < this.an.b.length) ? this.an.b[i2].b[i1] : this.q.b[i1]))));
    } else if ((index >= this.aH)) {
      var io$2 = ((index - this.aH) | 0);
      return this.aW.b[((io$2 >>> 15) | 0)].b[(31 & ((io$2 >>> 10) | 0))].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.aG)) {
      var io$3 = ((index - this.aG) | 0);
      return this.aV.b[((io$3 >>> 10) | 0)].b[(31 & ((io$3 >>> 5) | 0))].b[(31 & io$3)];
    } else if ((index >= this.aF)) {
      var io$4 = ((index - this.aF) | 0);
      return this.aU.b[((io$4 >>> 5) | 0)].b[(31 & io$4)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.b1(index);
  }
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  gX: 1,
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
  this.aq = 0;
  this.aJ = null;
  this.ar = 0;
  this.aK = null;
  this.as = 0;
  this.aL = null;
  this.at = 0;
  this.aM = null;
  this.ay = 0;
  this.ab = null;
  this.af = null;
  this.ae = null;
  this.ad = null;
  this.ac = null;
  this.aq = len1;
  this.aJ = prefix2;
  this.ar = len12;
  this.aK = prefix3;
  this.as = len123;
  this.aL = prefix4;
  this.at = len1234;
  this.aM = prefix5;
  this.ay = len12345;
  this.ab = data6;
  this.af = suffix5;
  this.ae = suffix4;
  this.ad = suffix3;
  this.ac = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.F = (function(index) {
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.ay) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.ab.b.length) ? this.ab.b[i6].b[i5].b[i4].b[i3].b[i2].b[i1] : ((i5 < this.af.b.length) ? this.af.b[i5].b[i4].b[i3].b[i2].b[i1] : ((i4 < this.ae.b.length) ? this.ae.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.ad.b.length) ? this.ad.b[i3].b[i2].b[i1] : ((i2 < this.ac.b.length) ? this.ac.b[i2].b[i1] : this.q.b[i1])))));
    } else if ((index >= this.at)) {
      var io$2 = ((index - this.at) | 0);
      return this.aM.b[((io$2 >>> 20) | 0)].b[(31 & ((io$2 >>> 15) | 0))].b[(31 & ((io$2 >>> 10) | 0))].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.as)) {
      var io$3 = ((index - this.as) | 0);
      return this.aL.b[((io$3 >>> 15) | 0)].b[(31 & ((io$3 >>> 10) | 0))].b[(31 & ((io$3 >>> 5) | 0))].b[(31 & io$3)];
    } else if ((index >= this.ar)) {
      var io$4 = ((index - this.ar) | 0);
      return this.aK.b[((io$4 >>> 10) | 0)].b[(31 & ((io$4 >>> 5) | 0))].b[(31 & io$4)];
    } else if ((index >= this.aq)) {
      var io$5 = ((index - this.aq) | 0);
      return this.aJ.b[((io$5 >>> 5) | 0)].b[(31 & io$5)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.b1(index);
  }
});
$p.em = (function(index, elem) {
  if (((index >= 0) && (index < this.s))) {
    if ((index >= this.ay)) {
      var io = ((index - this.ay) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.ab.b.length)) {
        var a6 = this.ab;
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
        return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, a6c, this.af, this.ae, this.ad, this.ac, this.q, this.s);
      } else if ((i5 < this.af.b.length)) {
        var a5$1 = this.af;
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
        return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, a5c$1, this.ae, this.ad, this.ac, this.q, this.s);
      } else if ((i4 < this.ae.b.length)) {
        var a4$2 = this.ae;
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
        return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, a4c$2, this.ad, this.ac, this.q, this.s);
      } else if ((i3 < this.ad.b.length)) {
        var a3$3 = this.ad;
        var a3c$3 = a3$3.o();
        var a2$3 = a3c$3.b[i3];
        var a2c$3 = a2$3.o();
        var a1$3 = a2c$3.b[i2];
        var a1c$3 = a1$3.o();
        a1c$3.b[i1] = elem;
        a2c$3.b[i2] = a1c$3;
        a3c$3.b[i3] = a2c$3;
        return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, this.ae, a3c$3, this.ac, this.q, this.s);
      } else if ((i2 < this.ac.b.length)) {
        var a2$4 = this.ac;
        var a2c$4 = a2$4.o();
        var a1$4 = a2c$4.b[i2];
        var a1c$4 = a1$4.o();
        a1c$4.b[i1] = elem;
        a2c$4.b[i2] = a1c$4;
        return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, this.ae, this.ad, a2c$4, this.q, this.s);
      } else {
        var a1$5 = this.q;
        var a1c$5 = a1$5.o();
        a1c$5.b[i1] = elem;
        return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, this.ae, this.ad, this.ac, a1c$5, this.s);
      }
    } else if ((index >= this.at)) {
      var io$2 = ((index - this.at) | 0);
      var a5$2 = this.aM;
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
      return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, a5c$2, this.ay, this.ab, this.af, this.ae, this.ad, this.ac, this.q, this.s);
    } else if ((index >= this.as)) {
      var io$3 = ((index - this.as) | 0);
      var a4$4 = this.aL;
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
      return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, a4c$4, this.at, this.aM, this.ay, this.ab, this.af, this.ae, this.ad, this.ac, this.q, this.s);
    } else if ((index >= this.ar)) {
      var io$4 = ((index - this.ar) | 0);
      var a3$6 = this.aK;
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
      return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, a3c$6, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, this.ae, this.ad, this.ac, this.q, this.s);
    } else if ((index >= this.aq)) {
      var io$5 = ((index - this.aq) | 0);
      var a2$8 = this.aJ;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.o();
      var a1$9 = a2c$8.b[idx2$3];
      var a1c$9 = a1$9.o();
      a1c$9.b[idx1$3] = elem;
      a2c$8.b[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.l, this.aq, a2c$8, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, this.ae, this.ad, this.ac, this.q, this.s);
    } else {
      var a1$10 = this.l;
      var a1c$10 = a1$10.o();
      a1c$10.b[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, this.ae, this.ad, this.ac, this.q, this.s);
    }
  } else {
    throw this.b1(index);
  }
});
$p.e9 = (function(elem) {
  if ((this.q.b.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fx(this.q, elem);
    var x$2 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, this.ae, this.ad, this.ac, x$1, x$2);
  } else if ((this.ac.b.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().O(this.ac, this.q);
    var a = new $ac_O(1);
    a.b[0] = elem;
    var x$20 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, this.ae, this.ad, x$18, a, x$20);
  } else if ((this.ad.b.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().O(this.ad, $m_sci_VectorStatics$().O(this.ac, this.q));
    var x$36 = $m_sci_VectorStatics$().bK;
    var a$1 = new $ac_O(1);
    a$1.b[0] = elem;
    var x$38 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, this.ae, x$35, x$36, a$1, x$38);
  } else if ((this.ae.b.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().O(this.ae, $m_sci_VectorStatics$().O(this.ad, $m_sci_VectorStatics$().O(this.ac, this.q)));
    var x$53 = $m_sci_VectorStatics$().cU;
    var x$54 = $m_sci_VectorStatics$().bK;
    var a$2 = new $ac_O(1);
    a$2.b[0] = elem;
    var x$56 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, this.af, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.af.b.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().O(this.af, $m_sci_VectorStatics$().O(this.ae, $m_sci_VectorStatics$().O(this.ad, $m_sci_VectorStatics$().O(this.ac, this.q))));
    var x$70 = $m_sci_VectorStatics$().fs;
    var x$71 = $m_sci_VectorStatics$().cU;
    var x$72 = $m_sci_VectorStatics$().bK;
    var a$3 = new $ac_O(1);
    a$3.b[0] = elem;
    var x$74 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, this.ab, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.ab.b.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().O(this.ab, $m_sci_VectorStatics$().O(this.af, $m_sci_VectorStatics$().O(this.ae, $m_sci_VectorStatics$().O(this.ad, $m_sci_VectorStatics$().O(this.ac, this.q)))));
    var x$87 = $m_sci_VectorStatics$().je;
    var x$88 = $m_sci_VectorStatics$().fs;
    var x$89 = $m_sci_VectorStatics$().cU;
    var x$90 = $m_sci_VectorStatics$().bK;
    var a$4 = new $ac_O(1);
    a$4.b[0] = elem;
    var x$92 = ((1 + this.s) | 0);
    return new $c_sci_Vector6(this.l, this.aq, this.aJ, this.ar, this.aK, this.as, this.aL, this.at, this.aM, this.ay, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cJ = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cC(this.l, f);
  var x$2 = $m_sci_VectorStatics$().ah(2, this.aJ, f);
  var x$3 = $m_sci_VectorStatics$().ah(3, this.aK, f);
  var x$4 = $m_sci_VectorStatics$().ah(4, this.aL, f);
  var x$5 = $m_sci_VectorStatics$().ah(5, this.aM, f);
  var x$6 = $m_sci_VectorStatics$().ah(6, this.ab, f);
  var x$7 = $m_sci_VectorStatics$().ah(5, this.af, f);
  var x$8 = $m_sci_VectorStatics$().ah(4, this.ae, f);
  var x$9 = $m_sci_VectorStatics$().ah(3, this.ad, f);
  var x$10 = $m_sci_VectorStatics$().ah(2, this.ac, f);
  var x$11 = $m_sci_VectorStatics$().cC(this.q, f);
  return new $c_sci_Vector6(x$1, this.aq, x$2, this.ar, x$3, this.as, x$4, this.at, x$5, this.ay, x$6, x$7, x$8, x$9, x$10, x$11, this.s);
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
      return this.aJ;
      break;
    }
    case 2: {
      return this.aK;
      break;
    }
    case 3: {
      return this.aL;
      break;
    }
    case 4: {
      return this.aM;
      break;
    }
    case 5: {
      return this.ab;
      break;
    }
    case 6: {
      return this.af;
      break;
    }
    case 7: {
      return this.ae;
      break;
    }
    case 8: {
      return this.ad;
      break;
    }
    case 9: {
      return this.ac;
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
$p.a5 = (function(f) {
  return this.cJ(f);
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.s))) {
    var io = ((index - this.ay) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.ab.b.length) ? this.ab.b[i6].b[i5].b[i4].b[i3].b[i2].b[i1] : ((i5 < this.af.b.length) ? this.af.b[i5].b[i4].b[i3].b[i2].b[i1] : ((i4 < this.ae.b.length) ? this.ae.b[i4].b[i3].b[i2].b[i1] : ((i3 < this.ad.b.length) ? this.ad.b[i3].b[i2].b[i1] : ((i2 < this.ac.b.length) ? this.ac.b[i2].b[i1] : this.q.b[i1])))));
    } else if ((index >= this.at)) {
      var io$2 = ((index - this.at) | 0);
      return this.aM.b[((io$2 >>> 20) | 0)].b[(31 & ((io$2 >>> 15) | 0))].b[(31 & ((io$2 >>> 10) | 0))].b[(31 & ((io$2 >>> 5) | 0))].b[(31 & io$2)];
    } else if ((index >= this.as)) {
      var io$3 = ((index - this.as) | 0);
      return this.aL.b[((io$3 >>> 15) | 0)].b[(31 & ((io$3 >>> 10) | 0))].b[(31 & ((io$3 >>> 5) | 0))].b[(31 & io$3)];
    } else if ((index >= this.ar)) {
      var io$4 = ((index - this.ar) | 0);
      return this.aK.b[((io$4 >>> 10) | 0)].b[(31 & ((io$4 >>> 5) | 0))].b[(31 & io$4)];
    } else if ((index >= this.aq)) {
      var io$5 = ((index - this.aq) | 0);
      return this.aJ.b[((io$5 >>> 5) | 0)].b[(31 & io$5)];
    } else {
      return this.l.b[index];
    }
  } else {
    throw this.b1(index);
  }
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  gY: 1,
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
  $thiz.b0 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.b0 = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.bx = (function() {
  return "IndexedSeq";
});
$p.r = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.a5 = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bW = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bt = (function(len) {
  var x = this.b0.C();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bn = (function(size) {
});
$p.bk = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.C = (function() {
  return this.b0.C();
});
$p.J = (function() {
  return this.b0.C();
});
$p.qI = (function(x) {
  var this$1 = this.b0;
  var str = ("" + $cToS(x));
  this$1.B = (this$1.B + str);
  return this;
});
$p.D = (function() {
  return this.b0.B;
});
$p.bl = (function(s) {
  var this$1 = this.b0;
  this$1.B = (("" + this$1.B) + s);
  return this;
});
$p.oS = (function(xs) {
  if (false) {
    var this$3 = this.b0;
    var str = xs.tI;
    this$3.B = (("" + this$3.B) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.b0.oR(xs.cb);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.b0;
    var s = xs.b0;
    this$4.B = (("" + this$4.B) + s);
  } else {
    var ks = xs.J();
    if ((ks !== 0)) {
      var b = this.b0;
      if ((ks > 0)) {
        b.C();
      }
      var it = xs.r();
      while (it.x()) {
        var c = $uC(it.n());
        var str$1 = ("" + $cToS(c));
        b.B = (b.B + str$1);
      }
    }
  }
  return this;
});
$p.j = (function() {
  return (this.b0.C() === 0);
});
$p.bs = (function() {
  return $m_scm_IndexedSeq$();
});
$p.b9 = (function() {
  return this.b0.B;
});
$p.b7 = (function(elem) {
  return this.qI($uC(elem));
});
$p.gE = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oS(coll);
});
$p.gF = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oS(coll);
});
$p.i = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.b0.p8(i));
});
$p.F = (function(i) {
  return $bC(this.b0.p8(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cn: 1,
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
  K: 1,
  O: 1,
  I: 1,
  B: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  aP: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ho)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().gS($thiz);
  $thiz.cv = buf.cv;
  $thiz.dj = buf.dj;
  $thiz.hp = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.hq = ((1 + $thiz.hq) | 0);
  if ($thiz.hp) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.hq = 0;
  this.cv = null;
  this.dj = null;
  this.hp = false;
  this.cw = 0;
  this.hq = 0;
  this.cv = $m_sci_Nil$();
  this.dj = null;
  this.hp = false;
  this.cw = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.bn = (function(size) {
});
$p.cF = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a5 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.r = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cv.r(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.hq)));
});
$p.ef = (function() {
  return $m_scm_ListBuffer$();
});
$p.F = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cv, i);
});
$p.C = (function() {
  return this.cw;
});
$p.J = (function() {
  return this.cw;
});
$p.j = (function() {
  return (this.cw === 0);
});
$p.f0 = (function() {
  this.hp = (!this.j());
  return this.cv;
});
$p.hC = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.cw === 0)) {
    this.cv = last1;
  } else {
    this.dj.a1 = last1;
  }
  this.dj = last1;
  this.cw = ((1 + this.cw) | 0);
  return this;
});
$p.gS = (function(xs) {
  var it = xs.r();
  if (it.x()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.n(), $m_sci_Nil$());
    this.cv = last0;
    while (it.x()) {
      var last1 = new $c_sci_$colon$colon(it.n(), $m_sci_Nil$());
      last0.a1 = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.cw = len;
    this.dj = last0;
  }
  return this;
});
$p.qG = (function(xs) {
  var it = xs.r();
  if (it.x()) {
    var fresh = new $c_scm_ListBuffer().gS(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.cw === 0)) {
      this.cv = fresh.cv;
    } else {
      this.dj.a1 = fresh.cv;
    }
    this.dj = fresh.dj;
    this.cw = ((this.cw + fresh.cw) | 0);
  }
  return this;
});
$p.bx = (function() {
  return "ListBuffer";
});
$p.bk = (function(elems) {
  return this.qG(elems);
});
$p.b7 = (function(elem) {
  return this.hC(elem);
});
$p.b9 = (function() {
  return this.f0();
});
$p.i = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.cv, i);
});
$p.bs = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cm)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  cm: 1,
  b3: 1,
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
  K: 1,
  O: 1,
  I: 1,
  B: 1,
  b4: 1,
  J: 1,
  H: 1,
  aI: 1,
  s: 1,
  l: 1,
  ac: 1,
  M: 1,
  V: 1,
  a: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.dU = 0;
  $thiz.dT = initialElements;
  $thiz.aS = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.dU = 0;
  this.dT = null;
  this.aS = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.cF = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a5 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.r = (function() {
  return this.tF().r();
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bW = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bt = (function(len) {
  var x = this.aS;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.J = (function() {
  return this.aS;
});
$p.jG = (function(n) {
  this.dT = $m_scm_ArrayBuffer$().q1(this.dT, this.aS, n);
});
$p.bn = (function(size) {
  if (((size > this.aS) && (size >= 1))) {
    this.jG(size);
  }
});
$p.F = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().gI(n, (((-1) + this.aS) | 0));
  }
  if ((hi > this.aS)) {
    throw $m_scg_CommonErrors$().gI((((-1) + hi) | 0), (((-1) + this.aS) | 0));
  }
  return this.dT.b[n];
});
$p.tB = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().gI(index, (((-1) + this.aS) | 0));
  }
  if ((hi > this.aS)) {
    throw $m_scg_CommonErrors$().gI((((-1) + hi) | 0), (((-1) + this.aS) | 0));
  }
  this.dU = ((1 + this.dU) | 0);
  this.dT.b[index] = elem;
});
$p.C = (function() {
  return this.aS;
});
$p.tF = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.dU)));
});
$p.ef = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.qN = (function(elem) {
  this.dU = ((1 + this.dU) | 0);
  var newSize = ((1 + this.aS) | 0);
  this.jG(newSize);
  this.aS = newSize;
  this.tB((((-1) + this.aS) | 0), elem);
  return this;
});
$p.oN = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aS;
    if ((elemsLength > 0)) {
      this.dU = ((1 + this.dU) | 0);
      this.jG(((this.aS + elemsLength) | 0));
      $m_s_Array$().gA(elems.dT, 0, this.dT, this.aS, elemsLength);
      this.aS = ((this.aS + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bx = (function() {
  return "ArrayBuffer";
});
$p.cf = (function(xs, start, len) {
  var srcLen = this.aS;
  var destLen = $m_jl_reflect_Array$().cA(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().gA(this.dT, 0, xs, start, copied);
  }
  return copied;
});
$p.bk = (function(elems) {
  return this.oN(elems);
});
$p.b7 = (function(elem) {
  return this.qN(elem);
});
$p.bs = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.i = (function(v1) {
  return this.F((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  c9: 1,
  b3: 1,
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
  K: 1,
  O: 1,
  I: 1,
  B: 1,
  b4: 1,
  J: 1,
  H: 1,
  aI: 1,
  cl: 1,
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
  $thiz.e5 = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.e5 = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bn = (function(size) {
});
$p.bx = (function() {
  return "IndexedSeq";
});
$p.r = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.a5 = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.w = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bW = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bt = (function(len) {
  var x = (this.e5.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cF = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.ef = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.F = (function(index) {
  return this.e5[index];
});
$p.C = (function() {
  return (this.e5.length | 0);
});
$p.J = (function() {
  return (this.e5.length | 0);
});
$p.ce = (function() {
  return "WrappedArray";
});
$p.b9 = (function() {
  return this;
});
$p.b7 = (function(elem) {
  this.e5.push(elem);
  return this;
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  return this.e5[index];
});
$p.bs = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  id: 1,
  b3: 1,
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
  K: 1,
  O: 1,
  I: 1,
  B: 1,
  b4: 1,
  J: 1,
  H: 1,
  aI: 1,
  s: 1,
  l: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  cl: 1,
  M: 1,
  a: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.z = $L0;
var $t_Lccrystal_site_Tab$__Manifesto = null;
var $t_Lccrystal_site_Tab$__Explorer = null;
var $t_Lccrystal_site_Tab$__Quickstart = null;
var $t_Lccrystal_site_Tab$__Mcp = null;
var $t_Lccrystal_site_Tab$__AgentIngestion = null;
var $t_Lccrystal_site_TabExplorer$Scenario$__Inception = null;
var $t_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike = null;
var $t_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact = null;
$s_Lccrystal_site_Main__main__AT__V(new ($d_T.r().C)([]));
