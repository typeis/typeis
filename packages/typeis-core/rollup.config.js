import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript'
import uglify from 'rollup-plugin-uglify'

const pkg = require('./package.json')

export default {
  input: `src/index.ts`,
  output: [
    {
      file: 'dist/typeis.core.js',
      format: 'umd',
      name: 'Typeis',
      sourcemap: true,
    },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    typescript(),
    commonjs(),
    sourceMaps(),
    uglify()
  ],
}