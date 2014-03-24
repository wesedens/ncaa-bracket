// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['js/jquery-2.1.0.min.js', 'js/bracket.js', 'js/test-one.js',
             'js/test-two.js'],
        css: ['css/bracket.css', 'css/test-one.css', 'css/test-two.css']
    },
    production: {
        js: ['js/scripts.min.js'],
        css: ['css/styles.min.css']
    }
}
