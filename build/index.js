var fs = require('fs')
var UglifyJS = require('uglify-js')

fs.writeFileSync('dist/typeis.bundle.js', UglifyJS.minify({
  'core': fs.readFileSync('packages/typeis-core/dist/typeis.core.js', 'utf8'),
  'bridge': fs.readFileSync('packages/typeis-bridge/dist/typeis.bridge.js', 'utf8'),
  'url': fs.readFileSync('packages/typeis-url/dist/typeis.url.js', 'utf8'),
}, {}).code, 'utf8')