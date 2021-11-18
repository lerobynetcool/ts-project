import ts from 'rollup-plugin-ts'
// import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
// import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
const pkg = require('./package.json')
const pkgname = `${pkg.name}`.split('').map(c=>c=='-'?'':c).join('')

export default {
	input: `src/index.ts`,
	output: [
		{ file: `build/${pkg.name}.mjs`              , format: 'es'  , sourcemap: true },
		{ file: `build/${pkg.name}.js`, name: pkgname, format: 'iife', sourcemap: true },
	],
	// external: [], // external modules we don't want to include in the bundle (i.e.: 'lodash')
	// watch: { include: 'src/**', },
	plugins: [
		// commonjs(), // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
		resolve(), // node_modules resolution, use 'external' to exclude from bundle https://github.com/rollup/rollup-plugin-node-resolve#usage
		ts(), // Compile TypeScript files
		// terser(), // minify
		// sourceMaps(), // Resolve source maps to the original source
	],
}
