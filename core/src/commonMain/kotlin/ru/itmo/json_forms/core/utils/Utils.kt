package ru.itmo.json_forms.core.utils

import kotlin.math.floor
import kotlin.random.Random

object Utils {

    fun generateUUID(): String {
        val s4: () -> String = {
            floor((1 + Random.nextDouble()) * 0x10000).toString().substring(1);
        }
        return (s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4())
    }

}