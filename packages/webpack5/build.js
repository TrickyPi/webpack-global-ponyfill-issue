const path = require('path')
const webpack = require('webpack')
webpack({
    mode: 'none',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        library: {
            name: 'bundle',
            type: 'umd',
        },
        filename: 'bundle.js',
    }
}, (err, stats) => {
    // console.log(stats.toJson().modules)
})