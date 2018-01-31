import babel from 'rollup-plugin-babel';
// import eslint from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

export default {

  entry: 'bin/main.js',

  output: {
    file: 'dist/main.min.js',
    format: 'iife',
  },

  plugins: [

    (process.env.NODE_ENV === 'production' && uglify()),

    postcss({
      extensions: [ '.css' ],
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false, }),
        cssnano(),
      ],
    }),

    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),


    // eslint({
    //   exclude: [
    //     'src/styles/**',
    //   ]
    // }),

    babel({
      exclude: 'node_modules/**',
      presets: [
        ['env', { modules: false }]
      ],
      plugins: [
        'external-helpers'
      ]
    }),

  ],

  sourceMap: 'inline',
};
