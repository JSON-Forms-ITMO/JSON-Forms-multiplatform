(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var protoOf = kotlin_kotlin.$_$.b7;
  var objectMeta = kotlin_kotlin.$_$.a7;
  var setMetadataFor = kotlin_kotlin.$_$.c7;
  var Unit_instance = kotlin_kotlin.$_$.m3;
  var classMeta = kotlin_kotlin.$_$.b6;
  var VOID = kotlin_kotlin.$_$.e;
  var toString = kotlin_kotlin.$_$.g7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.y;
  var charSequenceLength = kotlin_kotlin.$_$.z5;
  var charSequenceGet = kotlin_kotlin.$_$.y5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e1;
  var equals = kotlin_kotlin.$_$.d6;
  var Enum = kotlin_kotlin.$_$.t8;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var interfaceMeta = kotlin_kotlin.$_$.j6;
  var THROW_CCE = kotlin_kotlin.$_$.z8;
  var hashCode = kotlin_kotlin.$_$.i6;
  var joinToString = kotlin_kotlin.$_$.v4;
  var List = kotlin_kotlin.$_$.t3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var Map = kotlin_kotlin.$_$.v3;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.r9;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var getBooleanHashCode = kotlin_kotlin.$_$.f6;
  var getStringHashCode = kotlin_kotlin.$_$.h6;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.z2;
  var numberRangeToNumber = kotlin_kotlin.$_$.w6;
  var ClosedRange = kotlin_kotlin.$_$.h7;
  var isInterface = kotlin_kotlin.$_$.r6;
  var contains = kotlin_kotlin.$_$.k7;
  var toDouble = kotlin_kotlin.$_$.f8;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.b3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var toLongOrNull = kotlin_kotlin.$_$.i8;
  var toULongOrNull = kotlin_kotlin.$_$.l8;
  var ULong = kotlin_kotlin.$_$.g9;
  var Companion_getInstance = kotlin_kotlin.$_$.k3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.e2;
  var toDoubleOrNull = kotlin_kotlin.$_$.e8;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.c8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var lazy_0 = kotlin_kotlin.$_$.s9;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var KProperty1 = kotlin_kotlin.$_$.o7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g6;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var toLong = kotlin_kotlin.$_$.e7;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.u1;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.w1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.d2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.f2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.l1;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.n1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.m2;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.o2;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.w5;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.a6;
  var coerceAtLeast = kotlin_kotlin.$_$.i7;
  var coerceAtMost = kotlin_kotlin.$_$.j7;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var singleOrNull = kotlin_kotlin.$_$.h5;
  var emptyMap = kotlin_kotlin.$_$.q4;
  var getValue = kotlin_kotlin.$_$.s4;
  var fillArrayVal = kotlin_kotlin.$_$.e6;
  var copyOf = kotlin_kotlin.$_$.m4;
  var copyOf_0 = kotlin_kotlin.$_$.n4;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.r8;
  var invoke = kotlin_kotlin.$_$.o9;
  var CoroutineImpl = kotlin_kotlin.$_$.s5;
  var DeepRecursiveScope = kotlin_kotlin.$_$.s8;
  var Unit = kotlin_kotlin.$_$.j9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r5;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var getKClass = kotlin_kotlin.$_$.d;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var ensureNotNull = kotlin_kotlin.$_$.n9;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var substringBefore = kotlin_kotlin.$_$.a8;
  var removeSuffix = kotlin_kotlin.$_$.w7;
  var substringAfter = kotlin_kotlin.$_$.z7;
  var contains_0 = kotlin_kotlin.$_$.q7;
  var plus = kotlin_kotlin.$_$.u9;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalArgumentException = kotlin_kotlin.$_$.u8;
  var isFinite = kotlin_kotlin.$_$.q9;
  var isFinite_0 = kotlin_kotlin.$_$.p9;
  var toUInt = kotlin_kotlin.$_$.k8;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.v1;
  var toULong = kotlin_kotlin.$_$.m8;
  var toUByte = kotlin_kotlin.$_$.j8;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.m1;
  var toUShort = kotlin_kotlin.$_$.n8;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.n2;
  var objectCreate = kotlin_kotlin.$_$.z6;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.t9;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var toString_0 = kotlin_kotlin.$_$.h1;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.j3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.i3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.l3;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var setOf = kotlin_kotlin.$_$.g5;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g1;
  var numberToChar = kotlin_kotlin.$_$.x6;
  var equals_0 = kotlin_kotlin.$_$.r7;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.w2;
  var toByte = kotlin_kotlin.$_$.d7;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.a3;
  var toShort = kotlin_kotlin.$_$.f7;
  var single = kotlin_kotlin.$_$.y7;
  var Char = kotlin_kotlin.$_$.q8;
  var emptySet = kotlin_kotlin.$_$.r4;
  var plus_0 = kotlin_kotlin.$_$.d5;
  var toInt = kotlin_kotlin.$_$.h8;
  var toList = kotlin_kotlin.$_$.k5;
  var enumEntries = kotlin_kotlin.$_$.t5;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var last = kotlin_kotlin.$_$.a5;
  var removeLast = kotlin_kotlin.$_$.f5;
  var lastIndexOf = kotlin_kotlin.$_$.v7;
  var Long = kotlin_kotlin.$_$.v8;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.f1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.g3;
  var numberToLong = kotlin_kotlin.$_$.y6;
  var charArray = kotlin_kotlin.$_$.x5;
  var indexOf = kotlin_kotlin.$_$.s7;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(ClassDiscriminatorMode, 'ClassDiscriminatorMode', classMeta, Enum);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNull_getInstance});
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder]);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer);
  setMetadataFor(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', classMeta, Composer);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, VOID, VOID, JsonPath);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta, VOID, VOID, Key);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, VOID, VOID, DescriptorSchemaCache);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta, VOID, VOID, JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.jx_1 = configuration;
    this.kx_1 = serializersModule;
    this.lx_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).zh = function () {
    return this.kx_1;
  };
  protoOf(Json).mx = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.px();
    }
  };
  protoOf(Json).nx = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.qe(), null);
    var result = input.kh(deserializer);
    lexer.cy();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.xm();
    return new JsonImpl(conf, builder.ty_1);
  }
  function JsonBuilder(json) {
    this.dy_1 = json.jx_1.uy_1;
    this.ey_1 = json.jx_1.zy_1;
    this.fy_1 = json.jx_1.vy_1;
    this.gy_1 = json.jx_1.wy_1;
    this.hy_1 = json.jx_1.xy_1;
    this.iy_1 = json.jx_1.yy_1;
    this.jy_1 = json.jx_1.az_1;
    this.ky_1 = json.jx_1.bz_1;
    this.ly_1 = json.jx_1.cz_1;
    this.my_1 = json.jx_1.dz_1;
    this.ny_1 = json.jx_1.jz_1;
    this.oy_1 = json.jx_1.ez_1;
    this.py_1 = json.jx_1.fz_1;
    this.qy_1 = json.jx_1.gz_1;
    this.ry_1 = json.jx_1.hz_1;
    this.sy_1 = json.jx_1.iz_1;
    this.ty_1 = json.zh();
  }
  protoOf(JsonBuilder).xm = function () {
    if (this.ly_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.my_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.ny_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.iy_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.jy_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.jy_1 === '    ')) {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.jy_1;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(((element === _Char___init__impl__6a9atx(32) ? true : element === _Char___init__impl__6a9atx(9)) ? true : element === _Char___init__impl__6a9atx(13)) ? true : element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$4 = false;
            break $l$block;
          }
        }
        tmp$ret$4 = true;
      }
      var allWhitespaces = tmp$ret$4;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.jy_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.dy_1, this.fy_1, this.gy_1, this.hy_1, this.iy_1, this.ey_1, this.jy_1, this.ky_1, this.ly_1, this.my_1, this.oy_1, this.py_1, this.qy_1, this.ry_1, this.sy_1, this.ny_1);
  };
  function validateConfiguration($this) {
    if (equals($this.zh(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.jx_1.cz_1, $this.jx_1.dz_1);
    $this.zh().sw(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.uy_1 = encodeDefaults;
    this.vy_1 = ignoreUnknownKeys;
    this.wy_1 = isLenient;
    this.xy_1 = allowStructuredMapKeys;
    this.yy_1 = prettyPrint;
    this.zy_1 = explicitNulls;
    this.az_1 = prettyPrintIndent;
    this.bz_1 = coerceInputValues;
    this.cz_1 = useArrayPolymorphism;
    this.dz_1 = classDiscriminator;
    this.ez_1 = allowSpecialFloatingPointValues;
    this.fz_1 = useAlternativeNames;
    this.gz_1 = namingStrategy;
    this.hz_1 = decodeEnumsCaseInsensitive;
    this.iz_1 = allowTrailingComma;
    this.jz_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.uy_1 + ', ignoreUnknownKeys=' + this.vy_1 + ', isLenient=' + this.wy_1 + ', ' + ('allowStructuredMapKeys=' + this.xy_1 + ', prettyPrint=' + this.yy_1 + ', explicitNulls=' + this.zy_1 + ', ') + ("prettyPrintIndent='" + this.az_1 + "', coerceInputValues=" + this.bz_1 + ', useArrayPolymorphism=' + this.cz_1 + ', ') + ("classDiscriminator='" + this.dz_1 + "', allowSpecialFloatingPointValues=" + this.ez_1 + ', ') + ('useAlternativeNames=' + this.fz_1 + ', namingStrategy=' + this.gz_1 + ', decodeEnumsCaseInsensitive=' + this.hz_1 + ', ') + ('allowTrailingComma=' + this.iz_1 + ', classDiscriminatorMode=' + this.jz_1 + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.mz();
  };
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.nz_1 = content;
  }
  protoOf(JsonArray).u = function () {
    return this.nz_1.u();
  };
  protoOf(JsonArray).oz = function (element) {
    return this.nz_1.v(element);
  };
  protoOf(JsonArray).v = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.oz(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).pz = function (elements) {
    return this.nz_1.w(elements);
  };
  protoOf(JsonArray).w = function (elements) {
    return this.pz(elements);
  };
  protoOf(JsonArray).b1 = function (index) {
    return this.nz_1.b1(index);
  };
  protoOf(JsonArray).x = function () {
    return this.nz_1.x();
  };
  protoOf(JsonArray).p = function () {
    return this.nz_1.p();
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.nz_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.nz_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.nz_1, ',', '[', ']');
  };
  function get_jsonArray(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonArray ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonArray');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.s1();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.t1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.m4(_Char___init__impl__6a9atx(58));
    this_0.k4(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.qz_1 = content;
  }
  protoOf(JsonObject).r1 = function () {
    return this.qz_1.r1();
  };
  protoOf(JsonObject).o1 = function () {
    return this.qz_1.o1();
  };
  protoOf(JsonObject).u = function () {
    return this.qz_1.u();
  };
  protoOf(JsonObject).rz = function (key) {
    return this.qz_1.x1(key);
  };
  protoOf(JsonObject).x1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.rz((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).sz = function (key) {
    return this.qz_1.z1(key);
  };
  protoOf(JsonObject).z1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.sz((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).x = function () {
    return this.qz_1.x();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.qz_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.qz_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.qz_1.r1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function get_jsonObject(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.uz_1.t1();
  }
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.tz_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.uz_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).mz = function () {
    return this.tz_1;
  };
  protoOf(JsonNull).vz = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(JsonNull).bp = function (typeParamsSerializers) {
    return this.vz();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonPrimitive_1(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_2(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.wz_1 = isString;
    this.xz_1 = coerceToInlineType;
    this.yz_1 = toString(body);
    if (!(this.xz_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.xz_1.vf()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).mz = function () {
    return this.yz_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.wz_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.yz_1);
      tmp = this_0.toString();
    } else {
      tmp = this.yz_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.wz_1 === other.wz_1))
      return false;
    if (!(this.yz_1 === other.yz_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.wz_1);
    result = imul(31, result) + getStringHashCode(this.yz_1) | 0;
    return result;
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.mz());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.mz())).zz();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(IntCompanionObject_instance.MIN_VALUE, IntCompanionObject_instance.MAX_VALUE);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.mz() + ' is not an Int');
    return result.h7();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.mz())).zz();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.mz();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.mz());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.mz();
    }
    return tmp;
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.bf('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.bf('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.bf('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.bf('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.bf('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().a10_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().b10_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().c10_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().d10_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().e10_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.f10_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).qe = function () {
    return this.f10_1;
  };
  protoOf(JsonElementSerializer).g10 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.bj(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.bj(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.bj(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).re = function (encoder, value) {
    return this.g10(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).se = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.lz();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.a10_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).qe = function () {
    return this.a10_1;
  };
  protoOf(JsonPrimitiveSerializer).h10 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.bj(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.bj(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).re = function (encoder, value) {
    return this.h10(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).se = function (decoder) {
    var result = asJsonDecoder(decoder).lz();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.i10_1 = ListSerializer(JsonElementSerializer_getInstance()).qe();
    this.j10_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).tf = function () {
    return this.i10_1.tf();
  };
  protoOf(JsonArrayDescriptor).uf = function () {
    return this.i10_1.uf();
  };
  protoOf(JsonArrayDescriptor).vf = function () {
    return this.i10_1.vf();
  };
  protoOf(JsonArrayDescriptor).of = function () {
    return this.i10_1.of();
  };
  protoOf(JsonArrayDescriptor).wf = function () {
    return this.i10_1.wf();
  };
  protoOf(JsonArrayDescriptor).xf = function (index) {
    return this.i10_1.xf(index);
  };
  protoOf(JsonArrayDescriptor).yf = function (index) {
    return this.i10_1.yf(index);
  };
  protoOf(JsonArrayDescriptor).zf = function (name) {
    return this.i10_1.zf(name);
  };
  protoOf(JsonArrayDescriptor).ag = function (index) {
    return this.i10_1.ag(index);
  };
  protoOf(JsonArrayDescriptor).bg = function (index) {
    return this.i10_1.bg(index);
  };
  protoOf(JsonArrayDescriptor).sf = function () {
    return this.j10_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.e10_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).qe = function () {
    return this.e10_1;
  };
  protoOf(JsonArraySerializer).k10 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).re(encoder, value);
  };
  protoOf(JsonArraySerializer).re = function (encoder, value) {
    return this.k10(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).se = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).se(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.l10_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).qe();
    this.m10_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).tf = function () {
    return this.l10_1.tf();
  };
  protoOf(JsonObjectDescriptor).uf = function () {
    return this.l10_1.uf();
  };
  protoOf(JsonObjectDescriptor).vf = function () {
    return this.l10_1.vf();
  };
  protoOf(JsonObjectDescriptor).of = function () {
    return this.l10_1.of();
  };
  protoOf(JsonObjectDescriptor).wf = function () {
    return this.l10_1.wf();
  };
  protoOf(JsonObjectDescriptor).xf = function (index) {
    return this.l10_1.xf(index);
  };
  protoOf(JsonObjectDescriptor).yf = function (index) {
    return this.l10_1.yf(index);
  };
  protoOf(JsonObjectDescriptor).zf = function (name) {
    return this.l10_1.zf(name);
  };
  protoOf(JsonObjectDescriptor).ag = function (index) {
    return this.l10_1.ag(index);
  };
  protoOf(JsonObjectDescriptor).bg = function (index) {
    return this.l10_1.bg(index);
  };
  protoOf(JsonObjectDescriptor).sf = function () {
    return this.m10_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.d10_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).qe = function () {
    return this.d10_1;
  };
  protoOf(JsonObjectSerializer).n10 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).re(encoder, value);
  };
  protoOf(JsonObjectSerializer).re = function (encoder, value) {
    return this.n10(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).se = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).se(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.b10_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).qe = function () {
    return this.b10_1;
  };
  protoOf(JsonNullSerializer).o10 = function (encoder, value) {
    verify(encoder);
    encoder.fi();
  };
  protoOf(JsonNullSerializer).re = function (encoder, value) {
    return this.o10(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).se = function (decoder) {
    verify_0(decoder);
    if (decoder.xg()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.yg();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.c10_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).qe = function () {
    return this.c10_1;
  };
  protoOf(JsonLiteralSerializer).p10 = function (encoder, value) {
    verify(encoder);
    if (value.wz_1) {
      return encoder.oi(value.yz_1);
    }
    if (!(value.xz_1 == null)) {
      return encoder.pi(value.xz_1).oi(value.yz_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.yz_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.ki(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.yz_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).wd_1;
      var tmp_1 = encoder.pi(serializer_0(Companion_getInstance()).qe());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.ki(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.yz_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.mi(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.yz_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.gi(tmp3_safe_receiver);
    }
    encoder.oi(value.yz_1);
  };
  protoOf(JsonLiteralSerializer).re = function (encoder, value) {
    return this.p10(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).se = function (decoder) {
    var result = asJsonDecoder(decoder).lz();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.q10_1;
    original$factory();
    return this_0.t1();
  }
  function defer$1($deferred) {
    this.q10_1 = lazy_0($deferred);
  }
  protoOf(defer$1).sf = function () {
    return _get_original__l7ku1m(this).sf();
  };
  protoOf(defer$1).wf = function () {
    return _get_original__l7ku1m(this).wf();
  };
  protoOf(defer$1).uf = function () {
    return _get_original__l7ku1m(this).uf();
  };
  protoOf(defer$1).ag = function (index) {
    return _get_original__l7ku1m(this).ag(index);
  };
  protoOf(defer$1).zf = function (name) {
    return _get_original__l7ku1m(this).zf(name);
  };
  protoOf(defer$1).xf = function (index) {
    return _get_original__l7ku1m(this).xf(index);
  };
  protoOf(defer$1).yf = function (index) {
    return _get_original__l7ku1m(this).yf(index);
  };
  protoOf(defer$1).bg = function (index) {
    return _get_original__l7ku1m(this).bg(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.r10_1 = writer;
    this.s10_1 = true;
  }
  protoOf(Composer).t10 = function () {
    this.s10_1 = true;
  };
  protoOf(Composer).u10 = function () {
    return Unit_instance;
  };
  protoOf(Composer).v10 = function () {
    this.s10_1 = false;
  };
  protoOf(Composer).w10 = function () {
    this.s10_1 = false;
  };
  protoOf(Composer).x10 = function () {
    return Unit_instance;
  };
  protoOf(Composer).y10 = function (v) {
    return this.r10_1.z10(v);
  };
  protoOf(Composer).a11 = function (v) {
    return this.r10_1.b11(v);
  };
  protoOf(Composer).c11 = function (v) {
    return this.r10_1.b11(v.toString());
  };
  protoOf(Composer).d11 = function (v) {
    return this.r10_1.b11(v.toString());
  };
  protoOf(Composer).e11 = function (v) {
    return this.r10_1.f11(toLong(v));
  };
  protoOf(Composer).g11 = function (v) {
    return this.r10_1.f11(toLong(v));
  };
  protoOf(Composer).h11 = function (v) {
    return this.r10_1.f11(toLong(v));
  };
  protoOf(Composer).i11 = function (v) {
    return this.r10_1.f11(v);
  };
  protoOf(Composer).j11 = function (v) {
    return this.r10_1.b11(v.toString());
  };
  protoOf(Composer).k11 = function (value) {
    return this.r10_1.l11(value);
  };
  function Composer_0(sb, json) {
    return json.jx_1.yy_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.o11_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).h11 = function (v) {
    if (this.o11_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.k11(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.a11(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).i11 = function (v) {
    if (this.o11_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.k11(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.a11(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).e11 = function (v) {
    if (this.o11_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.k11(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.a11(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).g11 = function (v) {
    if (this.o11_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.k11(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.a11(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.r11_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).k11 = function (value) {
    if (this.r11_1) {
      protoOf(Composer).k11.call(this, value);
    } else {
      protoOf(Composer).a11.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.u11_1 = json;
    this.v11_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).t10 = function () {
    this.s10_1 = true;
    this.v11_1 = this.v11_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).u10 = function () {
    this.v11_1 = this.v11_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).v10 = function () {
    this.s10_1 = false;
    this.a11('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.v11_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.a11(this.u11_1.jx_1.az_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).w10 = function () {
    if (this.s10_1)
      this.s10_1 = false;
    else {
      this.v10();
    }
  };
  protoOf(ComposerWithPrettyPrint).x10 = function () {
    this.y10(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.x11_1 = !descriptor.bg(index) ? descriptor.yf(index).of() : false;
    return $this.x11_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.w11_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.x11_1 = false;
  }
  protoOf(JsonElementMarker).ln = function (index) {
    this.w11_1.ln(index);
  };
  protoOf(JsonElementMarker).mn = function () {
    return this.w11_1.mn();
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.y11('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.yx_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingCommas = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.z11('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.sf() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.wf() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex_0)) + suffix;
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.zf(name);
    if (!(index === -3))
      return index;
    if (!json.jx_1.fz_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.ag(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.wf(), CLASS_getInstance()) ? json.jx_1.gz_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.b12(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.jx_1.hz_1 ? equals(descriptor.wf(), ENUM_getInstance()) : false;
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).z1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.b12(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.uf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.xf(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.p();
        while (tmp0_iterator.q()) {
          var element = tmp0_iterator.s();
          if (element instanceof JsonNames) {
            destination.m(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c12_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp2_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp2_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.ag(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.d12(_this__u8e3s4, i, _this__u8e3s4.ag(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.x()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.wf(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).x1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.ag(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.ag(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.p1(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.uf();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.ag(tmp_2);
        tmp_1[tmp_2] = $strategy.d12($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.g12_1, 2);
    $this.e12_1 = copyOf($this.e12_1, newSize);
    $this.f12_1 = copyOf_0($this.f12_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.e12_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.f12_1 = tmp_2;
    this.g12_1 = -1;
  }
  protoOf(JsonPath).h12 = function (sd) {
    this.g12_1 = this.g12_1 + 1 | 0;
    var depth = this.g12_1;
    if (depth === this.e12_1.length) {
      resize(this);
    }
    this.e12_1[depth] = sd;
  };
  protoOf(JsonPath).i12 = function (index) {
    this.f12_1[this.g12_1] = index;
  };
  protoOf(JsonPath).j12 = function (key) {
    var tmp;
    if (!(this.f12_1[this.g12_1] === -2)) {
      this.g12_1 = this.g12_1 + 1 | 0;
      tmp = this.g12_1 === this.e12_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.e12_1[this.g12_1] = key;
    this.f12_1[this.g12_1] = -2;
  };
  protoOf(JsonPath).k12 = function () {
    if (this.f12_1[this.g12_1] === -2) {
      this.e12_1[this.g12_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).l12 = function () {
    var depth = this.g12_1;
    if (this.f12_1[depth] === -2) {
      this.f12_1[depth] = -1;
      this.g12_1 = this.g12_1 - 1 | 0;
    }
    if (!(this.g12_1 === -1)) {
      this.g12_1 = this.g12_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).m12 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.l4('$');
    // Inline function 'kotlin.repeat' call
    var times = this.g12_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.e12_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.wf(), LIST_getInstance())) {
            if (!(this.f12_1[index] === -1)) {
              this_0.l4('[');
              this_0.m6(this.f12_1[index]);
              this_0.l4(']');
            }
          } else {
            var idx = this.f12_1[index];
            if (idx >= 0) {
              this_0.l4('.');
              this_0.l4(element.ag(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.l4('[');
            this_0.l4("'");
            this_0.k4(element);
            this_0.l4("'");
            this_0.l4(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.m12();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().u();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.bj(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.v12_1.z12(get_TC_BEGIN_OBJ());
    if ($this.v12_1.a13() === get_TC_COMMA()) {
      $this.v12_1.z11('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.v12_1.b13()) {
      var key = $this.w12_1 ? $this.v12_1.d13() : $this.v12_1.c13();
      $this.v12_1.z12(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.e13();
      // Inline function 'kotlin.collections.set' call
      result.p1(key, element);
      lastToken = $this.v12_1.f13();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.v12_1.z11('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.v12_1.z12(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      if (!$this.x12_1) {
        invalidTrailingComma($this.v12_1);
      }
      $this.v12_1.z12(get_TC_END_OBJ());
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.h9();
  }
  function readArray($this) {
    var lastToken = $this.v12_1.f13();
    if ($this.v12_1.a13() === get_TC_COMMA()) {
      $this.v12_1.z11('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.v12_1.b13()) {
      var element = $this.e13();
      result.m(element);
      lastToken = $this.v12_1.f13();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var this_0 = $this.v12_1;
        var condition = lastToken === get_TC_END_LIST();
        var position = this_0.yx_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          this_0.z11(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.v12_1.z12(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      if (!$this.x12_1) {
        invalidTrailingComma($this.v12_1, 'array');
      }
      $this.v12_1.z12(get_TC_END_LIST());
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.w12_1 ? true : !isString) {
      tmp = $this.v12_1.d13();
    } else {
      tmp = $this.v12_1.c13();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.c14_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).h14 = function ($this$$receiver, it, $completion) {
    var tmp = this.i14($this$$receiver, it, $completion);
    tmp.y8_1 = Unit_instance;
    tmp.z8_1 = null;
    return tmp.h9();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).lc = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.h14(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).h9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 3;
            this.f14_1 = this.c14_1.v12_1.a13();
            if (this.f14_1 === get_TC_STRING()) {
              this.g14_1 = readValue(this.c14_1, true);
              this.w8_1 = 2;
              continue $sm;
            } else {
              if (this.f14_1 === get_TC_OTHER()) {
                this.g14_1 = readValue(this.c14_1, false);
                this.w8_1 = 2;
                continue $sm;
              } else {
                if (this.f14_1 === get_TC_BEGIN_OBJ()) {
                  this.w8_1 = 1;
                  suspendResult = readObject_0(this.d14_1, this.c14_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.f14_1 === get_TC_BEGIN_LIST()) {
                    this.g14_1 = readArray(this.c14_1);
                    this.w8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.c14_1.v12_1.z11("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.g14_1 = suspendResult;
            this.w8_1 = 2;
            continue $sm;
          case 2:
            return this.g14_1;
          case 3:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 3) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).i14 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.c14_1, completion);
    i.d14_1 = $this$$receiver;
    i.e14_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.h14($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o13_1 = _this__u8e3s4;
    this.p13_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).h9 = function () {
    var suspendResult = this.y8_1;
    $sm: do
      try {
        var tmp = this.w8_1;
        switch (tmp) {
          case 0:
            this.x8_1 = 5;
            var tmp_0 = this;
            tmp_0.q13_1 = this.o13_1;
            this.r13_1 = this.q13_1.v12_1.z12(get_TC_BEGIN_OBJ());
            if (this.q13_1.v12_1.a13() === get_TC_COMMA()) {
              this.q13_1.v12_1.z11('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.s13_1 = LinkedHashMap_init_$Create$();
            this.w8_1 = 1;
            continue $sm;
          case 1:
            if (!this.q13_1.v12_1.b13()) {
              this.w8_1 = 4;
              continue $sm;
            }

            this.t13_1 = this.q13_1.w12_1 ? this.q13_1.v12_1.d13() : this.q13_1.v12_1.c13();
            this.q13_1.v12_1.z12(get_TC_COLON());
            this.w8_1 = 2;
            suspendResult = this.p13_1.dc(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var this_0 = this.s13_1;
            var key = this.t13_1;
            this_0.p1(key, element);
            this.r13_1 = this.q13_1.v12_1.f13();
            var tmp0_subject = this.r13_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.w8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.w8_1 = 4;
                continue $sm;
              } else {
                this.q13_1.v12_1.z11('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.w8_1 = 1;
            continue $sm;
          case 4:
            if (this.r13_1 === get_TC_BEGIN_OBJ()) {
              this.q13_1.v12_1.z12(get_TC_END_OBJ());
            } else if (this.r13_1 === get_TC_COMMA()) {
              if (!this.q13_1.x12_1) {
                invalidTrailingComma(this.q13_1.v12_1);
              }
              this.q13_1.v12_1.z12(get_TC_END_OBJ());
            }

            return new JsonObject(this.s13_1);
          case 5:
            throw this.z8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.x8_1 === 5) {
          throw e;
        } else {
          this.w8_1 = this.x8_1;
          this.z8_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.v12_1 = lexer;
    this.w12_1 = configuration.wy_1;
    this.x12_1 = configuration.iz_1;
    this.y12_1 = 0;
  }
  protoOf(JsonTreeReader).e13 = function () {
    var token = this.v12_1.a13();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.y12_1 = this.y12_1 + 1 | 0;
      if (this.y12_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.y12_1 = this.y12_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.v12_1.z11('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.tf().p();
    while (tmp0_iterator.q()) {
      var annotation = tmp0_iterator.s();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.j14_1;
    }
    return json.jx_1.dz_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.kz().jx_1.cz_1;
    }
    if (tmp) {
      return deserializer.se(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.qe(), _this__u8e3s4.kz());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.lz();
    var descriptor = deserializer.qe();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.sf() + ', but had ' + getKClassFromExpression(value));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.sz(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
    var tmp_0;
    try {
      tmp_0 = findPolymorphicSerializer(deserializer, _this__u8e3s4, type);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof SerializationException) {
        var it = $p;
        throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
      } else {
        throw $p;
      }
    }
    var tmp_2 = tmp_0;
    var actualSerializer = isInterface(tmp_2, DeserializationStrategy) ? tmp_2 : THROW_CCE();
    return readPolymorphicJson(_this__u8e3s4.kz(), discriminator, jsonTree, actualSerializer);
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.qe()).v(classDiscriminator)) {
      var baseName = serializer.qe().sf();
      var actualName = actualSerializer.qe().sf();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.wf();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.a5() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.k14_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.a5() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.uf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.ag(i);
        if (name === $this.l14_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.k14_1 = useArrayPolymorphism;
    this.l14_1 = discriminator;
  }
  protoOf(PolymorphismValidator).ax = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).dx = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.qe();
    checkKind_0(this, descriptor, actualClass);
    if (!this.k14_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).ex = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).fx = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.a12_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).m14 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.a12_1;
    var value_0 = this_0.z1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.p1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.p1(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).b12 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.n14(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.m14(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).n14 = function (descriptor, key) {
    var tmp0_safe_receiver = this.a12_1.z1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.z1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.o14_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.o14_1 === unknownKey) {
      _this__u8e3s4.o14_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.bi(descriptor);
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.sx_1.a13() === get_TC_COMMA()) {
      $this.sx_1.z11('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.ux_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.ux_1 === -1)) {
        hasComma = $this.sx_1.q14();
      }
    } else {
      $this.sx_1.p14(get_COLON());
    }
    var tmp;
    if ($this.sx_1.b13()) {
      if (decodingKey) {
        if ($this.ux_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_0 = $this.sx_1;
          var condition = !hasComma;
          var position = this_0.yx_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected leading comma';
            this_0.z11(tmp$ret$0, position);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_1 = $this.sx_1;
          var condition_0 = hasComma;
          var position_0 = this_1.yx_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            this_1.z11(tmp$ret$1, position_0);
          }
        }
      }
      $this.ux_1 = $this.ux_1 + 1 | 0;
      tmp = $this.ux_1;
    } else {
      if (hasComma ? !$this.qx_1.jx_1.iz_1 : false) {
        invalidTrailingComma($this.sx_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.qx_1;
      if (!descriptor.bg(index)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      var elementDescriptor = descriptor.yf(index);
      var tmp;
      if (!elementDescriptor.of()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.sx_1.r14(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (equals(elementDescriptor.wf(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.of()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.sx_1.r14(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_3;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.sx_1.s14($this.wx_1.wy_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_3;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.sx_1.c13();
          tmp$ret$0 = true;
          break $l$block_3;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.sx_1.q14();
    while ($this.sx_1.b13()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.sx_1.p14(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.qx_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.wx_1.bz_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.sx_1.q14();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.xx_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.ln(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma ? !$this.qx_1.jx_1.iz_1 : false) {
      invalidTrailingComma($this.sx_1);
    }
    var tmp1_safe_receiver = $this.xx_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.mn();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.wx_1.vy_1 ? true : trySkip($this.vx_1, $this, key)) {
      $this.sx_1.u14($this.wx_1.wy_1);
    } else {
      $this.sx_1.t14(key);
    }
    return $this.sx_1.q14();
  }
  function decodeListIndex($this) {
    var hasComma = $this.sx_1.q14();
    var tmp;
    if ($this.sx_1.b13()) {
      if (!($this.ux_1 === -1) ? !hasComma : false) {
        $this.sx_1.z11('Expected end of the array or comma');
      }
      $this.ux_1 = $this.ux_1 + 1 | 0;
      tmp = $this.ux_1;
    } else {
      if (hasComma ? !$this.qx_1.jx_1.iz_1 : false) {
        invalidTrailingComma($this.sx_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.wx_1.wy_1) {
      tmp = $this.sx_1.w14();
    } else {
      tmp = $this.sx_1.v14();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.qx_1 = json;
    this.rx_1 = mode;
    this.sx_1 = lexer;
    this.tx_1 = this.qx_1.zh();
    this.ux_1 = -1;
    this.vx_1 = discriminatorHolder;
    this.wx_1 = this.qx_1.jx_1;
    this.xx_1 = this.wx_1.zy_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).kz = function () {
    return this.qx_1;
  };
  protoOf(StreamingJsonDecoder).zh = function () {
    return this.tx_1;
  };
  protoOf(StreamingJsonDecoder).lz = function () {
    return (new JsonTreeReader(this.qx_1.jx_1, this.sx_1)).e13();
  };
  protoOf(StreamingJsonDecoder).kh = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.qx_1.jx_1.cz_1;
      }
      if (tmp) {
        return deserializer.se(this);
      }
      var discriminator = classDiscriminator(deserializer.qe(), this.qx_1);
      var tmp0_elvis_lhs = this.sx_1.x14(discriminator, this.wx_1.wy_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type = tmp_0;
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it.message), _Char___init__impl__6a9atx(10), '');
          this.sx_1.z11(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp_3 = tmp_1;
      var actualSerializer = isInterface(tmp_3, DeserializationStrategy) ? tmp_3 : THROW_CCE();
      this.vx_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer.se(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.jf_1, plus(e.message, ' at path: ') + this.sx_1.zx_1.m12(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).lh = function (descriptor) {
    var newMode = switchMode(this.qx_1, descriptor);
    this.sx_1.zx_1.h12(descriptor);
    this.sx_1.p14(newMode.a15_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.w6_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.qx_1, newMode, this.sx_1, descriptor, this.vx_1);
        break;
      default:
        var tmp_0;
        if (this.rx_1.equals(newMode) ? this.qx_1.jx_1.zy_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.qx_1, newMode, this.sx_1, descriptor, this.vx_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).mh = function (descriptor) {
    if (this.qx_1.jx_1.vy_1 ? descriptor.uf() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.sx_1.q14() ? !this.qx_1.jx_1.iz_1 : false) {
      invalidTrailingComma(this.sx_1, '');
    }
    this.sx_1.p14(this.rx_1.b15_1);
    this.sx_1.zx_1.l12();
  };
  protoOf(StreamingJsonDecoder).xg = function () {
    var tmp;
    var tmp0_safe_receiver = this.xx_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x11_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.sx_1.c15();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).yg = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).xh = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.rx_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.sx_1.zx_1.k12();
    }
    var value = protoOf(AbstractDecoder).xh.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.sx_1.zx_1.j12(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).bi = function (descriptor) {
    var index;
    switch (this.rx_1.w6_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.rx_1.equals(WriteMode_MAP_getInstance())) {
      this.sx_1.zx_1.i12(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).zg = function () {
    return this.sx_1.d15();
  };
  protoOf(StreamingJsonDecoder).ah = function () {
    var value = this.sx_1.zz();
    if (!value.equals(toLong(value.m8()))) {
      this.sx_1.z11("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.m8();
  };
  protoOf(StreamingJsonDecoder).bh = function () {
    var value = this.sx_1.zz();
    if (!value.equals(toLong(value.n8()))) {
      this.sx_1.z11("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.n8();
  };
  protoOf(StreamingJsonDecoder).ch = function () {
    var value = this.sx_1.zz();
    if (!value.equals(toLong(value.h7()))) {
      this.sx_1.z11("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.h7();
  };
  protoOf(StreamingJsonDecoder).dh = function () {
    return this.sx_1.zz();
  };
  protoOf(StreamingJsonDecoder).eh = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.sx_1;
      var input = this_0.d13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z11("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.qx_1.jx_1.ez_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.sx_1, result);
  };
  protoOf(StreamingJsonDecoder).fh = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.sx_1;
      var input = this_0.d13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z11("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.qx_1.jx_1.ez_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.sx_1, result);
  };
  protoOf(StreamingJsonDecoder).gh = function () {
    var string = this.sx_1.d13();
    if (!(string.length === 1)) {
      this.sx_1.z11("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).hh = function () {
    var tmp;
    if (this.wx_1.wy_1) {
      tmp = this.sx_1.w14();
    } else {
      tmp = this.sx_1.c13();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ih = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.sx_1, this.qx_1) : protoOf(AbstractDecoder).ih.call(this, descriptor);
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.e15_1 = lexer;
    this.f15_1 = json.zh();
  }
  protoOf(JsonDecoderForUnsignedTypes).zh = function () {
    return this.f15_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).bi = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).ch = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.e15_1;
      var input = this_0.d13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var this_1 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z11("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).dh = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.e15_1;
      var input = this_0.d13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var this_1 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z11("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).ah = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.e15_1;
      var input = this_0.d13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var this_1 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z11("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).bh = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.e15_1;
      var input = this_0.d13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var this_1 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.z11("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.n12_1.v10();
    $this.oi(ensureNotNull($this.u12_1));
    $this.n12_1.y10(get_COLON());
    $this.n12_1.x10();
    $this.oi(descriptor.sf());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.n12_1 = composer;
    this.o12_1 = json;
    this.p12_1 = mode;
    this.q12_1 = modeReuseCache;
    this.r12_1 = this.o12_1.zh();
    this.s12_1 = this.o12_1.jx_1;
    this.t12_1 = false;
    this.u12_1 = null;
    var i = this.p12_1.w6_1;
    if (!(this.q12_1 == null)) {
      if (!(this.q12_1[i] === null) ? true : !(this.q12_1[i] === this)) {
        this.q12_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).kz = function () {
    return this.o12_1;
  };
  protoOf(StreamingJsonEncoder).zh = function () {
    return this.r12_1;
  };
  protoOf(StreamingJsonEncoder).bj = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.kz().jx_1.cz_1) {
        serializer.re(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.kz().jx_1.jz_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.kz().jx_1.jz_1.w6_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call

            var it = serializer.qe().wf();
            tmp_0 = equals(it, CLASS_getInstance()) ? true : equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.qe(), this.kz()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          // Inline function 'kotlin.contracts.contract' call
          if (value == null) {
            // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically.<anonymous>' call
            var message = 'Value for serializer ' + serializer.qe() + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          validateIfSealed$accessor$1ad0flx(serializer, actual, baseClassDiscriminator);
        }
        checkKind(actual.qe().wf());
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
        this.u12_1 = baseClassDiscriminator;
      }
      actualSerializer.re(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).lh = function (descriptor) {
    var newMode = switchMode(this.o12_1, descriptor);
    if (!(newMode.a15_1 === get_INVALID())) {
      this.n12_1.y10(newMode.a15_1);
      this.n12_1.t10();
    }
    if (!(this.u12_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.u12_1 = null;
    }
    if (this.p12_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.q12_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.w6_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.n12_1, this.o12_1, newMode, this.q12_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).mh = function (descriptor) {
    if (!(this.p12_1.b15_1 === get_INVALID())) {
      this.n12_1.u10();
      this.n12_1.w10();
      this.n12_1.y10(this.p12_1.b15_1);
    }
  };
  protoOf(StreamingJsonEncoder).di = function (descriptor, index) {
    switch (this.p12_1.w6_1) {
      case 1:
        if (!this.n12_1.s10_1) {
          this.n12_1.y10(get_COMMA());
        }

        this.n12_1.v10();
        break;
      case 2:
        if (!this.n12_1.s10_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.n12_1.y10(get_COMMA());
            this.n12_1.v10();
            tmp_0 = true;
          } else {
            this.n12_1.y10(get_COLON());
            this.n12_1.x10();
            tmp_0 = false;
          }
          tmp.t12_1 = tmp_0;
        } else {
          this.t12_1 = true;
          this.n12_1.v10();
        }

        break;
      case 3:
        if (index === 0)
          this.t12_1 = true;
        if (index === 1) {
          this.n12_1.y10(get_COMMA());
          this.n12_1.x10();
          this.t12_1 = false;
        }

        break;
      default:
        if (!this.n12_1.s10_1) {
          this.n12_1.y10(get_COMMA());
        }

        this.n12_1.v10();
        this.oi(getJsonElementName(descriptor, this.o12_1, index));
        this.n12_1.y10(get_COLON());
        this.n12_1.x10();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).pi = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.n12_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.n12_1;
      } else {
        tmp_0 = new ComposerForUnsignedNumbers(this.n12_1.r10_1, this.t12_1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.o12_1, this.p12_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.n12_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.n12_1;
      } else {
        tmp_2 = new ComposerForUnquotedLiterals(this.n12_1.r10_1, this.t12_1);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.o12_1, this.p12_1, null);
    } else {
      tmp = protoOf(AbstractEncoder).pi.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).fi = function () {
    this.n12_1.a11(get_NULL());
  };
  protoOf(StreamingJsonEncoder).gi = function (value) {
    if (this.t12_1) {
      this.oi(value.toString());
    } else {
      this.n12_1.j11(value);
    }
  };
  protoOf(StreamingJsonEncoder).hi = function (value) {
    if (this.t12_1) {
      this.oi(value.toString());
    } else {
      this.n12_1.e11(value);
    }
  };
  protoOf(StreamingJsonEncoder).ii = function (value) {
    if (this.t12_1) {
      this.oi(value.toString());
    } else {
      this.n12_1.g11(value);
    }
  };
  protoOf(StreamingJsonEncoder).ji = function (value) {
    if (this.t12_1) {
      this.oi(value.toString());
    } else {
      this.n12_1.h11(value);
    }
  };
  protoOf(StreamingJsonEncoder).ki = function (value) {
    if (this.t12_1) {
      this.oi(value.toString());
    } else {
      this.n12_1.i11(value);
    }
  };
  protoOf(StreamingJsonEncoder).li = function (value) {
    if (this.t12_1) {
      this.oi(value.toString());
    } else {
      this.n12_1.c11(value);
    }
    if (!this.s12_1.ez_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.n12_1.r10_1));
    }
  };
  protoOf(StreamingJsonEncoder).mi = function (value) {
    if (this.t12_1) {
      this.oi(value.toString());
    } else {
      this.n12_1.d11(value);
    }
    if (!this.s12_1.ez_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.n12_1.r10_1));
    }
  };
  protoOf(StreamingJsonEncoder).ni = function (value) {
    this.oi(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).oi = function (value) {
    return this.n12_1.k11(value);
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.vf() ? get_unsignedNumberDescriptors().v(_this__u8e3s4) : false;
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.vf() ? equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor()) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).qe(), serializer_0(Companion_getInstance()).qe(), serializer_2(Companion_getInstance_1()).qe(), serializer_3(Companion_getInstance_2()).qe()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.m4(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.k6(value, lastPos, i);
          _this__u8e3s4.l4(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.k6(value, lastPos, value.length);
    } else {
      _this__u8e3s4.l4(value);
    }
    _this__u8e3s4.m4(get_STRING());
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_0(c1) + toString_0(c2) + toString_0(c3) + toString_0(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      this_7[Char__toInt_impl_vasixd(this_8)] = 34;
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(92);
      this_7[Char__toInt_impl_vasixd(this_9)] = 92;
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(9);
      this_7[Char__toInt_impl_vasixd(this_10)] = 116;
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(8);
      this_7[Char__toInt_impl_vasixd(this_11)] = 98;
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(10);
      this_7[Char__toInt_impl_vasixd(this_12)] = 110;
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(13);
      this_7[Char__toInt_impl_vasixd(this_13)] = 114;
      this_7[12] = 102;
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.l15()));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' literal when non-nullable " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.i15_1 = json;
    this.j15_1 = value;
    this.k15_1 = this.kz().jx_1;
  }
  protoOf(AbstractJsonTreeDecoder).kz = function () {
    return this.i15_1;
  };
  protoOf(AbstractJsonTreeDecoder).t1 = function () {
    return this.j15_1;
  };
  protoOf(AbstractJsonTreeDecoder).zh = function () {
    return this.kz().zh();
  };
  protoOf(AbstractJsonTreeDecoder).l15 = function () {
    var tmp0_safe_receiver = this.tu();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.m15(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.t1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).lz = function () {
    return this.l15();
  };
  protoOf(AbstractJsonTreeDecoder).kh = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).uu = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).lh = function (descriptor) {
    var currentObject = this.l15();
    var tmp0_subject = descriptor.wf();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.kz();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.sf() + ', but had ' + getKClassFromExpression(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.kz();
        var keyDescriptor = carrierDescriptor(descriptor.yf(0), this_0.zh());
        var keyKind = keyDescriptor.wf();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.kz();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.sf() + ', but had ' + getKClassFromExpression(currentObject));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.jx_1.xy_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.kz();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.sf() + ', but had ' + getKClassFromExpression(currentObject));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.kz();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.sf() + ', but had ' + getKClassFromExpression(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).mh = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).xg = function () {
    var tmp = this.l15();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).n15 = function (tag) {
    var currentElement = this.m15(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(this.l15()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).o15 = function (tag) {
    return !(this.m15(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).wu = function (tag) {
    return this.o15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p15 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.n15(tag);
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).xu = function (tag) {
    return this.p15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q15 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.n15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ByteCompanionObject_instance.MIN_VALUE;
        if (result <= ByteCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).yu = function (tag) {
    return this.q15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r15 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.n15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ShortCompanionObject_instance.MIN_VALUE;
        if (result <= ShortCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).zu = function (tag) {
    return this.r15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s15 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.n15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).av = function (tag) {
    return this.s15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t15 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.n15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).bv = function (tag) {
    return this.t15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u15 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.n15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        var tmp0_elvis_lhs = get_float(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.kz().jx_1.ez_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.l15()));
  };
  protoOf(AbstractJsonTreeDecoder).cv = function (tag) {
    return this.u15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v15 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.n15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.kz().jx_1.ez_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.l15()));
  };
  protoOf(AbstractJsonTreeDecoder).dv = function (tag) {
    return this.v15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w15 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.n15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(this_0.mz());
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).ev = function (tag) {
    return this.w15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x15 = function (tag) {
    var value = this.n15(tag);
    if (!this.kz().jx_1.wy_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.wz_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(this.l15()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.l15()));
    return value.mz();
  };
  protoOf(AbstractJsonTreeDecoder).fv = function (tag) {
    return this.x15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y15 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.n15(tag).mz()), this.kz()) : protoOf(NamedValueDecoder).gv.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).gv = function (tag, inlineDescriptor) {
    return this.y15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).ih = function (descriptor) {
    return !(this.tu() == null) ? protoOf(NamedValueDecoder).ih.call(this, descriptor) : (new JsonPrimitiveDecoder(this.kz(), this.t1())).ih(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.kz();
      if (!descriptor.bg(index)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      var elementDescriptor = descriptor.yf(index);
      var tmp;
      if (!elementDescriptor.of()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.m15(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (equals(elementDescriptor.wf(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.of()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.m15(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = false;
          break $l$block_3;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.m15(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_3;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$0 = true;
          break $l$block_3;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.i16_1 = (!$this.kz().jx_1.zy_1 ? !descriptor.bg(index) : false) ? descriptor.yf(index).of() : false;
    return $this.i16_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.e16_1 = value;
    this.f16_1 = polyDiscriminator;
    this.g16_1 = polyDescriptor;
    this.h16_1 = 0;
    this.i16_1 = false;
  }
  protoOf(JsonTreeDecoder).t1 = function () {
    return this.e16_1;
  };
  protoOf(JsonTreeDecoder).bi = function (descriptor) {
    while (this.h16_1 < descriptor.uf()) {
      var tmp1 = this.h16_1;
      this.h16_1 = tmp1 + 1 | 0;
      var name = this.ou(descriptor, tmp1);
      var index = this.h16_1 - 1 | 0;
      this.i16_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.t1();
      if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).x1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.k15_1.bz_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).xg = function () {
    return !this.i16_1 ? protoOf(AbstractJsonTreeDecoder).xg.call(this) : false;
  };
  protoOf(JsonTreeDecoder).pu = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.kz());
    var baseName = descriptor.ag(index);
    if (strategy == null) {
      if (!this.k15_1.fz_1)
        return baseName;
      if (this.t1().o1().v(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.kz(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.t1().o1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.p();
      while (tmp0_iterator.q()) {
        var element = tmp0_iterator.s();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.z1(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.d12(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).m15 = function (tag) {
    return getValue(this.t1(), tag);
  };
  protoOf(JsonTreeDecoder).lh = function (descriptor) {
    if (descriptor === this.g16_1) {
      var tmp = this.kz();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.l15();
      var descriptor_0 = this.g16_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor_0.sf() + ', but had ' + getKClassFromExpression(value));
      }
      return new JsonTreeDecoder(tmp, value, this.f16_1, this.g16_1);
    }
    return protoOf(AbstractJsonTreeDecoder).lh.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).mh = function (descriptor) {
    var tmp;
    if (this.k15_1.vy_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.wf();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.kz());
    var tmp_1;
    if (strategy == null ? !this.k15_1.fz_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.kz(), descriptor).o1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.kz()).n14(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.t1().o1().p();
    while (tmp1_iterator.q()) {
      var key = tmp1_iterator.s();
      if (!names.v(key) ? !(key === this.f16_1) : false) {
        throw UnknownKeyException(key, this.t1().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.o16_1 = value;
    this.p16_1 = this.o16_1.u();
    this.q16_1 = -1;
  }
  protoOf(JsonTreeListDecoder).t1 = function () {
    return this.o16_1;
  };
  protoOf(JsonTreeListDecoder).pu = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).m15 = function (tag) {
    return this.o16_1.b1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).bi = function (descriptor) {
    while (this.q16_1 < (this.p16_1 - 1 | 0)) {
      this.q16_1 = this.q16_1 + 1 | 0;
      return this.q16_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.w16_1 = value;
    this.hv(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).t1 = function () {
    return this.w16_1;
  };
  protoOf(JsonPrimitiveDecoder).bi = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).m15 = function (tag) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tag === get_PRIMITIVE_TAG())) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.w16_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.h17_1 = value;
    this.i17_1 = toList(this.h17_1.o1());
    this.j17_1 = imul(this.i17_1.u(), 2);
    this.k17_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).t1 = function () {
    return this.h17_1;
  };
  protoOf(JsonTreeMapDecoder).pu = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.i17_1.b1(i);
  };
  protoOf(JsonTreeMapDecoder).bi = function (descriptor) {
    while (this.k17_1 < (this.j17_1 - 1 | 0)) {
      this.k17_1 = this.k17_1 + 1 | 0;
      return this.k17_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).m15 = function (tag) {
    return (this.k17_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.h17_1, tag);
  };
  protoOf(JsonTreeMapDecoder).mh = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.qe())).kh(deserializer);
  }
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.a15_1 = begin;
    this.b15_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.wf();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.yf(0), _this__u8e3s4.zh());
          var keyKind = keyDescriptor.wf();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.jx_1.xy_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.wf(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.vf()) {
      tmp = carrierDescriptor(_this__u8e3s4.yf(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function appendEscape($this, lastPosition, current) {
    $this.l17(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.l17(lastPosition, currentPosition);
    var result = $this.by_1.toString();
    $this.by_1.p6(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.ay_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.ay_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.m17(), $this.yx_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.n17(currentPosition);
    if (currentPosition === -1) {
      $this.z11('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.m17();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.m17(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.z11("Invalid escaped char '" + toString_0(currentChar) + "'");
    }
    $this.by_1.m4(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.yx_1 = startPos;
      $this.o17();
      if (($this.yx_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.z11('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.yx_1);
    }
    $this.by_1.m4(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.z11("Invalid toHexChar char '" + toString_0(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.n17(start);
    if (current >= charSequenceLength($this.m17()) ? true : current === -1) {
      $this.z11('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.m17();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var this_0 = charSequenceGet(tmp, tmp0);
    var tmp1_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp1_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp1_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.z11("Expected valid boolean literal prefix, but had '" + $this.d13() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.m17()) - current | 0) < literalSuffix.length) {
      $this.z11('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.m17(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.z11("Expected valid boolean literal prefix, but had '" + $this.d13() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.yx_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.x4();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.x4();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.yx_1 = 0;
    this.zx_1 = new JsonPath();
    this.ay_1 = null;
    this.by_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).o17 = function () {
  };
  protoOf(AbstractJsonLexer).p17 = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).cy = function () {
    var nextToken = this.f13();
    if (!(nextToken === 10)) {
      this.z11('Expected EOF after parsing, but had ' + toString_0(charSequenceGet(this.m17(), this.yx_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).z12 = function (expected) {
    var token = this.f13();
    if (!(token === expected)) {
      this.q17(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).p14 = function (expected) {
    this.o17();
    var source = this.m17();
    var cpos = this.yx_1;
    $l$loop_0: while (true) {
      cpos = this.n17(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.yx_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.r17(expected);
    }
    this.yx_1 = cpos;
    this.r17(expected);
  };
  protoOf(AbstractJsonLexer).r17 = function (expected) {
    if (this.yx_1 > 0 ? expected === _Char___init__impl__6a9atx(34) : false) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.yx_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.yx_1 = this.yx_1 - 1 | 0;
          tmp$ret$1 = this.d13();
          break $l$block;
        }finally {
          this.yx_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.y11("Expected string literal but 'null' literal was found", this.yx_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    this.q17(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).s17 = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.yx_1 - 1 | 0 : this.yx_1;
    var s = (this.yx_1 === charSequenceLength(this.m17()) ? true : position < 0) ? 'EOF' : toString_0(charSequenceGet(this.m17(), position));
    this.z11('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).q17 = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.s17(expectedToken, wasConsumed) : $super.s17.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).a13 = function () {
    var source = this.m17();
    var cpos = this.yx_1;
    $l$loop_0: while (true) {
      cpos = this.n17(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.yx_1 = cpos;
      return charToTokenClass(ch);
    }
    this.yx_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).r14 = function (doConsume) {
    var current = this.t17();
    current = this.n17(current);
    var len = charSequenceLength(this.m17()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.m17(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.m17(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.yx_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).c15 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.r14(doConsume) : $super.r14.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).t17 = function () {
    var current = this.yx_1;
    $l$loop_0: while (true) {
      current = this.n17(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.m17(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.yx_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).s14 = function (isLenient) {
    var token = this.a13();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.d13();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.c13();
    }
    var string = tmp;
    this.ay_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).u17 = function () {
    this.ay_1 = null;
  };
  protoOf(AbstractJsonLexer).v17 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.m17();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).c13 = function () {
    if (!(this.ay_1 == null)) {
      return takePeeked(this);
    }
    return this.v14();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.n17(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.z11('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.l17(lastPosition, currentPosition);
          currentPosition = this.n17(currentPosition);
          if (currentPosition === -1) {
            this.z11('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.v17(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.yx_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).w14 = function () {
    var result = this.d13();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.z11("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).d13 = function () {
    if (!(this.ay_1 == null)) {
      return takePeeked(this);
    }
    var current = this.t17();
    if (current >= charSequenceLength(this.m17()) ? true : current === -1) {
      this.z11('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.m17(), current));
    if (token === 1) {
      return this.c13();
    }
    if (!(token === 0)) {
      this.z11('Expected beginning of the string, but got ' + toString_0(charSequenceGet(this.m17(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.m17(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.m17())) {
        usedAppend = true;
        this.l17(this.yx_1, current);
        var eof = this.n17(current);
        if (eof === -1) {
          this.yx_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.v17(this.yx_1, current);
    } else {
      tmp = decodedString(this, this.yx_1, current);
    }
    var result = tmp;
    this.yx_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).l17 = function (fromIndex, toIndex) {
    this.by_1.k6(this.m17(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).u14 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.a13();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.d13();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.a13();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.d13();
        } else {
          this.v14();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.m(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.yx_1, 'found ] instead of } at path: ' + this.zx_1, this.m17());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.yx_1, 'found } instead of ] at path: ' + this.zx_1, this.m17());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.z11('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.f13();
      if (tokenStack.u() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.m17() + "', currentPosition=" + this.yx_1 + ')';
  };
  protoOf(AbstractJsonLexer).t14 = function (key) {
    var processed = this.v17(0, this.yx_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.y11("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).y11 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.zx_1.m12() + hintMessage, this.m17());
  };
  protoOf(AbstractJsonLexer).z11 = function (message, position, hint, $super) {
    position = position === VOID ? this.yx_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.y11(message, position, hint) : $super.y11.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).zz = function () {
    var current = this.t17();
    current = this.n17(current);
    if (current >= charSequenceLength(this.m17()) ? true : current === -1) {
      this.z11('EOF');
    }
    var tmp;
    if (charSequenceGet(this.m17(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.m17())) {
        this.z11('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.m17()))) {
      var ch = charSequenceGet(this.m17(), current);
      if ((ch === _Char___init__impl__6a9atx(101) ? true : ch === _Char___init__impl__6a9atx(69)) ? !hasExponent : false) {
        if (current === start) {
          this.z11('Unexpected symbol ' + toString_0(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) ? hasExponent : false) {
        if (current === start) {
          this.z11("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) ? hasExponent : false) {
        if (current === start) {
          this.z11("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.z11("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.z11("Unexpected symbol '" + toString_0(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.z6(toLong(10)).b8(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.z6(toLong(10)).c8(toLong(digit));
      if (accumulator.a7(new Long(0, 0)) > 0) {
        this.z11('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.z11('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.z11('EOF');
      }
      if (!(charSequenceGet(this.m17(), current) === _Char___init__impl__6a9atx(34))) {
        this.z11('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.yx_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.x4() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      var tmp_0;
      Companion_getInstance_3();
      if (doubleAccumulator > (new Long(-1, 2147483647)).x4()) {
        tmp_0 = true;
      } else {
        Companion_getInstance_3();
        tmp_0 = doubleAccumulator < (new Long(0, -2147483648)).x4();
      }
      if (tmp_0) {
        this.z11('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.z11("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_3();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.e8();
      } else {
        this.z11('Numeric value overflow');
      }
    }
    return tmp_1;
  };
  protoOf(AbstractJsonLexer).d15 = function () {
    var current = this.t17();
    if (current === charSequenceLength(this.m17())) {
      this.z11('EOF');
    }
    var tmp;
    if (charSequenceGet(this.m17(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.yx_1 === charSequenceLength(this.m17())) {
        this.z11('EOF');
      }
      if (!(charSequenceGet(this.m17(), this.yx_1) === _Char___init__impl__6a9atx(34))) {
        this.z11('Expected closing quotation mark');
      }
      this.yx_1 = this.yx_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().x17_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().w17_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.w17_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.x17_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.w17_1 = charArray(117);
    this.x17_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.c18_1 = source;
  }
  protoOf(StringJsonLexer).m17 = function () {
    return this.c18_1;
  };
  protoOf(StringJsonLexer).n17 = function (position) {
    return position < this.c18_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).f13 = function () {
    var source = this.c18_1;
    $l$loop: while (!(this.yx_1 === -1) ? this.yx_1 < source.length : false) {
      var tmp1 = this.yx_1;
      this.yx_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  protoOf(StringJsonLexer).q14 = function () {
    var current = this.t17();
    if (current === this.c18_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.c18_1, current) === _Char___init__impl__6a9atx(44)) {
      this.yx_1 = this.yx_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).b13 = function () {
    var current = this.yx_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.c18_1.length) {
      var c = charSequenceGet(this.c18_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.yx_1 = current;
      return this.p17(c);
    }
    this.yx_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).t17 = function () {
    var current = this.yx_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.c18_1.length) {
      var c = charSequenceGet(this.c18_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.yx_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).p14 = function (expected) {
    if (this.yx_1 === -1) {
      this.r17(expected);
    }
    var source = this.c18_1;
    $l$loop: while (this.yx_1 < source.length) {
      var tmp1 = this.yx_1;
      this.yx_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.r17(expected);
    }
    this.yx_1 = -1;
    this.r17(expected);
  };
  protoOf(StringJsonLexer).v14 = function () {
    this.p14(get_STRING());
    var current = this.yx_1;
    var closingQuote = indexOf(this.c18_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.d13();
      this.s17(get_TC_STRING(), false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.c18_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.c18_1, this.yx_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.yx_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.c18_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).x14 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.yx_1;
    try {
      if (!(this.f13() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = this.s14(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.u17();
      if (!(this.f13() === get_TC_COLON()))
        return null;
      return this.s14(isLenient);
    }finally {
      this.yx_1 = positionSnapshot;
      this.u17();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.lx_1;
  }
  function JsonToStringWriter() {
    this.ox_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).f11 = function (value) {
    this.ox_1.n6(value);
  };
  protoOf(JsonToStringWriter).z10 = function (char) {
    this.ox_1.m4(char);
  };
  protoOf(JsonToStringWriter).b11 = function (text) {
    this.ox_1.l4(text);
  };
  protoOf(JsonToStringWriter).l11 = function (text) {
    printQuoted(this.ox_1, text);
  };
  protoOf(JsonToStringWriter).px = function () {
    this.ox_1.q6();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.ox_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).of = get_isNullable;
  protoOf(defer$1).vf = get_isInline;
  protoOf(defer$1).tf = get_annotations;
  protoOf(PolymorphismValidator).cx = contextual;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Tombstone_instance = new Tombstone();
  PRIMITIVE_TAG = 'primitive';
  STRING = _Char___init__impl__6a9atx(34);
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  NULL = 'null';
  TC_OTHER = 0;
  INVALID = _Char___init__impl__6a9atx(0);
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_END_OBJ = 7;
  COMMA = _Char___init__impl__6a9atx(44);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  _.$_$.b = JsonNull_getInstance;
  _.$_$.c = JsonArray;
  _.$_$.d = JsonElement;
  _.$_$.e = JsonNull;
  _.$_$.f = JsonObject;
  _.$_$.g = JsonPrimitive_0;
  _.$_$.h = JsonPrimitive_1;
  _.$_$.i = JsonPrimitive_2;
  _.$_$.j = JsonPrimitive;
  _.$_$.k = Json_0;
  _.$_$.l = get_jsonArray;
  _.$_$.m = get_jsonObject;
  _.$_$.n = get_jsonPrimitive;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
