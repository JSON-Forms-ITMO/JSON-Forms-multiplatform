package ru.itmo.json_forms.core

import java.io.File
import java.nio.file.Paths

object FileUtils {
    fun readFile(path: String): String {
        return File(path).readText()
    }
    fun cwd(): String {
        return Paths.get("").toAbsolutePath().toString()
    }
}
