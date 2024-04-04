type Nullable<T> = T | null | undefined
export declare namespace ru.itmo.json_forms.core.document {
    class Document {
        private constructor();
        get root(): ru.itmo.json_forms.core.document.Element<ru.itmo.json_forms.core.schema.DataType>;
        getJson(): string;
        toString(): string;
    }
}
export declare namespace ru.itmo.json_forms.core.document {
    interface DocumentVisitor<R> {
        visitDocument(document: ru.itmo.json_forms.core.document.Document): R;
        visit(element: ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>): R;
        visitUnresolved(element: ru.itmo.json_forms.core.document.UnresolvedElement): R;
        visitNull(element: ru.itmo.json_forms.core.document.NullElement): R;
        visitString(element: ru.itmo.json_forms.core.document.StringElement): R;
        visitNumber(element: ru.itmo.json_forms.core.document.NumberElement): R;
        visitInteger(element: ru.itmo.json_forms.core.document.IntegerElement): R;
        visitBoolean(element: ru.itmo.json_forms.core.document.BooleanElement): R;
        visitEnum(element: ru.itmo.json_forms.core.document.EnumElement): R;
        visitObject(element: ru.itmo.json_forms.core.document.ObjectElement): R;
        visitArray(element: ru.itmo.json_forms.core.document.ArrayElement): R;
        visitOptional(element: ru.itmo.json_forms.core.document.OptionalElement): R;
        readonly __doNotUseOrImplementIt: {
            readonly "ru.itmo.json_forms.core.document.DocumentVisitor": unique symbol;
        };
    }
}
export declare namespace ru.itmo.json_forms.core.document {
    abstract class Element<T extends ru.itmo.json_forms.core.schema.DataType> {
        protected constructor(type: T);
        get type(): T;
        toString(): string;
    }
    abstract class BasicElement<T extends ru.itmo.json_forms.core.schema.BasicType> extends ru.itmo.json_forms.core.document.Element<T> {
        protected constructor(type: T);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        toString(): string;
    }
    class UnresolvedElement extends ru.itmo.json_forms.core.document.Element<ru.itmo.json_forms.core.schema.DataType> {
        constructor(type: ru.itmo.json_forms.core.schema.DataType, untouched: any/* kotlinx.serialization.json.JsonElement */);
    }
    class NullElement extends ru.itmo.json_forms.core.document.BasicElement<ru.itmo.json_forms.core.schema.NullType> {
        constructor(type: ru.itmo.json_forms.core.schema.NullType);
    }
    class StringElement extends ru.itmo.json_forms.core.document.BasicElement<ru.itmo.json_forms.core.schema.StringType> {
        constructor(type: ru.itmo.json_forms.core.schema.StringType);
    }
    class NumberElement extends ru.itmo.json_forms.core.document.BasicElement<ru.itmo.json_forms.core.schema.NumberType> {
        constructor(type: ru.itmo.json_forms.core.schema.NumberType);
    }
    class IntegerElement extends ru.itmo.json_forms.core.document.BasicElement<ru.itmo.json_forms.core.schema.IntegerType> {
        constructor(type: ru.itmo.json_forms.core.schema.IntegerType);
    }
    class BooleanElement extends ru.itmo.json_forms.core.document.BasicElement<ru.itmo.json_forms.core.schema.BooleanType> {
        constructor(type: ru.itmo.json_forms.core.schema.BooleanType);
    }
    class EnumElement extends ru.itmo.json_forms.core.document.BasicElement<ru.itmo.json_forms.core.schema.EnumType> {
        constructor(type: ru.itmo.json_forms.core.schema.EnumType);
    }
    class ObjectElement extends ru.itmo.json_forms.core.document.Element<ru.itmo.json_forms.core.schema.ObjectType> {
        constructor(type: ru.itmo.json_forms.core.schema.ObjectType);
        getProperties(): ru.itmo.json_forms.core.ir.JMap<string, ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>>;
        addProperty(name: string, type: ru.itmo.json_forms.core.schema.DataType): ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>;
        removeProperty(name: string): Nullable<ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>>;
    }
    class ArrayElement extends ru.itmo.json_forms.core.document.Element<ru.itmo.json_forms.core.schema.ArrayType> {
        constructor(type: ru.itmo.json_forms.core.schema.ArrayType, items: Array<ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>>);
        items(): Array<ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>>;
        addItem(index?: number): ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>;
        removeItemAtIndex(index: number): void;
        removeItem(element: ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>): void;
    }
    class OptionalElement extends ru.itmo.json_forms.core.document.Element<ru.itmo.json_forms.core.schema.OptionalType> {
        constructor(type: ru.itmo.json_forms.core.schema.OptionalType, value: Nullable<ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>>);
        get(): Nullable<ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>>;
        put(): ru.itmo.json_forms.core.document.Element<any /*UnknownType **/>;
        none(): void;
    }
}
export declare namespace ru.itmo.json_forms.core.document {
    const JsonTreeBuilder: {
        build(json: string, schema: string, prettyPrintJson?: boolean): ru.itmo.json_forms.core.document.Document;
    };
}
export declare namespace ru.itmo.json_forms.core.ir {
    class JMapEntry<K, V> /* implements kotlin.collections.Map.Entry<K, V> */ {
        constructor(key: K, value: V);
        getKey(): K;
        getValue(): V;
        copy(key?: K, value?: V): ru.itmo.json_forms.core.ir.JMapEntry<K, V>;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class JMap<T1, T2> /* implements kotlin.collections.Map<T1, T2> */ {
        constructor(entries: Array<ru.itmo.json_forms.core.ir.JMapEntry<T1, T2>>);
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        get jsEntries(): Array<ru.itmo.json_forms.core.ir.JMapEntry<T1, T2>>;
        get jsKeys(): Array<T1>;
        get jsValues(): Array<T2>;
    }
}
export declare namespace ru.itmo.json_forms.core.schema {
    abstract class DataType {
        protected constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get defaultValue(): Nullable<string>;
        set defaultValue(value: Nullable<string>);
        get uniqId(): string;
        withTitle(title: Nullable<string>): ru.itmo.json_forms.core.schema.DataType;
        withDescription(description: Nullable<string>): ru.itmo.json_forms.core.schema.DataType;
        withDefaultValue(defaultValue: Nullable<string>): ru.itmo.json_forms.core.schema.DataType;
    }
    abstract class BasicType extends ru.itmo.json_forms.core.schema.DataType {
        protected constructor();
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        toString(): string;
    }
    class UnknownType extends ru.itmo.json_forms.core.schema.BasicType {
        constructor();
    }
    class NullType extends ru.itmo.json_forms.core.schema.BasicType {
        constructor();
    }
    class StringType extends ru.itmo.json_forms.core.schema.BasicType {
        constructor();
    }
    class NumberType extends ru.itmo.json_forms.core.schema.BasicType {
        constructor();
    }
    class IntegerType extends ru.itmo.json_forms.core.schema.BasicType {
        constructor();
    }
    class BooleanType extends ru.itmo.json_forms.core.schema.BasicType {
        constructor();
    }
    class VariantType extends ru.itmo.json_forms.core.schema.BasicType {
        constructor(tags: Array<ru.itmo.json_forms.core.schema.DataType>);
        get tags(): Array<ru.itmo.json_forms.core.schema.DataType>;
        toString(): string;
    }
    class EnumType extends ru.itmo.json_forms.core.schema.BasicType {
        constructor(values: Array<string>);
        get values(): Array<string>;
        toString(): string;
    }
    class OptionalType extends ru.itmo.json_forms.core.schema.DataType {
        constructor(someType: ru.itmo.json_forms.core.schema.DataType);
        get someType(): ru.itmo.json_forms.core.schema.DataType;
        toString(): string;
    }
    class ObjectType extends ru.itmo.json_forms.core.schema.DataType {
        constructor(properties: ru.itmo.json_forms.core.ir.JMap<string, ru.itmo.json_forms.core.schema.DataType>, required: Array<string>);
        get properties(): ru.itmo.json_forms.core.ir.JMap<string, ru.itmo.json_forms.core.schema.DataType>;
        get required(): Array<string>;
        get optionalProperties(): ru.itmo.json_forms.core.ir.JMap<string, ru.itmo.json_forms.core.schema.DataType>;
        get requiredProperties(): ru.itmo.json_forms.core.ir.JMap<string, ru.itmo.json_forms.core.schema.DataType>;
        toString(): string;
    }
    class ArrayType extends ru.itmo.json_forms.core.schema.DataType {
        constructor(prefixItems: Array<ru.itmo.json_forms.core.schema.DataType>, items: ru.itmo.json_forms.core.schema.DataType);
        get prefixItems(): Array<ru.itmo.json_forms.core.schema.DataType>;
        get items(): ru.itmo.json_forms.core.schema.DataType;
        toString(): string;
        copy(prefixItems?: Array<ru.itmo.json_forms.core.schema.DataType>, items?: ru.itmo.json_forms.core.schema.DataType): ru.itmo.json_forms.core.schema.ArrayType;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export as namespace JSON_Forms_core;