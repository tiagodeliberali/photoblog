var gulp = require('gulp');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('concat', function () {
    return gulp.src(['./app/app.module.js', 'app/**/*.js', './script/primary_load/functions.min.js', './script/primary_load/ngGallery.js', './script/secondary_load/slideshow-shortcode.js', './script/secondary_load/devicepx-jetpack.js', './script/secondary_load/flexslider.min.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./script/'));
});

gulp.task('uncss', function () {
    return gulp.src('./style/third_party/*.css')
        .pipe(concat('./style/main.css'))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        //.pipe(uncss({
        //    html: ['index.html', 'app/**/*.html']
        //}))
        .pipe(gulp.dest('.'));
});