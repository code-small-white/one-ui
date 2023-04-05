module.exports = {
    extends: [ 'plugin:svelte/recommended', ],
    parser: '@typescript-eslint/parser', // add the TypeScript parser
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            }
        }
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017,
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
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
        'no-unused-vars':'error',
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
