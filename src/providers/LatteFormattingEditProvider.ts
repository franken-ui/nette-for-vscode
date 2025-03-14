import * as vscode from "vscode";
import * as html from "vscode-html-languageservice";
import * as lst from "vscode-languageserver-textdocument";
import {
    LatteFormatter,
    ILatteFormatterOptions,
} from "../services/LatteFormatter";

const service = html.getLanguageService();

export class LatteFormattingEditProvider
    implements
        vscode.DocumentFormattingEditProvider,
        vscode.DocumentRangeFormattingEditProvider
{
    formatterOptions: ILatteFormatterOptions;

    provideDocumentFormattingEdits(
        document: vscode.TextDocument,
        options: vscode.FormattingOptions
    ): vscode.TextEdit[] {
        let range = new vscode.Range(
            new vscode.Position(0, 0),
            new vscode.Position(document.lineCount - 1, Number.MAX_VALUE)
        );
        return this.provideFormattingEdits(
            document,
            document.validateRange(range),
            options
        );
    }

    provideDocumentRangeFormattingEdits(
        document: vscode.TextDocument,
        range: vscode.Range,
        options: vscode.FormattingOptions
    ): vscode.TextEdit[] {
        return this.provideFormattingEdits(document, range, options);
    }

    private provideFormattingEdits(
        document: vscode.TextDocument,
        range: vscode.Range,
        options: vscode.FormattingOptions
    ): vscode.TextEdit[] {
        this.formatterOptions = {
            tabSize: options.tabSize,
            insertSpaces: options.insertSpaces,
        };

        //  Mapping HTML format options
        let htmlFormatConfig = vscode.workspace.getConfiguration("html.format");
        Object.assign(options, htmlFormatConfig);

        // format as html
        let doc = lst.TextDocument.create(
            document.uri.fsPath,
            "html",
            1,
            document.getText()
        );
        let htmlTextEdit = service.format(doc, range, options);

        // format as latte
        let formatter = new LatteFormatter(this.formatterOptions);
        let latteText = formatter.format(htmlTextEdit[0].newText);

        return [vscode.TextEdit.replace(range, latteText)];
    }
}
