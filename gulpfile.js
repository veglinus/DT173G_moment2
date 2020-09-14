const {src, dest, watch, series, parallel} = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const cleanCSS = require('gulp-clean-css');
const imagemin = require("gulp-imagemin");

// Filepaths
const files = {
    html: "src/**/*.html",
    css: "src/**/*.css",
    js: "src/**/*.js",
    imgs: "src/imgs/*"
}

// Kopierar över HTML filer
function copyhtml() {
    return src(files.html)
        .pipe(dest('pub'))
}

// Minifiera och sammanslår JS
function minifyJS() {
    return src(files.js)
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(dest('pub/js')
        )
}

// Minifiera och sammanslå CSS
function minifyCSS() {
    return src(files.css)
    .pipe(concat("styles.css"))
    .pipe(cleanCSS())
    .pipe(dest('pub/css')
    )
}

// Minifiera bilder, sänker kvalitén på dem
function minifyIMGS() {
    return src(files.imgs)
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 50, progressive: true}),
        imagemin.optipng({optimizationLevel: 2})
    ]))
    .pipe(dest('pub/imgs')
    )
}

// Watchtask som kollar efter förändringar
function watchTask() {
    watch([files.html, files.js, files.css], parallel(copyhtml, minifyJS, minifyCSS, minifyIMGS)
    );
}

// Default task
exports.default = series(
    parallel(copyhtml, minifyJS, minifyCSS, minifyIMGS),
    watchTask
)

exports.copyhtml = copyhtml;
exports.minifyJS = minifyJS;
exports.minifyCSS = minifyCSS;
exports.minifyIMGS = minifyIMGS;