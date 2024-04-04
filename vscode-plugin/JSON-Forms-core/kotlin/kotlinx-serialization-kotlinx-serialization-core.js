(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.b7;
  var interfaceMeta = kotlin_kotlin.$_$.j6;
  var setMetadataFor = kotlin_kotlin.$_$.c7;
  var VOID = kotlin_kotlin.$_$.e;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.b3;
  var Unit_instance = kotlin_kotlin.$_$.m3;
  var emptyList = kotlin_kotlin.$_$.p4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.r9;
  var classMeta = kotlin_kotlin.$_$.b6;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.o7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g6;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.w;
  var objectCreate = kotlin_kotlin.$_$.z6;
  var captureStack = kotlin_kotlin.$_$.w5;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.x;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.z;
  var IllegalArgumentException = kotlin_kotlin.$_$.u8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var THROW_CCE = kotlin_kotlin.$_$.z8;
  var KClass = kotlin_kotlin.$_$.n7;
  var isInterface = kotlin_kotlin.$_$.r6;
  var Triple = kotlin_kotlin.$_$.a9;
  var getKClass = kotlin_kotlin.$_$.d;
  var Pair = kotlin_kotlin.$_$.x8;
  var Entry = kotlin_kotlin.$_$.u3;
  var LinkedHashMap = kotlin_kotlin.$_$.r3;
  var MutableMap = kotlin_kotlin.$_$.x3;
  var Map = kotlin_kotlin.$_$.v3;
  var HashMap = kotlin_kotlin.$_$.p3;
  var LinkedHashSet = kotlin_kotlin.$_$.s3;
  var MutableSet = kotlin_kotlin.$_$.y3;
  var Set = kotlin_kotlin.$_$.z3;
  var HashSet = kotlin_kotlin.$_$.q3;
  var ArrayList = kotlin_kotlin.$_$.n3;
  var MutableList = kotlin_kotlin.$_$.w3;
  var List = kotlin_kotlin.$_$.t3;
  var Collection = kotlin_kotlin.$_$.o3;
  var copyToArray = kotlin_kotlin.$_$.o4;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k1;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.j1;
  var Result = kotlin_kotlin.$_$.y8;
  var ensureNotNull = kotlin_kotlin.$_$.n9;
  var equals = kotlin_kotlin.$_$.d6;
  var getStringHashCode = kotlin_kotlin.$_$.h6;
  var isBlank = kotlin_kotlin.$_$.t7;
  var toString = kotlin_kotlin.$_$.g7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.y;
  var toList = kotlin_kotlin.$_$.l5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var toHashSet = kotlin_kotlin.$_$.j5;
  var toBooleanArray = kotlin_kotlin.$_$.i5;
  var withIndex = kotlin_kotlin.$_$.q5;
  var to = kotlin_kotlin.$_$.w9;
  var toMap = kotlin_kotlin.$_$.m5;
  var lazy_0 = kotlin_kotlin.$_$.s9;
  var contentEquals = kotlin_kotlin.$_$.d4;
  var until = kotlin_kotlin.$_$.m7;
  var joinToString = kotlin_kotlin.$_$.v4;
  var objectMeta = kotlin_kotlin.$_$.a7;
  var Long = kotlin_kotlin.$_$.v8;
  var Char = kotlin_kotlin.$_$.q8;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.d1;
  var Duration = kotlin_kotlin.$_$.p8;
  var Companion_getInstance = kotlin_kotlin.$_$.e3;
  var toIntOrNull = kotlin_kotlin.$_$.g8;
  var hashCode = kotlin_kotlin.$_$.i6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var isArray = kotlin_kotlin.$_$.k6;
  var arrayIterator = kotlin_kotlin.$_$.u5;
  var asList = kotlin_kotlin.$_$.a4;
  var step = kotlin_kotlin.$_$.l7;
  var getValue = kotlin_kotlin.$_$.s4;
  var longArray = kotlin_kotlin.$_$.v6;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.g3;
  var get_lastIndex = kotlin_kotlin.$_$.x4;
  var countTrailingZeroBits = kotlin_kotlin.$_$.l9;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.m;
  var KTypeParameter = kotlin_kotlin.$_$.p7;
  var fillArrayVal = kotlin_kotlin.$_$.e6;
  var booleanArray = kotlin_kotlin.$_$.v5;
  var emptyMap = kotlin_kotlin.$_$.q4;
  var contentHashCode = kotlin_kotlin.$_$.e4;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.f3;
  var isCharArray = kotlin_kotlin.$_$.n6;
  var charArray = kotlin_kotlin.$_$.x5;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.x2;
  var isDoubleArray = kotlin_kotlin.$_$.o6;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.y2;
  var isFloatArray = kotlin_kotlin.$_$.p6;
  var isLongArray = kotlin_kotlin.$_$.s6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.k3;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.k2;
  var ULongArray = kotlin_kotlin.$_$.f9;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.g2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.d2;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.i2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.e2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.z2;
  var isIntArray = kotlin_kotlin.$_$.q6;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.j3;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.b2;
  var UIntArray = kotlin_kotlin.$_$.d9;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.x1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.u1;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.z1;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.v1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.a3;
  var isShortArray = kotlin_kotlin.$_$.t6;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.l3;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.t2;
  var UShortArray = kotlin_kotlin.$_$.h9;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.p2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.m2;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.r2;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.n2;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.w2;
  var isByteArray = kotlin_kotlin.$_$.m6;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.i3;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.s1;
  var UByteArray = kotlin_kotlin.$_$.b9;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.p1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.l1;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.q1;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.m1;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.v2;
  var isBooleanArray = kotlin_kotlin.$_$.l6;
  var coerceAtLeast = kotlin_kotlin.$_$.i7;
  var copyOf = kotlin_kotlin.$_$.i4;
  var copyOf_0 = kotlin_kotlin.$_$.k4;
  var copyOf_1 = kotlin_kotlin.$_$.l4;
  var copyOf_2 = kotlin_kotlin.$_$.g4;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.l2;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.h2;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.j2;
  var copyOf_3 = kotlin_kotlin.$_$.n4;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.c2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.y1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.a2;
  var copyOf_4 = kotlin_kotlin.$_$.f4;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.u2;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.q2;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.s2;
  var copyOf_5 = kotlin_kotlin.$_$.j4;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.t1;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.o1;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.r1;
  var copyOf_6 = kotlin_kotlin.$_$.h4;
  var Unit = kotlin_kotlin.$_$.j9;
  var trimIndent = kotlin_kotlin.$_$.o8;
  var equals_0 = kotlin_kotlin.$_$.r7;
  var charSequenceLength = kotlin_kotlin.$_$.z5;
  var charSequenceGet = kotlin_kotlin.$_$.y5;
  var toString_0 = kotlin_kotlin.$_$.h1;
  var titlecase = kotlin_kotlin.$_$.b8;
  var isLowerCase = kotlin_kotlin.$_$.u7;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.d3;
  var ULong = kotlin_kotlin.$_$.g9;
  var UInt = kotlin_kotlin.$_$.e9;
  var UShort = kotlin_kotlin.$_$.i9;
  var UByte = kotlin_kotlin.$_$.c9;
  var mapOf = kotlin_kotlin.$_$.c5;
  var lastOrNull = kotlin_kotlin.$_$.z4;
  var get_lastIndex_0 = kotlin_kotlin.$_$.y4;
  var get_js = kotlin_kotlin.$_$.u6;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.u4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var get_indices_0 = kotlin_kotlin.$_$.t4;
  var Companion_instance = kotlin_kotlin.$_$.h3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i1;
  var createFailure = kotlin_kotlin.$_$.m9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, VOID, SerializationException_init_$Create$);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.se(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.xh(descriptor, index, deserializer, previousValue) : $super.xh.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.lh(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.re(this, value);
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.ax(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.bf('type', serializer_0(StringCompanionObject_instance).qe());
      $this$buildSerialDescriptor.bf('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.cf_1.a5() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.ve_1 = this$0.df_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.cf_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.cf_1 = baseClass;
    this.df_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ef_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).ff = function () {
    return this.cf_1;
  };
  protoOf(PolymorphicSerializer).qe = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ef_1;
    descriptor$factory();
    return this_0.t1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.cf_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.if(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.ff());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.hf(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.ff());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.qe();
    }, null);
  }
  function SealedClassSerializer() {
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.jf_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.p();
      while (tmp0_iterator.q()) {
        var item = tmp0_iterator.s();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.m(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.p();
      while (tmp0_iterator_0.q()) {
        var item_0 = tmp0_iterator_0.s();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.m(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (((_this__u8e3s4.equals(getKClass(Collection)) ? true : _this__u8e3s4.equals(getKClass(List))) ? true : _this__u8e3s4.equals(getKClass(MutableList))) ? true : _this__u8e3s4.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.b1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.b1(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.b1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.b1(0), serializers.b1(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.b1(0), serializers.b1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.b1(0), serializers.b1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.b1(0), serializers.b1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.b1(0), serializers.b1(1), serializers.b1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.b1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.o5();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.n5();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.s();
      var tmp$ret$0 = typeOrThrow(item);
      destination.m(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.x()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      // Inline function 'kotlin.Result.getOrNull' call
      var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (_Result___get_isFailure__impl__jpiriv(this_1)) {
        tmp_0 = null;
      } else {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    if (cachedSerializer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return cachedSerializer;
    }
    var tmp_2;
    if (typeArguments.x()) {
      tmp_2 = _this__u8e3s4.lf(rootClass);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var serializers = tmp_3;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      tmp_2 = tmp2_elvis_lhs == null ? _this__u8e3s4.kf(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_2;
    var tmp_4;
    if (contextualSerializer == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_4 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp4_safe_receiver = tmp_4;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.b1(0).m5();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().mf(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().mf(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().nf(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().nf(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.b1(0).m5();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.b1(0).m5();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.qe().of()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.pf_1 = original;
    this.qf_1 = kClass;
    this.rf_1 = this.pf_1.sf() + '<' + this.qf_1.a5() + '>';
  }
  protoOf(ContextDescriptor).tf = function () {
    return this.pf_1.tf();
  };
  protoOf(ContextDescriptor).uf = function () {
    return this.pf_1.uf();
  };
  protoOf(ContextDescriptor).vf = function () {
    return this.pf_1.vf();
  };
  protoOf(ContextDescriptor).of = function () {
    return this.pf_1.of();
  };
  protoOf(ContextDescriptor).wf = function () {
    return this.pf_1.wf();
  };
  protoOf(ContextDescriptor).xf = function (index) {
    return this.pf_1.xf(index);
  };
  protoOf(ContextDescriptor).yf = function (index) {
    return this.pf_1.yf(index);
  };
  protoOf(ContextDescriptor).zf = function (name) {
    return this.pf_1.zf(name);
  };
  protoOf(ContextDescriptor).ag = function (index) {
    return this.pf_1.ag(index);
  };
  protoOf(ContextDescriptor).bg = function (index) {
    return this.pf_1.bg(index);
  };
  protoOf(ContextDescriptor).sf = function () {
    return this.rf_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.pf_1, another.pf_1) ? another.qf_1.equals(this.qf_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.qf_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.rf_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.qf_1 + ', original: ' + this.pf_1 + ')';
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.lf(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.qe();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.qf_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.cg_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.gg_1 = $this_elementDescriptors;
    this.fg_1 = $this_elementDescriptors.uf();
  }
  protoOf(elementDescriptors$1$1).q = function () {
    return this.fg_1 > 0;
  };
  protoOf(elementDescriptors$1$1).s = function () {
    var tmp = this.gg_1.uf();
    var tmp1 = this.fg_1;
    this.fg_1 = tmp1 - 1 | 0;
    return this.gg_1.yf(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.hg_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).p = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.hg_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.we_1.u(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.te_1 = serialName;
    this.ue_1 = false;
    this.ve_1 = emptyList();
    this.we_1 = ArrayList_init_$Create$_0();
    this.xe_1 = HashSet_init_$Create$();
    this.ye_1 = ArrayList_init_$Create$_0();
    this.ze_1 = ArrayList_init_$Create$_0();
    this.af_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).ig = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.xe_1.m(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.te_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.we_1.m(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ye_1.m(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ze_1.m(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.af_1.m(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).bf = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ig(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ig.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.we_1.u(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.ug_1;
    _hashCode$factory();
    return this_0.t1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.tg_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.ag(it) + ': ' + this$0.yf(it).sf();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.jg_1 = serialName;
    this.kg_1 = kind;
    this.lg_1 = elementsCount;
    this.mg_1 = builder.ve_1;
    this.ng_1 = toHashSet(builder.we_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.we_1;
    tmp.og_1 = copyToArray(this_0);
    this.pg_1 = compactArray(builder.ye_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.ze_1;
    tmp_0.qg_1 = copyToArray(this_1);
    this.rg_1 = toBooleanArray(builder.af_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.og_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.s();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.y9_1, item.x9_1);
      destination.m(tmp$ret$2);
    }
    tmp_1.sg_1 = toMap(destination);
    this.tg_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.ug_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).sf = function () {
    return this.jg_1;
  };
  protoOf(SerialDescriptorImpl).wf = function () {
    return this.kg_1;
  };
  protoOf(SerialDescriptorImpl).uf = function () {
    return this.lg_1;
  };
  protoOf(SerialDescriptorImpl).tf = function () {
    return this.mg_1;
  };
  protoOf(SerialDescriptorImpl).vg = function () {
    return this.ng_1;
  };
  protoOf(SerialDescriptorImpl).ag = function (index) {
    return getChecked(this.og_1, index);
  };
  protoOf(SerialDescriptorImpl).zf = function (name) {
    var tmp0_elvis_lhs = this.sg_1.z1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).xf = function (index) {
    return getChecked(this.qg_1, index);
  };
  protoOf(SerialDescriptorImpl).yf = function (index) {
    return getChecked(this.pg_1, index);
  };
  protoOf(SerialDescriptorImpl).bg = function (index) {
    return getChecked_0(this.rg_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sf() === other.sf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.tg_1, other.tg_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.uf() === other.uf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.uf();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.yf(index).sf() === other.yf(index).sf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.yf(index).wf(), other.yf(index).wf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.lg_1);
    var tmp_0 = this.jg_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).a5());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).wg = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).xg = function () {
    return true;
  };
  protoOf(AbstractDecoder).yg = function () {
    return null;
  };
  protoOf(AbstractDecoder).zg = function () {
    var tmp = this.wg();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ah = function () {
    var tmp = this.wg();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bh = function () {
    var tmp = this.wg();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ch = function () {
    var tmp = this.wg();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).dh = function () {
    var tmp = this.wg();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).eh = function () {
    var tmp = this.wg();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fh = function () {
    var tmp = this.wg();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).gh = function () {
    var tmp = this.wg();
    return tmp instanceof Char ? tmp.i7_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).hh = function () {
    var tmp = this.wg();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ih = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).jh = function (deserializer, previousValue) {
    return this.kh(deserializer);
  };
  protoOf(AbstractDecoder).lh = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).mh = function (descriptor) {
  };
  protoOf(AbstractDecoder).nh = function (descriptor, index) {
    return this.zg();
  };
  protoOf(AbstractDecoder).oh = function (descriptor, index) {
    return this.ah();
  };
  protoOf(AbstractDecoder).ph = function (descriptor, index) {
    return this.bh();
  };
  protoOf(AbstractDecoder).qh = function (descriptor, index) {
    return this.ch();
  };
  protoOf(AbstractDecoder).rh = function (descriptor, index) {
    return this.dh();
  };
  protoOf(AbstractDecoder).sh = function (descriptor, index) {
    return this.eh();
  };
  protoOf(AbstractDecoder).th = function (descriptor, index) {
    return this.fh();
  };
  protoOf(AbstractDecoder).uh = function (descriptor, index) {
    return this.gh();
  };
  protoOf(AbstractDecoder).vh = function (descriptor, index) {
    return this.hh();
  };
  protoOf(AbstractDecoder).wh = function (descriptor, index) {
    return this.ih(descriptor.yf(index));
  };
  protoOf(AbstractDecoder).xh = function (descriptor, index, deserializer, previousValue) {
    return this.jh(deserializer, previousValue);
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).lh = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).mh = function (descriptor) {
  };
  protoOf(AbstractEncoder).di = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).ei = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).fi = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).gi = function (value) {
    return this.ei(value);
  };
  protoOf(AbstractEncoder).hi = function (value) {
    return this.ei(value);
  };
  protoOf(AbstractEncoder).ii = function (value) {
    return this.ei(value);
  };
  protoOf(AbstractEncoder).ji = function (value) {
    return this.ei(value);
  };
  protoOf(AbstractEncoder).ki = function (value) {
    return this.ei(value);
  };
  protoOf(AbstractEncoder).li = function (value) {
    return this.ei(value);
  };
  protoOf(AbstractEncoder).mi = function (value) {
    return this.ei(value);
  };
  protoOf(AbstractEncoder).ni = function (value) {
    return this.ei(new Char(value));
  };
  protoOf(AbstractEncoder).oi = function (value) {
    return this.ei(value);
  };
  protoOf(AbstractEncoder).pi = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).qi = function (descriptor, index, value) {
    if (this.di(descriptor, index)) {
      this.gi(value);
    }
  };
  protoOf(AbstractEncoder).ri = function (descriptor, index, value) {
    if (this.di(descriptor, index)) {
      this.hi(value);
    }
  };
  protoOf(AbstractEncoder).si = function (descriptor, index, value) {
    if (this.di(descriptor, index)) {
      this.ii(value);
    }
  };
  protoOf(AbstractEncoder).ti = function (descriptor, index, value) {
    if (this.di(descriptor, index)) {
      this.ji(value);
    }
  };
  protoOf(AbstractEncoder).ui = function (descriptor, index, value) {
    if (this.di(descriptor, index)) {
      this.ki(value);
    }
  };
  protoOf(AbstractEncoder).vi = function (descriptor, index, value) {
    if (this.di(descriptor, index)) {
      this.li(value);
    }
  };
  protoOf(AbstractEncoder).wi = function (descriptor, index, value) {
    if (this.di(descriptor, index)) {
      this.mi(value);
    }
  };
  protoOf(AbstractEncoder).xi = function (descriptor, index, value) {
    if (this.di(descriptor, index)) {
      this.ni(value);
    }
  };
  protoOf(AbstractEncoder).yi = function (descriptor, index, value) {
    if (this.di(descriptor, index)) {
      this.oi(value);
    }
  };
  protoOf(AbstractEncoder).zi = function (descriptor, index) {
    return this.di(descriptor, index) ? this.pi(descriptor.yf(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).aj = function (descriptor, index, serializer, value) {
    if (this.di(descriptor, index)) {
      this.bj(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    this.ej_1 = -1;
    this.fj_1 = -3;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    return Companion_instance_0;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.vh($this.qe(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.yh($this.qe(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).gf = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.qe();
    var composite = encoder.lh(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.yi(this.qe(), 0, actualSerializer.qe().sf());
    var tmp = this.qe();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.aj(tmp, 1, tmp$ret$0, value);
    composite.mh(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).re = function (encoder, value) {
    return this.gf(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).se = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.qe();
    var composite = decoder.lh(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.ai()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.bi(this.qe());
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.vh(this.qe(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var value_0 = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (value_0 == null) {
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  var message = 'Cannot read polymorphic value before its type token';
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = value_0;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              value = composite.yh(this.qe(), index, serializer);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var value_1 = value;
        // Inline function 'kotlin.contracts.contract' call
        if (value_1 == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = value_1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.mh(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).hf = function (decoder, klassName) {
    return decoder.zh().gj(this.ff(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).if = function (encoder, value) {
    return encoder.zh().hj(this.ff(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.a5();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.a5() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.a5() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.ij_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).qe = function () {
    return this.ij_1;
  };
  protoOf(NothingSerializer_0).jj = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).re = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.jj(encoder, tmp);
  };
  protoOf(NothingSerializer_0).se = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.kj_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).qe = function () {
    return this.kj_1;
  };
  protoOf(DurationSerializer).lj = function (encoder, value) {
    encoder.oi(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).re = function (encoder, value) {
    return this.lj(encoder, value instanceof Duration ? value.bc_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).mj = function (decoder) {
    return Companion_getInstance().ac(decoder.hh());
  };
  protoOf(DurationSerializer).se = function (decoder) {
    return new Duration(this.mj(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).sf = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).sf = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).sf = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).sf = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.pj_1 = elementDescriptor;
    this.qj_1 = 1;
  }
  protoOf(ListLikeDescriptor).wf = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).uf = function () {
    return this.qj_1;
  };
  protoOf(ListLikeDescriptor).ag = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).zf = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).bg = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).xf = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).yf = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.pj_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.pj_1, other.pj_1) ? this.sf() === other.sf() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.pj_1), 31) + getStringHashCode(this.sf()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.sf() + '(' + this.pj_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.vj_1 = serialName;
    this.wj_1 = keyDescriptor;
    this.xj_1 = valueDescriptor;
    this.yj_1 = 2;
  }
  protoOf(MapLikeDescriptor).sf = function () {
    return this.vj_1;
  };
  protoOf(MapLikeDescriptor).wf = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).uf = function () {
    return this.yj_1;
  };
  protoOf(MapLikeDescriptor).ag = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).zf = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).bg = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).xf = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).yf = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.sf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.wj_1;
        break;
      case 1:
        tmp = this.xj_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.sf() === other.sf()))
      return false;
    if (!equals(this.wj_1, other.wj_1))
      return false;
    if (!equals(this.xj_1, other.xj_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.sf());
    result = imul(31, result) + hashCode(this.wj_1) | 0;
    result = imul(31, result) + hashCode(this.xj_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.sf() + '(' + this.wj_1 + ', ' + this.xj_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.dk_1 = primitive.sf() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).sf = function () {
    return this.dk_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.fk_1 = new ArrayListClassDesc(element.qe());
  }
  protoOf(ArrayListSerializer).qe = function () {
    return this.fk_1;
  };
  protoOf(ArrayListSerializer).gk = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).hk = function (_this__u8e3s4) {
    return _this__u8e3s4.u();
  };
  protoOf(ArrayListSerializer).ik = function (_this__u8e3s4) {
    return this.hk(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).jk = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).kk = function (_this__u8e3s4) {
    return this.jk(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).lk = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).mk = function (_this__u8e3s4) {
    return this.lk((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).nk = function (_this__u8e3s4, size) {
    return _this__u8e3s4.i2(size);
  };
  protoOf(ArrayListSerializer).ok = function (_this__u8e3s4, size) {
    return this.nk(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).pk = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e1(index, element);
  };
  protoOf(ArrayListSerializer).qk = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.pk(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.bl_1 = new HashSetClassDesc(eSerializer.qe());
  }
  protoOf(HashSetSerializer).qe = function () {
    return this.bl_1;
  };
  protoOf(HashSetSerializer).gk = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).cl = function (_this__u8e3s4) {
    return _this__u8e3s4.u();
  };
  protoOf(HashSetSerializer).ik = function (_this__u8e3s4) {
    return this.cl(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).dl = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).kk = function (_this__u8e3s4) {
    return this.dl(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).el = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).mk = function (_this__u8e3s4) {
    return this.el((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).fl = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).ok = function (_this__u8e3s4, size) {
    return this.fl(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).gl = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.m(element);
  };
  protoOf(HashSetSerializer).qk = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.gl(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.il_1 = new LinkedHashSetClassDesc(eSerializer.qe());
  }
  protoOf(LinkedHashSetSerializer).qe = function () {
    return this.il_1;
  };
  protoOf(LinkedHashSetSerializer).gk = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).jl = function (_this__u8e3s4) {
    return _this__u8e3s4.u();
  };
  protoOf(LinkedHashSetSerializer).ik = function (_this__u8e3s4) {
    return this.jl(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).kl = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).kk = function (_this__u8e3s4) {
    return this.kl(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).el = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).mk = function (_this__u8e3s4) {
    return this.el((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).ll = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).ok = function (_this__u8e3s4, size) {
    return this.ll(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).ml = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.m(element);
  };
  protoOf(LinkedHashSetSerializer).qk = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.ml(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.pl_1 = new HashMapClassDesc(kSerializer.qe(), vSerializer.qe());
  }
  protoOf(HashMapSerializer).qe = function () {
    return this.pl_1;
  };
  protoOf(HashMapSerializer).ql = function (_this__u8e3s4) {
    return _this__u8e3s4.u();
  };
  protoOf(HashMapSerializer).rl = function (_this__u8e3s4) {
    return this.ql((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).sl = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.r1().p();
  };
  protoOf(HashMapSerializer).tl = function (_this__u8e3s4) {
    return this.sl((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).gk = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).ul = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.u(), 2);
  };
  protoOf(HashMapSerializer).ik = function (_this__u8e3s4) {
    return this.ul(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).vl = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).kk = function (_this__u8e3s4) {
    return this.vl(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).wl = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).mk = function (_this__u8e3s4) {
    return this.wl((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).xl = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).ok = function (_this__u8e3s4, size) {
    return this.xl(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.em_1 = new LinkedHashMapClassDesc(kSerializer.qe(), vSerializer.qe());
  }
  protoOf(LinkedHashMapSerializer).qe = function () {
    return this.em_1;
  };
  protoOf(LinkedHashMapSerializer).ql = function (_this__u8e3s4) {
    return _this__u8e3s4.u();
  };
  protoOf(LinkedHashMapSerializer).rl = function (_this__u8e3s4) {
    return this.ql((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).sl = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.r1().p();
  };
  protoOf(LinkedHashMapSerializer).tl = function (_this__u8e3s4) {
    return this.sl((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).gk = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).fm = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.u(), 2);
  };
  protoOf(LinkedHashMapSerializer).ik = function (_this__u8e3s4) {
    return this.fm(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).gm = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).kk = function (_this__u8e3s4) {
    return this.gm(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).wl = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).mk = function (_this__u8e3s4) {
    return this.wl((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).hm = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).ok = function (_this__u8e3s4, size) {
    return this.hm(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.jm_1 = kClass;
    this.km_1 = new ArrayClassDesc(eSerializer.qe());
  }
  protoOf(ReferenceArraySerializer).qe = function () {
    return this.km_1;
  };
  protoOf(ReferenceArraySerializer).lm = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).rl = function (_this__u8e3s4) {
    return this.lm((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).mm = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).tl = function (_this__u8e3s4) {
    return this.mm((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).gk = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).nm = function (_this__u8e3s4) {
    return _this__u8e3s4.u();
  };
  protoOf(ReferenceArraySerializer).ik = function (_this__u8e3s4) {
    return this.nm(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).om = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.jm_1);
  };
  protoOf(ReferenceArraySerializer).kk = function (_this__u8e3s4) {
    return this.om(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).pm = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).mk = function (_this__u8e3s4) {
    return this.pm((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).qm = function (_this__u8e3s4, size) {
    return _this__u8e3s4.i2(size);
  };
  protoOf(ReferenceArraySerializer).ok = function (_this__u8e3s4, size) {
    return this.qm(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).rm = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e1(index, element);
  };
  protoOf(ReferenceArraySerializer).qk = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.rm(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).sk = function (_this__u8e3s4) {
    return _this__u8e3s4.u();
  };
  protoOf(CollectionSerializer).rl = function (_this__u8e3s4) {
    return this.sk((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).tk = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(CollectionSerializer).tl = function (_this__u8e3s4) {
    return this.tk((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.yl_1 = keySerializer;
    this.zl_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).am = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.c7_1;
    var last = progression.d7_1;
    var step_0 = progression.e7_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.bm(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).wk = function (decoder, builder, startIndex, size) {
    return this.am(decoder, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).bm = function (decoder, index, builder, checkIndex) {
    var key = decoder.yh(this.qe(), index, this.yl_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.bi(this.qe());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.x1(key)) {
      var tmp_2 = this.zl_1.qe().wf();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.xh(this.qe(), vIndex, this.zl_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.yh(this.qe(), vIndex, this.zl_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.p1(key, value);
  };
  protoOf(MapLikeSerializer).xk = function (decoder, index, builder, checkIndex) {
    return this.bm(decoder, index, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).vk = function (encoder, value) {
    var size = this.rl(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.qe();
    var composite = encoder.dj(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.tl(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.s();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.t1();
      var tmp = this.qe();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.aj(tmp, tmp0, this.yl_1, k);
      var tmp_0 = this.qe();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.aj(tmp_0, tmp1, this.zl_1, v);
    }
    composite.mh(descriptor);
  };
  protoOf(MapLikeSerializer).re = function (encoder, value) {
    return this.vk(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.uk_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).vk = function (encoder, value) {
    var size = this.rl(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.qe();
    var composite = encoder.dj(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.tl(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.aj(this.qe(), index, this.uk_1, iterator.s());
      }
       while (inductionVariable < size);
    composite.mh(descriptor);
  };
  protoOf(CollectionLikeSerializer).re = function (encoder, value) {
    return this.vk(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).wk = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.xk(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).xk = function (decoder, index, builder, checkIndex) {
    this.qk(builder, index, decoder.yh(this.qe(), index, this.uk_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.ci($this.qe());
    $this.ok(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).zk = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.mk(previous);
    var builder = tmp1_elvis_lhs == null ? this.gk() : tmp1_elvis_lhs;
    var startIndex = this.ik(builder);
    var compositeDecoder = decoder.lh(this.qe());
    if (compositeDecoder.ai()) {
      this.wk(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.bi(this.qe());
        if (index === -1)
          break $l$loop;
        this.yk(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.mh(this.qe());
    return this.kk(builder);
  };
  protoOf(AbstractCollectionSerializer).se = function (decoder) {
    return this.zk(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).yk = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.xk(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.xk.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.tm_1 = new PrimitiveArrayDescriptor(primitiveSerializer.qe());
  }
  protoOf(PrimitiveArraySerializer).qe = function () {
    return this.tm_1;
  };
  protoOf(PrimitiveArraySerializer).um = function (_this__u8e3s4) {
    return _this__u8e3s4.vm();
  };
  protoOf(PrimitiveArraySerializer).ik = function (_this__u8e3s4) {
    return this.um(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).wm = function (_this__u8e3s4) {
    return _this__u8e3s4.xm();
  };
  protoOf(PrimitiveArraySerializer).kk = function (_this__u8e3s4) {
    return this.wm(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ym = function (_this__u8e3s4, size) {
    return _this__u8e3s4.i2(size);
  };
  protoOf(PrimitiveArraySerializer).ok = function (_this__u8e3s4, size) {
    return this.ym(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).zm = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).tl = function (_this__u8e3s4) {
    return this.zm((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).an = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).qk = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.an(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).gk = function () {
    return this.mk(this.bn());
  };
  protoOf(PrimitiveArraySerializer).en = function (encoder, value) {
    var size = this.rl(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.tm_1;
    var composite = encoder.dj(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.dn(composite, value, size);
    composite.mh(descriptor);
  };
  protoOf(PrimitiveArraySerializer).re = function (encoder, value) {
    return this.en(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).vk = function (encoder, value) {
    return this.en(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).se = function (decoder) {
    return this.zk(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).fn = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.vm() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.i2(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.i2.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.gn_1 = longArray(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).g8(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.kn_1[slot] = $this.kn_1[slot].k8((new Long(1, 0)).g8(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.kn_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.kn_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.f8());
          slotMarks = slotMarks.k8((new Long(1, 0)).g8(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.in_1($this.hn_1, index)) {
            $this.kn_1[slot] = slotMarks;
            return index;
          }
        }
        $this.kn_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.hn_1 = descriptor;
    this.in_1 = readIfAbsent;
    var elementsCount = this.hn_1.uf();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).g8(elementsCount);
      }
      tmp.jn_1 = tmp_0;
      this.kn_1 = Companion_getInstance_7().gn_1;
    } else {
      this.jn_1 = new Long(0, 0);
      this.kn_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ln = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.jn_1 = this.jn_1.k8((new Long(1, 0)).g8(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).mn = function () {
    var elementsCount = this.hn_1.uf();
    while (!this.jn_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.jn_1.f8());
      this.jn_1 = this.jn_1.k8((new Long(1, 0)).g8(index));
      if (this.in_1(this.hn_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.zn_1 = true;
  }
  protoOf(InlineClassDescriptor).vf = function () {
    return this.zn_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sf() === other.sf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.zn_1 ? contentEquals(this.mo(), other.mo()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.uf() === other.uf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.uf();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.yf(index).sf() === other.yf(index).sf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.yf(index).wf(), other.yf(index).wf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.no_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).oo = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.no_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).qe = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).re = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).se = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.qo_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).zh = function () {
    return this.qo_1;
  };
  protoOf(NoOpEncoder).ei = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).fi = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).gi = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).hi = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ii = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ji = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ki = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).li = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).mi = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ni = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).oi = function (value) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.ro_1 = OBJECT_getInstance();
    this.so_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).wf = function () {
    return this.ro_1;
  };
  protoOf(NothingSerialDescriptor).sf = function () {
    return this.so_1;
  };
  protoOf(NothingSerialDescriptor).uf = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).ag = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).zf = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).bg = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).yf = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).xf = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.so_1) + imul(31, this.ro_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.to_1 = serializer;
    this.uo_1 = new SerialDescriptorForNullable(this.to_1.qe());
  }
  protoOf(NullableSerializer).qe = function () {
    return this.uo_1;
  };
  protoOf(NullableSerializer).vo = function (encoder, value) {
    if (!(value == null)) {
      encoder.cj();
      encoder.bj(this.to_1, value);
    } else {
      encoder.fi();
    }
  };
  protoOf(NullableSerializer).re = function (encoder, value) {
    return this.vo(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).se = function (decoder) {
    return decoder.xg() ? decoder.kh(this.to_1) : decoder.yg();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.to_1, other.to_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.to_1);
  };
  function SerialDescriptorForNullable(original) {
    this.cg_1 = original;
    this.dg_1 = this.cg_1.sf() + '?';
    this.eg_1 = cachedSerialNames(this.cg_1);
  }
  protoOf(SerialDescriptorForNullable).tf = function () {
    return this.cg_1.tf();
  };
  protoOf(SerialDescriptorForNullable).uf = function () {
    return this.cg_1.uf();
  };
  protoOf(SerialDescriptorForNullable).vf = function () {
    return this.cg_1.vf();
  };
  protoOf(SerialDescriptorForNullable).wf = function () {
    return this.cg_1.wf();
  };
  protoOf(SerialDescriptorForNullable).xf = function (index) {
    return this.cg_1.xf(index);
  };
  protoOf(SerialDescriptorForNullable).yf = function (index) {
    return this.cg_1.yf(index);
  };
  protoOf(SerialDescriptorForNullable).zf = function (name) {
    return this.cg_1.zf(name);
  };
  protoOf(SerialDescriptorForNullable).ag = function (index) {
    return this.cg_1.ag(index);
  };
  protoOf(SerialDescriptorForNullable).bg = function (index) {
    return this.cg_1.bg(index);
  };
  protoOf(SerialDescriptorForNullable).sf = function () {
    return this.dg_1;
  };
  protoOf(SerialDescriptorForNullable).vg = function () {
    return this.eg_1;
  };
  protoOf(SerialDescriptorForNullable).of = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.cg_1, other.cg_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.cg_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.cg_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.ve_1 = this$0.xo_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.wo_1 = objectInstance;
    this.xo_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.yo_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).qe = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.yo_1;
    descriptor$factory_0();
    return this_0.t1();
  };
  protoOf(ObjectSerializer).gf = function (encoder, value) {
    encoder.lh(this.qe()).mh(this.qe());
  };
  protoOf(ObjectSerializer).re = function (encoder, value) {
    return this.gf(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).se = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.qe();
    var composite = decoder.lh(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.ai()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.bi(this.qe());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.mh(descriptor);
    return this.wo_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.qe();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.vg();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.uf());
    var inductionVariable = 0;
    var last = _this__u8e3s4.uf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.ag(i);
        result.m(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.m5();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + t);
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var value = _this__u8e3s4.ap_1;
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'kotlinx.serialization.internal.typeOrThrow.<anonymous>' call
        var message = 'Star projections in type arguments are not allowed, but had ' + _this__u8e3s4.ap_1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.a5();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.x())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.jo_1;
    childSerializers$factory();
    return this_0.t1();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.lo_1;
    _hashCode$factory_0();
    return this_0.t1();
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bo_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.oo();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bo_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.po();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.qe();
          destination.m(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.mo());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.ag(i) + ': ' + this$0.yf(i).sf();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.ao_1 = serialName;
    this.bo_1 = generatedSerializer;
    this.co_1 = elementsCount;
    this.do_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.co_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.eo_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.co_1;
    tmp_3.fo_1 = fillArrayVal(Array(size), null);
    this.go_1 = null;
    this.ho_1 = booleanArray(this.co_1);
    this.io_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.jo_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.ko_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.lo_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).sf = function () {
    return this.ao_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).uf = function () {
    return this.co_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).wf = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).tf = function () {
    var tmp0_elvis_lhs = this.go_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).vg = function () {
    return this.io_1.o1();
  };
  protoOf(PluginGeneratedSerialDescriptor).mo = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ko_1;
    typeParameterDescriptors$factory();
    return this_0.t1();
  };
  protoOf(PluginGeneratedSerialDescriptor).yf = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).qe();
  };
  protoOf(PluginGeneratedSerialDescriptor).bg = function (index) {
    return getChecked_0(this.ho_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).xf = function (index) {
    var tmp0_elvis_lhs = getChecked(this.fo_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ag = function (index) {
    return getChecked(this.eo_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).zf = function (name) {
    var tmp0_elvis_lhs = this.io_1.z1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sf() === other.sf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.mo(), other.mo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.uf() === other.uf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.uf();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.yf(index).sf() === other.yf(index).sf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.yf(index).wf(), other.yf(index).wf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.co_1);
    var tmp_0 = this.sf() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.sf());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.s();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.sf();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.p();
    while (tmp0_iterator_0.q()) {
      var element_0 = tmp0_iterator_0.s();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.wf();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.mo();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).ep = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.ep((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).fp = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.fp((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).bn = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).gp = function (decoder, index, builder, checkIndex) {
    builder.jp(decoder.uh(this.tm_1, index));
  };
  protoOf(CharArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.gp(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.gp(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).kp = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.xi(this.tm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).dn = function (encoder, content, size) {
    return this.kp(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).np = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.np((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).op = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.op((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).bn = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).pp = function (decoder, index, builder, checkIndex) {
    builder.sp(decoder.th(this.tm_1, index));
  };
  protoOf(DoubleArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.pp(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.pp(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).tp = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.wi(this.tm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).dn = function (encoder, content, size) {
    return this.tp(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).wp = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.wp((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).xp = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.xp((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).bn = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).yp = function (decoder, index, builder, checkIndex) {
    builder.bq(decoder.sh(this.tm_1, index));
  };
  protoOf(FloatArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.yp(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.yp(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).cq = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.vi(this.tm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).dn = function (encoder, content, size) {
    return this.cq(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).fq = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.fq((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).gq = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.gq((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).bn = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).hq = function (decoder, index, builder, checkIndex) {
    builder.kq(decoder.rh(this.tm_1, index));
  };
  protoOf(LongArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.hq(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.hq(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).lq = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ui(this.tm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).dn = function (encoder, content, size) {
    return this.lq(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).oq = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.oq(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.be_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).pq = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.pq(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.be_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).qq = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).bn = function () {
    return new ULongArray(this.qq());
  };
  protoOf(ULongArraySerializer_0).rq = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.wh(this.tm_1, index).dh();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.uq(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.rq(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.rq(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).vq = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.zi(this.tm_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.ki(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).dn = function (encoder, content, size) {
    return this.vq(encoder, content instanceof ULongArray ? content.be_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).yq = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.yq((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).zq = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.zq((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).bn = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).ar = function (decoder, index, builder, checkIndex) {
    builder.dr(decoder.qh(this.tm_1, index));
  };
  protoOf(IntArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.ar(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.ar(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).er = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ti(this.tm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).dn = function (encoder, content, size) {
    return this.er(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).hr = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.hr(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.pd_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).ir = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.ir(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.pd_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).jr = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).bn = function () {
    return new UIntArray(this.jr());
  };
  protoOf(UIntArraySerializer_0).kr = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.wh(this.tm_1, index).ch();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.nr(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.kr(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.kr(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).or = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.zi(this.tm_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.ji(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).dn = function (encoder, content, size) {
    return this.or(encoder, content instanceof UIntArray ? content.pd_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).rr = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.rr((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).sr = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.sr((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).bn = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).tr = function (decoder, index, builder, checkIndex) {
    builder.wr(decoder.ph(this.tm_1, index));
  };
  protoOf(ShortArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.tr(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.tr(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).xr = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.si(this.tm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).dn = function (encoder, content, size) {
    return this.xr(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).as = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.as(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.ne_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).bs = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.bs(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.ne_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).cs = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).bn = function () {
    return new UShortArray(this.cs());
  };
  protoOf(UShortArraySerializer_0).ds = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.wh(this.tm_1, index).bh();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.gs(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.ds(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.ds(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).hs = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.zi(this.tm_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.ii(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).dn = function (encoder, content, size) {
    return this.hs(encoder, content instanceof UShortArray ? content.ne_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).ks = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.ks((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).ls = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.ls((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).bn = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).ms = function (decoder, index, builder, checkIndex) {
    builder.ps(decoder.oh(this.tm_1, index));
  };
  protoOf(ByteArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.ms(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.ms(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).qs = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ri(this.tm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).dn = function (encoder, content, size) {
    return this.qs(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).ts = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.ts(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.dd_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).us = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.us(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.dd_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).vs = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).bn = function () {
    return new UByteArray(this.vs());
  };
  protoOf(UByteArraySerializer_0).ws = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.wh(this.tm_1, index).ah();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.zs(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.ws(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.ws(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).at = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.zi(this.tm_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.hi(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).dn = function (encoder, content, size) {
    return this.at(encoder, content instanceof UByteArray ? content.dd_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).dt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).rl = function (_this__u8e3s4) {
    return this.dt((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).et = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).mk = function (_this__u8e3s4) {
    return this.et((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).bn = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).ft = function (decoder, index, builder, checkIndex) {
    builder.it(decoder.nh(this.tm_1, index));
  };
  protoOf(BooleanArraySerializer_0).xk = function (decoder, index, builder, checkIndex) {
    return this.ft(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).cn = function (decoder, index, builder, checkIndex) {
    return this.ft(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).jt = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qi(this.tm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).dn = function (encoder, content, size) {
    return this.jt(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.hp_1 = bufferWithData;
    this.ip_1 = bufferWithData.length;
    this.i2(10);
  }
  protoOf(CharArrayBuilder).vm = function () {
    return this.ip_1;
  };
  protoOf(CharArrayBuilder).i2 = function (requiredCapacity) {
    if (this.hp_1.length < requiredCapacity)
      this.hp_1 = copyOf(this.hp_1, coerceAtLeast(requiredCapacity, imul(this.hp_1.length, 2)));
  };
  protoOf(CharArrayBuilder).jp = function (c) {
    this.fn();
    var tmp = this.hp_1;
    var tmp1 = this.ip_1;
    this.ip_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).xm = function () {
    return copyOf(this.hp_1, this.ip_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.qp_1 = bufferWithData;
    this.rp_1 = bufferWithData.length;
    this.i2(10);
  }
  protoOf(DoubleArrayBuilder).vm = function () {
    return this.rp_1;
  };
  protoOf(DoubleArrayBuilder).i2 = function (requiredCapacity) {
    if (this.qp_1.length < requiredCapacity)
      this.qp_1 = copyOf_0(this.qp_1, coerceAtLeast(requiredCapacity, imul(this.qp_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).sp = function (c) {
    this.fn();
    var tmp = this.qp_1;
    var tmp1 = this.rp_1;
    this.rp_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).xm = function () {
    return copyOf_0(this.qp_1, this.rp_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.zp_1 = bufferWithData;
    this.aq_1 = bufferWithData.length;
    this.i2(10);
  }
  protoOf(FloatArrayBuilder).vm = function () {
    return this.aq_1;
  };
  protoOf(FloatArrayBuilder).i2 = function (requiredCapacity) {
    if (this.zp_1.length < requiredCapacity)
      this.zp_1 = copyOf_1(this.zp_1, coerceAtLeast(requiredCapacity, imul(this.zp_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).bq = function (c) {
    this.fn();
    var tmp = this.zp_1;
    var tmp1 = this.aq_1;
    this.aq_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).xm = function () {
    return copyOf_1(this.zp_1, this.aq_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.iq_1 = bufferWithData;
    this.jq_1 = bufferWithData.length;
    this.i2(10);
  }
  protoOf(LongArrayBuilder).vm = function () {
    return this.jq_1;
  };
  protoOf(LongArrayBuilder).i2 = function (requiredCapacity) {
    if (this.iq_1.length < requiredCapacity)
      this.iq_1 = copyOf_2(this.iq_1, coerceAtLeast(requiredCapacity, imul(this.iq_1.length, 2)));
  };
  protoOf(LongArrayBuilder).kq = function (c) {
    this.fn();
    var tmp = this.iq_1;
    var tmp1 = this.jq_1;
    this.jq_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).xm = function () {
    return copyOf_2(this.iq_1, this.jq_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.sq_1 = bufferWithData;
    this.tq_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.i2(10);
  }
  protoOf(ULongArrayBuilder).vm = function () {
    return this.tq_1;
  };
  protoOf(ULongArrayBuilder).i2 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.sq_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.sq_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.sq_1), 2));
      tmp.sq_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).uq = function (c) {
    this.fn();
    var tmp = this.sq_1;
    var tmp1 = this.tq_1;
    this.tq_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).kt = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.sq_1;
    var newSize = this.tq_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
  };
  protoOf(ULongArrayBuilder).xm = function () {
    return new ULongArray(this.kt());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.br_1 = bufferWithData;
    this.cr_1 = bufferWithData.length;
    this.i2(10);
  }
  protoOf(IntArrayBuilder).vm = function () {
    return this.cr_1;
  };
  protoOf(IntArrayBuilder).i2 = function (requiredCapacity) {
    if (this.br_1.length < requiredCapacity)
      this.br_1 = copyOf_3(this.br_1, coerceAtLeast(requiredCapacity, imul(this.br_1.length, 2)));
  };
  protoOf(IntArrayBuilder).dr = function (c) {
    this.fn();
    var tmp = this.br_1;
    var tmp1 = this.cr_1;
    this.cr_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).xm = function () {
    return copyOf_3(this.br_1, this.cr_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.lr_1 = bufferWithData;
    this.mr_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.i2(10);
  }
  protoOf(UIntArrayBuilder).vm = function () {
    return this.mr_1;
  };
  protoOf(UIntArrayBuilder).i2 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.lr_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.lr_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.lr_1), 2));
      tmp.lr_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).nr = function (c) {
    this.fn();
    var tmp = this.lr_1;
    var tmp1 = this.mr_1;
    this.mr_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).lt = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.lr_1;
    var newSize = this.mr_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
  };
  protoOf(UIntArrayBuilder).xm = function () {
    return new UIntArray(this.lt());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ur_1 = bufferWithData;
    this.vr_1 = bufferWithData.length;
    this.i2(10);
  }
  protoOf(ShortArrayBuilder).vm = function () {
    return this.vr_1;
  };
  protoOf(ShortArrayBuilder).i2 = function (requiredCapacity) {
    if (this.ur_1.length < requiredCapacity)
      this.ur_1 = copyOf_4(this.ur_1, coerceAtLeast(requiredCapacity, imul(this.ur_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).wr = function (c) {
    this.fn();
    var tmp = this.ur_1;
    var tmp1 = this.vr_1;
    this.vr_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).xm = function () {
    return copyOf_4(this.ur_1, this.vr_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.es_1 = bufferWithData;
    this.fs_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.i2(10);
  }
  protoOf(UShortArrayBuilder).vm = function () {
    return this.fs_1;
  };
  protoOf(UShortArrayBuilder).i2 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.es_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.es_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.es_1), 2));
      tmp.es_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).gs = function (c) {
    this.fn();
    var tmp = this.es_1;
    var tmp1 = this.fs_1;
    this.fs_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).mt = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.es_1;
    var newSize = this.fs_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
  };
  protoOf(UShortArrayBuilder).xm = function () {
    return new UShortArray(this.mt());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ns_1 = bufferWithData;
    this.os_1 = bufferWithData.length;
    this.i2(10);
  }
  protoOf(ByteArrayBuilder).vm = function () {
    return this.os_1;
  };
  protoOf(ByteArrayBuilder).i2 = function (requiredCapacity) {
    if (this.ns_1.length < requiredCapacity)
      this.ns_1 = copyOf_5(this.ns_1, coerceAtLeast(requiredCapacity, imul(this.ns_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).ps = function (c) {
    this.fn();
    var tmp = this.ns_1;
    var tmp1 = this.os_1;
    this.os_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).xm = function () {
    return copyOf_5(this.ns_1, this.os_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.xs_1 = bufferWithData;
    this.ys_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.i2(10);
  }
  protoOf(UByteArrayBuilder).vm = function () {
    return this.ys_1;
  };
  protoOf(UByteArrayBuilder).i2 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.xs_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.xs_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.xs_1), 2));
      tmp.xs_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).zs = function (c) {
    this.fn();
    var tmp = this.xs_1;
    var tmp1 = this.ys_1;
    this.ys_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).nt = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.xs_1;
    var newSize = this.ys_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
  };
  protoOf(UByteArrayBuilder).xm = function () {
    return new UByteArray(this.nt());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gt_1 = bufferWithData;
    this.ht_1 = bufferWithData.length;
    this.i2(10);
  }
  protoOf(BooleanArrayBuilder).vm = function () {
    return this.ht_1;
  };
  protoOf(BooleanArrayBuilder).i2 = function (requiredCapacity) {
    if (this.gt_1.length < requiredCapacity)
      this.gt_1 = copyOf_6(this.gt_1, coerceAtLeast(requiredCapacity, imul(this.gt_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).it = function (c) {
    this.fn();
    var tmp = this.gt_1;
    var tmp1 = this.ht_1;
    this.ht_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).xm = function () {
    return copyOf_6(this.gt_1, this.ht_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().z1(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.ot_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).qe = function () {
    return this.ot_1;
  };
  protoOf(StringSerializer).pt = function (encoder, value) {
    return encoder.oi(value);
  };
  protoOf(StringSerializer).re = function (encoder, value) {
    return this.pt(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).se = function (decoder) {
    return decoder.hh();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.qt_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).qe = function () {
    return this.qt_1;
  };
  protoOf(CharSerializer).rt = function (encoder, value) {
    return encoder.ni(value);
  };
  protoOf(CharSerializer).re = function (encoder, value) {
    return this.rt(encoder, value instanceof Char ? value.i7_1 : THROW_CCE());
  };
  protoOf(CharSerializer).st = function (decoder) {
    return decoder.gh();
  };
  protoOf(CharSerializer).se = function (decoder) {
    return new Char(this.st(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.tt_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).qe = function () {
    return this.tt_1;
  };
  protoOf(DoubleSerializer).ut = function (encoder, value) {
    return encoder.mi(value);
  };
  protoOf(DoubleSerializer).re = function (encoder, value) {
    return this.ut(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).se = function (decoder) {
    return decoder.fh();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.vt_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).qe = function () {
    return this.vt_1;
  };
  protoOf(FloatSerializer).wt = function (encoder, value) {
    return encoder.li(value);
  };
  protoOf(FloatSerializer).re = function (encoder, value) {
    return this.wt(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).se = function (decoder) {
    return decoder.eh();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.xt_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).qe = function () {
    return this.xt_1;
  };
  protoOf(LongSerializer).yt = function (encoder, value) {
    return encoder.ki(value);
  };
  protoOf(LongSerializer).re = function (encoder, value) {
    return this.yt(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).se = function (decoder) {
    return decoder.dh();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.zt_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).qe = function () {
    return this.zt_1;
  };
  protoOf(IntSerializer).au = function (encoder, value) {
    return encoder.ji(value);
  };
  protoOf(IntSerializer).re = function (encoder, value) {
    return this.au(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).se = function (decoder) {
    return decoder.ch();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.bu_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).qe = function () {
    return this.bu_1;
  };
  protoOf(ShortSerializer).cu = function (encoder, value) {
    return encoder.ii(value);
  };
  protoOf(ShortSerializer).re = function (encoder, value) {
    return this.cu(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).se = function (decoder) {
    return decoder.bh();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.du_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).qe = function () {
    return this.du_1;
  };
  protoOf(ByteSerializer).eu = function (encoder, value) {
    return encoder.hi(value);
  };
  protoOf(ByteSerializer).re = function (encoder, value) {
    return this.eu(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).se = function (decoder) {
    return decoder.ah();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.fu_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).qe = function () {
    return this.fu_1;
  };
  protoOf(BooleanSerializer).gu = function (encoder, value) {
    return encoder.gi(value);
  };
  protoOf(BooleanSerializer).re = function (encoder, value) {
    return this.gu(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).se = function (decoder) {
    return decoder.zg();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.hu_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).qe = function () {
    return this.hu_1.qe();
  };
  protoOf(UnitSerializer).iu = function (decoder) {
    this.hu_1.se(decoder);
  };
  protoOf(UnitSerializer).se = function (decoder) {
    this.iu(decoder);
    return Unit_instance;
  };
  protoOf(UnitSerializer).ju = function (encoder, value) {
    this.hu_1.gf(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).re = function (encoder, value) {
    return this.ju(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.ku_1 = serialName;
    this.lu_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).sf = function () {
    return this.ku_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).wf = function () {
    return this.lu_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).uf = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).ag = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).zf = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).bg = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).yf = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).xf = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.ku_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.ku_1 === other.ku_1 ? equals(this.lu_1, other.lu_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.ku_1) + imul(31, this.lu_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().o1();
    var tmp0_iterator = keys.p();
    while (tmp0_iterator.q()) {
      var primitive = tmp0_iterator.s();
      var simpleName = capitalize(ensureNotNull(primitive.a5()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var it = charSequenceGet(_this__u8e3s4, 0);
      var tmp$ret$1 = isLowerCase(it) ? titlecase(it) : toString_0(it);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().z5(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().c6(), CharArraySerializer()), to(PrimitiveClasses_getInstance().x5(), serializer_2(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().i6(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().w5(), serializer_3(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().h6(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().g6(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().v5(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().f6(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().u5(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().e6(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().t5(), serializer_10(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().d6(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().s5(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().b6(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().r5(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).ou = function (_this__u8e3s4, index) {
    return this.qu(this.pu(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).qu = function (nestedName) {
    var tmp0_elvis_lhs = this.tu();
    return this.uu(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).pu = function (descriptor, index) {
    return descriptor.ag(index);
  };
  protoOf(NamedValueDecoder).uu = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.hv(tag);
    var r = block();
    if (!$this.su_1) {
      $this.iv();
    }
    $this.su_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.jh($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.ru_1 = ArrayList_init_$Create$_0();
    this.su_1 = false;
  }
  protoOf(TaggedDecoder).zh = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).vu = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).wu = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).xu = function (tag) {
    var tmp = this.vu(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).yu = function (tag) {
    var tmp = this.vu(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).zu = function (tag) {
    var tmp = this.vu(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).av = function (tag) {
    var tmp = this.vu(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).bv = function (tag) {
    var tmp = this.vu(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).cv = function (tag) {
    var tmp = this.vu(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).dv = function (tag) {
    var tmp = this.vu(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ev = function (tag) {
    var tmp = this.vu(tag);
    return tmp instanceof Char ? tmp.i7_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).fv = function (tag) {
    var tmp = this.vu(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).gv = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.hv(tag);
    return this;
  };
  protoOf(TaggedDecoder).jh = function (deserializer, previousValue) {
    return this.kh(deserializer);
  };
  protoOf(TaggedDecoder).ih = function (descriptor) {
    return this.gv(this.iv(), descriptor);
  };
  protoOf(TaggedDecoder).xg = function () {
    var tmp0_elvis_lhs = this.tu();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.wu(currentTag);
  };
  protoOf(TaggedDecoder).yg = function () {
    return null;
  };
  protoOf(TaggedDecoder).zg = function () {
    return this.xu(this.iv());
  };
  protoOf(TaggedDecoder).ah = function () {
    return this.yu(this.iv());
  };
  protoOf(TaggedDecoder).bh = function () {
    return this.zu(this.iv());
  };
  protoOf(TaggedDecoder).ch = function () {
    return this.av(this.iv());
  };
  protoOf(TaggedDecoder).dh = function () {
    return this.bv(this.iv());
  };
  protoOf(TaggedDecoder).eh = function () {
    return this.cv(this.iv());
  };
  protoOf(TaggedDecoder).fh = function () {
    return this.dv(this.iv());
  };
  protoOf(TaggedDecoder).gh = function () {
    return this.ev(this.iv());
  };
  protoOf(TaggedDecoder).hh = function () {
    return this.fv(this.iv());
  };
  protoOf(TaggedDecoder).lh = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).mh = function (descriptor) {
  };
  protoOf(TaggedDecoder).nh = function (descriptor, index) {
    return this.xu(this.ou(descriptor, index));
  };
  protoOf(TaggedDecoder).oh = function (descriptor, index) {
    return this.yu(this.ou(descriptor, index));
  };
  protoOf(TaggedDecoder).ph = function (descriptor, index) {
    return this.zu(this.ou(descriptor, index));
  };
  protoOf(TaggedDecoder).qh = function (descriptor, index) {
    return this.av(this.ou(descriptor, index));
  };
  protoOf(TaggedDecoder).rh = function (descriptor, index) {
    return this.bv(this.ou(descriptor, index));
  };
  protoOf(TaggedDecoder).sh = function (descriptor, index) {
    return this.cv(this.ou(descriptor, index));
  };
  protoOf(TaggedDecoder).th = function (descriptor, index) {
    return this.dv(this.ou(descriptor, index));
  };
  protoOf(TaggedDecoder).uh = function (descriptor, index) {
    return this.ev(this.ou(descriptor, index));
  };
  protoOf(TaggedDecoder).vh = function (descriptor, index) {
    return this.fv(this.ou(descriptor, index));
  };
  protoOf(TaggedDecoder).wh = function (descriptor, index) {
    return this.gv(this.ou(descriptor, index), descriptor.yf(index));
  };
  protoOf(TaggedDecoder).xh = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ou(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).tu = function () {
    return lastOrNull(this.ru_1);
  };
  protoOf(TaggedDecoder).hv = function (name) {
    this.ru_1.m(name);
  };
  protoOf(TaggedDecoder).iv = function () {
    var r = this.ru_1.d1(get_lastIndex_0(this.ru_1));
    this.su_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.jv_1 = key;
    this.kv_1 = value;
  }
  protoOf(MapEntry).s1 = function () {
    return this.jv_1;
  };
  protoOf(MapEntry).t1 = function () {
    return this.kv_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.jv_1 + ', value=' + this.kv_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.jv_1 == null ? 0 : hashCode(this.jv_1);
    result = imul(result, 31) + (this.kv_1 == null ? 0 : hashCode(this.kv_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.jv_1, tmp0_other_with_cast.jv_1))
      return false;
    if (!equals(this.kv_1, tmp0_other_with_cast.kv_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.bf('key', $keySerializer.qe());
      $this$buildSerialDescriptor.bf('value', $valueSerializer.qe());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.nv_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).qe = function () {
    return this.nv_1;
  };
  protoOf(MapEntrySerializer_0).ov = function (_this__u8e3s4) {
    return _this__u8e3s4.s1();
  };
  protoOf(MapEntrySerializer_0).pv = function (_this__u8e3s4) {
    return this.ov((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).qv = function (_this__u8e3s4) {
    return _this__u8e3s4.t1();
  };
  protoOf(MapEntrySerializer_0).rv = function (_this__u8e3s4) {
    return this.qv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).sv = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.bf('first', $keySerializer.qe());
      $this$buildClassSerialDescriptor.bf('second', $valueSerializer.qe());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.yv_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).qe = function () {
    return this.yv_1;
  };
  protoOf(PairSerializer_0).zv = function (_this__u8e3s4) {
    return _this__u8e3s4.da_1;
  };
  protoOf(PairSerializer_0).pv = function (_this__u8e3s4) {
    return this.zv(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).aw = function (_this__u8e3s4) {
    return _this__u8e3s4.ea_1;
  };
  protoOf(PairSerializer_0).rv = function (_this__u8e3s4) {
    return this.aw(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).sv = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.yh($this.ew_1, 0, $this.bw_1);
    var b = composite.yh($this.ew_1, 1, $this.cw_1);
    var c = composite.yh($this.ew_1, 2, $this.dw_1);
    composite.mh($this.ew_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.bi($this.ew_1);
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.yh($this.ew_1, 0, $this.bw_1);
        } else {
          if (index === 1) {
            b = composite.yh($this.ew_1, 1, $this.cw_1);
          } else {
            if (index === 2) {
              c = composite.yh($this.ew_1, 2, $this.dw_1);
            } else {
              throw SerializationException_init_$Create$_0('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.mh($this.ew_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.bf('first', this$0.bw_1.qe());
      $this$buildClassSerialDescriptor.bf('second', this$0.cw_1.qe());
      $this$buildClassSerialDescriptor.bf('third', this$0.dw_1.qe());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.bw_1 = aSerializer;
    this.cw_1 = bSerializer;
    this.dw_1 = cSerializer;
    var tmp = this;
    tmp.ew_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).qe = function () {
    return this.ew_1;
  };
  protoOf(TripleSerializer_0).fw = function (encoder, value) {
    var structuredEncoder = encoder.lh(this.ew_1);
    structuredEncoder.aj(this.ew_1, 0, this.bw_1, value.rc_1);
    structuredEncoder.aj(this.ew_1, 1, this.cw_1, value.sc_1);
    structuredEncoder.aj(this.ew_1, 2, this.dw_1, value.tc_1);
    structuredEncoder.mh(this.ew_1);
  };
  protoOf(TripleSerializer_0).re = function (encoder, value) {
    return this.fw(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).se = function (decoder) {
    var composite = decoder.lh(this.ew_1);
    if (composite.ai()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.tv_1 = keySerializer;
    this.uv_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).vv = function (encoder, value) {
    var structuredEncoder = encoder.lh(this.qe());
    structuredEncoder.aj(this.qe(), 0, this.tv_1, this.pv(value));
    structuredEncoder.aj(this.qe(), 1, this.uv_1, this.rv(value));
    structuredEncoder.mh(this.qe());
  };
  protoOf(KeyValueSerializer).re = function (encoder, value) {
    return this.vv(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).se = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.qe();
    var composite = decoder.lh(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.ai()) {
        var key = composite.yh(this.qe(), 0, this.tv_1);
        var value = composite.yh(this.qe(), 1, this.uv_1);
        tmp$ret$0 = this.sv(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.bi(this.qe());
        if (idx === -1) {
          break mainLoop;
        } else {
          if (idx === 0) {
            key_0 = composite.yh(this.qe(), 0, this.tv_1);
          } else {
            if (idx === 1) {
              value_0 = composite.yh(this.qe(), 1, this.uv_1);
            } else {
              throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
            }
          }
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.sv(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.mh(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.gw_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).qe = function () {
    return this.gw_1;
  };
  protoOf(ULongSerializer).hw = function (encoder, value) {
    var tmp = encoder.pi(this.gw_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.ki(tmp$ret$0);
  };
  protoOf(ULongSerializer).re = function (encoder, value) {
    return this.hw(encoder, value instanceof ULong ? value.wd_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).iw = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.ih(this.gw_1).dh();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).se = function (decoder) {
    return new ULong(this.iw(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.jw_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).qe = function () {
    return this.jw_1;
  };
  protoOf(UIntSerializer).kw = function (encoder, value) {
    var tmp = encoder.pi(this.jw_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.ji(tmp$ret$0);
  };
  protoOf(UIntSerializer).re = function (encoder, value) {
    return this.kw(encoder, value instanceof UInt ? value.kd_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).lw = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.ih(this.jw_1).ch();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).se = function (decoder) {
    return new UInt(this.lw(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.mw_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).qe = function () {
    return this.mw_1;
  };
  protoOf(UShortSerializer).nw = function (encoder, value) {
    var tmp = encoder.pi(this.mw_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.ii(tmp$ret$0);
  };
  protoOf(UShortSerializer).re = function (encoder, value) {
    return this.nw(encoder, value instanceof UShort ? value.ie_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).ow = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.ih(this.mw_1).bh();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).se = function (decoder) {
    return new UShort(this.ow(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.pw_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).qe = function () {
    return this.pw_1;
  };
  protoOf(UByteSerializer).qw = function (encoder, value) {
    var tmp = encoder.pi(this.pw_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.hi(tmp$ret$0);
  };
  protoOf(UByteSerializer).re = function (encoder, value) {
    return this.qw(encoder, value instanceof UByte ? value.yc_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).rw = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.ih(this.pw_1).ah();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).se = function (decoder) {
    return new UByte(this.rw(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).lf = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.kf(kClass, typeArgumentsSerializers) : $super.kf.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.tw_1 = class2ContextualFactory;
    this.uw_1 = polyBase2Serializers;
    this.vw_1 = polyBase2DefaultSerializerProvider;
    this.ww_1 = polyBase2NamedSerializers;
    this.xw_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).hj = function (baseClass, value) {
    if (!baseClass.b5(value))
      return null;
    var tmp0_safe_receiver = this.uw_1.z1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.vw_1.z1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).gj = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.ww_1.z1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, Map) ? tmp0_safe_receiver : THROW_CCE()).z1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.xw_1.z1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).kf = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.tw_1.z1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yw(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).sw = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.tw_1.r1().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.s();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.t1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.bx_1;
        collector.cx(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.ax(kclass, serial.zw_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.uw_1.r1().p();
    while (tmp0_iterator_0.q()) {
      var element_0 = tmp0_iterator_0.s();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.s1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.t1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.r1().p();
      while (tmp0_iterator_1.q()) {
        var element_1 = tmp0_iterator_1.s();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.s1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.t1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.dx(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.vw_1.r1().p();
    while (tmp0_iterator_2.q()) {
      var element_2 = tmp0_iterator_2.s();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.s1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.t1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.ex(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.xw_1.r1().p();
    while (tmp0_iterator_3.q()) {
      var element_3 = tmp0_iterator_3.s();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.s1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.t1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.fx(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.gx_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.gx_1.equals(tmp0_other_with_cast.gx_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.gx_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.gx_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().r5()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().y5());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.bp(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.hx_1 = $factory;
  }
  protoOf(createCache$1).mf = function (key) {
    return this.hx_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.ix_1 = $factory;
  }
  protoOf(createParametrizedCache$1).nf = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var value = this.ix_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).of = get_isNullable;
  protoOf(SerialDescriptorImpl).vf = get_isInline;
  protoOf(AbstractDecoder).yh = decodeSerializableElement$default;
  protoOf(AbstractDecoder).kh = decodeSerializableValue;
  protoOf(AbstractDecoder).ai = decodeSequentially;
  protoOf(AbstractDecoder).ci = decodeCollectionSize;
  protoOf(AbstractEncoder).cj = encodeNotNullMark;
  protoOf(AbstractEncoder).dj = beginCollection;
  protoOf(AbstractEncoder).bj = encodeSerializableValue;
  protoOf(ListLikeDescriptor).of = get_isNullable;
  protoOf(ListLikeDescriptor).vf = get_isInline;
  protoOf(ListLikeDescriptor).tf = get_annotations;
  protoOf(MapLikeDescriptor).of = get_isNullable;
  protoOf(MapLikeDescriptor).vf = get_isInline;
  protoOf(MapLikeDescriptor).tf = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).of = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).vf = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).po = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).of = get_isNullable;
  protoOf(NothingSerialDescriptor).vf = get_isInline;
  protoOf(NothingSerialDescriptor).tf = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).of = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).vf = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).tf = get_annotations;
  protoOf(TaggedDecoder).yh = decodeSerializableElement$default;
  protoOf(TaggedDecoder).kh = decodeSerializableValue;
  protoOf(TaggedDecoder).ai = decodeSequentially;
  protoOf(TaggedDecoder).ci = decodeCollectionSize;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = SEALED_getInstance;
  _.$_$.c = STRING_getInstance;
  _.$_$.d = CONTEXTUAL_getInstance;
  _.$_$.e = ENUM_getInstance;
  _.$_$.f = CLASS_getInstance;
  _.$_$.g = LIST_getInstance;
  _.$_$.h = MAP_getInstance;
  _.$_$.i = OBJECT_getInstance;
  _.$_$.j = Companion_instance_0;
  _.$_$.k = ListSerializer;
  _.$_$.l = MapSerializer;
  _.$_$.m = serializer_0;
  _.$_$.n = serializer_9;
  _.$_$.o = serializer_7;
  _.$_$.p = serializer_11;
  _.$_$.q = serializer_5;
  _.$_$.r = PolymorphicKind;
  _.$_$.s = PrimitiveKind;
  _.$_$.t = PrimitiveSerialDescriptor;
  _.$_$.u = get_annotations;
  _.$_$.v = get_isInline;
  _.$_$.w = get_isNullable;
  _.$_$.x = SerialDescriptor;
  _.$_$.y = ENUM;
  _.$_$.z = buildSerialDescriptor;
  _.$_$.a1 = getContextualDescriptor;
  _.$_$.b1 = AbstractDecoder;
  _.$_$.c1 = AbstractEncoder;
  _.$_$.d1 = CompositeDecoder;
  _.$_$.e1 = Decoder;
  _.$_$.f1 = Encoder;
  _.$_$.g1 = AbstractPolymorphicSerializer;
  _.$_$.h1 = ElementMarker;
  _.$_$.i1 = InlinePrimitiveDescriptor;
  _.$_$.j1 = NamedValueDecoder;
  _.$_$.k1 = SerializerFactory;
  _.$_$.l1 = jsonCachedSerialNames;
  _.$_$.m1 = EmptySerializersModule_0;
  _.$_$.n1 = contextual;
  _.$_$.o1 = SerializersModuleCollector;
  _.$_$.p1 = DeserializationStrategy;
  _.$_$.q1 = KSerializer;
  _.$_$.r1 = MissingFieldException;
  _.$_$.s1 = SealedClassSerializer;
  _.$_$.t1 = SerializationException;
  _.$_$.u1 = SerializationStrategy;
  _.$_$.v1 = findPolymorphicSerializer_0;
  _.$_$.w1 = findPolymorphicSerializer;
  _.$_$.x1 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
