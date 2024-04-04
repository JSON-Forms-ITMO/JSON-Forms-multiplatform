import * as jsonForms from 'json-forms-core';
import Document = jsonForms.ru.itmo.json_forms.core.document.Document;
import { HtmlAdapter } from './htmlAdapter';

export class AdapterController {

    public startAdapterWith(document: Document, adapter: HtmlAdapter) {
        adapter.init();
        adapter.renderJson(document.root);
        adapter.onEnd();
    }

}