export class LatteFormatter {
    private newLine: string = "\n";
    private indentPattern: string;

    constructor(options?: ILatteFormatterOptions) {
        options = options || {};

        // set default values for options
        options.tabSize = options.tabSize || 4;
        options.insertSpaces = options.insertSpaces ?? true;

        this.indentPattern = options.insertSpaces
            ? " ".repeat(options.tabSize)
            : "\t";
    }

    format(inputText: string): string {
        let inComment = false;
        let output = inputText;

        // fix #57 url extra space after formatting
        output = output.replace(/url\(\"(\s*)/g, 'url("');

        // return the formatted input text with trailing white spaces removed
        return output.trim();
    }
}

export interface ILatteFormatterOptions {
    insertSpaces?: boolean;
    tabSize?: number;
}
