# https://gist.github.com/MrLeo/b7a72502cc55fcd99d25226be162235f

cat >.editorconfig<<EOF
# https://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
EOF

cat >.prettierrc<<EOF
{
  "printWidth": 150,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "rangeStart": 0,
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "vueIndentScriptAndStyle": false,
  "endOfLine": "auto",
  "embeddedLanguageFormatting": "auto"
}
EOF

cat >.prettierignore<<EOF
node_modules/
build/
dist/
docs/
package-lock.json
pnpm-lock.yaml
yarn.lock
*.md
EOF

cat >postcss.config.cjs<<EOF
module.exports = {
  plugins: {
    autoprefixer: {},
  },
}
EOF

cat >.browserslistrc<<EOF
Android >= 4
ios >= 8

> 1%
last 2 versions
not ie <= 10
EOF

cat >tsconfig.json<<EOF
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",

    "baseUrl": ".",
    // "rootDir": "src",
    "outDir": "./dist",
    // "allowJs": true,
    "pretty": true,
    "checkJs": true,
    "sourceMap": true,
    "skipLibCheck": true,
    "importHelpers": true,
    "noImplicitAny": false,
    "noUnusedLocals": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "noUnusedParameters": true,
    "strictFunctionTypes": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,

    // "types": ["@dcloudio/types"],

    "paths": {
      // "@/*": [ "./src/*" ],
      "types/*": ["types/*"],
    },

    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ],
  },
  // "include": [
  //   "**/*.ts",
  // ],
  "exclude": [
    "**/*.js",
    "tests/**/*",
    "node_modules",
    "dist",
    ".git",
  ]
}
EOF

cat >.eslintrc.cjs<<EOF
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
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
      rules: {
        // '@typescript-eslint/no-explicit-any': ['error'],
        // '@typescript-eslint/no-unused-vars': ['error'],
        // '@typescript-eslint/explicit-function-return-type': ['error'],
        // '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
  ],
}
EOF

cat >.eslintignore<<EOF
node_modules/
build/
dist/
docs/
package-lock.json
pnpm-lock.yaml
yarn.lock
*.md
EOF

cat >commitlint.config.cjs<<EOF
/** commit message 校验
 * [commitlint.config.js](https://lxb.notion.site/993f8e36ad6e410f88f74f01e52e306c)
 * [Commit Message Format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)
 *
 * <type>(<scope>): <short summary>
 *   │       │             │
 *   │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
 *   │       │
 *   │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
 *   │                          elements|forms|http|language-service|localize|platform-browser|
 *   │                          platform-browser-dynamic|platform-server|router|service-worker|
 *   │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
 *   │                          ngcc|ve
 *   │
 *   └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
 * <BLANK LINE>
 * <breaking change description + migration instructions>
 * <BLANK LINE>
 * <BLANK LINE>
 * - Fixes #<issue number>
 */
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build', // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
        'docs', // 文档更新
        'feat', // 新增功能
        'fix', // 修复bug
        'perf', // 性能优化
        'refactor', // 重构代码(既没有新增功能，也没有修复 bug)
        'style', // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
        'test', // 新增测试用例或是更新现有测试
        'revert', // 回滚某个更早之前的提交
        'chore', // 不属于以上类型的其他类型(日常事务)
        'release',
        'types',
      ],
    ],
  },
};
EOF

cat >.gitignore<<EOF
.DS_Store
node_modules/
unpackage/
dist/

# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# test
test/unit/coverage
test/e2e/reports
selenium-debug.log

# Editor directories and files
.project
.history
.idea
.vs
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
.settings
.git
.eslintcache
EOF

cat >.npmrc<<EOF
# https://pnpm.io/npmrc
# strict-peer-dependencies=false
# auto-install-peers=true
# shamefully-hoist=true
# registry=https://registry.npmjs.org/
# home=https://www.npmjs.org
EOF

git add . && git commit -m "build: add project config files"

# [Mrm - Codemods for your project config files](https://mrm.js.org/)

# TODO 修改 packages.json
# {
#   "scripts": {
#     "format": "prettier --loglevel warn --write \"**/*.{js,jsx,ts,tsx,vue,css,md}\"",
#     "posttest": "npm run format",
#     "lint": "eslint . --cache --fix --ext .js,.jsx,.ts,.tsx,.vue",
#     "pretest": "npm run lint"
#   }
# }

alias npx='pnpm dlx'

pnpm add --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin -w
pnpm add --save-dev lint-staged husky @commitlint/{cli,config-conventional} -w

npx mrm editorconfig --config:indent 2
npx mrm prettier --config:indent 2
# npx mrm eslint
# npx mrm typescript
npx mrm lint-staged

npx prettier --write .
npx eslint . --cache --fix --ext .js,.jsx,.ts,.tsx,.vue

npx husky install
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

git add . && git commit -m "build: update mrm config"

npx mrm readme
