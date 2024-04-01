package ru.itmo.json_forms.core

expect object FileUtils {
    fun readFile(path: String): String
}
