module.exports = {
    //...
    module: {
        noParse: /jquery|lodash/,
    },
    optimization: {
        //...
        splitChunks: {
            chunks: 'all',
            minSize: 30000,         //字节 引入的文件大于30kb才进行分割
            minChunks: 1,           //模块至少使用次数
            automaticNameDelimiter: '~', //缓存组和生成文件名称之间的连接符
            name: true,
            cacheGroups: {
              vender: {
                name: 'vendor',
                test: /[\\/]node_modules[\\/]/,
                chunks: 'all',
                priority: 20          
              },
              react: {
                name: 'react',
                test: (module) => /react|redux/.test(module.context),
                chunks: 'initial',
                priority: 11
              },
              lodash: {
                name: 'lodash',
                test: (module) => /lodash/.test(module.context),
                chunks: 'initial',
                priority: 15 
              },
              antdm: {
                name: 'antd-mobile',
                test: (module) => /antd-mobile/.test(module.context),
                chunks: 'initial',
                priority: 12            
              }
            }
        }
    }
}