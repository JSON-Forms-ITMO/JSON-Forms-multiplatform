package ru.itmo.json_forms.core

import java.util.UUID
object Utils {

    fun generateUUID(): String {
        return UUID.randomUUID().toString()
    }

}