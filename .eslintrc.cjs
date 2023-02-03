module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parser: 'vue-eslint-parser',
  parserOptions: {
    // see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['vue', '@typescript-eslint'],
  extends: [
    // https://eslint.vuejs.org/user-guide/
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    // 'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
    // 'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability
    'plugin:@typescript-eslint/recommended',
    // 'standard',
    'prettier',
    'plugin:prettier/recommended',
  ],
  globals: {
    '': 'readonly',
    uni: 'readonly',
    jQuery: 'readonly',
  },
  rules: {
    indent: 'off', // 缩进2个空格：https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    quotes: 0, // [2, 'single'], //强制使用单引号
    semi: 0, // [2, 'never'], //强制不使用分号结尾
    eqeqeq: 1,
    'no-console': ['warn', { allow: ['error', 'info'] }], // 需使用ctx.log输出
    'no-case-declarations': 'off',
    'comma-dangle': ['error', 'always-multiline'], // 多行时结尾必须加逗号：https://eslint.org/docs/rules/comma-dangle
    'no-var': 'error', // 请不要再用var啦 🤣
    'prefer-promise-reject-errors': 'off', // 建议Promise.reject的reason使用Error对象：https://eslint.org/docs/rules/prefer-promise-reject-errors
    'import/no-webpack-loader-syntax': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-warning-comments': [1, { terms: ['fixme'], location: 'start' }], // 禁止注释中出现 FIXME
    'max-len': [1, { code: 150 }],
    'no-underscore-dangle': 0, // 下划线开头或结尾
    'no-bitwise': 0, // 位运算符
    'no-plusplus': 0, // 一元操作符 ++ 和 --
    'global-require': 0,
    'import/prefer-default-export': 0,
    'max-classes-per-file': 0,
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // 匿名函数和箭头函数括号前必须加空格，具名函数不需要：https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],

    // ------------------ Vue ------------------
    'vue/html-self-closing': 'off', // 与html规范不匹配
    'vue/multi-word-component-names': 'warn',

    // ------------------ TypeScript ------------------
    // '@typescript-eslint/explicit-function-return-type': 'off',
    /**
     * 类型定义的分隔符保持与JS对象一致：
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
     * https://typescript-eslint.io/rules/member-delimiter-style/
     */
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'none', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false },
        multilineDetection: 'last-member',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        // '@typescript-eslint/no-explicit-any': ['error'],
        // '@typescript-eslint/no-unused-vars': ['error'],
        // '@typescript-eslint/explicit-function-return-type': ['error'],
        // '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
  ],
}
