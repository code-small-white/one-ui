module.exports = {
    extends: ['plugin:svelte/recommended',],
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
        // 'no-unused-vars':'error',
        'no-multi-spaces': ['error', {
            'ignoreEOLComments': true
        }],
        'no-multiple-empty-lines': ['error', { 'max': 2 }],
        'indent': ['error', 4],

        'operator-linebreak': ['error', 'before', { 'overrides': { '=': 'none' } }],
        'space-infix-ops': 'error',
        // 三目运算符的问号和冒号两边要有空格
        // 小括号里面需要有空格
        'space-in-parens': [
            'error',
            'never'
        ],
        // 中括号里面不需要有空格
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        // 大括号内的首尾需要空格
        'object-curly-spacing': [
            'error',
            'always'
        ],
        // 逗号后面需要有空格
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        // 箭头函数前后需要空格
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ], // 分号后要求有一个空格，分号前不能有空格
        'template-tag-spacing': [
            'error',
            'never'
        ], // 模板字符串前后不能有空格
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ], // 函数括号前要求有一个空格，但是对于匿名函数要求没有空格，对于箭头函数要求有一个空格
        'space-unary-ops': [
            'error',
            {
                'words': true,
                'nonwords': false
            }
        ], // 一元操作符后面要求有一个空格
        'spaced-comment': [
            'error',
            'always',
            {
                'markers': [
                    '/'
                ]
            }
        ], // 注释前面要求有一个空格
        'keyword-spacing': 'error', // 关键字后面要求有一个空格

        // 'svelte/indent': [
        //     'error',
        //     {
        //         'indent': 4,
        //         'ignoredNodes': [],
        //         'switchCase': 1,
        //         'alignAttributesVertically': false
        //     }
        // ],
        'svelte/valid-compile': 'off',
        'svelte/prefer-style-directive':'error',
        'svelte/html-self-closing':'error',
        'svelte/prefer-class-directive':'error',
        'svelte/html-closing-bracket-spacing':'error',
        'svelte/shorthand-directive':'error'
    }
}
