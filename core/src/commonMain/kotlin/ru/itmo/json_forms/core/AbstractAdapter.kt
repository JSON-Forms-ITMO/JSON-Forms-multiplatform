package ru.itmo.json_forms.core

import ru.itmo.json_forms.core.document.*
import ru.itmo.json_forms.core.schema.*

abstract class AbstractAdapter {
    abstract fun init()
    abstract fun renderJson(root: Element<DataType>)
    abstract fun onEnd()
    abstract fun getContent(): String

}
