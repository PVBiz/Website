import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores([
    'dist/',
    '.astro/',
    '.wrangler/',
    // Vendored or fixed-URL files served as-is.
    'public/fonts/',
    'public/img/',
  ]),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  {
    // Page and component scripts run in the browser.
    files: ['src/**/*.{ts,astro}', 'public/js/**/*.js'],
    languageOptions: { globals: { ...globals.browser } },
  },
  {
    // Hand-written ES5 scripts served as-is: unused catch bindings are the only way to write a catch there.
    files: ['public/js/**/*.js'],
    rules: { '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }] },
  },
  {
    // Build config runs in Node.
    files: ['astro.config.mjs', 'eslint.config.js'],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    // Cloudflare Pages Functions run in a Workers runtime.
    files: ['functions/**/*.js'],
    languageOptions: { globals: { ...globals.serviceworker } },
  },
  prettier
);
