var fs = require('fs')
var browserify = require('browserify')
browserify('./src/jsxFile.jsx')
  .transform('babelify', {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  })
  .bundle()
  .pipe(fs.createWriteStream('bundle.js'))
