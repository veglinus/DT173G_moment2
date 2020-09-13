const {src, dest, watch, series, parallell} = require("gulp");

const files = {
    html: "src/**/*.html",
    css: "src/**/*.css",
    js: "src/**/*.js",
    sass: "src/**/*.scss",
}

function copyhtml() {
    return src(files.html)
        .pipe(dest('pub'))
}

function watchTask() {
    watch(files.html, copyhtml);
}

exports.copyhtml = copyhtml;
exports.default = series(
    copyhtml,
    watchTask
)