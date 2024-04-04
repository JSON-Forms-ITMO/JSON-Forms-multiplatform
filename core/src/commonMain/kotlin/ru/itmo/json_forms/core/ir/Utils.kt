package ru.itmo.json_forms.core.ir

import kotlin.js.JsExport

@JsExport
data class JMapEntry<K, V>(override val key: K, override val value: V) : Map.Entry<K, V> {

    // Getters for js lib
    fun getKey(): K {
        return key
    }
    fun getValue(): V {
        return value
    }

}


@JsExport
class JMap<T1, T2>(entries: Array<JMapEntry<T1, T2>>) : Map<T1, T2> {

    // K/JVM stuff
    @Suppress("NON_EXPORTABLE_TYPE")
    override val entries: Set<Map.Entry<T1, T2>> = entries.toSet()

    @Suppress("NON_EXPORTABLE_TYPE")
    override val keys: Set<T1> = entries.map { it.key }.toSet()

    @Suppress("NON_EXPORTABLE_TYPE")
    override val values: Collection<T2> = entries.map { it.value }.toSet()

    override val size: Int = entries.size

    override fun containsValue(value: T2): Boolean = value in values

    override fun containsKey(key: T1): Boolean = key in keys

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as JMap<*, *>

        return entries == other.entries
    }

    override fun get(key: T1): T2? {
        return entries.firstOrNull { it.key == key }?.value
    }

    override fun hashCode(): Int {
        return entries.hashCode()
    }

    @Suppress("ReplaceSizeZeroCheckWithIsEmpty")
    override fun isEmpty(): Boolean = size == 0

    // K/JS stuff

    val jsEntries = entries

    @Suppress("UNCHECKED_CAST")
    val jsKeys: Array<T1> = entries.map { it.key as Any }.toTypedArray() as Array<T1>

    @Suppress("UNCHECKED_CAST")
    val jsValues: Array<T2> = entries.map { it.value as Any }.toTypedArray() as Array<T2>
}

private fun <K, V> Map.Entry<K, V>.toJMapEntry(): JMapEntry<K, V> {
    return JMapEntry(this.key, this.value)
}

fun <K, V> Map<K, V>.toJMap(): JMap<K, V> {
    return JMap(this.entries.map { it.toJMapEntry() }.toTypedArray())
}
