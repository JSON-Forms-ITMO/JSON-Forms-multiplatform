package ru.itmo.json_forms.core

import ru.itmo.json_forms.core.document.Document

class AdapterController {

    fun startAdapterWith(document: Document, adapter: AbstractAdapter) {
        adapter.init()
        adapter.renderJson(document.root)
        adapter.onEnd()
    }

}
