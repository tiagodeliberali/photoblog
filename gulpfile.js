var gulp = require('gulp');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('concat', function () {
    return gulp.src(['./app/app.module.js', 'app/**/*.js', './script/primary_load/functions.min.js', './script/primary_load/ngGallery.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./script/'));
});

gulp.task('concat2', function () {
    return gulp.src(['./script/secondary_load/slideshow-shortcode.js', './script/secondary_load/devicepx-jetpack.js', './script/secondary_load/flexslider.min.js'])
        .pipe(concat('secondary_load.js'))
        .pipe(gulp.dest('./script/'));
});

gulp.task('compress', function () {
    return gulp.src('./script/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./script'));
});

gulp.task('compress2', function () {
    return gulp.src('./script/secondary_load.js')
        .pipe(uglify())
        .pipe(gulp.dest('./script'));
});

gulp.task('uncss', function () {
    return gulp.src('./style/third_party/*.css')
        .pipe(concat('./style/main.css'))
        //.pipe(uncss({
        //    html: ['index.html', 'app/**/*.html']
        //}))
        .pipe(gulp.dest('.'));
});