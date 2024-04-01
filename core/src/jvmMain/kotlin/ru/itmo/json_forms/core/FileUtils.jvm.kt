package ru.itmo.json_forms.core

import java.io.File

actual object FileUtils {
    actual fun readFile(path: String): String {
        return File(path).readText()
    }
}
