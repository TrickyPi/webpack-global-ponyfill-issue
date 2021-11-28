const fs = require('fs')
fs.mkdirSync('node_modules/is-global-module')
fs.writeFileSync('node_modules/is-global-module/package.json', `
{
    "name": "is-global-module",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "type": "module"
}
`)
fs.writeFileSync('node_modules/is-global-module/index.js', `
const global$1 = global
export default global$1
`)