const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: 'http://localhost'
    },
    outputDir: '../../public',
    indexPath: '../resources/views/app.blade.php'
});

