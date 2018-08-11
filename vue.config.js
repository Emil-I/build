// DOC https://cli.vuejs.org/config/#pages


module.exports = {

    baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',

    pages: {
        index: {
            // entry for the page
            entry: 'src/main.ts',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        admin: {
            // entry for the page
            entry: 'src/admin/main.ts',
            // the source template
            template: 'public/admin.html',
            // output as dist/admin.html
            filename: 'admin.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Admin Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'admin']
        }
    }

}