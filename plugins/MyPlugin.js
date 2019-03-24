const HtmlWebpackPlugin = require('html-webpack-plugin');

const pluginName = 'MyPlugin';

class MyPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, (compilation) => {
            console.log('The compiler is starting a new compilation...')

            // Staic Plugin interface |compilation |HOOK NAME | register listener 
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                pluginName, // <-- Set a meaningful name here for stacktraces
                (data, cb) => {
                    // Manipulate the content
                    data.html += 'The Magic Footer'
                    // Tell webpack to move on
                    cb(null, data)
                }
            )
        })
    }
}

module.exports = MyPlugin;