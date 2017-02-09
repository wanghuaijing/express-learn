/**
 * Created by whj57 on 2017/1/13.
 */
let config = {
    development:{
        port:4000,
        file_name:'bundle.js',
        public_path:'/',
        file:'public',
        hash:true,
        file_name_hash:'bundle.js'
    },
    port:3001,
    client:'react',
    entry:'./react/index.js',
    env:process.env.NODE_ENV === 'production'?'production':'development',
    resolve_root:['./myapp','./myapp/web'],

    production:{
        file_name:'[name].[chunkhash].js',
        public_path:'./',
        file:'dist'
    }
};
module.exports = config;