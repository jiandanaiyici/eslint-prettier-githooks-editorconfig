module.exports = {
  root: true,
  /** 指定环境: 参考 https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments */
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  /** 解析器: https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser */
  parser: '@typescript-eslint/parser',
  /** 解析器配置: https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options */
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // globals: {},
  /** 扩展插件: https://eslint.org/docs/user-guide/configuring/plugins#configuring-plugins */
  plugins: [
    '@typescript-eslint',
  ],
  /** 自定义规则: https://eslint.org/docs/user-guide/configuring/rules#configuring-rules */
  rules: {},
  /** 指定配置 */
  settings: {},
  // overrides: {
  //   files: [],
  //   rules: {},
  //   processor: '',
  // }
};
