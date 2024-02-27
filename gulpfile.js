const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function imageCompiler() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function jsCompiler() {
    return gulp.src('./source/scripts/main.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function sassCompiler() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/styles'))

}

function dizOi(callback) {
    setTimeout(function() {
        console.log("Diz oi!")
        callback();
    }, 1000);
}

exports.default = dizOi
exports.sass = sassCompiler
exports.js = jsCompiler
exports.image  = imageCompiler