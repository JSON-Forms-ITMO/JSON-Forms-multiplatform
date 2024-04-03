package ru.itmo.hson_forms.intellij

import com.intellij.openapi.editor.EditorFactory
import com.intellij.openapi.editor.EditorKind
import com.intellij.openapi.fileEditor.*
import com.intellij.openapi.fileEditor.impl.JComponentFileEditor
import com.intellij.openapi.fileEditor.impl.text.TextEditorProvider
import com.intellij.openapi.project.DumbAware
import com.intellij.openapi.project.Project
import com.intellij.openapi.vfs.VirtualFile

class JsonEditorProvider : FileEditorProvider, DumbAware {
    override fun accept(project: Project, file: VirtualFile): Boolean {
        return file.extension == "json"
    }

    override fun createEditor(project: Project, file: VirtualFile): FileEditor {
        val jsonEditorPanel = JsonEditorComponent()

        val editorFactory = EditorFactory.getInstance()
        val fileDocumentManager = FileDocumentManager.getInstance()
        val jsonDocument = fileDocumentManager.getDocument(file) ?: error("can't get document")

        val jsonEditor = editorFactory.createEditor(
            jsonDocument,
            project,
            file,
            false,
            EditorKind.MAIN_EDITOR
        )

        val textEditorProvider = TextEditorProvider.getInstance()
        val jsonTextEditor = textEditorProvider.getTextEditor(jsonEditor)

        return TextEditorWithPreview(jsonTextEditor, JComponentFileEditor(file, jsonEditorPanel))
    }

    override fun getEditorTypeId(): String {
        return this::class.simpleName!!
    }

    override fun getPolicy(): FileEditorPolicy {
        return FileEditorPolicy.HIDE_DEFAULT_EDITOR
    }
}
