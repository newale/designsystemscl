import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: {
    file: pkg.module,
    format: 'esm'
  },
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: [
        '**/__tests__/**'
      ],
      clean: true
    })
  ]
}