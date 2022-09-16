const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        // xxx
        proxy('/api', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }),
        // xxx
    )
}
