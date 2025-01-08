const packageInfo = require('./package.json')
const Timestamp = new Date().getTime()

module.exports = {
    // devServer: {
    //     port: 8080,
    //     host: "0.0.0.0",
    //     https: false,
    //     open: true
    // },
    devServer: {
        port: 8080,
        host: '0.0.0.0', // 允许局域网内访问
        proxy: {
            '/api': {
                target: 'https://brbr.games/', // 确保 target 是通过 VPN 访问的
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": "/api"
                }
            }
        }
    },
    outputDir: "dist",
    productionSourceMap: false,
    filenameHashing: false,
    configureWebpack: {
        output: {
            filename: `js/[name].prod-${packageInfo.version}.${Timestamp}.js`,
            chunkFilename: `js/[name].prod-${packageInfo.version}.${Timestamp}.js`
        }
    },
    chainWebpack: (config) => {
        config.plugins.delete('optimize-css')
    },
    lintOnSave: false,
    // PWA 配置
    pwa: {
        name: 'CKGAMES', // 替换成你的应用名称
        themeColor: '#000000',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxOptions: {
            skipWaiting: true,
            clientsClaim: true,
        },
        iconPaths: {
            favicon32: '', // 禁用 32x32 favicon
            favicon16: '', // 禁用 16x16 favicon
            appleTouchIcon: '', // 禁用 Apple touch 图标
            maskIcon: '', // 禁用 mask icon
            msTileImage: '' // 禁用 Windows tile icon
        },
        // manifest.json 文件的配置
        manifestOptions: {
            background_color: 'black',
            name: "CKGAMES",
            short_name: "CKGAMES",
            start_url: "/",
            scope: "/",
            orientation: "portrait",
            display: "standalone",
        }
    }
}