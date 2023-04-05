module.exports = {
    extends: [ // then, enable whichever type-aware rules you want to use
        'plugin:svelte/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser', // add the TypeScript parser
    plugins: [
        'svelte',
        '@typescript-eslint' // add the TypeScript plugin
    ],
    overrides: [ // this stays the same
        {
            files: ['*.svelte'],
            // processor: 'svelte/svelte',
            parser: 'svelte-eslint-parser',
            // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
            parserOptions: {
                parser: '@typescript-eslint/parser',
            }
        },
    ],

    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017,
        // project: "path/to/your/tsconfig.json",
        extraFileExtensions: ['.svelte'], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    // settings: {
    //     'svelte3/typescript': true,
    //     'svelte3/compiler-options': false
    // },
    rules: {
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'prefer-const': [
            'error',
            {
                'destructuring': 'all'
            }
        ],
        // 'max-len': ['error', { 'code': 100 }],
        // "@typescript-eslint/no-explicit-any": "off",
        'no-multi-spaces': ['error', {
            'ignoreEOLComments': true
        }],
        'no-multiple-empty-lines': ['error', { 'max': 2 }],
        'svelte/valid-compile': 'off',
        'indent': ['error', 4],
        'svelte/indent': [
            'error',
            {
                'indent': 4,
                'ignoredNodes': [],
                'switchCase': 1,
                'alignAttributesVertically': false
            }
        ],
        'svelte/prefer-style-directive':'error',
        'svelte/html-self-closing':'error',
        'svelte/prefer-class-directive':'error',
        'svelte/html-closing-bracket-spacing':'error',
        'svelte/shorthand-directive':'error'
    }
}
