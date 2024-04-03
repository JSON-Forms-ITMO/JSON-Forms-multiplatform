package ru.itmo.json_forms.core.document

// needed to write a number to json without quotes
internal class JsonNumber(private val v: String?) : Number() {
    override fun toByte() = throw NotImplementedError()
    override fun toDouble() = throw NotImplementedError()
    override fun toFloat() = throw NotImplementedError()
    override fun toInt() = throw NotImplementedError()
    override fun toLong() = throw NotImplementedError()
    override fun toShort() = throw NotImplementedError()

    override fun toString() = v.toString()
}