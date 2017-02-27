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
    client:'vue',
    entry:'./vue/index',
    env:process.env.NODE_ENV === 'production'?'production':'development',
    resolve_root:['./myapp','./myapp/web'],

    production:{
        file_name:'[name].[chunkhash].js',
        public_path:'./',
        file:'dist'
    },
    db:{
        port:27017,
        url:'localhost'
    },

};
module.exports = config;