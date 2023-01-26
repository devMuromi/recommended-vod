module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "editor.fontFamily": "D2Coding, Consolas, 'Courier New', monospace",
    "workbench.colorTheme": "Default Light+",
    "svelte.plugin.svelte.note-new-transformation": false,
    "python.formatting.provider": "black",
    "[python]": {
        "editor.defaultFormatter": "ms-python.black-formatter",
        "editor.formatOnType": true
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[svelte]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "C_Cpp.clang_format_style": "{ IndentWidth: 4, ColumnLimit: 80 }",
    "C_Cpp.clang_format_fallbackStyle": "Google",
    "editor.inlineSuggest.enabled": true,
    "editor.minimap.enabled": false,
    "python.linting.pylintEnabled": true,
    "python.languageServer": "Pylance",
    "prettier.printWidth": 256,
    "prettier.tabWidth": 4,
    "editor.formatOnSave": true,
    "terminal.integrated.defaultProfile.windows": "Command Prompt"
},
};
