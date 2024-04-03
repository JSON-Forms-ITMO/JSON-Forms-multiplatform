package ru.itmo.hson_forms.intellij

import com.intellij.openapi.editor.Editor
import com.intellij.openapi.editor.EditorFactory
import com.intellij.openapi.editor.EditorKind
import com.intellij.openapi.editor.event.DocumentEvent
import com.intellij.openapi.editor.event.DocumentListener
import com.intellij.openapi.fileEditor.*
import com.intellij.openapi.fileEditor.impl.JComponentFileEditor
import com.intellij.openapi.fileEditor.impl.text.TextEditorProvider
import com.intellij.openapi.project.DumbAware
import com.intellij.openapi.project.Project
import com.intellij.openapi.vfs.VirtualFile
import com.intellij.openapi.vfs.impl.http.HttpVirtualFile
import com.intellij.psi.PsiManager
import com.jetbrains.jsonSchema.ide.JsonSchemaService
import java.io.BufferedInputStream
import java.net.URL

class JsonEditorProvider : FileEditorProvider, DumbAware {
    override fun accept(project: Project, file: VirtualFile): Boolean {
        if (file.extension != "json") {
            return false
        }

        val jsonSchemaService = JsonSchemaService.Impl.get(project)

        if (!jsonSchemaService.isApplicableToFile(file)) {
            return false
        }

        val schemaFiles = jsonSchemaService.getSchemaFilesForFile(file)
        return schemaFiles.isNotEmpty()
    }

    override fun createEditor(project: Project, file: VirtualFile): FileEditor {
        val editorFactory = EditorFactory.getInstance()
        val fileDocumentManager = FileDocumentManager.getInstance()
        val jsonDocument = fileDocumentManager.getDocument(file) ?: error("can't get document")

        val allocatedEditor = editorFactory.createEditor(
            jsonDocument,
            project,
            file,
            false,
            EditorKind.MAIN_EDITOR
        )

        val textEditorProvider = TextEditorProvider.getInstance()
        val jsonTextEditor = textEditorProvider.getTextEditor(allocatedEditor)

        val psiManager = PsiManager.getInstance(project)
        val psiFile = psiManager.findFile(file)

        val jsonSchemaContent = getJsonSchemaText(file, project)

        val jsonEditorPanel = JsonEditorComponent(psiFile!!, jsonSchemaContent)

        val jsonModificationListener = object : DocumentListener {
            override fun documentChanged(event: DocumentEvent) {
                jsonEditorPanel.updateUi()
            }
        }

        jsonDocument.addDocumentListener(jsonModificationListener)

        return TextEditorWithPreview(jsonTextEditor, JComponentFileEditor(file, jsonEditorPanel))
    }

    private fun getJsonSchemaText(file: VirtualFile, project: Project): String {
        val fileDocumentManager = FileDocumentManager.getInstance()

        val jsonSchemaService = JsonSchemaService.Impl.get(project)
        val schemaFiles = jsonSchemaService.getSchemaFilesForFile(file)
        val schemaVirtualFile = schemaFiles.first()

        if (schemaVirtualFile is HttpVirtualFile) {
            val inp = BufferedInputStream(URL(schemaVirtualFile.url).openStream())
            return inp.readAllBytes().decodeToString()
        }

        val schemaDocument = fileDocumentManager.getDocument(schemaVirtualFile)!!
        return schemaDocument.text
    }

    override fun getEditorTypeId(): String {
        return this::class.simpleName!!
    }

    override fun getPolicy(): FileEditorPolicy {
        return FileEditorPolicy.HIDE_DEFAULT_EDITOR
    }
}
