const {src, dest, watch, series, parallel} = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const cleanCSS = require('gulp-clean-css');
const imagemin = require("gulp-imagemin");
var browserSync = require('browser-sync').create();

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
        .pipe(browserSync.stream())
}

// Minifiera och sammanslår JS
function minifyJS() {
    return src(files.js)
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(dest('pub/js'))
        .pipe(browserSync.stream())
}

// Minifiera och sammanslå CSS
function minifyCSS() {
    return src(files.css)
    .pipe(concat("styles.css"))
    .pipe(cleanCSS())
    .pipe(dest('pub/css'))
    .pipe(browserSync.stream())
}

// Minifiera bilder, sänker kvalitén på dem
function minifyIMGS() {
    return src(files.imgs)
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 50, progressive: true}),
        imagemin.optipng({optimizationLevel: 2})
    ]))
    .pipe(dest('pub/imgs'))
    .pipe(browserSync.stream())
}

// Watchtask som kollar efter förändringar
function watchTask() {
    browserSync.init({
        server: {
            baseDir: "./pub"
        }
    });

    // Watch tasks för varje filformat istället för alla på samma gång
    watch([files.imgs], minifyIMGS);
    watch([files.html], copyhtml);
    watch([files.js], minifyJS);
    watch([files.css], minifyCSS);
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