# Nette for Visual Studio Code

Advanced Nette and tooling support for Visual Studio Code.

## Features

- Language server and syntax highlighting for Latte
- Latte snippets
- Emmet support
- Neon syntax highlighting
- Tailwind CSS IntelliSense support

## User Settings

Open `Preferences` -> `Settings`

```json
"emmet.triggerExpansionOnTab": true,
"latte.format.enable": true,
```

Enable Tailwind CSS IntelliSense in Latte files:

```json
"tailwindCSS.includeLanguages": {
    "latte": "html"
}
```

Specific settings for Latte:

```json
"[latte]": {
    "editor.autoClosingBrackets": "always"
},
```

## Disclaimer

Franken UI is an independent project and is in no way affiliated with Nette.

## Contact

Please file any [issues](https://github.com/franken-ui/nette-for-vscode/issues) or if you have any suggestions, please reach out via [email](reden@franken-ui.dev).

## Credits

Thanks to [onecentlin](https://github.com/onecentlin) for providing the Language Server for Blade, which was used as the base of this project.

## License

Licensed under the [MIT license](https://github.com/franken-ui/nette-for-vscode/blob/master/LICENSE.md).