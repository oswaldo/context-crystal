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
  return (arg0.$classData.Z ? arg0.n() : $objectClone(arg0));
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
        return null.sI();
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
        return instance.w(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.w.call(instance, x0);
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
        return instance.C();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.C.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.sJ(x0);
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
$p.C = (function() {
  return $systemIdentityHashCode(this);
});
$p.w = (function(that) {
  return (this === that);
});
$p.B = (function() {
  var i = this.C();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.B();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.F = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.n = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.F = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.n = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.n = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.n = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.n = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.n = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = $L0;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.F = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.n = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.n = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.F = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.n = (function() {
  return new $ac_D(this.a.slice());
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
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.F = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.n = (function() {
    return new ArrayClass(this.a.slice());
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
$p.c9 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().b.qH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("portal-footer"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("container footer-inner"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("footer-brand-block"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("footer-logo"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("crystal-glyph"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u25c8", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Context Crystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("footer-manifesto-quote"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\"Context is not a vector database. It is a sovereign, deterministic DAG.\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("footer-subquote"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Engineered for biological software architects and computational AI entities pair-programming in high-stakes codebases.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("footer-links-grid"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("footer-col"), $m_Lcom_raquo_laminar_api_package$().b.hx().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Specifications & Standards", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.hE().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal/blob/main/spec/v1/context-crystal.json"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "JSON Schema v1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal/blob/main/spec/v1/context-crystal.json"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "JSON-LD Context", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal/blob/main/skills/context-crystal/SKILL.md"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Universal Agent Skill", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("footer-col"), $m_Lcom_raquo_laminar_api_package$().b.hx().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Engine & Protocols", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.hE().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal/blob/main/cli/shared/src/main/scala/ccrystal/cli/mcp/DefaultMcpHandler.scala"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Native MCP Server Engine", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal/blob/main/install.sh"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Single-Line Installer", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("llms.txt"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "llms.txt (Machine Ingestion)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("llms-full.txt"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "llms-full.txt (Full Corpus)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("footer-col"), $m_Lcom_raquo_laminar_api_package$().b.hx().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Open Source", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.hE().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "GitHub Repository", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal/releases"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Release Binaries", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal/blob/main/LICENSE"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "MIT License", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("container footer-bottom"), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Copyright \u00a9 2026 Oswaldo C. Dantas J\u00fanior & Context Crystal Contributors. Pure functional Scala 3 Native & Scala.js.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
});
var $d_Lccrystal_site_Footer$ = new $TypeData().i($c_Lccrystal_site_Footer$, "ccrystal.site.Footer$", ({
  cx: 1
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
$p.c9 = (function() {
  var $x_22 = $m_Lcom_raquo_laminar_api_package$().b.r4();
  var $x_21 = $m_sr_ScalaRunTime$();
  var $x_20 = $m_Lcom_raquo_laminar_api_package$().b.f.g("portal-header");
  var $x_19 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_18 = $m_sr_ScalaRunTime$();
  var $x_17 = $m_Lcom_raquo_laminar_api_package$().b.f.g("container header-inner");
  var $x_16 = $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("brand-cluster"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("brand-logo"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("crystal-glyph"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u25c8", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("brand-text-col"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("brand-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Context Crystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("brand-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "v0.1.0-alpha \u2022 Zero-Token Context DAG", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])));
  var $x_15 = $m_Lcom_raquo_laminar_api_package$().b.rA();
  var $x_14 = $m_sr_ScalaRunTime$();
  var $x_13 = $m_Lcom_raquo_laminar_api_package$().b.f.g("header-nav");
  var $x_12 = $m_Lcom_raquo_laminar_api_package$().b;
  var $x_11 = $m_sci_Nil$();
  var $x_10 = $m_s_Predef$();
  var xs = $m_Lccrystal_site_Tab$().sw();
  var f = ((tab) => $m_Lcom_raquo_laminar_api_package$().b.cP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("button"), $m_Lcom_raquo_laminar_api_package$().b.f.ja(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().eT.aR, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((tab$2) => ((active) => (((active === null) ? (tab$2 === null) : (active === tab$2)) ? "nav-pill active" : "nav-pill")))(tab)), $m_s_None$()), $m_Lcom_raquo_laminar_api_package$().b.hn()), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("nav-pill-icon"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, tab.ed, $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("nav-pill-text"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, tab.ee, $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.cz(), false, false)).gy(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((tab$3) => (() => tab$3))(tab))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.dk(_$1);
  }))($m_Lccrystal_site_State$().eT.dp)))]))));
  var len = xs.a.length;
  var ys = new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_1 = i;
        var x0 = xs.a[i];
        ys.a[$x_1] = f(x0);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_I)) {
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = xs.a[i];
        ys.a[$x_2] = f(x0$1);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_D)) {
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = xs.a[i];
        ys.a[$x_3] = f(x0$2);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_J)) {
      while ((i < len)) {
        var $x_4 = i;
        var t = xs.a[i];
        var lo = t.r;
        var hi = t.s;
        ys.a[$x_4] = f(new $c_RTLong(lo, hi));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_F)) {
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = xs.a[i];
        ys.a[$x_5] = f(x0$3);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_C)) {
      while ((i < len)) {
        var $x_6 = i;
        var x0$4 = xs.a[i];
        ys.a[$x_6] = f($bC(x0$4));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_B)) {
      while ((i < len)) {
        var $x_7 = i;
        var x0$5 = xs.a[i];
        ys.a[$x_7] = f(x0$5);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_S)) {
      while ((i < len)) {
        var $x_8 = i;
        var x0$6 = xs.a[i];
        ys.a[$x_8] = f(x0$6);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_Z)) {
      while ((i < len)) {
        var $x_9 = i;
        var x0$7 = xs.a[i];
        ys.a[$x_9] = f(x0$7);
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs);
    }
  }
  return $x_22.d($x_21.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_20, $x_19.d($x_18.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_17, $x_16, $x_15.d($x_14.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_13, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_12, $x_11.ea($x_10.k4(ys)), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("header-actions"), $m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("btn-github"), $m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $m_Lcom_raquo_laminar_api_package$().b.rT().g("noopener noreferrer"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("github-icon"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u2605", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "GitHub", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])));
});
var $d_Lccrystal_site_Header$ = new $TypeData().i($c_Lccrystal_site_Header$, "ccrystal.site.Header$", ({
  cy: 1
}));
var $n_Lccrystal_site_Header$;
function $m_Lccrystal_site_Header$() {
  if ((!$n_Lccrystal_site_Header$)) {
    $n_Lccrystal_site_Header$ = new $c_Lccrystal_site_Header$();
  }
  return $n_Lccrystal_site_Header$;
}
function $s_Lccrystal_site_Main__main__AT__V(args) {
  $m_Lccrystal_site_Main$().rn(args);
}
function $p_Lccrystal_site_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$1) {
  if ((appContainer$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  return (appContainer$lzy1$1.hg ? appContainer$lzy1$1.hh : appContainer$lzy1$1.r9(document.querySelector("#app")));
}
function $p_Lccrystal_site_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2) {
  return (appContainer$lzy1$2.hg ? appContainer$lzy1$2.hh : $p_Lccrystal_site_Main$__appContainer$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_Element($thiz, appContainer$lzy1$2));
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
$p.rn = (function(args) {
  var appContainer$lzy1 = new $c_sr_LazyRef();
  var this$2 = $m_Lcom_raquo_laminar_api_package$().b;
  var container = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((appContainer$lzy1$2) => (() => $p_Lccrystal_site_Main$__appContainer$1__sr_LazyRef__Lorg_scalajs_dom_Element(this, appContainer$lzy1$2)))(appContainer$lzy1));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lccrystal_site_Main$().pS()));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().cm(this$2.ls.rO(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().pX(document, p.em.fJ, p.fI), p.fH), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container.W(), rootNode.W());
  })), this$2.st());
});
$p.pS = (function() {
  return $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("portal-root"), $m_Lccrystal_site_Header$().c9(), $m_Lcom_raquo_laminar_api_package$().b.ro().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("portal-main container"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().nZ(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().eT.aR, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x = $s_Lccrystal_site_Tab$__Manifesto__Lccrystal_site_Tab();
    if (((x === null) ? (x$1 === null) : (x === x$1))) {
      return $m_Lccrystal_site_TabManifesto$().c9();
    }
    var x$3 = $s_Lccrystal_site_Tab$__Explorer__Lccrystal_site_Tab();
    if (((x$3 === null) ? (x$1 === null) : (x$3 === x$1))) {
      return $m_Lccrystal_site_TabExplorer$().c9();
    }
    var x$5 = $s_Lccrystal_site_Tab$__Quickstart__Lccrystal_site_Tab();
    if (((x$5 === null) ? (x$1 === null) : (x$5 === x$1))) {
      return $m_Lccrystal_site_TabQuickstart$().c9();
    }
    var x$7 = $s_Lccrystal_site_Tab$__Mcp__Lccrystal_site_Tab();
    if (((x$7 === null) ? (x$1 === null) : (x$7 === x$1))) {
      return $m_Lccrystal_site_TabMcp$().c9();
    }
    var x$9 = $s_Lccrystal_site_Tab$__AgentIngestion__Lccrystal_site_Tab();
    if (((x$9 === null) ? (x$1 === null) : (x$9 === x$1))) {
      return $m_Lccrystal_site_TabAgentIngestion$().c9();
    }
    throw new $c_s_MatchError(x$1);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().ih, (void 0)))]))), $m_Lccrystal_site_Footer$().c9()])));
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
  this.eT = null;
  this.d0 = null;
  $n_Lccrystal_site_State$ = this;
  this.eT = $m_Lcom_raquo_laminar_api_package$().b.f0.ge($s_Lccrystal_site_Tab$__Manifesto__Lccrystal_site_Tab());
  this.d0 = $m_Lcom_raquo_laminar_api_package$().b.f0.ge($m_s_None$());
}
$p = $c_Lccrystal_site_State$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_State$;
/** @constructor */
function $h_Lccrystal_site_State$() {
}
$h_Lccrystal_site_State$.prototype = $p;
$p.go = (function(id, text) {
  var \u03b41$ = window.navigator.clipboard.writeText(text);
  \u03b41$.then(((_$1) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lccrystal_site_State$().d0, new $c_s_Some(id));
    return (window.setTimeout((() => ($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_State$().d0.aR).P().bf(id) ? ($f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lccrystal_site_State$().d0, $m_s_None$()), (void 0)) : (void 0))), 2000.0) | 0);
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
$p.c9 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("tab-content tab-agent-ingestion"), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("agent-intro"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("mcp-badge"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Machine-Readable Standard \u2022 Autonomous Ingestion \u2022 Zero Human Learning Curve", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.eH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Autonomous AI Agent Ingestion (`llms.txt`)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Context Crystal adheres to the emergent `/llms.txt` standard. Autonomous coding agents (Claude, ChatGPT, Perplexity, Devin, Cursor, Windsurf) can ingest our canonical operational rules, CLI flags, and MCP schemas directly.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Machine-Readable Endpoints", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Standardized plain-text documentation endpoints hosted at the root of this portal:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("cards-grid two-col"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card endpoint-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("endpoint-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("file-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "CONCISE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "/llms.txt", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Optimized for LLM context limits. Contains the core operational philosophy, essential CLI commands, MCP tool mappings, and behavioral invariants.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("endpoint-actions"), $m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("llms.txt"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $m_Lcom_raquo_laminar_api_package$().b.f.g("btn-mini active"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "View llms.txt \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card endpoint-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("endpoint-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("file-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "FULL CORPUS", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "/llms-full.txt", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Complete reference corpus. Includes the full JSON Schema v1 specification, comprehensive CLI subcommands, and multi-entity authorship protocol rules.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("endpoint-actions"), $m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("llms-full.txt"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $m_Lcom_raquo_laminar_api_package$().b.f.g("btn-mini active"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "View llms-full.txt \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "2", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Direct Agent System Prompt / Custom Instructions", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Paste this directive into your agent harness, Cursor Rules, or custom instructions to instantly activate Context Crystal:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "# Context Crystal Operational Directive for AI Entities\nYou have access to Context Crystal (`ccrystal` CLI and native MCP server).\n- State Persistence: Never rely on chat window history. Inspect crystals at turn inception (`ccrystal list` or `crystal_list`).\n- Context Beam Hydration: Hydrate living context before major edits (`ccrystal hydrate <id> --tail 5`).\n- Zero Agent Debris: Always register transient leases for temporary worktrees (`ccrystal transient lease`) and ensure they are cleaned or promoted before goal conclusion.\n- Atomic Transitions: Batch context updates atomically using `ccrystal batch` or `crystal_batch`.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.cP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("button"), $m_Lcom_raquo_laminar_api_package$().b.f.g("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().fj(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().d0.aR, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.cF === "agent-directive")) ? "\u2713 Copied" : "Copy Directive"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.cz(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $m_Lccrystal_site_State$().go("agent-directive", "# Context Crystal Operational Directive for AI Entities\nYou have access to Context Crystal (`ccrystal` CLI and native MCP server).\n- State Persistence: Never rely on chat window history. Inspect crystals at turn inception (`ccrystal list` or `crystal_list`).\n- Context Beam Hydration: Hydrate living context before major edits (`ccrystal hydrate <id> --tail 5`).\n- Zero Agent Debris: Always register transient leases for temporary worktrees (`ccrystal transient lease`) and ensure they are cleaned or promoted before goal conclusion.\n- Atomic Transitions: Batch context updates atomically using `ccrystal batch` or `crystal_batch`.");
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
  var $x_36 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_35 = $m_sr_ScalaRunTime$();
  var $x_34 = $m_Lcom_raquo_laminar_api_package$().b.f.g("dag-state-container");
  var $x_33 = $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("state-card goal-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("state-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("tag-goal"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "GOAL", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("status-tag in-progress"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "InProgress", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.hx().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Build Resilient OAuth2 Service", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("intent-text"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Implement stateless JWT authentication with token revocation list and hardware test fixture.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_32 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_31 = $m_sr_ScalaRunTime$();
  var $x_30 = $m_Lcom_raquo_laminar_api_package$().b.f.g("state-card tasks-card");
  var $x_29 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_28 = $m_sr_ScalaRunTime$();
  var $x_27 = $m_Lcom_raquo_laminar_api_package$().b.f.g("state-card-header");
  var $x_26 = $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "ACCEPTANCE CRITERIA", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_25 = $m_Lcom_raquo_laminar_api_package$().b.D();
  var $x_24 = $m_sr_ScalaRunTime$();
  var $x_23 = $m_Lcom_raquo_laminar_api_package$().b;
  var x$2 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  var $x_22 = $x_29.d($x_28.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_27, $x_26, $x_25.d($x_24.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($x_23, ("Completion: " + ((sc === x$2) ? "0/3" : "1/3")), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_21 = $m_Lcom_raquo_laminar_api_package$().b.hE();
  var $x_20 = $m_sr_ScalaRunTime$();
  var $x_19 = $m_Lcom_raquo_laminar_api_package$().b.f.g("task-list");
  var $x_18 = $m_Lcom_raquo_laminar_api_package$().b.c7();
  var $x_17 = $m_sr_ScalaRunTime$();
  var $x_16 = $m_Lcom_raquo_laminar_api_package$().b.f;
  var x$4 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  var $x_15 = $x_16.g(((!(sc === x$4)) ? "done" : "pending"));
  var $x_14 = $m_Lcom_raquo_laminar_api_package$().b.D();
  var $x_13 = $m_sr_ScalaRunTime$();
  var x$6 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  var $x_12 = $x_32.d($x_31.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_30, $x_22, $x_21.d($x_20.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_19, $x_18.d($x_17.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_15, $x_14.d($x_13.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([((!(sc === x$6)) ? $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u2713 ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e) : $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u25fb ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e))]))), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "task-1: Implement JWT token verification parser", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pending"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u25fb ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "task-2: Hook token revocation cache into Redis", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.c7().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pending"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u25fb ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "task-3: End-to-end integration test with token rotation", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
  var x$8 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((!(sc === x$8))) {
    var $x_11 = $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("state-card lease-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("state-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("tag-lease"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "ACTIVE TRANSIENT LEASE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("policy-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "revert_on_conclusion", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("lease-item"), $m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "lease-1 (git_worktree): ", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "/home/user/git/worktrees/oauth2-spike", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("lease-notice"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u26a0 Invariant: Must be cleaned before crystal goal can be marked Concluded.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  } else {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_11 = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  }
  var x$10 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
  if ((sc === x$10)) {
    var $x_10 = $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("state-card artifact-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("state-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("tag-artifact"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "PHYSICAL ARTIFACT", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("role-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Precondition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("artifact-name"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "art_bench_01: Hardware Security Dongle Rig", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("artifact-coords"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Location: Laboratory Alpha, Bench 4B \u2022 geo:52.5200,13.4050", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  } else {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_10 = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  }
  var $x_9 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_8 = $m_sr_ScalaRunTime$();
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().b.f.g("state-card nodes-card");
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("state-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "CAUSAL DAG NODES", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Capture Fidelity: inferred", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_4 = $m_sr_ScalaRunTime$();
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().b.f.g("dag-node-timeline");
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("dag-node-item"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("node-bullet")]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("node-content"), $m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "node-1 [Init]", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, " Initialized crystal with goal and criteria by usr_operator", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
  var x$12 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((!(sc === x$12))) {
    var $x_1 = $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("dag-node-item"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("node-bullet green")]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("node-content"), $m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "node-2 [Checkpoint]", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, " Task 1 complete; acquired git_worktree lease by agt_antigravity", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])));
  } else {
    $m_Lcom_raquo_laminar_api_package$();
    var $x_1 = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  }
  var x$14 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
  return $x_36.d($x_35.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_34, $x_33, $x_12, $x_11, $x_10, $x_9.d($x_8.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_7, $x_6, $x_5.d($x_4.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_3, $x_2, $x_1, ((sc === x$14) ? $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("dag-node-item"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("node-bullet purple")]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("node-content"), $m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "node-3 [Action]", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, " Linked physical artifact art_bench_01 as test precondition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))) : ($m_Lcom_raquo_laminar_api_package$(), new $c_Lcom_raquo_laminar_nodes_CommentNode("")))])))])))])));
}
function $p_Lccrystal_site_TabExplorer$__generatePromptBeam__Lccrystal_site_TabExplorer$Scenario__I__Z__T($thiz, sc, tail, summaryOnly) {
  var sb = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
  sb.be("=== CONTEXT CRYSTAL CAST: oauth2-auth-service ===\n\n");
  sb.be("## Goal: Build Resilient OAuth2 Service\n");
  sb.be("Intent: Implement stateless JWT authentication with token revocation list and hardware test fixture.\n");
  sb.be("Status: in_progress\n\n");
  sb.be("## Active Tasks:\n");
  var x$2 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((sc === x$2)) {
    sb.be("- [ ] task-1: Implement JWT token verification parser\n");
    sb.be("- [ ] task-2: Hook token revocation cache into Redis\n");
    sb.be("- [ ] task-3: End-to-end integration test with token rotation\n\n");
  } else {
    sb.be("- [x] task-1: Implement JWT token verification parser\n");
    sb.be("- [ ] task-2: Hook token revocation cache into Redis\n");
    sb.be("- [ ] task-3: End-to-end integration test with token rotation\n\n");
  }
  var x$4 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
  if ((!(sc === x$4))) {
    sb.be("## Active Transient Leases (Must be cleaned before conclusion):\n");
    sb.be("- [lease-1] GitWorktree: /home/user/git/worktrees/oauth2-spike (Policy: revert_on_conclusion)\n\n");
  }
  var x$6 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
  if ((sc === x$6)) {
    sb.be("## Precondition Artifacts:\n");
    sb.be("- [art_bench_01] Hardware Security Dongle Rig (Physical, Location: Lab Alpha, Bench 4B)\n\n");
  }
  if ((!summaryOnly)) {
    sb.be((("## State Transitions (Tail: " + tail) + "):\n"));
    var nodes = new $c_scm_ListBuffer().gG($m_sr_ScalaRunTime$().c(new ($d_T.r().C)([])));
    nodes.hq("- [HumanPrompt] (usr_operator): Initialized crystal with goal and criteria");
    var x$8 = $s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario();
    if ((!(sc === x$8))) {
      nodes.hq("- [Checkpoint] [inferred] (agt_antigravity): Task 1 complete; acquired git_worktree lease");
    }
    var x$10 = $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario();
    if ((sc === x$10)) {
      nodes.hq("- [Action] [inferred] (agt_antigravity): Linked physical artifact art_bench_01 as test precondition");
    }
    $f_sc_StrictOptimizedIterableOps__takeRight__I__O(nodes, tail).ar(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((n) => sb.be((n + "\n")))));
    sb.be("\n");
  }
  sb.be("=== END CAST ===");
  return sb.aY.y;
}
/** @constructor */
function $c_Lccrystal_site_TabExplorer$() {
  this.eU = null;
  this.fx = null;
  this.fw = null;
  $n_Lccrystal_site_TabExplorer$ = this;
  this.eU = $m_Lcom_raquo_laminar_api_package$().b.f0.ge($s_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike__Lccrystal_site_TabExplorer$Scenario());
  this.fx = $m_Lcom_raquo_laminar_api_package$().b.f0.ge(3);
  this.fw = $m_Lcom_raquo_laminar_api_package$().b.f0.ge(false);
}
$p = $c_Lccrystal_site_TabExplorer$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabExplorer$;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$() {
}
$h_Lccrystal_site_TabExplorer$.prototype = $p;
$p.c9 = (function() {
  var $x_37 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_36 = $m_sr_ScalaRunTime$();
  var $x_35 = $m_Lcom_raquo_laminar_api_package$().b.f.g("tab-content tab-explorer");
  var $x_34 = $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("explorer-intro"), $m_Lcom_raquo_laminar_api_package$().b.eH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Live Interactive DAG & Context Beam Explorer", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Experience how Context Crystal models living software intent, maintains immutable causal provenance, enforces clean transient resource leases, and shapes context beams for LLM prompts in real time:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])));
  var $x_33 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_32 = $m_sr_ScalaRunTime$();
  var $x_31 = $m_Lcom_raquo_laminar_api_package$().b.f.g("explorer-toolbar");
  var $x_30 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_29 = $m_sr_ScalaRunTime$();
  var $x_28 = $m_Lcom_raquo_laminar_api_package$().b.f.g("toolbar-group");
  var $x_27 = $m_Lcom_raquo_laminar_api_package$().b.jK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Select Scenario:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_26 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_25 = $m_sr_ScalaRunTime$();
  var $x_24 = $m_Lcom_raquo_laminar_api_package$().b.f.g("scenario-buttons");
  var $x_23 = $m_Lcom_raquo_laminar_api_package$().b;
  var $x_22 = $m_sci_Nil$();
  var $x_21 = $m_s_Predef$();
  var xs = $m_Lccrystal_site_TabExplorer$Scenario$().sx();
  var f = ((sc) => $m_Lcom_raquo_laminar_api_package$().b.cP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("button"), $m_Lcom_raquo_laminar_api_package$().b.f.ja(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_TabExplorer$().eU.aR, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sc$2) => ((curr) => (((curr === null) ? (sc$2 === null) : (curr === sc$2)) ? "btn-scenario active" : "btn-scenario")))(sc)), $m_s_None$()), $m_Lcom_raquo_laminar_api_package$().b.hn()), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, sc.fy, $m_Lcom_raquo_laminar_modifiers_RenderableText$().e), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.cz(), false, false)).gy(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((sc$3) => (() => sc$3))(sc))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.dk(_$1);
  }))($m_Lccrystal_site_TabExplorer$().eU.dp)))]))));
  var len = xs.a.length;
  var ys = new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_12 = i;
        var x0 = xs.a[i];
        ys.a[$x_12] = f(x0);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_I)) {
      while ((i < len)) {
        var $x_13 = i;
        var x0$1 = xs.a[i];
        ys.a[$x_13] = f(x0$1);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_D)) {
      while ((i < len)) {
        var $x_14 = i;
        var x0$2 = xs.a[i];
        ys.a[$x_14] = f(x0$2);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_J)) {
      while ((i < len)) {
        var $x_15 = i;
        var t = xs.a[i];
        var lo = t.r;
        var hi = t.s;
        ys.a[$x_15] = f(new $c_RTLong(lo, hi));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_F)) {
      while ((i < len)) {
        var $x_16 = i;
        var x0$3 = xs.a[i];
        ys.a[$x_16] = f(x0$3);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_C)) {
      while ((i < len)) {
        var $x_17 = i;
        var x0$4 = xs.a[i];
        ys.a[$x_17] = f($bC(x0$4));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_B)) {
      while ((i < len)) {
        var $x_18 = i;
        var x0$5 = xs.a[i];
        ys.a[$x_18] = f(x0$5);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_S)) {
      while ((i < len)) {
        var $x_19 = i;
        var x0$6 = xs.a[i];
        ys.a[$x_19] = f(x0$6);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_Z)) {
      while ((i < len)) {
        var $x_20 = i;
        var x0$7 = xs.a[i];
        ys.a[$x_20] = f(x0$7);
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs);
    }
  }
  var $x_11 = $x_30.d($x_29.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_28, $x_27, $x_26.d($x_25.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_24, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_23, $x_22.ea($x_21.k4(ys)), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))])));
  var $x_10 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_9 = $m_sr_ScalaRunTime$();
  var $x_8 = $m_Lcom_raquo_laminar_api_package$().b.f.g("toolbar-group beam-controls");
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().b.jK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Context Beam Shaping:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().b.j();
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().b.f.g("beam-pill-group");
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("control-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "--tail:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().b;
  var this$21 = new $c_sci_$colon$colon(1, new $c_sci_$colon$colon(2, new $c_sci_$colon$colon(3, new $c_sci_$colon$colon(5, $m_sci_Nil$()))));
  var f$1 = ((count) => {
    var count$1 = (count | 0);
    return $m_Lcom_raquo_laminar_api_package$().b.cP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("button"), $m_Lcom_raquo_laminar_api_package$().b.f.ja(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_TabExplorer$().fx.aR, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((curr$1) => (((curr$1 | 0) === count$1) ? "btn-mini active" : "btn-mini"))), $m_s_None$()), $m_Lcom_raquo_laminar_api_package$().b.hn()), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, ("" + count$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.cz(), false, false)).gy(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => count$1))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$1) => ((_$1$1) => {
      sink$1.dk(_$1$1);
    }))($m_Lccrystal_site_TabExplorer$().fx.dp)))])));
  });
  if ((this$21 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0$8 = this$21.fU;
    var h = new $c_sci_$colon$colon(f$1(x0$8), $m_sci_Nil$());
    var t$1 = h;
    var rest = this$21.Z;
    while ((rest !== $m_sci_Nil$())) {
      var x0$9 = rest.t();
      var nx = new $c_sci_$colon$colon(f$1(x0$9), $m_sci_Nil$());
      t$1.Z = nx;
      t$1 = nx;
      rest = rest.v();
    }
    var $x_1 = h;
  }
  return $x_37.d($x_36.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_35, $x_34, $x_33.d($x_32.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_31, $x_11, $x_10.d($x_9.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_8, $x_7, $x_6.d($x_5.c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$()), $m_Lcom_raquo_laminar_api_package$().b.jK().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("checkbox-toggle"), $m_Lcom_raquo_laminar_api_package$().b.ra().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("checkbox"), $m_Lcom_raquo_laminar_api_package$().b.oe().pC(this.fw.aR), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.oM(), false, false)).rv(), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$2) => ((_$1$2) => {
    sink$2.dk(_$1$2);
  }))(this.fw.dp)))]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, " --summary-only", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("explorer-panes-grid"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pane-col pane-dag"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pane-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pane-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u25c8 Living Crystal DAG State (.ccrystals/)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("crystal-id-badge"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal: oauth2-auth-service", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pane-body"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().nZ(new $c_Lcom_raquo_airstream_misc_MapSignal(this.eU.aR, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sc$2$1) => $p_Lccrystal_site_TabExplorer$__renderDagState__Lccrystal_site_TabExplorer$Scenario__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($m_Lccrystal_site_TabExplorer$(), sc$2$1))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().ih, (void 0)))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pane-col pane-beam"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pane-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pane-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u26a1 Hydrated Context Beam (ccrystal hydrate)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.cP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("button"), $m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().fj(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().d0.aR, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.cF === "explorer-beam")) ? "\u2713 Copied" : "Copy Beam"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.cz(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$3) => {
    var sc$1 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_TabExplorer$().eU.aR).P();
    var tail = ($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_TabExplorer$().fx.aR).P() | 0);
    var sumOnly = (!(!$f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lccrystal_site_TabExplorer$().fw.aR).P()));
    $m_Lccrystal_site_State$().go("explorer-beam", $p_Lccrystal_site_TabExplorer$__generatePromptBeam__Lccrystal_site_TabExplorer$Scenario__I__Z__T($m_Lccrystal_site_TabExplorer$(), sc$1, tail, sumOnly));
  })))])))]))), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("beam-output-code"), $m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().fj(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().qc(this.eU.aR, this.fx.aR, this.fw.aR, new $c_Lapp_tulz_tuplez_Composition\uff3fPri7$$anon$5()), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 !== null)) {
      var sc$4 = x$1$2.f7;
      var tail$1 = (x$1$2.f8 | 0);
      var sumOnly$1 = (!(!x$1$2.f9));
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
$p.c9 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("tab-content tab-manifesto"), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("hero-section"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("hero-badge"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("badge-pulse")]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Open Source \u2022 Scala Native Sub-5ms Engine \u2022 Model Context Protocol", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.r2().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("hero-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Context is not a vector database.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e), $m_Lcom_raquo_laminar_api_package$().b.q5().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("text-gradient"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "It is a deterministic DAG.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("hero-lead"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Context Crystal cures session amnesia and eliminates agent debris. A local-first, zero-token lifecycle and context beam engine engineered for biological software architects and computational AI swarms.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("hero-cta-group"), $m_Lcom_raquo_laminar_api_package$().b.cP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("button"), $m_Lcom_raquo_laminar_api_package$().b.f.g("btn-primary"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u26a1 Install in 5 Seconds", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.cz(), false, false)).gy(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $s_Lccrystal_site_Tab$__Quickstart__Lccrystal_site_Tab()))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.dk(_$1);
  }))($m_Lccrystal_site_State$().eT.dp)))]))), $m_Lcom_raquo_laminar_api_package$().b.cP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("button"), $m_Lcom_raquo_laminar_api_package$().b.f.g("btn-secondary"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u2b21 Explore Live Interactive DAG", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.cz(), false, false)).gy(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $s_Lccrystal_site_Tab$__Explorer__Lccrystal_site_Tab()))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$1) => ((_$1$1) => {
    sink$1.dk(_$1$1);
  }))($m_Lccrystal_site_State$().eT.dp)))]))), $m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("btn-tertiary"), $m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "View on GitHub \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("hero-terminal-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-header"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-dots"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("dot red")]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("dot yellow")]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("dot green")])))]))), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-title"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "bash \u2014 single-line curl install", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.cP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("button"), $m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().fj(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().d0.aR, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.cF === "hero-install")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.cz(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$2) => {
    $m_Lccrystal_site_State$().go("hero-install", "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh");
  })))])))]))), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-body"), $m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("section-block"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("section-header text-center"), $m_Lcom_raquo_laminar_api_package$().b.eH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "The Three Systemic Failures of Ephemeral AI Context", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Why flat chat windows, proprietary SQLite silos, and vector embeddings break down in real engineering codebases:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("cards-grid three-col"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("card-icon"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u23f3", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Session Amnesia", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Chat windows reset. Context is trapped in ephemeral IDE windows or proprietary cloud caches. Starting a new agent turn or switching machines loses hard-won architectural decisions and progress.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("card-icon"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\ud83c\udf2a\ufe0f", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Agent Debris Deficit", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Autonomous coding agents create temporary git worktrees, mock configurations, and scratch test harnesses that linger indefinitely as orphaned technical debt when turns end or crash.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("card-icon"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\ud83d\udcb8", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Token Inflation & Drift", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Re-summarizing entire conversations with an LLM burns valuable context budget and introduces hallucinatory drift into ground truth. Semantic vector similarity fails to represent exact causal state sequences.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("section-block"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("section-header text-center"), $m_Lcom_raquo_laminar_api_package$().b.eH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "The Sovereign Context Crystal Architecture", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "A unified, deterministic ontology connecting intent, causal history, transient resources, and world state:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("cards-grid two-col"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "THE CAVE CONTAINER", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "The Workspace Cave (.ccrystals/)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "A sovereign context container residing in your workspace or companion directory (`CCRYSTAL_STORE`). Houses active crystals, the multi-entity authorship registry, and shared artifact catalogs with zero proprietary locks.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "DETERMINISTIC CAUSALITY", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Directed Acyclic Graph (DAG)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Causal state transitions with cryptographic attribution, explicit event timestamps, capture fidelity (`inferred` vs `intercepted`), and semantic anchors enabling surgical sub-DAG cleavage and branching.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "CLEANLINESS GUARANTEE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Transient Resource Leases", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Temporary assets (e.g. isolated git worktrees, mock databases) require explicit leases. Context Crystal guarantees leases are cleaned or promoted before goal conclusion, leaving zero agent debris.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card architecture-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("card-tag"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "WORLD-STATE GROUNDING", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Virtual & Physical Artifacts", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Bridges digital deliberation with real reality. First-class tracking of target deliverables, test instruments, and physical preconditions (lab benches, geo coordinates, civic addresses).", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("section-block comparison-section"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("section-header text-center"), $m_Lcom_raquo_laminar_api_package$().b.eH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Verified Ground-Truth Performance", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Engineered in pure functional Scala 3 Native with zero-reflection codecs and Immix GC:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("table-wrapper"), $m_Lcom_raquo_laminar_api_package$().b.k0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("comparison-table"), $m_Lcom_raquo_laminar_api_package$().b.k2().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Metric / Capability", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Context Crystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Vector DBs / RAG", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Ephemeral Chat Windows", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.k1().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Execution Overhead", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "< 5ms Native CLI", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "200ms - 2,000ms API calls", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Session restart required", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Context Token Cost", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "0 Tokens for State Ops", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Heavy embedding token burn", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Full window re-prompting", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Data Format", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pill cyan"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Strict JSON Schema v1 & JSON-LD", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Opaque binary vector indices", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Proprietary internal silos", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Agent Protocol", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Native Stdio MCP Server (11 Tools)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Custom vendor SDKs", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "None (isolated manual chat)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Debris Elimination", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("pill green"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Mandatory Transient Leases", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Unmanaged orphaned files", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Manual developer cleanup", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))])));
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
$p.c9 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("tab-content tab-mcp"), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("mcp-intro"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("mcp-badge"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Model Context Protocol \u2022 Stdio Transport \u2022 JSON-RPC 2.0", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.eH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Native Model Context Protocol (MCP) Server Engine", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Context Crystal features an integrated, high-performance stdio MCP server running directly from the native binary (`ccrystal mcp`). No Node.js daemon, Python wrapper, or external orchestrator required.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Frictionless IDE & Client Setup", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Add Context Crystal to your preferred AI coding environment:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("cards-grid three-col mcp-clients-grid"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card client-config-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("client-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("client-icon"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\ud83d\udfe3", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Claude Desktop", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("config-path"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "~/.config/Claude/claude_desktop_config.json", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "{\n  \"mcpServers\": {\n    \"context-crystal\": {\n      \"command\": \"ccrystal\",\n      \"args\": [\"mcp\"]\n    }\n  }\n}", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card client-config-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("client-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("client-icon"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\ud83d\udfe6", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Cursor IDE", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("config-path"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, ".cursor/mcp.json", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "{\n  \"mcpServers\": {\n    \"context-crystal\": {\n      \"command\": \"ccrystal\",\n      \"args\": [\"mcp\"]\n    }\n  }\n}", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("feature-card client-config-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("client-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("client-icon"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "\u26a1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Zed Editor", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("config-path"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "~/.config/zed/settings.json", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "{\n  \"context_servers\": {\n    \"context-crystal\": {\n      \"command\": \"ccrystal\",\n      \"args\": [\"mcp\"]\n    }\n  }\n}", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "2", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "The 11 Native MCP Tools", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "First-class protocol capabilities designed specifically for autonomous AI pairs:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("table-wrapper"), $m_Lcom_raquo_laminar_api_package$().b.k0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("mcp-tools-table"), $m_Lcom_raquo_laminar_api_package$().b.k2().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Tool Name", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Parameters", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Description & Behavioral Invariant", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.k1().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_init", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "id, goal_title, intent, tasks?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Atomically instantiates a new crystal with predefined acceptance criteria.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_list", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "status?, json_output?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Queries crystals in the workspace cave with optional InProgress/Concluded filter.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_hydrate", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_id, tail?, from?, to?, depth?, summary_only?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Casts context beam into prompt with precise selective shaping flags.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_triage", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "json_output?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Automated cave hygiene: classifies crystals into CandidateForCleanup, Keep, or RequiresReview.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_artifact", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "action, id?, name?, substrate?, role?, uri?, cave?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Registers, lists, or inspects virtual and physical artifacts across cave or crystal.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_checkpoint", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_id, summary, fidelity?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Appends an immutable checkpoint transition node to the active DAG.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_task_transition", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_id, task_id, status", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Transitions an acceptance criterion to completed, in_progress, or blocked.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_transient_lease", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_id, resource_type, path?, desc, policy", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Registers an ephemeral resource lease (git_worktree, mock) with cleanup policy.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_slice_fork", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "source_id, fork_to, from?, to?, prune?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Cleaves sub-DAG at a semantic anchor and forks into a dedicated child crystal.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_delete", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_id, force?", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Destructive lifecycle removal with cascade orphaned entity preview.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "crystal_batch", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "commands", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Executes multiple semicolon-delimited CLI commands atomically in a single turn.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))])));
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
$p.c9 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("tab-content tab-quickstart"), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("quickstart-intro"), $m_Lcom_raquo_laminar_api_package$().b.eH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Installation & Developer Quickstart", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Install the native zero-dependency binary in seconds or build from source using Scala Native.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Automatic Single-Line Installation (Linux & macOS)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Downloads the verified pre-compiled release binary for your architecture and installs it into `~/.local/bin/ccrystal`:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.cP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("button"), $m_Lcom_raquo_laminar_api_package$().b.f.g("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().fj(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().d0.aR, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => (((x$1 instanceof $c_s_Some) && (x$1.cF === "qs-curl")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.cz(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $m_Lccrystal_site_State$().go("qs-curl", "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh");
  })))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "2", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Direct Binary Downloads (GitHub Releases)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Every release is automatically compiled and linked with Thin LTO and Immix GC across three target architectures:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("table-wrapper"), $m_Lcom_raquo_laminar_api_package$().b.k0().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("binary-table"), $m_Lcom_raquo_laminar_api_package$().b.k2().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Platform / Architecture", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Binary Asset", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Linking & Optimizations", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.cC().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Download", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.k1().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Linux x86_64", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "ccrystal-linux-x86_64", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Thin LTO, Immix GC, Static POSIX", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $m_Lcom_raquo_laminar_api_package$().b.f.g("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "macOS Apple Silicon (aarch64)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "ccrystal-darwin-arm64", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Thin LTO, Immix GC, Native M-series", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $m_Lcom_raquo_laminar_api_package$().b.f.g("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.aQ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bJ().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "macOS Intel (x86_64)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "ccrystal-darwin-x86_64", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Thin LTO, Immix GC, Darwin POSIX", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.A().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bq().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.br().L("https://github.com/oswaldo/context-crystal/releases/latest"), $m_Lcom_raquo_laminar_api_package$().b.bt().L("_blank"), $m_Lcom_raquo_laminar_api_package$().b.f.g("btn-download"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Download \u2197", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "3", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Compile From Source (Scala Native 3.9 LTS)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Requirements: JDK 21+, sbt 1.10+, and Clang/LLVM:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("code-snippet-box"), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "# Clone repository\ngit clone https://github.com/oswaldo/context-crystal.git && cd context-crystal\n\n# Compile & link release native binary with Thin LTO\nsbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'\n\n# Install binary into user PATH\nmkdir -p ~/.local/bin && cp --remove-destination ./cli/native/target/scala-3.9.0/ccrystal-cli ~/.local/bin/ccrystal && chmod +x ~/.local/bin/ccrystal && strip ~/.local/bin/ccrystal", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))]))), $m_Lcom_raquo_laminar_api_package$().b.cP().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.cE().L("button"), $m_Lcom_raquo_laminar_api_package$().b.f.g("snippet-copy-btn"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildTextInserter$().fj(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lccrystal_site_State$().d0.aR, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => (((x$1$2 instanceof $c_s_Some) && (x$1$2.cF === "qs-build")) ? "\u2713 Copied" : "Copy"))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().cm($m_Lcom_raquo_laminar_api_package$().b.cz(), false, false)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $m_Lccrystal_site_State$().go("qs-build", "sbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'");
  })))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.by().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-card-header"), $m_Lcom_raquo_laminar_api_package$().b.D().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("qs-step-number"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "4", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.bH().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "First 5 Minutes: The Core Workflow", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.X().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "Verified terminal sequence to initialize, hydrate, and maintain zero debris:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-steps-flow"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "1. Initialize Crystal with Atomic Tasks:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "ccrystal init my-track -g \"Implement OAuth2 JWT Service\" -t \"Write JWT parser\" -t \"Setup revocation list\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "2. Hydrate Living Context Beam for Agent Prompts:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "ccrystal hydrate my-track --tail 5", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "3. Acquire Transient Resource Lease (Guaranteed Debris Elimination):", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "ccrystal transient lease my-track -t git_worktree -p ./worktrees/oauth -d \"Track spike worktree\" --policy revert_on_conclusion", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "4. Mark Acceptance Criterion Complete:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "ccrystal task done my-track -t task-1", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("terminal-step-item"), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("step-label"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "5. Atomic Multi-Command Batching:", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)]))), $m_Lcom_raquo_laminar_api_package$().b.j().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.f.g("code-snippet-box mini"), $m_Lcom_raquo_laminar_api_package$().b.c8().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().b.O().d($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().b, "ccrystal batch \"task done my-track -t task-2; transient clean my-track -l lease-1; node add my-track -k checkpoint -s 'Completed OAuth2 milestone' --fidelity inferred\"", $m_Lcom_raquo_laminar_modifiers_RenderableText$().e)])))])))])))])))])))])))])));
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
$p.rl = (function(trys, combinator) {
  var elem = false;
  elem = true;
  var i = 0;
  var len = (trys.length | 0);
  while ((i < len)) {
    if (trys[i].jJ()) {
      var ev$6 = false;
      elem = ev$6;
    }
    i = ((1 + i) | 0);
  }
  if (elem) {
    var values = trys.map(((_$3) => _$3.P()));
    return new $c_s_util_Success(combinator.h(values));
  } else {
    var arr = trys.map(((x$1) => ((x$1 instanceof $c_s_util_Failure) ? new $c_s_Some(x$1.dY) : $m_s_None$())));
    return new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError($m_sci_IndexedSeq$().jv($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), arr))));
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
$p.qc = (function(this$, s1, s2, c) {
  return $m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$().qd(this$, s1, s2, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((a, v1, v2) => new $c_T3(a, v1, v2))));
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
$p.qd = (function(s1, s2, s3, combinator) {
  return new $c_Lcom_raquo_airstream_combine_CombineSignalN($m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Signal.r().C)([s1.ft(), s2.ft(), s3.ft()]))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((arr) => combinator.hr(arr[0], arr[1], arr[2]))));
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
$p.qP = (function(parent, onTry) {
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
  aB: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).jD() + "@") + $thiz.C());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.e7();
  return ((x === (void 0)) ? $thiz.e4() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().pc(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().h3, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.pc = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.qQ = (function(onTry, handleObserverErrors) {
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
$p.oV = (function(this$, observer) {
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
  this.pd = null;
  $n_Lcom_raquo_airstream_core_Protected$ = this;
  this.pd = new $c_Lcom_raquo_airstream_core_Protected();
}
$p = $c_Lcom_raquo_airstream_core_Protected$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Protected$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Protected$() {
}
$h_Lcom_raquo_airstream_core_Protected$.prototype = $p;
$p.rw = (function(minRank, observables) {
  var elem = 0;
  elem = minRank;
  var i = 0;
  var len = (observables.length | 0);
  while ((i < len)) {
    var observable = observables[i];
    var rank = observable.eP();
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
  this.eX = 0;
  this.eX = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.oK = (function() {
  if ((this.eX === 2147483647)) {
    this.eX = 1;
  } else {
    this.eX = ((1 + this.eX) | 0);
  }
  return this.eX;
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
  this.hO = null;
  this.fG = null;
  this.hP = 0;
  this.hO = code;
  this.fG = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gF();
  this.hP = ((x === (void 0)) ? 1 : ((1 + x.hP) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().gL === (-1)) || (this.hP > $m_Lcom_raquo_airstream_core_Transaction$().gL))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cB(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().gL));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bn) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().ef.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jc(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
$p.qf = (function(observable) {
  var x = this.fG;
  var x$1 = ((x === (void 0)) ? (void 0) : x.bf(observable));
  return ((x$1 === (void 0)) ? false : x$1);
});
$p.qy = (function(observable) {
  var x = this.fG;
  if ((x === (void 0))) {
    var newQueue = new $c_Lcom_raquo_airstream_util_JsPriorityQueue(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((observable$1) => observable$1.hJ)));
    this.fG = newQueue;
    var $x_1 = newQueue;
  } else {
    var $x_1 = x;
  }
  $x_1.qx(observable);
});
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  db: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.gL = 0;
  this.ko = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.gL = 1000;
  this.ko = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.of = (function(transaction) {
  try {
    transaction.hO.h(transaction);
    var x = transaction.fG;
    if ((x !== (void 0))) {
      while (((x.dq.length | 0) !== 0)) {
        if (((x.dq.length | 0) === 0)) {
          throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to dequeue an empty JsPriorityQueue");
        }
        $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V(x.dq.shift(), transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cB(e$2);
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
  if ((($thiz.gM.length | 0) === 0)) {
    if ((($thiz.ef.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.ef.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jc($thiz.ef.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.gM.length | 0) > 0)) {
        var callback = $thiz.gM.shift();
        try {
          callback.h(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cB(e$2);
        }
      }
      while ((($thiz.ef.length | 0) > 0)) {
        var _trx = $thiz.ef.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jc(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bn = false;
  this.gM = null;
  this.ef = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bn = false;
  this.gM = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_F1.r().C)([])));
  this.ef = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
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
  return $thiz.eg.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gN.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.gN.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.eg.set(parent, newChildren);
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
      (!(!$thiz.eg.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.gN = null;
  this.eg = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.gN = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.eg = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.jc = (function(newTransaction) {
  var x = this.gF();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().of(newTransaction);
    this.qv(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.qv = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.gF();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().x(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.rQ(transaction$tailLocal1);
    transaction$tailLocal1.hO = $m_Lcom_raquo_airstream_core_Transaction$().ko;
    var maybeNextTransaction = this.gF();
    if ($m_sr_BoxesRunTime$().x(maybeNextTransaction, (void 0))) {
      if (((this.eg.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.eg.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.ey + (transactions.length | 0)) | 0);
          numChildren.ey = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.ey) + " children for ") + (this.eg.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().of(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.rQ = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().x(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.gF();
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
$p.gF = (function() {
  return this.gN[0];
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
  this.ks = null;
  this.kq = null;
  this.kr = null;
  this.ks = onWillStart;
  this.kq = onStart;
  this.kr = onStop;
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
$p.pY = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => (void 0))), onStart, onStop);
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
  var index = ($thiz.dm.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.dm.splice(index, 1);
    if ((!$thiz.bU.i())) {
      subscription.oN();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.gS.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.gS.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.kP = null;
  this.dm = null;
  this.eY = false;
  this.gS = null;
  this.bU = null;
  this.eZ = 0;
  this.kP = onAccessAfterKilled;
  this.dm = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.eY = true;
  this.gS = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.bU = $m_s_None$();
  this.eZ = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.nO = (function() {
  if ((!(!this.bU.i()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.kP);
      this.bU = new $c_s_Some(newOwner);
      this.eY = false;
      this.eZ = 0;
      var i = 0;
      var originalNumSubs = (this.dm.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.eZ) | 0);
        this.dm[ix].oL(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.eY = true;
      this.eZ = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.bn || (!when))) {
      f();
    } else {
      this$4.bn = true;
      try {
        f();
      } finally {
        this$4.bn = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.qp = (function() {
  if ((!this.bU.i())) {
    this.eY = false;
    var arr = this.dm;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].oN();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bU;
    if ((!this$4.i())) {
      this$4.P().oJ();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.eY = true;
    this.bU = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.pR = (function(subscription, prepend) {
  if (prepend) {
    this.eZ = ((1 + this.eZ) | 0);
    this.dm.unshift(subscription);
  } else {
    this.dm.push(subscription);
  }
  var this$1 = this.bU;
  if ((!this$1.i())) {
    var x0 = this$1.P();
    subscription.oL(x0);
  }
});
$p.s0 = (function(subscription) {
  if (this.eY) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.gS.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  dm: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.gT = null;
  this.kQ = null;
  this.gU = null;
  this.gT = dynamicOwner;
  this.kQ = activate;
  this.gU = $m_s_None$();
  dynamicOwner.pR(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.hz = (function() {
  this.gT.s0(this);
});
$p.oL = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.gU = this.kQ.h(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bn || (!when))) {
    f();
  } else {
    this$2.bn = true;
    try {
      f();
    } finally {
      this$2.bn = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.oN = (function() {
  var this$1 = this.gU;
  if ((!this$1.i())) {
    this$1.P().hz();
    this.gU = $m_s_None$();
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
$p.gJ = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.h(owner)))), prepend);
});
$p.p7 = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.h(owner);
    return $m_s_None$();
  })), prepend);
});
$p.sf = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gJ(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
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
  $thiz.og($m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fs();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fs().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fs().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fs().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fs().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.hW)) {
    $thiz.kT.W();
    $thiz.hW = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.kU = null;
  this.kT = null;
  this.hW = false;
  this.kU = owner;
  this.kT = cleanup;
  this.hW = false;
  owner.oS(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.hz = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.kU, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  dr: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.kV = null;
  this.kW = null;
  this.dn = null;
  this.eh = false;
  this.kV = activate;
  this.kW = deactivate;
  this.dn = $m_s_None$();
  this.eh = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.rg = (function() {
  var this$1 = this.dn;
  return ((!this$1.i()) && (!this$1.P().gT.bU.i()));
});
$p.sb = (function(nextOwner) {
  if (this.eh) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.dn;
  if ((!this$1.i())) {
    var x0 = this$1.P();
    var x$2 = x0.gT;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.rg() && (!nextOwner.bU.i()))) {
      this.eh = true;
    }
    var this$3 = this.dn;
    if ((!this$3.i())) {
      this$3.P().hz();
      this.dn = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gJ(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.eh)) {
        this.kV.W();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.eh)) {
          this.kW.W();
        }
      })));
    })), false);
    this.dn = new $c_s_Some(newPilotSubscription);
    this.eh = false;
  }
});
$p.q9 = (function() {
  if (this.eh) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.dn;
  if ((!this$1.i())) {
    this$1.P().hz();
  }
  this.dn = $m_s_None$();
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
$p.ge = (function(initial) {
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
  this.i1 = null;
  this.dq = null;
  this.i1 = getRank;
  this.dq = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().qR(new $ac_O([])));
}
$p = $c_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_util_JsPriorityQueue;
/** @constructor */
function $h_Lcom_raquo_airstream_util_JsPriorityQueue() {
}
$h_Lcom_raquo_airstream_util_JsPriorityQueue.prototype = $p;
$p.qx = (function(item) {
  var itemRank = (this.i1.h(item) | 0);
  var insertAtIndex = 0;
  var foundHigherRank = false;
  while (((insertAtIndex < (this.dq.length | 0)) && (!foundHigherRank))) {
    if (((this.i1.h(this.dq[insertAtIndex]) | 0) > itemRank)) {
      foundHigherRank = true;
    } else {
      insertAtIndex = ((1 + insertAtIndex) | 0);
    }
  }
  this.dq.splice(insertAtIndex, 0, item);
});
$p.bf = (function(item) {
  return ((this.dq.indexOf(item) | 0) !== (-1));
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
$p.pX = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().oC(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().pY(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
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
$p.bk = (function(items) {
  return [...$m_sjsr_Compat$().sn(items)];
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
$p.r5 = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.qI = (function(this$, cb) {
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
  this.l7 = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.qn($m_Lcom_raquo_laminar_api_package$().b.sh().si());
  this.l7 = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.pT = (function(parent, child) {
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
$p.rX = (function(parent, child) {
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
$p.rc = (function(parent, newChild, referenceChild) {
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
$p.rb = (function(parent, newChild, referenceChild) {
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
$p.s2 = (function(parent, newChild, oldChild) {
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
$p.rk = (function(node, ancestor) {
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
$p.pI = (function(element, listener) {
  element.addEventListener(listener.f1.em.fJ, listener.ie, listener.ig);
});
$p.rY = (function(element, listener) {
  element.removeEventListener(listener.f1.em.fJ, listener.ie, listener.ig);
});
$p.qm = (function(tag) {
  return document.createElement(tag.ir);
});
$p.qV = (function(element, attr) {
  var x = this.qW(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.i8.jn(x));
});
$p.qW = (function(element, attr) {
  var domValue = element.bu.getAttributeNS(null, attr.fK);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.p4 = (function(element, attr, value) {
  this.sa(element, attr, attr.i8.gq(value));
});
$p.sa = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.rZ(element, attr);
  } else {
    element.bu.setAttribute(attr.fK, domValue);
  }
});
$p.rZ = (function(element, attr) {
  element.bu.removeAttribute(attr.fK);
});
$p.qX = (function(element, prop) {
  return element.bu[prop.d1];
});
$p.p5 = (function(element, prop, value) {
  this.p6(element, prop, prop.i9.gq(value));
});
$p.p6 = (function(element, prop, value) {
  element.bu[prop.d1] = value;
});
$p.qn = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.mT);
});
$p.r0 = (function(element, attr) {
  var x = this.r1(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.ia.jn(x));
});
$p.r1 = (function(element, attr) {
  var $x_2 = element.jX();
  var this$2 = attr.gX;
  var $x_1 = $x_2.getAttributeNS((this$2.i() ? null : this$2.P()), attr.ib);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.sc = (function(element, attr, value) {
  this.sd(element, attr, attr.ia.gq(value));
});
$p.sd = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.s1(element, attr);
  } else {
    var this$1 = attr.gX;
    if (this$1.i()) {
      element.jX().setAttribute(attr.gW, domValue);
    } else {
      var x0 = this$1.P();
      element.jX().setAttributeNS(x0, attr.gW, domValue);
    }
  }
});
$p.s1 = (function(element, attr) {
  var $x_1 = element.jX();
  var this$2 = attr.gX;
  $x_1.removeAttributeNS((this$2.i() ? null : this$2.P()), attr.ib);
});
$p.ql = (function(text) {
  return document.createComment(text);
});
$p.qo = (function(text) {
  return document.createTextNode(text);
});
$p.oF = (function(element) {
  return $m_sc_StringOps$().qe(element.tagName, 45);
});
$p.qU = (function(element) {
  if ((!(!(element instanceof HTMLInputElement)))) {
    if (((element.type === "checkbox") || (element.type === "radio"))) {
      return (!(!element.checked));
    }
  }
  if (this.oF(element)) {
    var x = element.checked;
    new $c_Lcom_raquo_laminar_DomApi$$anon$1(this);
    return ((x === (void 0)) ? (void 0) : (((typeof x) === "boolean") ? (!(!x)) : (void 0)));
  }
});
$p.qr = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.ok(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.ok = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.l7, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.qq = (function(node) {
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
  this.i3 = null;
  this.l8 = null;
  this.i2 = null;
  this.i3 = seq;
  this.l8 = scalaArray;
  this.i2 = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.ar = (function(f) {
  if ((this.i3 !== null)) {
    this.i3.ar(f);
  } else if ((this.i2 !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().qI(this.i2, $m_sjs_js_Any$().oC(f));
  } else {
    $m_sc_ArrayOps$().qJ(this.l8, f);
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
  $thiz.f0 = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.pf = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.mG.bu.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cr.bU.i()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.hf) {
        var ev$5 = false;
        ignoreNextActivation.hf = ev$5;
      } else {
        fn.h(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().p7(element.cr, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.h(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.ei = null;
  this.mz = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.ei = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.mz = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
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
  $thiz.f = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().ei);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.fK, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().qV(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().p4(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.pe = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().ei, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.gW, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().r0(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().sc(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.mA = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().b.pb();
  $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jV()])));
  $m_Lcom_raquo_laminar_api_package$().b.pb();
  $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jV(), $m_Lcom_raquo_laminar_api_package$().b.oM()])));
  $m_Lcom_raquo_laminar_api_package$().b.oe();
  $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().b.jV(), $m_Lcom_raquo_laminar_api_package$().b.cz()])));
  this.mA = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_T.r().C)(["value", "checked"])));
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
$p.nZ = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.el)) {
      ctx.ox();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.sj(maybeLastSeenChild.av, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.av = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.sj = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.el)) {
    ctx.ox();
  }
  var elem = ctx.ej;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().x(maybeLastSeenChild.aJ(), ctx.ds.aJ().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().rd(ctx.ek, newChildNode, ctx.ds, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().oX(ctx.ek, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = (((-1) + elem$1) | 0);
    elem$1 = ev$4;
  }
  ctx.oW(newChildNode);
  ctx.dr.clear();
  ctx.dr.set(newChildNode.aJ(), newChildNode);
  ctx.ej = 1;
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
$p.fj = (function(textSource, renderable) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), false, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, _$1) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(textSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2, maybeTextNode) => ((newValue) => {
    var x = maybeTextNode.av;
    if ((x === (void 0))) {
      var newTextNode = new $c_Lcom_raquo_laminar_nodes_TextNode(renderable.jh(newValue));
      this.sk(newTextNode, ctx$2);
      var ev$2 = newTextNode;
      maybeTextNode.av = ev$2;
      ev$2 = null;
    } else {
      x.gY.textContent = renderable.jh(newValue);
    }
  }))(ctx, new $c_sr_ObjectRef((void 0)))), owner))), (void 0));
});
$p.sk = (function(newTextNode, ctx) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().oX(ctx.ek, ctx.ds, newTextNode, (void 0));
  ctx.ds = newTextNode;
  if (ctx.el) {
    ctx.el = false;
    ctx.oW(newTextNode);
    ctx.dr.clear();
    ctx.ej = 0;
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
  this.ek = null;
  this.ds = null;
  this.el = false;
  this.ej = 0;
  this.dr = null;
  this.ek = parentNode;
  this.ds = sentinelNode;
  this.el = strictMode;
  this.ej = extraNodeCount;
  this.dr = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.ox = (function() {
  if ((this.el || (this.ej !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().qq(this.ek.bu)));
  }
  if ((this.dr === null)) {
    this.dr = new Map();
  }
  if ((!(!(!(this.ds.aJ() instanceof Comment))))) {
    var contentNode = this.ds;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().rc(this.ek.bu, newSentinelNode.ij, contentNode.aJ());
    this.ds = newSentinelNode;
    this.ej = 1;
    this.dr.set(contentNode.aJ(), contentNode);
  }
  this.el = true;
});
$p.oW = (function(after) {
  var elem = this.ej;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.aJ().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.dr.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().rW(this.ek, maybePrevChild);
        var ev$5 = (((-1) + elem$1) | 0);
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
$p.s4 = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fi(parentNode, sentinelNode, hooks);
  return this.ss(parentNode, sentinelNode, strictMode);
});
$p.ss = (function(parentNode, sentinelNode, strictMode) {
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
$p.jT = (function(items, separator) {
  return ((items === "") ? $m_sci_Nil$() : $m_sci_Nil$().ea($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => (_$1 !== ""))))));
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
  this.em = null;
  this.fI = false;
  this.gV = false;
  this.fH = null;
  this.em = eventProp;
  this.fI = shouldUseCapture;
  this.gV = shouldBePassive;
  this.fH = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.gy = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.fH.h(ev);
    return (this$2.i() ? $m_s_None$() : new $c_s_Some((this$2.P(), value.W())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.em, this.fI, this.gV, newProcessor);
});
$p.rv = (function() {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.fH.h(ev);
    if (this$2.i()) {
      return $m_s_None$();
    } else {
      this$2.P();
      var x = $m_Lcom_raquo_laminar_DomApi$().qU(ev.target);
      return new $c_s_Some((!(!((x === (void 0)) ? false : x))));
    }
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.em, this.fI, this.gV, newProcessor);
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
$p.cm = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => new $c_s_Some(_$14))));
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
  this.ph = null;
  this.pi = null;
  this.pj = null;
  this.pk = null;
  this.ph = "http://www.w3.org/2000/svg";
  this.pi = "http://www.w3.org/1999/xlink";
  this.pj = "http://www.w3.org/XML/1998/namespace";
  this.pk = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.rz = (function(namespace) {
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
  this.mG = null;
  this.ic = null;
  this.mG = thisNode;
  this.ic = owner;
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
  V: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.pl = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.pl = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
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
  this.ih = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.ih = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
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
  this.e = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.sm())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
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
$p.fi = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.eR(nextParent);
  if ((hooks !== (void 0))) {
    hooks.oO(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().pT(parent.aJ(), child.aJ());
  if (appended) {
    child.eM(nextParent);
  }
  return appended;
});
$p.rW = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().x(child.aJ().parentNode, parent.aJ())) {
    child.eR($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().rX(parent.aJ(), child.aJ());
    child.eM($m_s_None$());
  }
  return removed;
});
$p.rd = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.eR(nextParent);
  if ((hooks !== (void 0))) {
    hooks.oO(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().rb(parent.aJ(), newChild.aJ(), referenceChild.aJ());
  newChild.eM(nextParent);
  return inserted;
});
$p.oX = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.jj().bf(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.eR($m_s_None$());
      newChild.eR(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.oO(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().s2(parent.aJ(), newChild.aJ(), oldChild.aJ());
      if (replaced) {
        oldChild.eM($m_s_None$());
        newChild.eM(newChildNextParent);
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
$p.sr = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gJ(element.cr, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.h(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  eD: 1
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
  this.pm = null;
  $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = this;
  this.pm = $m_Lcom_raquo_laminar_receivers_ChildTextReceiver$();
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
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cA("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
    result.a[i] = trace[i];
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().cA("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cA("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cA("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cA("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cA("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().iy.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.ca) << 24) >> 24) === 0)) {
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
    $thiz.iv = dict;
    $thiz.ca = (((1 | $thiz.ca) << 24) >> 24);
  }
  return $thiz.iv;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.ca) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.iv);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.ca) << 24) >> 24) === 0)) {
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
    $thiz.iw = dict;
    $thiz.ca = (((2 | $thiz.ca) << 24) >> 24);
  }
  return $thiz.iw;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.ca) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.iw);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.ca) << 24) >> 24) === 0)) {
    $thiz.iu = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.ca = (((4 | $thiz.ca) << 24) >> 24);
  }
  return $thiz.iu;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.ca) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.iu);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cA("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bS("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bS("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bS("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bS("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bS("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bS("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bS("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bS("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bS("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bS("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bS("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bS("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bS("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().bS("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cA("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cA("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cA("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cA("<anonymous function>"), "{anonymous}");
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
  this.iv = null;
  this.iw = null;
  this.iu = null;
  this.ca = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.qD = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  f4: 1
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
$p.cA = (function(this$) {
  return new RegExp(this$);
});
$p.bS = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  f5: 1
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
  this.ix = null;
  this.mU = null;
  $n_jl_System$SystemProperties$ = this;
  this.ix = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.mU = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.jC = (function(key, default$1) {
  if ((this.ix !== null)) {
    var dict = this.ix;
    return ((!(!$m_jl_Utils$Cache$().iy.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.mU.jC(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  fa: 1
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
  this.iy = null;
  $n_jl_Utils$Cache$ = this;
  this.iy = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  fd: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.by)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  by: 1
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
$p.co = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  ff: 1
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
$p.q3 = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
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
$p.os = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var t = a.a[i$1];
    var lo = t.r;
    var hi = t.s;
    var i$2 = i;
    var t$1 = b.a[i$2];
    var lo$1 = t$1.r;
    var hi$1 = t$1.s;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.jp = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.ot = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.op = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.oo = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.ou = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.oq = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!Object.is($x_1, b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.or = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!Object.is($x_1, b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.a7 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).a1.Q().a1.U(newLength);
  original.F(0, ret, 0, copyLength);
  return ret;
});
$p.af = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).a1.Q().a1.U(retLength);
  original.F(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  fg: 1
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
  return new $c_RTLong(this$1.rV(a.r, a.s, b.r, b.s), this$1.R);
}
function $s_RTLong__remainder__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.rU(a.r, a.s, b.r, b.s), this$1.R);
}
function $s_RTLong__divideUnsigned__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.qu(a.r, a.s, b.r, b.s), this$1.R);
}
function $s_RTLong__divide__RTLong__RTLong__RTLong(a, b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.qt(a.r, a.s, b.r, b.s), this$1.R);
}
function $s_RTLong__fromDoubleBits__D__O__RTLong(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  return new $c_RTLong((fpBitsDataView.getInt32(0, true) | 0), (fpBitsDataView.getInt32(4, true) | 0));
}
function $s_RTLong__fromDouble__D__RTLong(value) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.oQ(value), this$1.R);
}
function $s_RTLong__fromUnsignedInt__I__RTLong(value) {
  return new $c_RTLong(value, 0);
}
function $s_RTLong__fromInt__I__RTLong(value) {
  return new $c_RTLong(value, (value >> 31));
}
function $s_RTLong__clz__RTLong__I(a) {
  var hi = a.s;
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(a.r)) | 0));
}
function $s_RTLong__toFloat__RTLong__F(a) {
  var lo = a.r;
  var hi = a.s;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__RTLong__D(a) {
  var lo = a.r;
  return ((4.294967296E9 * a.s) + (lo >>> 0.0));
}
function $s_RTLong__toInt__RTLong__I(a) {
  return a.r;
}
function $s_RTLong__bitsToDouble__RTLong__O__D(a, fpBitsDataView) {
  fpBitsDataView.setInt32(0, a.r, true);
  fpBitsDataView.setInt32(4, a.s, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__RTLong__RTLong__RTLong(a, b) {
  var alo = a.r;
  var blo = b.r;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.s) + Math.imul(a.s, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
}
function $s_RTLong__sub__RTLong__RTLong__RTLong(a, b) {
  var alo = a.r;
  var blo = b.r;
  var lo = ((alo - blo) | 0);
  return new $c_RTLong(lo, ((((a.s - b.s) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0));
}
function $s_RTLong__add__RTLong__RTLong__RTLong(a, b) {
  var alo = a.r;
  var blo = b.r;
  var lo = ((alo + blo) | 0);
  return new $c_RTLong(lo, ((((a.s + b.s) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0));
}
function $s_RTLong__sar__RTLong__I__RTLong(a, n) {
  var hi = a.s;
  return new $c_RTLong((((32 & n) === 0) ? (((a.r >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
}
function $s_RTLong__shr__RTLong__I__RTLong(a, n) {
  var hi = a.s;
  return new $c_RTLong((((32 & n) === 0) ? (((a.r >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
}
function $s_RTLong__shl__RTLong__I__RTLong(a, n) {
  var lo = a.r;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (a.s << n)) : (lo << n)));
}
function $s_RTLong__xor__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.r ^ b.r), (a.s ^ b.s));
}
function $s_RTLong__and__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.r & b.r), (a.s & b.s));
}
function $s_RTLong__or__RTLong__RTLong__RTLong(a, b) {
  return new $c_RTLong((a.r | b.r), (a.s | b.s));
}
function $s_RTLong__geu__RTLong__RTLong__Z(a, b) {
  var ahi = a.s;
  var bhi = b.s;
  return ((ahi === bhi) ? ((a.r >>> 0) >= (b.r >>> 0)) : ((ahi >>> 0) >= (bhi >>> 0)));
}
function $s_RTLong__gtu__RTLong__RTLong__Z(a, b) {
  var ahi = a.s;
  var bhi = b.s;
  return ((ahi === bhi) ? ((a.r >>> 0) > (b.r >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__RTLong__RTLong__Z(a, b) {
  var ahi = a.s;
  var bhi = b.s;
  return ((ahi === bhi) ? ((a.r >>> 0) <= (b.r >>> 0)) : ((ahi >>> 0) <= (bhi >>> 0)));
}
function $s_RTLong__ltu__RTLong__RTLong__Z(a, b) {
  var ahi = a.s;
  var bhi = b.s;
  return ((ahi === bhi) ? ((a.r >>> 0) < (b.r >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__RTLong__RTLong__Z(a, b) {
  var ahi = a.s;
  var bhi = b.s;
  return ((ahi === bhi) ? ((a.r >>> 0) >= (b.r >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__RTLong__RTLong__Z(a, b) {
  var ahi = a.s;
  var bhi = b.s;
  return ((ahi === bhi) ? ((a.r >>> 0) > (b.r >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__RTLong__RTLong__Z(a, b) {
  var ahi = a.s;
  var bhi = b.s;
  return ((ahi === bhi) ? ((a.r >>> 0) <= (b.r >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__RTLong__RTLong__Z(a, b) {
  var ahi = a.s;
  var bhi = b.s;
  return ((ahi === bhi) ? ((a.r >>> 0) < (b.r >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__RTLong__RTLong__Z(a, b) {
  return (!((a.r === b.r) && (a.s === b.s)));
}
function $s_RTLong__equals__RTLong__RTLong__Z(a, b) {
  return ((a.r === b.r) && (a.s === b.s));
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.r = 0;
  this.s = 0;
  this.r = lo;
  this.s = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.w = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.r === that.r) && (this.s === that.s)));
});
$p.C = (function() {
  return (this.r ^ this.s);
});
$p.B = (function() {
  return $m_RTLong$().oR(this.r, this.s);
});
$p.sC = (function() {
  return ((this.r << 24) >> 24);
});
$p.sO = (function() {
  return ((this.r << 16) >> 16);
});
$p.sK = (function() {
  return this.r;
});
$p.sL = (function() {
  return this;
});
$p.sG = (function() {
  var lo = this.r;
  var hi = this.s;
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
});
$p.sF = (function() {
  var lo = this.r;
  return ((4.294967296E9 * this.s) + (lo >>> 0.0));
});
$p.sE = (function(that) {
  return $m_RTLong$().oP(this.r, this.s, that.r, that.s);
});
$p.sD = (function(that) {
  return $m_RTLong$().oP(this.r, this.s, that.r, that.s);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bz)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  bz: 1
}));
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (alo >>> 0.0));
      var bDouble = ((4.294967296E9 * bhi) + (blo >>> 0.0));
      var rDouble = (aDouble / bDouble);
      $thiz.R = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.R = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - Math.clz32(blo)) | 0);
    $thiz.R = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - Math.clz32(bhi)) | 0);
    $thiz.R = 0;
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
      $thiz.R = ((rDouble / 4.294967296E9) | 0.0);
      return (rDouble | 0.0);
    } else {
      $thiz.R = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.R = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.R = (ahi & (((-1) + bhi) | 0));
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
      $thiz.R = hi$9;
      return lo$9;
    } else {
      var rem_mod_bDouble = (remDouble % bDouble);
      $thiz.R = ((rem_mod_bDouble / 4.294967296E9) | 0.0);
      return (rem_mod_bDouble | 0.0);
    }
  } else if (askQuotient) {
    $thiz.R = quotHi;
    return quotLo;
  } else {
    $thiz.R = remHi;
    return remLo;
  }
}
/** @constructor */
function $c_RTLong$() {
  this.R = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.oR = (function(lo, hi) {
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
$p.oQ = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.R = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.R = 2147483647;
    return (-1);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((value / 4.294967296E9) | 0.0);
    this.R = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.oP = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (((alo >>> 0) < (blo >>> 0)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.qt = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.R = 0;
        return (-2147483648);
      } else {
        var lo = ((alo / $checkIntDivisor(blo)) | 0);
        this.R = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.R = (-1);
      return (-1);
    } else {
      this.R = 0;
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
      var hi = this.R;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.R = hi$1;
      return lo$1;
    }
  }
});
$p.qu = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.R = 0;
      return (((alo >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.R = 0;
      return 0;
    }
  } else {
    return $p_RTLong$__unsigned_$div__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
$p.rU = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      var lo = ((alo % $checkIntDivisor(blo)) | 0);
      this.R = (lo >> 31);
      return lo;
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.R = 0;
      return 0;
    } else {
      this.R = ahi;
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
      var hi = this.R;
      var lo$1 = ((-absRLo) | 0);
      var hi$1 = ((((-hi) | 0) + ((absRLo | lo$1) >> 31)) | 0);
      this.R = hi$1;
      return lo$1;
    } else {
      return absRLo;
    }
  }
});
$p.rV = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === 0)) {
    if ((bhi === 0)) {
      this.R = 0;
      return (((alo >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    } else {
      this.R = ahi;
      return alo;
    }
  } else {
    return $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, alo, ahi, blo, bhi);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  fj: 1
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
  this.iz = null;
  this.mY = null;
  $n_s_Array$EmptyArrays$ = this;
  this.iz = new $ac_I(0);
  this.mY = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  fp: 1
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
  this.mZ = null;
  this.h3 = null;
  $n_s_PartialFunction$ = this;
  this.mZ = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().mZ));
  this.h3 = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  fw: 1
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
  this.n4 = null;
  $n_sc_ArrayOps$ = this;
  this.n4 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().n4));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.qJ = (function(this$, f) {
  var len = $m_jl_reflect_Array$().co(this$);
  var i = 0;
  if ((this$ instanceof $ac_O)) {
    while ((i < len)) {
      f.h(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_I)) {
    while ((i < len)) {
      f.h(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_D)) {
    while ((i < len)) {
      f.h(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_J)) {
    while ((i < len)) {
      f.h(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_F)) {
    while ((i < len)) {
      f.h(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_C)) {
    while ((i < len)) {
      f.h($bC(this$.a[i]));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_B)) {
    while ((i < len)) {
      f.h(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_S)) {
    while ((i < len)) {
      f.h(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_Z)) {
    while ((i < len)) {
      f.h(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(this$);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  fE: 1
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
$p.cw = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  fQ: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.p();
  while (it.u()) {
    f.h(it.m());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.p();
  while ((res && it.u())) {
    res = (!(!p.h(it.m())));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.G()) {
    case (-1): {
      return (!$thiz.p().u());
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
  var it = $thiz.p();
  var i = start;
  var y = (($m_jl_reflect_Array$().co(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.u())) {
    $m_sr_ScalaRunTime$().jg(xs, i, it.m());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.G() === 0) ? (("" + start) + end) : $thiz.e0($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aY.y);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aY;
  if ((start.length !== 0)) {
    jsb.y = (("" + jsb.y) + start);
  }
  var it = $thiz.p();
  if (it.u()) {
    var obj = it.m();
    jsb.y = (("" + jsb.y) + obj);
    while (it.u()) {
      jsb.y = (("" + jsb.y) + sep);
      var obj$1 = it.m();
      jsb.y = (("" + jsb.y) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.y = (("" + jsb.y) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.G() >= 0)) {
    var destination = evidence$2.bI($thiz.G());
    $thiz.c6(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.b5();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.p();
    while (it.u()) {
      var elem = it.m();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a1.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.a1.r().w(jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.nb = null;
  this.fQ = null;
  this.nb = head;
  this.fQ = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.r3 = (function() {
  return this.nb.W().p();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  fZ: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.ne = null;
  $n_sc_StringOps$ = this;
  this.ne = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().ne));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.qe = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  g6: 1
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
$p.gw = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  ga: 1
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
    return $m_jl_Integer$().oH($m_jl_System$SystemProperties$().jC("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
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
  this.nh = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.nh = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  gj: 1
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
  this.iU = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.jq = (function() {
  var state = this.iU;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.W();
});
$p.jG = (function(state) {
  if ((this.iU !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.iU = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  gn: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.nm = null;
  $n_sci_MapNode$ = this;
  this.nm = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  gF: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().co(as)) | 0)));
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
$p.oU = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > (((-1) + as.a.length) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I((((-1) + as.a.length) | 0));
  as.F(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + ((as.a.length - ix) | 0)) | 0);
  as.F(srcPos, result, ix, length);
  return result;
});
$p.re = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.F(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.F(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  b1: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.g3 = 0;
  $n_sci_Node$ = this;
  this.g3 = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.eK = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.e2 = (function(mask) {
  return (1 << mask);
});
$p.r6 = (function(bitmap, bitpos) {
  return $m_jl_Integer$().cO((bitmap & (((-1) + bitpos) | 0)));
});
$p.cU = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.r6(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  gI: 1
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
  this.iY = null;
  this.bG = null;
  this.cM = null;
  this.ff = null;
  this.iZ = null;
  this.nq = null;
  $n_sci_VectorStatics$ = this;
  this.iY = new $ac_O(0);
  this.bG = new ($d_O.r().r().C)(0);
  this.cM = new ($d_O.r().r().r().C)(0);
  this.ff = new ($d_O.r().r().r().r().C)(0);
  this.iZ = new ($d_O.r().r().r().r().r().C)(0);
  this.nq = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.fk = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.F(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.M = (function(a, elem) {
  var ac = $m_ju_Arrays$().a7(a, ((1 + a.a.length) | 0));
  ac.a[(((-1) + ac.a.length) | 0)] = elem;
  return ac;
});
$p.cQ = (function(elem, a) {
  var ac = $objectGetClass(a).a1.Q().a1.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.F(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.js = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.h(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.js(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.cq = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.h(v1);
    if ((!Object.is(v1, v2))) {
      return this.rs(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.rs = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.F(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.h(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.ae = (function(n, a, f) {
  if ((n === 1)) {
    return this.cq(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.ae((((-1) + n) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.rt(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.rt = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).a1.Q().a1.U(a.a.length);
  if ((at > 0)) {
    a.F(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.ae((((-1) + n) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  gZ: 1
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
  this.ex = null;
  this.dd = 0;
  this.aX = null;
  this.ex = _key;
  this.dd = _hash;
  this.aX = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.qF = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.dd) && $m_sr_BoxesRunTime$().x(k, _$this.ex))) {
      return _$this;
    } else if (((_$this.aX === null) || (_$this.dd > h))) {
      return null;
    } else {
      _$this = _$this.aX;
    }
  }
});
$p.ar = (function(f) {
  var _$this = this;
  while (true) {
    f.h(_$this.ex);
    if ((_$this.aX !== null)) {
      _$this = _$this.aX;
      continue;
    }
    break;
  }
});
$p.B = (function() {
  return ((((("Node(" + this.ex) + ", ") + this.dd) + ") -> ") + this.aX);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  hj: 1
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
$p.od = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  hp: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.qC(x, y) : ((x instanceof $Char) ? this.qA(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.qC = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.qB(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.r;
      var hi = t.s;
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
$p.qB = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.r;
      return (x2 === ((4.294967296E9 * t.s) + (lo >>> 0.0)));
    } else {
      return (false && yn.w(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.r;
    var hi$1 = t$1.s;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.r;
      var hi$2 = t$2.s;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * hi$1) + (lo$1 >>> 0.0)) === x3$3);
    } else {
      return (false && yn.w(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.qA = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.r;
      var hi = t.s;
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
  hY: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  i2: 1
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
$p.eD = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_J)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  } else if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.jg = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
  } else if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
  } else if ((xs instanceof $ac_J)) {
    xs.a[idx] = $uJ(value);
  } else if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
  } else if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
  } else if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.jb = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bx(), (x.az() + "("), ",", ")");
});
$p.qR = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().hF(xs));
});
$p.c = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  i4: 1
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
$p.l = (function(hash, data) {
  var h = this.dj(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.dj = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.K = (function(hash, length) {
  return this.q2((hash ^ length));
});
$p.q2 = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.fo = (function(lv) {
  var lo = lv.r;
  var hi = lv.s;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.cv = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.oQ(dv);
    var hi = this$1.R;
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
$p.a0 = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.cv((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.fo(new $c_RTLong(t.r, t.s));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.eI = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  i6: 1
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
  i7: 1
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
$p.pW = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  id: 1
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
$p.se = (function(interval, body) {
  return setTimeout((() => {
    body.W();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  ie: 1
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
$p.sn = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hi;
  } else {
    var result = [];
    seq.ar(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  ir: 1
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
$p.eC = (function(t) {
  return (!(false || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  iu: 1
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
$p.l = (function(hash, data) {
  var h = this.dj(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.dj = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.K = (function(hash, length) {
  return this.bT((hash ^ length));
});
$p.bT = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.p8 = (function(x, y, seed) {
  var h = seed;
  h = this.l(h, $f_T__hashCode__I("Tuple2"));
  h = this.l(h, x);
  h = this.l(h, y);
  return this.K(h, 2);
});
$p.cW = (function(x, seed, ignorePrefix) {
  var arr = x.ax();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.az());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.l(h, $f_T__hashCode__I(x.az()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.l(h, $m_sr_Statics$().a0(x.ay(i)));
      i = ((1 + i) | 0);
    }
    return this.K(h, arr);
  }
});
$p.k3 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.p();
  while (iterator.u()) {
    var x = iterator.m();
    var h = $m_sr_Statics$().a0(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.l(h$2, a);
  h$2 = this.l(h$2, b);
  h$2 = this.dj(h$2, c);
  return this.K(h$2, n);
});
$p.rP = (function(xs, seed) {
  var it = xs.p();
  var h = seed;
  if ((!it.u())) {
    return this.K(h, 0);
  }
  var x0 = it.m();
  if ((!it.u())) {
    return this.K(this.l(h, $m_sr_Statics$().a0(x0)), 1);
  }
  var x1 = it.m();
  var initial = $m_sr_Statics$().a0(x0);
  h = this.l(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().a0(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.u()) {
    h = this.l(h, prev);
    var hash = $m_sr_Statics$().a0(it.m());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.l(h, hash);
      i = ((1 + i) | 0);
      while (it.u()) {
        h = this.l(h, $m_sr_Statics$().a0(it.m()));
        i = ((1 + i) | 0);
      }
      return this.K(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.bT(this.l(this.l(h0, rangeDiff), prev));
});
$p.o2 = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().co(a);
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      return this.K(this.l(h, $m_sr_Statics$().a0($m_sr_ScalaRunTime$().eD(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a0($m_sr_ScalaRunTime$().eD(a, 0));
      h = this.l(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a0($m_sr_ScalaRunTime$().eD(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = $m_sr_Statics$().a0($m_sr_ScalaRunTime$().eD(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, $m_sr_Statics$().a0($m_sr_ScalaRunTime$().eD(a, i)));
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.rR = (function(start, step, last, seed) {
  return this.bT(this.l(this.l(this.l(seed, start), step), last));
});
$p.r7 = (function(a, seed) {
  var h = seed;
  var l = a.z();
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      return this.K(this.l(h, $m_sr_Statics$().a0(a.E(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a0(a.E(0));
      h = this.l(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a0(a.E(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = $m_sr_Statics$().a0(a.E(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, $m_sr_Statics$().a0(a.E(i)));
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.rm = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.i())) {
    var head = elems.t();
    var tail = elems.v();
    var hash = $m_sr_Statics$().a0(head);
    h = this.l(h, hash);
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
  return ((rangeState === 2) ? this.rR(initial, rangeDiff, prev, seed) : this.K(h, n));
});
$p.ob = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      return this.K(this.l(h, (a.a[0] ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = (a.a[0] ? 1231 : 1237);
      h = this.l(h, initial);
      var h0 = h;
      var prev = (a.a[1] ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = (a.a[i] ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, (a.a[i] ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.o3 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      return this.K(this.l(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.l(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.o4 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      return this.K(this.l(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.l(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.o5 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      return this.K(this.l(h, $m_sr_Statics$().cv(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cv(a.a[0]);
      h = this.l(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cv(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = $m_sr_Statics$().cv(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, $m_sr_Statics$().cv(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.o6 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      return this.K(this.l(h, $m_sr_Statics$().cv(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cv(a.a[0]);
      h = this.l(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cv(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = $m_sr_Statics$().cv(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, $m_sr_Statics$().cv(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.o7 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      return this.K(this.l(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.l(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.o8 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = a.a[0];
      return this.K(this.l($x_1, $m_sr_Statics$().fo(new $c_RTLong(t.r, t.s))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().fo(new $c_RTLong(t$1.r, t$1.s));
      h = this.l(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().fo(new $c_RTLong(t$2.r, t$2.s));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().fo(new $c_RTLong(t$3.r, t$3.s));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.l($x_2, $m_sr_Statics$().fo(new $c_RTLong(t$4.r, t$4.s)));
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.o9 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      return this.K(this.l(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.l(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.oa = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.K(h, 0);
      break;
    }
    case 1: {
      return this.K(this.l(h, 0), 1);
      break;
    }
    default: {
      h = this.l(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, 0);
            i = ((1 + i) | 0);
          }
          return this.K(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.bT(this.l(this.l(h0, rangeDiff), prev));
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
  cw: 1,
  cv: 1
}));
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.hC(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.gD(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.gD(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.kS = null;
  this.kR = null;
  this.hV = false;
  this.kR = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.hV = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.fs = (function() {
  return this.kS;
});
$p.og = (function(x$0) {
  this.kS = x$0;
});
$p.oS = (function(subscription) {
  if (this.hV) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.kR.W();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.oJ = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.hV = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  dq: 1,
  bg: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.ld = null;
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
$p.fs = (function() {
  return this.ld;
});
$p.og = (function(x$0) {
  this.ld = x$0;
});
$p.oJ = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.oS = (function(subscription) {
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
$p.gq = (function(scalaValue) {
  return scalaValue;
});
$p.jn = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  dR: 1,
  bj: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.mE = null;
  this.mF = null;
  this.i6 = null;
  this.i5 = null;
  this.mE = getRawDomValue;
  this.mF = setRawDomValue;
  this.i6 = separator;
  this.i5 = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.g = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().b.hn(), $m_Lcom_raquo_laminar_keys_CompositeKey$().jT(items, this.i6)));
});
$p.ja = (function(items, valueMapper) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, items.eO(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextRawItems, thisBinder) => {
    var currentNormalizedItems = $f_Lcom_raquo_laminar_nodes_ReactiveElement__compositeValueItems__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List(element, this, thisBinder);
    var nextNormalizedItems = $m_Lcom_raquo_laminar_keys_CompositeKey$().jT(nextRawItems, this.i6);
    var f = ((elem) => currentNormalizedItems.bf(elem));
    var l = nextNormalizedItems;
    block: {
      var result;
      while (true) {
        if (l.i()) {
          var result = $m_sci_Nil$();
          break;
        } else {
          var h = l.t();
          var t = l.v();
          if (((!(!f(h))) === true)) {
            l = t;
            continue;
          }
          var start = l;
          var remaining = t;
          while (true) {
            if (remaining.i()) {
              var result = start;
              break block;
            } else {
              var x = remaining.t();
              if (((!(!f(x))) !== true)) {
                remaining = remaining.v();
                continue;
              }
              var firstMiss = remaining;
              var newHead = new $c_sci_$colon$colon(start.t(), $m_sci_Nil$());
              var toProcess = start.v();
              var currentLast = newHead;
              while ((toProcess !== firstMiss)) {
                var newElem = new $c_sci_$colon$colon(toProcess.t(), $m_sci_Nil$());
                currentLast.Z = newElem;
                currentLast = newElem;
                toProcess = toProcess.v();
              }
              var next = firstMiss.v();
              var nextToCopy = next;
              while ((!next.i())) {
                var head = next.t();
                if (((!(!f(head))) !== true)) {
                  next = next.v();
                } else {
                  while ((nextToCopy !== next)) {
                    var newElem$2 = new $c_sci_$colon$colon(nextToCopy.t(), $m_sci_Nil$());
                    currentLast.Z = newElem$2;
                    currentLast = newElem$2;
                    nextToCopy = nextToCopy.v();
                  }
                  nextToCopy = next.v();
                  next = next.v();
                }
              }
              if ((!nextToCopy.i())) {
                currentLast.Z = nextToCopy;
              }
              var result = newHead;
              break block;
            }
          }
        }
      }
    }
    var f$1 = ((elem$2) => nextNormalizedItems.bf(elem$2));
    var l$1 = currentNormalizedItems;
    block$2: {
      var $x_1;
      while (true) {
        if (l$1.i()) {
          var $x_1 = $m_sci_Nil$();
          break;
        } else {
          var h$1 = l$1.t();
          var t$1 = l$1.v();
          if (((!(!f$1(h$1))) === true)) {
            l$1 = t$1;
            continue;
          }
          var start$1 = l$1;
          var remaining$1 = t$1;
          while (true) {
            if (remaining$1.i()) {
              var $x_1 = start$1;
              break block$2;
            } else {
              var x$1 = remaining$1.t();
              if (((!(!f$1(x$1))) !== true)) {
                remaining$1 = remaining$1.v();
                continue;
              }
              var firstMiss$1 = remaining$1;
              var newHead$1 = new $c_sci_$colon$colon(start$1.t(), $m_sci_Nil$());
              var toProcess$1 = start$1.v();
              var currentLast$1 = newHead$1;
              while ((toProcess$1 !== firstMiss$1)) {
                var newElem$1 = new $c_sci_$colon$colon(toProcess$1.t(), $m_sci_Nil$());
                currentLast$1.Z = newElem$1;
                currentLast$1 = newElem$1;
                toProcess$1 = toProcess$1.v();
              }
              var next$1 = firstMiss$1.v();
              var nextToCopy$1 = next$1;
              while ((!next$1.i())) {
                var head$1 = next$1.t();
                if (((!(!f$1(head$1))) !== true)) {
                  next$1 = next$1.v();
                } else {
                  while ((nextToCopy$1 !== next$1)) {
                    var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.t(), $m_sci_Nil$());
                    currentLast$1.Z = newElem$2$1;
                    currentLast$1 = newElem$2$1;
                    nextToCopy$1 = nextToCopy$1.v();
                  }
                  nextToCopy$1 = next$1.v();
                  next$1 = next$1.v();
                }
              }
              if ((!nextToCopy$1.i())) {
                currentLast$1.Z = nextToCopy$1;
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
  this.i7 = null;
  this.i7 = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.ol = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().jT(domValue, this.i7);
});
$p.on = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.i7, "");
});
$p.jn = (function(domValue) {
  return this.ol(domValue);
});
$p.gq = (function(scalaValue) {
  return this.on(scalaValue);
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
  this.fJ = null;
  this.fJ = name;
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
  this.fK = null;
  this.i8 = null;
  this.fK = name;
  this.i8 = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.L = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().p4(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  eh: 1,
  ax: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.d1 = null;
  this.i9 = null;
  this.d1 = name;
  this.i9 = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.L = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().p5(element, prop, value$2);
  })));
});
$p.pC = (function(values) {
  var update = ((this.d1 === "value") ? new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextValue, reason) => {
    var nextDomValue = this.i9.gq(nextValue);
    var x = $m_Lcom_raquo_laminar_DomApi$().qX(element, this);
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().x(nextDomValue, x)))) {
      $m_Lcom_raquo_laminar_DomApi$().p6(element, this, nextDomValue);
    }
  })) : new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element$2, nextValue$2, reason$2) => {
    $m_Lcom_raquo_laminar_DomApi$().p5(element$2, this, nextValue$2);
  })));
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eO(), update);
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
  this.ib = null;
  this.ia = null;
  this.gW = null;
  this.gX = null;
  this.ib = localName;
  this.ia = codec;
  var this$1 = (namespacePrefix.i() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.P() + ":") + localName)));
  this.gW = (this$1.i() ? localName : this$1.P());
  this.gX = (namespacePrefix.i() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().rz(namespacePrefix.P())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
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
$p.cN = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  eq: 1,
  V: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.mO = null;
  this.mO = f$2;
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
$p.cN = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.mO.h(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bn || (!when))) {
    f();
  } else {
    this$2.bn = true;
    try {
      f();
    } finally {
      this$2.bn = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  er: 1,
  V: 1
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
  this.mP = null;
  this.mP = render$2;
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
$p.jh = (function(value) {
  return this.mP.h(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  ez: 1,
  ex: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.oh(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().qr($thiz.aJ(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.ir = null;
  this.ir = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.d = (function(modifiers) {
  var element = this.q6();
  modifiers.ar(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.cN(element);
  })));
  return element;
});
$p.q6 = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().qm(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  eL: 1,
  bq: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.mT = null;
  this.mT = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  eM: 1,
  bq: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.gZ) << 24) >> 24) === 0)) {
    $thiz.is = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.gZ = (((32 | $thiz.gZ) << 24) >> 24);
  }
  return $thiz.is;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.gZ) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.is);
}
/** @constructor */
function $c_jl_Character$() {
  this.is = null;
  this.gZ = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.so = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.qs = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().q3($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).a[zeroCodePointIndex]) | 0);
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
$p.gx = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.oH = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    this.gx(s);
  }
  var len = s.length;
  if ((len === 0)) {
    this.gx(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    this.gx(s);
  }
  var result = 0;
  while ((i !== len)) {
    var digit = character.qs(s.charCodeAt(i), radix);
    if (((digit === (-1)) || ((result >>> 0) > (overflowBarrier >>> 0)))) {
      this.gx(s);
    }
    result = ((Math.imul(result, radix) + digit) | 0);
    i = ((1 + i) | 0);
  }
  if (((result >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    this.gx(s);
  }
  return (((result ^ sign) - sign) | 0);
});
$p.cO = (function(i) {
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
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.f4 = null;
  this.fM = null;
  this.f5 = null;
  this.f6 = 0;
  this.f3 = 0;
  this.f4 = declaringClass;
  this.fM = methodName;
  this.f5 = fileName;
  this.f6 = lineNumber;
  this.f3 = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.w = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.f5 === that.f5) && (this.f6 === that.f6)) && (this.f3 === that.f3)) && (this.f4 === that.f4)) && (this.fM === that.fM)));
});
$p.B = (function() {
  var result = "";
  if ((this.f4 !== "<jscode>")) {
    result = ((("" + result) + this.f4) + ".");
  }
  result = (("" + result) + this.fM);
  if ((this.f5 === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.f5);
    if ((this.f6 >= 0)) {
      result = ((result + ":") + this.f6);
      if ((this.f3 >= 0)) {
        result = ((result + ":") + this.f3);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.C = (function() {
  return (((($f_T__hashCode__I(this.f4) ^ $f_T__hashCode__I(this.fM)) ^ $f_T__hashCode__I(this.f5)) ^ this.f6) ^ this.f3);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bx)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  bx: 1,
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
$p.rB = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > value.a.length))) {
    throw new $c_jl_StringIndexOutOfBoundsException();
  }
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  f7: 1,
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
  $thiz.mW = s;
  $thiz.mX = writableStackTrace;
  if (writableStackTrace) {
    $thiz.qE();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.mW = null;
    this.mX = false;
    this.mV = null;
    this.h0 = null;
  }
  jH(cause) {
    return this;
  }
  gv() {
    return this.mW;
  }
  qE() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ad : this);
    this.mV = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  qZ() {
    if ((this.h0 === null)) {
      if (this.mX) {
        this.h0 = $m_jl_StackTrace$().qD(this.mV);
      } else {
        this.h0 = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.h0;
  }
  B() {
    var className = $objectClassName(this);
    var message = this.gv();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  C() {
    return $c_O.prototype.C.call(this);
  }
  w(that) {
    return $c_O.prototype.w.call(this, that);
  }
  get "message"() {
    var m = this.gv();
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.h1 = null;
  $n_s_$less$colon$less$ = this;
  this.h1 = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  fm: 1,
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
    $m_sr_ScalaRunTime$().jg(dest, j, $m_sr_ScalaRunTime$().eD(src, i));
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
$p.oy = (function(it, evidence$3) {
  var n = it.G();
  if ((n > (-1))) {
    var elements = evidence$3.bI(n);
    var iterator = it.p();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().jg(elements, i, iterator.m());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.b5();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.p();
    while (iterator$2.u()) {
      var elem = iterator$2.m();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a1.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.a1.r().w(jsElems);
  }
});
$p.gn = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.a1.Z && $objectGetClass(dest).a1.R(srcClass.a1))) {
    src.F(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.ov = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().x(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  fo: 1,
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
$p.k4 = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().nu : new $c_scm_ArraySeq$ofRef(xs)));
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.cp(x) ? $thiz.h(x) : default$1.h(x));
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
$p.h = (function(x) {
  return this;
});
var $d_sci_List$$anon$1 = new $TypeData().i($c_sci_List$$anon$1, "scala.collection.immutable.List$$anon$1", ({
  gs: 1,
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
    $thiz.bd($m_scm_Buffer$().hw(elems));
  } else {
    var it = elems.p();
    while (it.u()) {
      $thiz.b3(it.m());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.pr = null;
  this.pA = null;
  this.ps = null;
  this.pv = null;
  this.pw = null;
  this.pu = null;
  this.pt = null;
  this.pq = null;
  this.pB = null;
  this.po = null;
  this.pz = null;
  this.pp = null;
  this.px = null;
  this.py = null;
  $n_s_reflect_ClassTag$ = this;
  this.pr = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.pA = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.ps = $m_s_reflect_ManifestFactory$CharManifest$();
  this.pv = $m_s_reflect_ManifestFactory$IntManifest$();
  this.pw = $m_s_reflect_ManifestFactory$LongManifest$();
  this.pu = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.pt = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.pq = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.pB = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.po = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.pz = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.pp = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.px = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.py = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.o0 = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  hu: 1,
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
  this.hf = false;
  this.hf = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.B = (function() {
  return ("" + this.hf);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  hX: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.ey = 0;
  this.ey = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.B = (function() {
  return ("" + this.ey);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  hZ: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.hg = false;
  this.hh = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.r9 = (function(value) {
  this.hh = value;
  this.hg = true;
  return value;
});
$p.B = (function() {
  return ("LazyRef " + (this.hg ? ("of: " + this.hh) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  i0: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.av = null;
  this.av = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.B = (function() {
  return ("" + this.av);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  i3: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.aw = 0;
  this.dZ = 0;
  this.nL = 0;
  this.j9 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.aw = $f_T__hashCode__I("Seq");
  this.dZ = $f_T__hashCode__I("Map");
  this.nL = $f_T__hashCode__I("Set");
  this.j9 = this.k3($m_sci_Nil$(), this.dZ);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cD = (function(x, y) {
  return this.p8($m_sr_Statics$().a0(x), $m_sr_Statics$().a0(y), (-889275714));
});
$p.p3 = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.r7(xs, this.aw) : ((xs instanceof $c_sci_List) ? this.rm(xs, this.aw) : this.rP(xs, this.aw)));
});
$p.ru = (function(xs) {
  if (xs.i()) {
    return this.j9;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.dZ;
    xs.eF(accum);
    h = this.l(h, accum.hj);
    h = this.l(h, accum.hk);
    h = this.dj(h, accum.hl);
    return this.K(h, accum.hm);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  iw: 1,
  iv: 1
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
  this.hj = 0;
  this.hk = 0;
  this.hm = 0;
  this.hl = 0;
  this.hj = 0;
  this.hk = 0;
  this.hm = 0;
  this.hl = 1;
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
$p.pV = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cD(k, v);
  this.hj = ((this.hj + h) | 0);
  this.hk = (this.hk ^ h);
  this.hl = Math.imul(this.hl, (1 | h));
  this.hm = ((1 + this.hm) | 0);
});
$p.eB = (function(v1, v2) {
  this.pV(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  ix: 1,
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
  this.k5 = null;
  $n_Lccrystal_site_Tab$ = this;
  $t_Lccrystal_site_Tab$__Manifesto = new $c_Lccrystal_site_Tab$$anon$1();
  $t_Lccrystal_site_Tab$__Explorer = new $c_Lccrystal_site_Tab$$anon$2();
  $t_Lccrystal_site_Tab$__Quickstart = new $c_Lccrystal_site_Tab$$anon$3();
  $t_Lccrystal_site_Tab$__Mcp = new $c_Lccrystal_site_Tab$$anon$4();
  $t_Lccrystal_site_Tab$__AgentIngestion = new $c_Lccrystal_site_Tab$$anon$5();
  this.k5 = new ($d_Lccrystal_site_Tab.r().C)([$s_Lccrystal_site_Tab$__Manifesto__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__Explorer__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__Quickstart__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__Mcp__Lccrystal_site_Tab(), $s_Lccrystal_site_Tab$__AgentIngestion__Lccrystal_site_Tab()]);
}
$p = $c_Lccrystal_site_Tab$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_Tab$;
/** @constructor */
function $h_Lccrystal_site_Tab$() {
}
$h_Lccrystal_site_Tab$.prototype = $p;
$p.sw = (function() {
  return this.k5.n();
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
  this.k6 = null;
  $n_Lccrystal_site_TabExplorer$Scenario$ = this;
  $t_Lccrystal_site_TabExplorer$Scenario$__Inception = new $c_Lccrystal_site_TabExplorer$Scenario$$anon$1();
  $t_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike = new $c_Lccrystal_site_TabExplorer$Scenario$$anon$2();
  $t_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact = new $c_Lccrystal_site_TabExplorer$Scenario$$anon$3();
  this.k6 = new ($d_Lccrystal_site_TabExplorer$Scenario.r().C)([$s_Lccrystal_site_TabExplorer$Scenario$__Inception__Lccrystal_site_TabExplorer$Scenario(), $s_Lccrystal_site_TabExplorer$Scenario$__ActiveSpike__Lccrystal_site_TabExplorer$Scenario(), $s_Lccrystal_site_TabExplorer$Scenario$__PhysicalArtifact__Lccrystal_site_TabExplorer$Scenario()]);
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$() {
}
$h_Lccrystal_site_TabExplorer$Scenario$.prototype = $p;
$p.sx = (function() {
  return this.k6.n();
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
  this.hL = null;
  this.kh = null;
  this.ki = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.hL = $m_scm_Buffer$().o1($m_sr_ScalaRunTime$().c(new ($d_F1.r().C)([])));
  this.kh = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.eG(err) + "\n") + this.qY(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.ki = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ad : $x_1);
  }));
  this.rS(this.kh);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.eG = (function(e) {
  try {
    var errorMessage = e.gv();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).jD() + ": ") + errorMessage);
});
$p.qY = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().k4(err.qZ()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.qb = (function(causes) {
  return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(causes.eE($m_s_$less$colon$less$().h1).a3(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => this.eG(e)))), "", "; ", ""));
});
$p.rS = (function(fn) {
  this.hL.b3(fn);
});
$p.cB = (function(err) {
  var this$1 = this.hL;
  var it = this$1.p();
  while (it.u()) {
    var x0 = it.m();
    try {
      x0.h(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.ki;
      if (((x0 === null) ? (x$2 === null) : x0.w(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().se(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
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
  $thiz.cx(true);
  $thiz.fq((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().pc(onNext, $m_s_PartialFunction$().h3, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fn()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fn()) {
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
  var x = $thiz.e8();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_F0.r().C)([])));
    $thiz.fq(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aL: 1,
  aD: 1,
  a1: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.jh(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).ar(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().fi(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.l9 = null;
  this.la = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.rO = (function() {
  if ((!this.la)) {
    this.l9 = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.la = true;
  }
  return this.l9;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  dJ: 1,
  bk: 1,
  dW: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.mH = null;
  this.id = null;
  this.mH = key;
  this.id = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.cN = (function(element) {
  if ((!this.id.i())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.mH, null, this.id, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  el: 1,
  V: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.f1 = null;
  this.ie = null;
  this.ig = null;
  this.f1 = eventProcessor;
  this.ie = ((ev) => {
    var processor = eventProcessor.fH;
    var this$2 = processor.h(ev);
    if ((!this$2.i())) {
      callback.h(this$2.P());
    }
  });
  this.ig = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.f1.fI;
    this$3.passive = outer.f1.gV;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.cN = (function(element) {
  this.q4(element, false);
});
$p.q4 = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().pI(element.bu, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.ic, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().rY(element.bu, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().sr(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gJ(element.cr, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.h(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().p7(element.cr, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.h(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.B = (function() {
  return (("EventListener(" + this.f1.em.fJ) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  em: 1,
  V: 1,
  bn: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.mJ = null;
  this.mK = null;
  this.mI = null;
  this.mJ = key;
  this.mK = value;
  this.mI = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.cN = (function(element) {
  this.mI.hr(element, this.mJ, this.mK);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  en: 1,
  V: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.mL = null;
  this.mN = null;
  this.mM = null;
  this.mL = key;
  this.mN = values;
  this.mM = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.cN = (function(element) {
  this.ji(element);
});
$p.ji = (function(element) {
  element.rN(this.mL);
  var observable = this.mN;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.mM.hr(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().sf(element.cr, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  eo: 1,
  V: 1,
  bn: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.ip = null;
  this.mR = null;
  this.mS = null;
  this.mR = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().rk(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.mS = container;
  this.ry();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.hv = (function() {
  return this.ip;
});
$p.oh = (function(x$0) {
  this.ip = x$0;
});
$p.ry = (function() {
  this.ip.nO();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().fi(this, this.mR, (void 0));
});
$p.aJ = (function() {
  return this.mS;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  eG: 1,
  aE: 1,
  bp: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eK)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.a1.Z) {
    return ($thiz.a1.Q().jD() + "[]");
  } else {
    var name = $thiz.a1.N;
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
  this.it = null;
  this.a1 = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.B = (function() {
  return ((this.a1.Y ? "interface " : (this.a1.X ? "" : "class ")) + this.a1.N);
});
$p.jD = (function() {
  if ((this.it === null)) {
    this.it = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.it;
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
  this.pn = null;
  $n_s_Predef$ = this;
  this.pn = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.s3 = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  fy: 1,
  fs: 1,
  ft: 1
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
      return $thiz.bj();
      break;
    }
    case 1: {
      return $thiz.bc();
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
      return $thiz.f7;
      break;
    }
    case 1: {
      return $thiz.f8;
      break;
    }
    case 2: {
      return $thiz.f9;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.fO = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.fO = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.as = (function(it) {
  return this.fO.jt(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.at = (function() {
  return this.fO.hB($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.dg = (function(elems) {
  return this.fO.jt(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.h4 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.h4 = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.as = (function(it) {
  return this.h4.as(it);
});
$p.at = (function() {
  return this.h4.at();
});
function $f_sc_IterableOps__headOption__s_Option($thiz) {
  var it = $thiz.p();
  return (it.u() ? new $c_s_Some(it.m()) : $m_s_None$());
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
      var it = $thiz.p();
      while (it.u()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.m();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_IterableOps__map__F1__O($thiz, f) {
  return $thiz.bl().as($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f));
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).jl(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().S : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.p();
  while (($thiz.u() && those.u())) {
    if ((!$m_sr_BoxesRunTime$().x($thiz.m(), those.m()))) {
      return false;
    }
  }
  return ($thiz.u() === those.u());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.S = null;
  $n_sc_Iterator$ = this;
  this.S = new $c_sc_Iterator$$anon$19();
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
  return source.p();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  fT: 1,
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
  $thiz.h7 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.h7 = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.as = (function(it) {
  return this.h7.as(it);
});
$p.at = (function() {
  return this.h7.at();
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
$p.oz = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.p()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().jw(it))));
});
$p.at = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().oz(it$2$2))));
});
$p.as = (function(source) {
  return this.oz(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  g7: 1,
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
  this.a4 = 0;
  this.ag = 0;
  this.aA = null;
  this.bM = null;
  this.b7 = 0;
  this.bz = 0;
  this.a4 = dataMap;
  this.ag = nodeMap;
  this.aA = content;
  this.bM = originalHashes;
  this.b7 = size;
  this.bz = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.b6 = (function() {
  return this.b7;
});
$p.e3 = (function() {
  return this.bz;
});
$p.e5 = (function(index) {
  return this.aA.a[(index << 1)];
});
$p.di = (function(index) {
  return this.aA.a[((1 + (index << 1)) | 0)];
});
$p.jB = (function(index) {
  return new $c_T2(this.aA.a[(index << 1)], this.aA.a[((1 + (index << 1)) | 0)]);
});
$p.gu = (function(index) {
  return this.bM.a[index];
});
$p.cS = (function(index) {
  return this.aA.a[(((((-1) + this.aA.a.length) | 0) - index) | 0)];
});
$p.je = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().eK(keyHash, shift);
  var bitpos = $m_sci_Node$().e2(mask);
  if (((this.a4 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cU(this.a4, mask, bitpos);
    if ($m_sr_BoxesRunTime$().x(key, this.e5(index))) {
      return this.di(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.ag & bitpos) !== 0)) {
    return this.cS($m_sci_Node$().cU(this.ag, mask, bitpos)).je(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.jA = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().eK(keyHash, shift);
  var bitpos = $m_sci_Node$().e2(mask);
  if (((this.a4 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cU(this.a4, mask, bitpos);
    return ($m_sr_BoxesRunTime$().x(key, this.e5(index)) ? this.di(index) : f.W());
  } else {
    return (((this.ag & bitpos) !== 0) ? this.cS($m_sci_Node$().cU(this.ag, mask, bitpos)).jA(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.W());
  }
});
$p.jm = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().eK(keyHash, shift);
  var bitpos = $m_sci_Node$().e2(mask);
  if (((this.a4 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cU(this.a4, mask, bitpos);
    return ((this.bM.a[index] === originalHash) && $m_sr_BoxesRunTime$().x(key, this.e5(index)));
  } else {
    return (((this.ag & bitpos) !== 0) && this.cS($m_sci_Node$().cU(this.ag, mask, bitpos)).jm(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.p9 = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().eK(keyHash, shift);
  var bitpos = $m_sci_Node$().e2(mask);
  if (((this.a4 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cU(this.a4, mask, bitpos);
    var key0 = this.e5(index);
    var key0UnimprovedHash = this.gu(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().x(key0, key))) {
      if (replaceValue) {
        var value0 = this.di(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.qk(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.di(index);
      var key0Hash = $m_sc_Hashing$().cw(key0UnimprovedHash);
      return this.qi(bitpos, key0Hash, this.jP(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.ag & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cU(this.ag, mask, bitpos);
    var subNode = this.cS(index$2);
    var subNodeNew$2 = subNode.pa(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.qj(bitpos, subNode, subNodeNew$2));
  } else {
    return this.qh(bitpos, key, originalHash, keyHash, value);
  }
});
$p.jP = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().jx(new $c_sjsr_WrappedVarArgs([new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().eK(keyHash0, shift);
    var mask1 = $m_sci_Node$().eK(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().e2(mask0) | $m_sci_Node$().e2(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().e2(mask0);
      var node = this.jP(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().iz, node.b6(), node.e3());
    }
  }
});
$p.jE = (function() {
  return (this.ag !== 0);
});
$p.jR = (function() {
  return $m_jl_Integer$().cO(this.ag);
});
$p.hy = (function() {
  return (this.a4 !== 0);
});
$p.jW = (function() {
  return $m_jl_Integer$().cO(this.a4);
});
$p.gp = (function(bitpos) {
  return $m_jl_Integer$().cO((this.a4 & (((-1) + bitpos) | 0)));
});
$p.jS = (function(bitpos) {
  return $m_jl_Integer$().cO((this.ag & (((-1) + bitpos) | 0)));
});
$p.qk = (function(bitpos, newKey, newValue) {
  var dataIx = this.gp(bitpos);
  var idx = (dataIx << 1);
  var src = this.aA;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.F(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.a4, this.ag, dst, this.bM, this.b7, this.bz);
});
$p.qj = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.aA.a.length) | 0) - this.jS(bitpos)) | 0);
  var src = this.aA;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.F(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.a4, this.ag, dst, this.bM, ((((this.b7 - oldNode.b6()) | 0) + newNode.b6()) | 0), ((((this.bz - oldNode.e3()) | 0) + newNode.e3()) | 0));
});
$p.qh = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.gp(bitpos);
  var idx = (dataIx << 1);
  var src = this.aA;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.F(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.F(idx, dst, destPos, length);
  var dstHashes = this.re(this.bM, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.a4 | bitpos), this.ag, dst, dstHashes, ((1 + this.b7) | 0), ((this.bz + keyHash) | 0));
});
$p.rx = (function(bitpos, keyHash, node) {
  var dataIx = this.gp(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aA.a.length) | 0) - this.jS(bitpos)) | 0);
  var src = this.aA;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.F(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.F(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.F(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.oU(this.bM, dataIx);
  this.a4 = (this.a4 ^ bitpos);
  this.ag = (this.ag | bitpos);
  this.aA = dst;
  this.bM = dstHashes;
  this.b7 = (((((-1) + this.b7) | 0) + node.b6()) | 0);
  this.bz = ((((this.bz - keyHash) | 0) + node.e3()) | 0);
  return this;
});
$p.qi = (function(bitpos, keyHash, node) {
  var dataIx = this.gp(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aA.a.length) | 0) - this.jS(bitpos)) | 0);
  var src = this.aA;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.F(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.F(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.F(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.oU(this.bM, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.a4 ^ bitpos), (this.ag | bitpos), dst, dstHashes, (((((-1) + this.b7) | 0) + node.b6()) | 0), ((((this.bz - keyHash) | 0) + node.e3()) | 0));
});
$p.ar = (function(f) {
  var iN = $m_jl_Integer$().cO(this.a4);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.h(this.jB(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().cO(this.ag);
  var j = 0;
  while ((j < jN)) {
    this.cS(j).ar(f);
    j = ((1 + j) | 0);
  }
});
$p.eF = (function(f) {
  var iN = $m_jl_Integer$().cO(this.a4);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.eB(this.e5(i$1), this.di(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().cO(this.ag);
  var j = 0;
  while ((j < jN)) {
    this.cS(j).eF(f);
    j = ((1 + j) | 0);
  }
});
$p.w = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bz === that.bz) && (this.ag === that.ag)) && (this.a4 === that.a4)) && (this.b7 === that.b7)) && $m_ju_Arrays$().jp(this.bM, that.bM))) {
      var a1 = this.aA;
      var a2 = that.aA;
      var length = this.aA.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().x(a1.a[i], a2.a[i]);
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
$p.C = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.oi = (function() {
  var this$1 = this.aA;
  var contentClone = this$1.n();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().cO(this.a4) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].oj();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.a4, this.ag, contentClone, this.bM.n(), this.b7, this.bz);
});
$p.oj = (function() {
  return this.oi();
});
$p.pa = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.p9(key, value, originalHash, hash, shift, replaceValue);
});
$p.jz = (function(index) {
  return this.cS(index);
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bX)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  bX: 1,
  c7: 1,
  b1: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.iP = 0;
  this.dD = 0;
  this.ah = null;
  this.iP = originalHash;
  this.dD = hash;
  this.ah = content;
  $m_s_Predef$().s3((this.ah.z() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.fm = (function(key) {
  var iter = this.ah.p();
  var i = 0;
  while (iter.u()) {
    if ($m_sr_BoxesRunTime$().x(iter.m().bj(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.b6 = (function() {
  return this.ah.z();
});
$p.je = (function(key, originalHash, hash, shift) {
  var this$1 = this.qS(key, originalHash, hash, shift);
  if (this$1.i()) {
    $m_sc_Iterator$().S.m();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.P();
  }
});
$p.qS = (function(key, originalHash, hash, shift) {
  if ((this.dD === hash)) {
    var index = this.fm(key);
    return ((index >= 0) ? new $c_s_Some(this.ah.E(index).bc()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.jA = (function(key, originalHash, hash, shift, f) {
  if ((this.dD === hash)) {
    var x1 = this.fm(key);
    return ((x1 === (-1)) ? f.W() : this.ah.E(x1).bc());
  } else {
    return f.W();
  }
});
$p.jm = (function(key, originalHash, hash, shift) {
  return ((this.dD === hash) && (this.fm(key) >= 0));
});
$p.pa = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.fm(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.ah.E(index).bc(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ah.eb(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ah.e1(new $c_T2(key, value))));
});
$p.jE = (function() {
  return false;
});
$p.jR = (function() {
  return 0;
});
$p.cS = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.hy = (function() {
  return true;
});
$p.jW = (function() {
  return this.ah.z();
});
$p.e5 = (function(index) {
  return this.ah.E(index).bj();
});
$p.di = (function(index) {
  return this.ah.E(index).bc();
});
$p.jB = (function(index) {
  return this.ah.E(index);
});
$p.gu = (function(index) {
  return this.iP;
});
$p.ar = (function(f) {
  this.ah.ar(f);
});
$p.eF = (function(f) {
  this.ah.ar(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bj();
      var v = x0$1$2$2.bc();
      return f.eB(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.w = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.dD === that.dD) && (this.ah.z() === that.ah.z()))) {
      var iter = this.ah.p();
      while (iter.u()) {
        var x1$2 = iter.m();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.bj();
        var value = x1$2.bc();
        var index = that.fm(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().x(value, that.ah.E(index).bc())))) {
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
$p.C = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.e3 = (function() {
  return Math.imul(this.ah.z(), this.dD);
});
$p.oj = (function() {
  return new $c_sci_HashCollisionMapNode(this.iP, this.dD, this.ah);
});
$p.jz = (function(index) {
  return this.cS(index);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  bZ: 1,
  c7: 1,
  b1: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.iQ = null;
  $n_sci_HashMap$ = this;
  this.iQ = new $c_sci_HashMap($m_sci_MapNode$().nm);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.qL = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().jd(source).jY());
});
$p.at = (function() {
  return new $c_sci_HashMapBuilder();
});
$p.as = (function(it) {
  return this.qL(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  ge: 1,
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
function $c_sci_LazyList$State$Cons(head, tail) {
  this.nj = null;
  this.nk = null;
  this.nj = head;
  this.nk = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.t = (function() {
  return this.nj;
});
$p.aK = (function() {
  return this.nk;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  gp: 1,
  c2: 1,
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
$p.jF = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list");
});
$p.aK = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.t = (function() {
  this.jF();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  gq: 1,
  c2: 1,
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
$p.qN = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.i()) {
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
  return new $c_sci_MapBuilderImpl().nP(it).oY();
});
$p.at = (function() {
  return new $c_sci_MapBuilderImpl();
});
$p.as = (function(it) {
  return this.qN(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  gu: 1,
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
    $thiz.bg(((that < 0) ? 0 : that));
  }
}
function $f_scm_Builder__sizeHintBounded__I__sc_Iterable__V($thiz, size, boundingColl) {
  var s = boundingColl.G();
  if ((s !== (-1))) {
    $thiz.bg(((s < size) ? s : size));
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
$p.qO = (function(it) {
  var k = it.G();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).nS(it);
});
$p.at = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.as = (function(source) {
  return this.qO(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  he: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ht)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.nB = null;
  this.nB = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.W = (function() {
  return (0, this.nB)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  hS: 1,
  cn: 1,
  aQ: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.nC = null;
  this.nC = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.h = (function(x0) {
  return (0, this.nC)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  hT: 1,
  co: 1,
  f: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.nD = null;
  this.nD = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $p;
$p.eB = (function(x0, x1) {
  return (0, this.nD)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  hU: 1,
  cp: 1,
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
$p.h = (function(x) {
  return this.c4(x, $m_s_PartialFunction$().h3);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  i1: 1,
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
$p.oC = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  i8: 1,
  i9: 1,
  ia: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.it)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2(parentParam$2, onTryParam$1, outer) {
  this.kg = null;
  this.hK = null;
  this.kg = onTryParam$1;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.hK = parentParam$2;
}
$p = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2() {
}
$h_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2.prototype = $p;
$p.hC = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.jU = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gD = (function(nextValue, transaction) {
  this.kg.eB(nextValue, transaction);
});
var $d_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_common_InternalParentObserver$$anon$2, "com.raquo.airstream.common.InternalParentObserver$$anon$2", ({
  cY: 1,
  aB: 1,
  cW: 1,
  b7: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.kl = null;
  this.kj = false;
  this.hM = null;
  this.kk = null;
  this.kl = onNextParam$2;
  this.kj = handleObserverErrors$3;
  this.hM = onErrorParam$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kk = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.e7 = (function() {
  return this.kk;
});
$p.e4 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.dk = (function(nextValue) {
  try {
    this.kl.h(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.kj) {
      this.gA(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cB(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.gA = (function(error) {
  try {
    if (this.hM.cp(error)) {
      this.hM.h(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cB(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cB(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.e9 = (function(nextValue) {
  nextValue.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.gA(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.dk(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  d4: 1,
  aD: 1,
  a1: 1,
  aL: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.hN = null;
  this.km = false;
  this.kn = null;
  this.hN = onTryParam$2;
  this.km = handleObserverErrors$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kn = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.e7 = (function() {
  return this.kn;
});
$p.e4 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.dk = (function(nextValue) {
  this.e9(new $c_s_util_Success(nextValue));
});
$p.gA = (function(error) {
  this.e9(new $c_s_util_Failure(error));
});
$p.e9 = (function(nextValue) {
  try {
    if (this.hN.cp(nextValue)) {
      this.hN.h(nextValue);
    } else {
      nextValue.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cB(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.km && nextValue.oG())) {
      this.gA(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cB(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cB(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  d5: 1,
  aD: 1,
  a1: 1,
  aL: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.lb = null;
  this.lc = false;
  this.pe = null;
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
$p.si = (function() {
  if ((!this.lc)) {
    this.lb = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.lc = true;
  }
  return this.lb;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  dK: 1,
  e0: 1,
  dT: 1,
  dV: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.b = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.b = new $c_Lcom_raquo_laminar_api_package$$anon$1();
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
  this.mB = null;
  this.mD = false;
  this.mC = null;
  this.i4 = null;
  this.mB = initialContext;
  this.mD = preferStrictMode;
  this.mC = insertFn;
  this.i4 = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.ji = (function(element) {
  var this$1 = this.mB;
  var insertContext = (this$1.i() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().s4(element, this.mD, this.i4) : this$1.P());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.mC.hr(insertContext, mountContext.ic, this.i4)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gJ(element.cr, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.h(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.cN = (function(element) {
  this.ji(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  e4: 1,
  V: 1,
  e8: 1,
  e5: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.ii = null;
  this.ij = null;
  this.ii = $m_s_None$();
  this.ij = $m_Lcom_raquo_laminar_DomApi$().ql(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.jj = (function() {
  return this.ii;
});
$p.eM = (function(maybeNextParent) {
  this.ii = maybeNextParent;
});
$p.eR = (function(maybeNextParent) {
});
$p.cN = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fi(parentNode, this, (void 0));
});
$p.aJ = (function() {
  return this.ij;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  eA: 1,
  aE: 1,
  V: 1,
  aN: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.iq = null;
  this.gY = null;
  this.iq = $m_s_None$();
  this.gY = $m_Lcom_raquo_laminar_DomApi$().qo(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.jj = (function() {
  return this.iq;
});
$p.eM = (function(maybeNextParent) {
  this.iq = maybeNextParent;
});
$p.eR = (function(maybeNextParent) {
});
$p.cN = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fi(parentNode, this, (void 0));
});
$p.sm = (function() {
  return this.gY.data;
});
$p.aJ = (function() {
  return this.gY;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  eH: 1,
  aE: 1,
  V: 1,
  aN: 1
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
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.y = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException();
  }
  $thiz.y = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.y = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.nV = (function(str) {
  var str$1 = $m_jl_String$().rB(str, 0, str.a.length);
  this.y = (("" + this.y) + str$1);
  return this;
});
$p.B = (function() {
  return this.y;
});
$p.z = (function() {
  return this.y.length;
});
$p.oc = (function(index) {
  return this.y.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  f8: 1,
  aO: 1,
  eN: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fb)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fe)));
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
$p.c4 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.B = (function() {
  return "<function1>";
});
$p.cp = (function(x) {
  return false;
});
$p.jf = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.h = (function(v1) {
  this.jf(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  fx: 1,
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
$p.p = (function() {
  return this;
});
$p.jl = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.dh = (function(n) {
  return this.gH(n, (-1));
});
$p.gH = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.B = (function() {
  return "<iterator>";
});
$p.ar = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.c6 = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.e0 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.eN = (function() {
  return $m_sci_Nil$().ea(this);
});
$p.G = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Map$() {
  this.h7 = null;
  this.nc = null;
  this.nd = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.nc = $ct_O__(new $c_O());
  this.nd = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sc_Map$().nc));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  g1: 1,
  g2: 1,
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
  $thiz.eo = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.eo = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.o1 = (function(elems) {
  return this.eo.dg(elems);
});
$p.hw = (function(it) {
  return this.eo.as(it);
});
$p.at = (function() {
  return this.eo.at();
});
$p.as = (function(source) {
  return this.hw(source);
});
$p.dg = (function(elems) {
  return this.o1(elems);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cu(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.gs(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bm(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bm(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.G();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.G();
    var $x_1 = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.p(), that);
  } else {
    return false;
  }
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.bl().at();
  var it = $thiz.p();
  while (it.u()) {
    b.b3(f.h(it.m()));
  }
  return b.b4();
}
function $f_sc_StrictOptimizedIterableOps__flatten__F1__O($thiz, toIterableOnce) {
  var b = $thiz.bl().at();
  var it = $thiz.p();
  while (it.u()) {
    b.bd(toIterableOnce.h(it.m()));
  }
  return b.b4();
}
function $f_sc_StrictOptimizedIterableOps__takeRight__I__O($thiz, n) {
  var b = $thiz.eL();
  $f_scm_Builder__sizeHintBounded__I__sc_Iterable__V(b, n, $thiz);
  var lead = $thiz.p().dh(n);
  var it = $thiz.p();
  while (lead.u()) {
    lead.m();
    it.m();
  }
  while (it.u()) {
    b.b3(it.m());
  }
  return b.b4();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.h4 = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.qM = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.as.call(this, it));
});
$p.as = (function(it) {
  return this.qM(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  gk: 1,
  fS: 1,
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
  this.fZ = null;
  $n_sci_LazyList$ = this;
  this.fZ = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).ow();
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.dg = (function(elems) {
  return this.jw(elems);
});
$p.p0 = (function(ll, f) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef) => (() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var rest = new $c_sr_ObjectRef(restRef.av);
    while (((!itHasNext) && (!rest.av.i()))) {
      it.av = f.h(rest.av.I().t()).p();
      itHasNext = it.av.u();
      if ((!itHasNext)) {
        rest.av = rest.av.I().aK();
        restRef.av = rest.av;
      }
    }
    if (itHasNext) {
      var head = it.av.m();
      rest.av = rest.av.I().aK();
      restRef.av = rest.av;
      $m_sci_LazyList$();
      return new $c_sci_LazyList$State$Cons(head, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().jZ(it.av, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().p0(rest.av, f).I()))))))));
    } else {
      return $m_sci_LazyList$State$Empty$();
    }
  }))(new $c_sr_ObjectRef(ll))));
});
$p.s8 = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.av;
    var i = iRef.ey;
    while (((i > 0) && (!rest.i()))) {
      rest = rest.I().aK();
      restRef.av = rest;
      i = (((-1) + i) | 0);
      iRef.ey = i;
    }
    return rest.I();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.jw = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.G() === 0) ? this.fZ : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().p1(coll.p()))))));
});
$p.jZ = (function(it, suffix) {
  return (it.u() ? new $c_sci_LazyList$State$Cons(it.m(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().jZ(it, suffix))))) : suffix.W());
});
$p.p1 = (function(it) {
  return (it.u() ? new $c_sci_LazyList$State$Cons(it.m(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().p1(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.at = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.as = (function(source) {
  return this.jw(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  gl: 1,
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
  this.g4 = null;
  this.nv = null;
  this.g4 = outer;
  this.nv = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.pP = (function(x) {
  this.g4.b3(x);
  return this;
});
$p.pF = (function(xs) {
  this.g4.bd(xs);
  return this;
});
$p.bg = (function(size) {
  this.g4.bg(size);
});
$p.b4 = (function() {
  return this.nv.h(this.g4.b4());
});
$p.bd = (function(elems) {
  return this.pF(elems);
});
$p.b3 = (function(elem) {
  return this.pP(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  h9: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.dU = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.dU = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.bg = (function(size) {
});
$p.pQ = (function(elem) {
  this.dU.b3(elem);
  return this;
});
$p.pG = (function(xs) {
  this.dU.bd(xs);
  return this;
});
$p.bd = (function(elems) {
  return this.pG(elems);
});
$p.b3 = (function(elem) {
  return this.pQ(elem);
});
$p.b4 = (function() {
  return this.dU;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  b4: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.nG = null;
  this.nG = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.W = (function() {
  return (0, this.nG)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  ih: 1,
  ig: 1,
  cn: 1,
  aQ: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.nH = null;
  this.nH = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.h = (function(x0) {
  return (0, this.nH)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  ij: 1,
  ii: 1,
  co: 1,
  f: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.nI = null;
  this.nI = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.eB = (function(x0, x1) {
  return (0, this.nI)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  il: 1,
  ik: 1,
  cp: 1,
  aR: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.nJ = null;
  this.nJ = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.hr = (function(x0, x1, x2) {
  return (0, this.nJ)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  io: 1,
  im: 1,
  hV: 1,
  fq: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.nK = null;
  this.nK = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.pU = (function(x0, x1, x2, x3) {
  return (0, this.nK)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  iq: 1,
  ip: 1,
  hW: 1,
  fr: 1
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
  $thiz.ee = label;
  $thiz.ed = icon;
  return $thiz;
}
/** @constructor */
function $c_Lccrystal_site_Tab() {
  this.ee = null;
  this.ed = null;
}
$p = $c_Lccrystal_site_Tab.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_Tab;
/** @constructor */
function $h_Lccrystal_site_Tab() {
}
$h_Lccrystal_site_Tab.prototype = $p;
$p.bx = (function() {
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
  $thiz.fy = title;
  return $thiz;
}
/** @constructor */
function $c_Lccrystal_site_TabExplorer$Scenario() {
  this.fy = null;
}
$p = $c_Lccrystal_site_TabExplorer$Scenario.prototype = new $h_O();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario() {
}
$h_Lccrystal_site_TabExplorer$Scenario.prototype = $p;
$p.bx = (function() {
  return new $c_s_Product$$anon$1(this);
});
var $d_Lccrystal_site_TabExplorer$Scenario = new $TypeData().i(0, "ccrystal.site.TabExplorer$Scenario", ({
  aA: 1,
  d: 1,
  v: 1,
  a: 1,
  a5: 1
}));
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.gl($m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gm($m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.eS(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.gz(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.bn || (!when))) {
    var $x_1 = f();
  } else {
    this$2.bn = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.bn = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.cR();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.cV();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.bn || (!when))) {
    f();
  } else {
    this$3.bn = true;
    try {
      f();
    } finally {
      this$3.bn = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().oV($thiz.cV(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().oV($thiz.cR(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.gK())) {
    $thiz.gE();
    $thiz.eS(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.gB();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.gC();
    $thiz.eS(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cR();
  var $x_1 = this$.length;
  var this$$1 = $thiz.cV();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.kp = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kp = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.rh = (function(x) {
  return (x !== null);
});
$p.pZ = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.kp, x, _$1);
  }))), (void 0)) : default$1.h(x));
});
$p.cp = (function(x) {
  return this.rh(x);
});
$p.c4 = (function(x, default$1) {
  return this.pZ(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  dg: 1,
  aK: 1,
  f: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.dp = $m_Lcom_raquo_airstream_core_Observer$().qQ(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $thiz.dp.e9(tryValue);
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.kY = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.kY = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.rj = (function(x) {
  return true;
});
$p.q1 = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.kY.s9(x, _$1);
  })));
});
$p.cp = (function(x) {
  return this.rj(x);
});
$p.c4 = (function(x, default$1) {
  return this.q1(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  dx: 1,
  aK: 1,
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
$p.cp = (function(x) {
  return (((typeof x) === "boolean") && true);
});
$p.c4 = (function(x, default$1) {
  return (((typeof x) === "boolean") ? (!(!x)) : default$1.h(x));
});
var $d_Lcom_raquo_laminar_DomApi$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$$anon$1, "com.raquo.laminar.DomApi$$anon$1", ({
  dE: 1,
  aK: 1,
  f: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.il = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cr.nO();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cr.qp();
  })));
  $thiz.en = (void 0);
  $thiz.f2 = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.en === (void 0))) {
    $thiz.en = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.en;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.en;
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
  var x = $thiz.en;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.en;
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
  return $thiz.f2.cT(prop, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$()))).qa(new $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V($thiz, key, reason, addItems, removeItems) {
  var keyItemsWithReason = $thiz.f2.cT(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.i())) {
      var x0 = these.t();
      var x = x0.bj();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.bc();
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
      if (l.i()) {
        var result = $m_sci_Nil$();
        break;
      } else {
        var h = l.t();
        var t = l.v();
        if (((!(!f(h))) === true)) {
          l = t;
          continue;
        }
        var start = l;
        var remaining = t;
        while (true) {
          if (remaining.i()) {
            var result = start;
            break block;
          } else {
            var x$1 = remaining.t();
            if (((!(!f(x$1))) !== true)) {
              remaining = remaining.v();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.t(), $m_sci_Nil$());
            var toProcess = start.v();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.t(), $m_sci_Nil$());
              currentLast.Z = newElem;
              currentLast = newElem;
              toProcess = toProcess.v();
            }
            var next = firstMiss.v();
            var nextToCopy = next;
            while ((!next.i())) {
              var head = next.t();
              if (((!(!f(head))) !== true)) {
                next = next.v();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.t(), $m_sci_Nil$());
                  currentLast.Z = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.v();
                }
                nextToCopy = next.v();
                next = next.v();
              }
            }
            if ((!nextToCopy.i())) {
              currentLast.Z = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.f2.cT(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.bf(t$1.bj()));
  var l$1 = this$1;
  block$2: {
    var $x_3;
    while (true) {
      if (l$1.i()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.t();
        var t$2 = l$1.v();
        if (((!(!f$1(h$1))) === true)) {
          l$1 = t$2;
          continue;
        }
        var start$1 = l$1;
        var remaining$1 = t$2;
        while (true) {
          if (remaining$1.i()) {
            var $x_3 = start$1;
            break block$2;
          } else {
            var x$2 = remaining$1.t();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$1 = remaining$1.v();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.t(), $m_sci_Nil$());
            var toProcess$1 = start$1.v();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.t(), $m_sci_Nil$());
              currentLast$1.Z = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.v();
            }
            var next$1 = firstMiss$1.v();
            var nextToCopy$1 = next$1;
            while ((!next$1.i())) {
              var head$1 = next$1.t();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.v();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.t(), $m_sci_Nil$());
                  currentLast$1.Z = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.v();
                }
                nextToCopy$1 = next$1.v();
                next$1 = next$1.v();
              }
            }
            if ((!nextToCopy$1.i())) {
              currentLast$1.Z = nextToCopy$1;
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
    var x0$1 = itemsToAdd.t();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.v();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.t();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.Z = nx;
      t$3 = nx;
      rest = rest.v();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.nX($x_2);
  var domValues = key.i5.ol(key.mE.h($thiz));
  var f$3 = ((elem) => result.bf(elem));
  var l$2 = domValues;
  block$4: {
    var $x_5;
    while (true) {
      if (l$2.i()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.t();
        var t$4 = l$2.v();
        if (((!(!f$3(h$3))) === true)) {
          l$2 = t$4;
          continue;
        }
        var start$2 = l$2;
        var remaining$2 = t$4;
        while (true) {
          if (remaining$2.i()) {
            var $x_5 = start$2;
            break block$4;
          } else {
            var x$4 = remaining$2.t();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$2 = remaining$2.v();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.t(), $m_sci_Nil$());
            var toProcess$2 = start$2.v();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.t(), $m_sci_Nil$());
              currentLast$2.Z = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.v();
            }
            var next$2 = firstMiss$2.v();
            var nextToCopy$2 = next$2;
            while ((!next$2.i())) {
              var head$2 = next$2.t();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.v();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.t(), $m_sci_Nil$());
                  currentLast$2.Z = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.v();
                }
                nextToCopy$2 = next$2.v();
                next$2 = next$2.v();
              }
            }
            if ((!nextToCopy$2.i())) {
              currentLast$2.Z = nextToCopy$2;
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
      if (l$3.i()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$3.t();
        var t$5 = l$3.v();
        if (((!(!f(h$4))) === true)) {
          l$3 = t$5;
          continue;
        }
        var start$3 = l$3;
        var remaining$3 = t$5;
        while (true) {
          if (remaining$3.i()) {
            var $x_4 = start$3;
            break block$6;
          } else {
            var x$5 = remaining$3.t();
            if (((!(!f(x$5))) !== true)) {
              remaining$3 = remaining$3.v();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.t(), $m_sci_Nil$());
            var toProcess$3 = start$3.v();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.t(), $m_sci_Nil$());
              currentLast$3.Z = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.v();
            }
            var next$3 = firstMiss$3.v();
            var nextToCopy$3 = next$3;
            while ((!next$3.i())) {
              var head$3 = next$3.t();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.v();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.t(), $m_sci_Nil$());
                  currentLast$3.Z = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.v();
                }
                nextToCopy$3 = next$3.v();
                next$3 = next$3.v();
              }
            }
            if ((!nextToCopy$3.i())) {
              currentLast$3.Z = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.nX($x_4);
  $thiz.f2 = $thiz.f2.ec(key, newItems);
  key.mF.eB($thiz, key.i5.on(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.fL, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.fL;
  $thiz.fL = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.i()) && (!maybePrevParent.P().hv().bU.i()));
  var isNextParentActive = ((!maybeNextParent.i()) && (!maybeNextParent.P().hv().bU.i()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.i() ? $m_s_None$() : new $c_s_Some(maybeNextParent.P().hv())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.i()) {
    $thiz.il.q9();
  } else {
    var x0 = maybeNextOwner.P();
    $thiz.il.sb(x0);
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1(reason$5) {
  this.ik = null;
  this.ik = reason$5;
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1.prototype = $p;
$p.ri = (function(x) {
  if ((x !== null)) {
    x.bj();
    var r = x.bc();
    var x$3 = this.ik;
    if ((r === x$3)) {
      return true;
    }
  }
  return false;
});
$p.q0 = (function(x, default$1) {
  if ((x !== null)) {
    var item = x.bj();
    var r = x.bc();
    var x$3 = this.ik;
    if ((r === x$3)) {
      return item;
    }
  }
  return default$1.h(x);
});
$p.cp = (function(x) {
  return this.ri(x);
});
$p.c4 = (function(x, default$1) {
  return this.q0(x, default$1);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$$anon$1, "com.raquo.laminar.nodes.ReactiveElement$$anon$1", ({
  eE: 1,
  aK: 1,
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
  bv: 1,
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
  eU: 1,
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
  aP: 1,
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
  eZ: 1,
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
  f0: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f2)));
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
  f3: 1,
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
  fc: 1,
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
  fh: 1,
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
  fi: 1,
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
$p.h = (function(x) {
  return x;
});
$p.B = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().i($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  fn: 1,
  fk: 1,
  fl: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.iA)) {
    $thiz.iB = (($thiz.h2 === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.iA = true;
  }
  return $thiz.iB;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.iA) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.iB);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.h2;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.h2 + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.iB = null;
    this.h2 = null;
    this.iA = false;
    this.h2 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gv() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  fu: 1,
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
$p.i = (function() {
  return (this === $m_s_None$());
});
$p.G = (function() {
  return (this.i() ? 0 : 1);
});
$p.bf = (function(elem) {
  return ((!this.i()) && $m_sr_BoxesRunTime$().x(this.P(), elem));
});
$p.p = (function() {
  return (this.i() ? $m_sc_Iterator$().S : new $c_sc_Iterator$$anon$20(this.P()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fN = 0;
  this.n1 = 0;
  this.n0 = null;
  this.n0 = outer;
  this.fN = 0;
  this.n1 = outer.ax();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.u = (function() {
  return (this.fN < this.n1);
});
$p.m = (function() {
  var result = this.n0.ay(this.fN);
  this.fN = ((1 + this.fN) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  fz: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.n2 = null;
  this.n3 = null;
  this.n2 = _1;
  this.n3 = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.ax = (function() {
  return 2;
});
$p.ay = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.bj = (function() {
  return this.n2;
});
$p.bc = (function() {
  return this.n3;
});
$p.B = (function() {
  return (((("(" + this.bj()) + ",") + this.bc()) + ")");
});
$p.az = (function() {
  return "Tuple2";
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.C = (function() {
  return $m_s_util_hashing_MurmurHash3$().cW(this, (-889275714), false);
});
$p.w = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().x(this.bj(), x$1.bj()) && $m_sr_BoxesRunTime$().x(this.bc(), x$1.bc()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bC: 1,
  fA: 1,
  v: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.f7 = null;
  this.f8 = null;
  this.f9 = null;
  this.f7 = _1;
  this.f8 = _2;
  this.f9 = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.ax = (function() {
  return 3;
});
$p.ay = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.B = (function() {
  return (((((("(" + this.f7) + ",") + this.f8) + ",") + this.f9) + ")");
});
$p.az = (function() {
  return "Tuple3";
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.C = (function() {
  return $m_s_util_hashing_MurmurHash3$().cW(this, (-889275714), false);
});
$p.w = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T3) && ($m_sr_BoxesRunTime$().x(this.f7, x$1.f7) && ($m_sr_BoxesRunTime$().x(this.f8, x$1.f8) && $m_sr_BoxesRunTime$().x(this.f9, x$1.f9)))));
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  bD: 1,
  fB: 1,
  v: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.fO = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  fP: 1,
  fO: 1,
  G: 1,
  a: 1,
  W: 1
}));
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.bl().as($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.i())) {
    return $thiz.E(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.c5() : $thiz.B())));
  }
}
function $f_sc_IndexedSeqOps__headOption__s_Option($thiz) {
  return ($thiz.i() ? $m_s_None$() : new $c_s_Some($thiz.t()));
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.c5() + "("), ", ", ")");
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
$p.jQ = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.G = (function() {
  return 0;
});
$p.gH = (function(from, until) {
  return this;
});
$p.m = (function() {
  this.jQ();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  fU: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.fP = false;
  this.n6 = null;
  this.n6 = a$1;
  this.fP = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.u = (function() {
  return (!this.fP);
});
$p.m = (function() {
  if (this.fP) {
    return $m_sc_Iterator$().S.m();
  } else {
    this.fP = true;
    return this.n6;
  }
});
$p.gH = (function(from, until) {
  return (((this.fP || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().S : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  fV: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.n9 = null;
  this.h5 = false;
  this.n8 = null;
  this.iL = null;
  this.n7 = null;
  this.iL = outer;
  this.n7 = f$1;
  this.n9 = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.h5 = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.u = (function() {
  while (true) {
    if (this.h5) {
      return true;
    } else if (this.iL.u()) {
      var a = this.iL.m();
      if (this.n9.hp(this.n7.h(a))) {
        this.n8 = a;
        this.h5 = true;
        return true;
      }
    } else {
      return false;
    }
  }
});
$p.m = (function() {
  if (this.u()) {
    this.h5 = false;
    return this.n8;
  } else {
    return $m_sc_Iterator$().S.m();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  fX: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.h6 = null;
  this.na = null;
  this.h6 = outer;
  this.na = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.G = (function() {
  return this.h6.G();
});
$p.u = (function() {
  return this.h6.u();
});
$p.m = (function() {
  return this.na.h(this.h6.m());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  fY: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bL instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bL;
      $thiz.bL = c.bL;
      $thiz.dt = c.dt;
      if ((c.cc !== null)) {
        if (($thiz.cb === null)) {
          $thiz.cb = c.cb;
        }
        c.cb.fQ = $thiz.cc;
        $thiz.cc = c.cc;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.cc === null)) {
      $thiz.bL = null;
      $thiz.cb = null;
      return false;
    } else {
      $thiz.bL = $thiz.cc.r3();
      if (($thiz.cb === $thiz.cc)) {
        $thiz.cb = $thiz.cb.fQ;
      }
      $thiz.cc = $thiz.cc.fQ;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.dt) {
        return true;
      } else if ((($thiz.bL !== null) && $thiz.bL.u())) {
        $thiz.dt = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.bL = null;
  this.cc = null;
  this.cb = null;
  this.dt = false;
  this.bL = current;
  this.cc = null;
  this.cb = null;
  this.dt = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.u = (function() {
  if (this.dt) {
    return true;
  } else if ((this.bL !== null)) {
    if (this.bL.u()) {
      this.dt = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.m = (function() {
  if (this.u()) {
    this.dt = false;
    return this.bL.m();
  } else {
    return $m_sc_Iterator$().S.m();
  }
});
$p.jl = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.cc === null)) {
    this.cc = c;
    this.cb = c;
  } else {
    this.cb.fQ = c;
    this.cb = c;
  }
  if ((this.bL === null)) {
    this.bL = $m_sc_Iterator$().S;
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
  while (($thiz.d3 > 0)) {
    if ($thiz.du.u()) {
      $thiz.du.m();
      $thiz.d3 = (((-1) + $thiz.d3) | 0);
    } else {
      $thiz.d3 = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.bX < 0)) {
    return (-1);
  } else {
    var that = (($thiz.bX - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.du = null;
  this.bX = 0;
  this.d3 = 0;
  this.du = underlying;
  this.bX = limit;
  this.d3 = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.G = (function() {
  var size = this.du.G();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.d3) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.bX < 0)) {
      return dropSize;
    } else {
      var x = this.bX;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.u = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.bX !== 0) && this.du.u());
});
$p.m = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bX > 0)) {
    this.bX = (((-1) + this.bX) | 0);
    return this.du.m();
  } else {
    return ((this.bX < 0) ? this.du.m() : $m_sc_Iterator$().S.m());
  }
});
$p.gH = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.bX < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.d3 + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().S;
  } else if ((sum < 0)) {
    this.d3 = 2147483647;
    this.bX = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.du, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.d3 = sum;
    this.bX = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  g0: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $f_sc_LinearSeqOps__headOption__s_Option($thiz) {
  return ($thiz.i() ? $m_s_None$() : new $c_s_Some($thiz.t()));
}
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.i())) {
    len = ((1 + len) | 0);
    these = these.v();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $thiz, len));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.bm(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.om(n);
  if (skipped.i()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.t();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.i() ? 0 : 1);
    } else if (xs.i()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.v();
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else if ((((!a.i()) && (!b.i())) && $m_sr_BoxesRunTime$().x(a.t(), b.t()))) {
      var temp$a = a.v();
      var temp$b = b.v();
      a = temp$a;
      b = temp$b;
    } else {
      return (a.i() && b.i());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.fS = null;
  this.fS = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.u = (function() {
  return (!this.fS.i());
});
$p.m = (function() {
  var r = this.fS.t();
  this.fS = this.fS.v();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  g4: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.d5 === null)) {
    $thiz.d5 = new $ac_I(($m_sci_Node$().g3 << 1));
    $thiz.fW = new ($d_sci_Node.r().C)($m_sci_Node$().g3);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.es = node;
  $thiz.bY = 0;
  $thiz.fV = node.jW();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bN = ((1 + $thiz.bN) | 0);
  var cursorIndex = ($thiz.bN << 1);
  var lengthIndex = ((1 + ($thiz.bN << 1)) | 0);
  $thiz.fW.a[$thiz.bN] = node;
  $thiz.d5.a[cursorIndex] = 0;
  $thiz.d5.a[lengthIndex] = node.jR();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bN = (((-1) + $thiz.bN) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bN >= 0)) {
    var cursorIndex = ($thiz.bN << 1);
    var lengthIndex = ((1 + ($thiz.bN << 1)) | 0);
    var nodeCursor = $thiz.d5.a[cursorIndex];
    if ((nodeCursor < $thiz.d5.a[lengthIndex])) {
      var ev$1 = $thiz.d5;
      ev$1.a[cursorIndex] = ((1 + ev$1.a[cursorIndex]) | 0);
      var nextNode = $thiz.fW.a[$thiz.bN].jz(nodeCursor);
      if (nextNode.jE()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.hy()) {
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
  $thiz.bY = 0;
  $thiz.fV = 0;
  $thiz.bN = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.jE()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.hy()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.bY = 0;
  this.fV = 0;
  this.es = null;
  this.bN = 0;
  this.d5 = null;
  this.fW = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.u = (function() {
  return ((this.bY < this.fV) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.ha = node;
  $thiz.dC = (((-1) + node.jW()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.bZ = ((1 + $thiz.bZ) | 0);
  $thiz.fY.a[$thiz.bZ] = node;
  $thiz.fX.a[$thiz.bZ] = (((-1) + node.jR()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.bZ = (((-1) + $thiz.bZ) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bZ >= 0)) {
    var nodeCursor = $thiz.fX.a[$thiz.bZ];
    $thiz.fX.a[$thiz.bZ] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.fY.a[$thiz.bZ].jz(nodeCursor));
    } else {
      var currNode = $thiz.fY.a[$thiz.bZ];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.hy()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.dC = (-1);
  $thiz.bZ = (-1);
  $thiz.fX = new $ac_I(((1 + $m_sci_Node$().g3) | 0));
  $thiz.fY = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().g3) | 0));
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
  this.dC = 0;
  this.ha = null;
  this.bZ = 0;
  this.fX = null;
  this.fY = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.u = (function() {
  return ((this.dC >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.fa !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.F(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.F(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.gp(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aA;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.F(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.F(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bM, dataIx, originalHash);
  bm.a4 = (bm.a4 | bitpos);
  bm.aA = dst;
  bm.bM = dstHashes;
  bm.b7 = ((1 + bm.b7) | 0);
  bm.bz = ((bm.bz + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.fa = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.cH = $thiz.cH.oi();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.fa = null;
  this.cH = null;
  this.cH = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().mY, $m_s_Array$EmptyArrays$().iz, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.bg = (function(size) {
});
$p.fu = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().eK(keyHash, shift);
    var bitpos = $m_sci_Node$().e2(mask);
    if (((mapNode.a4 & bitpos) !== 0)) {
      var index = $m_sci_Node$().cU(mapNode.a4, mask, bitpos);
      var key0 = mapNode.e5(index);
      var key0UnimprovedHash = mapNode.gu(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().x(key0, key))) {
        mapNode.aA.a[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.di(index);
        var key0Hash = $m_sc_Hashing$().cw(key0UnimprovedHash);
        var subNodeNew = mapNode.jP(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.rx(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.ag & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cU(mapNode.ag, mask, bitpos);
      var subNode = mapNode.cS(index$2);
      var beforeSize = subNode.b6();
      var beforeHash = subNode.e3();
      this.fu(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.b7 = ((mapNode.b7 + ((subNode.b6() - beforeSize) | 0)) | 0);
      mapNode.bz = ((mapNode.bz + ((subNode.e3() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.fm(key);
    if ((index$3 < 0)) {
      mapNode.ah = mapNode.ah.e1(new $c_T2(key, value));
    } else {
      mapNode.ah = mapNode.ah.eb(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.jY = (function() {
  if ((this.cH.b7 === 0)) {
    return $m_sci_HashMap$().iQ;
  } else if ((this.fa !== null)) {
    return this.fa;
  } else {
    this.fa = new $c_sci_HashMap(this.cH);
    return this.fa;
  }
});
$p.nU = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().a0(elem.bj());
  var im = $m_sc_Hashing$().cw(h);
  this.fu(this.cH, elem.bj(), elem.bc(), h, im, 0);
  return this;
});
$p.eA = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().a0(key);
  this.fu(this.cH, key, value, originalHash, $m_sc_Hashing$().cw(originalHash), 0);
  return this;
});
$p.jd = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.sM();
    while (iter.u()) {
      var next = iter.m();
      var originalHash = xs.sq(next.oE());
      var hash = $m_sc_Hashing$().cw(originalHash);
      this.fu(this.cH, next.oI(), next.sv(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.qz();
    while (iter$2.u()) {
      var next$2 = iter$2.m();
      var originalHash$2 = xs.sq(next$2.oE());
      var hash$2 = $m_sc_Hashing$().cw(originalHash$2);
      this.fu(this.cH, next$2.oI(), next$2.sv(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.eF(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.eA(key$2$2, value$2$2))));
  } else {
    var it = xs.p();
    while (it.u()) {
      this.nU(it.m());
    }
  }
  return this;
});
$p.bd = (function(elems) {
  return this.jd(elems);
});
$p.b3 = (function(elem) {
  return this.nU(elem);
});
$p.b4 = (function() {
  return this.jY();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  gf: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.eo = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.jv = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.hw.call(this, it));
});
$p.as = (function(source) {
  return this.jv(source);
});
$p.hw = (function(it) {
  return this.jv(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  gi: 1,
  aV: 1,
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
  this.fb = null;
  this.ni = null;
  this.q8();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.bg = (function(size) {
});
$p.q8 = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.ni = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jq()))));
  this.fb = deferred;
});
$p.s7 = (function() {
  this.fb.jG(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.ni;
});
$p.pM = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.fb.jG(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jq())))));
  })));
  this.fb = deferred;
  return this;
});
$p.pD = (function(xs) {
  if ((xs.G() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.fb.jG(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().jZ(xs.p(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.jq()))))));
    this.fb = deferred;
  }
  return this;
});
$p.bd = (function(elems) {
  return this.pD(elems);
});
$p.b3 = (function(elem) {
  return this.pM(elem);
});
$p.b4 = (function() {
  return this.s7();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  gm: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.fc = null;
  this.fc = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.u = (function() {
  return (!this.fc.i());
});
$p.m = (function() {
  if (this.fc.i()) {
    return $m_sc_Iterator$().S.m();
  } else {
    var res = this.fc.I().t();
    this.fc = this.fc.I().aK();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  go: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_List$() {
  this.g0 = null;
  $n_sci_List$ = this;
  this.g0 = new $c_sci_List$$anon$1();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.dg = (function(elems) {
  return $m_sci_Nil$().ea(elems);
});
$p.at = (function() {
  return new $c_scm_ListBuffer();
});
$p.as = (function(source) {
  return $m_sci_Nil$().ea(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  gr: 1,
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
  $thiz.fd = outer;
  $thiz.dF = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dF = 0;
  this.fd = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.u = (function() {
  return (this.dF < 2);
});
$p.m = (function() {
  switch (this.dF) {
    case 0: {
      var result = new $c_T2(this.fd.cd, this.fd.d6);
      break;
    }
    case 1: {
      var result = new $c_T2(this.fd.ce, this.fd.d7);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().S.m();
    }
  }
  this.dF = ((1 + this.dF) | 0);
  return result;
});
$p.dh = (function(n) {
  this.dF = ((this.dF + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $thiz.dG = outer;
  $thiz.dH = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dH = 0;
  this.dG = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.u = (function() {
  return (this.dH < 3);
});
$p.m = (function() {
  switch (this.dH) {
    case 0: {
      var result = new $c_T2(this.dG.c0, this.dG.cI);
      break;
    }
    case 1: {
      var result = new $c_T2(this.dG.c1, this.dG.cJ);
      break;
    }
    case 2: {
      var result = new $c_T2(this.dG.c2, this.dG.cK);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().S.m();
    }
  }
  this.dH = ((1 + this.dH) | 0);
  return result;
});
$p.dh = (function(n) {
  this.dH = ((this.dH + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $thiz.cL = outer;
  $thiz.dI = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dI = 0;
  this.cL = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.u = (function() {
  return (this.dI < 4);
});
$p.m = (function() {
  switch (this.dI) {
    case 0: {
      var result = new $c_T2(this.cL.bA, this.cL.cf);
      break;
    }
    case 1: {
      var result = new $c_T2(this.cL.bB, this.cL.cg);
      break;
    }
    case 2: {
      var result = new $c_T2(this.cL.bC, this.cL.ch);
      break;
    }
    case 3: {
      var result = new $c_T2(this.cL.bD, this.cL.ci);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().S.m();
    }
  }
  this.dI = ((1 + this.dI) | 0);
  return result;
});
$p.dh = (function(n) {
  this.dI = ((this.dI + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.d8 = null;
  this.g1 = false;
  this.et = null;
  this.d8 = $m_sci_Map$EmptyMap$();
  this.g1 = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.bg = (function(size) {
});
$p.oY = (function() {
  return (this.g1 ? this.et.jY() : this.d8);
});
$p.pK = (function(key, value) {
  if (this.g1) {
    this.et.eA(key, value);
  } else if ((this.d8.b6() < 4)) {
    this.d8 = this.d8.ec(key, value);
  } else if (this.d8.bf(key)) {
    this.d8 = this.d8.ec(key, value);
  } else {
    this.g1 = true;
    if ((this.et === null)) {
      this.et = new $c_sci_HashMapBuilder();
    }
    this.d8.q7(this.et);
    this.et.eA(key, value);
  }
  return this;
});
$p.nP = (function(xs) {
  return (this.g1 ? (this.et.jd(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.bd = (function(elems) {
  return this.nP(elems);
});
$p.b3 = (function(elem) {
  return this.pK(elem.bj(), elem.bc());
});
$p.b4 = (function() {
  return this.oY();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  gC: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().oH($m_jl_System$SystemProperties$().jC("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
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
  this.no = 0;
  this.np = null;
  $n_sci_Vector$ = this;
  this.no = $ps_sci_Vector$__liftedTree1$1__I();
  this.np = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.dg = (function(elems) {
  return this.jx(elems);
});
$p.jx = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.G();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.aq().b5();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cG;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.c6(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.p().c6(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().nQ(it).oZ();
    }
  }
});
$p.at = (function() {
  return new $c_sci_VectorBuilder();
});
$p.as = (function(source) {
  return this.jx(source);
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  gP: 1,
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
  if (($thiz.V >= 6)) {
    a = $thiz.aV;
    var i = (($thiz.Q >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.F(i, dest, 0, length);
    }
    var newOffset = (($thiz.Q % 33554432) | 0);
    $thiz.J = (($thiz.J - (($thiz.Q - newOffset) | 0)) | 0);
    $thiz.Q = newOffset;
    if (((($thiz.J >>> 25) | 0) === 0)) {
      $thiz.V = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.V >= 5)) {
    if ((a === null)) {
      a = $thiz.a5;
    }
    var i$2 = (31 & (($thiz.Q >>> 20) | 0));
    if (($thiz.V === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.F(i$2, dest$1, 0, length$1);
      }
      $thiz.a5 = a;
      var newOffset$1 = (($thiz.Q % 1048576) | 0);
      $thiz.J = (($thiz.J - (($thiz.Q - newOffset$1) | 0)) | 0);
      $thiz.Q = newOffset$1;
      if (((($thiz.J >>> 20) | 0) === 0)) {
        $thiz.V = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().af(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.V >= 4)) {
    if ((a === null)) {
      a = $thiz.Y;
    }
    var i$3 = (31 & (($thiz.Q >>> 15) | 0));
    if (($thiz.V === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.F(i$3, dest$2, 0, length$2);
      }
      $thiz.Y = a;
      var newOffset$2 = (($thiz.Q % 32768) | 0);
      $thiz.J = (($thiz.J - (($thiz.Q - newOffset$2) | 0)) | 0);
      $thiz.Q = newOffset$2;
      if (((($thiz.J >>> 15) | 0) === 0)) {
        $thiz.V = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().af(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.V >= 3)) {
    if ((a === null)) {
      a = $thiz.T;
    }
    var i$4 = (31 & (($thiz.Q >>> 10) | 0));
    if (($thiz.V === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.F(i$4, dest$3, 0, length$3);
      }
      $thiz.T = a;
      var newOffset$3 = (($thiz.Q % 1024) | 0);
      $thiz.J = (($thiz.J - (($thiz.Q - newOffset$3) | 0)) | 0);
      $thiz.Q = newOffset$3;
      if (((($thiz.J >>> 10) | 0) === 0)) {
        $thiz.V = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().af(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.V >= 2)) {
    if ((a === null)) {
      a = $thiz.N;
    }
    var i$5 = (31 & (($thiz.Q >>> 5) | 0));
    if (($thiz.V === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.F(i$5, dest$4, 0, length$4);
      }
      $thiz.N = a;
      var newOffset$4 = (($thiz.Q % 32) | 0);
      $thiz.J = (($thiz.J - (($thiz.Q - newOffset$4) | 0)) | 0);
      $thiz.Q = newOffset$4;
      if (((($thiz.J >>> 5) | 0) === 0)) {
        $thiz.V = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().af(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.V >= 1)) {
    if ((a === null)) {
      a = $thiz.a2;
    }
    var i$6 = (31 & $thiz.Q);
    if (($thiz.V === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.F(i$6, dest$5, 0, length$5);
      }
      $thiz.a2 = a;
      $thiz.U = (($thiz.U - $thiz.Q) | 0);
      $thiz.Q = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().af(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hc = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.U === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.U) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.a2;
    var destPos = $thiz.U;
    data.F(0, dest, destPos, copy1);
    $thiz.U = (($thiz.U + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.a2;
      data.F(copy1, dest$1, 0, copy2);
      $thiz.U = (($thiz.U + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.U === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.J) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.J >>> 5) | 0));
      var dest = $thiz.N;
      slice.F(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.N;
        slice.F(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.J % 1024) | 0) !== 0)) {
        var f = ((e$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2, 2);
        });
        var len = slice.a.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var x0 = slice.a[i];
            f(x0);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i < len)) {
            var x0$1 = slice.a[i];
            f(x0$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i < len)) {
            var x0$2 = slice.a[i];
            f(x0$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i < len)) {
            var t = slice.a[i];
            var lo = t.r;
            var hi = t.s;
            f(new $c_RTLong(lo, hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i < len)) {
            var x0$3 = slice.a[i];
            f(x0$3);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i < len)) {
            var x0$4 = slice.a[i];
            f($bC(x0$4));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i < len)) {
            var x0$5 = slice.a[i];
            f(x0$5);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i < len)) {
            var x0$6 = slice.a[i];
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i < len)) {
            var x0$7 = slice.a[i];
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.J) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.J >>> 10) | 0));
      var dest$2 = $thiz.T;
      slice.F(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.T;
        slice.F(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.J % 32768) | 0) !== 0)) {
        var f$1 = ((e$2$2$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$1, 3);
        });
        var len$1 = slice.a.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$8 = slice.a[i$1];
            f$1(x0$8);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$1 < len$1)) {
            var x0$9 = slice.a[i$1];
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$1 < len$1)) {
            var x0$10 = slice.a[i$1];
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$1 < len$1)) {
            var t$1 = slice.a[i$1];
            var lo$1 = t$1.r;
            var hi$1 = t$1.s;
            f$1(new $c_RTLong(lo$1, hi$1));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$1 < len$1)) {
            var x0$11 = slice.a[i$1];
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$1 < len$1)) {
            var x0$12 = slice.a[i$1];
            f$1($bC(x0$12));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$1 < len$1)) {
            var x0$13 = slice.a[i$1];
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$1 < len$1)) {
            var x0$14 = slice.a[i$1];
            f$1(x0$14);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$1 < len$1)) {
            var x0$15 = slice.a[i$1];
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.J) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.J >>> 15) | 0));
      var dest$4 = $thiz.Y;
      slice.F(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.Y;
        slice.F(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.J % 1048576) | 0) !== 0)) {
        var f$2 = ((e$2$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$2, 4);
        });
        var len$2 = slice.a.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$16 = slice.a[i$2];
            f$2(x0$16);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$2 < len$2)) {
            var x0$17 = slice.a[i$2];
            f$2(x0$17);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$2 < len$2)) {
            var x0$18 = slice.a[i$2];
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$2 < len$2)) {
            var t$2 = slice.a[i$2];
            var lo$2 = t$2.r;
            var hi$2 = t$2.s;
            f$2(new $c_RTLong(lo$2, hi$2));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$2 < len$2)) {
            var x0$19 = slice.a[i$2];
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$2 < len$2)) {
            var x0$20 = slice.a[i$2];
            f$2($bC(x0$20));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$2 < len$2)) {
            var x0$21 = slice.a[i$2];
            f$2(x0$21);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$2 < len$2)) {
            var x0$22 = slice.a[i$2];
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$2 < len$2)) {
            var x0$23 = slice.a[i$2];
            f$2(x0$23);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.J) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.J >>> 20) | 0));
      var dest$6 = $thiz.a5;
      slice.F(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.a5;
        slice.F(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.J % 33554432) | 0) !== 0)) {
        var f$3 = ((e$2$2$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$3, 5);
        });
        var len$3 = slice.a.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$24 = slice.a[i$3];
            f$3(x0$24);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$3 < len$3)) {
            var x0$25 = slice.a[i$3];
            f$3(x0$25);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$3 < len$3)) {
            var x0$26 = slice.a[i$3];
            f$3(x0$26);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$3 < len$3)) {
            var t$3 = slice.a[i$3];
            var lo$3 = t$3.r;
            var hi$3 = t$3.s;
            f$3(new $c_RTLong(lo$3, hi$3));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$3 < len$3)) {
            var x0$27 = slice.a[i$3];
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$3 < len$3)) {
            var x0$28 = slice.a[i$3];
            f$3($bC(x0$28));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$3 < len$3)) {
            var x0$29 = slice.a[i$3];
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$3 < len$3)) {
            var x0$30 = slice.a[i$3];
            f$3(x0$30);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$3 < len$3)) {
            var x0$31 = slice.a[i$3];
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.J >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aV;
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
  var sliceCount = xs.cZ();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.cY(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var sign = (a >> 31);
    var x1 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.U === 32) || ($thiz.U === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().js((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.J) | 0);
  var xor = (idx ^ $thiz.J);
  $thiz.J = idx;
  $thiz.U = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.J + n) | 0);
    var xor = (idx ^ $thiz.J);
    $thiz.J = idx;
    $thiz.U = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.a2) + ", a2=") + $thiz.N) + ", a3=") + $thiz.T) + ", a4=") + $thiz.Y) + ", a5=") + $thiz.a5) + ", a6=") + $thiz.aV) + ", depth=") + $thiz.V));
  } else if ((xor < 1024)) {
    if (($thiz.V <= 1)) {
      $thiz.N = new ($d_O.r().r().C)(32);
      $thiz.N.a[0] = $thiz.a2;
      $thiz.V = 2;
    }
    $thiz.a2 = new $ac_O(32);
    $thiz.N.a[(31 & ((idx >>> 5) | 0))] = $thiz.a2;
  } else if ((xor < 32768)) {
    if (($thiz.V <= 2)) {
      $thiz.T = new ($d_O.r().r().r().C)(32);
      $thiz.T.a[0] = $thiz.N;
      $thiz.V = 3;
    }
    $thiz.a2 = new $ac_O(32);
    $thiz.N = new ($d_O.r().r().C)(32);
    $thiz.N.a[(31 & ((idx >>> 5) | 0))] = $thiz.a2;
    $thiz.T.a[(31 & ((idx >>> 10) | 0))] = $thiz.N;
  } else if ((xor < 1048576)) {
    if (($thiz.V <= 3)) {
      $thiz.Y = new ($d_O.r().r().r().r().C)(32);
      $thiz.Y.a[0] = $thiz.T;
      $thiz.V = 4;
    }
    $thiz.a2 = new $ac_O(32);
    $thiz.N = new ($d_O.r().r().C)(32);
    $thiz.T = new ($d_O.r().r().r().C)(32);
    $thiz.N.a[(31 & ((idx >>> 5) | 0))] = $thiz.a2;
    $thiz.T.a[(31 & ((idx >>> 10) | 0))] = $thiz.N;
    $thiz.Y.a[(31 & ((idx >>> 15) | 0))] = $thiz.T;
  } else if ((xor < 33554432)) {
    if (($thiz.V <= 4)) {
      $thiz.a5 = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.a5.a[0] = $thiz.Y;
      $thiz.V = 5;
    }
    $thiz.a2 = new $ac_O(32);
    $thiz.N = new ($d_O.r().r().C)(32);
    $thiz.T = new ($d_O.r().r().r().C)(32);
    $thiz.Y = new ($d_O.r().r().r().r().C)(32);
    $thiz.N.a[(31 & ((idx >>> 5) | 0))] = $thiz.a2;
    $thiz.T.a[(31 & ((idx >>> 10) | 0))] = $thiz.N;
    $thiz.Y.a[(31 & ((idx >>> 15) | 0))] = $thiz.T;
    $thiz.a5.a[(31 & ((idx >>> 20) | 0))] = $thiz.Y;
  } else {
    if (($thiz.V <= 5)) {
      $thiz.aV = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aV.a[0] = $thiz.a5;
      $thiz.V = 6;
    }
    $thiz.a2 = new $ac_O(32);
    $thiz.N = new ($d_O.r().r().C)(32);
    $thiz.T = new ($d_O.r().r().r().C)(32);
    $thiz.Y = new ($d_O.r().r().r().r().C)(32);
    $thiz.a5 = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.N.a[(31 & ((idx >>> 5) | 0))] = $thiz.a2;
    $thiz.T.a[(31 & ((idx >>> 10) | 0))] = $thiz.N;
    $thiz.Y.a[(31 & ((idx >>> 15) | 0))] = $thiz.T;
    $thiz.a5.a[(31 & ((idx >>> 20) | 0))] = $thiz.Y;
    $thiz.aV.a[((idx >>> 25) | 0)] = $thiz.a5;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aV = null;
  this.a5 = null;
  this.Y = null;
  this.T = null;
  this.N = null;
  this.a2 = null;
  this.U = 0;
  this.J = 0;
  this.Q = 0;
  this.hc = false;
  this.V = 0;
  this.a2 = new $ac_O(32);
  this.U = 0;
  this.J = 0;
  this.Q = 0;
  this.hc = false;
  this.V = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.bg = (function(size) {
});
$p.r8 = (function(v) {
  var x1 = v.cZ();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.V = 1;
      var i = v.k.a.length;
      this.U = (31 & i);
      this.J = ((i - this.U) | 0);
      var a = v.k;
      this.a2 = ((a.a.length === 32) ? a : $m_ju_Arrays$().af(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bw;
      var a$1 = v.o;
      this.a2 = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().af(a$1, 0, 32));
      this.V = 2;
      this.Q = ((32 - v.bQ) | 0);
      var i$1 = ((v.q + this.Q) | 0);
      this.U = (31 & i$1);
      this.J = ((i$1 - this.U) | 0);
      this.N = new ($d_O.r().r().C)(32);
      this.N.a[0] = v.k;
      var dest = this.N;
      var length = d2.a.length;
      d2.F(0, dest, 1, length);
      this.N.a[((1 + d2.a.length) | 0)] = this.a2;
      break;
    }
    case 5: {
      var d3 = v.ba;
      var s2 = v.bb;
      var a$2 = v.o;
      this.a2 = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().af(a$2, 0, 32));
      this.V = 3;
      this.Q = ((1024 - v.bp) | 0);
      var i$2 = ((v.q + this.Q) | 0);
      this.U = (31 & i$2);
      this.J = ((i$2 - this.U) | 0);
      this.T = new ($d_O.r().r().r().C)(32);
      this.T.a[0] = $m_sci_VectorStatics$().cQ(v.k, v.bF);
      var dest$1 = this.T;
      var length$1 = d3.a.length;
      d3.F(0, dest$1, 1, length$1);
      this.N = $m_ju_Arrays$().a7(s2, 32);
      this.T.a[((1 + d3.a.length) | 0)] = this.N;
      this.N.a[s2.a.length] = this.a2;
      break;
    }
    case 7: {
      var d4 = v.aM;
      var s3 = v.aO;
      var s2$2 = v.aN;
      var a$3 = v.o;
      this.a2 = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().af(a$3, 0, 32));
      this.V = 4;
      this.Q = ((32768 - v.b2) | 0);
      var i$3 = ((v.q + this.Q) | 0);
      this.U = (31 & i$3);
      this.J = ((i$3 - this.U) | 0);
      this.Y = new ($d_O.r().r().r().r().C)(32);
      this.Y.a[0] = $m_sci_VectorStatics$().cQ($m_sci_VectorStatics$().cQ(v.k, v.bh), v.bi);
      var dest$2 = this.Y;
      var length$2 = d4.a.length;
      d4.F(0, dest$2, 1, length$2);
      this.T = $m_ju_Arrays$().a7(s3, 32);
      this.N = $m_ju_Arrays$().a7(s2$2, 32);
      this.Y.a[((1 + d4.a.length) | 0)] = this.T;
      this.T.a[s3.a.length] = this.N;
      this.N.a[s2$2.a.length] = this.a2;
      break;
    }
    case 9: {
      var d5 = v.ai;
      var s4 = v.al;
      var s3$2 = v.ak;
      var s2$3 = v.aj;
      var a$4 = v.o;
      this.a2 = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().af(a$4, 0, 32));
      this.V = 5;
      this.Q = ((1048576 - v.aE) | 0);
      var i$4 = ((v.q + this.Q) | 0);
      this.U = (31 & i$4);
      this.J = ((i$4 - this.U) | 0);
      this.a5 = new ($d_O.r().r().r().r().r().C)(32);
      this.a5.a[0] = $m_sci_VectorStatics$().cQ($m_sci_VectorStatics$().cQ($m_sci_VectorStatics$().cQ(v.k, v.aS), v.aT), v.aU);
      var dest$3 = this.a5;
      var length$3 = d5.a.length;
      d5.F(0, dest$3, 1, length$3);
      this.Y = $m_ju_Arrays$().a7(s4, 32);
      this.T = $m_ju_Arrays$().a7(s3$2, 32);
      this.N = $m_ju_Arrays$().a7(s2$3, 32);
      this.a5.a[((1 + d5.a.length) | 0)] = this.Y;
      this.Y.a[s4.a.length] = this.T;
      this.T.a[s3$2.a.length] = this.N;
      this.N.a[s2$3.a.length] = this.a2;
      break;
    }
    case 11: {
      var d6 = v.a8;
      var s5 = v.ac;
      var s4$2 = v.ab;
      var s3$3 = v.aa;
      var s2$4 = v.a9;
      var a$5 = v.o;
      this.a2 = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().af(a$5, 0, 32));
      this.V = 6;
      this.Q = ((33554432 - v.au) | 0);
      var i$5 = ((v.q + this.Q) | 0);
      this.U = (31 & i$5);
      this.J = ((i$5 - this.U) | 0);
      this.aV = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aV.a[0] = $m_sci_VectorStatics$().cQ($m_sci_VectorStatics$().cQ($m_sci_VectorStatics$().cQ($m_sci_VectorStatics$().cQ(v.k, v.aF), v.aG), v.aH), v.aI);
      var dest$4 = this.aV;
      var length$4 = d6.a.length;
      d6.F(0, dest$4, 1, length$4);
      this.a5 = $m_ju_Arrays$().a7(s5, 32);
      this.Y = $m_ju_Arrays$().a7(s4$2, 32);
      this.T = $m_ju_Arrays$().a7(s3$3, 32);
      this.N = $m_ju_Arrays$().a7(s2$4, 32);
      this.aV.a[((1 + d6.a.length) | 0)] = this.a5;
      this.a5.a[s5.a.length] = this.Y;
      this.Y.a[s4$2.a.length] = this.T;
      this.T.a[s3$3.a.length] = this.N;
      this.N.a[s2$4.a.length] = this.a2;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.U === 0) && (this.J > 0))) {
    this.U = 32;
    this.J = (((-32) + this.J) | 0);
  }
  return this;
});
$p.pN = (function(elem) {
  if ((this.U === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.a2.a[this.U] = elem;
  this.U = ((1 + this.U) | 0);
  return this;
});
$p.nQ = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.U === 0) && (this.J === 0)) && (!this.hc)) ? this.r8(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.oZ = (function() {
  if (this.hc) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.U + this.J) | 0);
  var realLen = ((len - this.Q) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.a2;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().a7(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().af(this.N, 1, i2);
    var prefix1 = this.N.a[0];
    var a$1 = this.N.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().a7(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.Q) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().af(this.T, 1, i3);
    var a$2 = this.T.a[0];
    var prefix2 = $m_ju_Arrays$().af(a$2, 1, a$2.a.length);
    var prefix1$2 = this.T.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().a7(this.T.a[i3], i2$2);
    var a$3 = this.T.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().a7(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().af(this.Y, 1, i4);
    var a$4 = this.Y.a[0];
    var prefix3 = $m_ju_Arrays$().af(a$4, 1, a$4.a.length);
    var a$5 = this.Y.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().af(a$5, 1, a$5.a.length);
    var prefix1$3 = this.Y.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().a7(this.Y.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().a7(this.Y.a[i4].a[i3$2], i2$3);
    var a$6 = this.Y.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().a7(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().af(this.a5, 1, i5);
    var a$7 = this.a5.a[0];
    var prefix4 = $m_ju_Arrays$().af(a$7, 1, a$7.a.length);
    var a$8 = this.a5.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().af(a$8, 1, a$8.a.length);
    var a$9 = this.a5.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().af(a$9, 1, a$9.a.length);
    var prefix1$4 = this.a5.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().a7(this.a5.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().a7(this.a5.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().a7(this.a5.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.a5.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().a7(a$10, len$4));
    var len1$3 = prefix1$4.a.length;
    var len12$3 = ((len1$3 + (prefix2$3.a.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.a.length << 10)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.a.length << 15)) | 0), data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var data$5 = $m_ju_Arrays$().af(this.aV, 1, i6);
    var a$11 = this.aV.a[0];
    var prefix5 = $m_ju_Arrays$().af(a$11, 1, a$11.a.length);
    var a$12 = this.aV.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().af(a$12, 1, a$12.a.length);
    var a$13 = this.aV.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().af(a$13, 1, a$13.a.length);
    var a$14 = this.aV.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().af(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aV.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().a7(this.aV.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().a7(this.aV.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().a7(this.aV.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().a7(this.aV.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aV.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().a7(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.B = (function() {
  return (((((((("VectorBuilder(len1=" + this.U) + ", lenRest=") + this.J) + ", offset=") + this.Q) + ", depth=") + this.V) + ")");
});
$p.b4 = (function() {
  return this.oZ();
});
$p.bd = (function(elems) {
  return this.nQ(elems);
});
$p.b3 = (function(elem) {
  return this.pN(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  gX: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.nr = null;
  $n_scm_ArrayBuffer$ = this;
  this.nr = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.dg = (function(elems) {
  return this.oA(elems);
});
$p.oA = (function(coll) {
  var k = coll.G();
  if ((k >= 0)) {
    var array = this.p2(this.nr, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.c6(array, 0, 2147483647) : coll.p().c6(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).nR(coll);
  }
});
$p.at = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.s6 = (function(arrayLen, targetLen) {
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
$p.p2 = (function(array, curSize, targetSize) {
  var newLen = this.s6(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.F(0, res, 0, curSize);
    return res;
  }
});
$p.as = (function(source) {
  return this.oA(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  h2: 1,
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
  this.dU = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.bg = (function(size) {
  this.dU.bg(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  h3: 1,
  b4: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.eo = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  h8: 1,
  aV: 1,
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
  this.dU = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.bg = (function(size) {
  this.dU.bg(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  hi: 1,
  b4: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.g6 = outer;
  $thiz.dW = 0;
  $thiz.dc = null;
  $thiz.g7 = outer.aW.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.dW = 0;
  this.dc = null;
  this.g7 = 0;
  this.g6 = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.u = (function() {
  if ((this.dc !== null)) {
    return true;
  } else {
    while ((this.dW < this.g7)) {
      var n = this.g6.aW.a[this.dW];
      this.dW = ((1 + this.dW) | 0);
      if ((n !== null)) {
        this.dc = n;
        return true;
      }
    }
    return false;
  }
});
$p.m = (function() {
  if ((!this.u())) {
    return $m_sc_Iterator$().S.m();
  } else {
    var r = this.jr(this.dc);
    this.dc = this.dc.aX;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.g8 = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.g8 = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.bg = (function(size) {
});
$p.bd = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b4 = (function() {
  return this.g8;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.eo = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  hl: 1,
  aV: 1,
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
$p.dg = (function(elems) {
  return new $c_scm_ListBuffer().gG(elems);
});
$p.at = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.as = (function(source) {
  return new $c_scm_ListBuffer().gG(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  ho: 1,
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
  this.j8 = null;
  this.nA = null;
  this.nz = 0;
  this.j8 = underlying;
  this.nA = mutationCount;
  this.nz = (mutationCount.W() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.u = (function() {
  $m_scm_MutationTracker$().od(this.nz, (this.nA.W() | 0), "mutation occurred during iteration");
  return this.j8.u();
});
$p.m = (function() {
  return this.j8.m();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  hq: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.b5();
    var x$3 = x.b5();
    return (x$2 === x$3);
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.a1.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.a1.Q())) + "]") : clazz.a1.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.F)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.F)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.ga = 0;
  this.nE = 0;
  this.nF = null;
  this.nF = x$2;
  this.ga = 0;
  this.nE = x$2.ax();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.u = (function() {
  return (this.ga < this.nE);
});
$p.m = (function() {
  var result = this.nF.ay(this.ga);
  this.ga = ((1 + this.ga) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  i5: 1,
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
$p.dg = (function(elems) {
  return this.oB(elems);
});
$p.at = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.oB = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).b4();
});
$p.as = (function(source) {
  return this.oB(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  ic: 1,
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
$p.dg = (function(elems) {
  return this.jy(elems);
});
$p.jy = (function(source) {
  return this.at().bd(source).b4();
});
$p.at = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.dX))));
});
$p.as = (function(source) {
  return this.jy(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  is: 1,
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
  this.dY = null;
  this.dY = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.jJ = (function() {
  return true;
});
$p.oG = (function() {
  return false;
});
$p.P = (function() {
  var $x_1 = this.dY;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ad : $x_1);
});
$p.jM = (function(f) {
  return this;
});
$p.oT = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.c4(this.dY, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().eC(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.cn = (function(fa, fb) {
  return fa.h(this.dY);
});
$p.az = (function() {
  return "Failure";
});
$p.ax = (function() {
  return 1;
});
$p.ay = (function(x$1) {
  return ((x$1 === 0) ? this.dY : $m_sr_Statics$().eI(x$1));
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.C = (function() {
  return $m_s_util_hashing_MurmurHash3$().cW(this, (-889275714), false);
});
$p.B = (function() {
  return $m_sr_ScalaRunTime$().jb(this);
});
$p.w = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.dY;
    var x$2 = x$1.dY;
    return ((x === null) ? (x$2 === null) : x.w(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  cs: 1,
  cu: 1,
  v: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.ez = null;
  this.ez = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.jJ = (function() {
  return false;
});
$p.oG = (function() {
  return true;
});
$p.P = (function() {
  return this.ez;
});
$p.jM = (function(f) {
  try {
    return new $c_s_util_Success(f.h(this.ez));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().eC(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.oT = (function(pf) {
  return this;
});
$p.cn = (function(fa, fb) {
  try {
    return fb.h(this.ez);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().eC(e$2)) {
      return fa.h(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
  }
});
$p.az = (function() {
  return "Success";
});
$p.ax = (function() {
  return 1;
});
$p.ay = (function(x$1) {
  return ((x$1 === 0) ? this.ez : $m_sr_Statics$().eI(x$1));
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.C = (function() {
  return $m_s_util_hashing_MurmurHash3$().cW(this, (-889275714), false);
});
$p.B = (function() {
  return $m_sr_ScalaRunTime$().jb(this);
});
$p.w = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().x(this.ez, x$1.ez)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ct)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  ct: 1,
  cu: 1,
  v: 1,
  d: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  if ((!transaction.qf($thiz))) {
    transaction.qy($thiz);
  }
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__syncFire__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gr($thiz.jk(), transaction);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V($thiz) {
  var arr = $thiz.hI;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$1 = arr[i];
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(_$1.hK, _$1, false);
    i = ((1 + i) | 0);
  }
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V($thiz) {
  var arr = $thiz.hI;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var _$2 = arr[i];
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(_$2.hK, _$2);
    i = ((1 + i) | 0);
  }
}
class $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(causes) {
    super();
    this.fA = null;
    this.fA = causes;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().qb(causes), null, true, true);
    var this$3 = causes.eE($m_s_$less$colon$less$().h1).bR();
    if ((!this$3.i())) {
      this.jH(this$3.P());
    }
  }
  bx() {
    return new $c_s_Product$$anon$1(this);
  }
  C() {
    return $m_s_util_hashing_MurmurHash3$().cW(this, (-889275714), false);
  }
  w(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$CombinedError)) {
      var x = this.fA;
      var x$2 = x$0.fA;
      return ((x === null) ? (x$2 === null) : x.w(x$2));
    } else {
      return false;
    }
  }
  ax() {
    return 1;
  }
  az() {
    return "CombinedError";
  }
  ay(n) {
    if ((n === 0)) {
      return this.fA;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  B() {
    return ("CombinedError: " + $f_sc_IterableOnceOps__mkString__T__T__T__T(this.fA.eE($m_s_$less$colon$less$().h1).eN(), "", "; ", ""));
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$CombinedError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b8)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$CombinedError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$CombinedError, "com.raquo.airstream.core.AirstreamError$CombinedError", ({
  b8: 1,
  au: 1,
  u: 1,
  a: 1,
  d: 1,
  v: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fC = null;
    this.fB = null;
    this.fC = error;
    this.fB = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eG(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eG(cause)), null, true, true);
    this.jH(cause);
  }
  bx() {
    return new $c_s_Product$$anon$1(this);
  }
  C() {
    return $m_s_util_hashing_MurmurHash3$().cW(this, (-889275714), false);
  }
  w(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.fC;
      var x$2 = x$0.fC;
      if (((x === null) ? (x$2 === null) : x.w(x$2))) {
        var x$3 = this.fB;
        var x$4 = x$0.fB;
        return ((x$3 === null) ? (x$4 === null) : x$3.w(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  ax() {
    return 2;
  }
  az() {
    return "ErrorHandlingError";
  }
  ay(n) {
    if ((n === 0)) {
      return this.fC;
    }
    if ((n === 1)) {
      return this.fB;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  B() {
    return ((("ErrorHandlingError: " + this.fC) + "; cause: ") + this.fB);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b9)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  b9: 1,
  au: 1,
  u: 1,
  a: 1,
  d: 1,
  v: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.fD = null;
    this.fD = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eG(error)), null, true, true);
  }
  bx() {
    return new $c_s_Product$$anon$1(this);
  }
  C() {
    return $m_s_util_hashing_MurmurHash3$().cW(this, (-889275714), false);
  }
  w(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.fD;
      var x$2 = x$0.fD;
      return ((x === null) ? (x$2 === null) : x.w(x$2));
    } else {
      return false;
    }
  }
  ax() {
    return 1;
  }
  az() {
    return "ObserverError";
  }
  ay(n) {
    if ((n === 0)) {
      return this.fD;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  B() {
    return ("ObserverError: " + this.fD);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ba)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  ba: 1,
  au: 1,
  u: 1,
  a: 1,
  d: 1,
  v: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fF = null;
    this.fE = null;
    this.fF = error;
    this.fE = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eG(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eG(cause)), null, true, true);
    this.jH(cause);
  }
  bx() {
    return new $c_s_Product$$anon$1(this);
  }
  C() {
    return $m_s_util_hashing_MurmurHash3$().cW(this, (-889275714), false);
  }
  w(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.fF;
      var x$2 = x$0.fF;
      if (((x === null) ? (x$2 === null) : x.w(x$2))) {
        var x$3 = this.fE;
        var x$4 = x$0.fE;
        return ((x$3 === null) ? (x$4 === null) : x$3.w(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  ax() {
    return 2;
  }
  az() {
    return "ObserverErrorHandlingError";
  }
  ay(n) {
    if ((n === 0)) {
      return this.fF;
    }
    if ((n === 1)) {
      return this.fE;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  B() {
    return ((("ObserverErrorHandlingError: " + this.fF) + "; cause: ") + this.fE);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bb)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bb: 1,
  au: 1,
  u: 1,
  a: 1,
  d: 1,
  v: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.eW = null;
    this.eV = 0;
    this.eW = trx;
    this.eV = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  bx() {
    return new $c_s_Product$$anon$1(this);
  }
  C() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().l(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().a0(this.eW));
    acc = $m_sr_Statics$().l(acc, this.eV);
    return $m_sr_Statics$().K(acc, 2);
  }
  w(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.eV === x$0.eV)) {
        var x = this.eW;
        var x$2 = x$0.eW;
        return (x === x$2);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  ax() {
    return 2;
  }
  az() {
    return "TransactionDepthExceeded";
  }
  ay(n) {
    if ((n === 0)) {
      return this.eW;
    }
    if ((n === 1)) {
      return this.eV;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  B() {
    return ((("TransactionDepthExceeded: " + this.eW) + "; maxDepth: ") + this.eV);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bc)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bc: 1,
  au: 1,
  u: 1,
  a: 1,
  d: 1,
  v: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.gI();
}
var $d_Lcom_raquo_airstream_core_Signal = new $TypeData().i(1, "com.raquo.airstream.core.Signal", ({
  aC: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1
}));
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.ky = 1;
  $thiz.gP = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.gP = ((1 + $thiz.gP) | 0);
  $thiz.gO.ks.W();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.gO.kq.W(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().eC(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
    }
  }
  $x_1.oT(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.gO.kr.W();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.kX = null;
  this.dp = null;
  this.hY = null;
  this.hX = null;
  this.aR = null;
  this.kX = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.hY = initial;
  this.hX = new $c_Lcom_raquo_airstream_state_VarSignal(this.hY, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.aR = this.hX;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.e7 = (function() {
  return this.kX;
});
$p.e4 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ft = (function() {
  return this.aR;
});
$p.s9 = (function(value, transaction) {
  this.hY = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.hX, value, transaction);
});
$p.eO = (function() {
  return this.aR;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  dt: 1,
  ag: 1,
  av: 1,
  aD: 1,
  a1: 1,
  dv: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.im;
  if ((x === (void 0))) {
    $thiz.im = $m_sjs_js_defined$().pW($m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().c(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.mQ;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].sN() === propDomName)) {
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
  this.fL = null;
  this.cr = null;
  this.il = null;
  this.en = null;
  this.f2 = null;
  this.io = null;
  this.bu = null;
  this.mQ = null;
  this.im = null;
  this.io = tag;
  this.bu = ref;
  this.fL = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.mQ = (void 0);
  this.im = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.jj = (function() {
  return this.fL;
});
$p.cN = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fi(parentNode, this, (void 0));
});
$p.hv = (function() {
  return this.cr;
});
$p.oh = (function(x$0) {
  this.cr = x$0;
});
$p.eR = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.eM = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.qg = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().oF(this.bu)) {
    var x1 = this.io;
    if (false) {
      return x1.sB();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().mA;
  }
});
$p.rf = (function(propDomName) {
  var x = this.qg();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().r5(x, propDomName, 0));
});
$p.rN = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.rf(key.d1)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.d1)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.d1) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().ok(this.bu)) + "` that already has an input controller for `") + key.d1) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.d1);
      }
    }
  }
});
$p.B = (function() {
  return (("ReactiveHtmlElement(" + ((this.bu !== null) ? this.bu.outerHTML : ("tag=" + this.io.ir))) + ")");
});
$p.aJ = (function() {
  return this.bu;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  eF: 1,
  aE: 1,
  V: 1,
  aN: 1,
  bp: 1,
  eC: 1
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
  aP: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bu: 1,
  ah: 1,
  a: 1,
  a6: 1,
  a2: 1,
  ay: 1
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
  ay: 1
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
  ay: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.r === that.r) && ($thiz.s === that.s)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.r ^ $thiz.s);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().oR($thiz.r, $thiz.s);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bw)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bw: 1,
  ah: 1,
  a: 1,
  a6: 1,
  a2: 1,
  ay: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  f1: 1,
  bv: 1,
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
  var str = $m_jl_Character$().so(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  f6: 1,
  a: 1,
  a6: 1,
  aO: 1,
  a2: 1,
  ay: 1
}), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().i($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  f9: 1,
  aP: 1,
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
$p.qT = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.az = (function() {
  return "None";
});
$p.ax = (function() {
  return 0;
});
$p.ay = (function(x$1) {
  return $m_sr_Statics$().eI(x$1);
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.C = (function() {
  return 2433880;
});
$p.B = (function() {
  return "None";
});
$p.P = (function() {
  this.qT();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  fv: 1,
  bA: 1,
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
  this.cF = null;
  this.cF = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.P = (function() {
  return this.cF;
});
$p.az = (function() {
  return "Some";
});
$p.ax = (function() {
  return 1;
});
$p.ay = (function(x$1) {
  return ((x$1 === 0) ? this.cF : $m_sr_Statics$().eI(x$1));
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.C = (function() {
  return $m_s_util_hashing_MurmurHash3$().cW(this, (-889275714), false);
});
$p.B = (function() {
  return $m_sr_ScalaRunTime$().jb(this);
});
$p.w = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().x(this.cF, x$1.cF)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bB)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bB: 1,
  bA: 1,
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
$p.c5 = (function() {
  return this.bs();
});
$p.gt = (function(coll) {
  return this.bl().as(coll);
});
$p.eL = (function() {
  return this.bl().at();
});
$p.bR = (function() {
  return $f_sc_IterableOps__headOption__s_Option(this);
});
$p.a3 = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$p.ar = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.fl = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.i = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.c6 = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.e0 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.eN = (function() {
  return $m_sci_Nil$().ea(this);
});
$p.G = (function() {
  return (-1);
});
$p.gs = (function(coll) {
  return this.gt(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.bV = xs;
  $thiz.H = 0;
  $thiz.bK = $m_jl_reflect_Array$().co($thiz.bV);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.bV = null;
  this.H = 0;
  this.bK = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.G = (function() {
  return ((this.bK - this.H) | 0);
});
$p.u = (function() {
  return (this.H < this.bK);
});
$p.m = (function() {
  if ((this.H >= $m_jl_reflect_Array$().co(this.bV))) {
    $m_sc_Iterator$().S.m();
  }
  var r = $m_sr_ScalaRunTime$().eD(this.bV, this.H);
  this.H = ((1 + this.H) | 0);
  return r;
});
$p.dh = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.H + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.bK;
    } else {
      var a = this.bK;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.H = $x_1;
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
  return ((value < 0) ? 0 : ((value > $thiz.bW) ? $thiz.bW : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.iK = self;
  $thiz.d2 = 0;
  $thiz.bW = self.z();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.iK = null;
  this.d2 = 0;
  this.bW = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.G = (function() {
  return this.bW;
});
$p.u = (function() {
  return (this.bW > 0);
});
$p.m = (function() {
  if ((this.bW > 0)) {
    var r = this.iK.E(this.d2);
    this.d2 = ((1 + this.d2) | 0);
    this.bW = (((-1) + this.bW) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().S.m();
  }
});
$p.dh = (function(n) {
  if ((n > 0)) {
    this.d2 = ((this.d2 + n) | 0);
    var b = ((this.bW - n) | 0);
    this.bW = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gH = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bW = ((b < 0) ? 0 : b);
  this.d2 = ((this.d2 + formatFrom) | 0);
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
  this.g8 = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().S);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.pL = (function(elem) {
  this.g8 = this.g8.jl(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.b3 = (function(elem) {
  return this.pL(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  fW: 1,
  hk: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.cT(x, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => default$1.h(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.p();
  while (it.u()) {
    var next = it.m();
    f.eB(next.bj(), next.bc());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.p(), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bj();
      var v = x0$1$2$2.bc();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.eL();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.p();
  while (it.u()) {
    var next = it.m();
    if (seen.hp(f.h(next))) {
      builder.b3(next);
    }
  }
  return builder.b4();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.e6().at();
  b.bd($thiz);
  b.bd(suffix);
  return b.b4();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.iM)) {
    $thiz.iN = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.iM = true;
  }
  return $thiz.iN;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.iM) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.iN);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.iN = null;
  this.iO = null;
  this.iM = false;
  $n_sci_ArraySeq$ = this;
  this.iO = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.ju = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.hF($m_s_Array$().oy(it, tag)));
});
$p.hB = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().hF($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.hF = (function(x) {
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
$p.jt = (function(it, evidence$5) {
  return this.ju(it, evidence$5);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  gc: 1,
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
  this.bY = 0;
  this.fV = 0;
  this.es = null;
  this.bN = 0;
  this.d5 = null;
  this.fW = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bv);
  while (this.u()) {
    var originalHash = this.es.gu(this.bY);
    outer.fu(outer.cH, this.es.e5(this.bY), this.es.di(this.bY), originalHash, $m_sc_Hashing$().cw(originalHash), 0);
    this.bY = ((1 + this.bY) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.jQ = (function() {
  $m_sc_Iterator$().S.m();
  throw new $c_jl_ClassCastException();
});
$p.m = (function() {
  this.jQ();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  gg: 1,
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
  this.dF = 0;
  this.fd = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  gw: 1,
  gx: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dH = 0;
  this.dG = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  gy: 1,
  gz: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dI = 0;
  this.cL = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  gA: 1,
  gB: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.dC = 0;
  this.ha = null;
  this.bZ = 0;
  this.fX = null;
  this.fY = null;
  this.iV = 0;
  this.nl = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.iV = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.C = (function() {
  return $m_s_util_hashing_MurmurHash3$().p8(this.iV, $m_sr_Statics$().a0(this.nl), (-889275714));
});
$p.rD = (function() {
  if ((!this.u())) {
    $m_sc_Iterator$().S.m();
  }
  this.iV = this.ha.gu(this.dC);
  this.nl = this.ha.di(this.dC);
  this.dC = (((-1) + this.dC) | 0);
  return this;
});
$p.m = (function() {
  return this.rD();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  gD: 1,
  gd: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bY = 0;
  this.fV = 0;
  this.es = null;
  this.bN = 0;
  this.d5 = null;
  this.fW = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.rC = (function() {
  if ((!this.u())) {
    $m_sc_Iterator$().S.m();
  }
  var payload = this.es.jB(this.bY);
  this.bY = ((1 + this.bY) | 0);
  return payload;
});
$p.m = (function() {
  return this.rC();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  gE: 1,
  bY: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bP <= $thiz.aL)) {
    $m_sc_Iterator$().S.m();
  }
  $thiz.dK = ((1 + $thiz.dK) | 0);
  var slice = $thiz.iX.cY($thiz.dK);
  while ((slice.a.length === 0)) {
    $thiz.dK = ((1 + $thiz.dK) | 0);
    slice = $thiz.iX.cY($thiz.dK);
  }
  $thiz.g2 = $thiz.ev;
  var count = $thiz.nn;
  var idx = $thiz.dK;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.dJ = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x1 = $thiz.dJ;
  switch (x1) {
    case 1: {
      $thiz.b8 = slice;
      break;
    }
    case 2: {
      $thiz.b9 = slice;
      break;
    }
    case 3: {
      $thiz.bE = slice;
      break;
    }
    case 4: {
      $thiz.ct = slice;
      break;
    }
    case 5: {
      $thiz.eu = slice;
      break;
    }
    case 6: {
      $thiz.iW = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.ev = (($thiz.g2 + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.dJ) | 0))))) | 0);
  if (($thiz.ev > $thiz.da)) {
    $thiz.ev = $thiz.da;
  }
  if (($thiz.dJ > 1)) {
    $thiz.fe = (((-1) + (1 << Math.imul(5, $thiz.dJ))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.aL - $thiz.bP) | 0) + $thiz.da) | 0);
  if ((pos === $thiz.ev)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dJ > 1)) {
    var io = ((pos - $thiz.g2) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.fe ^ io));
    $thiz.fe = io;
  }
  $thiz.bP = (($thiz.bP - $thiz.aL) | 0);
  var a = $thiz.b8.a.length;
  var b = $thiz.bP;
  $thiz.d9 = ((a < b) ? a : b);
  $thiz.aL = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.b8 = $thiz.b9.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.b9 = $thiz.bE.a[(31 & ((io >>> 10) | 0))];
    $thiz.b8 = $thiz.b9.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bE = $thiz.ct.a[(31 & ((io >>> 15) | 0))];
    $thiz.b9 = $thiz.bE.a[0];
    $thiz.b8 = $thiz.b9.a[0];
  } else if ((xor < 33554432)) {
    $thiz.ct = $thiz.eu.a[(31 & ((io >>> 20) | 0))];
    $thiz.bE = $thiz.ct.a[0];
    $thiz.b9 = $thiz.bE.a[0];
    $thiz.b8 = $thiz.b9.a[0];
  } else {
    $thiz.eu = $thiz.iW.a[((io >>> 25) | 0)];
    $thiz.ct = $thiz.eu.a[0];
    $thiz.bE = $thiz.ct.a[0];
    $thiz.b9 = $thiz.bE.a[0];
    $thiz.b8 = $thiz.b9.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.b8 = $thiz.b9.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.b9 = $thiz.bE.a[(31 & ((io >>> 10) | 0))];
    $thiz.b8 = $thiz.b9.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bE = $thiz.ct.a[(31 & ((io >>> 15) | 0))];
    $thiz.b9 = $thiz.bE.a[(31 & ((io >>> 10) | 0))];
    $thiz.b8 = $thiz.b9.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.ct = $thiz.eu.a[(31 & ((io >>> 20) | 0))];
    $thiz.bE = $thiz.ct.a[(31 & ((io >>> 15) | 0))];
    $thiz.b9 = $thiz.bE.a[(31 & ((io >>> 10) | 0))];
    $thiz.b8 = $thiz.b9.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.eu = $thiz.iW.a[((io >>> 25) | 0)];
    $thiz.ct = $thiz.eu.a[(31 & ((io >>> 20) | 0))];
    $thiz.bE = $thiz.ct.a[(31 & ((io >>> 15) | 0))];
    $thiz.b9 = $thiz.bE.a[(31 & ((io >>> 10) | 0))];
    $thiz.b8 = $thiz.b9.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.iX = null;
  this.da = 0;
  this.nn = 0;
  this.b8 = null;
  this.b9 = null;
  this.bE = null;
  this.ct = null;
  this.eu = null;
  this.iW = null;
  this.d9 = 0;
  this.aL = 0;
  this.fe = 0;
  this.bP = 0;
  this.dK = 0;
  this.dJ = 0;
  this.g2 = 0;
  this.ev = 0;
  this.iX = v;
  this.da = totalLength;
  this.nn = sliceCount;
  this.b8 = v.k;
  this.d9 = this.b8.a.length;
  this.aL = 0;
  this.fe = 0;
  this.bP = this.da;
  this.dK = 0;
  this.dJ = 1;
  this.g2 = 0;
  this.ev = this.d9;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.G = (function() {
  return ((this.bP - this.aL) | 0);
});
$p.u = (function() {
  return (this.bP > this.aL);
});
$p.m = (function() {
  if ((this.aL === this.d9)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.b8.a[this.aL];
  this.aL = ((1 + this.aL) | 0);
  return r;
});
$p.dh = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.aL - this.bP) | 0) + this.da) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.da;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.da)) {
      this.aL = 0;
      this.bP = 0;
      this.d9 = 0;
    } else {
      while ((newpos >= this.ev)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.g2) | 0);
      if ((this.dJ > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.fe ^ io));
        this.fe = io;
      }
      this.d9 = this.b8.a.length;
      this.aL = (31 & io);
      this.bP = ((this.aL + ((this.da - newpos) | 0)) | 0);
      if ((this.d9 > this.bP)) {
        this.d9 = this.bP;
      }
    }
  }
  return this;
});
$p.c6 = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().co(xs);
  var srcLen = ((this.bP - this.aL) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.aL === this.d9)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.b8.a.length - this.aL) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.b8;
      var srcPos = this.aL;
      var destPos = ((start + copied) | 0);
      src.F(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().gn(this.b8, this.aL, xs, ((start + copied) | 0), count);
    }
    this.aL = ((this.aL + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  gG: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  B: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.j2 = 0;
  $thiz.ns = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.j2 = 0;
  this.ns = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.bg = (function(size) {
  if ((this.j2 < size)) {
    this.s5(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.j4 = null;
  this.nu = null;
  $n_scm_ArraySeq$ = this;
  this.j4 = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.nu = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.qK = (function(it, evidence$2) {
  return this.jL($m_s_Array$().oy(it, evidence$2));
});
$p.hB = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.b5()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().jL(x$2$2))));
});
$p.jL = (function(x) {
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
$p.jt = (function(it, evidence$5) {
  return this.qK(it, evidence$5);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  h7: 1,
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
  this.dW = 0;
  this.dc = null;
  this.g7 = 0;
  this.g6 = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.jr = (function(nd) {
  return nd.ex;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  hf: 1,
  b5: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.dW = 0;
  this.dc = null;
  this.g7 = 0;
  this.g6 = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.jr = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  hg: 1,
  b5: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.dW = 0;
  this.dc = null;
  this.g7 = 0;
  this.g6 = null;
  this.j7 = 0;
  this.ny = null;
  this.ny = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.j7 = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.C = (function() {
  return this.j7;
});
$p.jr = (function(nd) {
  this.j7 = this.ny.hD(nd.dd);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  hh: 1,
  b5: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.g9 = null;
  this.g9 = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.w = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.C = (function() {
  return $m_sr_Statics$().a0(this.g9);
});
$p.B = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.g9);
});
$p.b5 = (function() {
  return this.g9;
});
$p.bI = (function(len) {
  return this.g9.a1.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  hv: 1,
  F: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.bV = null;
  this.H = 0;
  this.bK = 0;
  this.iC = null;
  this.iC = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.rE = (function() {
  if ((this.H >= this.iC.a.length)) {
    $m_sc_Iterator$().S.m();
  }
  var r = this.iC.a[this.H];
  this.H = ((1 + this.H) | 0);
  return r;
});
$p.m = (function() {
  return this.rE();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  fF: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.bV = null;
  this.H = 0;
  this.bK = 0;
  this.iD = null;
  this.iD = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.rF = (function() {
  if ((this.H >= this.iD.a.length)) {
    $m_sc_Iterator$().S.m();
  }
  var r = this.iD.a[this.H];
  this.H = ((1 + this.H) | 0);
  return r;
});
$p.m = (function() {
  return $bC(this.rF());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  fG: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.bV = null;
  this.H = 0;
  this.bK = 0;
  this.iE = null;
  this.iE = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.rG = (function() {
  if ((this.H >= this.iE.a.length)) {
    $m_sc_Iterator$().S.m();
  }
  var r = this.iE.a[this.H];
  this.H = ((1 + this.H) | 0);
  return r;
});
$p.m = (function() {
  return this.rG();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  fH: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.bV = null;
  this.H = 0;
  this.bK = 0;
  this.iF = null;
  this.iF = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.rH = (function() {
  if ((this.H >= this.iF.a.length)) {
    $m_sc_Iterator$().S.m();
  }
  var r = this.iF.a[this.H];
  this.H = ((1 + this.H) | 0);
  return r;
});
$p.m = (function() {
  return this.rH();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  fI: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.bV = null;
  this.H = 0;
  this.bK = 0;
  this.iG = null;
  this.iG = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.rI = (function() {
  if ((this.H >= this.iG.a.length)) {
    $m_sc_Iterator$().S.m();
  }
  var r = this.iG.a[this.H];
  this.H = ((1 + this.H) | 0);
  return r;
});
$p.m = (function() {
  return this.rI();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  fJ: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.bV = null;
  this.H = 0;
  this.bK = 0;
  this.iH = null;
  this.iH = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.rJ = (function() {
  if ((this.H >= this.iH.a.length)) {
    $m_sc_Iterator$().S.m();
  }
  var t = this.iH.a[this.H];
  var lo = t.r;
  var hi = t.s;
  this.H = ((1 + this.H) | 0);
  return new $c_RTLong(lo, hi);
});
$p.m = (function() {
  return this.rJ();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  fK: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.bV = null;
  this.H = 0;
  this.bK = 0;
  this.iI = null;
  this.iI = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.rK = (function() {
  if ((this.H >= this.iI.a.length)) {
    $m_sc_Iterator$().S.m();
  }
  var r = this.iI.a[this.H];
  this.H = ((1 + this.H) | 0);
  return r;
});
$p.m = (function() {
  return this.rK();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  fL: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.bV = null;
  this.H = 0;
  this.bK = 0;
  this.n5 = null;
  this.n5 = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.rL = (function() {
  if ((this.H >= this.n5.a.length)) {
    $m_sc_Iterator$().S.m();
  }
  this.H = ((1 + this.H) | 0);
});
$p.m = (function() {
  this.rL();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  fM: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.bV = null;
  this.H = 0;
  this.bK = 0;
  this.iJ = null;
  this.iJ = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.rM = (function() {
  if ((this.H >= this.iJ.a.length)) {
    $m_sc_Iterator$().S.m();
  }
  var r = this.iJ.a[this.H];
  this.H = ((1 + this.H) | 0);
  return r;
});
$p.m = (function() {
  return this.rM();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  fN: 1,
  a3: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.c5() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.X)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.j2 = 0;
  this.ns = 0;
  this.fg = null;
  this.nt = false;
  this.j3 = null;
  this.fg = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.nt = (elementClass === $d_C.l());
  this.j3 = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.nT = (function(elem) {
  var unboxedElem = (this.nt ? $uC(elem) : ((elem === null) ? this.fg.a1.z : elem));
  this.j3.push(unboxedElem);
  return this;
});
$p.pE = (function(xs) {
  var it = xs.p();
  while (it.u()) {
    this.nT(it.m());
  }
  return this;
});
$p.s5 = (function(size) {
});
$p.b4 = (function() {
  var elemRuntimeClass = ((this.fg === $d_V.l()) ? $d_jl_Void.l() : (((this.fg === $d_sr_Null$.l()) || (this.fg === $d_sr_Nothing$.l())) ? $d_O.l() : this.fg));
  return elemRuntimeClass.a1.r().w(this.j3);
});
$p.B = (function() {
  return "ArrayBuilder.generic";
});
$p.bd = (function(elems) {
  return this.pE(elems);
});
$p.b3 = (function(elem) {
  return this.nT(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  h6: 1,
  h5: 1,
  ac: 1,
  M: 1,
  J: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.iK = null;
  this.d2 = 0;
  this.bW = 0;
  this.nx = null;
  this.nw = 0;
  this.nx = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.nw = (mutationCount.W() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.u = (function() {
  $m_scm_MutationTracker$().od(this.nw, (this.nx.W() | 0), "mutation occurred during iteration");
  return (this.bW > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  hb: 1,
  bH: 1,
  p: 1,
  r: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.a6 = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.B = (function() {
  return this.a6;
});
$p.w = (function(that) {
  return (this === that);
});
$p.C = (function() {
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
  gv() {
    return $dp_toString__T(this.ad);
  }
  az() {
    return "JavaScriptException";
  }
  ax() {
    return 1;
  }
  ay(x$1) {
    return ((x$1 === 0) ? this.ad : $m_sr_Statics$().eI(x$1));
  }
  bx() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  C() {
    return $m_s_util_hashing_MurmurHash3$().cW(this, (-889275714), false);
  }
  w(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().x(this.ad, x$1.ad)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  cq: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1,
  v: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.hA() === (void 0)))) {
    $thiz.ho($m_Lcom_raquo_airstream_core_Signal$().oK());
  }
  $thiz.jO(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.hA();
  if ((x === (void 0))) {
    $thiz.ho($m_Lcom_raquo_airstream_core_Signal$().oK());
    var nextValue = $thiz.hu();
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
  var isError = nextValue.jJ();
  var elem = false;
  elem = false;
  $thiz.cx(false);
  var this$ = $thiz.cR();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.e9(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.cV();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.gD(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cx(true);
  var x = $thiz.e8();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].W();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cB(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cx(false);
  var this$ = $thiz.cR();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.dk(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cB(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.cV();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.hC(nextValue, transaction);
  }
  $thiz.cx(true);
  var x = $thiz.e8();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].W();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.cx(false);
  var this$ = $thiz.cR();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.gA(nextError);
  }
  var this$$1 = $thiz.cV();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.jU(nextError, transaction);
  }
  $thiz.cx(true);
  var x = $thiz.e8();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].W();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, _$2, transaction);
  })));
}
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.i())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.v();
      n = temp$n;
      s = temp$s;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.bm(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.eL();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.p();
    var different = false;
    while (it.u()) {
      var next = it.m();
      if (seen.hp(f.h(next))) {
        builder.b3(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.b4() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.a6 = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.b5 = (function() {
  return $d_Z.l();
});
$p.bI = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.a6 = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.b5 = (function() {
  return $d_B.l();
});
$p.bI = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.a6 = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.b5 = (function() {
  return $d_C.l();
});
$p.bI = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.a6 = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.b5 = (function() {
  return $d_D.l();
});
$p.bI = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.a6 = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.b5 = (function() {
  return $d_F.l();
});
$p.bI = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.a6 = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.b5 = (function() {
  return $d_I.l();
});
$p.bI = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.a6 = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.b5 = (function() {
  return $d_J.l();
});
$p.bI = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.df = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.B = (function() {
  return this.df;
});
$p.w = (function(that) {
  return (this === that);
});
$p.C = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.a6 = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.b5 = (function() {
  return $d_S.l();
});
$p.bI = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.a6 = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.b5 = (function() {
  return $d_V.l();
});
$p.bI = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
function $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray($thiz) {
  return $thiz.fz.map(((_$1) => _$1.fh()));
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V($thiz) {
  var arr = $thiz.fz;
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
  var arr = $thiz.fz;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    var parent = arr[i];
    var ix = i;
    var newLastUpdateId = parent.fh();
    if ((newLastUpdateId !== ($thiz.nN()[ix] | 0))) {
      $thiz.nN()[ix] = newLastUpdateId;
      var ev$3 = true;
      elem = ev$3;
    }
    i = ((1 + i) | 0);
  }
  return elem;
}
function $f_Lcom_raquo_airstream_common_MultiParentSignal__updateCurrentValueFromParent__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, $thiz.jk());
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
$p.bl = (function() {
  return $m_sc_View$();
});
$p.B = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bs = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.b6() === that.b6())) {
      try {
        return $thiz.sg(that);
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
  this.df = null;
  this.df = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.b5 = (function() {
  return $d_O.l();
});
$p.bI = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  hw: 1,
  aJ: 1,
  aI: 1,
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
  this.a6 = null;
  this.a6 = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  hy: 1,
  hx: 1,
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
  this.a6 = null;
  this.a6 = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
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
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.a6 = null;
  this.a6 = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
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
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.a6 = null;
  this.a6 = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
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
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.a6 = null;
  this.a6 = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
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
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.a6 = null;
  this.a6 = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
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
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.a6 = null;
  this.a6 = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
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
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.df = null;
  this.df = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.b5 = (function() {
  return $d_sr_Nothing$.l();
});
$p.bI = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  hL: 1,
  aJ: 1,
  aI: 1,
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
  this.df = null;
  this.df = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.b5 = (function() {
  return $d_sr_Null$.l();
});
$p.bI = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  hM: 1,
  aJ: 1,
  aI: 1,
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
  this.df = null;
  this.df = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.b5 = (function() {
  return $d_O.l();
});
$p.bI = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  hN: 1,
  aJ: 1,
  aI: 1,
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
  this.a6 = null;
  this.a6 = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  hP: 1,
  hO: 1,
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
  this.a6 = null;
  this.a6 = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
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
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
/** @constructor */
function $c_Lccrystal_site_Tab$$anon$1() {
  this.ee = null;
  this.ed = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "manifesto", "Manifesto & Architecture", "\u25c8");
}
$p = $c_Lccrystal_site_Tab$$anon$1.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$1;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$1() {
}
$h_Lccrystal_site_Tab$$anon$1.prototype = $p;
$p.ax = (function() {
  return 0;
});
$p.ay = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.az = (function() {
  return "Manifesto";
});
$p.B = (function() {
  return "Manifesto";
});
var $d_Lccrystal_site_Tab$$anon$1 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$1, "ccrystal.site.Tab$$anon$1", ({
  cC: 1,
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
  this.ee = null;
  this.ed = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "explorer", "Interactive DAG Explorer", "\u2b21");
}
$p = $c_Lccrystal_site_Tab$$anon$2.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$2;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$2() {
}
$h_Lccrystal_site_Tab$$anon$2.prototype = $p;
$p.ax = (function() {
  return 0;
});
$p.ay = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.az = (function() {
  return "Explorer";
});
$p.B = (function() {
  return "Explorer";
});
var $d_Lccrystal_site_Tab$$anon$2 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$2, "ccrystal.site.Tab$$anon$2", ({
  cD: 1,
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
  this.ee = null;
  this.ed = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "quickstart", "Install & Quickstart", "\u26a1");
}
$p = $c_Lccrystal_site_Tab$$anon$3.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$3;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$3() {
}
$h_Lccrystal_site_Tab$$anon$3.prototype = $p;
$p.ax = (function() {
  return 0;
});
$p.ay = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.az = (function() {
  return "Quickstart";
});
$p.B = (function() {
  return "Quickstart";
});
var $d_Lccrystal_site_Tab$$anon$3 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$3, "ccrystal.site.Tab$$anon$3", ({
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
function $c_Lccrystal_site_Tab$$anon$4() {
  this.ee = null;
  this.ed = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "mcp", "Native MCP Reference", "\u2699");
}
$p = $c_Lccrystal_site_Tab$$anon$4.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$4;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$4() {
}
$h_Lccrystal_site_Tab$$anon$4.prototype = $p;
$p.ax = (function() {
  return 0;
});
$p.ay = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.az = (function() {
  return "Mcp";
});
$p.B = (function() {
  return "Mcp";
});
var $d_Lccrystal_site_Tab$$anon$4 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$4, "ccrystal.site.Tab$$anon$4", ({
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
function $c_Lccrystal_site_Tab$$anon$5() {
  this.ee = null;
  this.ed = null;
  $ct_Lccrystal_site_Tab__T__T__T__(this, "agent-ingestion", "Agent Ingestion (llms.txt)", "\ud83e\udd16");
}
$p = $c_Lccrystal_site_Tab$$anon$5.prototype = new $h_Lccrystal_site_Tab();
$p.constructor = $c_Lccrystal_site_Tab$$anon$5;
/** @constructor */
function $h_Lccrystal_site_Tab$$anon$5() {
}
$h_Lccrystal_site_Tab$$anon$5.prototype = $p;
$p.ax = (function() {
  return 0;
});
$p.ay = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.az = (function() {
  return "AgentIngestion";
});
$p.B = (function() {
  return "AgentIngestion";
});
var $d_Lccrystal_site_Tab$$anon$5 = new $TypeData().i($c_Lccrystal_site_Tab$$anon$5, "ccrystal.site.Tab$$anon$5", ({
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
function $c_Lccrystal_site_TabExplorer$Scenario$$anon$1() {
  this.fy = null;
  $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__(this, "inception", "1. Track Inception", "Goal defined, acceptance criteria seeded, single init transition.");
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$$anon$1.prototype = new $h_Lccrystal_site_TabExplorer$Scenario();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$$anon$1;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$$anon$1() {
}
$h_Lccrystal_site_TabExplorer$Scenario$$anon$1.prototype = $p;
$p.ax = (function() {
  return 0;
});
$p.ay = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.az = (function() {
  return "Inception";
});
$p.B = (function() {
  return "Inception";
});
var $d_Lccrystal_site_TabExplorer$Scenario$$anon$1 = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$$anon$1, "ccrystal.site.TabExplorer$Scenario$$anon$1", ({
  cK: 1,
  aA: 1,
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
  this.fy = null;
  $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__(this, "spike", "2. Active Engineering Spike", "Task 1 completed, git_worktree transient lease active, checkpoint recorded.");
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$$anon$2.prototype = new $h_Lccrystal_site_TabExplorer$Scenario();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$$anon$2;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$$anon$2() {
}
$h_Lccrystal_site_TabExplorer$Scenario$$anon$2.prototype = $p;
$p.ax = (function() {
  return 0;
});
$p.ay = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.az = (function() {
  return "ActiveSpike";
});
$p.B = (function() {
  return "ActiveSpike";
});
var $d_Lccrystal_site_TabExplorer$Scenario$$anon$2 = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$$anon$2, "ccrystal.site.TabExplorer$Scenario$$anon$2", ({
  cL: 1,
  aA: 1,
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
  this.fy = null;
  $ct_Lccrystal_site_TabExplorer$Scenario__T__T__T__(this, "artifact", "3. World-State & Artifacts", "Hardware test rig artifact registered as precondition; living context grounded.");
}
$p = $c_Lccrystal_site_TabExplorer$Scenario$$anon$3.prototype = new $h_Lccrystal_site_TabExplorer$Scenario();
$p.constructor = $c_Lccrystal_site_TabExplorer$Scenario$$anon$3;
/** @constructor */
function $h_Lccrystal_site_TabExplorer$Scenario$$anon$3() {
}
$h_Lccrystal_site_TabExplorer$Scenario$$anon$3.prototype = $p;
$p.ax = (function() {
  return 0;
});
$p.ay = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.az = (function() {
  return "PhysicalArtifact";
});
$p.B = (function() {
  return "PhysicalArtifact";
});
var $d_Lccrystal_site_TabExplorer$Scenario$$anon$3 = new $TypeData().i($c_Lccrystal_site_TabExplorer$Scenario$$anon$3, "ccrystal.site.TabExplorer$Scenario$$anon$3", ({
  cM: 1,
  aA: 1,
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
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.gQ, $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.gQ, $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.kw = null;
  this.kv = false;
  this.kx = null;
  this.kt = null;
  this.ku = null;
  this.kz = false;
  this.ky = 0;
  this.gP = 0;
  this.gO = null;
  this.kw = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.gO = makeConfig.pU(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.gP)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.e7 = (function() {
  return this.kw;
});
$p.e4 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.kv;
});
$p.e8 = (function() {
  return this.kx;
});
$p.cx = (function(x$1) {
  this.kv = x$1;
});
$p.fq = (function(x$1) {
  this.kx = x$1;
});
$p.w = (function(obj) {
  return (this === obj);
});
$p.C = (function() {
  return $systemIdentityHashCode(this);
});
$p.gz = (function(observer) {
});
$p.cR = (function() {
  return this.kt;
});
$p.cV = (function() {
  return this.ku;
});
$p.gK = (function() {
  return this.kz;
});
$p.eS = (function(x$1) {
  this.kz = x$1;
});
$p.gl = (function(x$0) {
  this.kt = x$0;
});
$p.gm = (function(x$0) {
  this.ku = x$0;
});
$p.gr = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eP = (function() {
  return this.ky;
});
$p.gE = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.gB = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.gC = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.eO = (function() {
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
  this.l2 = null;
  this.l1 = false;
  this.l3 = null;
  this.hZ = 0;
  this.kZ = null;
  this.l0 = null;
  this.l6 = false;
  this.i0 = null;
  this.l4 = null;
  this.l5 = 0;
  this.l4 = parentDisplayName;
  this.l2 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hZ = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.i0 = (void 0);
  this.l5 = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.e7 = (function() {
  return this.l2;
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.l1;
});
$p.e8 = (function() {
  return this.l3;
});
$p.cx = (function(x$1) {
  this.l1 = x$1;
});
$p.fq = (function(x$1) {
  this.l3 = x$1;
});
$p.gC = (function() {
});
$p.w = (function(obj) {
  return (this === obj);
});
$p.C = (function() {
  return $systemIdentityHashCode(this);
});
$p.fh = (function() {
  return this.hZ;
});
$p.ho = (function(x$1) {
  this.hZ = x$1;
});
$p.ft = (function() {
  return this;
});
$p.gB = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.gz = (function(observer) {
  observer.e9($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cR = (function() {
  return this.kZ;
});
$p.cV = (function() {
  return this.l0;
});
$p.gK = (function() {
  return this.l6;
});
$p.eS = (function(x$1) {
  this.l6 = x$1;
});
$p.gl = (function(x$0) {
  this.kZ = x$0;
});
$p.gm = (function(x$0) {
  this.l0 = x$0;
});
$p.hA = (function() {
  return this.i0;
});
$p.jO = (function(x$1) {
  this.i0 = x$1;
});
$p.gr = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gI = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.eP = (function() {
  return this.l5;
});
$p.hu = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gE = (function() {
});
$p.e4 = (function() {
  return (this.l4.W() + ".signal");
});
$p.eO = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  dy: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1,
  aC: 1,
  aw: 1,
  aM: 1,
  du: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.ht($thiz)) {
        return $thiz.fr(o);
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
  this.nf = null;
  this.nf = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.p = (function() {
  return this.nf.W();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  g8: 1,
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
  this.h9 = null;
  this.ng = null;
  this.h9 = underlying;
  this.ng = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.p = (function() {
  return new $c_sc_Iterator$$anon$8(this.h9.p(), this.ng);
});
$p.G = (function() {
  return ((this.h9.G() === 0) ? 0 : (-1));
});
$p.i = (function() {
  return this.h9.i();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  g9: 1,
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
  $thiz.eq = underlying;
  $thiz.fT = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.eq = null;
  this.fT = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.p = (function() {
  return new $c_sc_Iterator$$anon$9(this.eq.p(), this.fT);
});
$p.G = (function() {
  return this.eq.G();
});
$p.i = (function() {
  return this.eq.i();
});
var $d_sc_View$Map = new $TypeData().i($c_sc_View$Map, "scala.collection.View$Map", ({
  aG: 1,
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
  $thiz.hS = ($thiz.dl !== null);
  $thiz.gR = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.dl);
  if ($thiz.hS) {
    var newParentLastUpdateId = $thiz.dl.fh();
    if ((newParentLastUpdateId !== $thiz.gR)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.hu(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.gR = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.hS) {
    $thiz.gR = $thiz.dl.fh();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.dl, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.dl, $thiz);
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
$p.w = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.bs = (function() {
  return "Set";
});
$p.B = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.sg = (function(that) {
  return this.fl(that);
});
$p.h = (function(v1) {
  return this.bf(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.b6() === o.b6())) {
      try {
        return $thiz.fl(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().x(x2.cT(kv$2$2.bj(), $m_sc_Map$().nd), kv$2$2.bc())))(o)));
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
  this.kd = null;
  this.kc = false;
  this.ke = null;
  this.hG = 0;
  this.ka = null;
  this.kb = null;
  this.kf = false;
  this.hH = null;
  this.k7 = null;
  this.k8 = false;
  this.fz = null;
  this.k9 = null;
  this.hJ = 0;
  this.hI = null;
  this.fz = parents;
  this.k9 = combinator;
  this.kd = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hG = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hH = (void 0);
  this.hJ = ((1 + $m_Lcom_raquo_airstream_core_Protected$().rw(0, parents)) | 0);
  this.hI = parents.map(((parent) => $m_Lcom_raquo_airstream_common_InternalParentObserver$().qP(parent, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((_$1, trx) => {
    $f_Lcom_raquo_airstream_combine_CombineObservable__onInputsReady__Lcom_raquo_airstream_core_Transaction__V(this, trx);
  })))));
}
$p = $c_Lcom_raquo_airstream_combine_CombineSignalN.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_combine_CombineSignalN;
/** @constructor */
function $h_Lcom_raquo_airstream_combine_CombineSignalN() {
}
$h_Lcom_raquo_airstream_combine_CombineSignalN.prototype = $p;
$p.e7 = (function() {
  return this.kd;
});
$p.e4 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.kc;
});
$p.e8 = (function() {
  return this.ke;
});
$p.cx = (function(x$1) {
  this.kc = x$1;
});
$p.fq = (function(x$1) {
  this.ke = x$1;
});
$p.w = (function(obj) {
  return (this === obj);
});
$p.C = (function() {
  return $systemIdentityHashCode(this);
});
$p.fh = (function() {
  return this.hG;
});
$p.ho = (function(x$1) {
  this.hG = x$1;
});
$p.ft = (function() {
  return this;
});
$p.gz = (function(observer) {
  observer.e9($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cR = (function() {
  return this.ka;
});
$p.cV = (function() {
  return this.kb;
});
$p.gK = (function() {
  return this.kf;
});
$p.eS = (function(x$1) {
  this.kf = x$1;
});
$p.gl = (function(x$0) {
  this.ka = x$0;
});
$p.gm = (function(x$0) {
  this.kb = x$0;
});
$p.hA = (function() {
  return this.hH;
});
$p.jO = (function(x$1) {
  this.hH = x$1;
});
$p.gI = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gr = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.nN = (function() {
  if ((!this.k8)) {
    this.k7 = $f_Lcom_raquo_airstream_common_MultiParentSignal___parentLastUpdateIds__Lcom_raquo_ew_JsArray(this);
    this.k8 = true;
  }
  return this.k7;
});
$p.gE = (function() {
  $f_Lcom_raquo_airstream_common_MultiParentSignal__onWillStart__V(this);
});
$p.gB = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStart__V(this);
});
$p.gC = (function() {
  $f_Lcom_raquo_airstream_combine_CombineObservable__onStop__V(this);
});
$p.eP = (function() {
  return this.hJ;
});
$p.jk = (function() {
  return $m_Lcom_raquo_airstream_combine_CombineObservable$().rl(this.fz.map(((_$2) => _$2.gI())), this.k9);
});
$p.hu = (function() {
  return this.jk();
});
$p.eO = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_combine_CombineSignalN = new $TypeData().i($c_Lcom_raquo_airstream_combine_CombineSignalN, "com.raquo.airstream.combine.CombineSignalN", ({
  cS: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1,
  aC: 1,
  aw: 1,
  aM: 1,
  cZ: 1,
  da: 1,
  cQ: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.kE = null;
  this.kD = false;
  this.kF = null;
  this.kA = null;
  this.kC = null;
  this.kH = false;
  this.gQ = null;
  this.kB = null;
  this.kG = 0;
  this.gQ = parent;
  this.kB = fn;
  this.kE = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kG = ((1 + parent.eP()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.e7 = (function() {
  return this.kE;
});
$p.e4 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.kD;
});
$p.e8 = (function() {
  return this.kF;
});
$p.cx = (function(x$1) {
  this.kD = x$1;
});
$p.fq = (function(x$1) {
  this.kF = x$1;
});
$p.w = (function(obj) {
  return (this === obj);
});
$p.C = (function() {
  return $systemIdentityHashCode(this);
});
$p.gz = (function(observer) {
});
$p.cR = (function() {
  return this.kA;
});
$p.cV = (function() {
  return this.kC;
});
$p.gK = (function() {
  return this.kH;
});
$p.eS = (function(x$1) {
  this.kH = x$1;
});
$p.gl = (function(x$0) {
  this.kA = x$0;
});
$p.gm = (function(x$0) {
  this.kC = x$0;
});
$p.gr = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gE = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.gQ);
});
$p.gB = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gC = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.gD = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eP = (function() {
  return this.kG;
});
$p.hC = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.kB.h(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().eC(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
    }
  }
  $x_1.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.i())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.P(), transaction);
    }
  })));
});
$p.jU = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eO = (function() {
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
  aB: 1,
  d1: 1,
  cV: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.kL = null;
  this.kK = false;
  this.kM = null;
  this.hQ = 0;
  this.kI = null;
  this.kJ = null;
  this.kO = false;
  this.hR = null;
  this.hS = false;
  this.gR = 0;
  this.dl = null;
  this.hT = null;
  this.hU = null;
  this.kN = 0;
  this.dl = parent;
  this.hT = project;
  this.hU = recover;
  this.kL = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hQ = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hR = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.kN = ((1 + parent.eP()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.e7 = (function() {
  return this.kL;
});
$p.e4 = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.B = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fn = (function() {
  return this.kK;
});
$p.e8 = (function() {
  return this.kM;
});
$p.cx = (function(x$1) {
  this.kK = x$1;
});
$p.fq = (function(x$1) {
  this.kM = x$1;
});
$p.w = (function(obj) {
  return (this === obj);
});
$p.C = (function() {
  return $systemIdentityHashCode(this);
});
$p.fh = (function() {
  return this.hQ;
});
$p.ho = (function(x$1) {
  this.hQ = x$1;
});
$p.ft = (function() {
  return this;
});
$p.gz = (function(observer) {
  observer.e9($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cR = (function() {
  return this.kI;
});
$p.cV = (function() {
  return this.kJ;
});
$p.gK = (function() {
  return this.kO;
});
$p.eS = (function(x$1) {
  this.kO = x$1;
});
$p.gl = (function(x$0) {
  this.kI = x$0;
});
$p.gm = (function(x$0) {
  this.kJ = x$0;
});
$p.hA = (function() {
  return this.hR;
});
$p.jO = (function(x$1) {
  this.hR = x$1;
});
$p.gI = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gr = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.hC = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.jU = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gE = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.gB = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.gC = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.eP = (function() {
  return this.kN;
});
$p.gD = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.hU;
    if (this$2.i()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.P();
      try {
        var $x_1 = new $c_s_util_Success(x0.c4(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().eC(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
        }
      }
      $x_1.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.i())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.P(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.jM(this.hT), transaction);
  })));
});
$p.hu = (function() {
  var originalValue = this.dl.gI().jM(this.hT);
  return originalValue.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.hU;
    if (this$2.i()) {
      return originalValue;
    } else {
      var x0 = this$2.P();
      try {
        var $x_1 = new $c_s_util_Success(x0.c4(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().eC(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ad : e$2);
        }
      }
      return $x_1.cn(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.i() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.P())));
          return (this$7.i() ? originalValue : this$7.P());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => originalValue)));
});
$p.eO = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  dl: 1,
  ag: 1,
  a1: 1,
  al: 1,
  am: 1,
  av: 1,
  aC: 1,
  aw: 1,
  aM: 1,
  aB: 1,
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
$p.ht = (function(that) {
  return true;
});
$p.w = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.C = (function() {
  return $m_s_util_hashing_MurmurHash3$().p3(this);
});
$p.B = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cu = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.jI = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.bm = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.i = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fr = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.c4 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cp = (function(x) {
  return this.jI((x | 0));
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
$p.eJ = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.bs = (function() {
  return "SeqView";
});
$p.cu = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bm = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.i = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.a3 = (function(f) {
  return this.eJ(f);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.q)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.az)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.ls = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.pg = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
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
$p.w = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.C = (function() {
  return $m_s_util_hashing_MurmurHash3$().ru(this);
});
$p.bs = (function() {
  return "Map";
});
$p.B = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.gt = (function(coll) {
  return this.jN().as(coll);
});
$p.eL = (function() {
  return this.jN().at();
});
$p.c4 = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eF = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.cp = (function(key) {
  return this.bf(key);
});
$p.e0 = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.ep = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.ep = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.E = (function(idx) {
  return this.ep.E(idx);
});
$p.z = (function() {
  return this.ep.z();
});
$p.p = (function() {
  return this.ep.p();
});
$p.G = (function() {
  return this.ep.G();
});
$p.i = (function() {
  return this.ep.i();
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
  $thiz.fR = underlying;
  $thiz.h8 = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.eq = null;
  this.fT = null;
  this.fR = null;
  this.h8 = null;
}
$p = $c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$p.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
}
$h_sc_SeqView$Map.prototype = $p;
$p.eJ = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.bs = (function() {
  return "SeqView";
});
$p.cu = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bm = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.i = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.E = (function(idx) {
  return this.h8.h(this.fR.E(idx));
});
$p.z = (function() {
  return this.fR.z();
});
$p.a3 = (function(f) {
  return this.eJ(f);
});
var $d_sc_SeqView$Map = new $TypeData().i($c_sc_SeqView$Map, "scala.collection.SeqView$Map", ({
  aW: 1,
  aG: 1,
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
  this.lD = null;
  this.lE = false;
  this.lt = null;
  this.lu = false;
  this.lv = null;
  this.lw = false;
  this.lx = null;
  this.ly = false;
  this.lz = null;
  this.lA = false;
  this.lB = null;
  this.lC = false;
  this.lg = null;
  this.lh = false;
  this.m7 = null;
  this.m8 = false;
  this.lo = null;
  this.lp = false;
  this.m5 = null;
  this.m6 = false;
  this.li = null;
  this.lj = false;
  this.lJ = null;
  this.lK = false;
  this.lH = null;
  this.lI = false;
  this.lk = null;
  this.ll = false;
  this.lX = null;
  this.lY = false;
  this.lZ = null;
  this.m0 = false;
  this.mt = null;
  this.mu = false;
  this.lL = null;
  this.lM = false;
  this.lq = null;
  this.lr = false;
  this.mb = null;
  this.mc = false;
  this.mf = null;
  this.mg = false;
  this.ml = null;
  this.mm = false;
  this.mn = null;
  this.mo = false;
  this.mh = null;
  this.mi = false;
  this.mj = null;
  this.mk = false;
  this.m3 = null;
  this.m4 = false;
  this.lP = null;
  this.lQ = false;
  this.lN = null;
  this.lO = false;
  this.lF = null;
  this.lG = false;
  this.mr = null;
  this.ms = false;
  this.mp = null;
  this.mq = false;
  this.lm = null;
  this.ln = false;
  this.mx = null;
  this.my = false;
  this.md = null;
  this.me = false;
  this.lT = null;
  this.lU = false;
  this.lR = null;
  this.lS = false;
  this.lV = null;
  this.lW = false;
  this.f = null;
  this.m1 = null;
  this.m2 = false;
  this.f0 = null;
  this.pf = null;
  this.le = null;
  this.lf = false;
  this.m9 = null;
  this.ma = false;
  this.ls = null;
  this.mv = null;
  this.mw = false;
  this.pg = null;
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
$p.r4 = (function() {
  if ((!this.lE)) {
    this.lD = new $c_Lcom_raquo_laminar_tags_HtmlTag("header", false);
    this.lE = true;
  }
  return this.lD;
});
$p.qH = (function() {
  if ((!this.lu)) {
    this.lt = new $c_Lcom_raquo_laminar_tags_HtmlTag("footer", false);
    this.lu = true;
  }
  return this.lt;
});
$p.r2 = (function() {
  if ((!this.lw)) {
    this.lv = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.lw = true;
  }
  return this.lv;
});
$p.eH = (function() {
  if ((!this.ly)) {
    this.lx = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.ly = true;
  }
  return this.lx;
});
$p.bH = (function() {
  if ((!this.lA)) {
    this.lz = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.lA = true;
  }
  return this.lz;
});
$p.hx = (function() {
  if ((!this.lC)) {
    this.lB = new $c_Lcom_raquo_laminar_tags_HtmlTag("h4", false);
    this.lC = true;
  }
  return this.lB;
});
$p.bq = (function() {
  if ((!this.lh)) {
    this.lg = new $c_Lcom_raquo_laminar_tags_HtmlTag("a", false);
    this.lh = true;
  }
  return this.lg;
});
$p.bJ = (function() {
  if ((!this.m8)) {
    this.m7 = new $c_Lcom_raquo_laminar_tags_HtmlTag("strong", false);
    this.m8 = true;
  }
  return this.m7;
});
$p.O = (function() {
  if ((!this.lp)) {
    this.lo = new $c_Lcom_raquo_laminar_tags_HtmlTag("code", false);
    this.lp = true;
  }
  return this.lo;
});
$p.D = (function() {
  if ((!this.m6)) {
    this.m5 = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.m6 = true;
  }
  return this.m5;
});
$p.q5 = (function() {
  if ((!this.lj)) {
    this.li = new $c_Lcom_raquo_laminar_tags_HtmlTag("br", true);
    this.lj = true;
  }
  return this.li;
});
$p.jK = (function() {
  if ((!this.lK)) {
    this.lJ = new $c_Lcom_raquo_laminar_tags_HtmlTag("label", false);
    this.lK = true;
  }
  return this.lJ;
});
$p.ra = (function() {
  if ((!this.lI)) {
    this.lH = new $c_Lcom_raquo_laminar_tags_HtmlTag("input", true);
    this.lI = true;
  }
  return this.lH;
});
$p.cP = (function() {
  if ((!this.ll)) {
    this.lk = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.ll = true;
  }
  return this.lk;
});
$p.X = (function() {
  if ((!this.lY)) {
    this.lX = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.lY = true;
  }
  return this.lX;
});
$p.c8 = (function() {
  if ((!this.m0)) {
    this.lZ = new $c_Lcom_raquo_laminar_tags_HtmlTag("pre", false);
    this.m0 = true;
  }
  return this.lZ;
});
$p.hE = (function() {
  if ((!this.mu)) {
    this.mt = new $c_Lcom_raquo_laminar_tags_HtmlTag("ul", false);
    this.mu = true;
  }
  return this.mt;
});
$p.c7 = (function() {
  if ((!this.lM)) {
    this.lL = new $c_Lcom_raquo_laminar_tags_HtmlTag("li", false);
    this.lM = true;
  }
  return this.lL;
});
$p.j = (function() {
  if ((!this.lr)) {
    this.lq = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.lr = true;
  }
  return this.lq;
});
$p.k0 = (function() {
  if ((!this.mc)) {
    this.mb = new $c_Lcom_raquo_laminar_tags_HtmlTag("table", false);
    this.mc = true;
  }
  return this.mb;
});
$p.k1 = (function() {
  if ((!this.mg)) {
    this.mf = new $c_Lcom_raquo_laminar_tags_HtmlTag("tbody", false);
    this.mg = true;
  }
  return this.mf;
});
$p.k2 = (function() {
  if ((!this.mm)) {
    this.ml = new $c_Lcom_raquo_laminar_tags_HtmlTag("thead", false);
    this.mm = true;
  }
  return this.ml;
});
$p.aQ = (function() {
  if ((!this.mo)) {
    this.mn = new $c_Lcom_raquo_laminar_tags_HtmlTag("tr", false);
    this.mo = true;
  }
  return this.mn;
});
$p.A = (function() {
  if ((!this.mi)) {
    this.mh = new $c_Lcom_raquo_laminar_tags_HtmlTag("td", false);
    this.mi = true;
  }
  return this.mh;
});
$p.cC = (function() {
  if ((!this.mk)) {
    this.mj = new $c_Lcom_raquo_laminar_tags_HtmlTag("th", false);
    this.mk = true;
  }
  return this.mj;
});
$p.by = (function() {
  if ((!this.m4)) {
    this.m3 = new $c_Lcom_raquo_laminar_tags_HtmlTag("section", false);
    this.m4 = true;
  }
  return this.m3;
});
$p.rA = (function() {
  if ((!this.lQ)) {
    this.lP = new $c_Lcom_raquo_laminar_tags_HtmlTag("nav", false);
    this.lQ = true;
  }
  return this.lP;
});
$p.ro = (function() {
  if ((!this.lO)) {
    this.lN = new $c_Lcom_raquo_laminar_tags_HtmlTag("main", false);
    this.lO = true;
  }
  return this.lN;
});
$p.br = (function() {
  if ((!this.lG)) {
    this.lF = new $c_Lcom_raquo_laminar_keys_HtmlAttr("href", $m_Lcom_raquo_laminar_codecs_package$().ei);
    this.lG = true;
  }
  return this.lF;
});
$p.sp = (function() {
  if ((!this.ms)) {
    this.mr = new $c_Lcom_raquo_laminar_keys_HtmlAttr("type", $m_Lcom_raquo_laminar_codecs_package$().ei);
    this.ms = true;
  }
  return this.mr;
});
$p.cE = (function() {
  if ((!this.mq)) {
    this.mp = this.sp();
    this.mq = true;
  }
  return this.mp;
});
$p.oe = (function() {
  if ((!this.ln)) {
    this.lm = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().mz);
    this.ln = true;
  }
  return this.lm;
});
$p.pb = (function() {
  if ((!this.my)) {
    this.mx = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().ei);
    this.my = true;
  }
  return this.mx;
});
$p.bt = (function() {
  if ((!this.me)) {
    this.md = new $c_Lcom_raquo_laminar_keys_HtmlProp("target", $m_Lcom_raquo_laminar_codecs_package$().ei);
    this.me = true;
  }
  return this.md;
});
$p.cz = (function() {
  if ((!this.lU)) {
    this.lT = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.lU = true;
  }
  return this.lT;
});
$p.oM = (function() {
  if ((!this.lS)) {
    this.lR = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.lS = true;
  }
  return this.lR;
});
$p.jV = (function() {
  if ((!this.lW)) {
    this.lV = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.lW = true;
  }
  return this.lV;
});
$p.rT = (function() {
  if ((!this.m2)) {
    this.m1 = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey(this, "rel", " ");
    this.m2 = true;
  }
  return this.m1;
});
$p.hn = (function() {
  if ((!this.lf)) {
    this.le = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.lf = true;
  }
  return this.le;
});
$p.sh = (function() {
  if ((!this.ma)) {
    this.m9 = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.ma = true;
  }
  return this.m9;
});
$p.st = (function() {
  if ((!this.mw)) {
    this.mv = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.mw = true;
  }
  return this.mv;
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
$p.bs = (function() {
  return "IndexedSeqView";
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bR = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bm = (function(len) {
  var x = this.z();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.z();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.ep = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.p = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bs = (function() {
  return "IndexedSeqView";
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bR = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bm = (function(len) {
  var x = this.z();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.z();
});
$p.eJ = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.a3 = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  fR: 1,
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
  aF: 1,
  n: 1
}));
function $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__($thiz, underlying, f) {
  $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Map() {
  this.eq = null;
  this.fT = null;
  this.fR = null;
  this.h8 = null;
}
$p = $c_sc_IndexedSeqView$Map.prototype = new $h_sc_SeqView$Map();
$p.constructor = $c_sc_IndexedSeqView$Map;
/** @constructor */
function $h_sc_IndexedSeqView$Map() {
}
$h_sc_IndexedSeqView$Map.prototype = $p;
$p.p = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.fp = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bs = (function() {
  return "IndexedSeqView";
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bR = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bm = (function(len) {
  var x = this.z();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.z();
});
$p.eJ = (function(f) {
  return this.fp(f);
});
$p.a3 = (function(f) {
  return this.fp(f);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  bI: 1,
  aW: 1,
  aG: 1,
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
  aF: 1,
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
  this.j1 = null;
  this.j0 = null;
  this.j1 = underlying;
  this.j0 = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.E = (function(n) {
  return this.j1.E(n);
});
$p.z = (function() {
  return this.j1.aP;
});
$p.c5 = (function() {
  return "ArrayBufferView";
});
$p.p = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.j0);
});
$p.fp = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.j0);
});
$p.eJ = (function(f) {
  return this.fp(f);
});
$p.a3 = (function(f) {
  return this.fp(f);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  h4: 1,
  fC: 1,
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
  aF: 1,
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
$p.jN = (function() {
  return $m_sci_Map$();
});
$p.bl = (function() {
  return $m_sci_Iterable$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ((!$is_sci_IndexedSeq(that)) || ($thiz.z() === that.z()));
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.z();
      var equal = (length === o.z());
      if (equal) {
        var index = 0;
        var a = $thiz.hs();
        var b = o.hs();
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
          equal = $m_sr_BoxesRunTime$().x($thiz.E(index), o.E(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.p().dh(index);
          var thatIt = o.p().dh(index);
          while ((equal && thisIt.u())) {
            equal = $m_sr_BoxesRunTime$().x(thisIt.m(), thatIt.m());
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gJ)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gK)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gL)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gM)));
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
  this.eq = null;
  this.fT = null;
  this.fR = null;
  this.h8 = null;
  this.g5 = null;
  this.g5 = mutationCount;
  $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(this, underlying, f);
}
$p = $c_scm_CheckedIndexedSeqView$Map.prototype = new $h_sc_IndexedSeqView$Map();
$p.constructor = $c_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Map() {
}
$h_scm_CheckedIndexedSeqView$Map.prototype = $p;
$p.p = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.g5);
});
$p.fp = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.g5);
});
$p.eJ = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.g5);
});
$p.a3 = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.g5);
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().i($c_scm_CheckedIndexedSeqView$Map, "scala.collection.mutable.CheckedIndexedSeqView$Map", ({
  hc: 1,
  bI: 1,
  aW: 1,
  aG: 1,
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
  aF: 1,
  n: 1,
  ha: 1
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
$p.b6 = (function() {
  return 0;
});
$p.G = (function() {
  return 0;
});
$p.i = (function() {
  return true;
});
$p.jf = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.bf = (function(key) {
  return false;
});
$p.cT = (function(key, default$1) {
  return default$1.W();
});
$p.p = (function() {
  return $m_sc_Iterator$().S;
});
$p.ec = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.h = (function(key) {
  this.jf(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  gv: 1,
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
  this.cs = null;
  this.dE = null;
  this.cs = key1;
  this.dE = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.a3 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b6 = (function() {
  return 1;
});
$p.G = (function() {
  return 1;
});
$p.i = (function() {
  return false;
});
$p.h = (function(key) {
  if ($m_sr_BoxesRunTime$().x(key, this.cs)) {
    return this.dE;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bf = (function(key) {
  return $m_sr_BoxesRunTime$().x(key, this.cs);
});
$p.cT = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().x(key, this.cs) ? this.dE : default$1.W());
});
$p.p = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cs, this.dE));
});
$p.eQ = (function(key, value) {
  return ($m_sr_BoxesRunTime$().x(key, this.cs) ? new $c_sci_Map$Map1(this.cs, value) : new $c_sci_Map$Map2(this.cs, this.dE, key, value));
});
$p.ar = (function(f) {
  f.h(new $c_T2(this.cs, this.dE));
});
$p.fl = (function(p) {
  return (!(!p.h(new $c_T2(this.cs, this.dE))));
});
$p.C = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cD(this.cs, this.dE);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dZ;
  h = $m_s_util_hashing_MurmurHash3$().l(h, a);
  h = $m_s_util_hashing_MurmurHash3$().l(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dj(h, c);
  return $m_s_util_hashing_MurmurHash3$().K(h, 1);
});
$p.ec = (function(key, value) {
  return this.eQ(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c3)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
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
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.cd = null;
  this.d6 = null;
  this.ce = null;
  this.d7 = null;
  this.cd = key1;
  this.d6 = value1;
  this.ce = key2;
  this.d7 = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.a3 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b6 = (function() {
  return 2;
});
$p.G = (function() {
  return 2;
});
$p.i = (function() {
  return false;
});
$p.h = (function(key) {
  if ($m_sr_BoxesRunTime$().x(key, this.cd)) {
    return this.d6;
  } else if ($m_sr_BoxesRunTime$().x(key, this.ce)) {
    return this.d7;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bf = (function(key) {
  return ($m_sr_BoxesRunTime$().x(key, this.cd) || $m_sr_BoxesRunTime$().x(key, this.ce));
});
$p.cT = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().x(key, this.cd) ? this.d6 : ($m_sr_BoxesRunTime$().x(key, this.ce) ? this.d7 : default$1.W()));
});
$p.p = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.eQ = (function(key, value) {
  return ($m_sr_BoxesRunTime$().x(key, this.cd) ? new $c_sci_Map$Map2(this.cd, value, this.ce, this.d7) : ($m_sr_BoxesRunTime$().x(key, this.ce) ? new $c_sci_Map$Map2(this.cd, this.d6, this.ce, value) : new $c_sci_Map$Map3(this.cd, this.d6, this.ce, this.d7, key, value)));
});
$p.ar = (function(f) {
  f.h(new $c_T2(this.cd, this.d6));
  f.h(new $c_T2(this.ce, this.d7));
});
$p.fl = (function(p) {
  return ((!(!p.h(new $c_T2(this.cd, this.d6)))) && (!(!p.h(new $c_T2(this.ce, this.d7)))));
});
$p.C = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cD(this.cd, this.d6);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cD(this.ce, this.d7);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dZ;
  h = $m_s_util_hashing_MurmurHash3$().l(h, a);
  h = $m_s_util_hashing_MurmurHash3$().l(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dj(h, c);
  return $m_s_util_hashing_MurmurHash3$().K(h, 2);
});
$p.ec = (function(key, value) {
  return this.eQ(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
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
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.c0 = null;
  this.cI = null;
  this.c1 = null;
  this.cJ = null;
  this.c2 = null;
  this.cK = null;
  this.c0 = key1;
  this.cI = value1;
  this.c1 = key2;
  this.cJ = value2;
  this.c2 = key3;
  this.cK = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.a3 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b6 = (function() {
  return 3;
});
$p.G = (function() {
  return 3;
});
$p.i = (function() {
  return false;
});
$p.h = (function(key) {
  if ($m_sr_BoxesRunTime$().x(key, this.c0)) {
    return this.cI;
  } else if ($m_sr_BoxesRunTime$().x(key, this.c1)) {
    return this.cJ;
  } else if ($m_sr_BoxesRunTime$().x(key, this.c2)) {
    return this.cK;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bf = (function(key) {
  return (($m_sr_BoxesRunTime$().x(key, this.c0) || $m_sr_BoxesRunTime$().x(key, this.c1)) || $m_sr_BoxesRunTime$().x(key, this.c2));
});
$p.cT = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().x(key, this.c0) ? this.cI : ($m_sr_BoxesRunTime$().x(key, this.c1) ? this.cJ : ($m_sr_BoxesRunTime$().x(key, this.c2) ? this.cK : default$1.W())));
});
$p.p = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.eQ = (function(key, value) {
  return ($m_sr_BoxesRunTime$().x(key, this.c0) ? new $c_sci_Map$Map3(this.c0, value, this.c1, this.cJ, this.c2, this.cK) : ($m_sr_BoxesRunTime$().x(key, this.c1) ? new $c_sci_Map$Map3(this.c0, this.cI, this.c1, value, this.c2, this.cK) : ($m_sr_BoxesRunTime$().x(key, this.c2) ? new $c_sci_Map$Map3(this.c0, this.cI, this.c1, this.cJ, this.c2, value) : new $c_sci_Map$Map4(this.c0, this.cI, this.c1, this.cJ, this.c2, this.cK, key, value))));
});
$p.ar = (function(f) {
  f.h(new $c_T2(this.c0, this.cI));
  f.h(new $c_T2(this.c1, this.cJ));
  f.h(new $c_T2(this.c2, this.cK));
});
$p.fl = (function(p) {
  return (((!(!p.h(new $c_T2(this.c0, this.cI)))) && (!(!p.h(new $c_T2(this.c1, this.cJ))))) && (!(!p.h(new $c_T2(this.c2, this.cK)))));
});
$p.C = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cD(this.c0, this.cI);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cD(this.c1, this.cJ);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cD(this.c2, this.cK);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dZ;
  h = $m_s_util_hashing_MurmurHash3$().l(h, a);
  h = $m_s_util_hashing_MurmurHash3$().l(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dj(h, c);
  return $m_s_util_hashing_MurmurHash3$().K(h, 3);
});
$p.ec = (function(key, value) {
  return this.eQ(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
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
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bA = null;
  this.cf = null;
  this.bB = null;
  this.cg = null;
  this.bC = null;
  this.ch = null;
  this.bD = null;
  this.ci = null;
  this.bA = key1;
  this.cf = value1;
  this.bB = key2;
  this.cg = value2;
  this.bC = key3;
  this.ch = value3;
  this.bD = key4;
  this.ci = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.a3 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b6 = (function() {
  return 4;
});
$p.G = (function() {
  return 4;
});
$p.i = (function() {
  return false;
});
$p.h = (function(key) {
  if ($m_sr_BoxesRunTime$().x(key, this.bA)) {
    return this.cf;
  } else if ($m_sr_BoxesRunTime$().x(key, this.bB)) {
    return this.cg;
  } else if ($m_sr_BoxesRunTime$().x(key, this.bC)) {
    return this.ch;
  } else if ($m_sr_BoxesRunTime$().x(key, this.bD)) {
    return this.ci;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bf = (function(key) {
  return ((($m_sr_BoxesRunTime$().x(key, this.bA) || $m_sr_BoxesRunTime$().x(key, this.bB)) || $m_sr_BoxesRunTime$().x(key, this.bC)) || $m_sr_BoxesRunTime$().x(key, this.bD));
});
$p.cT = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().x(key, this.bA) ? this.cf : ($m_sr_BoxesRunTime$().x(key, this.bB) ? this.cg : ($m_sr_BoxesRunTime$().x(key, this.bC) ? this.ch : ($m_sr_BoxesRunTime$().x(key, this.bD) ? this.ci : default$1.W()))));
});
$p.p = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.eQ = (function(key, value) {
  return ($m_sr_BoxesRunTime$().x(key, this.bA) ? new $c_sci_Map$Map4(this.bA, value, this.bB, this.cg, this.bC, this.ch, this.bD, this.ci) : ($m_sr_BoxesRunTime$().x(key, this.bB) ? new $c_sci_Map$Map4(this.bA, this.cf, this.bB, value, this.bC, this.ch, this.bD, this.ci) : ($m_sr_BoxesRunTime$().x(key, this.bC) ? new $c_sci_Map$Map4(this.bA, this.cf, this.bB, this.cg, this.bC, value, this.bD, this.ci) : ($m_sr_BoxesRunTime$().x(key, this.bD) ? new $c_sci_Map$Map4(this.bA, this.cf, this.bB, this.cg, this.bC, this.ch, this.bD, value) : $m_sci_HashMap$().iQ.fv(this.bA, this.cf).fv(this.bB, this.cg).fv(this.bC, this.ch).fv(this.bD, this.ci).fv(key, value)))));
});
$p.ar = (function(f) {
  f.h(new $c_T2(this.bA, this.cf));
  f.h(new $c_T2(this.bB, this.cg));
  f.h(new $c_T2(this.bC, this.ch));
  f.h(new $c_T2(this.bD, this.ci));
});
$p.fl = (function(p) {
  return ((((!(!p.h(new $c_T2(this.bA, this.cf)))) && (!(!p.h(new $c_T2(this.bB, this.cg))))) && (!(!p.h(new $c_T2(this.bC, this.ch))))) && (!(!p.h(new $c_T2(this.bD, this.ci)))));
});
$p.q7 = (function(builder) {
  return builder.eA(this.bA, this.cf).eA(this.bB, this.cg).eA(this.bC, this.ch).eA(this.bD, this.ci);
});
$p.C = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cD(this.bA, this.cf);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cD(this.bB, this.cg);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cD(this.bC, this.ch);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cD(this.bD, this.ci);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dZ;
  h = $m_s_util_hashing_MurmurHash3$().l(h, a);
  h = $m_s_util_hashing_MurmurHash3$().l(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dj(h, c);
  return $m_s_util_hashing_MurmurHash3$().K(h, 4);
});
$p.ec = (function(key, value) {
  return this.eQ(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c6)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
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
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gh)));
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
$p.b4 = (function() {
  return this;
});
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.iR)) {
    if ($thiz.hb) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.hb = true;
    try {
      var res = $thiz.iS.W();
    } finally {
      $thiz.hb = false;
    }
    $thiz.bO = true;
    $thiz.iS = null;
    $thiz.iT = res;
    $thiz.iR = true;
  }
  return $thiz.iT;
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => ($thiz.i() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.h($thiz.I().t()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.I().aK(), f)))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.y = (("" + b.y) + start);
  if ((!$thiz.bO)) {
    b.y = (b.y + "<not computed>");
  } else if ((!$thiz.i())) {
    var obj = $thiz.I().t();
    b.y = (("" + b.y) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.I().aK();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.bO) || (elem.I() !== elem$2.I())))) {
      elem = elem$2;
      if ((elem$2.bO && (!elem$2.i()))) {
        elem$2 = elem$2.I().aK();
        while ((((elem !== elem$2) && (elem$2.bO && (!elem$2.i()))) && (elem.I() !== elem$2.I()))) {
          b.y = (("" + b.y) + sep);
          var obj$1 = elem.I().t();
          b.y = (("" + b.y) + obj$1);
          elem = elem.I().aK();
          elem$2 = elem$2.I().aK();
          if ((elem$2.bO && (!elem$2.i()))) {
            elem$2 = elem$2.I().aK();
          }
        }
      }
    }
    if ((!(elem$2.bO && (!elem$2.i())))) {
      while ((elem !== elem$2)) {
        b.y = (("" + b.y) + sep);
        var obj$2 = elem.I().t();
        b.y = (("" + b.y) + obj$2);
        elem = elem.I().aK();
      }
      if ((!elem.bO)) {
        b.y = (("" + b.y) + sep);
        b.y = (b.y + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.I() === b$1.I())))) {
          runner = runner.I().aK();
          elem$2 = elem$2.I().aK();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.I() === b$2.I())) && (k > 0))) {
        b.y = (("" + b.y) + sep);
        var obj$3 = elem.I().t();
        b.y = (("" + b.y) + obj$3);
        elem = elem.I().aK();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.I() === b$3.I())))) {
          b.y = (("" + b.y) + sep);
          var obj$4 = elem.I().t();
          b.y = (("" + b.y) + obj$4);
          elem = elem.I().aK();
        } else {
          break;
        }
      }
      b.y = (("" + b.y) + sep);
      b.y = (b.y + "<cycle>");
    }
  }
  b.y = (("" + b.y) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.iT = null;
  this.iS = null;
  this.bO = false;
  this.hb = false;
  this.iR = false;
  this.iS = lazyState;
  this.bO = false;
  this.hb = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bs = (function() {
  return "LinearSeq";
});
$p.bR = (function() {
  return $f_sc_LinearSeqOps__headOption__s_Option(this);
});
$p.z = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.bm = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.jI = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.E = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fr = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.I = (function() {
  return ((!this.iR) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.iT);
});
$p.i = (function() {
  return (this.I() === $m_sci_LazyList$State$Empty$());
});
$p.G = (function() {
  return ((this.bO && (this.I() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.t = (function() {
  return this.I().t();
});
$p.ow = (function() {
  var these = this;
  var those = this;
  if ((!these.i())) {
    these = these.I().aK();
  }
  while ((those !== these)) {
    if (these.i()) {
      return this;
    }
    these = these.I().aK();
    if (these.i()) {
      return this;
    }
    these = these.I().aK();
    if ((these === those)) {
      return this;
    }
    those = those.I().aK();
  }
  return this;
});
$p.p = (function() {
  return ((this.bO && (this.I() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().S : new $c_sci_LazyList$LazyIterator(this));
});
$p.ar = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.i())) {
      f.h(_$this.I().t());
      _$this = _$this.I().aK();
      continue;
    }
    break;
  }
});
$p.c5 = (function() {
  return "LazyList";
});
$p.rq = (function(f) {
  return ((this.bO && (this.I() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().fZ : ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => (this.i() ? $m_sci_LazyList$State$Empty$() : ($m_sci_LazyList$(), new $c_sci_LazyList$State$Cons(f.h(this.I().t()), $p_sci_LazyList__mapImpl__F1__sci_LazyList(this.I().aK(), f)))))))));
});
$p.qG = (function(f) {
  return ((this.bO && (this.I() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().fZ : $m_sci_LazyList$().p0(this, f));
});
$p.qw = (function(n) {
  return ((n <= 0) ? this : ((this.bO && (this.I() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().fZ : $m_sci_LazyList$().s8(this, n)));
});
$p.e0 = (function(sb, start, sep, end) {
  this.ow();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.aY, start, sep, end);
  return sb;
});
$p.B = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").y;
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.cp = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.om = (function(n) {
  return this.qw(n);
});
$p.eE = (function(asIterable) {
  return this.qG(asIterable);
});
$p.a3 = (function(f) {
  return this.rq(f);
});
$p.v = (function() {
  return this.I().aK();
});
$p.bl = (function() {
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
  az: 1,
  aT: 1,
  aZ: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.h0)));
}
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.hi = null;
  this.hi = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a3 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.eE = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.ht = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fr = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.hs = (function() {
  return $m_sci_IndexedSeqDefaults$().nh;
});
$p.p = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bR = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bm = (function(len) {
  var x = this.z();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.z();
});
$p.w = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.C = (function() {
  return $m_s_util_hashing_MurmurHash3$().p3(this);
});
$p.B = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.i = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.c4 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eL = (function() {
  return $m_sjsr_WrappedVarArgs$().at();
});
$p.ar = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.c6 = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.e0 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.eN = (function() {
  return $m_sci_Nil$().ea(this);
});
$p.e6 = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.z = (function() {
  return (this.hi.length | 0);
});
$p.E = (function(idx) {
  return this.hi[idx];
});
$p.c5 = (function() {
  return "WrappedVarArgs";
});
$p.gs = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().jy(coll);
});
$p.cp = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.h = (function(v1) {
  return this.E((v1 | 0));
});
$p.bl = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  cr: 1,
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
  this.bv = null;
  this.bv = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.a3 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.jN = (function() {
  return $m_sci_HashMap$();
});
$p.G = (function() {
  return this.bv.b7;
});
$p.b6 = (function() {
  return this.bv.b7;
});
$p.i = (function() {
  return (this.bv.b7 === 0);
});
$p.p = (function() {
  return (this.i() ? $m_sc_Iterator$().S : new $c_sci_MapKeyValueTupleIterator(this.bv));
});
$p.bf = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().a0(key);
  var keyHash = $m_sc_Hashing$().cw(keyUnimprovedHash);
  return this.bv.jm(key, keyUnimprovedHash, keyHash, 0);
});
$p.h = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().a0(key);
  var keyHash = $m_sc_Hashing$().cw(keyUnimprovedHash);
  return this.bv.je(key, keyUnimprovedHash, keyHash, 0);
});
$p.cT = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().a0(key);
  var keyHash = $m_sc_Hashing$().cw(keyUnimprovedHash);
  return this.bv.jA(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fv = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().a0(key);
  var newRootNode = this.bv.p9(key, value, keyUnimprovedHash, $m_sc_Hashing$().cw(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bv) ? this : new $c_sci_HashMap(newRootNode));
});
$p.ar = (function(f) {
  this.bv.ar(f);
});
$p.eF = (function(f) {
  this.bv.eF(f);
});
$p.w = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bv;
      var x$2 = that.bv;
      return ((x === null) ? (x$2 === null) : x.w(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.C = (function() {
  if (this.i()) {
    return $m_s_util_hashing_MurmurHash3$().j9;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bv);
    return $m_s_util_hashing_MurmurHash3$().k3(hashIterator, $m_s_util_hashing_MurmurHash3$().dZ);
  }
});
$p.c5 = (function() {
  return "HashMap";
});
$p.ec = (function(key, value) {
  return this.fv(key, value);
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
  gN: 1,
  g5: 1,
  l: 1,
  U: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gO)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gY)));
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
$p.bd = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (((-1) + $thiz.aW.a.length) | 0));
  var x1 = $thiz.aW.a[idx];
  if ((x1 === null)) {
    $thiz.aW.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.dd <= hash))) {
      if (((n.dd === hash) && $m_sr_BoxesRunTime$().x(elem, n.ex))) {
        return false;
      }
      prev = n;
      n = n.aX;
    }
    if ((prev === null)) {
      $thiz.aW.a[idx] = new $c_scm_HashSet$Node(elem, hash, x1);
    } else {
      prev.aX = new $c_scm_HashSet$Node(elem, hash, prev.aX);
    }
  }
  $thiz.dV = ((1 + $thiz.dV) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.aW.a.length;
  $thiz.j6 = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.dV === 0)) {
    $thiz.aW = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.aW = $m_ju_Arrays$().a7($thiz.aW, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.aW.a[i];
        if ((old !== null)) {
          preLow.aX = null;
          preHigh.aX = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aX;
            if (((n.dd & oldlen) === 0)) {
              lastLow.aX = n;
              lastLow = n;
            } else {
              lastHigh.aX = n;
              lastHigh = n;
            }
            n = next;
          }
          lastLow.aX = null;
          if ((old !== preLow.aX)) {
            $thiz.aW.a[i] = preLow.aX;
          }
          if ((preHigh.aX !== null)) {
            $thiz.aW.a[((i + oldlen) | 0)] = preHigh.aX;
            lastHigh.aX = null;
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
  return $doubleToInt((size * $thiz.j5));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.j5 = loadFactor;
  $thiz.aW = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.j6 = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.aW.a.length);
  $thiz.dV = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.j5 = 0.0;
  this.aW = null;
  this.j6 = 0;
  this.dV = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.a3 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b6 = (function() {
  return this.dV;
});
$p.hD = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.bf = (function(elem) {
  var hash = this.hD($m_sr_Statics$().a0(elem));
  var x1 = this.aW.a[(hash & (((-1) + this.aW.a.length) | 0))];
  return (((x1 === null) ? null : x1.qF(elem, hash)) !== null);
});
$p.bg = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.j5)));
  if ((target > this.aW.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.hp = (function(elem) {
  if ((((1 + this.dV) | 0) >= this.j6)) {
    $p_scm_HashSet__growTable__I__V(this, (this.aW.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.hD($m_sr_Statics$().a0(elem)));
});
$p.nS = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.hD((h$2$2 | 0)));
    }));
    xs.sz.sH(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.u()) {
      var next = iter.m();
      $p_scm_HashSet__addElem__O__I__Z(this, next.ex, next.dd);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.qz();
    while (iter$2.u()) {
      var next$2 = iter$2.m();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.oI(), next$2.oE());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.p = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.bl = (function() {
  return $m_scm_HashSet$();
});
$p.G = (function() {
  return this.dV;
});
$p.i = (function() {
  return (this.dV === 0);
});
$p.ar = (function(f) {
  var len = this.aW.a.length;
  var i = 0;
  while ((i < len)) {
    var n = this.aW.a[i];
    if ((n !== null)) {
      n.ar(f);
    }
    i = ((1 + i) | 0);
  }
});
$p.c5 = (function() {
  return "HashSet";
});
$p.C = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.u()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().k3(hashIterator, $m_s_util_hashing_MurmurHash3$().nL);
});
$p.b3 = (function(elem) {
  this.hp(elem);
  return this;
});
$p.bd = (function(elems) {
  return this.nS(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cj: 1,
  h1: 1,
  fD: 1,
  i: 1,
  e: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aX: 1,
  g3: 1,
  f: 1,
  d: 1,
  hr: 1,
  K: 1,
  hs: 1,
  I: 1,
  B: 1,
  M: 1,
  J: 1,
  H: 1,
  aH: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gt)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hn)));
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
$p.gt = (function(coll) {
  return $m_sci_ArraySeq$().ju(coll, this.aq());
});
$p.eL = (function() {
  return $m_sci_ArraySeq$().hB(this.aq());
});
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.eE = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.ht = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fr = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bs = (function() {
  return "IndexedSeq";
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bR = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bm = (function(len) {
  var x = this.z();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.z();
});
$p.e6 = (function() {
  return $m_sci_ArraySeq$().iO;
});
$p.rp = (function(f) {
  var a = new $ac_O(this.z());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.h(this.E(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().hF(a);
});
$p.c5 = (function() {
  return "ArraySeq";
});
$p.c6 = (function(xs, start, len) {
  var srcLen = this.z();
  var destLen = $m_jl_reflect_Array$().co(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().gn(this.cX(), 0, xs, start, copied);
  }
  return copied;
});
$p.hs = (function() {
  return 2147483647;
});
$p.gs = (function(coll) {
  return $m_sci_ArraySeq$().ju(coll, this.aq());
});
$p.a3 = (function(f) {
  return this.rp(f);
});
$p.bl = (function() {
  return $m_sci_ArraySeq$().iO;
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Y)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.k = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.k = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.eE = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.ht = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fr = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bs = (function() {
  return "IndexedSeq";
});
$p.bR = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bm = (function(len) {
  var x = this.z();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.z();
});
$p.e6 = (function() {
  return $m_sci_Vector$();
});
$p.z = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.q : this.k.a.length);
});
$p.p = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().np : new $c_sci_NewVectorIterator(this, this.z(), this.cZ()));
});
$p.c5 = (function() {
  return "Vector";
});
$p.c6 = (function(xs, start, len) {
  return this.p().c6(xs, start, len);
});
$p.hs = (function() {
  return $m_sci_Vector$().no;
});
$p.aZ = (function(index) {
  return $m_scg_CommonErrors$().gw(index, (((-1) + this.z()) | 0));
});
$p.t = (function() {
  if ((this.k.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.k.a[0];
  }
});
$p.ar = (function(f) {
  var c = this.cZ();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.js((((-1) + ((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0)) | 0), this.cY(i), f);
    i = ((1 + i) | 0);
  }
});
$p.bl = (function() {
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
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a3 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bs = (function() {
  return "IndexedSeq";
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bR = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bm = (function(len) {
  var x = this.z();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.z();
});
$p.e6 = (function() {
  return $m_scm_ArraySeq$().j4;
});
$p.oD = (function(coll) {
  var evidence$1 = this.aq();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.b5();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.G();
  var it = coll.p();
  while (it.u()) {
    var elem = it.m();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a1.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.jL(elemRuntimeClass.a1.r().w(jsElems));
});
$p.eL = (function() {
  return $m_scm_ArraySeq$().hB(this.aq());
});
$p.c5 = (function() {
  return "ArraySeq";
});
$p.c6 = (function(xs, start, len) {
  var srcLen = this.z();
  var destLen = $m_jl_reflect_Array$().co(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().gn(this.cl(), 0, xs, start, copied);
  }
  return copied;
});
$p.w = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().co(this.cl()) !== $m_jl_reflect_Array$().co(other.cl()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.gs = (function(coll) {
  return this.oD(coll);
});
$p.gt = (function(coll) {
  return this.oD(coll);
});
$p.bl = (function() {
  return $m_scm_ArraySeq$().j4;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.dv = null;
  this.dv = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.z = (function() {
  return this.dv.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ob(this.dv, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().ou(this.dv, that.dv) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dv);
});
$p.gk = (function(i) {
  return this.dv.a[i];
});
$p.h = (function(v1) {
  return this.gk((v1 | 0));
});
$p.E = (function(i) {
  return this.gk(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cX = (function() {
  return this.dv;
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
  this.dw = null;
  this.dw = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.z = (function() {
  return this.dw.a.length;
});
$p.gb = (function(i) {
  return this.dw.a[i];
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o3(this.dw, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().oo(this.dw, that.dw) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dw);
});
$p.h = (function(v1) {
  return this.gb((v1 | 0));
});
$p.E = (function(i) {
  return this.gb(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cX = (function() {
  return this.dw;
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
  this.d4 = null;
  this.d4 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.z = (function() {
  return this.d4.a.length;
});
$p.gc = (function(i) {
  return this.d4.a[i];
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o4(this.d4, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().op(this.d4, that.d4) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.d4);
});
$p.e0 = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.d4).e0(sb, start, sep, end);
});
$p.h = (function(v1) {
  return $bC(this.gc((v1 | 0)));
});
$p.E = (function(i) {
  return $bC(this.gc(i));
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cX = (function() {
  return this.d4;
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
  this.dx = null;
  this.dx = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.z = (function() {
  return this.dx.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o5(this.dx, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().oq(this.dx, that.dx) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dx);
});
$p.gf = (function(i) {
  return this.dx.a[i];
});
$p.h = (function(v1) {
  return this.gf((v1 | 0));
});
$p.E = (function(i) {
  return this.gf(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cX = (function() {
  return this.dx;
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
  this.dy = null;
  this.dy = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.z = (function() {
  return this.dy.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o6(this.dy, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().or(this.dy, that.dy) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dy);
});
$p.gg = (function(i) {
  return this.dy.a[i];
});
$p.h = (function(v1) {
  return this.gg((v1 | 0));
});
$p.E = (function(i) {
  return this.gg(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cX = (function() {
  return this.dy;
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
  this.dz = null;
  this.dz = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.z = (function() {
  return this.dz.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o7(this.dz, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().jp(this.dz, that.dz) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dz);
});
$p.gh = (function(i) {
  return this.dz.a[i];
});
$p.h = (function(v1) {
  return this.gh((v1 | 0));
});
$p.E = (function(i) {
  return this.gh(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cX = (function() {
  return this.dz;
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
  this.dA = null;
  this.dA = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.z = (function() {
  return this.dA.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o8(this.dA, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().os(this.dA, that.dA) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dA);
});
$p.gi = (function(i) {
  return this.dA.a[i];
});
$p.h = (function(v1) {
  return this.gi((v1 | 0));
});
$p.E = (function(i) {
  return this.gi(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cX = (function() {
  return this.dA;
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
  this.cG = null;
  this.cG = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.aq = (function() {
  return $m_s_reflect_ClassTag$().o0($objectGetClass(this.cG).a1.Q());
});
$p.z = (function() {
  return this.cG.a.length;
});
$p.E = (function(i) {
  return this.cG.a[i];
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o2(this.cG, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().ov(this.cG, that.cG) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.p = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.cG);
});
$p.h = (function(v1) {
  return this.E((v1 | 0));
});
$p.cX = (function() {
  return this.cG;
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
  this.dB = null;
  this.dB = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.z = (function() {
  return this.dB.a.length;
});
$p.gd = (function(i) {
  return this.dB.a[i];
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o9(this.dB, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().ot(this.dB, that.dB) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dB);
});
$p.h = (function(v1) {
  return this.gd((v1 | 0));
});
$p.E = (function(i) {
  return this.gd(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cX = (function() {
  return this.dB;
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
  this.er = null;
  this.er = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.z = (function() {
  return this.er.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oa(this.er, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.er.a.length === that.er.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.er);
});
$p.gj = (function(i) {
});
$p.h = (function(v1) {
  this.gj((v1 | 0));
});
$p.E = (function(i) {
  this.gj(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cX = (function() {
  return this.er;
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
      return (xs.i() ? 0 : 1);
    } else if (xs.i()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = xs.v();
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
      var aEmpty = a.i();
      var bEmpty = b.i();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().x(a.t(), b.t()))) {
        var temp$a = a.v();
        var temp$b = b.v();
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
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.p = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.eE = (function(toIterableOnce) {
  return $f_sc_StrictOptimizedIterableOps__flatten__F1__O(this, toIterableOnce);
});
$p.bs = (function() {
  return "LinearSeq";
});
$p.jI = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.E = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fr = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.e6 = (function() {
  return $m_sci_List$();
});
$p.nM = (function(prefix) {
  if (this.i()) {
    return prefix;
  } else if (prefix.i()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.t(), this);
    var curr = result;
    var that = prefix.v();
    while ((!that.i())) {
      var temp = new $c_sci_$colon$colon(that.t(), this);
      curr.Z = temp;
      curr = temp;
      that = that.v();
    }
    return result;
  }
});
$p.i = (function() {
  return (this === $m_sci_Nil$());
});
$p.ea = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.nM(prefix);
  }
  if ((prefix.G() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.i()) {
      return prefix.eN();
    }
  }
  var iter = prefix.p();
  if (iter.u()) {
    var result = new $c_sci_$colon$colon(iter.m(), this);
    var curr = result;
    while (iter.u()) {
      var temp = new $c_sci_$colon$colon(iter.m(), this);
      curr.Z = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.nX = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.nM(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.rr = (function(f) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.h(this.t()), $m_sci_Nil$());
    var t = h;
    var rest = this.v();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.h(rest.t()), $m_sci_Nil$());
      t.Z = nx;
      t = nx;
      rest = rest.v();
    }
    return h;
  }
});
$p.qa = (function(pf) {
  if ((this === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var rest = this;
    var h = null;
    var x = null;
    while ((h === null)) {
      x = pf.c4(rest.t(), $m_sci_List$().g0);
      if ((x !== $m_sci_List$().g0)) {
        h = new $c_sci_$colon$colon(x, $m_sci_Nil$());
      }
      rest = rest.v();
      if ((rest === $m_sci_Nil$())) {
        return ((h === null) ? $m_sci_Nil$() : h);
      }
    }
    var t = h;
    while ((rest !== $m_sci_Nil$())) {
      x = pf.c4(rest.t(), $m_sci_List$().g0);
      if ((x !== $m_sci_List$().g0)) {
        var nx = new $c_sci_$colon$colon(x, $m_sci_Nil$());
        t.Z = nx;
        t = nx;
      }
      rest = rest.v();
    }
    return h;
  }
});
$p.ar = (function(f) {
  var these = this;
  while ((!these.i())) {
    f.h(these.t());
    these = these.v();
  }
});
$p.z = (function() {
  var these = this;
  var len = 0;
  while ((!these.i())) {
    len = ((1 + len) | 0);
    these = these.v();
  }
  return len;
});
$p.bm = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.bf = (function(elem) {
  var these = this;
  while ((!these.i())) {
    if ($m_sr_BoxesRunTime$().x(these.t(), elem)) {
      return true;
    }
    these = these.v();
  }
  return false;
});
$p.c5 = (function() {
  return "List";
});
$p.eN = (function() {
  return this;
});
$p.w = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.cp = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.om = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.a3 = (function(f) {
  return this.rr(f);
});
$p.bl = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b0)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.k = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.dN = null;
  this.dN = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.z = (function() {
  return this.dN.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ob(this.dN, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().ou(this.dN, that.dN) : $c_scm_ArraySeq.prototype.w.call(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.dN);
});
$p.gk = (function(index) {
  return this.dN.a[index];
});
$p.h = (function(v1) {
  return this.gk((v1 | 0));
});
$p.E = (function(i) {
  return this.gk(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cl = (function() {
  return this.dN;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
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
  this.dO = null;
  this.dO = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.z = (function() {
  return this.dO.a.length;
});
$p.gb = (function(index) {
  return this.dO.a[index];
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o3(this.dO, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().oo(this.dO, that.dO) : $c_scm_ArraySeq.prototype.w.call(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dO);
});
$p.h = (function(v1) {
  return this.gb((v1 | 0));
});
$p.E = (function(i) {
  return this.gb(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cl = (function() {
  return this.dO;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ca)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
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
function $c_scm_ArraySeq$ofChar(array) {
  this.c3 = null;
  this.c3 = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.z = (function() {
  return this.c3.a.length;
});
$p.gc = (function(index) {
  return this.c3.a[index];
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o4(this.c3, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().op(this.c3, that.c3) : $c_scm_ArraySeq.prototype.w.call(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.c3);
});
$p.e0 = (function(sb, start, sep, end) {
  var jsb = sb.aY;
  if ((start.length !== 0)) {
    jsb.y = (("" + jsb.y) + start);
  }
  var len = this.c3.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.nV(this.c3);
    } else {
      jsb.z();
      var c = this.c3.a[0];
      var str = ("" + $cToS(c));
      jsb.y = (jsb.y + str);
      var i = 1;
      while ((i < len)) {
        jsb.y = (("" + jsb.y) + sep);
        var c$1 = this.c3.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.y = (jsb.y + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.y = (("" + jsb.y) + end);
  }
  return sb;
});
$p.h = (function(v1) {
  return $bC(this.gc((v1 | 0)));
});
$p.E = (function(i) {
  return $bC(this.gc(i));
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cl = (function() {
  return this.c3;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
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
function $c_scm_ArraySeq$ofDouble(array) {
  this.dP = null;
  this.dP = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.z = (function() {
  return this.dP.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o5(this.dP, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().oq(this.dP, that.dP) : $c_scm_ArraySeq.prototype.w.call(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dP);
});
$p.gf = (function(index) {
  return this.dP.a[index];
});
$p.h = (function(v1) {
  return this.gf((v1 | 0));
});
$p.E = (function(i) {
  return this.gf(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cl = (function() {
  return this.dP;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
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
function $c_scm_ArraySeq$ofFloat(array) {
  this.dQ = null;
  this.dQ = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.z = (function() {
  return this.dQ.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o6(this.dQ, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().or(this.dQ, that.dQ) : $c_scm_ArraySeq.prototype.w.call(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dQ);
});
$p.gg = (function(index) {
  return this.dQ.a[index];
});
$p.h = (function(v1) {
  return this.gg((v1 | 0));
});
$p.E = (function(i) {
  return this.gg(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cl = (function() {
  return this.dQ;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cd)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
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
function $c_scm_ArraySeq$ofInt(array) {
  this.dR = null;
  this.dR = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.z = (function() {
  return this.dR.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o7(this.dR, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().jp(this.dR, that.dR) : $c_scm_ArraySeq.prototype.w.call(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dR);
});
$p.gh = (function(index) {
  return this.dR.a[index];
});
$p.h = (function(v1) {
  return this.gh((v1 | 0));
});
$p.E = (function(i) {
  return this.gh(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cl = (function() {
  return this.dR;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ce)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
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
function $c_scm_ArraySeq$ofLong(array) {
  this.dS = null;
  this.dS = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.z = (function() {
  return this.dS.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o8(this.dS, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().os(this.dS, that.dS) : $c_scm_ArraySeq.prototype.w.call(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dS);
});
$p.gi = (function(index) {
  return this.dS.a[index];
});
$p.h = (function(v1) {
  return this.gi((v1 | 0));
});
$p.E = (function(i) {
  return this.gi(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cl = (function() {
  return this.dS;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
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
function $c_scm_ArraySeq$ofRef(array) {
  this.db = null;
  this.db = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.aq = (function() {
  return $m_s_reflect_ClassTag$().o0($objectGetClass(this.db).a1.Q());
});
$p.z = (function() {
  return this.db.a.length;
});
$p.E = (function(index) {
  return this.db.a[index];
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o2(this.db, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().ov(this.db, that.db) : $c_scm_ArraySeq.prototype.w.call(this, that));
});
$p.p = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.db);
});
$p.h = (function(v1) {
  return this.E((v1 | 0));
});
$p.cl = (function() {
  return this.db;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
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
function $c_scm_ArraySeq$ofShort(array) {
  this.dT = null;
  this.dT = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.z = (function() {
  return this.dT.a.length;
});
$p.gd = (function(index) {
  return this.dT.a[index];
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.o9(this.dT, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().ot(this.dT, that.dT) : $c_scm_ArraySeq.prototype.w.call(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dT);
});
$p.h = (function(v1) {
  return this.gd((v1 | 0));
});
$p.E = (function(i) {
  return this.gd(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cl = (function() {
  return this.dT;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
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
function $c_scm_ArraySeq$ofUnit(array) {
  this.ew = null;
  this.ew = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.z = (function() {
  return this.ew.a.length;
});
$p.C = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.oa(this.ew, this$1.aw);
});
$p.w = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.ew.a.length === that.ew.a.length) : $c_scm_ArraySeq.prototype.w.call(this, that));
});
$p.p = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.ew);
});
$p.gj = (function(index) {
});
$p.h = (function(v1) {
  this.gj((v1 | 0));
});
$p.E = (function(i) {
  this.gj(i);
});
$p.aq = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cl = (function() {
  return this.ew;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
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
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hd)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.o = suffix1;
  $thiz.q = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.k = null;
  this.o = null;
  this.q = 0;
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
  this.k = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.E = (function(index) {
  if (((index >= 0) && (index < this.k.a.length))) {
    return this.k.a[index];
  } else {
    throw this.aZ(index);
  }
});
$p.eb = (function(index, elem) {
  if (((index >= 0) && (index < this.k.a.length))) {
    var a1 = this.k;
    var a1c = a1.n();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aZ(index);
  }
});
$p.e1 = (function(elem) {
  if ((this.k.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().fk(this.k, elem));
  } else {
    var $x_2 = this.k;
    var $x_1 = $m_sci_VectorStatics$().bG;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cy = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cq(this.k, f));
});
$p.cZ = (function() {
  return 1;
});
$p.cY = (function(idx) {
  return this.k;
});
$p.a3 = (function(f) {
  return this.cy(f);
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k.a.length))) {
    return this.k.a[index];
  } else {
    throw this.aZ(index);
  }
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  gR: 1,
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
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.fU = null;
  this.Z = null;
  this.fU = head;
  this.Z = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.t = (function() {
  return this.fU;
});
$p.az = (function() {
  return "::";
});
$p.ax = (function() {
  return 2;
});
$p.ay = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.fU;
      break;
    }
    case 1: {
      return this.Z;
      break;
    }
    default: {
      return $m_sr_Statics$().eI(x$1);
    }
  }
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  return this.Z;
});
$p.bR = (function() {
  return new $c_s_Some(this.fU);
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  gb: 1,
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
  az: 1,
  aT: 1,
  aZ: 1,
  bM: 1,
  s: 1,
  l: 1,
  A: 1,
  U: 1,
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
$p.jF = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.sl = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.G = (function() {
  return 0;
});
$p.p = (function() {
  return $m_sc_Iterator$().S;
});
$p.az = (function() {
  return "Nil";
});
$p.ax = (function() {
  return 0;
});
$p.ay = (function(x$1) {
  return $m_sr_Statics$().eI(x$1);
});
$p.bx = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.v = (function() {
  this.sl();
});
$p.bR = (function() {
  return $m_s_None$();
});
$p.t = (function() {
  this.jF();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  gH: 1,
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
  az: 1,
  aT: 1,
  aZ: 1,
  bM: 1,
  s: 1,
  l: 1,
  A: 1,
  U: 1,
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
  this.k = null;
  this.o = null;
  this.q = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().iY, $m_sci_VectorStatics$().iY, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.nY = (function(index) {
  throw this.aZ(index);
});
$p.eb = (function(index, elem) {
  throw this.aZ(index);
});
$p.e1 = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.cZ = (function() {
  return 0;
});
$p.cY = (function(idx) {
  return null;
});
$p.w = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aZ = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.a3 = (function(f) {
  return this;
});
$p.h = (function(v1) {
  this.nY((v1 | 0));
});
$p.E = (function(i) {
  this.nY(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  gQ: 1,
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
  U: 1,
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
  this.k = null;
  this.o = null;
  this.q = 0;
  this.bQ = 0;
  this.bw = null;
  this.bQ = len1;
  this.bw = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.E = (function(index) {
  if (((index >= 0) && (index < this.q))) {
    var io = ((index - this.bQ) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bw.a.length) ? this.bw.a[i2].a[i1] : this.o.a[(31 & io)]);
    } else {
      return this.k.a[index];
    }
  } else {
    throw this.aZ(index);
  }
});
$p.eb = (function(index, elem) {
  if (((index >= 0) && (index < this.q))) {
    if ((index >= this.bQ)) {
      var io = ((index - this.bQ) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bw.a.length)) {
        var a2 = this.bw;
        var a2c = a2.n();
        var a1 = a2c.a[i2];
        var a1c = a1.n();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.k, this.bQ, a2c, this.o, this.q);
      } else {
        var a1$1 = this.o;
        var a1c$1 = a1$1.n();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.k, this.bQ, this.bw, a1c$1, this.q);
      }
    } else {
      var a1$2 = this.k;
      var a1c$2 = a1$2.n();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bQ, this.bw, this.o, this.q);
    }
  } else {
    throw this.aZ(index);
  }
});
$p.e1 = (function(elem) {
  if ((this.o.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fk(this.o, elem);
    var x$2 = ((1 + this.q) | 0);
    return new $c_sci_Vector2(this.k, this.bQ, this.bw, x$1, x$2);
  } else if ((this.bw.a.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().M(this.bw, this.o);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = ((1 + this.q) | 0);
    return new $c_sci_Vector2(this.k, this.bQ, x$6, a, x$8);
  } else {
    var $x_5 = this.k;
    var $x_4 = this.bQ;
    var $x_3 = this.bw;
    var $x_2 = this.bQ;
    var $x_1 = $m_sci_VectorStatics$().cM;
    var x = this.o;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.q) | 0));
  }
});
$p.cy = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cq(this.k, f);
  var x$2 = $m_sci_VectorStatics$().ae(2, this.bw, f);
  var x$3 = $m_sci_VectorStatics$().cq(this.o, f);
  return new $c_sci_Vector2(x$1, this.bQ, x$2, x$3, this.q);
});
$p.cZ = (function() {
  return 3;
});
$p.cY = (function(idx) {
  switch (idx) {
    case 0: {
      return this.k;
      break;
    }
    case 1: {
      return this.bw;
      break;
    }
    case 2: {
      return this.o;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.a3 = (function(f) {
  return this.cy(f);
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.q))) {
    var io = ((index - this.bQ) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bw.a.length) ? this.bw.a[i2].a[i1] : this.o.a[(31 & io)]);
    } else {
      return this.k.a[index];
    }
  } else {
    throw this.aZ(index);
  }
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
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
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.k = null;
  this.o = null;
  this.q = 0;
  this.bo = 0;
  this.bF = null;
  this.bp = 0;
  this.ba = null;
  this.bb = null;
  this.bo = len1;
  this.bF = prefix2;
  this.bp = len12;
  this.ba = data3;
  this.bb = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.E = (function(index) {
  if (((index >= 0) && (index < this.q))) {
    var io = ((index - this.bp) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.ba.a.length) ? this.ba.a[i3].a[i2].a[i1] : ((i2 < this.bb.a.length) ? this.bb.a[i2].a[i1] : this.o.a[i1]));
    } else if ((index >= this.bo)) {
      var io$2 = ((index - this.bo) | 0);
      return this.bF.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.k.a[index];
    }
  } else {
    throw this.aZ(index);
  }
});
$p.eb = (function(index, elem) {
  if (((index >= 0) && (index < this.q))) {
    if ((index >= this.bp)) {
      var io = ((index - this.bp) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.ba.a.length)) {
        var a3 = this.ba;
        var a3c = a3.n();
        var a2 = a3c.a[i3];
        var a2c = a2.n();
        var a1 = a2c.a[i2];
        var a1c = a1.n();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.k, this.bo, this.bF, this.bp, a3c, this.bb, this.o, this.q);
      } else if ((i2 < this.bb.a.length)) {
        var a2$1 = this.bb;
        var a2c$1 = a2$1.n();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.n();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.k, this.bo, this.bF, this.bp, this.ba, a2c$1, this.o, this.q);
      } else {
        var a1$2 = this.o;
        var a1c$2 = a1$2.n();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.k, this.bo, this.bF, this.bp, this.ba, this.bb, a1c$2, this.q);
      }
    } else if ((index >= this.bo)) {
      var io$2 = ((index - this.bo) | 0);
      var a2$2 = this.bF;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.n();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.n();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.k, this.bo, a2c$2, this.bp, this.ba, this.bb, this.o, this.q);
    } else {
      var a1$4 = this.k;
      var a1c$4 = a1$4.n();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bo, this.bF, this.bp, this.ba, this.bb, this.o, this.q);
    }
  } else {
    throw this.aZ(index);
  }
});
$p.e1 = (function(elem) {
  if ((this.o.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fk(this.o, elem);
    var x$2 = ((1 + this.q) | 0);
    return new $c_sci_Vector3(this.k, this.bo, this.bF, this.bp, this.ba, this.bb, x$1, x$2);
  } else if ((this.bb.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().M(this.bb, this.o);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.q) | 0);
    return new $c_sci_Vector3(this.k, this.bo, this.bF, this.bp, this.ba, x$9, a, x$11);
  } else if ((this.ba.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().M(this.ba, $m_sci_VectorStatics$().M(this.bb, this.o));
    var x$18 = $m_sci_VectorStatics$().bG;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.q) | 0);
    return new $c_sci_Vector3(this.k, this.bo, this.bF, this.bp, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.k;
    var $x_7 = this.bo;
    var $x_6 = this.bF;
    var $x_5 = this.bp;
    var $x_4 = this.ba;
    var $x_3 = this.bp;
    var $x_2 = $m_sci_VectorStatics$().ff;
    var x = $m_sci_VectorStatics$().M(this.bb, this.o);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bG;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.q) | 0));
  }
});
$p.cy = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cq(this.k, f);
  var x$2 = $m_sci_VectorStatics$().ae(2, this.bF, f);
  var x$3 = $m_sci_VectorStatics$().ae(3, this.ba, f);
  var x$4 = $m_sci_VectorStatics$().ae(2, this.bb, f);
  var x$5 = $m_sci_VectorStatics$().cq(this.o, f);
  return new $c_sci_Vector3(x$1, this.bo, x$2, this.bp, x$3, x$4, x$5, this.q);
});
$p.cZ = (function() {
  return 5;
});
$p.cY = (function(idx) {
  switch (idx) {
    case 0: {
      return this.k;
      break;
    }
    case 1: {
      return this.bF;
      break;
    }
    case 2: {
      return this.ba;
      break;
    }
    case 3: {
      return this.bb;
      break;
    }
    case 4: {
      return this.o;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.a3 = (function(f) {
  return this.cy(f);
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.q))) {
    var io = ((index - this.bp) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.ba.a.length) ? this.ba.a[i3].a[i2].a[i1] : ((i2 < this.bb.a.length) ? this.bb.a[i2].a[i1] : this.o.a[i1]));
    } else if ((index >= this.bo)) {
      var io$2 = ((index - this.bo) | 0);
      return this.bF.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.k.a[index];
    }
  } else {
    throw this.aZ(index);
  }
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
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
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.k = null;
  this.o = null;
  this.q = 0;
  this.b0 = 0;
  this.bh = null;
  this.b1 = 0;
  this.bi = null;
  this.b2 = 0;
  this.aM = null;
  this.aO = null;
  this.aN = null;
  this.b0 = len1;
  this.bh = prefix2;
  this.b1 = len12;
  this.bi = prefix3;
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
$p.E = (function(index) {
  if (((index >= 0) && (index < this.q))) {
    var io = ((index - this.b2) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aM.a.length) ? this.aM.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aO.a.length) ? this.aO.a[i3].a[i2].a[i1] : ((i2 < this.aN.a.length) ? this.aN.a[i2].a[i1] : this.o.a[i1])));
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      return this.bi.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.b0)) {
      var io$3 = ((index - this.b0) | 0);
      return this.bh.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.k.a[index];
    }
  } else {
    throw this.aZ(index);
  }
});
$p.eb = (function(index, elem) {
  if (((index >= 0) && (index < this.q))) {
    if ((index >= this.b2)) {
      var io = ((index - this.b2) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.aM.a.length)) {
        var a4 = this.aM;
        var a4c = a4.n();
        var a3 = a4c.a[i4];
        var a3c = a3.n();
        var a2 = a3c.a[i3];
        var a2c = a2.n();
        var a1 = a2c.a[i2];
        var a1c = a1.n();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.k, this.b0, this.bh, this.b1, this.bi, this.b2, a4c, this.aO, this.aN, this.o, this.q);
      } else if ((i3 < this.aO.a.length)) {
        var a3$1 = this.aO;
        var a3c$1 = a3$1.n();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.n();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.n();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.k, this.b0, this.bh, this.b1, this.bi, this.b2, this.aM, a3c$1, this.aN, this.o, this.q);
      } else if ((i2 < this.aN.a.length)) {
        var a2$2 = this.aN;
        var a2c$2 = a2$2.n();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.n();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.k, this.b0, this.bh, this.b1, this.bi, this.b2, this.aM, this.aO, a2c$2, this.o, this.q);
      } else {
        var a1$3 = this.o;
        var a1c$3 = a1$3.n();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.k, this.b0, this.bh, this.b1, this.bi, this.b2, this.aM, this.aO, this.aN, a1c$3, this.q);
      }
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      var a3$2 = this.bi;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.n();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.n();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.n();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.k, this.b0, this.bh, this.b1, a3c$2, this.b2, this.aM, this.aO, this.aN, this.o, this.q);
    } else if ((index >= this.b0)) {
      var io$3 = ((index - this.b0) | 0);
      var a2$4 = this.bh;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.n();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.n();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.k, this.b0, a2c$4, this.b1, this.bi, this.b2, this.aM, this.aO, this.aN, this.o, this.q);
    } else {
      var a1$6 = this.k;
      var a1c$6 = a1$6.n();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.b0, this.bh, this.b1, this.bi, this.b2, this.aM, this.aO, this.aN, this.o, this.q);
    }
  } else {
    throw this.aZ(index);
  }
});
$p.e1 = (function(elem) {
  if ((this.o.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fk(this.o, elem);
    var x$2 = ((1 + this.q) | 0);
    return new $c_sci_Vector4(this.k, this.b0, this.bh, this.b1, this.bi, this.b2, this.aM, this.aO, this.aN, x$1, x$2);
  } else if ((this.aN.a.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().M(this.aN, this.o);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = ((1 + this.q) | 0);
    return new $c_sci_Vector4(this.k, this.b0, this.bh, this.b1, this.bi, this.b2, this.aM, this.aO, x$12, a, x$14);
  } else if ((this.aO.a.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().M(this.aO, $m_sci_VectorStatics$().M(this.aN, this.o));
    var x$24 = $m_sci_VectorStatics$().bG;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.q) | 0);
    return new $c_sci_Vector4(this.k, this.b0, this.bh, this.b1, this.bi, this.b2, this.aM, x$23, x$24, a$1, x$26);
  } else if ((this.aM.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().M(this.aM, $m_sci_VectorStatics$().M(this.aO, $m_sci_VectorStatics$().M(this.aN, this.o)));
    var x$35 = $m_sci_VectorStatics$().cM;
    var x$36 = $m_sci_VectorStatics$().bG;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$38 = ((1 + this.q) | 0);
    return new $c_sci_Vector4(this.k, this.b0, this.bh, this.b1, this.bi, this.b2, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.k;
    var $x_10 = this.b0;
    var $x_9 = this.bh;
    var $x_8 = this.b1;
    var $x_7 = this.bi;
    var $x_6 = this.b2;
    var $x_5 = this.aM;
    var $x_4 = this.b2;
    var $x_3 = $m_sci_VectorStatics$().iZ;
    var x = $m_sci_VectorStatics$().M(this.aO, $m_sci_VectorStatics$().M(this.aN, this.o));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().cM;
    var $x_1 = $m_sci_VectorStatics$().bG;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.q) | 0));
  }
});
$p.cy = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cq(this.k, f);
  var x$2 = $m_sci_VectorStatics$().ae(2, this.bh, f);
  var x$3 = $m_sci_VectorStatics$().ae(3, this.bi, f);
  var x$4 = $m_sci_VectorStatics$().ae(4, this.aM, f);
  var x$5 = $m_sci_VectorStatics$().ae(3, this.aO, f);
  var x$6 = $m_sci_VectorStatics$().ae(2, this.aN, f);
  var x$7 = $m_sci_VectorStatics$().cq(this.o, f);
  return new $c_sci_Vector4(x$1, this.b0, x$2, this.b1, x$3, this.b2, x$4, x$5, x$6, x$7, this.q);
});
$p.cZ = (function() {
  return 7;
});
$p.cY = (function(idx) {
  switch (idx) {
    case 0: {
      return this.k;
      break;
    }
    case 1: {
      return this.bh;
      break;
    }
    case 2: {
      return this.bi;
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
      return this.o;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.a3 = (function(f) {
  return this.cy(f);
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.q))) {
    var io = ((index - this.b2) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aM.a.length) ? this.aM.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aO.a.length) ? this.aO.a[i3].a[i2].a[i1] : ((i2 < this.aN.a.length) ? this.aN.a[i2].a[i1] : this.o.a[i1])));
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      return this.bi.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.b0)) {
      var io$3 = ((index - this.b0) | 0);
      return this.bh.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.k.a[index];
    }
  } else {
    throw this.aZ(index);
  }
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
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
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.k = null;
  this.o = null;
  this.q = 0;
  this.aB = 0;
  this.aS = null;
  this.aC = 0;
  this.aT = null;
  this.aD = 0;
  this.aU = null;
  this.aE = 0;
  this.ai = null;
  this.al = null;
  this.ak = null;
  this.aj = null;
  this.aB = len1;
  this.aS = prefix2;
  this.aC = len12;
  this.aT = prefix3;
  this.aD = len123;
  this.aU = prefix4;
  this.aE = len1234;
  this.ai = data5;
  this.al = suffix4;
  this.ak = suffix3;
  this.aj = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.E = (function(index) {
  if (((index >= 0) && (index < this.q))) {
    var io = ((index - this.aE) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ai.a.length) ? this.ai.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.al.a.length) ? this.al.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ak.a.length) ? this.ak.a[i3].a[i2].a[i1] : ((i2 < this.aj.a.length) ? this.aj.a[i2].a[i1] : this.o.a[i1]))));
    } else if ((index >= this.aD)) {
      var io$2 = ((index - this.aD) | 0);
      return this.aU.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aC)) {
      var io$3 = ((index - this.aC) | 0);
      return this.aT.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aB)) {
      var io$4 = ((index - this.aB) | 0);
      return this.aS.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.k.a[index];
    }
  } else {
    throw this.aZ(index);
  }
});
$p.eb = (function(index, elem) {
  if (((index >= 0) && (index < this.q))) {
    if ((index >= this.aE)) {
      var io = ((index - this.aE) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.ai.a.length)) {
        var a5 = this.ai;
        var a5c = a5.n();
        var a4 = a5c.a[i5];
        var a4c = a4.n();
        var a3 = a4c.a[i4];
        var a3c = a3.n();
        var a2 = a3c.a[i3];
        var a2c = a2.n();
        var a1 = a2c.a[i2];
        var a1c = a1.n();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, a5c, this.al, this.ak, this.aj, this.o, this.q);
      } else if ((i4 < this.al.a.length)) {
        var a4$1 = this.al;
        var a4c$1 = a4$1.n();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.n();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.n();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.n();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, this.ai, a4c$1, this.ak, this.aj, this.o, this.q);
      } else if ((i3 < this.ak.a.length)) {
        var a3$2 = this.ak;
        var a3c$2 = a3$2.n();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.n();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.n();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, this.ai, this.al, a3c$2, this.aj, this.o, this.q);
      } else if ((i2 < this.aj.a.length)) {
        var a2$3 = this.aj;
        var a2c$3 = a2$3.n();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.n();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, this.ai, this.al, this.ak, a2c$3, this.o, this.q);
      } else {
        var a1$4 = this.o;
        var a1c$4 = a1$4.n();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, this.ai, this.al, this.ak, this.aj, a1c$4, this.q);
      }
    } else if ((index >= this.aD)) {
      var io$2 = ((index - this.aD) | 0);
      var a4$2 = this.aU;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.n();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.n();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.n();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.n();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, a4c$2, this.aE, this.ai, this.al, this.ak, this.aj, this.o, this.q);
    } else if ((index >= this.aC)) {
      var io$3 = ((index - this.aC) | 0);
      var a3$4 = this.aT;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.n();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.n();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.n();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, a3c$4, this.aD, this.aU, this.aE, this.ai, this.al, this.ak, this.aj, this.o, this.q);
    } else if ((index >= this.aB)) {
      var io$4 = ((index - this.aB) | 0);
      var a2$6 = this.aS;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.n();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.n();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.k, this.aB, a2c$6, this.aC, this.aT, this.aD, this.aU, this.aE, this.ai, this.al, this.ak, this.aj, this.o, this.q);
    } else {
      var a1$8 = this.k;
      var a1c$8 = a1$8.n();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, this.ai, this.al, this.ak, this.aj, this.o, this.q);
    }
  } else {
    throw this.aZ(index);
  }
});
$p.e1 = (function(elem) {
  if ((this.o.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fk(this.o, elem);
    var x$2 = ((1 + this.q) | 0);
    return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, this.ai, this.al, this.ak, this.aj, x$1, x$2);
  } else if ((this.aj.a.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().M(this.aj, this.o);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = ((1 + this.q) | 0);
    return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, this.ai, this.al, this.ak, x$15, a, x$17);
  } else if ((this.ak.a.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().M(this.ak, $m_sci_VectorStatics$().M(this.aj, this.o));
    var x$30 = $m_sci_VectorStatics$().bG;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.q) | 0);
    return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, this.ai, this.al, x$29, x$30, a$1, x$32);
  } else if ((this.al.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().M(this.al, $m_sci_VectorStatics$().M(this.ak, $m_sci_VectorStatics$().M(this.aj, this.o)));
    var x$44 = $m_sci_VectorStatics$().cM;
    var x$45 = $m_sci_VectorStatics$().bG;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.q) | 0);
    return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, this.ai, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.ai.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().M(this.ai, $m_sci_VectorStatics$().M(this.al, $m_sci_VectorStatics$().M(this.ak, $m_sci_VectorStatics$().M(this.aj, this.o))));
    var x$58 = $m_sci_VectorStatics$().ff;
    var x$59 = $m_sci_VectorStatics$().cM;
    var x$60 = $m_sci_VectorStatics$().bG;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$62 = ((1 + this.q) | 0);
    return new $c_sci_Vector5(this.k, this.aB, this.aS, this.aC, this.aT, this.aD, this.aU, this.aE, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.k;
    var $x_13 = this.aB;
    var $x_12 = this.aS;
    var $x_11 = this.aC;
    var $x_10 = this.aT;
    var $x_9 = this.aD;
    var $x_8 = this.aU;
    var $x_7 = this.aE;
    var $x_6 = this.ai;
    var $x_5 = this.aE;
    var $x_4 = $m_sci_VectorStatics$().nq;
    var x = $m_sci_VectorStatics$().M(this.al, $m_sci_VectorStatics$().M(this.ak, $m_sci_VectorStatics$().M(this.aj, this.o)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().ff;
    var $x_2 = $m_sci_VectorStatics$().cM;
    var $x_1 = $m_sci_VectorStatics$().bG;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.q) | 0));
  }
});
$p.cy = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cq(this.k, f);
  var x$2 = $m_sci_VectorStatics$().ae(2, this.aS, f);
  var x$3 = $m_sci_VectorStatics$().ae(3, this.aT, f);
  var x$4 = $m_sci_VectorStatics$().ae(4, this.aU, f);
  var x$5 = $m_sci_VectorStatics$().ae(5, this.ai, f);
  var x$6 = $m_sci_VectorStatics$().ae(4, this.al, f);
  var x$7 = $m_sci_VectorStatics$().ae(3, this.ak, f);
  var x$8 = $m_sci_VectorStatics$().ae(2, this.aj, f);
  var x$9 = $m_sci_VectorStatics$().cq(this.o, f);
  return new $c_sci_Vector5(x$1, this.aB, x$2, this.aC, x$3, this.aD, x$4, this.aE, x$5, x$6, x$7, x$8, x$9, this.q);
});
$p.cZ = (function() {
  return 9;
});
$p.cY = (function(idx) {
  switch (idx) {
    case 0: {
      return this.k;
      break;
    }
    case 1: {
      return this.aS;
      break;
    }
    case 2: {
      return this.aT;
      break;
    }
    case 3: {
      return this.aU;
      break;
    }
    case 4: {
      return this.ai;
      break;
    }
    case 5: {
      return this.al;
      break;
    }
    case 6: {
      return this.ak;
      break;
    }
    case 7: {
      return this.aj;
      break;
    }
    case 8: {
      return this.o;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.a3 = (function(f) {
  return this.cy(f);
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.q))) {
    var io = ((index - this.aE) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ai.a.length) ? this.ai.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.al.a.length) ? this.al.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ak.a.length) ? this.ak.a[i3].a[i2].a[i1] : ((i2 < this.aj.a.length) ? this.aj.a[i2].a[i1] : this.o.a[i1]))));
    } else if ((index >= this.aD)) {
      var io$2 = ((index - this.aD) | 0);
      return this.aU.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aC)) {
      var io$3 = ((index - this.aC) | 0);
      return this.aT.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aB)) {
      var io$4 = ((index - this.aB) | 0);
      return this.aS.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.k.a[index];
    }
  } else {
    throw this.aZ(index);
  }
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
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
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.k = null;
  this.o = null;
  this.q = 0;
  this.am = 0;
  this.aF = null;
  this.an = 0;
  this.aG = null;
  this.ao = 0;
  this.aH = null;
  this.ap = 0;
  this.aI = null;
  this.au = 0;
  this.a8 = null;
  this.ac = null;
  this.ab = null;
  this.aa = null;
  this.a9 = null;
  this.am = len1;
  this.aF = prefix2;
  this.an = len12;
  this.aG = prefix3;
  this.ao = len123;
  this.aH = prefix4;
  this.ap = len1234;
  this.aI = prefix5;
  this.au = len12345;
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
$p.E = (function(index) {
  if (((index >= 0) && (index < this.q))) {
    var io = ((index - this.au) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a8.a.length) ? this.a8.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.ac.a.length) ? this.ac.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ab.a.length) ? this.ab.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aa.a.length) ? this.aa.a[i3].a[i2].a[i1] : ((i2 < this.a9.a.length) ? this.a9.a[i2].a[i1] : this.o.a[i1])))));
    } else if ((index >= this.ap)) {
      var io$2 = ((index - this.ap) | 0);
      return this.aI.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ao)) {
      var io$3 = ((index - this.ao) | 0);
      return this.aH.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.an)) {
      var io$4 = ((index - this.an) | 0);
      return this.aG.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.am)) {
      var io$5 = ((index - this.am) | 0);
      return this.aF.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.k.a[index];
    }
  } else {
    throw this.aZ(index);
  }
});
$p.eb = (function(index, elem) {
  if (((index >= 0) && (index < this.q))) {
    if ((index >= this.au)) {
      var io = ((index - this.au) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.a8.a.length)) {
        var a6 = this.a8;
        var a6c = a6.n();
        var a5 = a6c.a[i6];
        var a5c = a5.n();
        var a4 = a5c.a[i5];
        var a4c = a4.n();
        var a3 = a4c.a[i4];
        var a3c = a3.n();
        var a2 = a3c.a[i3];
        var a2c = a2.n();
        var a1 = a2c.a[i2];
        var a1c = a1.n();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, a6c, this.ac, this.ab, this.aa, this.a9, this.o, this.q);
      } else if ((i5 < this.ac.a.length)) {
        var a5$1 = this.ac;
        var a5c$1 = a5$1.n();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.n();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.n();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.n();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.n();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, a5c$1, this.ab, this.aa, this.a9, this.o, this.q);
      } else if ((i4 < this.ab.a.length)) {
        var a4$2 = this.ab;
        var a4c$2 = a4$2.n();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.n();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.n();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.n();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, a4c$2, this.aa, this.a9, this.o, this.q);
      } else if ((i3 < this.aa.a.length)) {
        var a3$3 = this.aa;
        var a3c$3 = a3$3.n();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.n();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.n();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, this.ab, a3c$3, this.a9, this.o, this.q);
      } else if ((i2 < this.a9.a.length)) {
        var a2$4 = this.a9;
        var a2c$4 = a2$4.n();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.n();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, this.ab, this.aa, a2c$4, this.o, this.q);
      } else {
        var a1$5 = this.o;
        var a1c$5 = a1$5.n();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, this.ab, this.aa, this.a9, a1c$5, this.q);
      }
    } else if ((index >= this.ap)) {
      var io$2 = ((index - this.ap) | 0);
      var a5$2 = this.aI;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.n();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.n();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.n();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.n();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.n();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, a5c$2, this.au, this.a8, this.ac, this.ab, this.aa, this.a9, this.o, this.q);
    } else if ((index >= this.ao)) {
      var io$3 = ((index - this.ao) | 0);
      var a4$4 = this.aH;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.n();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.n();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.n();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.n();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, a4c$4, this.ap, this.aI, this.au, this.a8, this.ac, this.ab, this.aa, this.a9, this.o, this.q);
    } else if ((index >= this.an)) {
      var io$4 = ((index - this.an) | 0);
      var a3$6 = this.aG;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.n();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.n();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.n();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, a3c$6, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, this.ab, this.aa, this.a9, this.o, this.q);
    } else if ((index >= this.am)) {
      var io$5 = ((index - this.am) | 0);
      var a2$8 = this.aF;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.n();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.n();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.k, this.am, a2c$8, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, this.ab, this.aa, this.a9, this.o, this.q);
    } else {
      var a1$10 = this.k;
      var a1c$10 = a1$10.n();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, this.ab, this.aa, this.a9, this.o, this.q);
    }
  } else {
    throw this.aZ(index);
  }
});
$p.e1 = (function(elem) {
  if ((this.o.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().fk(this.o, elem);
    var x$2 = ((1 + this.q) | 0);
    return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, this.ab, this.aa, this.a9, x$1, x$2);
  } else if ((this.a9.a.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().M(this.a9, this.o);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = ((1 + this.q) | 0);
    return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, this.ab, this.aa, x$18, a, x$20);
  } else if ((this.aa.a.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().M(this.aa, $m_sci_VectorStatics$().M(this.a9, this.o));
    var x$36 = $m_sci_VectorStatics$().bG;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.q) | 0);
    return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, this.ab, x$35, x$36, a$1, x$38);
  } else if ((this.ab.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().M(this.ab, $m_sci_VectorStatics$().M(this.aa, $m_sci_VectorStatics$().M(this.a9, this.o)));
    var x$53 = $m_sci_VectorStatics$().cM;
    var x$54 = $m_sci_VectorStatics$().bG;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.q) | 0);
    return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, this.ac, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.ac.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().M(this.ac, $m_sci_VectorStatics$().M(this.ab, $m_sci_VectorStatics$().M(this.aa, $m_sci_VectorStatics$().M(this.a9, this.o))));
    var x$70 = $m_sci_VectorStatics$().ff;
    var x$71 = $m_sci_VectorStatics$().cM;
    var x$72 = $m_sci_VectorStatics$().bG;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.q) | 0);
    return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, this.a8, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.a8.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().M(this.a8, $m_sci_VectorStatics$().M(this.ac, $m_sci_VectorStatics$().M(this.ab, $m_sci_VectorStatics$().M(this.aa, $m_sci_VectorStatics$().M(this.a9, this.o)))));
    var x$87 = $m_sci_VectorStatics$().iZ;
    var x$88 = $m_sci_VectorStatics$().ff;
    var x$89 = $m_sci_VectorStatics$().cM;
    var x$90 = $m_sci_VectorStatics$().bG;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$92 = ((1 + this.q) | 0);
    return new $c_sci_Vector6(this.k, this.am, this.aF, this.an, this.aG, this.ao, this.aH, this.ap, this.aI, this.au, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cy = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cq(this.k, f);
  var x$2 = $m_sci_VectorStatics$().ae(2, this.aF, f);
  var x$3 = $m_sci_VectorStatics$().ae(3, this.aG, f);
  var x$4 = $m_sci_VectorStatics$().ae(4, this.aH, f);
  var x$5 = $m_sci_VectorStatics$().ae(5, this.aI, f);
  var x$6 = $m_sci_VectorStatics$().ae(6, this.a8, f);
  var x$7 = $m_sci_VectorStatics$().ae(5, this.ac, f);
  var x$8 = $m_sci_VectorStatics$().ae(4, this.ab, f);
  var x$9 = $m_sci_VectorStatics$().ae(3, this.aa, f);
  var x$10 = $m_sci_VectorStatics$().ae(2, this.a9, f);
  var x$11 = $m_sci_VectorStatics$().cq(this.o, f);
  return new $c_sci_Vector6(x$1, this.am, x$2, this.an, x$3, this.ao, x$4, this.ap, x$5, this.au, x$6, x$7, x$8, x$9, x$10, x$11, this.q);
});
$p.cZ = (function() {
  return 11;
});
$p.cY = (function(idx) {
  switch (idx) {
    case 0: {
      return this.k;
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
      return this.o;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.a3 = (function(f) {
  return this.cy(f);
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.q))) {
    var io = ((index - this.au) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a8.a.length) ? this.a8.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.ac.a.length) ? this.ac.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ab.a.length) ? this.ab.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aa.a.length) ? this.aa.a[i3].a[i2].a[i1] : ((i2 < this.a9.a.length) ? this.a9.a[i2].a[i1] : this.o.a[i1])))));
    } else if ((index >= this.ap)) {
      var io$2 = ((index - this.ap) | 0);
      return this.aI.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ao)) {
      var io$3 = ((index - this.ao) | 0);
      return this.aH.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.an)) {
      var io$4 = ((index - this.an) | 0);
      return this.aG.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.am)) {
      var io$5 = ((index - this.am) | 0);
      return this.aF.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.k.a[index];
    }
  } else {
    throw this.aZ(index);
  }
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
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
  U: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.aY = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aY = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.bs = (function() {
  return "IndexedSeq";
});
$p.p = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.a3 = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bR = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bm = (function(len) {
  var x = this.aY.z();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bg = (function(size) {
});
$p.bd = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.z = (function() {
  return this.aY.z();
});
$p.G = (function() {
  return this.aY.z();
});
$p.pJ = (function(x) {
  var this$1 = this.aY;
  var str = ("" + $cToS(x));
  this$1.y = (this$1.y + str);
  return this;
});
$p.B = (function() {
  return this.aY.y;
});
$p.be = (function(s) {
  var this$1 = this.aY;
  this$1.y = (("" + this$1.y) + s);
  return this;
});
$p.nW = (function(xs) {
  if (false) {
    var this$3 = this.aY;
    var str = xs.sA;
    this$3.y = (("" + this$3.y) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.aY.nV(xs.c3);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.aY;
    var s = xs.aY;
    this$4.y = (("" + this$4.y) + s);
  } else {
    var ks = xs.G();
    if ((ks !== 0)) {
      var b = this.aY;
      if ((ks > 0)) {
        b.z();
      }
      var it = xs.p();
      while (it.u()) {
        var c = $uC(it.m());
        var str$1 = ("" + $cToS(c));
        b.y = (b.y + str$1);
      }
    }
  }
  return this;
});
$p.i = (function() {
  return (this.aY.z() === 0);
});
$p.bl = (function() {
  return $m_scm_IndexedSeq$();
});
$p.b4 = (function() {
  return this.aY.y;
});
$p.b3 = (function(elem) {
  return this.pJ($uC(elem));
});
$p.gs = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).nW(coll);
});
$p.gt = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).nW(coll);
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aY.oc(i));
});
$p.E = (function(i) {
  return $bC(this.aY.oc(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cm)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cm: 1,
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
  aO: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hm)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().gG($thiz);
  $thiz.cj = buf.cj;
  $thiz.de = buf.de;
  $thiz.hd = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.he = ((1 + $thiz.he) | 0);
  if ($thiz.hd) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.he = 0;
  this.cj = null;
  this.de = null;
  this.hd = false;
  this.ck = 0;
  this.he = 0;
  this.cj = $m_sci_Nil$();
  this.de = null;
  this.hd = false;
  this.ck = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.bg = (function(size) {
});
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a3 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.p = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cj.p(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.he)));
});
$p.e6 = (function() {
  return $m_scm_ListBuffer$();
});
$p.E = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cj, i);
});
$p.z = (function() {
  return this.ck;
});
$p.G = (function() {
  return this.ck;
});
$p.i = (function() {
  return (this.ck === 0);
});
$p.eN = (function() {
  this.hd = (!this.i());
  return this.cj;
});
$p.hq = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.ck === 0)) {
    this.cj = last1;
  } else {
    this.de.Z = last1;
  }
  this.de = last1;
  this.ck = ((1 + this.ck) | 0);
  return this;
});
$p.gG = (function(xs) {
  var it = xs.p();
  if (it.u()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.m(), $m_sci_Nil$());
    this.cj = last0;
    while (it.u()) {
      var last1 = new $c_sci_$colon$colon(it.m(), $m_sci_Nil$());
      last0.Z = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.ck = len;
    this.de = last0;
  }
  return this;
});
$p.pH = (function(xs) {
  var it = xs.p();
  if (it.u()) {
    var fresh = new $c_scm_ListBuffer().gG(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.ck === 0)) {
      this.cj = fresh.cj;
    } else {
      this.de.Z = fresh.cj;
    }
    this.de = fresh.de;
    this.ck = ((this.ck + fresh.ck) | 0);
  }
  return this;
});
$p.bs = (function() {
  return "ListBuffer";
});
$p.bd = (function(elems) {
  return this.pH(elems);
});
$p.b3 = (function(elem) {
  return this.hq(elem);
});
$p.b4 = (function() {
  return this.eN();
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.cj, i);
});
$p.bl = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  cl: 1,
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
  K: 1,
  O: 1,
  I: 1,
  B: 1,
  b3: 1,
  J: 1,
  H: 1,
  aH: 1,
  s: 1,
  l: 1,
  ac: 1,
  M: 1,
  U: 1,
  a: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.dM = 0;
  $thiz.dL = initialElements;
  $thiz.aP = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.dM = 0;
  this.dL = null;
  this.aP = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.a3 = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.p = (function() {
  return this.sy().p();
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bR = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bm = (function(len) {
  var x = this.aP;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.G = (function() {
  return this.aP;
});
$p.jo = (function(n) {
  this.dL = $m_scm_ArrayBuffer$().p2(this.dL, this.aP, n);
});
$p.bg = (function(size) {
  if (((size > this.aP) && (size >= 1))) {
    this.jo(size);
  }
});
$p.E = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().gw(n, (((-1) + this.aP) | 0));
  }
  if ((hi > this.aP)) {
    throw $m_scg_CommonErrors$().gw((((-1) + hi) | 0), (((-1) + this.aP) | 0));
  }
  return this.dL.a[n];
});
$p.su = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().gw(index, (((-1) + this.aP) | 0));
  }
  if ((hi > this.aP)) {
    throw $m_scg_CommonErrors$().gw((((-1) + hi) | 0), (((-1) + this.aP) | 0));
  }
  this.dM = ((1 + this.dM) | 0);
  this.dL.a[index] = elem;
});
$p.z = (function() {
  return this.aP;
});
$p.sy = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.dM)));
});
$p.e6 = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.pO = (function(elem) {
  this.dM = ((1 + this.dM) | 0);
  var newSize = ((1 + this.aP) | 0);
  this.jo(newSize);
  this.aP = newSize;
  this.su((((-1) + this.aP) | 0), elem);
  return this;
});
$p.nR = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aP;
    if ((elemsLength > 0)) {
      this.dM = ((1 + this.dM) | 0);
      this.jo(((this.aP + elemsLength) | 0));
      $m_s_Array$().gn(elems.dL, 0, this.dL, this.aP, elemsLength);
      this.aP = ((this.aP + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bs = (function() {
  return "ArrayBuffer";
});
$p.c6 = (function(xs, start, len) {
  var srcLen = this.aP;
  var destLen = $m_jl_reflect_Array$().co(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().gn(this.dL, 0, xs, start, copied);
  }
  return copied;
});
$p.bd = (function(elems) {
  return this.nR(elems);
});
$p.b3 = (function(elem) {
  return this.pO(elem);
});
$p.bl = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.h = (function(v1) {
  return this.E((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  c8: 1,
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
  K: 1,
  O: 1,
  I: 1,
  B: 1,
  b3: 1,
  J: 1,
  H: 1,
  aH: 1,
  ck: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  s: 1,
  l: 1,
  U: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.dX = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.dX = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bg = (function(size) {
});
$p.bs = (function() {
  return "IndexedSeq";
});
$p.p = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.a3 = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.t = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bR = (function() {
  return $f_sc_IndexedSeqOps__headOption__s_Option(this);
});
$p.bm = (function(len) {
  var x = (this.dX.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.e6 = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.E = (function(index) {
  return this.dX[index];
});
$p.z = (function() {
  return (this.dX.length | 0);
});
$p.G = (function() {
  return (this.dX.length | 0);
});
$p.c5 = (function() {
  return "WrappedArray";
});
$p.b4 = (function() {
  return this;
});
$p.b3 = (function(elem) {
  this.dX.push(elem);
  return this;
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.dX[index];
});
$p.bl = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  ib: 1,
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
  K: 1,
  O: 1,
  I: 1,
  B: 1,
  b3: 1,
  J: 1,
  H: 1,
  aH: 1,
  s: 1,
  l: 1,
  R: 1,
  q: 1,
  n: 1,
  S: 1,
  ck: 1,
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
