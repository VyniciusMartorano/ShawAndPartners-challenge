module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Adicionado para TypeScript
  ],
  parser: '@typescript-eslint/parser', // Adicionado para TypeScript
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@typescript-eslint'], // Adicionado para TypeScript
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-unused-vars': ['error'], // Exemplo de regra TypeScript
    // Adicione outras regras específicas do TypeScript, se necessário
  },
};
