var gulp = require('gulp');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('concat', function() {
    return gulp.src(['./app/app.module.js', 'app/**/*.js', './script/primary_load/ngGallery.js', './script/primary_load/angularjs-facebook-sdk.min.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./script/'));
});

gulp.task('concat-debug', function() {
    return gulp.src(['./app/app.module.js', 'app/**/*.js', './script/primary_load/ngGallery.js', './script/primary_load/angularjs-facebook-sdk.min.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./script/'));
});

gulp.task('css', function() {
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