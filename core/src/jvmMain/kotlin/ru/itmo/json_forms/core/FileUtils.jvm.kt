package ru.itmo.json_forms.core

import java.io.File
import java.nio.file.Paths

actual object FileUtils {
    actual fun readFile(path: String): String {
        return File(path).readText()
    }
    actual fun cwd(): String {
        return Paths.get("").toAbsolutePath().toString()
    }
}
