var dest = "./build"; // Production dir
var src = "./src"; // Development dir
var stylesprep = "scss";

var paths = {
    src: {
        html: 'src/*.pug',
        pug: ['src/**/*.pug', '!src/components-collection/**/*.pug'],
        css: 'src/main.css',
        stylesLayout: 'src/styles/layout',
        stylesComponents: 'src/styles/components',
        concatStyles: 'src/styles',
        styles: 'src/styles/main.' + stylesprep,
        jsVendor: 'src/js/vendor.js',
        jsApp: 'src/js/app.js',
        jsLegacy: 'src/js/legacy.js',
        fonts: ['src/fonts/**/*.*'],
        images: ['src/img/**/*.*', '!src/img/sprite/**/*.*', '!src/img/sprite@2x/**/*.*', '!src/img/svg/*.svg'],
        webp: ['src/img/*.jpg', 'src/img/*.png', '!src/img/sprite.png', '!src/img/sprite@2x.png'],
        sprites: ['src/img/sprite/**/*.png', 'src/img/sprite@2x/**/*.png'],
        styleSprites: 'src/styles/base',
        svg: 'src/img/svg/*.svg',
        favicons: 'src/favicons/*'
    },

    dest: { 
        html: dest,
        pug: dest,
        css: dest + '/css',
        styles: dest + '/css',
        jsVendor: dest + '/js',
        jsApp: dest + '/js',
        jsLegacy: dest + '/js',
        fonts: dest + '/fonts',
        images: dest + '/img',
        sprites: 'src/img',
        svgSprite: 'src/js/partials',
        favicons: dest + '/favicons'
    },

    watch: {
        styles: ['src/styles/**/*.' + stylesprep, '!src/styles/partials/_sprites.' + stylesprep, '!src/styles/_layout.' + stylesprep, '!src/styles/_components.' + stylesprep],
        js: 'src/js/**/*.js',
        img: ['src/img/**/*.*', '!src/img/sprite.png', '!src/img/sprite@2x.png'],
        svg: 'src/img/svg/*.svg',
        pug: 'src/**/*.pug',
        fonts: ['src/fonts/**/*.*']
    },
};

module.exports = {

    browsersync: {
        server: {
            baseDir: dest
        },
        tunnel: false,
        open: "local",
        host: 'localhost',
        port: 666,
        logPrefix: "webserver"
    },

    html: {
        src: paths.src.html,
        dest: paths.dest.html
    },

    pug: {
        src: paths.src.pug,
        dest: paths.dest.pug
    },

    htmlPrettify: {
        'unformatted': [ 'pre', 'code', 'textarea' ],
        'indent_with_tabs': true,
        'preserve_newlines': true,
        'brace_style': 'expand',
        'end_with_newline': true
    },

    styles: {
        src: paths.src.styles,
        dest: paths.dest.styles,
        stylesLayout: paths.src.stylesLayout,
        stylesComponents: paths.src.stylesComponents,
        concatStyles: paths.src.concatStyles,
        prep: "scss"
    },

    stylelint: {
        src: paths.src.stylelint
    },

    postcss: [
            // https://github.com/jonathantneal/postcss-normalize - добавляем normalize.css
            require('postcss-normalize'),
            // https://github.com/yisibl/postcss-unprefix - удаляем все префиксы
            require('postcss-unprefix'),
            // https://github.com/10up/flexibility - begin with -js-display: ie flex fallback
            // require('postcss-flexibility'), 
            // https://github.com/bfred-it/object-fit-images - add object-fit - ie fallback
            // require('postcss-object-fit-images'),
    ],

    js: {
        src: {
            vendor: paths.src.jsVendor,
            app: paths.src.jsApp
        },
        dest: {
            vendor: paths.dest.jsVendor,
            app: paths.dest.jsApp
        },
    },

    jsLegacy: {
        src: paths.src.jsLegacy,
        dest: paths.dest.jsLegacy
    },

    images: {
        src: paths.src.images,
        dest: paths.dest.images
    },

    webp: {
        src: paths.src.webp,
        dest: paths.dest.webp
    },

    sprites: {
        src: paths.src.sprites,
        src2x: paths.src.sprites2x,
        dest: {
            css: paths.src.styleSprites,
            img: paths.dest.sprites,
        },
        dest2x: {
            css: paths.src.styleSprites,
            img: paths.dest.sprites2x,
        },
        options: {
            retinaSrcFilter: 'src/img/sprite@2x/**/*@2x.png',
            imgName: 'sprite.png',
            imgPath: '../img/sprite.png',
            retinaImgName: 'sprite@2x.png',
            retinaImgPath: '../img/sprite@2x.png',
            cssName: '_sprites.' + stylesprep,
            cssTemplate: 'gulp/templates/_sprite-template.' + stylesprep,
            algorithm: 'top-down',
            padding: 10,
            // engine: 'pngsmith'
        }
    },

    svg: {
        src: paths.src.svg,
        dest: paths.dest.svg
    },

    iconfont: {
        options: {
            fontName: 'iconfont', // required
            prependUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
            timestamp: Math.round(Date.now() / 1000), // recommended to get consistent builds when watching files
            // If some font glyphs aren't converted properly you should add the normalize:true option and a fontHeight greater than 1000 (fontHeight: 1001).
            normalize: true,
            fontHeight: 1024,
        }
    },

    iconfontCss: {
        options: {
            fontName: 'iconfont',
            path: 'gulp/templates/_iconfont.' + stylesprep,
            targetPath: '../../src/styles/base/_iconfont.' + stylesprep,
            fontPath: '../fonts/'
        }
    },

    svgSprite: {
        src: paths.src.svgSprite,
        dest: paths.dest.svgSprite
    },

    favicons: {
        src: paths.src.favicons,
        dest: paths.dest.favicons
    },

    fonts: {
        src: paths.src.fonts,
        dest: paths.dest.fonts
    },

    watch: {
        styles: paths.watch.styles,
        js: paths.watch.js,
        img: paths.watch.img,
        svg: paths.watch.svg,
        iconfont: paths.watch.svg,
        pug: paths.watch.pug,
    },

    // https://habrahabr.ru/post/259225
    // https://gist.github.com/a1ip/d6f25c31dacb3b96c8cc
    // Wrap gulp streams into fail-safe function for better error reporting
    wrapPipe: function(taskFn) {
        return function(done) {
            var onSuccess = function() {
                done();
            };
            var onError = function(err) {
                done(err);
            }
            var outStream = taskFn(onSuccess, onError);
            if(outStream && typeof outStream.on === 'function') {
                outStream.on('end', onSuccess);
            }
        }
    }
};

// https://www.mikestreety.co.uk/blog/advanced-gulp-file
// https://makina-corpus.com/blog/metier/2015/make-your-gulp-modular
// https://www.freshconsulting.com/how-to-organize-your-gulp-js-development-builds-for-multiple-environments
