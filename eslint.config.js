import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
    features: {
        stylistic: {
            commaDangle: 'always-multiline',
        },
        tooling: true,
    },
})
    .override('nuxt/typescript/rules', {
        rules: {
            'curly': [ 'error', 'all' ],
            'dot-notation': 'error',
            'no-lonely-if': 'error',
            'no-useless-rename': 'error',
            'object-shorthand': 'error',
            'prefer-const': [ 'error', { destructuring: 'any', ignoreReadBeforeAssign: false } ],
            'require-await': 'error',
            'semi': [ 'error', 'never' ],
            'array-bracket-newline': [ 'error', { multiline: true, minItems: 3 } ],
            'array-element-newline': 'off',
            'array-bracket-spacing': [ 'error', 'always', { singleValue: false } ],

            '@typescript-eslint/ban-ts-comment': [
                'error',
                {
                    'ts-expect-error': 'allow-with-description',
                    'ts-ignore': true,
                },
            ],
            '@typescript-eslint/no-dynamic-delete': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                    varsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/triple-slash-reference': 'off',
            '@typescript-eslint/unified-signatures': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-invalid-void-type': 'off',
        },
    })

    .override('nuxt/vue/rules', {
        rules: {
            'vue/html-indent': [ 'error', 4 ],
            // 'vue/script-indent': [ 'error', 4, { baseIndent: 0 } ],
            'vue/multi-word-component-names': 'off',
        },
    })

    .override('nuxt/stylistic', {
        rules: {
            '@stylistic/brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
            '@stylistic/indent-binary-ops': 'off',
            '@stylistic/max-statements-per-line': 'off',
            '@stylistic/operator-linebreak': 'off',
            '@stylistic/quote-props': [ 'error', 'consistent' ],
            '@stylistic/space-before-function-paren': [ 'error', 'always' ],
            '@stylistic/indent': [ 'error', 4 ],
            '@stylistic/array-bracket-spacing': [ 'error', 'always', { singleValue: false } ],
            // '@stylistic/max-len': [ 'error', { code: 200, tabWidth: 4 } ],
        },
    })
