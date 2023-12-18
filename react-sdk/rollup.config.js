// rollup.config.js
const terser = require('@rollup/plugin-terser');
const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

module.exports = {
    input: 'src/index.tsx',
    output: {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true
    },
    external: ['react', 'react-dom'],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript(),
        terser()
    ],
};