(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'JSON-Forms:core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'JSON-Forms:core'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'JSON-Forms:core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'JSON-Forms:core'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'JSON-Forms:core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'JSON-Forms:core'.");
    }
    root['JSON-Forms:core'] = factory(typeof this['JSON-Forms:core'] === 'undefined' ? {} : this['JSON-Forms:core'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.m3;
  var VOID = kotlin_kotlin.$_$.e;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var protoOf = kotlin_kotlin.$_$.b7;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var getKClass = kotlin_kotlin.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.k9;
  var createKType = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var THROW_CCE = kotlin_kotlin.$_$.z8;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var isInterface = kotlin_kotlin.$_$.r6;
  var classMeta = kotlin_kotlin.$_$.b6;
  var setMetadataFor = kotlin_kotlin.$_$.c7;
  var JsonNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var Pair = kotlin_kotlin.$_$.x8;
  var ensureNotNull = kotlin_kotlin.$_$.n9;
  var toMap = kotlin_kotlin.$_$.m5;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b4;
  var copyToArray = kotlin_kotlin.$_$.o4;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var JsonNull_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var to = kotlin_kotlin.$_$.w9;
  var putAll = kotlin_kotlin.$_$.e5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.t9;
  var interfaceMeta = kotlin_kotlin.$_$.j6;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.v9;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var JsonPrimitive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var toBoolean = kotlin_kotlin.$_$.d8;
  var JsonPrimitive_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var mapCapacity = kotlin_kotlin.$_$.b5;
  var coerceAtLeast = kotlin_kotlin.$_$.i7;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var toMutableList = kotlin_kotlin.$_$.n5;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var Number_0 = kotlin_kotlin.$_$.w8;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.a7;
  var defineProp = kotlin_kotlin.$_$.c6;
  var hashCode = kotlin_kotlin.$_$.i6;
  var equals = kotlin_kotlin.$_$.d6;
  var Entry = kotlin_kotlin.$_$.u3;
  var toSet = kotlin_kotlin.$_$.p5;
  var toSet_0 = kotlin_kotlin.$_$.o5;
  var isArray = kotlin_kotlin.$_$.k6;
  var Map = kotlin_kotlin.$_$.v3;
  var joinToString = kotlin_kotlin.$_$.w4;
  var contains = kotlin_kotlin.$_$.c4;
  var JsonPrimitive_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var toString_0 = kotlin_kotlin.$_$.g7;
  var removeSurrounding = kotlin_kotlin.$_$.x7;
  var emptySet = kotlin_kotlin.$_$.r4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var Default_getInstance_0 = kotlin_kotlin.$_$.c3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Document, 'Document', classMeta);
  function visitDocument(document) {
    return this.visit(document.root);
  }
  function visit(element) {
    var tmp;
    if (element instanceof ArrayElement) {
      tmp = this.visitArray(element);
    } else {
      if (element instanceof BooleanElement) {
        tmp = this.visitBoolean(element);
      } else {
        if (element instanceof EnumElement) {
          tmp = this.visitEnum(element);
        } else {
          if (element instanceof IntegerElement) {
            tmp = this.visitInteger(element);
          } else {
            if (element instanceof NullElement) {
              tmp = this.visitNull(element);
            } else {
              if (element instanceof NumberElement) {
                tmp = this.visitNumber(element);
              } else {
                if (element instanceof StringElement) {
                  tmp = this.visitString(element);
                } else {
                  if (element instanceof ObjectElement) {
                    tmp = this.visitObject(element);
                  } else {
                    if (element instanceof OptionalElement) {
                      tmp = this.visitOptional(element);
                    } else {
                      if (element instanceof UnresolvedElement) {
                        tmp = this.visitUnresolved(element);
                      } else {
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  setMetadataFor(DocumentVisitor, 'DocumentVisitor', interfaceMeta);
  setMetadataFor(Element, 'Element', classMeta);
  setMetadataFor(BasicElement, 'BasicElement', classMeta, Element);
  setMetadataFor(UnresolvedElement, 'UnresolvedElement', classMeta, Element);
  setMetadataFor(NullElement, 'NullElement', classMeta, BasicElement);
  setMetadataFor(StringElement, 'StringElement', classMeta, BasicElement);
  setMetadataFor(NumberElement, 'NumberElement', classMeta, BasicElement);
  setMetadataFor(IntegerElement, 'IntegerElement', classMeta, BasicElement);
  setMetadataFor(BooleanElement, 'BooleanElement', classMeta, BasicElement);
  setMetadataFor(EnumElement, 'EnumElement', classMeta, BasicElement);
  setMetadataFor(ObjectElement, 'ObjectElement', classMeta, Element);
  setMetadataFor(ArrayElement, 'ArrayElement', classMeta, Element);
  setMetadataFor(OptionalElement, 'OptionalElement', classMeta, Element);
  setMetadataFor(JsonNumber, 'JsonNumber', classMeta, Number_0);
  setMetadataFor(JsonTreeBuilder, 'JsonTreeBuilder', objectMeta);
  setMetadataFor(JMapEntry, 'JMapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(JMap, 'JMap', classMeta, VOID, [Map]);
  setMetadataFor(DataType, 'DataType', classMeta);
  setMetadataFor(BasicType, 'BasicType', classMeta, DataType);
  setMetadataFor(UnknownType, 'UnknownType', classMeta, BasicType, VOID, UnknownType);
  setMetadataFor(NullType, 'NullType', classMeta, BasicType, VOID, NullType);
  setMetadataFor(StringType, 'StringType', classMeta, BasicType, VOID, StringType);
  setMetadataFor(NumberType, 'NumberType', classMeta, BasicType, VOID, NumberType);
  setMetadataFor(IntegerType, 'IntegerType', classMeta, BasicType, VOID, IntegerType);
  setMetadataFor(BooleanType, 'BooleanType', classMeta, BasicType, VOID, BooleanType);
  setMetadataFor(VariantType, 'VariantType', classMeta, BasicType);
  setMetadataFor(EnumType, 'EnumType', classMeta, BasicType);
  setMetadataFor(OptionalType, 'OptionalType', classMeta, DataType);
  setMetadataFor(ObjectType, 'ObjectType', classMeta, DataType);
  setMetadataFor(ArrayType, 'ArrayType', classMeta, DataType);
  setMetadataFor(Schema, 'Schema', classMeta);
  setMetadataFor(Utils, 'Utils', objectMeta);
  //endregion
  function Document$json$lambda($prettyPrintJson) {
    return function ($this$Json) {
      $this$Json.iy_1 = $prettyPrintJson;
      return Unit_instance;
    };
  }
  function Document(schema, jsonElement, prettyPrintJson) {
    prettyPrintJson = prettyPrintJson === VOID ? true : prettyPrintJson;
    this.root = fromJson(jsonElement, schema.e18_1);
    var tmp = this;
    tmp.d18_1 = Json(VOID, Document$json$lambda(prettyPrintJson));
  }
  protoOf(Document).f18 = function () {
    return this.root;
  };
  protoOf(Document).getJson = function () {
    // Inline function 'kotlinx.serialization.encodeToString' call
    var this_0 = this.d18_1;
    var value = this.root.g18();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.zh();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(JsonElement), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    return this_0.mx(tmp$ret$1, value);
  };
  protoOf(Document).toString = function () {
    return 'Document: root = ' + this.root;
  };
  function fromJson(json, type) {
    var tmp;
    if (type instanceof NullType) {
      tmp = (new NullElement(type)).o18(get_jsonPrimitive(json).mz());
    } else {
      if (type instanceof StringType) {
        tmp = (new StringElement(type)).o18(get_jsonPrimitive(json).mz());
      } else {
        if (type instanceof NumberType) {
          tmp = (new NumberElement(type)).o18(get_jsonPrimitive(json).mz());
        } else {
          if (type instanceof IntegerType) {
            tmp = (new IntegerElement(type)).o18(get_jsonPrimitive(json).mz());
          } else {
            if (type instanceof BooleanType) {
              tmp = (new BooleanElement(type)).o18(get_jsonPrimitive(json).mz());
            } else {
              if (type instanceof EnumType) {
                tmp = (new EnumElement(type)).o18(get_jsonPrimitive(json).mz());
              } else {
                if (type instanceof ArrayType) {
                  // Inline function 'kotlin.collections.toTypedArray' call
                  // Inline function 'kotlin.collections.map' call
                  var this_0 = get_jsonArray(json);
                  // Inline function 'kotlin.collections.mapTo' call
                  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
                  var tmp0_iterator = this_0.p();
                  while (tmp0_iterator.q()) {
                    var item = tmp0_iterator.s();
                    // Inline function 'ru.itmo.json_forms.core.document.fromJson.<anonymous>' call
                    var tmp$ret$0 = fromJson(item, type.items);
                    destination.m(tmp$ret$0);
                  }
                  var items = copyToArray(destination);
                  tmp = new ArrayElement(type, items);
                } else {
                  if (type instanceof ObjectType) {
                    // Inline function 'kotlin.collections.map' call
                    var this_1 = get_jsonObject(json);
                    // Inline function 'kotlin.collections.mapTo' call
                    var destination_0 = ArrayList_init_$Create$(this_1.u());
                    // Inline function 'kotlin.collections.iterator' call
                    var tmp0_iterator_0 = this_1.r1().p();
                    while (tmp0_iterator_0.q()) {
                      var item_0 = tmp0_iterator_0.s();
                      // Inline function 'ru.itmo.json_forms.core.document.fromJson.<anonymous>' call
                      var tmp_0;
                      if (type.properties.m18(item_0.s1())) {
                        tmp_0 = new Pair(item_0.s1(), fromJson(item_0.t1(), ensureNotNull(type.properties.l18(item_0.s1()))));
                      } else {
                        tmp_0 = new Pair(item_0.s1(), new UnresolvedElement(new UnknownType(), item_0.t1()));
                      }
                      var tmp$ret$5 = tmp_0;
                      destination_0.m(tmp$ret$5);
                    }
                    var properties = toMap(destination_0);
                    var obj = new ObjectElement(type);
                    obj.n18_1.q1(properties);
                    tmp = obj;
                  } else {
                    if (type instanceof OptionalType) {
                      var tmp_1;
                      if (json instanceof JsonNull) {
                        tmp_1 = new OptionalElement(type, null);
                      } else {
                        tmp_1 = new OptionalElement(type, fromJson(json, type.someType));
                      }
                      tmp = tmp_1;
                    } else {
                      tmp = new UnresolvedElement(type, json);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var tmp_2 = tmp;
    return tmp_2 instanceof Element ? tmp_2 : THROW_CCE();
  }
  function getDefaultElement(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof NullType) {
      tmp = new NullElement(_this__u8e3s4);
    } else {
      if (_this__u8e3s4 instanceof StringType) {
        tmp = (new StringElement(_this__u8e3s4)).o18(_this__u8e3s4.defaultValue);
      } else {
        if (_this__u8e3s4 instanceof NumberType) {
          tmp = (new NumberElement(_this__u8e3s4)).o18(_this__u8e3s4.defaultValue);
        } else {
          if (_this__u8e3s4 instanceof IntegerType) {
            tmp = (new IntegerElement(_this__u8e3s4)).o18(_this__u8e3s4.defaultValue);
          } else {
            if (_this__u8e3s4 instanceof BooleanType) {
              tmp = (new BooleanElement(_this__u8e3s4)).o18(_this__u8e3s4.defaultValue);
            } else {
              if (_this__u8e3s4 instanceof EnumType) {
                tmp = (new EnumElement(_this__u8e3s4)).o18(_this__u8e3s4.defaultValue);
              } else {
                if (_this__u8e3s4 instanceof ArrayType) {
                  // Inline function 'kotlin.arrayOf' call
                  // Inline function 'kotlin.js.unsafeCast' call
                  // Inline function 'kotlin.js.asDynamic' call
                  var tmp$ret$2 = [];
                  tmp = new ArrayElement(_this__u8e3s4, tmp$ret$2);
                } else {
                  if (_this__u8e3s4 instanceof ObjectType) {
                    // Inline function 'kotlin.collections.map' call
                    var this_0 = _this__u8e3s4.properties;
                    // Inline function 'kotlin.collections.mapTo' call
                    var destination = ArrayList_init_$Create$(this_0.u());
                    // Inline function 'kotlin.collections.iterator' call
                    var tmp0_iterator = this_0.r1().p();
                    while (tmp0_iterator.q()) {
                      var item = tmp0_iterator.s();
                      // Inline function 'ru.itmo.json_forms.core.document.getDefaultElement.<anonymous>' call
                      // Inline function 'kotlin.collections.component1' call
                      var k = item.s1();
                      // Inline function 'kotlin.collections.component2' call
                      var v = item.t1();
                      var tmp$ret$6 = to(k, getDefaultElement(v));
                      destination.m(tmp$ret$6);
                    }
                    var properties = destination;
                    var obj = new ObjectElement(_this__u8e3s4);
                    putAll(obj.n18_1, properties);
                    tmp = obj;
                  } else {
                    if (_this__u8e3s4 instanceof OptionalType) {
                      tmp = new OptionalElement(_this__u8e3s4, null);
                    } else {
                      tmp = new UnresolvedElement(_this__u8e3s4, JsonNull_getInstance());
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function DocumentVisitor() {
  }
  function Element(type) {
    this.type = type;
  }
  protoOf(Element).p18 = function () {
    return this.type;
  };
  protoOf(Element).toString = function () {
    return toString(getKClassFromExpression(this).a5());
  };
  function BasicElement(type) {
    Element.call(this, type);
    this.value = type.defaultValue;
  }
  protoOf(BasicElement).q18 = function (_set____db54di) {
    this.value = _set____db54di;
  };
  protoOf(BasicElement).t1 = function () {
    return this.value;
  };
  protoOf(BasicElement).o18 = function (value) {
    this.value = value;
    return this;
  };
  protoOf(BasicElement).toString = function () {
    return protoOf(Element).toString.call(this) + ': ' + ('value = ' + this.value);
  };
  function UnresolvedElement(type, untouched) {
    Element.call(this, type);
    this.r18_1 = untouched;
  }
  protoOf(UnresolvedElement).g18 = function () {
    return this.r18_1;
  };
  function NullElement(type) {
    BasicElement.call(this, type);
  }
  protoOf(NullElement).g18 = function () {
    return JsonNull_getInstance();
  };
  function StringElement(type) {
    BasicElement.call(this, type);
  }
  protoOf(StringElement).g18 = function () {
    return JsonPrimitive(this.value);
  };
  function NumberElement(type) {
    BasicElement.call(this, type);
  }
  protoOf(NumberElement).g18 = function () {
    return JsonPrimitive_0(new JsonNumber(this.value));
  };
  function IntegerElement(type) {
    BasicElement.call(this, type);
  }
  protoOf(IntegerElement).g18 = function () {
    return JsonPrimitive_0(new JsonNumber(this.value));
  };
  function BooleanElement(type) {
    BasicElement.call(this, type);
  }
  protoOf(BooleanElement).g18 = function () {
    return JsonPrimitive_1(toBoolean(this.value));
  };
  function EnumElement(type) {
    BasicElement.call(this, type);
  }
  protoOf(EnumElement).g18 = function () {
    return JsonPrimitive(this.value);
  };
  function ObjectElement(type) {
    Element.call(this, type);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.n18_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ObjectElement).s18 = function () {
    return this.n18_1;
  };
  protoOf(ObjectElement).getProperties = function () {
    return toJMap(this.n18_1);
  };
  protoOf(ObjectElement).addProperty = function (name, type) {
    var property = getDefaultElement(type);
    // Inline function 'kotlin.collections.set' call
    this.n18_1.p1(name, property);
    return property;
  };
  protoOf(ObjectElement).removeProperty = function (name) {
    return this.n18_1.u1(name);
  };
  protoOf(ObjectElement).g18 = function () {
    // Inline function 'kotlin.collections.associate' call
    var this_0 = this.n18_1.r1();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var tmp0_iterator = this_0.p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.s();
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'ru.itmo.json_forms.core.document.ObjectElement.toJsonElement.<anonymous>' call
      var pair = new Pair(element.s1(), element.t1().g18());
      destination.p1(pair.da_1, pair.ea_1);
    }
    return new JsonObject(destination);
  };
  function ArrayElement(type, items) {
    Element.call(this, type);
    this.t18_1 = toMutableList(items);
  }
  protoOf(ArrayElement).items = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.t18_1;
    return copyToArray(this_0);
  };
  protoOf(ArrayElement).u18 = function (index) {
    var itemType = this.type.items;
    var item = getDefaultElement(itemType);
    this.t18_1.e1(index, item);
    return item;
  };
  protoOf(ArrayElement).addItem = function (index, $super) {
    index = index === VOID ? this.t18_1.u() : index;
    return this.u18(index);
  };
  protoOf(ArrayElement).removeItemAtIndex = function (index) {
    this.t18_1.d1(index);
  };
  protoOf(ArrayElement).removeItem = function (element) {
    this.t18_1.n(element);
  };
  protoOf(ArrayElement).g18 = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.t18_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.s();
      // Inline function 'ru.itmo.json_forms.core.document.ArrayElement.toJsonElement.<anonymous>' call
      var tmp$ret$0 = item.g18();
      destination.m(tmp$ret$0);
    }
    return new JsonArray(destination);
  };
  function OptionalElement(type, value) {
    Element.call(this, type);
    this.v18_1 = value;
  }
  protoOf(OptionalElement).get = function () {
    return this.v18_1;
  };
  protoOf(OptionalElement).put = function () {
    this.v18_1 = getDefaultElement(this.type);
    return ensureNotNull(this.v18_1);
  };
  protoOf(OptionalElement).none = function () {
    this.v18_1 = null;
  };
  protoOf(OptionalElement).g18 = function () {
    var tmp0_safe_receiver = this.v18_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g18();
    return tmp1_elvis_lhs == null ? JsonNull_getInstance() : tmp1_elvis_lhs;
  };
  function JsonNumber(v) {
    Number_0.call(this);
    this.w18_1 = v;
  }
  protoOf(JsonNumber).toString = function () {
    return toString(this.w18_1);
  };
  function JsonTreeBuilder() {
  }
  protoOf(JsonTreeBuilder).x18 = function (json, schema, prettyPrintJson) {
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.zh();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var schemaJsonObj = this_0.nx(tmp$ret$1, schema);
    var schemaObj = new Schema(schemaJsonObj);
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_3 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_4 = this_3.zh();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_5 = serializer(this_4, createKType(getKClass(JsonObject), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
    var jsonElement = this_3.nx(tmp$ret$4, json);
    return new Document(schemaObj, jsonElement, prettyPrintJson);
  };
  protoOf(JsonTreeBuilder).build = function (json, schema, prettyPrintJson, $super) {
    prettyPrintJson = prettyPrintJson === VOID ? true : prettyPrintJson;
    return this.x18(json, schema, prettyPrintJson);
  };
  var JsonTreeBuilder_instance;
  function JsonTreeBuilder_getInstance() {
    return JsonTreeBuilder_instance;
  }
  function JMapEntry(key, value) {
    this.y18_1 = key;
    this.z18_1 = value;
  }
  protoOf(JMapEntry).s1 = function () {
    return this.y18_1;
  };
  protoOf(JMapEntry).t1 = function () {
    return this.z18_1;
  };
  protoOf(JMapEntry).getKey = function () {
    return this.y18_1;
  };
  protoOf(JMapEntry).getValue = function () {
    return this.z18_1;
  };
  protoOf(JMapEntry).fa = function () {
    return this.y18_1;
  };
  protoOf(JMapEntry).ga = function () {
    return this.z18_1;
  };
  protoOf(JMapEntry).a19 = function (key, value) {
    return new JMapEntry(key, value);
  };
  protoOf(JMapEntry).copy = function (key, value, $super) {
    key = key === VOID ? this.y18_1 : key;
    value = value === VOID ? this.z18_1 : value;
    return this.a19(key, value);
  };
  protoOf(JMapEntry).toString = function () {
    return 'JMapEntry(key=' + this.y18_1 + ', value=' + this.z18_1 + ')';
  };
  protoOf(JMapEntry).hashCode = function () {
    var result = this.y18_1 == null ? 0 : hashCode(this.y18_1);
    result = imul(result, 31) + (this.z18_1 == null ? 0 : hashCode(this.z18_1)) | 0;
    return result;
  };
  protoOf(JMapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JMapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof JMapEntry ? other : THROW_CCE();
    if (!equals(this.y18_1, tmp0_other_with_cast.y18_1))
      return false;
    if (!equals(this.z18_1, tmp0_other_with_cast.z18_1))
      return false;
    return true;
  };
  function JMap(entries) {
    this.h18_1 = toSet(entries);
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(entries.length);
    var inductionVariable = 0;
    var last = entries.length;
    while (inductionVariable < last) {
      var item = entries[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'ru.itmo.json_forms.core.ir.JMap.keys.<anonymous>' call
      var tmp$ret$0 = item.y18_1;
      destination.m(tmp$ret$0);
    }
    tmp.i18_1 = toSet_0(destination);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(entries.length);
    var inductionVariable_0 = 0;
    var last_0 = entries.length;
    while (inductionVariable_0 < last_0) {
      var item_0 = entries[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'ru.itmo.json_forms.core.ir.JMap.values.<anonymous>' call
      var tmp$ret$3 = item_0.z18_1;
      destination_0.m(tmp$ret$3);
    }
    tmp_0.j18_1 = toSet_0(destination_0);
    this.k18_1 = entries.length;
    this.jsEntries = entries;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(entries.length);
    var inductionVariable_1 = 0;
    var last_1 = entries.length;
    while (inductionVariable_1 < last_1) {
      var item_1 = entries[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'ru.itmo.json_forms.core.ir.JMap.jsKeys.<anonymous>' call
      var tmp_2 = item_1.y18_1;
      var tmp$ret$6 = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
      destination_1.m(tmp$ret$6);
    }
    var tmp_3 = copyToArray(destination_1);
    tmp_1.jsKeys = isArray(tmp_3) ? tmp_3 : THROW_CCE();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(entries.length);
    var inductionVariable_2 = 0;
    var last_2 = entries.length;
    while (inductionVariable_2 < last_2) {
      var item_2 = entries[inductionVariable_2];
      inductionVariable_2 = inductionVariable_2 + 1 | 0;
      // Inline function 'ru.itmo.json_forms.core.ir.JMap.jsValues.<anonymous>' call
      var tmp_5 = item_2.z18_1;
      var tmp$ret$10 = !(tmp_5 == null) ? tmp_5 : THROW_CCE();
      destination_2.m(tmp$ret$10);
    }
    var tmp_6 = copyToArray(destination_2);
    tmp_4.jsValues = isArray(tmp_6) ? tmp_6 : THROW_CCE();
  }
  protoOf(JMap).r1 = function () {
    return this.h18_1;
  };
  protoOf(JMap).o1 = function () {
    return this.i18_1;
  };
  protoOf(JMap).b19 = function () {
    return this.j18_1;
  };
  protoOf(JMap).u = function () {
    return this.k18_1;
  };
  protoOf(JMap).c19 = function (value) {
    return this.j18_1.v(value);
  };
  protoOf(JMap).d19 = function (value) {
    if (!(value == null ? true : !(value == null)))
      return false;
    return this.c19((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(JMap).m18 = function (key) {
    return this.i18_1.v(key);
  };
  protoOf(JMap).x1 = function (key) {
    if (!(key == null ? true : !(key == null)))
      return false;
    return this.m18((key == null ? true : !(key == null)) ? key : THROW_CCE());
  };
  protoOf(JMap).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JMap))
      THROW_CCE();
    return equals(this.h18_1, other.h18_1);
  };
  protoOf(JMap).l18 = function (key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.h18_1.p();
      while (tmp0_iterator.q()) {
        var element = tmp0_iterator.s();
        // Inline function 'ru.itmo.json_forms.core.ir.JMap.get.<anonymous>' call
        if (equals(element.s1(), key)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1();
  };
  protoOf(JMap).z1 = function (key) {
    if (!(key == null ? true : !(key == null)))
      return null;
    return this.l18((key == null ? true : !(key == null)) ? key : THROW_CCE());
  };
  protoOf(JMap).hashCode = function () {
    return hashCode(this.h18_1);
  };
  protoOf(JMap).x = function () {
    return this.k18_1 === 0;
  };
  protoOf(JMap).e19 = function () {
    return this.jsEntries;
  };
  protoOf(JMap).f19 = function () {
    return this.jsKeys;
  };
  protoOf(JMap).g19 = function () {
    return this.jsValues;
  };
  function toJMapEntry(_this__u8e3s4) {
    return new JMapEntry(_this__u8e3s4.s1(), _this__u8e3s4.t1());
  }
  function toJMap(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.r1();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.s();
      // Inline function 'ru.itmo.json_forms.core.ir.toJMap.<anonymous>' call
      var tmp$ret$0 = toJMapEntry(item);
      destination.m(tmp$ret$0);
    }
    var tmp$ret$3 = copyToArray(destination);
    return new JMap(tmp$ret$3);
  }
  function DataType() {
    this.title = null;
    this.description = null;
    this.defaultValue = null;
    this.uniqId = Utils_instance.h19();
  }
  protoOf(DataType).i19 = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(DataType).j19 = function () {
    return this.title;
  };
  protoOf(DataType).k19 = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(DataType).l19 = function () {
    return this.description;
  };
  protoOf(DataType).m19 = function (_set____db54di) {
    this.defaultValue = _set____db54di;
  };
  protoOf(DataType).n19 = function () {
    return this.defaultValue;
  };
  protoOf(DataType).o19 = function () {
    return this.uniqId;
  };
  protoOf(DataType).withTitle = function (title) {
    this.title = title;
    return this;
  };
  protoOf(DataType).withDescription = function (description) {
    this.description = description;
    return this;
  };
  protoOf(DataType).withDefaultValue = function (defaultValue) {
    this.defaultValue = defaultValue;
    return this;
  };
  function BasicType() {
    DataType.call(this);
  }
  protoOf(BasicType).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = false;
    } else {
      tmp = getKClassFromExpression(this).equals(getKClassFromExpression(other));
    }
    return tmp;
  };
  protoOf(BasicType).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(BasicType).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).a5());
  };
  function UnknownType() {
    BasicType.call(this);
  }
  function NullType() {
    BasicType.call(this);
  }
  function StringType() {
    BasicType.call(this);
  }
  function NumberType() {
    BasicType.call(this);
  }
  function IntegerType() {
    BasicType.call(this);
  }
  function BooleanType() {
    BasicType.call(this);
  }
  function VariantType(tags) {
    BasicType.call(this);
    this.tags = tags;
  }
  protoOf(VariantType).p19 = function () {
    return this.tags;
  };
  protoOf(VariantType).toString = function () {
    return protoOf(BasicType).toString.call(this) + '[ ' + joinToString(this.tags, ' | ') + ' ]';
  };
  function EnumType(values) {
    BasicType.call(this);
    this.values = values;
  }
  protoOf(EnumType).b19 = function () {
    return this.values;
  };
  protoOf(EnumType).toString = function () {
    return protoOf(BasicType).toString.call(this) + '[ ' + joinToString(this.values, ' | ') + ' ]';
  };
  function OptionalType(someType) {
    DataType.call(this);
    this.someType = someType;
  }
  protoOf(OptionalType).q19 = function () {
    return this.someType;
  };
  protoOf(OptionalType).toString = function () {
    return '' + this.someType + '?';
  };
  function ObjectType(properties, required) {
    DataType.call(this);
    this.properties = properties;
    this.required = required;
    var tmp = this;
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.properties;
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.r1().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.s();
      // Inline function 'ru.itmo.json_forms.core.schema.ObjectType.optionalProperties.<anonymous>' call
      if (!contains(this.required, element.s1())) {
        destination.p1(element.s1(), element.t1());
      }
    }
    tmp.optionalProperties = toJMap(destination);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_1 = this.properties;
    var destination_0 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this_1.r1().p();
    while (tmp0_iterator_0.q()) {
      var element_0 = tmp0_iterator_0.s();
      // Inline function 'ru.itmo.json_forms.core.schema.ObjectType.requiredProperties.<anonymous>' call
      if (contains(this.required, element_0.s1())) {
        destination_0.p1(element_0.s1(), element_0.t1());
      }
    }
    tmp_0.requiredProperties = toJMap(destination_0);
  }
  protoOf(ObjectType).r19 = function () {
    return this.properties;
  };
  protoOf(ObjectType).s19 = function () {
    return this.required;
  };
  protoOf(ObjectType).t19 = function () {
    return this.optionalProperties;
  };
  protoOf(ObjectType).u19 = function () {
    return this.requiredProperties;
  };
  protoOf(ObjectType).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).a5());
  };
  function ArrayType(prefixItems, items) {
    DataType.call(this);
    this.prefixItems = prefixItems;
    this.items = items;
  }
  protoOf(ArrayType).v19 = function () {
    return this.prefixItems;
  };
  protoOf(ArrayType).w19 = function () {
    return this.items;
  };
  protoOf(ArrayType).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).a5());
  };
  protoOf(ArrayType).fa = function () {
    return this.prefixItems;
  };
  protoOf(ArrayType).ga = function () {
    return this.items;
  };
  protoOf(ArrayType).x19 = function (prefixItems, items) {
    return new ArrayType(prefixItems, items);
  };
  protoOf(ArrayType).copy = function (prefixItems, items, $super) {
    prefixItems = prefixItems === VOID ? this.prefixItems : prefixItems;
    items = items === VOID ? this.items : items;
    return this.x19(prefixItems, items);
  };
  protoOf(ArrayType).hashCode = function () {
    var result = hashCode(this.prefixItems);
    result = imul(result, 31) + hashCode(this.items) | 0;
    return result;
  };
  protoOf(ArrayType).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArrayType))
      return false;
    var tmp0_other_with_cast = other instanceof ArrayType ? other : THROW_CCE();
    if (!equals(this.prefixItems, tmp0_other_with_cast.prefixItems))
      return false;
    if (!equals(this.items, tmp0_other_with_cast.items))
      return false;
    return true;
  };
  function Schema(rawSchema) {
    this.e18_1 = parseDataType(rawSchema);
  }
  protoOf(Schema).toString = function () {
    return 'Schema: root = ' + this.e18_1;
  };
  function parseDataType(obj) {
    var tmp;
    if (obj.rz('enum')) {
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_jsonArray(ensureNotNull(obj.sz('enum')));
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.p();
      while (tmp0_iterator.q()) {
        var item = tmp0_iterator.s();
        // Inline function 'ru.itmo.json_forms.core.schema.parseDataType.<anonymous>' call
        var tmp$ret$0 = get_jsonPrimitive(item).mz();
        destination.m(tmp$ret$0);
      }
      var tmp$ret$3 = copyToArray(destination);
      tmp = new EnumType(tmp$ret$3);
    } else {
      var t = obj.sz('type');
      var tmp_0;
      if (t instanceof JsonPrimitive_2) {
        switch (t.mz()) {
          case 'string':
            tmp_0 = new StringType();
            break;
          case 'number':
            tmp_0 = new NumberType();
            break;
          case 'integer':
            tmp_0 = new IntegerType();
            break;
          case 'boolean':
            tmp_0 = new BooleanType();
            break;
          case 'null':
            tmp_0 = new NullType();
            break;
          case 'object':
            tmp_0 = parseObjectType(obj);
            break;
          case 'array':
            tmp_0 = parseArrayType(obj);
            break;
          default:
            tmp_0 = parseDataType$fallback(obj);
            break;
        }
      } else {
        if (t instanceof JsonArray) {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(t, 10));
          var tmp0_iterator_0 = t.p();
          while (tmp0_iterator_0.q()) {
            var item_0 = tmp0_iterator_0.s();
            // Inline function 'ru.itmo.json_forms.core.schema.parseDataType.<anonymous>' call
            var tmp$ret$4 = parsePrimitive(get_jsonPrimitive(item_0));
            destination_0.m(tmp$ret$4);
          }
          var variantTypes = destination_0;
          var tmp_1;
          if (variantTypes.u() === 2 ? variantTypes.v(new NullType()) : false) {
            // Inline function 'kotlin.collections.find' call
            var tmp$ret$8;
            $l$block: {
              // Inline function 'kotlin.collections.firstOrNull' call
              var tmp0_iterator_1 = variantTypes.p();
              while (tmp0_iterator_1.q()) {
                var element = tmp0_iterator_1.s();
                // Inline function 'ru.itmo.json_forms.core.schema.parseDataType.<anonymous>' call
                if (!equals(element, new NullType())) {
                  tmp$ret$8 = element;
                  break $l$block;
                }
              }
              tmp$ret$8 = null;
            }
            var tmp$ret$9 = tmp$ret$8;
            var someType = ensureNotNull(tmp$ret$9);
            var tmp_2;
            if (someType instanceof ObjectType) {
              tmp_2 = parseObjectType(obj);
            } else {
              if (someType instanceof ArrayType) {
                tmp_2 = parseArrayType(obj);
              } else {
                tmp_2 = someType;
              }
            }
            var someType2 = tmp_2;
            tmp_1 = new OptionalType(someType2);
          } else {
            // Inline function 'kotlin.collections.toTypedArray' call
            var tmp$ret$10 = copyToArray(variantTypes);
            tmp_1 = new VariantType(tmp$ret$10);
          }
          tmp_0 = tmp_1;
        } else {
          tmp_0 = parseDataType$fallback(obj);
        }
      }
      tmp = tmp_0;
    }
    var type = tmp;
    var tmp6_safe_receiver = obj.sz('title');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
    var tmp_3 = type.withTitle(tmp7_safe_receiver == null ? null : tmp7_safe_receiver.mz());
    var tmp4_safe_receiver = obj.sz('description');
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : get_jsonPrimitive(tmp4_safe_receiver);
    var tmp_4 = tmp_3.withDescription(tmp5_safe_receiver == null ? null : tmp5_safe_receiver.mz());
    var tmp2_safe_receiver = obj.sz('default');
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : toString_0(tmp2_safe_receiver);
    return tmp_4.withDefaultValue(tmp3_safe_receiver == null ? null : removeSurrounding(tmp3_safe_receiver, '"'));
  }
  function parsePrimitive(prim) {
    var tmp;
    switch (prim.mz()) {
      case 'string':
        tmp = new StringType();
        break;
      case 'number':
        tmp = new NumberType();
        break;
      case 'integer':
        tmp = new IntegerType();
        break;
      case 'boolean':
        tmp = new BooleanType();
        break;
      case 'null':
        tmp = new NullType();
        break;
      case 'object':
        // Inline function 'kotlin.emptyArray' call

        var tmp$ret$0 = [];
        var tmp_0 = new JMap(tmp$ret$0);
        // Inline function 'kotlin.emptyArray' call

        var tmp$ret$1 = [];
        tmp = new ObjectType(tmp_0, tmp$ret$1);
        break;
      case 'array':
        // Inline function 'kotlin.emptyArray' call

        var tmp$ret$2 = [];
        tmp = new ArrayType(tmp$ret$2, new UnknownType());
        break;
      default:
        tmp = new UnknownType();
        break;
    }
    return tmp;
  }
  function parseObjectType(obj) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var properties = LinkedHashMap_init_$Create$();
    var tmp0_safe_receiver = obj.sz('properties');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r1();
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp2_safe_receiver.p();
      while (tmp0_iterator.q()) {
        var element = tmp0_iterator.s();
        // Inline function 'ru.itmo.json_forms.core.schema.parseObjectType.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var value = get_jsonObject(element.t1());
        var key = element.s1();
        var value_0 = parseDataType(value);
        properties.p1(key, value_0);
      }
    }
    var tmp3_safe_receiver = obj.sz('required');
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonArray(tmp3_safe_receiver);
    var tmp;
    if (tmp4_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp4_safe_receiver, 10));
      var tmp0_iterator_0 = tmp4_safe_receiver.p();
      while (tmp0_iterator_0.q()) {
        var item = tmp0_iterator_0.s();
        // Inline function 'ru.itmo.json_forms.core.schema.parseObjectType.<anonymous>' call
        var tmp$ret$2 = get_jsonPrimitive(item).mz();
        destination.m(tmp$ret$2);
      }
      tmp = destination;
    }
    var tmp5_safe_receiver = tmp;
    var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : toSet_0(tmp5_safe_receiver);
    var required = tmp6_elvis_lhs == null ? emptySet() : tmp6_elvis_lhs;
    var tmp_0 = toJMap(properties);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$5 = copyToArray(required);
    return new ObjectType(tmp_0, tmp$ret$5);
  }
  function parseArrayType(obj) {
    var tmp0_safe_receiver = obj.sz('items');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ru.itmo.json_forms.core.schema.parseArrayType.<anonymous>' call
      tmp = parseDataType(get_jsonObject(tmp0_safe_receiver));
    }
    var items = tmp;
    // Inline function 'kotlin.collections.mutableListOf' call
    var prefixItems = ArrayList_init_$Create$_0();
    var tmp1_safe_receiver = obj.sz('prefixItems');
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonArray(tmp1_safe_receiver);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp2_safe_receiver.p();
      while (tmp0_iterator.q()) {
        var element = tmp0_iterator.s();
        // Inline function 'ru.itmo.json_forms.core.schema.parseArrayType.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var prefix = get_jsonObject(element);
        prefixItems.m(parseDataType(prefix));
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp_0 = copyToArray(prefixItems);
    return new ArrayType(tmp_0, items == null ? new UnknownType() : items);
  }
  function parseDataType$fallback($obj) {
    var tmp;
    if ((($obj.rz('properties') ? true : $obj.rz('patternProperties')) ? true : $obj.rz('additionalProperties')) ? true : $obj.rz('unevaluatedProperties')) {
      tmp = parseObjectType($obj);
    } else {
      tmp = new UnknownType();
    }
    return tmp;
  }
  function Utils$generateUUID$lambda() {
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.math.floor' call
    var x = (1 + Default_getInstance_0().va()) * 65536;
    // Inline function 'kotlin.js.asDynamic' call
    return Math.floor(x).toString().substring(1);
  }
  function Utils() {
  }
  protoOf(Utils).h19 = function () {
    var s4 = Utils$generateUUID$lambda;
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };
  var Utils_instance;
  function Utils_getInstance() {
    return Utils_instance;
  }
  //region block: init
  JsonTreeBuilder_instance = new JsonTreeBuilder();
  Utils_instance = new Utils();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $ru = _.ru || (_.ru = {});
    var $ru$itmo = $ru.itmo || ($ru.itmo = {});
    var $ru$itmo$json_forms = $ru$itmo.json_forms || ($ru$itmo.json_forms = {});
    var $ru$itmo$json_forms$core = $ru$itmo$json_forms.core || ($ru$itmo$json_forms.core = {});
    var $ru$itmo$json_forms$core$document = $ru$itmo$json_forms$core.document || ($ru$itmo$json_forms$core.document = {});
    $ru$itmo$json_forms$core$document.Document = Document;
    var $ru = _.ru || (_.ru = {});
    var $ru$itmo = $ru.itmo || ($ru.itmo = {});
    var $ru$itmo$json_forms = $ru$itmo.json_forms || ($ru$itmo.json_forms = {});
    var $ru$itmo$json_forms$core = $ru$itmo$json_forms.core || ($ru$itmo$json_forms.core = {});
    var $ru$itmo$json_forms$core$document = $ru$itmo$json_forms$core.document || ($ru$itmo$json_forms$core.document = {});
    var $ru = _.ru || (_.ru = {});
    var $ru$itmo = $ru.itmo || ($ru.itmo = {});
    var $ru$itmo$json_forms = $ru$itmo.json_forms || ($ru$itmo.json_forms = {});
    var $ru$itmo$json_forms$core = $ru$itmo$json_forms.core || ($ru$itmo$json_forms.core = {});
    var $ru$itmo$json_forms$core$document = $ru$itmo$json_forms$core.document || ($ru$itmo$json_forms$core.document = {});
    $ru$itmo$json_forms$core$document.Element = Element;
    $ru$itmo$json_forms$core$document.BasicElement = BasicElement;
    $ru$itmo$json_forms$core$document.UnresolvedElement = UnresolvedElement;
    $ru$itmo$json_forms$core$document.NullElement = NullElement;
    $ru$itmo$json_forms$core$document.StringElement = StringElement;
    $ru$itmo$json_forms$core$document.NumberElement = NumberElement;
    $ru$itmo$json_forms$core$document.IntegerElement = IntegerElement;
    $ru$itmo$json_forms$core$document.BooleanElement = BooleanElement;
    $ru$itmo$json_forms$core$document.EnumElement = EnumElement;
    $ru$itmo$json_forms$core$document.ObjectElement = ObjectElement;
    $ru$itmo$json_forms$core$document.ArrayElement = ArrayElement;
    $ru$itmo$json_forms$core$document.OptionalElement = OptionalElement;
    var $ru = _.ru || (_.ru = {});
    var $ru$itmo = $ru.itmo || ($ru.itmo = {});
    var $ru$itmo$json_forms = $ru$itmo.json_forms || ($ru$itmo.json_forms = {});
    var $ru$itmo$json_forms$core = $ru$itmo$json_forms.core || ($ru$itmo$json_forms.core = {});
    var $ru$itmo$json_forms$core$document = $ru$itmo$json_forms$core.document || ($ru$itmo$json_forms$core.document = {});
    defineProp($ru$itmo$json_forms$core$document, 'JsonTreeBuilder', JsonTreeBuilder_getInstance);
    var $ru = _.ru || (_.ru = {});
    var $ru$itmo = $ru.itmo || ($ru.itmo = {});
    var $ru$itmo$json_forms = $ru$itmo.json_forms || ($ru$itmo.json_forms = {});
    var $ru$itmo$json_forms$core = $ru$itmo$json_forms.core || ($ru$itmo$json_forms.core = {});
    var $ru$itmo$json_forms$core$ir = $ru$itmo$json_forms$core.ir || ($ru$itmo$json_forms$core.ir = {});
    $ru$itmo$json_forms$core$ir.JMapEntry = JMapEntry;
    $ru$itmo$json_forms$core$ir.JMap = JMap;
    var $ru = _.ru || (_.ru = {});
    var $ru$itmo = $ru.itmo || ($ru.itmo = {});
    var $ru$itmo$json_forms = $ru$itmo.json_forms || ($ru$itmo.json_forms = {});
    var $ru$itmo$json_forms$core = $ru$itmo$json_forms.core || ($ru$itmo$json_forms.core = {});
    var $ru$itmo$json_forms$core$schema = $ru$itmo$json_forms$core.schema || ($ru$itmo$json_forms$core.schema = {});
    $ru$itmo$json_forms$core$schema.DataType = DataType;
    $ru$itmo$json_forms$core$schema.BasicType = BasicType;
    $ru$itmo$json_forms$core$schema.UnknownType = UnknownType;
    $ru$itmo$json_forms$core$schema.NullType = NullType;
    $ru$itmo$json_forms$core$schema.StringType = StringType;
    $ru$itmo$json_forms$core$schema.NumberType = NumberType;
    $ru$itmo$json_forms$core$schema.IntegerType = IntegerType;
    $ru$itmo$json_forms$core$schema.BooleanType = BooleanType;
    $ru$itmo$json_forms$core$schema.VariantType = VariantType;
    $ru$itmo$json_forms$core$schema.EnumType = EnumType;
    $ru$itmo$json_forms$core$schema.OptionalType = OptionalType;
    $ru$itmo$json_forms$core$schema.ObjectType = ObjectType;
    $ru$itmo$json_forms$core$schema.ArrayType = ArrayType;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=JSON-Forms-core.js.map
