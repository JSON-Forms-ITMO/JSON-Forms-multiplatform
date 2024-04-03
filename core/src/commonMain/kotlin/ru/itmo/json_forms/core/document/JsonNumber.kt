package ru.itmo.json_forms.core.document

// needed to write a number to json without quotes
internal class JsonNumber(private val v: String?) : Number() {
    override fun toByte() = v?.toByte() ?: 0
    override fun toDouble() = v?.toDouble() ?: 0.0
    override fun toFloat() = v?.toFloat() ?: 0.0f
    override fun toInt() = v?.toInt() ?: 0
    override fun toLong() = v?.toLong() ?: 0L
    override fun toShort() = v?.toShort() ?: 0

    override fun toString() = v.toString()
}
