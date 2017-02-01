/**
 * Created by whj57 on 2017/1/13.
 */
let config = {
    development:{
        port:3000,
        file_name:'bundle.js',
        public_path:'/',
        file:'public',
        hash:true,
        file_name_hash:'bundle.[hash].js'
    },
    client:'react',
    entry:'./react/index.js',
    env:process.env.NODE_ENV === 'production'?'production':'development',
    resolve_root:['./myapp'],

    production:{
        file_name:'[name].[chunkhash].js',
        public_path:'./',
        file:'dist'
    }
};
module.exports = config;